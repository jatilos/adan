function aa() {
    return function () {}
}
function ba(e) {
    return function () {
        return this[e]
    }
}
function da(e, t) {
    var n = e.split("."),
        r = l;
    n[0] in r || !r.execScript || r.execScript("var " + n[0]);
    for (var i; n.length && (i = n.shift());) n.length || void 0 === t ? r = r[i] ? r[i] : r[i] = {} : r[i] = t
}
function ea(e) {
    e = e.split(".");
    for (var t = l, n; n = e.shift();) if (null != t[n]) t = t[n];
    else return null;
    return t
}
function fa() {}
function ha(e) {
    var t = typeof e;
    if ("object" == t) if (e) {
        if (e instanceof Array) return "array";
        if (e instanceof Object) return t;
        var n = Object.prototype.toString.call(e);
        if ("[object Window]" == n) return "object";
        if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
    } else return "null";
    else if ("function" == t && "undefined" == typeof e.call) return "object";
    return t
}
function ja(e) {
    return void 0 !== e
}
function ka(e) {
    return "array" == ha(e)
}
function la(e) {
    var t = ha(e);
    return "array" == t || "object" == t && "number" == typeof e.length
}
function m(e) {
    return "string" == typeof e
}
function ma(e) {
    return "function" == ha(e)
}
function na(e) {
    var t = typeof e;
    return "object" == t && null != e || "function" == t
}
function oa(e) {
    return e[pa] || (e[pa] = ++qa)
}
function ra(e, t, n) {
    return e.call.apply(e.bind, arguments)
}
function sa(e, t, n) {
    if (!e) throw Error();
    if (2 < arguments.length) {
        var r = Array.prototype.slice.call(arguments, 2);
        return function () {
            var n = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(n, r);
            return e.apply(t, n)
        }
    }
    return function () {
        return e.apply(t, arguments)
    }
}
function n(e, t, r) {
    n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ra : sa;
    return n.apply(null, arguments)
}
function ta(e, t) {
    var n = Array.prototype.slice.call(arguments, 1);
    return function () {
        var t = Array.prototype.slice.call(arguments);
        t.unshift.apply(t, n);
        return e.apply(this, t)
    }
}
function p(e, t) {
    function n() {}
    n.prototype = t.prototype;
    e.d = t.prototype;
    e.prototype = new n;
    e.prototype.constructor = e
}
function va(e) {
    Error.captureStackTrace ? Error.captureStackTrace(this, va) : this.stack = Error().stack || "";
    e && (this.message = String(e))
}
function wa(e, t) {
    for (var n = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length;) r += n.shift() + i.shift();
    return r + n.join("%s")
}
function xa(e) {
    return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ya(e) {
    return decodeURIComponent(e.replace(/\+/g, " "))
}
function za(e) {
    if (!Aa.test(e)) return e; - 1 != e.indexOf("&") && (e = e.replace(Ba, "&")); - 1 != e.indexOf("<") && (e = e.replace(Ca, "&lt;")); - 1 != e.indexOf(">") && (e = e.replace(Da, "&gt;")); - 1 != e.indexOf('"') && (e = e.replace(Ea, "&quot;"));
    return e
}
function Fa(e) {
    return String(e).replace(/\-([a-z])/g, function (e, t) {
        return t.toUpperCase()
    })
}
function Ga(e) {
    var t = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return e.replace(RegExp("(^" + (t ? "|[" + t + "]+" : "") + ")([a-z])", "g"), function (e, t, n) {
        return t + n.toUpperCase()
    })
}
function Ha(e, t) {
    t.unshift(e);
    va.call(this, wa.apply(null, t));
    t.shift()
}
function Ia(e, t) {
    throw new Ha("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1))
}
function Ja(e, t, n) {
    for (var r in e) t.call(n, e[r], r, e)
}
function Ka(e) {
    var t = [],
        n = 0,
        r;
    for (r in e) t[n++] = e[r];
    return t
}
function La(e) {
    var t = [],
        n = 0,
        r;
    for (r in e) t[n++] = r;
    return t
}
function Na(e, t) {
    for (var n, r, i = 1; i < arguments.length; i++) {
        r = arguments[i];
        for (n in r) e[n] = r[n];
        for (var s = 0; s < Ma.length; s++) n = Ma[s], Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
}
function Ta(e, t, n) {
    e: {
        for (var r = e.length, i = m(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && t.call(n, i[s], s, e)) {
            t = s;
            break e
        }
        t = -1
    }
    return 0 > t ? null : m(e) ? e.charAt(t) : e[t]
}
function Ua(e, t) {
    return 0 <= Oa(e, t)
}
function Va(e, t) {
    var n = Oa(e, t),
        i;
    (i = 0 <= n) && r.splice.call(e, n, 1);
    return i
}
function Wa(e) {
    return r.concat.apply(r, arguments)
}
function Xa(e) {
    var t = e.length;
    if (0 < t) {
        for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
        return n
    }
    return []
}
function Ya(e, t, n, i) {
    r.splice.apply(e, Za(arguments, 1))
}
function Za(e, t, n) {
    return 2 >= arguments.length ? r.slice.call(e, t) : r.slice.call(e, t, n)
}
function bb(e) {
    e = e.className;
    return m(e) && e.match(/\S+/g) || []
}
function v(e, t) {
    for (var n = bb(e), r = Za(arguments, 1), i = n.length + r.length, s = n, o = 0; o < r.length; o++) Ua(s, r[o]) || s.push(r[o]);
    e.className = n.join(" ");
    return n.length == i
}
function w(e, t) {
    var n = bb(e),
        r = Za(arguments, 1),
        n = cb(n, r);
    e.className = n.join(" ")
}
function cb(e, t) {
    return Pa(e, function (e) {
        return !Ua(t, e)
    })
}
function x(e, t) {
    return Ua(bb(e), t)
}
function db(e, t) {
    x(e, t) ? w(e, t) : v(e, t)
}
function ib() {
    return l.navigator ? l.navigator.userAgent : null
}
function sb() {
    var e = l.document;
    return e ? e.documentMode : void 0
}
function A(e) {
    var t;
    if (!(t = zb[e])) {
        t = 0;
        for (var n = xa(String(tb)).split("."), r = xa(String(e)).split("."), i = Math.max(n.length, r.length), s = 0; 0 == t && s < i; s++) {
            var o = n[s] || "",
                u = r[s] || "",
                a = RegExp("(\\d*)(\\D*)", "g"),
                f = RegExp("(\\d*)(\\D*)", "g");
            do {
                var l = a.exec(o) || ["", "", ""],
                    c = f.exec(u) || ["", "", ""];
                if (0 == l[0].length && 0 == c[0].length) break;
                t = ((0 == l[1].length ? 0 : parseInt(l[1], 10)) < (0 == c[1].length ? 0 : parseInt(c[1], 10)) ? -1 : (0 == l[1].length ? 0 : parseInt(l[1], 10)) > (0 == c[1].length ? 0 : parseInt(c[1], 10)) ? 1 : 0) || ((0 == l[2].length) < (0 == c[2].length) ? -1 : (0 == l[2].length) > (0 == c[2].length) ? 1 : 0) || (l[2] < c[2] ? -1 : l[2] > c[2] ? 1 : 0)
            } while (0 == t)
        }
        t = zb[e] = 0 <= t
    }
    return t
}
function Cb(e, t) {
    this.width = e;
    this.height = t
}
function Gb(e, t) {
    this.x = ja(e) ? e : 0;
    this.y = ja(t) ? t : 0
}
function Hb(e) {
    return e ? new Ib(Jb(e)) : $a || ($a = new Ib)
}
function B(e) {
    return m(e) ? document.getElementById(e) : e
}
function C(e, t) {
    var n = t || document;
    return n.querySelectorAll && n.querySelector ? n.querySelectorAll("." + e) : n.getElementsByClassName ? n.getElementsByClassName(e) : Kb("*", e, t)
}
function E(e, t) {
    var n = t || document,
        r = null;
    return (r = n.querySelectorAll && n.querySelector ? n.querySelector("." + e) : C(e, t)[0]) || null
}
function Kb(e, t, n) {
    var r = document;
    n = n || r;
    e = e && "*" != e ? e.toUpperCase() : "";
    if (n.querySelectorAll && n.querySelector && (e || t)) return n.querySelectorAll(e + (t ? "." + t : ""));
    if (t && n.getElementsByClassName) {
        n = n.getElementsByClassName(t);
        if (e) {
            for (var r = {}, i = 0, s = 0, o; o = n[s]; s++) e == o.nodeName && (r[i++] = o);
            r.length = i;
            return r
        }
        return n
    }
    n = n.getElementsByTagName(e || "*");
    if (t) {
        r = {};
        for (s = i = 0; o = n[s]; s++) e = o.className, "function" == typeof e.split && Ua(e.split(/\s+/), t) && (r[i++] = o);
        r.length = i;
        return r
    }
    return n
}
function Lb(e, t) {
    Ja(t, function (t, n) {
        "style" == n ? e.style.cssText = t : "class" == n ? e.className = t : "for" == n ? e.htmlFor = t : n in Mb ? e.setAttribute(Mb[n], t) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? e.setAttribute(n, t) : e[n] = t
    })
}
function Nb(e) {
    var t = z || "CSS1Compat" != e.compatMode ? e.body : e.documentElement;
    e = e.parentWindow || e.defaultView;
    return y && A("10") && e.pageYOffset != t.scrollTop ? new Gb(t.scrollLeft, t.scrollTop) : new Gb(e.pageXOffset || t.scrollLeft, e.pageYOffset || t.scrollTop)
}
function Ob(e, t, n) {
    var r = arguments,
        i = document,
        s = r[0],
        o = r[1];
    if (!Db && o && (o.name || o.type)) {
        s = ["<", s];
        o.name && s.push(' name="', za(o.name), '"');
        if (o.type) {
            s.push(' type="', za(o.type), '"');
            var u = {};
            Na(u, o);
            delete u.type;
            o = u
        }
        s.push(">");
        s = s.join("")
    }
    s = i.createElement(s);
    o && (m(o) ? s.className = o : ka(o) ? v.apply(null, [s].concat(o)) : Lb(s, o));
    2 < r.length && Pb(i, s, r, 2);
    return s
}
function Pb(e, t, n, r) {
    function i(n) {
        n && t.appendChild(m(n) ? e.createTextNode(n) : n)
    }
    for (; r < n.length; r++) {
        var o = n[r];
        !la(o) || na(o) && 0 < o.nodeType ? i(o) : s(Qb(o) ? Xa(o) : o, i)
    }
}
function Rb(e) {
    var t = document,
        n = t.createElement("div");
    y ? (n.innerHTML = "<br>" + e, n.removeChild(n.firstChild)) : n.innerHTML = e;
    if (1 == n.childNodes.length) return n.removeChild(n.firstChild);
    for (e = t.createDocumentFragment(); n.firstChild;) e.appendChild(n.firstChild);
    return e
}
function Wb(e, t) {
    Pb(Jb(e), e, arguments, 1)
}
function Xb(e) {
    var t = Kb("script", "", void 0)[0];
    t.parentNode && t.parentNode.insertBefore(e, t)
}
function Yb(e, t) {
    var n = t.parentNode;
    n && n.replaceChild(e, t)
}
function Zb(e) {
    return Eb && void 0 != e.children ? e.children : Pa(e.childNodes, function (e) {
        return 1 == e.nodeType
    })
}
function $b(e) {
    if (Fb && !(y && A("9") && !A("10") && l.SVGElement && e instanceof l.SVGElement)) return e.parentElement;
    e = e.parentNode;
    return na(e) && 1 == e.nodeType ? e : null
}
function Jb(e) {
    return 9 == e.nodeType ? e : e.ownerDocument || e.document
}
function ac(e, t) {
    if ("textContent" in e) e.textContent = t;
    else if (e.firstChild && 3 == e.firstChild.nodeType) {
        for (; e.lastChild != e.firstChild;) e.removeChild(e.lastChild);
        e.firstChild.data = t
    } else {
        for (var n; n = e.firstChild;) e.removeChild(n);
        e.appendChild(Jb(e).createTextNode(String(t)))
    }
}
function Qb(e) {
    if (e && "number" == typeof e.length) {
        if (na(e)) return "function" == typeof e.item || "string" == typeof e.item;
        if (ma(e)) return "function" == typeof e.item
    }
    return !1
}
function bc(e, t) {
    return t ? cc(e, function (e) {
        return !t || x(e, t)
    }) : null
}
function cc(e, t) {
    for (var n = 0; e;) {
        if (t(e)) return e;
        e = e.parentNode;
        n++
    }
    return null
}
function Ib(e) {
    this.Hb = e || l.document || document
}
function dc(e, t, n, r) {
    this.top = e;
    this.right = t;
    this.bottom = n;
    this.left = r
}
function F(e, t, n) {
    m(t) ? ec(e, n, t) : Ja(t, ta(ec, e))
}
function ec(e, t, n) {
    var r;
    e: if (r = Fa(n), void 0 === e.style[r] && (n = (z ? "Webkit" : pb ? "Moz" : y ? "ms" : ob ? "O" : null) + Ga(n), void 0 !== e.style[n])) {
        r = n;
        break e
    }
    r && (e.style[r] = t)
}
function fc(e, t) {
    var n = Jb(e);
    return n.defaultView && n.defaultView.getComputedStyle && (n = n.defaultView.getComputedStyle(e, null)) ? n[t] || n.getPropertyValue(t) || "" : ""
}
function gc(e, t) {
    return fc(e, t) || (e.currentStyle ? e.currentStyle[t] : null) || e.style && e.style[t]
}
function hc(e) {
    var t;
    try {
        t = e.getBoundingClientRect()
    } catch (n) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    y && (e = e.ownerDocument, t.left -= e.documentElement.clientLeft + e.body.clientLeft, t.top -= e.documentElement.clientTop + e.body.clientTop);
    return t
}
function ic(e) {
    if (y && !(y && 8 <= Bb)) return e.offsetParent;
    var t = Jb(e),
        n = gc(e, "position"),
        r = "fixed" == n || "absolute" == n;
    for (e = e.parentNode; e && e != t; e = e.parentNode) if (n = gc(e, "position"), r = r && "static" == n && e != t.documentElement && e != t.body, !r && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight || "fixed" == n || "absolute" == n || "relative" == n)) return e;
    return null
}
function jc(e, t) {
    var n = Kb("html", "", void 0)[0],
        r = kc(e),
        i = kc(n),
        s;
    if (y) {
        var o = lc(n, "borderLeft");
        s = lc(n, "borderRight");
        var u = lc(n, "borderTop"),
            a = lc(n, "borderBottom");
        s = new dc(u, s, a, o)
    } else o = fc(n, "borderLeftWidth"), s = fc(n, "borderRightWidth"), u = fc(n, "borderTopWidth"), a = fc(n, "borderBottomWidth"), s = new dc(parseFloat(u), parseFloat(s), parseFloat(a), parseFloat(o));
    o = r.x - i.x - s.left;
    r = r.y - i.y - s.top;
    i = n.clientWidth - e.offsetWidth;
    s = n.clientHeight - e.offsetHeight;
    u = n.scrollLeft;
    n = n.scrollTop;
    t ? (u += o - i / 2, n += r - s / 2) : (u += Math.min(o, Math.max(o - i, 0)), n += Math.min(r, Math.max(r - s, 0)));
    return new Gb(u, n)
}
function kc(e) {
    var t, n = Jb(e),
        r = gc(e, "position"),
        i = pb && n.getBoxObjectFor && !e.getBoundingClientRect && "absolute" == r && (t = n.getBoxObjectFor(e)) && (0 > t.screenX || 0 > t.screenY),
        s = new Gb(0, 0),
        o;
    t = n ? Jb(n) : document;
    (o = !y) || (o = y && 9 <= Bb) || (o = "CSS1Compat" == Hb(t).Hb.compatMode);
    o = o ? t.documentElement : t.body;
    if (e == o) return s;
    if (e.getBoundingClientRect) t = hc(e), e = Hb(n), e = Nb(e.Hb), s.x = t.left + e.x, s.y = t.top + e.y;
    else if (n.getBoxObjectFor && !i) t = n.getBoxObjectFor(e), e = n.getBoxObjectFor(o), s.x = t.screenX - e.screenX, s.y = t.screenY - e.screenY;
    else {
        t = e;
        do {
            s.x += t.offsetLeft;
            s.y += t.offsetTop;
            t != e && (s.x += t.clientLeft || 0, s.y += t.clientTop || 0);
            if (z && "fixed" == gc(t, "position")) {
                s.x += n.body.scrollLeft;
                s.y += n.body.scrollTop;
                break
            }
            t = t.offsetParent
        } while (t && t != e);
        if (ob || z && "absolute" == r) s.y -= n.body.offsetTop;
        for (t = e;
        (t = ic(t)) && t != n.body && t != o;) s.x -= t.scrollLeft, ob && "TR" == t.tagName || (s.y -= t.scrollTop)
    }
    return s
}
function H(e) {
    var t = mc;
    if ("none" != gc(e, "display")) return t(e);
    var n = e.style,
        r = n.display,
        i = n.visibility,
        s = n.position;
    n.visibility = "hidden";
    n.position = "absolute";
    n.display = "inline";
    e = t(e);
    n.display = r;
    n.position = s;
    n.visibility = i;
    return e
}
function mc(e) {
    var t = e.offsetWidth,
        n = e.offsetHeight,
        r = z && !t && !n;
    return ja(t) && !r || !e.getBoundingClientRect ? new Cb(t, n) : (e = hc(e), new Cb(e.right - e.left, e.bottom - e.top))
}
function lc(e, t) {
    if ("none" == (e.currentStyle ? e.currentStyle[t + "Style"] : null)) return 0;
    var n = e.currentStyle ? e.currentStyle[t + "Width"] : null,
        r;
    if (n in nc) r = nc[n];
    else if (/^\d+px?$/.test(n)) r = parseInt(n, 10);
    else {
        r = e.style.left;
        var i = e.runtimeStyle.left;
        e.runtimeStyle.left = e.currentStyle.left;
        e.style.left = n;
        n = e.style.pixelLeft;
        e.style.left = r;
        e.runtimeStyle.left = i;
        r = n
    }
    return r
}
function xc(e) {
    if (!(this instanceof xc)) return new xc(e);
    var t = this;
    this.a = e;
    this.jc = C("js-card-toggler", this.a);
    this.B = E("js-card-content", this.a);
    this.tc = E("js-card-banner", this.a);
    this.ca = !0;
    v(this.a, "is-active");
    oc.on("resize", function () {
        F(t.B, "marginTop", "");
        t.J = H(t.B).height;
        t.Yb = H(t.tc).height;
        F(t.B, "marginTop", t.Yb + "px");
        t.ca ? TweenMax.set(t.tc, {
            y: -(t.J - t.Yb)
        }) : TweenMax.set(t.B, {
            y: t.J - t.Yb
        })
    });
    this.ta(!1);
    s(this.jc, function (e) {
        F(e, "cursor", "pointer");
        (new Hammer(e)).on("tap", function () {
            t.ta(!0)
        })
    })
}
function yc() {
    return xc.apply(xc, arguments)
}
function Ac(e) {
    return !(!e || !e[zc])
}
function Fc(e, t, n, r, i) {
    this.listener = e;
    this.Yc = null;
    this.src = t;
    this.type = n;
    this.capture = !! r;
    this.Jc = i;
    this.key = ++Ec;
    this.vb = this.wc = !1
}
function Gc(e) {
    e.vb = !0;
    e.listener = null;
    e.Yc = null;
    e.src = null;
    e.Jc = null
}
function Hc(e) {
    this.src = e;
    this.K = {};
    this.mc = 0
}
function Jc(e, t) {
    var n = t.type;
    if (!(n in e.K)) return !1;
    var r = Va(e.K[n], t);
    r && (Gc(t), 0 == e.K[n].length && (delete e.K[n], e.mc--));
    return r
}
function Ic(e, t, n, r) {
    for (var i = 0; i < e.length; ++i) {
        var s = e[i];
        if (!s.vb && s.listener == t && s.capture == !! n && s.Jc == r) return i
    }
    return -1
}
function L() {
    0 != Mc && (Nc[oa(this)] = this)
}
function Oc(e) {
    e && "function" == typeof e.xa && e.xa()
}
function Pc(e, t) {
    this.type = e;
    this.currentTarget = this.target = t
}
function Qc(e) {
    Qc[" "](e);
    return e
}
function Rc(e, t) {
    if (e) {
        var n = this.type = e.type;
        Pc.call(this, n);
        this.target = e.target || e.srcElement;
        this.currentTarget = t;
        var r = e.relatedTarget;
        if (r) {
            if (pb) {
                var i;
                e: {
                    try {
                        Qc(r.nodeName);
                        i = !0;
                        break e
                    } catch (s) {}
                    i = !1
                }
                i || (r = null)
            }
        } else "mouseover" == n ? r = e.fromElement : "mouseout" == n && (r = e.toElement);
        this.relatedTarget = r;
        this.offsetX = z || void 0 !== e.offsetX ? e.offsetX : e.layerX;
        this.offsetY = z || void 0 !== e.offsetY ? e.offsetY : e.layerY;
        this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX;
        this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY;
        this.screenX = e.screenX || 0;
        this.screenY = e.screenY || 0;
        this.button = e.button;
        this.keyCode = e.keyCode || 0;
        this.charCode = e.charCode || ("keypress" == n ? e.keyCode : 0);
        this.ctrlKey = e.ctrlKey;
        this.altKey = e.altKey;
        this.shiftKey = e.shiftKey;
        this.metaKey = e.metaKey;
        this.$h = rb ? e.metaKey : e.ctrlKey;
        this.state = e.state;
        this.ab = e;
        e.defaultPrevented && this.preventDefault();
        delete this.Da
    }
}
function O(e, t, n, r, i) {
    if (ka(t)) {
        for (var s = 0; s < t.length; s++) O(e, t[s], n, r, i);
        return null
    }
    n = Vc(n);
    return Ac(e) ? e.ba(t, n, r, i) : Wc(e, t, n, !1, r, i)
}
function Wc(e, t, n, r, i, s) {
    if (!t) throw Error("Invalid event type");
    var o = !! i,
        u = oa(e),
        a = Tc[u];
    a || (Tc[u] = a = new Hc(e));
    n = a.add(t, n, r, i, s);
    if (n.Yc) return n;
    r = Xc();
    n.Yc = r;
    r.src = e;
    r.listener = n;
    e.addEventListener ? e.addEventListener(t, r, o) : e.attachEvent(t in Uc ? Uc[t] : Uc[t] = "on" + t, r);
    return Sc[n.key] = n
}
function Xc() {
    var e = Yc,
        t = Kc ?
    function (n) {
        return e.call(t.src, t.listener, n)
    } : function (n) {
        n = e.call(t.src, t.listener, n);
        if (!n) return n
    };
    return t
}
function Zc(e, t, n, r, i) {
    if (ka(t)) {
        for (var s = 0; s < t.length; s++) Zc(e, t[s], n, r, i);
        return null
    }
    n = Vc(n);
    return Ac(e) ? e.Oc(t, n, r, i) : Wc(e, t, n, !0, r, i)
}
function $c(e, t, n, r, i) {
    if (ka(t)) for (var s = 0; s < t.length; s++) $c(e, t[s], n, r, i);
    else n = Vc(n), Ac(e) ? e.ve(t, n, r, i) : e && (r = !! r, (e = ad(e)) && (t = e.Ob(t, n, r, i)) && bd(t))
}
function bd(e) {
    if ("number" == typeof e || !e || e.vb) return !1;
    var t = e.src;
    if (Ac(t)) return Jc(t.la, e);
    var n = e.type,
        r = e.Yc;
    t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent && t.detachEvent(n in Uc ? Uc[n] : Uc[n] = "on" + n, r);
    (n = ad(t)) ? (Jc(n, e), 0 == n.mc && (n.src = null, delete Tc[oa(t)])) : Gc(e);
    delete Sc[e.key];
    return !0
}
function cd(e, t, n, r) {
    var i = 1;
    if (e = ad(e)) if (t = e.K[t]) for (t = Xa(t), e = 0; e < t.length; e++) {
        var s = t[e];
        s && s.capture == n && !s.vb && (i &= !1 !== dd(s, r))
    }
    return Boolean(i)
}
function dd(e, t) {
    var n = e.listener,
        r = e.Jc || e.src;
    e.wc && bd(e);
    return n.call(r, t)
}
function Yc(e, t) {
    if (e.vb) return !0;
    if (!Kc) {
        var n = t || ea("window.event"),
            r = new Rc(n, this),
            i = !0;
        if (!(0 > n.keyCode || void 0 != n.returnValue)) {
            e: {
                var s = !1;
                if (0 == n.keyCode) try {
                    n.keyCode = -1;
                    break e
                } catch (o) {
                    s = !0
                }
                if (s || void 0 == n.returnValue) n.returnValue = !0
            }
            n = [];
            for (s = r.currentTarget; s; s = s.parentNode) n.push(s);
            for (var s = e.type, u = n.length - 1; !r.Da && 0 <= u; u--) r.currentTarget = n[u], i &= cd(n[u], s, !0, r);
            for (u = 0; !r.Da && u < n.length; u++) r.currentTarget = n[u], i &= cd(n[u], s, !1, r)
        }
        return i
    }
    return dd(e, new Rc(t, this))
}
function ad(e) {
    return e[pa] ? Tc[oa(e)] || null : null
}
function Vc(e) {
    return ma(e) ? e : e[ed] || (e[ed] = function (t) {
        return e.handleEvent(t)
    })
}
function hd(e) {
    var t, n = null;
    return function () {
        var r = this,
            i = arguments;
        clearTimeout(n);
        n = setTimeout(function () {
            n = null;
            t = e.apply(r, i)
        }, 200);
        return t
    }
}
function jd(e) {
    id || (id = !0, Zc(document, "mousemove", function () {
        gd = !0;
        id = !1;
        e()
    }))
}
function ld(e) {
    e = e || "hoverable";
    if (gd) {
        v(document.body, e);
        var t = hd(function () {
            kd = window.isScrolling = !1;
            v(document.body, e)
        });
        O(window, "scroll", function () {
            kd || (kd = window.isScrolling = !0, w(document.body, e));
            t()
        })
    } else jd(function () {
        ld(e)
    })
}
function md(e) {
    s(e, function (e) {
        var t = xa(e.textContent || e.innerText || "").split(" ");
        3 > t.length || t.pop().length > t.join("").length || (e = e.lastChild) && 3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\s+([^\s]+\s*)$/g, " $1"))
    })
}
function nd(e, t, n, r) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    var i = e.toString();
    if (i != t.toString()) return !1;
    switch (i) {
    case "[object String]":
        return e == String(t);
    case "[object Number]":
        return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
    case "[object Date]":
    case "[object Boolean]":
        return +e == +t;
    case "[object RegExp]":
        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
    }
    if ("object" != typeof e || "object" != typeof t) return !1;
    for (var s = n.length; s--;) if (n[s] == e) return r[s] == t;
    var s = e.constructor,
        o = t.constructor;
    if (s !== o && !("function" === typeof s && s instanceof s && "function" === typeof o && o instanceof o) && "constructor" in e && "constructor" in t) return !1;
    n.push(e);
    r.push(t);
    s = 0;
    o = !0;
    if ("[object Array]" == i) {
        if (s = e.length, o = s == t.length) for (; s-- && (o = nd(e[s], t[s], n, r)););
    } else {
        for (var u in e) if (hasOwnProperty.call(e, u) && (s++, !(o = hasOwnProperty.call(t, u) && nd(e[u], t[u], n, r)))) break;
        if (o) {
            for (u in t) if (hasOwnProperty.call(t, u) && !(s--)) break;
            o = !s
        }
    }
    n.pop();
    r.pop();
    return o
}
function P(e, t) {
    return e.dataset ? e.dataset[t] : e.getAttribute("data-" + String(t).replace(/([A-Z])/g, "-$1").toLowerCase())
}
function Q(e, t, n) {
    n ? rd(e, t) : sd(e, t)
}
function ud(e) {
    if (vd) {
        vd = !1;
        var t = l.location;
        if (t) {
            var n = t.href;
            if (n && (n = (n = ud(n)[3] || null) && decodeURIComponent(n)) && n != t.hostname) throw vd = !0, Error()
        }
    }
    return e.match(td)
}
function xd() {}
function yd(e) {
    if (e instanceof xd) return e;
    if ("function" == typeof e.rd) return e.rd(!1);
    if (la(e)) {
        var t = 0,
            n = new xd;
        n.next = function () {
            for (;;) {
                if (t >= e.length) throw wd;
                if (t in e) return e[t++];
                t++
            }
        };
        return n
    }
    throw Error("Not implemented")
}
function zd(e, t) {
    if (la(e)) try {
        s(e, t, void 0)
    } catch (n) {
        if (n !== wd) throw n
    } else {
        e = yd(e);
        try {
            for (;;) t.call(void 0, e.next(), void 0, e)
        } catch (r) {
            if (r !== wd) throw r
        }
    }
}
function Ad(e, t) {
    this.F = {};
    this.n = [];
    var n = arguments.length;
    if (1 < n) {
        if (n % 2) throw Error("Uneven number of arguments");
        for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
    } else if (e) {
        e instanceof Ad ? (n = e.ma(), r = e.na()) : (n = La(e), r = Ka(e));
        for (var i = 0; i < n.length; i++) this.set(n[i], r[i])
    }
}
function Bd(e) {
    if (e.s != e.n.length) {
        for (var t = 0, n = 0; t < e.n.length;) {
            var r = e.n[t];
            Cd(e.F, r) && (e.n[n++] = r);
            t++
        }
        e.n.length = n
    }
    if (e.s != e.n.length) {
        for (var i = {}, n = t = 0; t < e.n.length;) r = e.n[t], Cd(i, r) || (e.n[n++] = r, i[r] = 1), t++;
        e.n.length = n
    }
}
function Cd(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function Dd(e) {
    if ("function" == typeof e.na) return e.na();
    if (m(e)) return e.split("");
    if (la(e)) {
        for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
        return t
    }
    return Ka(e)
}
function Ed(e, t, n) {
    if ("function" == typeof e.forEach) e.forEach(t, n);
    else if (la(e) || m(e)) s(e, t, n);
    else {
        var r;
        if ("function" == typeof e.ma) r = e.ma();
        else if ("function" != typeof e.na) if (la(e) || m(e)) {
            r = [];
            for (var i = e.length, o = 0; o < i; o++) r.push(o)
        } else r = La(e);
        else r = void 0;
        for (var i = Dd(e), o = i.length, u = 0; u < o; u++) t.call(n, i[u], r && r[u], e)
    }
}
function Fd(e, t) {
    var n;
    if (e instanceof Fd) this.Z = ja(t) ? t : e.Z, Gd(this, e.wb), n = e.ld, R(this), this.ld = n, n = e.Ib, R(this), this.Ib = n, Hd(this, e.Wc), n = e.Rc, R(this), this.Rc = n, Id(this, e.Ea.clone()), n = e.Hc, R(this), this.Hc = n;
    else if (e && (n = ud(String(e)))) {
        this.Z = !! t;
        Gd(this, n[1] || "", !0);
        var r = n[2] || "";
        R(this);
        this.ld = r ? decodeURIComponent(r) : "";
        r = n[3] || "";
        R(this);
        this.Ib = r ? decodeURIComponent(r) : "";
        Hd(this, n[4]);
        r = n[5] || "";
        R(this);
        this.Rc = r ? decodeURIComponent(r) : "";
        Id(this, n[6] || "", !0);
        n = n[7] || "";
        R(this);
        this.Hc = n ? decodeURIComponent(n) : ""
    } else this.Z = !! t, this.Ea = new Jd(null, 0, this.Z)
}
function Gd(e, t, n) {
    R(e);
    e.wb = n ? t ? decodeURIComponent(t) : "" : t;
    e.wb && (e.wb = e.wb.replace(/:$/, ""))
}
function Hd(e, t) {
    R(e);
    if (t) {
        t = Number(t);
        if (isNaN(t) || 0 > t) throw Error("Bad port number " + t);
        e.Wc = t
    } else e.Wc = null
}
function Id(e, t, n) {
    R(e);
    t instanceof Jd ? (e.Ea = t, e.Ea.ne(e.Z)) : (n || (t = Kd(t, Rd)), e.Ea = new Jd(t, 0, e.Z))
}
function Sd(e, t, n) {
    R(e);
    ka(n) || (n = [String(n)]);
    Td(e.Ea, t, n)
}
function R(e) {
    if (e.nh) throw Error("Tried to modify a read-only Uri")
}
function Kd(e, t) {
    return m(e) ? encodeURI(e).replace(t, Ud) : null
}
function Ud(e) {
    e = e.charCodeAt(0);
    return "%" + (e >> 4 & 15).toString(16) + (e & 15).toString(16)
}
function Jd(e, t, n) {
    this.V = e || null;
    this.Z = !! n
}
function Vd(e) {
    if (!e.p && (e.p = new Ad, e.s = 0, e.V)) for (var t = e.V.split("&"), n = 0; n < t.length; n++) {
        var r = t[n].indexOf("="),
            i = null,
            s = null;
        0 <= r ? (i = t[n].substring(0, r), s = t[n].substring(r + 1)) : i = t[n];
        i = ya(i);
        i = Wd(e, i);
        e.add(i, s ? ya(s) : "")
    }
}
function Td(e, t, n) {
    e.remove(t);
    0 < n.length && (e.V = null, e.p.set(Wd(e, t), Xa(n)), e.s += n.length)
}
function Wd(e, t) {
    var n = String(t);
    e.Z && (n = n.toLowerCase());
    return n
}
function Xd() {
    return !0
}
function Yd(e) {
    return function () {
        throw e
    }
}
function Zd(e, t) {
    this.ec = [];
    this.Qg = t || null;
    this.Pb = this.Kb = !1;
    this.$c = void 0;
    this.Wf = this.yg = this.yd = !1;
    this.jd = 0;
    this.Ca = null;
    this.zg = 0;
    this.Gd = null;
    if (Error.captureStackTrace) {
        var n = {
            stack: ""
        };
        Error.captureStackTrace(n, Zd);
        "string" == typeof n.stack && (this.Gd = n.stack.replace(/^[^\n]*\n/, ""))
    }
}
function $d(e, t, n) {
    e.Kb = !0;
    e.$c = n;
    e.Pb = !t;
    ae(e)
}
function ce(e, t) {
    e.Gd && na(t) && t.stack && /^[^\n]+(\n   [^\n]+)+/.test(t.stack) && (t.stack = t.stack + "\nDEFERRED OPERATION:\n" + e.Gd)
}
function de(e) {
    return Ra(e.ec, function (e) {
        return ma(e[1])
    })
}
function ae(e) {
    e.jd && e.Kb && de(e) && (l.clearTimeout(e.jd), delete e.jd);
    e.Ca && (e.Ca.zg--, delete e.Ca);
    for (var t = e.$c, r = !1, i = !1; e.ec.length && !e.yd;) {
        var s = e.ec.shift(),
            o = s[0],
            u = s[1],
            s = s[2];
        if (o = e.Pb ? u : o) try {
            var a = o.call(s || e.Qg, t);
            ja(a) && (e.Pb = e.Pb && (a == t || a instanceof Error), e.$c = t = a);
            t instanceof Zd && (i = !0, e.yd = !0)
        } catch (f) {
            t = f, e.Pb = !0, ce(e, t), de(e) || (r = !0)
        }
    }
    e.$c = t;
    i && (i = t, a = n(e.Ne, e, !0), o = n(e.Ne, e, !1), i.ec.push([a, o, void 0]), i.Kb && ae(i), t.yg = !0);
    r && (e.jd = l.setTimeout(Yd(t), 0))
}
function be() {
    va.call(this)
}
function ee(e, t) {
    var n = t || {},
        r = n.document || document,
        i = document.createElement("SCRIPT"),
        s = {
            Vi: i,
            xb: void 0
        },
        o = new Zd(0, s),
        u = null,
        a = null != n.timeout ? n.timeout : 5e3;
    0 < a && (u = window.setTimeout(function () {
        fe(i, !0);
        var t = new ge(he, "Timeout reached for loading script " + e);
        o.Ya();
        ce(o, t);
        $d(o, !1, t)
    }, a), s.xb = u);
    i.onload = i.onreadystatechange = function () {
        i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (fe(i, n.Fg || !1, u), o.Eb(null))
    };
    i.onerror = function () {
        fe(i, !0, u);
        var t = new ge(ie, "Error while loading script " + e);
        o.Ya();
        ce(o, t);
        $d(o, !1, t)
    };
    Lb(i, {
        type: "text/javascript",
        charset: "UTF-8",
        src: e
    });
    je(r).appendChild(i);
    return o
}
function je(e) {
    var t = e.getElementsByTagName("HEAD");
    return t && 0 != t.length ? t[0] : e.documentElement
}
function fe(e, t, n) {
    null != n && l.clearTimeout(n);
    e.onload = fa;
    e.onerror = fa;
    e.onreadystatechange = fa;
    t && window.setTimeout(function () {
        e && e.parentNode && e.parentNode.removeChild(e)
    }, 0)
}
function ge(e, t) {
    var n = "Jsloader error (code #" + e + ")";
    t && (n += ": " + t);
    va.call(this, n);
    this.code = e
}
function ke(e, t) {
    this.Ci = new Fd(e);
    this.Ag = t ? t : "callback";
    this.xb = 5e3
}
function ne(e, t, n) {
    return function () {
        oe(e, !1);
        n && n(t)
    }
}
function me(e, t) {
    return function (n) {
        oe(e, !0);
        t.apply(void 0, arguments)
    }
}
function oe(e, t) {
    l._callbacks_[e] && (t ? delete l._callbacks_[e] : l._callbacks_[e] = fa)
}
function qe(e, t, r) {
    this.v = e;
    this.a = E(re, this.v);
    this.Kd = E(se, this.v);
    this.Ch = E(te, this.v);
    this.Ic = E(ue, this.v);
    this.Cf = E(ve, this.v);
    this.Lf = E(we, this.v);
    this.Ff = E(xe, this.v);
    this.oc = t;
    this.Fe = r;
    this.kc = this.Pe = this.wa = null;
    (new Hammer(this.Lf)).on("tap", n(function (e) {
        e.stopPropagation();
        0 < this.wa && ye(this, this.wa - 1)
    }, this));
    (new Hammer(this.Ff)).on("tap", n(function (e) {
        e.stopPropagation();
        this.wa < this.kc - 1 && ye(this, this.wa + 1)
    }, this));
    O(this.Kd, "click", function (e) {
        e.preventDefault();
        e.stopPropagation()
    });
    (new Hammer(this.Kd)).on("tap", n(this.yi, this));
    (new Hammer(this.Ch)).on("tap", n(this.jh, this));
    this.Aa = new ElementVisibleController(this.a);
    this.Aa.on("enter", this.Sf, this);
    I.on("breakpoint", this.pa, this)
}
function ze(e, t) {
    rd(e.v, "show-modal");
    var r = n(function (e) {
        this.Ic.src = e.url;
        this.Ic.style.width = e.width > e.height ? "90%" : 85 * (e.width / e.height) + "%";
        this.Ic.style.height = "auto"
    }, e);
    if (Modernizr.localstorage) {
        var i = sessionStorage.getItem("photosLargerSizes");
        if ((i = JSON.parse(i)) && i[t]) {
            r(i[t]);
            return
        }
    }(new ke(t + "&imgmax=1600")).send(null, n(function (e) {
        e = e.entry.media$group.media$content[0];
        if (Modernizr.localstorage) {
            var n = sessionStorage.getItem("photosLargerSizes");
            (n = JSON.parse(n)) || (n = {});
            n[t] = e;
            sessionStorage.setItem("photosLargerSizes", JSON.stringify(n))
        }
        r(e)
    }, e))
}
function Ae(e) {
    var t = e.oa() ? 800 : 1152;
    return "https://picasaweb.google.com/data/feed/api/user/" + e.oc + "/albumid/" + e.Fe + "?alt=json&kind=photo&hl=pl&imgmax=" + t + "&max-results=5000&start-index=1"
}
function Ce(e, t, r, i) {
    if (!i && Modernizr.localstorage) {
        var s = +(new Date);
        if ((i = sessionStorage.getItem("qaFeedSetupTime")) && 3e5 > s - i && (i = sessionStorage.getItem("photosFeedItems")) && (i = JSON.parse(i), i[t])) {
            e.kc = sessionStorage.getItem("photosFeedItemsTotal");
            r(i[t]);
            return
        }
    }
    var o = e.oa() ? 5 : 9;
    i = Ae(e);
    (new ke(i)).send(null, n(function (e) {
        var n = u(e.feed.entry, this.Zh, this);
        this.kc = e.feed.openSearch$totalResults.$t;
        e = {};
        for (var n = n.sort(function (e, t) {
            var n = moment(e.sb).unix();
            return moment(t.sb).unix() - n
        }), i = Math.ceil(n.length / o) - 1, a = 0; a <= i; a++) e[a] = Za(n, a * o, a * o + o);
        Modernizr.localstorage && (sessionStorage.setItem("photosFeedSetupTime", s), sessionStorage.setItem("photosFeedItemsTotal", this.kc), sessionStorage.setItem("photosFeedItems", JSON.stringify(e)));
        r(e[t])
    }, e))
}
function ye(e, t, r) {
    e.wa = t;
    Ce(e, e.wa, n(function (e) {
        nd(e, this.Pe, [], []) || (De(this, t, e), this.Pe = e)
    }, e), r)
}
function De(e, t, r) {
    Q(e.Lf, "disabled", 0 >= t);
    var i = e.oa() ? 5 : 9,
        i = Math.ceil(e.kc / i);
    Q(e.Ff, "disabled", t >= i - 1);
    i = e.oa() ? e.Cf : e.Kd;
    i = C("js-stagger-image", i);
    i = Pa(i, function (e) {
        return "1" === e.style.opacity
    });
    e = n(function () {
        sd(this.v, "page0");
        sd(this.v, "page1");
        sd(this.v, "page2");
        var e = t % 3;
        rd(this.v, "page" + e);
        e = this.oa() ? C("js-stagger-image", this.Cf) : pe(".photo-stream__set.-page" + e + " .js-stagger-image");
        Ee(this, r, e)
    }, e);
    0 < i.length ? Fe(i, e) : setTimeout(e, 50)
}
function Ee(e, t, r) {
    var i = [];
    s(r, function (e, n) {
        var r = t[n];
        e.style.opacity = 0;
        r && i.push(n)
    });
    var o = i.length,
        u = Pa(r, function (e, t) {
            return -1 !== Oa(i, t)
        });
    s(i, function (e) {
        var i = r[e],
            s = t[e];
        e = new Image;
        e.onload = n(function () {
            o--;
            var e = s.Dh;
            i.dataset ? i.dataset.moreDetailsURI = e : i.setAttribute("data-" + "moreDetailsURI".replace(/([A-Z])/g, "-$1").toLowerCase(), e);
            i.href = s.link;
            i.style.backgroundImage = "url(" + s.src + ")";
            0 >= o && setTimeout(n(this.ui, this, u), 100)
        }, this);
        e.src = s.src
    }, e)
}
function Fe(e, t) {
    TweenMax.staggerFromTo(e, .2, {
        opacity: 1
    }, {
        opacity: 0,
        ease: Linear.easeNone,
        onComplete: function () {
            TweenMax.set(this.target, {
                opacity: 0
            })
        }
    }, .05, t)
}
function Ge(e, t, n, r) {
    this.zb = e;
    this.bc = t;
    this.pb = n;
    this.ob = r;
    this.Lb = !0
}
function He(e, t) {
    e.zb = t;
    e.j.loadVideoById(e.zb, 0, "large")
}
function Ie(e) {
    Pc.call(this, "navigate");
    this.fd = e
}
function S() {
    L.call(this);
    this.la = new Hc(this);
    this.sg = this
}
function Je(e, t, n, r) {
    t = e.la.K[t];
    if (!t) return !0;
    t = Xa(t);
    for (var i = !0, s = 0; s < t.length; ++s) {
        var o = t[s];
        if (o && !o.vb && o.capture == n) {
            var u = o.listener,
                a = o.Jc || o.src;
            o.wc && Jc(e.la, o);
            i = !1 !== u.call(a, r) && i
        }
    }
    return i && !1 != r.Rf
}
function Ke(e, t) {
    S.call(this);
    this.l = e || window;
    this.gd = t || null;
    O(this.l, "popstate", this.ac, !1, this);
    O(this.l, "hashchange", this.ac, !1, this)
}
function Me(e) {
    !1 != e.nc && ($c(e.l, "hashchange", e.ac, !1, e), e.nc = !1)
}
function Le(e, t) {
    return e.nc ? "#" + t : e.gd ? e.gd.Hi(t, e.cc, e.l.location) : e.cc + t + e.l.location.search
}
function Ne(e, t) {
    S.call(this);
    this.Sb = e || 1;
    this.yb = t || l;
    this.zd = n(this.zi, this);
    this.ee = ua()
}
function Pe(e, t, r) {
    if (ma(e)) r && (e = n(e, r));
    else if (e && "function" == typeof e.handleEvent) e = n(e.handleEvent, e);
    else throw Error("Invalid listener argument");
    return 2147483647 < t ? -1 : l.setTimeout(e, t || 0)
}
function Qe(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a)
}
function Re() {}
function Te() {}
function Ue(e) {
    return (e = Ve(e)) ? new ActiveXObject(e) : new XMLHttpRequest
}
function We(e) {
    var t = {};
    Ve(e) && (t[0] = !0, t[1] = !0);
    return t
}
function Ve(e) {
    if (!e.qf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var t = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < t.length; n++) {
            var r = t[n];
            try {
                return new ActiveXObject(r), e.qf = r
            } catch (i) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
    }
    return e.qf
}
function Xe(e) {
    return Ye(e || arguments.callee.caller, [])
}
function Ye(e, t) {
    var n = [];
    if (Ua(t, e)) n.push("[...circular reference...]");
    else if (e && 50 > t.length) {
        n.push(Ze(e) + "(");
        for (var r = e.arguments, i = 0; i < r.length; i++) {
            0 < i && n.push(", ");
            var s;
            s = r[i];
            switch (typeof s) {
            case "object":
                s = s ? "object" : "null";
                break;
            case "string":
                break;
            case "number":
                s = String(s);
                break;
            case "boolean":
                s = s ? "true" : "false";
                break;
            case "function":
                s = (s = Ze(s)) ? s : "[fn]";
                break;
            default:
                s = typeof s
            }
            40 < s.length && (s = s.substr(0, 40) + "...");
            n.push(s)
        }
        t.push(e);
        n.push(")\n");
        try {
            n.push(Ye(e.caller, t))
        } catch (o) {
            n.push("[exception trying to get caller]\n")
        }
    } else e ? n.push("[...long stack...]") : n.push("[end]");
    return n.join("")
}
function Ze(e) {
    if ($e[e]) return $e[e];
    e = String(e);
    if (!$e[e]) {
        var t = /function ([^\(]+)/.exec(e);
        $e[e] = t ? t[1] : "[Anonymous]"
    }
    return $e[e]
}
function af(e, t, n, r, i) {
    this.reset(e, t, n, r, i)
}
function cf(e) {
    this.L = e
}
function df(e, t) {
    this.name = e;
    this.value = t
}
function jf(e) {
    if (e.Wb) return e.Wb;
    if (e.Ca) return jf(e.Ca);
    Ia("Root logger has no level set.");
    return null
}
function mf(e) {
    lf || (lf = new cf(""), kf[""] = lf, lf.Tf(gf));
    var t;
    if (!(t = kf[e])) {
        t = new cf(e);
        var n = e.lastIndexOf("."),
            r = e.substr(n + 1),
            n = mf(e.substr(0, n));
        n.hf()[r] = t;
        t.Ca = n;
        kf[e] = t
    }
    return t
}
function wf(e, t) {
    e && e.log(hf, t, void 0)
}
function xf(e) {
    S.call(this);
    this.headers = new Ad;
    this.Ab = e || null;
    this.ua = !1;
    this.pd = this.e = null;
    this.Vb = this.vf = this.Nc = "";
    this.Ma = this.Zd = this.Lc = this.Qd = !1;
    this.ic = 0;
    this.ed = null;
    this.Qf = yf;
    this.kd = this.Ei = !1
}
function Cf(e, t, n, r) {
    var i = new xf;
    Bf.push(i);
    t && i.ba("complete", t);
    i.Oc("ready", i.Eg);
    i.send(e, n, r, void 0)
}
function Ff(e) {
    return "content-type" == e.toLowerCase()
}
function Ef(e, t) {
    e.ua = !1;
    e.e && (e.Ma = !0, e.e.abort(), e.Ma = !1);
    e.Vb = t;
    Hf(e);
    If(e)
}
function Hf(e) {
    e.Qd || (e.Qd = !0, e.dispatchEvent("complete"), e.dispatchEvent("error"))
}
function Jf(e) {
    if (e.ua && "undefined" != typeof ca) if (e.pd[1] && 4 == Kf(e) && 2 == Lf(e)) wf(e.X, Df(e, "Local request error detected and ignored"));
    else if (e.Lc && 4 == Kf(e)) Pe(e.Gf, 0, e);
    else if (e.dispatchEvent("readystatechange"), 4 == Kf(e)) {
        wf(e.X, Df(e, "Request complete"));
        e.ua = !1;
        try {
            if (Mf(e)) e.dispatchEvent("complete"), e.dispatchEvent("success");
            else {
                var t;
                try {
                    t = 2 < Kf(e) ? e.e.statusText : ""
                } catch (n) {
                    wf(e.X, "Can not get status: " + n.message), t = ""
                }
                e.Vb = t + " [" + Lf(e) + "]";
                Hf(e)
            }
        } finally {
            If(e)
        }
    }
}
function If(e, t) {
    if (e.e) {
        Gf(e);
        var n = e.e,
            r = e.pd[0] ? fa : null;
        e.e = null;
        e.pd = null;
        t || e.dispatchEvent("ready");
        try {
            n.onreadystatechange = r
        } catch (i) {
            (n = e.X) && n.log(ef, "Problem encountered resetting onreadystatechange: " + i.message, void 0)
        }
    }
}
function Gf(e) {
    e.e && e.kd && (e.e.ontimeout = null);
    "number" == typeof e.ed && (l.clearTimeout(e.ed), e.ed = null)
}
function Mf(e) {
    var t = Lf(e),
        n;
    e: switch (t) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        n = !0;
        break e;
    default:
        n = !1
    }
    if (!n) {
        if (t = 0 === t) e = ud(String(e.Nc))[1] || null, !e && self.location && (e = self.location.protocol, e = e.substr(0, e.length - 1)), t = !zf.test(e ? e.toLowerCase() : "");
        n = t
    }
    return n
}
function Kf(e) {
    return e.e ? e.e.readyState : 0
}
function Lf(e) {
    try {
        return 2 < Kf(e) ? e.e.status : -1
    } catch (t) {
        return (e = e.X) && e.log(ff, "Can not get status: " + t.message, void 0), -1
    }
}
function Nf(e) {
	console.log("??????2");
    if (e.e) return Qe(e.e.responseText)
}
function Of(e) {
    var t = {};
    e = e.getAllResponseHeaders().split("\r\n");
    for (var n = 0; n < e.length; n++) if (!/^[\s\xa0]*$/.test(e[n])) {
        var r;
        r = 2;
        for (var i = e[n].split(": "), s = []; 0 < r && i.length;) s.push(i.shift()), r--;
        i.length && s.push(i.join(": "));
        r = s;
        t[r[0]] = t[r[0]] ? t[r[0]] + (", " + r[1]) : r[1]
    }
    return t
}
function Df(e, t) {
    return t + " [" + e.vf + " " + e.Nc + " " + Lf(e) + "]"
}
function Pf(e, t) {
    this.pf = e;
    this.xi = E("js-submit-rating", t);
    this.bi = E("js-rating-questions-holder", t);
    this.Jg = E("js-rating-comments", t);
    this.ei = E("js-rating-submitted", t);
    this.ci = C("js-rating-question", t);
    this.di = C("js-rating-circle", t);
    s(this.di, n(function (e) {
        (new Hammer(e)).on("tap", this.oi)
    }, this));
    (new Hammer(this.xi)).on("tap", n(this.mi, this))
}
function Qf(e, t, r) {
    var i = this;
    this.Xb = t;
    this.Ta = e;
    this.k = r;
    this.ke = !1;
    this.mb = document.body;
    this.aa = C("js-event-card");
    this.o = E("js-details");
    this.Te = E("js-details-card");
    this.Ue = E("js-scrim-dismiss", this.o);
    this.Ec = this.Se = this.Ve = null;
    this.Ha = C("js-details-iframe", this.o);
    this.Cd = null;
    this.Jd = E("js-tabs-holder");
    this.Cc = C("js-schedule-tab");
    this.ki = E("js-scrim-dismiss-main");
    this.Kf = C("js-schedule-pin");
    this.Mc = !0;
    "undefined" !== typeof initialSessionID && (w(this.o, "-hide"), v(this.mb, "-overflow-hidden"), this.Mc = !0, this.Ec = initialSessionID, Rf(this, initialSessionID));
    s(this.Kf, this.De, this);
    if (this.Jd)(new Hammer(this.Jd)).on("tap", function () {
        db(i.Jd, "active")
    });
    s(this.Cc, function (e) {
        (new Hammer(e)).on("tap", function (t) {
            t.preventDefault();
            t.gesture.preventDefault();
            t = E("js-tabs-content.-" + e.getAttribute("data-tab-target"));
            window.scrollTo(0, kc(t).y - 80);
            s(i.Cc, function (e) {
                w(e, "tab-is-active")
            });
            v(e, "tab-is-active");
            Sf(qc);
            qc.xc()
        })
    });
    this.Cc.length && v(this.Cc[0], "tab-is-active");
    (new Hammer(this.ki)).on("tap", function (e) {
        x(e.target, "js-scrim-dismiss-main") && (v(i.o, "-hide"), s(i.Ha, function (e) {
            e.setAttribute("src", "")
        }), w(i.mb, "-overflow-hidden"), i.Xb && i.m.Ga(""), i.Se = null)
    });
    try {
        this.Xb && (this.m = new Ke, O(this.m, "navigate", this.$b, !1, this), Me(this.m), this.m.cc = "/events/io" + this.Xb, this.m.Fa(!0)), s(this.aa, this.Ce, this), (new Hammer(this.Ue)).on("tap", function (e) {
            e.target === i.Ue && i.m.Ga("")
        })
    } catch (o) {}
    i.za = O(window, window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize", n(this.onResize, this));
    O(document.body, "loadSessionDetails", function (e) {
        Rf(this, e.target)
    }, !1, this)
}
function Rf(e, t) {
/*    Cf("/events/io/schedule/session/" + t + "", function (n) {
        var r = n.target;
        console.log("??????3");
        n = Nf(r);
        r = Of(r).Date || Of(r).date;
        r = moment(r);
        n.de = r.isAfter(n.localized_start);
        var i = [];
        s(n.speakers, function (e) {
            i.push(e.firstname + " " + e.lastname)
        });
        n.id = t;
        n.ub = n.related_videos;
        n.Wa = n.video_id;
        n.dc = i.join(", ");
        n.I = n.speakers;
        n.time = n.pretty_date;
        n.title.toLowerCase().match("keynote") && (n.time = n.time.split("-")[0]);
        n.ji = e.k ? e.k.fc && e.k.fc.starred_sessions ? -1 === Oa(Tf(e.k), t) ? !1 : !0 : !1 : !1;
        var o = null;
        s(n.categories, function (e) {
            "distribute" === e.slug ? o = "Distribute" : "develop" === e.slug ? o = "Develop" : "design" === e.slug && (o = "Design")
        });
        n.room && (n.ad = n.room.name);
        n.A = o;
        n.Ub = e.Mc;
        this.Mc = !1;
        Uf(e, n)
    })*/
}
function Vf(e, t) {
    t.starred_sessions && s(e.aa, function (e) {
        -1 !== Oa(t.starred_sessions, e.getAttribute("data-id")) && v(e, "saved")
    })
}
function Uf(e, t) {
    w(e.o, "-hide");
    v(e.mb, "-overflow-hidden");
    var n = e.Ta(t).content;
    Yb(Rb(n), e.Te);
    e.Te = E("js-details-card");
    e.Ve = E("js-details-card", e.o);
    e.Ha = C("js-details-iframe", e.o);
    e.Cd = E("js-cancel-youtube", e.o);
    if (e.Cd)(new Hammer(e.Cd)).on("tap", function () {
        setTimeout(function () {
            s(e.Ha, function (e) {
                e.setAttribute("src", "")
            })
        }, 400)
    });
    n = C("js-related-video", e.o);
    s(n, e.Ce, e);
    (n = C("js-scrim-dismiss", e.Ve)) && s(n, function (t) {
        (new Hammer(t)).on("tap", function () {
            e.o && (v(e.o, "-hide"), s(e.Ha, function (e) {
                e.setAttribute("src", "")
            }));
            e.mb && w(e.mb, "-overflow-hidden");
            e.m && e.m.Ga("");
            e.Se = null
        })
    });
    e.De(E("js-details-pin", e.o));
    (n = C("js-play-content", e.o)) && s(n, function (t) {
        (new Hammer(t)).on("tap", function () {
            s(e.Ha, function (e) {
                e.setAttribute("src", t.getAttribute("data-youtube-src"))
            })
        })
    });
    e.onResize();
    n = E("js-paging", e.o);
    e.If = new Wf(n);
    (n = E("js-rating", e.o)) && new Pf(e.Ec, n);
    e.onResize();
    e.o.scrollTop = 0;
    e.ke = !0
}
function Yf() {
    S.call(this);
    this.m = new Zf;
    O(this.m, "navigate", this.$b, !1, this);
    this.m.Fa(!0);
    this.ae();
    this.Bb = !1;
    if (this.Tc = E($f)) this.qb = new qe(this.Tc, ag, bg);
    O(window, "load", function () {
        this.Qa = new Qf(cg)
    }, !1, this);
    var e = C("js-card-expand");
    s(e, yc);
    setInterval(n(this.le, this), 6e5);
    (this.ig = E("js-video")) && TweenMax.set(this.ig, {
        opacity: 0
    });
    this.xe = E("js-close-player");
    TweenMax.set(this.xe, {
        autoAlpha: 0
    })
}
function dg(e) {
    e.rb ? e.bc() : (e.H = new Ge(e.zb, n(e.bc, e), n(e.pb, e), n(e.ob, e)), e.rb = !0, e.Bb ? e.H.Ba() : e.ba("onYouTubeIframeAPIReady", function () {
        this.H.Ba()
    }, !1, e))
}
function T(e) {
    this.md = !1;
    this.va = e;
    this.setData(null);
    this.i()
}
function U() {
    throw Error("Do not instantiate directly")
}
function hg(e, t, n) {
    e.innerHTML = ig(t(n || jg, void 0, void 0))
}
function ig(e) {
    if (!na(e)) return String(e);
    if (e instanceof U) {
        if (e.Y === eg) return e.content;
        if (e.Y === gg) return za(e.content)
    }
    Ia("Soy template output is unsafe for use as HTML: " + e);
    return "zSoyz"
}
function kg() {
    U.call(this)
}
function lg() {
    U.call(this)
}
function mg() {
    U.call(this)
}
function ng() {
    U.call(this)
}
function og() {
    U.call(this)
}
function pg() {
    U.call(this)
}
function qg(e) {
    function t() {}
    t.prototype = e.prototype;
    return function (e) {
        var n = new t;
        n.content = String(e);
        return n
    }
}
function W(e) {
    return e && e.Y && e.Y === eg ? e.content : String(e).replace(rg, sg)
}
function Y(e) {
    e && e.Y && e.Y === eg ? (e = String(e.content).replace(tg, "").replace(ug, "&lt;"), e = String(e).replace(vg, sg)) : e = String(e).replace(rg, sg);
    return e
}
function Z(e) {
    e && e.Y == fg ? e = String(e).replace(wg, xg) : (e = String(e), yg.test(e) ? e = e.replace(wg, xg) : (Ia("Bad value `%s` for |filterNormalizeUri", [e]), e = "#zSoyz"));
    return e
}
function zg(e) {
    return String(e).replace(/(\r\n|\r|\n)/g, "<br>")
}
function sg(e) {
    return Ag[e]
}
function xg(e) {
    return Bg[e]
}
function Cg(e) {
    return V('<div><a href="' + Y(Z(e.url)) + '" target="_blank">' + W(e.name) + '</a><br><a href="' + Y(Z(e.url)) + '" target="_blank" style="color: #03a9f4;">More info</a></div>')
}
function Dg(e) {
    var t = '<div class="details__card js-details-card -primary-padding-top ' + (!0 != e.Ub ? "-primary-padding-top" : "") + '"><div class="paging js-paging"><div class="pane js-pane">' + (e.Ub ? '<div class="details__landing g-bg-blue g-color-dark-blue show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View full schedule <div class="icon -forward-darkblue -bottom -mobile">Arrow</div></div></div></div>' : "") + '<div class="details__header row -full"><div class="col -width-1-2 details__back"><div class="details__save with-icon js-details-pin' + (e.ji ? " -saved" : "") + '" href="#" data-id="' + Y(e.id) + '">' + (e.de ? "" : '<span class="icon -pin-blue -bottom"></span> <span class="-content">your schedule</span>') + '</div></div><div class="col -width-1-2"><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss ' + (e.Ub ? "hide-for-small-only" : "") + '">Close</span></div></div>' + (e.Wa ? '<div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div>' : "") + '<div class="row -full details__cols"><div class="col -width-3-5 -mobile-buffer-bottom"><h1 class="details__title">' + W(e.title) + '</h1><h2 class="details__speaker">' + W(e.dc) + '</h2></div><div class="col -width-2-5 -gutterless-right hide-for-small-only"><div class="row details__wwwww block -no-border"><div class="col -width-1-4 -bold -gutterless">When</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.time) + "</div></div>" + (null != e.ad ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold -gutterless">Where</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.ad) + "</div></div>" : "") + (null != e.A ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold -gutterless">Theme</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.A) + "</div></div>" : "") + (e.de ? '<div class="rating__forward row details__wwwww js-pane-forward">Rate this session</div>' : "") + '</div><div class="-full hide-for-small-only"><div class="col -width-5-5"><p class="details__description">' + zg(W(e.description)) + '</p></div></div><div class="col -width-1-3 -gutterless-right show-for-small-only"><div class="row details__wwwww block -no-border"><div class="col -width-1-4 -bold">When</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.time) + "</div></div>" + (null != e.ad ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold">Where</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.ad) + "</div></div>" : "") + (null != e.A ? '<div class="row details__wwwww block"><div class="col -width-1-4 -bold">Theme</div><div class="col -width-3-4 -gutterless g-light-grey">' + W(e.A) + "</div></div>" : "") + (e.de ? '<div class="rating__forward row details__wwwww js-pane-forward">Rate this session</div>' : "") + '<div class="row -full"><div class="col -width-5-5"><p class="details__description">' + zg(W(e.description)) + "</p></div></div></div></div>";
    if (e.I && e.I.length) {
        for (var t = t + '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">', n = e.I, r = n.length, i = 0; i < r; i++) var s = n[i],
            t = t + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image js-speaker-image" style="background-image: url(' + (s.photo ? Y(Z(s.photo)) : "/events/io/images/speaker-default.png") + ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(s.firstname) + " " + W(s.lastname) + '</span><span class="speaker__title g-light-grey">' + (s.jobtitle ? " " + W(s.jobtitle) : "") + (s.companyname ? (s.jobtitle ? "," : "") + " " + W(s.companyname) : "") + '</span></div><p class="speaker__bio">' + W(s.bio) + "</p></div></div>");
        t += "</div></div>"
    }
    if (e.ub && e.ub.length) {
        t += '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">Related Content</h2></div></div><div class="row">';
        n = e.ub;
        r = n.length;
        for (i = 0; i < r; i++) s = n[i], t += '<div class="col -width-1-3"><a class="detail__extra-content" href="/events/io/io14videos/' + Y(s.key) + '"><div class="details__content-image g-bg-grey" style="background-image:url(\'//img.youtube.com/vi/' + Y(String(s.video_id).replace(wg, xg)) + '/hqdefault.jpg\')">&nbsp;</div><p class="details__content-title -bold">' + W(s.title) + '</p><p class="details__content-description">' + W(s.description) + "</p></a></div>";
        t += "</div></div>"
    }
    t += '</div><div class="pane js-pane js-rating"><div class="ratings__row row -full -gutterless"><div class="ratings__header col -width-whole"><span class="ratings__back icon -back-grey -actionable -absolute -left js-pane-back">Back</span><h1 class="ratings__session-title -smaller">' + W(e.title) + '</h1><h2 class="ratings__session-speakers">' + W(e.dc) + '</h2><span class="ratings__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div></div><div class="js-rating-questions-holder"><div class="ratings__row row -full -gutterless js-rating-question" data-type="relevance"><p class="ratings__title">How relevant was this session to your projects?</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Not at all</span><span class="most">Extremely</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="content"><p class="ratings__title">The content was:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Too basic</span><span class="most">Too advanced</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="speaker"><p class="ratings__title">Speaker quality:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Poor</span><span class="most">Outstanding</span></div></div><div class="ratings__row row -full -gutterless js-rating-question"><p class="ratings__title">Anything else we should know?</p><div class="ratings__comments-holder"><textarea maxlength="700" class="ratings__comments js-rating-comments" placeholder="Please don\'t add any personal info in your comments"></textarea></div></div><div class="ratings__submit js-submit-rating">Submit</div></div><div class="ratings__submitted js-rating-submitted -hide"><h1 class="-bold">Success!</h1><h2>Your feedback has been submitted. Thanks for participating.</h2></div></div></div></div>';
    return V(t)
}
function Eg(e) {
    var t = '<div class="details__card paging js-details-card js-paging"><div class="pane js-pane">' + (e.Ub ? '<div class="details__landing g-bg-purple-blue g-color-dark-purple show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View the video archive <div class="icon -forward-deeppurple -bottom -mobile">Arrow</div></div></div></div>' : "") + '<div class="js-details-scroller"><div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div><div class=""><div class="row -full details__cols"><div class="col -width-3-4"><h1 class="details__title -smaller">' + W(e.title) + '</h1><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div><div class="col -width-3-4 -mobile-width-3-5"><h2 class="details__speaker">' + W(e.dc) + ' &nbsp;</h2></div><div class="col -width-1-4 -mobile-width-2-5"><h2 class="details__speaker"><span class="rating__forward js-pane-forward hide-for-small-only">Rate this session</span><span class="rating__forward js-pane-forward show-for-small-only">Rate it</span></h2></div></div><div class="row -full"><div class="col -width-5-5"><p class="details__description">' + zg(W(e.description)) + "</p></div></div></div></div>";
    if (e.I && e.I.length) {
        for (var t = t + '<div class="details__content"><div class="row"><div class="col -width-whole"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">', n = e.I, r = n.length, i = 0; i < r; i++) var s = n[i],
            t = t + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image hide-for-small-only js-speaker-image" style="background-image: url(' + (s.photo ? Y(Z(s.photo)) : "/events/io/images/speaker-default.png") + ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(s.firstname) + " " + W(s.lastname) + '</span><span class="speaker__title g-light-grey">' + (s.jobtitle ? " " + W(s.jobtitle) : "") + (s.companyname ? (s.jobtitle ? "," : "") + " " + W(s.companyname) : "") + '</span></div><p class="speaker__bio">' + W(s.bio) + "</p></div></div>");
        t += "</div></div>"
    }
    if (e.ub && e.ub.length) {
        t += '<div class="details__content"><div class="row"><div class="col -width-1-2"><h2 class="details__content-headline">Related Content</h2></div></div><div class="row">';
        n = e.ub;
        r = n.length;
        for (i = 0; i < r; i++) s = n[i], t += '<div class="col -width-1-3"><a class="detail__extra-content js-pane-forward-external js-related-video" href="/events/io/io14videos/' + Y(s.key) + '"><div class="details__content-image g-bg-grey" style="background-image:url(\'//img.youtube.com/vi/' + Y(String(s.video_id).replace(wg, xg)) + '/hqdefault.jpg\')">&nbsp;</div><p class="details__content-title -bold">' + W(s.title) + '</p><p class="details__content-description">' + W(s.description) + "</p></a></div>";
        t += "</div></div>"
    }
    t += '</div><div class="pane js-pane js-rating"><div class="ratings__row row -full -gutterless"><div class="ratings__header col -width-whole"><span class="ratings__back icon -back-grey -actionable -absolute -left js-pane-back">Back</span><h1 class="ratings__session-title -smaller">' + W(e.title) + '</h1><h2 class="ratings__session-speakers">' + W(e.dc) + '</h2><span class="ratings__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div></div><div class="js-rating-questions-holder"><div class="ratings__row row -full -gutterless js-rating-question" data-type="relevance"><p class="ratings__title">How relevant was this session to your projects?</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Not at all</span><span class="most">Extremely</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="content"><p class="ratings__title">The content was:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Too basic</span><span class="most">Too advanced</span></div></div><div class="ratings__row row -full -gutterless js-rating-question" data-type="speaker"><p class="ratings__title">Speaker quality:</p><div class="ratings__holder js-ratings-holder"><div class="ratings__circle -circle-1 js-rating-circle" data-rating="1">1</div><div class="ratings__circle -circle-2 js-rating-circle" data-rating="2">2</div><div class="ratings__circle -circle-3 js-rating-circle" data-rating="3">3</div><div class="ratings__circle -circle-4 js-rating-circle" data-rating="4">4</div><div class="ratings__circle -circle-5 js-rating-circle" data-rating="5">5</div></div><div class="ratings__range"><span class="least">Poor</span><span class="most">Outstanding</span></div></div><div class="ratings__row row -full -gutterless js-rating-question"><p class="ratings__title">Anything else we should know?</p><div class="ratings__comments-holder"><textarea class="ratings__comments js-rating-comments" placeholder="Please don\'t add any personal info in your comments"></textarea></div></div><div class="ratings__submit js-submit-rating">Submit</div></div><div class="ratings__submitted js-rating-submitted -hide"><h1 class="-bold">Success!</h1><h2>Your feedback has been submitted. Thanks for participating.</h2></div></div></div>';
    return V(t)
}
function cg(e) {
    var t = '<div class="details__card paging js-details-card js-paging"><div class="pane js-pane">' + (e.Ub ? '<div class="details__landing g-bg-purple-blue g-color-dark-purple show-for-small-only js-scrim-dismiss"><div class="row"><div class="col -width-1-3"><div class="icon -io -bottom -mobile">I/O</div></div><div class="col -width-2-3 details__view-arrow">View the video archive <div class="icon -forward-deeppurple -bottom -mobile">Arrow</div></div></div></div>' : "") + '<div class="js-details-scroller"><div class="row -full -gutterless -line-height"><div class="col -width-1-1 -gutterless g-bg-black hide-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="768" height="432" frameborder="0" allowfullscreen></iframe></div><div class="col -width-1-1 -gutterless show-for-small-only"><iframe src="//www.youtube.com/embed/' + Y(e.Wa) + '?rel=0&showinfo=0&autohide=1&enablejsapi=1&version=3" class="details__iframe js-details-iframe" width="341" height="200" frameborder="0" allowfullscreen></iframe></div></div><div class=""><div class="row -full details__cols"><div class="col -width-3-4"><h1 class="details__title -smaller">' + W(e.title) + '</h1><span class="details__close icon -close-grey -actionable -absolute -right js-scrim-dismiss">Close</span></div><div class="col -width-3-4 -mobile-width-3-5"><h2 class="details__speaker">' + W(e.dc) + ' &nbsp;</h2></div></div><div class="row -full"><div class="col -width-5-5"><p class="details__description">' + zg(W(e.description)) + "</p></div></div></div></div>";
    if (e.I && e.I.length) {
        t += '<div class="details__content"><div class="row"><div class="col -width-whole"><h2 class="details__content-headline">About the speakers</h2></div></div><div class="speakers">';
        e = e.I;
        for (var n = e.length, r = 0; r < n; r++) var i = e[r],
            t = t + ('<div class="speaker row block"><div class="col -width-1-6"><div class="speaker__image hide-for-small-only js-speaker-image" style="background-image: url(' + (i.photo ? Y(Z(i.photo)) : "/events/io/images/speaker-default.png") + ')">&nbsp;</div></div><div class="col -width-5-6"><div class="speaker__name"><span class="-bold">' + W(i.firstname) + " " + W(i.lastname) + '</span><span class="speaker__title g-light-grey">' + (i.jobtitle ? " " + W(i.jobtitle) : "") + (i.companyname ? (i.jobtitle ? "," : "") + " " + W(i.companyname) : "") + '</span></div><p class="speaker__bio">' + W(i.bio) + "</p></div></div>");
        t += "</div></div>"
    }
    return V(t + "</div>")
}
function Fg(e) {
    return V('<div class="card js-match-item -buffer-bottom"><div class="card__content -smaller g-bg-white -watch-live-buffer"><div class="js-session-details"><div class="card__category -actionable g-light-grey -' + Y(e.A) + '">' + W(e.$f) + '<span class="icon -more-grey -middle right"></span></div><h4 class="h4">' + W(e.title) + '</h4><div class="speaker-list">' + W(e.ra) + '</div></div></div><a href="#' + Y(e.Sa) + '" class="card__full-banner with-icon -' + Y(e.A) + '"><span class="icon -play-' + ("develop" == e.A ? "blue" : "") + ("design" == e.A ? "darkblue" : "") + ("distribute" == e.A ? "purple" : "") + ' -text-top -buffer-right"></span>Watch live</a></div>')
}
function Gg(e) {
    var t = '<div class="card -buffer-bottom -actionable -mobile-stacked js-match-item js-session-details"><div class="card__content -smaller g-bg-white -speaker-image-buffer"><div class="card__category g-light-grey -' + Y(e.A) + '">' + W(e.$f) + '<span class="icon -more-grey -middle right"></span></div><h4 class="h4">' + W(e.title) + "</h4>" + (e.I ? e.I.length ? '<div class="speaker-list">' + W(e.ra) + "</div>" : "" : "");
    if (e.I && e.I.length) {
        t += '<ul class="speaker-images hide-for-small-only">';
        e = e.I;
        for (var n = e.length, r = 0; r < n; r++) var i = e[r],
            t = t + ('<li class="speaker-image -small" style="background-image: url(' + (i.Jf ? Y(Z(i.Jf)) : "/events/io/images/speaker-default.png") + ')"></li>');
        t += "</ul>"
    }
    return V(t + "</div></div>")
}
function Hg(e) {
    return V('<div class="card -live -buffer-bottom"><div class="card__content -live -gutterless -' + Y(e.A) + '"><div class="static-feed"><div class="feed-theme">' + W(e.A) + '</div><div class="feed-title">' + W(e.title) + "</div>" + (e.ra ? '<div class="feed-speakers">' + W(e.ra) + "</div>" : "") + '<div class="feed-more js-session-details"><span class="icon -more-' + ("develop" == e.A ? "blue" : "") + ("design" == e.A ? "darkblue" : "") + ("distribute" == e.A ? "purple" : "") + ' -middle"></span></div><a href="#' + Y(e.Sa) + '" class="feed-show width-icon"><span class="icon -play-large-' + ("develop" == e.A ? "blue" : "") + ("design" == e.A ? "darkblue" : "") + ("distribute" == e.A ? "purple" : "") + '"></span>Watch now</a></div><div class="live-feed"><div class="feed-cta"><div class="js-feed-inline-stream"></div><a href="#' + Y(e.Sa) + '" class="feed-swap"><span class="icon -play-large-white"></span></a></div><div class="card__banner -smaller -actionable js-session-details"><div class="fluid-left-fixed-right -with-icon"><div class="left -width-whole"><div class="fluid-left"><span class="ellipsis">' + W(e.title) + '</span><span class="ellipsis g-light-grey">' + (e.ra ? W(e.ra) : "") + '</span></div></div><div class="fixed-right text-right"><span class="icon -more-grey -middle"></span></div></div></div></div></div></div>')
}
function Ig(e) {
    return V('<h3 class="bucket__headline h3 -with-icon -mobile-larger g-color-white"><span class="fixed-left-fluid-right -with-icon"><span class="left -width-whole"><span class="fluid-right">' + W(e.title) + '</span></span><span class="fixed-left"><span class="icon -play-white -sub"></span></span></span></h3><p class="-shifted -no-buffer">' + (e.ra ? '<span class="g-color-white">' + W(e.ra) + "</span><br>" : "") + '<span class="g-color-light-purple">' + W(e.time) + "</span></p>")
}
function Jg(e) {
    return V("error" == e.message ? '<h3 class="bucket__headline h3 g-color-white">Sorry, we\'re experiencing technical difficulties.</h3>' : "before" == e.message ? '<h3 class="bucket__headline h3 g-color-white">I/O starts soon!</h3><p class="text-center g-color-light-blue -no-buffer">The keynote begins at 9:00&nbsp;AM&nbsp;PDT on June&nbsp;25.<br><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "pre-keynote" == e.message ? '<h3 class="bucket__headline h3 g-color-white">I/O starts soon!</h3><p class="text-center g-color-light-blue -no-buffer">The keynote begins at 9:00&nbsp;AM&nbsp;PDT on June&nbsp;25.<br><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "upcoming" == e.message ? '<h3 class="bucket__headline h3 g-color-white">We&lsquo;ll be right back.</h3><p class="-width-1-3 -mobile-whole g-color-light-blue -no-buffer"><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "eod-1" == e.message ? '<h3 class="bucket__headline h3 g-color-white">That\'s it for today</h3><p class="text-center g-color-light-blue -no-buffer">Thanks for joining us today.<br>We’ll be back in the morning with more sessions from I/O Live.</p><p class="g-color-light-blue -no-buffer"><a class="g-color-blue" href="/events/io/schedule#!/filter/live-streaming">Check the schedule</a> for more information.</p>' : "eod-2" == e.message ? '<h3 class="bucket__headline h3 g-color-white">That\'s it for now.</h3><p class="g-color-light-blue -no-buffer">Come back soon for highlights from I/O 2014.</p>' : "")
}
function Kg(e) {
    for (var t = "<ul>", n = e.oh, r = n.length, i = 0; i < r; i++) t += V('<li class="qa-feed__qa-feed-item"><div class="qa-feed-item__row"><a href="' + Y(Z(n[i].Db)) + '" target="_blank" class="qa-feed-item__icon -gutterless"><img src="' + Y(Z(n[i].xd)) + '"></a><a href="' + Y(Z(n[i].Db)) + '" target="_blank" class="qa-feed-item__author">' + W(n[i].name) + '</a><a href="' + Y(Z(n[i].url)) + '" target="_blank" class="qa-feed-item__time js-relative-time" datetime="' + Y(n[i].sb) + '">just now</a></div><div class="qa-feed-item__content"><p>' + W(n[i].body) + "</p>" + (n[i].qc ? '<p><a href="' + Y(Z(n[i].qc)) + '" target="_blank">Watch the video</a></p>' : "") + "</div>" + (n[i].S ? '<div class="qa-feed-item__reshare"><div class="arrow"></div><div class="qa-feed-item__reshare-author"><a href="' + Y(Z(n[i].S.Db)) + '" target="_blank" class="qa-feed-item__icon -gutterless"><img src="' + Y(Z(n[i].S.xd)) + '"></a><a href="' + Y(Z(n[i].S.Db)) + '" target="_blank" class="qa-feed-item__author">' + W(n[i].S.name) + '</a><a href="' + Y(Z(n[i].S.url)) + '" target="_blank" class="qa-feed-item__time js-relative-time" datetime="' + Y(n[i].S.sb) + '">just now</a></div><div class="qa-feed-item__reshare-content">' + (n[i].S.body ? "<p>" + W(n[i].S.body) + "</p>" : "") + (n[i].S.qc ? '<p><a href="' + Y(Z(n[i].S.qc)) + '" target="_blank">Watch the video</a></p>' : "") + "</div></div>" : "") + "</li>");
    t += '</ul><a href="' + Y(Z(e.Di)) + '" target="_blank" class="qa-feed__load-more">open in Google+</div>';
    return V(t)
}
function Lg(e) {
    this.a = E("js-break");
    this.Ta = E("js-break-message");
    T.call(this, e)
}
function $(e, t) {
    this.name = e;
    this.bd = t;
    this.c = null
}
function Mg(e) {
    $.call(this, "before", e)
}
function Ng(e, t, r) {
    L.call(this);
    this.U = e;
    this.Ta = t;
    this.yf = r;
    this.setData(null);
    this.Ie = n(this.qi, this)
}
function Pg(e) {
    e.o = C("js-session-details", e.U);
    s(e.o, function (e) {
        (new Hammer(e)).on("tap", this.Ie)
    }, e)
}
function Og(e) {
    e.o && (s(e.o, function (e) {
        (new Hammer(e)).off("tap", this.Ie)
    }, e), e.o = null)
}
function Qg(e) {
    this.a = E("js-time-slots");
    E("js-live-time-slot");
    this.Ng = E("js-live-time-slot-pager");
    this.Lg = E("js-live-time");
    this.Og = C("js-live-card");
    this.Mg = u(this.Og, function (e) {
        return new Ng(e, Fg, this)
    }, this);
    E("js-next-time-slot");
    this.Jh = E("js-next-time-slot-pager");
    this.Gh = E("js-next-time");
    this.Kh = C("js-next-card");
    this.Ih = u(this.Kh, function (e) {
        return new Ng(e, Gg, this)
    }, this);
    this.Cg = Rg(this.a);
    this.he = Sg.get("timeslots");
    T.call(this, e)
}
function Ug(e) {
    var t = Ua(I.getActiveBreakpoints(), "mobile");
    "next" !== e.c.focus || t ? ("current" === e.c.focus || t) && Vg(e.he, 0) : Vg(e.he, 1);
    Q(e.Jh, "hidden", null === e.c.u || e.c.nf);
    Q(e.Ng, "hidden", null === e.c.G)
}
function Tg(e) {
    e.c.u && s(e.Mg, function (e, t) {
        e.setData(this.c.u[t])
    }, e);
    e.c.G && s(e.Ih, function (e, t) {
        e.setData(this.c.G[t])
    }, e);
    Ug(e)
}
function Wg(e) {
    this.a = E("js-stream-detail-container");
    this.Ta = E("js-stream-detail");
    T.call(this, e)
}
function Xg(e) {
    this.uc = Kb("body", void 0, void 0)[0];
    this.eb = E("js-header");
    this.fa = E("js-nav");
    this.ue = !qd(this.fa, "post-keynote-header");
    T.call(this, e)
}
function Yg(e, t) {
    this.a = E("js-live-stream");
    this.Tb = !1;
    this.Uc = B("video-player");
    TweenLite.set(this.Uc, {
        opacity: 0
    });
    this.pb = t;
    T.call(this, e)
}
function Zg(e) {
    var t = n(function () {
        if (rc || pc) e.m.Ga(""), this.i()
    }, this);
    this.mf = new Xg(e);
    this.je = new Yg(e, t);
    this.Vc = new Wg(e);
    this.yc = E("js-close-stream");
    pc && (Q(this.yc, "hidden", !0), this.yc = void 0);
    T.call(this, e)
}
function $g(e) {
    L.call(this);
    this.Wd = e;
    this.n = {}
}
function bh(e, t) {
    for (var n = [e], r = t.length - 1; 0 <= r; --r) n.push(typeof t[r], t[r]);
    return n.join("")
}
function Zf(e, t, r, i) {
    S.call(this);
    if (e && !t) throw Error("Can't use invisible history without providing a blank page.");
    var s;
    r ? s = r : (s = "history_state" + ch, document.write(wa(dh, s, s)), s = B(s));
    this.Qb = s;
    this.l = r ? Jb(r) ? Jb(r).parentWindow || Jb(r).defaultView : window : window;
    this.Kc = t;
    y && !t && (this.Kc = "https" == window.location.protocol ? "https:///" : 'javascript:""');
    this.t = new Ne(eh);
    t = ta(Oc, this.t);
    this.Zb || (this.Zb = []);
    this.Zb.push(n(t, void 0));
    this.Va = !e;
    this.Ka = new $g(this);
    if (e || fh) i ? e = i : (e = "history_iframe" + ch, i = this.Kc ? 'src="' + za(this.Kc) + '"' : "", document.write(wa(gh, e, i)), e = B(e)), this.fb = e, this.gg = !0;
    fh && (this.Ka.ba(this.l, "load", this.Ph), this.Vf = this.Pd = !1);
    this.Va ? hh(this, this.W(), !0) : ih(this, this.Qb.value);
    ch++
}
function mh(e) {
    e = e.location.href;
    var t = e.indexOf("#");
    return 0 > t ? "" : e.substring(t + 1)
}
function ph(e, t, n, r) {
    e.W() != t && (e.Va ? (hh(e, t, n), jh() || y && ih(e, t, n, r), e.ka && e.Ya(!1)) : (ih(e, t, n), e.kb = e.ib = e.Qb.value = t, e.dispatchEvent(new Ie(t))))
}
function hh(e, t, n) {
    e = e.l.location;
    var r = e.href.split("#")[0],
        i = -1 != e.href.indexOf("#");
    if (kh || i || t) r += "#" + t;
    r != e.href && (n ? e.replace(r) : e.href = r)
}
function ih(e, t, n, r) {
    if (e.gg || t != oh(e)) if (e.gg = !1, t = encodeURIComponent(String(t)), y) {
        var i = e.fb.contentDocument || e.fb.contentWindow.document;
        i.open("text/html", n ? "replace" : void 0);
        i.write(wa(qh, za(r || e.l.document.title), t));
        i.close()
    } else if (t = e.Kc + "#" + t, e = e.fb.contentWindow) n ? e.location.replace(t) : e.location.href = t
}
function oh(e) {
    if (y) return e = e.fb.contentDocument || e.fb.contentWindow.document, e.body ? ya(e.body.innerHTML) : null;
    var t = e.fb.contentWindow;
    if (t) {
        var n;
        try {
            n = ya(mh(t))
        } catch (r) {
            return e.lb || (!0 != e.lb && e.t.setInterval(rh), e.lb = !0), null
        }
        e.lb && (!1 != e.lb && e.t.setInterval(eh), e.lb = !1);
        return n || null
    }
    return null
}
function nh(e, t) {
    e.ib = e.Qb.value = t;
    e.Va ? (fh && ih(e, t), hh(e, t)) : ih(e, t);
    e.dispatchEvent(new Ie(e.W()))
}
function sh(e) {
    $.call(this, "playing", e)
}
function th(e) {
    $.call(this, "error", e)
}
function uh(e) {
    $.call(this, "end-of-day", e)
}
function vh(e) {
    $.call(this, "keynote", e)
}
function zh(e, t, r) {
    this.v = e;
    this.oc = t;
    this.ph = r;
    this.ea = null;
    this.lg = this.Nf = !0;
    I.on("breakpoint", this.pa, this);
    this.wf(n(this.refresh, this));
    this.Ai = setInterval(n(this.hg, this), 6e4)
}
function Ah(e, t, r) {
    if (!r && Modernizr.localstorage) {
        var i = +(new Date);
        if ((r = sessionStorage.getItem("qaFeedSetupTime")) && 3e5 > i - r && (r = sessionStorage.getItem("qaFeedItems"))) {
            t(JSON.parse(r));
            return
        }
    }
    gapi.client.plus.activities.list({
        userId: e.oc,
        collection: "public",
        maxResults: 10
    }).execute(n(function (e) {
        e.items && (e = u(e.items, this.Yh, this), e = Qa(e, function (e, t) {
            0 < t.body.length && 3 > e.length && e.push(t);
            return e
        }, [], this), Modernizr.localstorage && (sessionStorage.setItem("qaFeedSetupTime", i), sessionStorage.setItem("qaFeedItems", JSON.stringify(e))), t(e))
    }, e))
}
function Bh(e, t) {
    this.va = e;
    this.gc = {};
    this.Ja = null;
    this.hd = !1;
    0 < t.length && s(t, this.ug, this)
}
function Ch(e, t, r, i) {
    var s = e.Ja;
    if (e.hd) throw "Already transitioning!";
    e.hd = !0;
    s === t ? (e.gc[e.Ja].setData(r), e.gc[e.Ja].D(n(function () {
        this.hd = !1
    }, e))) : (s = n(function () {
        this.Ja = t;
        this.gc[this.Ja].setData(r);
        this.gc[this.Ja].D(n(function () {
            this.hd = !1;
            i(t)
        }, this))
    }, e), e.Ja ? s && s() : s())
}
function Dh(e) {
    $.call(this, "live-streaming", e)
}
function Eh(e) {
    $.call(this, "pre-keynote", e)
}
function Fh(e) {
    $.call(this, "upcoming", e)
}
function Gh(e, t, r) {
    Ng.call(this, e, t, r);
    I.on("breakpoint", n(this.pa, this));
    this.ze = this.qd = !1;
    e = n(function () {
        this.ze = !0;
        this.qd && Hh() && Ih(this)
    }, this);
    this.yf.Bb ? e() : this.yf.ba("onYouTubeIframeAPIReady", e)
}
function Hh() {
    var e = I.getActiveBreakpoints()[0],
        t = navigator.userAgent.match(/Android/) || navigator.userAgent.match(/iPad/);
    return e && "mobile" !== e && !t
}
function Ih(e) {
    if (e.c) {
        e.qd = !1;
        if (e.j) {
            if (e.th === e.c.Sa) {
                Jh(e);
                return
            }
            e.j.destroy()
        }
        e.th = e.c.Sa;
        var t = E("js-feed-inline-stream", e.U);
        e.j = new YT.Player(t, {
            title: e.c.title,
            playerVars: {
                autoplay: 1,
                autohide: 1,
                controls: 0,
                enablejsapi: 1,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                theme: "dark",
                playsinline: 1
            },
            videoId: e.c.Sa,
            events: {
                onReady: n(e.jg, e),
                onStateChange: n(e.jg, e)
            }
        })
    }
}
function Jh(e) {
    e.c && (e.j ? e.j.playVideo && e.j.playVideo() : Kh(e))
}
function Kh(e) {
    e.qd = !0;
    e.ze && Hh() && Ih(e)
}
function Lh(e) {
    this.a = E("js-stream-grid");
    var t = C("js-landing-card", this.a);
    this.Dd = u(t, function (t) {
        return new Gh(t, Hg, e)
    }, this);
    T.call(this, e)
}
function Mh() {
    S.call(this);
    this.Mb = !0;
    this.Bb = !1;
    this.Tc = E(Nh);
    this.ai = E(Oh);
    this.vi = new Bh(this, [th, Mg, Eh, vh, Fh, Dh, sh, uh]);
    this.ye = {
        message: new Lg(this),
        "main-player": new Zg(this),
        "time-slots": new Qg(this),
        "live-grid": new Lh(this),
        "end-of-day": new uh(this)
    };
    this.m = new Zf;
    O(this.m, "navigate", this.$b, !1, this);
    this.m.Fa(!0);
    this.refresh();
    this.ae()
}
function Qh(e) {
    var t = Rh(e);
    Ch(e.vi, t.state, t.data, n(function () {
        this.Mb && (this.Gc(), this.Mb = !1)
    }, e))
}
function Th(e, t) {
    var n, r, i, o, u, a;
    s(e, function (e, s) {
        var u = moment(e[0][0].localized_start);
        t.year() !== u.year() || t.month() !== u.month() || n || (t.dayOfYear() < u.dayOfYear() ? n = -1 : t.dayOfYear() > u.dayOfYear() ? n = 0 : (n = 1, r = s, Sa(e, function (e, n) {
            var r = moment(e[0].localized_start);
            (r = t.hours() === r.hours()) && (i = n);
            return !r
        }), Sa(e, function (e, n) {
            var r = moment(e[0].localized_start);
            (r = t.hours() < r.hours()) && (o = n);
            return !r
        })))
    });
    var f;
    1 === n ? (f = e[r], u = void 0 === i ? null : f[i], a = void 0 === o ? null : f[o]) : -1 === n ? (f = "before", a = u = null) : 0 === n && (f = "after", a = u = null);
    return {
        Bc: f,
        u: u,
        G: a,
        sh: 1 === n && r === e.length - 1,
        Ni: !1
    }
}
function Sh(e) {
    var t = [];
    Ja(e, function (e) {
        var n = [];
        Ja(e, function (e) {
            var t = [];
            e.length && (s(e, function (e) {
                if (e.live_stream_id) {
                    var n = "";
                    s(e.categories, function (e) {
                        "distribute" === e.slug ? n = "Distribute" : "develop" === e.slug ? n = "Develop" : "design" === e.slug && (n = "Design")
                    });
                    e.themeTitle = n;
                    e.theme = n.toLowerCase();
                    t.push(e)
                }
            }), t.length && n.push(t))
        });
        n.length && t.push(n)
    });
    return t
}
function Rh(e) {
    if (!e.c) return {
        state: "error"
    };
    var t = e.c.ia,
        n = e.m.W(),
        r = Uh(e);
    if (r) return {
        state: "keynote",
        data: {
            da: r
        }
    };
    if ("before" === t.Bc) return {
        state: "before"
    };
    if ("after" === t.Bc) return {
        state: "end-of-day",
        data: {
            Id: 2
        }
    };
    if ("object" === typeof t.Bc) {
        if (null === t.u && t.G) return (t = t.G && Ta(t.G, function (e) {
            return e.title && e.title.toLowerCase().match(/keynote/)
        })) ? (t = moment(t.localized_start).valueOf(), e = e.c.currentTime.valueOf(), e = t - e, 9e5 >= e && 0 < e ? {
            state: "keynote",
            data: {
                Wi: !1
            }
        } : {
            state: "pre-keynote"
        }) : {
            state: "upcoming"
        };
        if (null === t.u && null === t.G) return t.sh ? {
            state: "end-of-day",
            data: {
                Id: 2
            }
        } : {
            state: "end-of-day",
            data: {
                Id: 1
            }
        };
        if (n) {
            if (t = Ta(t.u, function (e) {
                return e.live_stream_id === n
            }, e)) return {
                state: "playing",
                data: {
                    da: t
                }
            };
            e.m.Ga("")
        }
        return {
            state: "live-streaming"
        }
    }
    return {
        state: "error"
    }
}
function Vh(e) {
    if (e = e.c.ia.Bc) if (e = u(e, function (e) {
        return Ta(e, function (e) {
            return e.title && e.title.toLowerCase().match(/keynote/)
        })
    }), (e = Pa(e, function (e) {
        return e
    })) && 0 < e.length) return e[0]
}
function Uh(e) {
    var t = Vh(e);
    if (!t) return !1;
    var n = moment(t.localized_start),
        r = moment(t.localized_finish);
    return e.c.currentTime.unix() >= n.unix() && e.c.currentTime.unix() <= r.unix() ? t : !1
}
function Wh() {
    L.call(this);
    this.vd = new Mh;
    O(window, "load", function () {
        this.Qa = new Qf(Dg)
    }, !1, this);
    setInterval(n(this.le, this), 6e4)
}
function Xh() {
    var e = this;
    this.a = E("js-typeout");
    this.Rg = 3;
    this.Ge = E("js-beam", this.a);
    this.Fi = E("js-word", this.a);
    this.rc = P(this.a, "words");
    this.rc = this.rc.split(", ");
    this.P = this.rc.length - 1;
    this.Aa = new ElementVisibleController(this.a);
    this.Aa.on("enter", function () {
        void 0 === e.lc ? Yh(e, !0) : e.lc && e.lc.play()
    });
    this.Aa.on("exit", function () {
        e.lc && e.lc.pause()
    })
}
function Yh(e, t) {
    var n = e.P + 1 === e.rc.length ? 0 : e.P + 1,
        r = e.rc[n],
        i = {
            charIndex: 0
        };
    e.lc = TweenLite.to(i, .06 * r.length, {
        charIndex: r.length,
        ease: Linear.easeNone,
        delay: t ? 0 : e.Rg,
        onStart: function () {
            w(this.Ge, "blink")
        },
        onUpdate: function () {
            var e = r.slice(0, ~~i.charIndex);
            ac(this.Fi, e)
        },
        onComplete: function () {
            v(this.Ge, "blink");
            this.P = n;
            Yh(this)
        },
        onStartScope: e,
        onUpdateScope: e,
        onCompleteScope: e
    })
}
function Zh() {
    var e = this,
        t = !1,
        n = E("js-experiment-partial");
    K && v(n, "fallback");
    new Xh;
    I.on("breakpoint", function (r) {
        var i = r[1];
        "mobile" === r[0] ? "enter" === i ? v(n, "fallback") : K || w(n, "fallback") : (K || void 0 !== e.qa || $h("HomeHeader", n, null, function (t) {
            e.qa = t
        }), t || (r = C("js-prevent-load-mobile"), s(r, function (e) {
            x(e, "js-lazy-load") || (e.src = P(e, "src"))
        }), t = !0))
    })
}
function ai(e, t) {
    this.Wh = t;
    this.uh = 21.4225;
    this.yh = 39.82615;
    this.Na = new google.maps.LatLng(this.uh, this.yh);
    this.a = e;
    this.F = E("js-map", e);
    this.Bh = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
            visibility: "on"
        }, {
            color: "#5dc7ff"
        }]
    }];
    this.wi = new google.maps.StyledMapType(this.Bh, {
        name: "Styled Map"
    });
    this.zh = {
        center: this.Na,
        disableDefaultUI: !0,
        scrollwheel: !1,
        draggable: t.draggable,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
        },
        minZoom: 2,
        zoom: 5,
        zoomControl: t.zoomControl,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        }
    };
    this.of = {
        url: "/images/maps/map-marker.png",
        anchor: new google.maps.Point(t.anchor[0], t.anchor[1]),
        origin: new google.maps.Point(0, 0),
        scaledSize: new google.maps.Size(t.scaledSize[0], t.scaledSize[1])
    };
    this.C = new google.maps.Map(this.F, this.zh);
    new google.maps.Marker({
        position: this.Na,
        map: this.C,
        icon: this.of,
        optimized: t.optimized,
        title: "Kaaba, Al Haram"
    });
    this.C.mapTypes.set("map_style", this.wi);
    this.C.setMapTypeId("map_style");
    this.C.panBy(t.panBy[0], t.panBy[1])
}
function bi(e) {
    var t = !1,
        n;
    s(e, function (e) {
        if (!t) {
            var r = e.types[0];
            "locality" === r ? (n = e.long_name, t = !0) : "administrative_area_level_2" === r ? (n = e.long_name, t = !0) : "administrative_area_level_1" === r ? (n = e.long_name, t = !0) : "country" === r && (n = e.long_name, t = !0)
        }
    });
    return n
}
function bi_1(e) {
    var t = !1,
        n = !1,
        r = !1,
        map = {},
        i, o, u;
     
    s(e, function (e) {
        if (!t || !n || !r) {
            var r = e.types[0];
            "locality" === r ? (i = e.long_name, t = !0) : "administrative_area_level_1" === r ? (o =  e.long_name, n = 0) : "country" === r && (u = e.long_name, r = !0)
        }
    });
    return i + "," + o + "," + u;
}
function ci(e) {
	console.log("made it");
    var t = window.prayer_print1(e.jb.lat() + "," + e.jb.lng());
    var n = google.maps.geometry.spherical.computeDistanceBetween(e.jb, e.Na),
        n = Math.round(n / 1e3 / 1.609),
        r = ~~ (3600 * (n / 88)),
        r = r.toString(),
        r = r.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        i = new google.maps.DistanceMatrixService;
    e.Ld(n, r, i, t, e);
    e.Pg = new google.maps.Marker({
        position: e.jb,
        map: e.C,
        icon: e.of,
        optimized: e.Wh.optimized,
        title: e.sd
    });
    e.Ad = new google.maps.LatLngBounds;
    e.Ad.extend(e.Na);
    e.Ad.extend(e.jb);
    e.C.fitBounds(e.Ad);
    e.df = new google.maps.Polyline({
        path: [e.jb, e.Na],
        geodesic: !0,
        strokeColor: "#03a9f4",
        strokeOpacity: 1,
        strokeWeight: 3
    });
    e.df.setMap(e.C)
}
function di(e) {
    e.Pg.setMap(null);
    e.df.setMap(null);
    e.C.setZoom(5);
    e.C.setCenter(e.Na)
}
function ei(e, t) {
    ai.call(this, e, t);
    this.zf = E("js-map-location");
    this.Ah = E("js-map-search");
    this.xh = E("js-location-form");
    this.R = E("js-location-input");
    this.Le = E("js-clear-location");
    this.Sg = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
    new google.maps.places.Autocomplete(this.R);
    fi(this);
    var n = this;
    Modernizr.geolocation && (this.Ke = Ob("span", {
        "class": "map__cta right js-active icon -location-grey"
    }), Wb(this.Ah, this.Ke), O(this.Ke, "click", function () {
        n.Je()
    }));
    if (!Modernizr.input.placeholder) {
        var r = P(n.R, "inputValue");
        n.R.value = r;
        O(n.R, "focus", function () {
            this.value = ""
        });
        O(n.R, "blur", function () {
            this.value = "locationValue"
        });
        O(n.Le, "click", function () {
            n.R.value = "Your location"
        })
    }
    O(this.Le, "click", function () {
        gi(n)
    })
}
function fi(e) {
    e.Sg || O(e.R, "blur", function (t) {
        t.preventDefault();
        e.R.value && !x(e.R, "js-active") && setTimeout(function () {
            hi(e, e.R.value)
        }, 200)
    });
    O(e.xh, "submit", function (t) {
        t.preventDefault();
        hi(e, e.R.value)
    })
}
function hi(e, t) {
    (new google.maps.Geocoder).geocode({
        address: t
    }, function (t, n) {
        if (n == google.maps.GeocoderStatus.OK) {
            var r = t[0].address_components;
            e.jb = t[0].geometry.location;
            e.sd = bi(r);
            e.new_u = bi_1(r);
            ci(e)
        } else alert("Location not found! Try again?")
    })
}
function gi(e) {
    e.R.value = "";
    di(e);
    db(e.zf, "js-active");
    w(e.R, "js-active");
    TweenMax.to(e.a, .5, {
        height: 545,
        ease: Expo.easeOut
    });
    TweenMax.to({
        x: 0
    }, .25, {
        x: 1,
        onComplete: function () {
            var t = e.C.getCenter();
            google.maps.event.trigger(e.C, "resize");
            e.C.panTo(t)
        }
    })
}
function ii(e, t) {
    this.Kg = E("js-cta", e);
    this.Od = E("js-distance", e);
    this.He = E("js-before", e);
    this.td = E("js-after", e);
    this.Ee = E("js-after-delay", this.a);
    this.uMore = E("js-url-more", e);
    TweenMax.set(this.td, {
        autoAlpha: 0,
        y: -100
    });
    TweenMax.set(this.Ee, {
        autoAlpha: 0,
        y: 100
    });
    ai.call(this, e, t);
    Modernizr.geolocation && fd(this.Kg, this.Je, this, !0)
}
function ji(e) {
    var t = {
        y: Nb(document).y
    },
        n = jc(e.a, !0),
        n = n.y;
    TweenMax.to(t, .3, {
        y: n,
        onUpdate: function () {
            window.scrollTo(0, t.y)
        },
        onComplete: function () {
            window.scrollTo(0, n)
        }
    })
}
function ki(e) {
    L.call(this);
    this.a = e;
    this.L = P(this.a, "accordionName");
    this.ce = !1;
    this.Jb = [];
    li(this);
    mi.set(this.L, this)
}
function li(e) {
    e.qh = C("js-accordion-label", e.a);
    s(e.qh, function (t) {
        var n = bc(t, "js-accordion-item");
        this.Jb.push((new Hammer(t)).on("tap", function () {
            if (x(n, "is-active")) w(n, "is-active");
            else {
                var t = C("is-active", e.a);
                s(t, function (e) {
                    w(e, "is-active")
                });
                v(n, "is-active");
                var r = {
                    y: Nb(document).y
                },
                    i = jc(n).y;
                TweenMax.to(r, .3, {
                    y: i,
                    onUpdate: function () {
                        window.scrollTo(0, r.y)
                    },
                    onComplete: function () {
                        window.scrollTo(0, i)
                    }
                })
            }
        }))
    }, e)
}
function ni(e, t) {
    e.Jb.push((new Hammer(t)).on("tap", function () {
        db(t, "is-active");
        e.toggle()
    }))
}
function oi(e, t) {
    e.Jb.push((new Hammer(t)).on("tap", function () {
        e.close();
        var t = C("is-active", e.a);
        s(t, function (e) {
            w(e, "is-active")
        })
    }))
}
function pi() {
    var e;
    e = e || "js-accordion";
    var t = C(e);
    s(t, function (e) {
        new ki(e)
    });
    t = C(e + "-toggle");
    s(t, function (e) {
        var t = P(e, "accordionTarget");
        t ? ni(mi.get(t), e) : e.style.display = "none"
    });
    e = C(e + "-close");
    s(e, function (e) {
        var t = P(e, "accordionTarget");
        t && oi(mi.get(t), e)
    })
}
function qi(e) {
    if (!(this instanceof qi)) return new qi(e);
    this.a = e;
    this.ea = C("js-match-item", this.a);
    e = n(this.Hf, this);
    O(window, window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize", e);
    e()
}
function Rg() {
    return qi.apply(qi, arguments)
}
function Wf(e, t, r, i) {
    L.call(this);
    this.a = e;
    this.L = P(this.a, "pagingNamespace");
    this.L || (this.L = "paging" + (new Date).getTime());
    this.Ug = "boolean" === typeof r ? r : !1;
    this.Eb = "function" === typeof i ? i : aa();
    this.Ua = (this.Ua = P(this.a, "transition")) || "slide";
    this.se = "true" === P(this.a, "staggerIn");
    this.Oa = C("js-pane", this.a);
    this.Lh = C("js-pane-forward", this.a);
    this.xg = C("js-pane-back", this.a);
    this.J = H(this.Oa[0]).height;
    this.od = H(this.a).width;
    this.qe = this.Oa.length;
    this.P = 0;
    this.oa = !1;
    s(this.Lh, function (e) {
        F(e, "cursor", "pointer");
        (new Hammer(e)).on("tap", n(this.kf, this))
    }, this);
    "object" === typeof t && s(t, function (e) {
        (new Hammer(e)).on("tap", n(this.kf, this))
    }, this);
    s(this.xg, function (e) {
        F(e, "cursor", "pointer");
        (new Hammer(e)).on("tap", n(this.gh, this))
    }, this);
    var o = n(this.refresh, this),
        u = "true" === P(this.a, "mobileOnly"),
        a = this,
        f;
    f = window.Be && pc ? "deviceorientation" : "onorientationchange" in window ? "orientationchange" : "resize";
    I.on("breakpoint", function (e) {
        var t = e[1];
        "mobile" === e[0] && (u && "exit" === t && a.za ? (bd(a.za), a.za = null, ri(a)) : "enter" !== t || a.za || (si(a), a.za = O(window, f, o)), a.oa = "enter" === t)
    });
    u || (si(this), this.za = O(window, f, o));
    Sg.set(this.L, this);
    L.call(this)
}
function ri(e) {
    F(e.a, {
        "min-height": "",
        "z-index": ""
    });
    s(e.Oa, function (e) {
        F(e, {
            display: "",
            position: "",
            top: "",
            left: "",
            right: "",
            width: "",
            "z-index": ""
        });
        TweenMax.set(e, {
            x: 0
        })
    }, e)
}
function si(e) {
    F(e.a, {
        "min-height": e.J + "px",
        "z-index": 12
    });
    TweenMax.set(e.a, {
        "min-height": e.J
    });
    s(e.Oa, function (e, t) {
        F(e, {
            display: 0 === t || "none" === this.Ua ? "block" : "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            "z-index": 0 === t ? 10 : 0
        });
        "slide" === this.Ua && TweenMax.set(e, {
            x: 0 === t ? 0 : this.od
        });
        if (this.se) {
            var n = C("js-stagger-in", e),
                n = [].slice.call(n),
                r = n.slice(0);
            r.reverse();
            e.re = n;
            e.hi = r
        }
    }, e)
}
function ti(e, t, r) {
    var i = e.P,
        o = e.Oa[t],
        u = e.Oa[i],
        a = H(o).height;
    e.se && TweenMax.to(o.re, 0, {
        x: 50 * r,
        opacity: 0
    });
    e.J !== a && (e.J = H(o).height, setTimeout(n(function () {
        TweenMax.to(this.a, "none" === this.Ua ? 0 : .5, {
            "min-height": this.J,
            ease: Expo["ease-out"]
        })
    }, e), 250));
    "slide" === e.Ua ? (TweenMax.set(o, {
        x: -1 * r * e.od
    }), TweenMax.to(u, .5, {
        x: r * e.od,
        ease: Expo.easeOut
    }), TweenMax.to(o, .5, {
        x: 0,
        ease: Expo.easeOut,
        onStart: function () {
            F(o, {
                display: "block",
                "z-index": 10
            });
            F(u, {
                position: "absolute"
            });
            this.P = t;
            this.Eb(o)
        },
        onComplete: function () {
            F(u, {
                display: "none",
                "z-index": 0
            });
            F(o, {
                position: "relative"
            })
        },
        onStartScope: e
    })) : "fade" === e.Ua ? (TweenMax.to(u, .5, {
        autoAlpha: 0,
        onComplete: function () {
            F(u, {
                display: "none",
                zIndex: 0
            })
        }
    }), TweenMax.to(o, .5, {
        autoAlpha: 1,
        onStart: function () {
            F(o, "display", "block");
            this.Eb(o)
        },
        onComplete: function () {
            F(o, "zIndex", 10);
            this.P = t
        },
        onStartScope: e,
        onCompleteScope: e
    })) : (F(u, {
        opacity: 0,
        zIndex: 0
    }), F(o, {
        opacity: 1,
        zIndex: 10
    }), e.P = t, e.Eb(o));
    e.se && (e.oa ? TweenMax.set(o.re, {
        opacity: 1,
        x: 0
    }) : s(t < i ? o.hi : o.re, function (e, t) {
        TweenMax.to(e, .1, {
            opacity: 1,
            delay: .1 * t + .05
        }, .1);
        TweenMax.to(e, .6, {
            x: 0,
            delay: .1 * t
        })
    }))
}
function Vg(e, t) {
    var n = Math.min(t || 0, e.qe - 1);
    e.P !== n && ti(e, n, 1)
}
function ui() {
    var e = E("js-experiment-partial");
    K && v(e, "fallback");
    var t = this;
    I.on("breakpoint", function (n) {
        var r = n[1];
        "mobile" === n[0] ? "enter" === r ? (v(e, "fallback"), vi()) : K || w(e, "fallback") : (K || void 0 !== t.qa || $h("LogisticsHeader", e, {
            background: "#ff0000"
        }, function (e) {
            t.qa = e
        }), wi())
    })
}
function vi() {
	console.log("here?")
    if (void 0 === tc && Modernizr.geolocation) {
        tc = null;
        var e = E("js-mobile-map"),
            t = new ElementVisibleController(e),
            n = window.innerWidth || document.documentElement.clientWidth,
            r = H(e).height,
            i = function () {
                tc = new ii(e, {
                    draggable: !1,
                    anchor: [10, 32],
                    scaledSize: [20, 32],
                    zoomControl: !1,
                    optimized: !0,
                    panBy: [~~ (.25 * -n), ~~ (.25 * -r)]
                });
                t.off("enter", i)
            };
        t.on("enter", i)
    }
}
function wi() {
    if (void 0 === uc && Modernizr.geolocation) {
        uc = null;
        var e = E("js-desktop-map"),
            t = new ElementVisibleController(e),
            n = function () {
                uc = new ei(e, {
                    draggable: !0,
                    anchor: [17, 51],
                    scaledSize: [33, 51],
                    zoomControl: !0,
                    optimized: !0,
                    panBy: [0, 0]
                });
                t.off("enter", n)
            };
        t.on("enter", n)
    }
}
function xi(e) {
    function t() {
        this.ud();
        n.off("enter", t, this)
    }
    this.a = e;
    this.vg = C("js-card-point", this.a);
    this.ea = C("js-card", this.a);
    TweenMax.set(this.ea, {
        y: 50
    });
    var n = new ElementVisibleController(this.vg);
    n.on("enter", t, this)
}
function yi(e, t, n) {
    var r = this;
    this.a = e;
    this.L = P(this.a, "toggleName");
    this.jc = C("js-toggler--" + this.L, this.a);
    this.B = E("js-toggle-content--" + this.L, this.a);
    this.Fc = P(this.a, "direction");
    this.Fc = "left" === this.Fc ? -1 : 1;
    this.Xe = t;
    this.ca = n ? !0 : !1;
    n && this.ta(!1);
    s(this.jc, function (e) {
        (new Hammer(e)).on("tap", function () {
            r.ta(!0)
        })
    })
}
function zi(e, t, n) {
    var r = this;
    this.uc = Kb("body", "", void 0)[0];
    this.$a = [];
    this.Ra = E("js-basement-sibling", e);
    this.mg = this.te = !1;
    I.on("breakpoint", function (e) {
        var t = e[0];
        e = e[1];
        "x-large" === t && r.ta("exit" === e, !0);
        "mobile" === t && ("exit" === e && r.ca && r.ta(!0, !1), r.mg || "enter" !== e || (TweenMax.set(r.B, {
            x: r.Fc * H(r.B).width
        }), r.mg = !0))
    });
    yi.call(this, e, t, n)
}
function Ai(e) {
    function t(e) {
        e = e || window.event;
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = !1
    }
    e.Hd = Nb(document).y;
    TweenMax.set(e.Ra, {
        y: -e.Hd
    });
    TweenMax.set(e.jc, {
        y: e.Hd
    });
    F(e.Ra, "position", "fixed");
    e.$a.push(O(e.Ra, "DOMMouseScroll", t));
    e.$a.push(O(e.Ra, "mousewheel", t));
    e.$a.push(O(e.Ra, "touchmove", t))
}
function Bi() {
    var e = this;
    this.a = E("js-back-to-top");
    this.J = H(this.a).height;
    TweenMax.set(this.a, {
        autoAlpha: 0,
        y: this.J
    });
    (new Hammer(this.a)).on("tap", function () {
        Ci(e)
    });
    this.Mh = E("js-toggle-back-to-top");
    this.Aa = new ElementVisibleController(this.Mh);
    this.Aa.on("enter", function () {
        Di(e, !1)
    });
    this.Aa.on("exit", function () {
        Di(e, !0)
    });
    this.gf = E("section.-footer");
    this.ff = new ElementVisibleController(this.gf);
    this.ff.on("enter", function () {
        TweenLite.to(e.a, .2, {
            marginBottom: H(e.gf).height,
            ease: Expo.easeOut
        })
    });
    this.ff.on("exit", function () {
        TweenLite.to(e.a, .2, {
            marginBottom: 0,
            ease: Expo.easeOut
        })
    })
}
function Di(e, t) {
    TweenMax.to(e.a, .3, {
        autoAlpha: t ? 1 : 0,
        ease: Expo.easeOut
    });
    TweenMax.to(e.a, .6, {
        y: t ? 0 : e.J,
        ease: Expo.easeOut
    })
}
function Ci(e) {
    var t = {
        y: null !== window.pageYOffset ? window.pageYOffset : null !== document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop
    };
    TweenLite.to(e.a, .1, {
        marginBottom: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(t, .5, {
        y: 0,
        delay: .1,
        ease: Expo.easeOut,
        onUpdate: function () {
            window.scrollTo(0, t.y)
        },
        onComplete: function () {
            window.scrollTo(0, 0)
        }
    })
}
function Ei(e) {
    var t = this;
    this.U = e;
    this.O = void 0;
    var n = !1;
    this.U.href ? (target = this.U.href.split("#"), target = 0 < target.length ? target[1] : this.U.href, this.O = B(target), n = !0) : (target = P(this.U, "scrollToTarget"), this.O = pe('[data-scroll-to-name="' + target + '"]')[0]);
    this.Oh = n ? 30 : 0;
    O(this.U, "click", function (e) {
        e.preventDefault();
        n && (window.location.hash = "!/" + t.O.id);
        Fi(t, !0)
    })
}
function Fi(e, t) {
    var n = {
        y: Nb(document).y
    },
        r = ~~kc(e.O).y - e.Oh;
    TweenLite.to(n, t ? .5 : 0, {
        y: r,
        ease: Expo.easeOut,
        onUpdate: function () {
            window.scrollTo(0, n.y)
        },
        onComplete: function () {
            window.scrollTo(0, r)
        }
    })
}
function Gi() {
    new Bi;
    var e = null;
    0 < window.location.hash.indexOf("!/") && (e = window.location.hash.split("!/"), e = 0 < e.length ? e[1] : null);
    var t = {};
    s(C("js-scroll-to"), function (e) {
        e = new Ei(e);
        t[e.O.id] = e
    });
    O(window, "load", function () {
        void 0 !== t[e] && Fi(t[e], !1)
    }, !1)
}
function Hi() {
    var e = this;
    this.kg = E("js-videos-holder");
    O(window, "load", function () {
        this.bb = new Ii;
        this.Qa = new Qf(Eg, "/io14videos")
    }, !1, this);
    this.oe();
    var t = E("js-experiment-partial");
    K && v(t, "fallback");
    I.on("breakpoint", function (n) {
        var r = n[1];
        "mobile" === n[0] ? "enter" === r ? v(t, "fallback") : K || w(t, "fallback") : K || void 0 !== e.qa || $h("VideosHeader", t, {
            background: "#ff0000"
        }, function (t) {
            e.qa = t
        })
    })
}
function Ji(e) {
    this.v = e;
    this.F = null;
    this.Af = [];
    var t = this;
    console.log("???????");
    google.maps.event.addDomListener(window, "load", function () {
        Cf("/events/io/io-extended/event", function (e) {
            Ki(t, Nf(e.target).events)
        })
    })
}
function Ki(e, t) {
    e.c = t;
    e.F = new google.maps.Map(e.v, {
        zoom: 2,
        minZoom: 2,
        scrollwheel: !1,
        center: new google.maps.LatLng(21.4225, 39.82615),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: !0,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        optimized: !0,
        disableDefaultUI: !0
    });
    for (var n = new google.maps.MarkerImage("/images/map-dot.png", new google.maps.Size(22, 32)), r = 0; r < e.c.length; r++) {
        var i = new google.maps.LatLng(e.c[r].latitude, e.c[r].longitude),
            i = new google.maps.Marker({
                position: i,
                icon: n,
                title: t.event_name
            });
        e.Af.push(i);
        (function (e, t, n) {
            var r = new google.maps.InfoWindow({
                content: Cg({
                    name: n.event_name,
                    url: n.link
                }).content
            });
            google.maps.event.addListener(t, "click", function () {
                r.open(e, t)
            })
        })(e.F, i, e.c[r])
    }
    new MarkerClusterer(e.F, e.Af, {
        enableRetinaIcons: !0,
        styles: [{
            url: "/images/map-dot.png",
            width: 45,
            height: 45,
            textColor: "#263238",
            textSize: 15
        }]
    })
}
function Li() {
    var e = E("js-experiment-partial");
    K && v(e, "fallback");
    var t = this;
    I.on("breakpoint", function (n) {
        var r = n[1];
        "mobile" === n[0] ? "enter" === r ? v(e, "fallback") : K || w(e, "fallback") : K || void 0 !== t.qa || $h("ExtendedHeader", e, {
            background: "#37464f"
        }, function (e) {
            t.qa = e
        })
    });
    var n = E("js-events-map");
    n && new Ji(n)
}
function Mi(e, t) {
    L.call(this);
    this.Bf = t;
    this.Nb = [];
    if (e > this.Bf) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
    for (var n = 0; n < e; n++) this.Nb.push(this.Ac())
}
function Ni(e, t) {
    e.Nb.length < e.Bf ? e.Nb.push(t) : e.Md(t)
}
function Oi() {
    this.aa = [];
    this.ge = new Ad;
    this.cg = this.dg = this.eg = this.Xf = 0;
    this.hc = new Ad;
    this.Me = this.bg = 0;
    this.Hh = 1;
    this.Rd = new Mi(0, 4e3);
    this.Rd.Ac = function () {
        return new Pi
    };
    this.Yf = new Mi(0, 50);
    this.Yf.Ac = function () {
        return new Qi
    };
    var e = this;
    this.Xd = new Mi(0, 2e3);
    this.Xd.Ac = function () {
        return String(e.Hh++)
    };
    this.Xd.Md = aa()
}
function Qi() {
    this.we = this.time = this.count = 0
}
function Pi() {}
function Ri(e, t, n, r) {
    var i = []; - 1 == n ? i.push("    ") : i.push(Si(e.Ye - n));
    i.push(" ", Ti(e.Ye - t));
    0 == e.Sd ? i.push(" Start        ") : 1 == e.Sd ? (i.push(" Done "), i.push(Si(e.Xi - e.startTime), " ms ")) : i.push(" Comment      ");
    i.push(r, e);
    0 < e.Bi && i.push("[VarAlloc ", e.Bi, "] ");
    return i.join("")
}
function Si(e) {
    e = Math.round(e);
    var t = "";
    1e3 > e && (t = " ");
    100 > e && (t = "  ");
    10 > e && (t = "   ");
    return t + e
}
function Ti(e) {
    e = Math.round(e);
    return String(100 + e / 1e3 % 60).substring(1, 3) + "." + String(1e3 + e % 1e3).substring(1, 4)
}
function Ui(e) {
    this.v = e;
    this.hb = !1;
    this.mh = 400;
    this.lh = 3e3;
    this.ti = 800;
    this.ri = 1e3;
    this.uf = 0;
    this.$d = !1;
    this.Mb = !0;
    this.Gc = !1;
    this.La = null;
    this.kh = u(["p", "c", "w", "t"], function (e) {
        return {
            type: e,
            icons: Zb(B(e + "-icons"))
        }
    }, this);
    this.zc = B("c-reveal");
    this.nd = B("w-reveal");
    this.Sc = B("p-reveal");
    this.dd = B("t-reveal");
    Ja({
        phone_1_: this.ef,
        watch_1_: this.ef,
        computer_1_: this.dh,
        tablet_1_: this.eh
    }, this.vh, this);
    e = new ElementVisibleController(this.v);
    e.on("enter", this.Wg, this);
    e.on("exit", this.Xg, this);
    I.on("breakpoint", this.pa, this);
    e = I.getActiveBreakpoints()[0];
    Vi(this, e)
}
function Vi(e, t) {
    e.hb && "mobile" === t ? e.hb && (e.hb = !1, clearInterval(e.wg)) : e.hb || "mobile" === t || e.hb || (e.hb = !0, e.fg(), e.wg = setInterval(n(e.fg, e), e.lh))
}
function Wi(e) {
    e.La = null;
    e.zc.setAttribute("display", "none");
    e.nd.setAttribute("display", "none");
    e.Sc.setAttribute("display", "none");
    e.dd.setAttribute("display", "none");
    TweenLite.to(B("phone_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(B("watch_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    });
    TweenLite.to(B("tablet_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    })
}
function Xi() {
    var e = E("js-experiment-partial");
    e && (K && rd(e, "fallback"), I.on("breakpoint", function (t) {
        var r = t[1];
        "mobile" === t[0] ? "enter" === r ? rd(e, "fallback") : K || sd(e, "fallback") : K || void 0 !== this.qa || $h("SandboxHeader", e, null, n(function (e) {
            this.qa = e
        }, this))
    }, this));
    var t = C("js-card-expand");
    s(t, yc);
    Modernizr.inlinesvg && Modernizr.csstransforms ? new Ui(B("devices")) : rd(document.body, "fallback-blueprint")
}
function Yi() {
    var e = this;
    this.gb = [];
    this.refresh();
    this.za = O(window, "scroll", function () {
        Zi(e)
    })
}
function $i(e) {
    e = hc(e);
    return 0 <= e.top && 0 <= e.left && e.top <= (window.innerHeight || document.documentElement.clientHeight)
}
function aj(e, t) {
    var n = new Image,
        r = P(e, "src");
    n.onload = function () {
        e.parent ? e.parent.replaceChild(n, e) : e.src = r;
        "function" === typeof t && t()
    };
    n.src = r;
    rd(e, "loaded")
}
function Zi(e) {
    var t = I.getActiveBreakpoints();
    if (!(1 > t.length)) {
        for (var t = "mobile" === t[0], n = 0; n < e.gb.length; n++) {
            var r = e.gb[n];
            t && qd(r, "js-prevent-load-mobile") || qd(r, "loaded") || !$i(r) || aj(r, function () {
                e.gb.splice(n, n)
            })
        }
        C("js-lazy-load.loaded").length === e.gb.length && bd(e.za)
    }
}
function Ii(e) {
    var t = this;
    this.k = e;
    this.aa = C("js-event-card");
    this.rh = E("js-large-filters");
    this.Yg = E("js-filter-holder", this.rh);
    this.ah = C("js-filter", this.Ki);
    this.$g = E("js-filters-headline");
    this.cb = E("js-mobile-filter-holder");
    this.cf = E("js-toggler--filters");
    this.Zg = E("js-filters-dismiss");
    this.Zf = E("js-tags");
    C("js-filter");
    this.nb = !1;
    this.Fh = C("js-my-schedule");
    this.tf = E("schedule__list") || E("videos__list");
    this.Df = E("js-my-schedule-false");
    this.Ef = E("js-my-schedule-true");
    this.Gb = E("-js-filter-current-holder");
    this.Xc = E("-js-filters-pretty");
    s(this.ah, this.tg, this);
    s(this.Fh, function (e) {
        O(e, "click", function (e) {
            e.preventDefault();
            e.stopPropagation()
        });
        (new Hammer(e)).on("tap", function (e) {
            e.preventDefault();
            e.gesture.preventDefault();
            t.k && (t.k.pe ? (bj(), t.nb = !t.nb, t.nb ? (v(t.Df, "-hide"), w(t.Ef, "-hide")) : (w(t.Df, "-hide"), v(t.Ef, "-hide")), cj(t)) : Xf(t.k))
        });
        (new Hammer(e)).on("click", function (e) {
            e.preventDefault();
            e.gesture && e.gesture.preventDefault()
        })
    });
    (new Hammer(this.Zf)).on("click", function () {
        db(t.Zf, "expanded");
        dj(t)
    });
    oc.on("resize", function () {
        dj(t)
    });
    (new Hammer(this.cb)).on("drag", function (e) {
        t.cb.scrollTop += (0 > e.gesture.interimAngle ? 1 : -1) * 20 * e.gesture.velocityY;
        e.preventDefault();
        e.gesture.preventDefault()
    });
    (new Hammer(this.Zg)).on("tap", function () {
        db(t.cb, "-hide")
    });
    if (this.cf)(new Hammer(this.cf)).on("tap", function () {
        w(t.cb, "-hide")
    });
    if (this.bf = E("js-clear-filters-mobile"))(new Hammer(this.bf)).on("tap", function () {
        v(t.Gb, "-hide");
        bj();
        cj(t)
    });
    ej(this);
    fj(this)
}
function ej(e) {
    if (window.location.hash && window.location.hash.match(/#!\/filter\/(\w+)/)) {
        var t = window.location.hash.split("filter/")[1];
        t && t.length && s(t.split(":"), function (e) {
            e = pe("[data-filter-by=" + e + "]");
            s(e, this.Uf, this)
        }, e)
    }
}
function dj(e) {
    e.Yg.style.height = window.innerHeight - H(e.$g).height + "px"
}
function bj() {
    s(C("js-filter.selected"), function (e) {
        w(e, "selected")
    })
}
function cj(e) {
    var t = [],
        n = C("js-timeslot-label.fixed");
    bc(n[n.length - 1], "js-timeslot");
    C("js-event:not(.-hide)");
    var r = [];
    s(C("js-filter.selected"), function (e) {
        var n = e.getAttribute("data-filter-by");
        r.push(e.getAttribute("data-filter-name"));
        n && t.push(n)
    });
    var i = t.length + (e.nb ? 1 : 0),
        n = C("js-date"),
        o = C("js-day"),
        u = C("js-timeslot"),
        a = 0;
    if (i) {
        e.Xc && ac(e.Xc, r.join(", "));
        e.Gb && (1 === i && !e.nb || 1 < i) && w(e.Gb, "-hide");
        s(e.aa, function (n) {
            var r = 0;
            w(n, "last");
            s(t, function (e) {
                x(n, "-" + e) && r++
            });
            e.nb && e.k && Tf(e.k) && -1 !== Oa(Tf(e.k), n.getAttribute("data-id")) && r++;
            r !== i ? v(n, "-hide") : w(n, "-hide")
        });
        var f = !1;
        s(u, function (e) {
            var t = C("js-event-card", e),
                n = C("js-event-card.-hide", e);
            0 === t.length - n.length ? v(e, "-hide") : (a++, f || (f = !0, v(e, "first")), w(e, "-hide"), e = C("js-event-card:not(.-hide)", e), e.length && v(e[e.length - 1], "last"))
        });
        var l = 0;
        s(o, function (e) {
            var t = E("js-empty-slots-" + ++l);
            C("js-timeslot:not(.-hide)", e).length ? v(t, "-hide") : w(t, "-hide")
        })
    } else e.Xc && ac(e.Xc, ""), e.Gb && v(e.Gb, "-hide"), a++, s(e.aa, function (e) {
        w(e, "-hide");
        w(e, "last")
    }), s(u, function (e) {
        w(e, "-hide");
        w(e, "first");
        w(e, "last")
    }), l = 0, s(n, function () {
        l++;
        v(E("js-empty-slots-" + l), "-hide")
    });
    fj(e);
    e.refresh()
}
function fj(e) {
    var t = C("js-day"),
        n = C("js-date"),
        r = 0;
    s(t, function (e) {
        r += H(e).height
    });
    s(n, function (e) {
        r += H(e).height
    });
    t = window.innerHeight - 80;
    r < t && (r = t);
    e.tf && (e.tf.style.height = r + "px");
    dj(e)
}
function gj(e) {
    this.ng = "https://iosched-gcm.appspot.com/send/self/sync_user";
    this.og = "downloadUrl";
    this.pg = "id";
    this.Ae = !1;
    this.filename = e;
    this.Ud = this.Td = null;
    this.sf = !1
}
function hj(e, t, n) {
    if (!ij(t)) throw Error('Data is not in a valid format. Expected something like {"starred_sessions": ["string_session_id1", "string_session_id2"]} but found ' + JSON.stringify(t));
    jj(e, e.rg, [t, n])
}
function kj(e, t) {
    jj(e, e.qg, [t])
}
function ij(e) {
    return null != e && "object" === typeof e && "starred_sessions" in e && Array.isArray(e.starred_sessions) && e.starred_sessions.every(function (e) {
        return "string" === typeof e
    })
}
function jj(e, t, n) {
    e.sf ? t.apply(e, n) : lj(e, function (e) {
        mj(this, e);
        this.sf = !0;
        t.apply(this, n)
    }.bind(e))
}
function mj(e, t) {
    t && (e.Ud = t[e.pg], e.Td = t[e.og])
}
function lj(e, t) {
    var n = function (e, r) {
            e.execute(function (i) {
                this.Ae && console.debug("found files with title", i.items);
                for (var s = 0; i.items && s < i.items.length; s++) {
                    var o = i.items[s];
                    if (null == r || o.title == this.filename && 0 > (r.modifiedDate < o.modifiedDate ? -1 : r.modifiedDate > o.modifiedDate ? 1 : 0)) r = o
                }(i = i.Mi) ? (e = gapi.client.drive.files.list({
                    pageToken: i
                }), n(e, r)) : t(r)
            }.bind(this))
        }.bind(e),
        r = gapi.client.drive.files.list({
            q: "'appdata' in parents and title contains '" + e.filename + "'"
        });
    n(r, null)
}
function nj(e, t) {
    this.Gg = e;
    this.af = t;
    this.Cb = null;
    this.fc = {};
    this.pe = !1;
    this.bb = this.Qa = null
}
function Tf(e) {
    return e.fc.starred_sessions
}
function oj(e) {
    gapi.client.load("drive", "v2", e)
}
function Xf(e, t) {
    gapi.auth.authorize({
        client_id: e.Gg,
        scope: "https://www.googleapis.com/auth/drive.appdata",
        immediate: t
    }, function (t) {
        t && t.status.signed_in && (pj(e), e.pe = !0)
    })
}
function qj(e, t) {
    e.Cb || (e.Cb = new gj(e.af));
    hj(e.Cb, t, aa())
}
function pj(e) {
    "this.appDataFile_" in window || (e.Cb = new gj(e.af));
    kj(e.Cb, function (t) {
        t ? t.starred_sessions || (t.starred_sessions = []) : t = {
            starred_sessions: []
        };
        e.fc = t;
        Vf(e.Qa, t)
    })
}
function rj(e, t, n) {
    L.call(this);
    this.cd = e;
    this.Yd = t;
    this.Ia = n;
    this.si = .9;
    if (t = P(this.cd, "tabTarget")) {
        this.O = pe("[data-tab-namespace=" + this.Ia.L + "] [data-tab-name=" + t + "]")[0];
        this.i();
        var r = this;
        this.Nh = (new Hammer(e)).on("tap", function () {
            r.Ia.setActive(r.Yd)
        })
    }(e = C("js-delay", this.O)) && e.length && (this.Ia.ih = !0, this.Dc = [].slice.call(e), this.Re = this.Dc.slice(0), this.Re.reverse())
}
function tj(e, t, n) {
    e = t ? e.Re : e.Dc;
    TweenLite.to(e, 0, {
        x: t ? -100 : 100,
        opacity: 0
    });
    s(e, function (e) {
        TweenMax.to(e, .1, {
            opacity: 1,
            delay: i * n + .05
        }, n);
        TweenMax.to(e, .6, {
            x: 0,
            delay: i * n,
            ease: Expo.easeOut
        })
    })
}
function uj(e, t) {
    L.call(this);
    this.a = e;
    this.L = P(this.a, "tabNamespace");
    this.B = E("js-tab-content-container", this.a);
    this.Bg = t;
    this.ih = !1;
    vj(this);
    this.Bd = n(function () {
        var e = I.getActiveBreakpoints();
        this.pi = Ua(e, "desktop") || Ua(e, "x-large")
    }, this);
    this.Bd();
    I.on("breakpoint", this.Bd);
    this.Pf = n(this.gi, this);
    oc.on("resize", this.Pf);
    wj.set(this.L, this)
}
function vj(e) {
    var t = C("js-activate-tab", e.a);
    e.$ = u(t, function (e, t) {
        return new rj(e, t, this)
    }, e);
    e.setActive(0)
}
function sj(e, t) {
    e.B.style.height = t + "px"
}
function xj(e) {
    var t = C("js-tabs");
    s(t, function (t) {
        new uj(t, e)
    })
}
function yj() {
    var e = this;
    this.sa = null;
    this.fi = !0;
    O(window, "load", function () {
        this.$ = C("js-schedule-tab");
        this.Qe = C("js-day-container");
        this.k = new nj(E("js-google-drive-client-id").getAttribute("data-google-drive-client-id"), "starred_sessions.json");
        this.Qa = new Qf(Dg, "/schedule", this.k);
        this.bb = new Ii(this.k);
        var e = this.k,
            t = this.bb;
        e.Qa = this.Qa;
        e.bb = t;
        this.k.getData();
        xj(n(this.bb.refresh, this.bb));
        this.xc()
    }, !1, this);
    s(C("js-toggle"), function (e) {
        new yi(e, .4, !0)
    });
    this.oe();
    I.on("breakpoint", function (t) {
        "enter" === t[1] && Sf(e)
    });
    O(window, "scroll", n(this.xc, this))
}
function Sf(e) {
    e.sa && s(e.sa, function (e) {
        e.onResize()
    })
}
function Aj(e) {
    var t = {
        help: Gi,
        home: Zh,
        "home-live": Wh,
        "home-post": Yf,
        "io-extended": Li,
        logistics: ui,
        sandbox: Xi,
        schedule: yj,
        videos: Hi
    };
    "undefined" !== typeof e && t[e] && (qc = new t[e])
}
function Bj(e) {
    e = C(e);
    s(e, function (e) {
        x(e, "loaded") || x(e, "js-lazy-init") || (e = ResponsiveImage.createFromElement(e, void 0), sc.push(e), ResponsiveImage.update(e))
    })
}
function zj() {
    var e = Pa(pe("h1,h2,h3,h4,h5,h6,p,li,a,a span"), function (e) {
        return !x(e, "allow-orphan")
    });
    md(e)
}
function $h(e, t, n, r) {
    var i = null,
        s = document.createElement("script");
    s.onload = function () {
        "function" === typeof i && (i = i());
        var s = new partials.PageInit(i),
            o = partials.chapter[e];
        n || (n = {});
        n.chapter = new o;
        n.partial = !0;
        n.element = t;
        s.init(n);
        o = new ElementVisibleController(t);
        o.on("enter", s.unPauseExp);
        o.on("exit", s.pauseExp);
        window.curr = n.chapter;
        "function" === typeof r && r(s)
    };
    s.src = "//googledrive.com/host/0B9lA1v7cwGK2MHZMMEE1Ti10aEU/partials1.min.js";
    setTimeout(function () {
        document.body.appendChild(s)
    }, 10)
}
function get_location() {
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(function(e){
            var t = e.coords.latitude;
            var n = e.coords.longitude;
            insertParam("location", t + "," + n)
        }, function(e){
        	if(e.code == 1){
        		console.log("asdas");
            	var t = document.getElementById("default-location").getAttribute("content");
            	var t1 = t.split(",");
            	console.log(t1);
            	insertParam(t1);
        	}
        })
    } else {
        console.log("no location?")
    }
}
function insertParam1(t){
	window.location.href = "/schedule/location/@"+ t[3] + "," + t[4] + "/" + atob(t[0]) + ","+ atob(t[1]) + "," + atob(t[2]); 
}
function insertParam(t) {
	var a = "";
	var b = "";
	for(i = 0; i < 3; i++){
		if(t[i].length > 0){
			a += b + atob(t[i]);
			b = ',';
		}
	}
	b = new String();
	console.log(a);
	if(a.length > 0){
		b = '/' + a;
	}
	window.location.href = "/schedule/location/@" + t[3] + "," + t[4] + b;
	/*e = encodeURI(e);
    t = encodeURI(t);
    var n = document.location.search.substr(1).split("&");
    var r = n.length;
    var i;
    while (r--) {
        i = n[r].split("=");
        if (i[0] == e) {
            i[1] = t;
            n[r] = i.join("=");
            break
        }
    }
    if (r < 0) {
        n[n.length] = [e, t].join("=")
    }
    document.location.search = n.join("&")*/
}(function (e) {
    "use strict";

    function t(e, t, n) {
        return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : void 0
    }
    function n(e, t) {
        var n, r;
        for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return !0;
        return !1
    }
    function r(e, t) {
        var n;
        e.createTextRange ? (n = e.createTextRange(), n.move("character", t), n.select()) : e.selectionStart && (e.focus(), e.setSelectionRange(t, t))
    }
    function i(e, t) {
        try {
            return e.type = t, !0
        } catch (n) {
            return !1
        }
    }
    e.Placeholders = {
        Utils: {
            addEventListener: t,
            inArray: n,
            moveCaret: r,
            changeType: i
        }
    }
})(this), function (e) {
    "use strict";

    function t() {}
    function n() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    function r(e, t) {
        var n, r, i = !! t && e.value !== t,
            s = e.value === e.getAttribute(D);
        return (i || s) && "true" === e.getAttribute(P) ? (e.removeAttribute(P), e.value = e.value.replace(e.getAttribute(D), ""), e.className = e.className.replace(_, ""), r = e.getAttribute(q), parseInt(r, 10) >= 0 && (e.setAttribute("maxLength", r), e.removeAttribute(q)), n = e.getAttribute(H), n && (e.type = n), !0) : !1
    }
    function i(e) {
        var t, n, r = e.getAttribute(D);
        return "" === e.value && r ? (e.setAttribute(P, "true"), e.value = r, e.className += " " + M, n = e.getAttribute(q), n || (e.setAttribute(q, e.maxLength), e.removeAttribute("maxLength")), t = e.getAttribute(H), t ? e.type = "text" : "password" === e.type && X.changeType(e, "text") && e.setAttribute(H, "password"), !0) : !1
    }
    function s(e, t) {
        var n, r, i, s, o, u, a;
        if (e && e.getAttribute(D)) t(e);
        else for (i = e ? e.getElementsByTagName("input") : v, s = e ? e.getElementsByTagName("textarea") : m, n = i ? i.length : 0, r = s ? s.length : 0, a = 0, u = n + r; u > a; a++) o = n > a ? i[a] : s[a - n], t(o)
    }
    function o(e) {
        s(e, r)
    }
    function u(e) {
        s(e, i)
    }
    function a(e) {
        return function () {
            g && e.value === e.getAttribute(D) && "true" === e.getAttribute(P) ? X.moveCaret(e, 0) : r(e)
        }
    }
    function f(e) {
        return function () {
            i(e)
        }
    }
    function l(e) {
        return function (t) {
            return b = e.value, "true" === e.getAttribute(P) && b === e.getAttribute(D) && X.inArray(A, t.keyCode) ? (t.preventDefault && t.preventDefault(), !1) : void 0
        }
    }
    function c(e) {
        return function () {
            r(e, b), "" === e.value && (e.blur(), X.moveCaret(e, 0))
        }
    }
    function h(e) {
        return function () {
            e === n() && e.value === e.getAttribute(D) && "true" === e.getAttribute(P) && X.moveCaret(e, 0)
        }
    }
    function p(e) {
        return function () {
            o(e)
        }
    }
    function d(e) {
        e.form && (T = e.form, "string" == typeof T && (T = document.getElementById(T)), T.getAttribute(B) || (X.addEventListener(T, "submit", p(T)), T.setAttribute(B, "true"))), X.addEventListener(e, "focus", a(e)), X.addEventListener(e, "blur", f(e)), g && (X.addEventListener(e, "keydown", l(e)), X.addEventListener(e, "keyup", c(e)), X.addEventListener(e, "click", h(e))), e.setAttribute(j, "true"), e.setAttribute(D, S), (g || e !== n()) && i(e)
    }
    var v, m, g, y, b, w, E, S, x, T, N, C, k, L = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        A = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        O = "#ccc",
        M = "placeholdersjs",
        _ = RegExp("(?:^|\\s)" + M + "(?!\\S)"),
        D = "data-placeholder-value",
        P = "data-placeholder-active",
        H = "data-placeholder-type",
        B = "data-placeholder-submit",
        j = "data-placeholder-bound",
        F = "data-placeholder-focus",
        I = "data-placeholder-live",
        q = "data-placeholder-maxlength",
        R = document.createElement("input"),
        U = document.getElementsByTagName("head")[0],
        z = document.documentElement,
        W = e.Placeholders,
        X = W.Utils;
    if (W.nativeSupport = void 0 !== R.placeholder, !W.nativeSupport) {
        for (v = document.getElementsByTagName("input"), m = document.getElementsByTagName("textarea"), g = "false" === z.getAttribute(F), y = "false" !== z.getAttribute(I), w = document.createElement("style"), w.type = "text/css", E = document.createTextNode("." + M + " { color:" + O + "; }"), w.styleSheet ? w.styleSheet.cssText = E.nodeValue : w.appendChild(E), U.insertBefore(w, U.firstChild), k = 0, C = v.length + m.length; C > k; k++) N = v.length > k ? v[k] : m[k - v.length], S = N.attributes.placeholder, S && (S = S.nodeValue, S && X.inArray(L, N.type) && d(N));
        x = setInterval(function () {
            for (k = 0, C = v.length + m.length; C > k; k++) N = v.length > k ? v[k] : m[k - v.length], S = N.attributes.placeholder, S ? (S = S.nodeValue, S && X.inArray(L, N.type) && (N.getAttribute(j) || d(N), (S !== N.getAttribute(D) || "password" === N.type && !N.getAttribute(H)) && ("password" === N.type && !N.getAttribute(H) && X.changeType(N, "text") && N.setAttribute(H, "password"), N.value === N.getAttribute(D) && (N.value = S), N.setAttribute(D, S)))) : N.getAttribute(P) && (r(N), N.removeAttribute(D));
            y || clearInterval(x)
        }, 100)
    }
    X.addEventListener(e, "beforeunload", function () {
        W.disable()
    }), W.disable = W.nativeSupport ? t : o, W.enable = W.nativeSupport ? t : u
}(this);
(function (e) {
    function t() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }
    function n(e, t) {
        function n() {
            at.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }
        var r = !0;
        return a(function () {
            return r && (n(), r = !1), t.apply(this, arguments)
        }, t)
    }
    function r(e, t) {
        return function (n) {
            return c(e.call(this, n), t)
        }
    }
    function i(e, t) {
        return function (n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }
    function s() {}
    function o(e) {
        T(e), a(this, e)
    }
    function u(e) {
        var t = g(e),
            n = t.year || 0,
            r = t.quarter || 0,
            i = t.month || 0,
            s = t.week || 0,
            o = t.day || 0,
            u = t.hour || 0,
            a = t.minute || 0,
            f = t.second || 0,
            l = t.millisecond || 0;
        this._milliseconds = +l + 1e3 * f + 6e4 * a + 36e5 * u, this._days = +o + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._bubble()
    }
    function a(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }
    function f(e) {
        var t, n = {};
        for (t in e) e.hasOwnProperty(t) && St.hasOwnProperty(t) && (n[t] = e[t]);
        return n
    }
    function l(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }
    function c(e, t, n) {
        for (var r = "" + Math.abs(e), i = e >= 0; r.length < t;) r = "0" + r;
        return (i ? n ? "+" : "" : "-") + r
    }
    function h(e, t, n, r) {
        var i = t._milliseconds,
            s = t._days,
            o = t._months;
        r = null == r ? !0 : r, i && e._d.setTime(+e._d + i * n), s && rt(e, "Date", nt(e, "Date") + s * n), o && tt(e, nt(e, "Month") + o * n), r && at.updateOffset(e, s || o)
    }
    function p(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function d(e) {
        return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
    }
    function v(e, t, n) {
        var r, i = Math.min(e.length, t.length),
            s = Math.abs(e.length - t.length),
            o = 0;
        for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && b(e[r]) !== b(t[r])) && o++;
        return o + s
    }
    function m(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = Gt[e] || Yt[t] || t
        }
        return e
    }
    function g(e) {
        var t, n, r = {};
        for (n in e) e.hasOwnProperty(n) && (t = m(n), t && (r[t] = e[n]));
        return r
    }
    function y(t) {
        var n, r;
        if (0 === t.indexOf("week")) n = 7, r = "day";
        else {
            if (0 !== t.indexOf("month")) return;
            n = 12, r = "month"
        }
        at[t] = function (i, s) {
            var o, u, a = at.fn._lang[t],
                f = [];
            if ("number" == typeof i && (s = i, i = e), u = function (e) {
                var t = at().utc().set(r, e);
                return a.call(at.fn._lang, t, i || "")
            }, null != s) return u(s);
            for (o = 0; n > o; o++) f.push(u(o));
            return f
        }
    }
    function b(e) {
        var t = +e,
            n = 0;
        return 0 !== t && isFinite(t) && (n = t >= 0 ? Math.floor(t) : Math.ceil(t)), n
    }
    function w(e, t) {
        return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
    }
    function E(e, t, n) {
        return Y(at([e, 11, 31 + t - n]), t, n).week
    }
    function S(e) {
        return x(e) ? 366 : 365
    }
    function x(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function T(e) {
        var t;
        e._a && -2 === e._pf.overflow && (t = e._a[vt] < 0 || e._a[vt] > 11 ? vt : e._a[mt] < 1 || e._a[mt] > w(e._a[dt], e._a[vt]) ? mt : e._a[gt] < 0 || e._a[gt] > 23 ? gt : e._a[yt] < 0 || e._a[yt] > 59 ? yt : e._a[bt] < 0 || e._a[bt] > 59 ? bt : e._a[wt] < 0 || e._a[wt] > 999 ? wt : -1, e._pf._overflowDayOfYear && (dt > t || t > mt) && (t = mt), e._pf.overflow = t)
    }
    function N(e) {
        return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)), e._isValid
    }
    function C(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function k(e, t) {
        return t._isUTC ? at(e).zone(t._offset || 0) : at(e).local()
    }
    function L(e, t) {
        return t.abbr = e, Et[e] || (Et[e] = new s), Et[e].set(t), Et[e]
    }
    function A(e) {
        delete Et[e]
    }
    function O(e) {
        var t, n, r, i, s = 0,
            o = function (e) {
                if (!Et[e] && xt) try {
                    require("./lang/" + e)
                } catch (t) {}
                return Et[e]
            };
        if (!e) return at.fn._lang;
        if (!p(e)) {
            if (n = o(e)) return n;
            e = [e]
        }
        for (; s < e.length;) {
            for (i = C(e[s]).split("-"), t = i.length, r = C(e[s + 1]), r = r ? r.split("-") : null; t > 0;) {
                if (n = o(i.slice(0, t).join("-"))) return n;
                if (r && r.length >= t && v(i, r, !0) >= t - 1) break;
                t--
            }
            s++
        }
        return at.fn._lang
    }
    function M(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function _(e) {
        var t, n, r = e.match(kt);
        for (t = 0, n = r.length; n > t; t++) r[t] = nn[r[t]] ? nn[r[t]] : M(r[t]);
        return function (i) {
            var s = "";
            for (t = 0; n > t; t++) s += r[t] instanceof Function ? r[t].call(i, e) : r[t];
            return s
        }
    }
    function D(e, t) {
        return e.isValid() ? (t = P(t, e.lang()), Zt[t] || (Zt[t] = _(t)), Zt[t](e)) : e.lang().invalidDate()
    }
    function P(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var r = 5;
        for (Lt.lastIndex = 0; r >= 0 && Lt.test(e);) e = e.replace(Lt, n), Lt.lastIndex = 0, r -= 1;
        return e
    }
    function H(e, t) {
        var n, r = t._strict;
        switch (e) {
        case "Q":
            return It;
        case "DDDD":
            return Rt;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return r ? Ut : Mt;
        case "Y":
        case "G":
        case "g":
            return Wt;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return r ? zt : _t;
        case "S":
            if (r) return It;
        case "SS":
            if (r) return qt;
        case "SSS":
            if (r) return Rt;
        case "DDD":
            return Ot;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return Pt;
        case "a":
        case "A":
            return O(t._l)._meridiemParse;
        case "X":
            return jt;
        case "Z":
        case "ZZ":
            return Ht;
        case "T":
            return Bt;
        case "SSSS":
            return Dt;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
            return r ? qt : At;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
            return At;
        case "Do":
            return Ft;
        default:
            return n = new RegExp(z(U(e.replace("\\", "")), "i"))
        }
    }
    function B(e) {
        e = e || "";
        var t = e.match(Ht) || [],
            n = t[t.length - 1] || [],
            r = (n + "").match(Kt) || ["-", 0, 0],
            i = +(60 * r[1]) + b(r[2]);
        return "+" === r[0] ? -i : i
    }
    function j(e, t, n) {
        var r, i = n._a;
        switch (e) {
        case "Q":
            null != t && (i[vt] = 3 * (b(t) - 1));
            break;
        case "M":
        case "MM":
            null != t && (i[vt] = b(t) - 1);
            break;
        case "MMM":
        case "MMMM":
            r = O(n._l).monthsParse(t), null != r ? i[vt] = r : n._pf.invalidMonth = t;
            break;
        case "D":
        case "DD":
            null != t && (i[mt] = b(t));
            break;
        case "Do":
            null != t && (i[mt] = b(parseInt(t, 10)));
            break;
        case "DDD":
        case "DDDD":
            null != t && (n._dayOfYear = b(t));
            break;
        case "YY":
            i[dt] = at.parseTwoDigitYear(t);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            i[dt] = b(t);
            break;
        case "a":
        case "A":
            n._isPm = O(n._l).isPM(t);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            i[gt] = b(t);
            break;
        case "m":
        case "mm":
            i[yt] = b(t);
            break;
        case "s":
        case "ss":
            i[bt] = b(t);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            i[wt] = b(1e3 * ("0." + t));
            break;
        case "X":
            n._d = new Date(1e3 * parseFloat(t));
            break;
        case "Z":
        case "ZZ":
            n._useUTC = !0, n._tzm = B(t);
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
            e = e.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
            e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
        }
    }
    function F(e) {
        var t, n, r, i, s, o, u, a, f, l, c = [];
        if (!e._d) {
            for (r = q(e), e._w && null == e._a[mt] && null == e._a[vt] && (s = function (t) {
                var n = parseInt(t, 10);
                return t ? t.length < 3 ? n > 68 ? 1900 + n : 2e3 + n : n : null == e._a[dt] ? at().weekYear() : e._a[dt]
            }, o = e._w, null != o.GG || null != o.W || null != o.E ? u = Z(s(o.GG), o.W || 1, o.E, 4, 1) : (a = O(e._l), f = null != o.d ? K(o.d, a) : null != o.e ? parseInt(o.e, 10) + a._week.dow : 0, l = parseInt(o.w, 10) || 1, null != o.d && f < a._week.dow && l++, u = Z(s(o.gg), l, f, a._week.doy, a._week.dow)), e._a[dt] = u.year, e._dayOfYear = u.dayOfYear), e._dayOfYear && (i = null == e._a[dt] ? r[dt] : e._a[dt], e._dayOfYear > S(i) && (e._pf._overflowDayOfYear = !0), n = J(i, 0, e._dayOfYear), e._a[vt] = n.getUTCMonth(), e._a[mt] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = c[t] = r[t];
            for (; 7 > t; t++) e._a[t] = c[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            c[gt] += b((e._tzm || 0) / 60), c[yt] += b((e._tzm || 0) % 60), e._d = (e._useUTC ? J : $).apply(null, c)
        }
    }
    function I(e) {
        var t;
        e._d || (t = g(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], F(e))
    }
    function q(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function R(e) {
        e._a = [], e._pf.empty = !0;
        var t, n, r, i, s, o = O(e._l),
            u = "" + e._i,
            a = u.length,
            f = 0;
        for (r = P(e._f, o).match(kt) || [], t = 0; t < r.length; t++) i = r[t], n = (u.match(H(i, e)) || [])[0], n && (s = u.substr(0, u.indexOf(n)), s.length > 0 && e._pf.unusedInput.push(s), u = u.slice(u.indexOf(n) + n.length), f += n.length), nn[i] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(i), j(i, n, e)) : e._strict && !n && e._pf.unusedTokens.push(i);
        e._pf.charsLeftOver = a - f, u.length > 0 && e._pf.unusedInput.push(u), e._isPm && e._a[gt] < 12 && (e._a[gt] += 12), e._isPm === !1 && 12 === e._a[gt] && (e._a[gt] = 0), F(e), T(e)
    }
    function U(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, i) {
            return t || n || r || i
        })
    }
    function z(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function W(e) {
        var n, r, i, s, o;
        if (0 === e._f.length) return e._pf.invalidFormat = !0, void(e._d = new Date(0 / 0));
        for (s = 0; s < e._f.length; s++) o = 0, n = a({}, e), n._pf = t(), n._f = e._f[s], R(n), N(n) && (o += n._pf.charsLeftOver, o += 10 * n._pf.unusedTokens.length, n._pf.score = o, (null == i || i > o) && (i = o, r = n));
        a(e, r || n)
    }
    function X(e) {
        var t, n, r = e._i,
            i = Xt.exec(r);
        if (i) {
            for (e._pf.iso = !0, t = 0, n = $t.length; n > t; t++) if ($t[t][1].exec(r)) {
                e._f = $t[t][0] + (i[6] || " ");
                break
            }
            for (t = 0, n = Jt.length; n > t; t++) if (Jt[t][1].exec(r)) {
                e._f += Jt[t][0];
                break
            }
            r.match(Ht) && (e._f += "Z"), R(e)
        } else at.createFromInputFallback(e)
    }
    function V(t) {
        var n = t._i,
            r = Tt.exec(n);
        n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : "string" == typeof n ? X(t) : p(n) ? (t._a = n.slice(0), F(t)) : d(n) ? t._d = new Date(+n) : "object" == typeof n ? I(t) : "number" == typeof n ? t._d = new Date(n) : at.createFromInputFallback(t)
    }
    function $(e, t, n, r, i, s, o) {
        var u = new Date(e, t, n, r, i, s, o);
        return 1970 > e && u.setFullYear(e), u
    }
    function J(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > e && t.setUTCFullYear(e), t
    }
    function K(e, t) {
        if ("string" == typeof e) if (isNaN(e)) {
            if (e = t.weekdaysParse(e), "number" != typeof e) return null
        } else e = parseInt(e, 10);
        return e
    }
    function Q(e, t, n, r, i) {
        return i.relativeTime(t || 1, !! n, e, r)
    }
    function G(e, t, n) {
        var r = pt(Math.abs(e) / 1e3),
            i = pt(r / 60),
            s = pt(i / 60),
            o = pt(s / 24),
            u = pt(o / 365),
            a = 45 > r && ["s", r] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === s && ["h"] || 22 > s && ["hh", s] || 1 === o && ["d"] || 25 >= o && ["dd", o] || 45 >= o && ["M"] || 345 > o && ["MM", pt(o / 30)] || 1 === u && ["y"] || ["yy", u];
        return a[2] = t, a[3] = e > 0, a[4] = n, Q.apply({}, a)
    }
    function Y(e, t, n) {
        var r, i = n - t,
            s = n - e.day();
        return s > i && (s -= 7), i - 7 > s && (s += 7), r = at(e).add("d", s), {
            week: Math.ceil(r.dayOfYear() / 7),
            year: r.year()
        }
    }
    function Z(e, t, n, r, i) {
        var s, o, u = J(e, 0, 1).getUTCDay();
        return n = null != n ? n : i, s = i - u + (u > r ? 7 : 0) - (i > u ? 7 : 0), o = 7 * (t - 1) + (n - i) + s + 1, {
            year: o > 0 ? e : e - 1,
            dayOfYear: o > 0 ? o : S(e - 1) + o
        }
    }
    function et(t) {
        var n = t._i,
            r = t._f;
        return null === n || r === e && "" === n ? at.invalid({
            nullInput: !0
        }) : ("string" == typeof n && (t._i = n = O().preparse(n)), at.isMoment(n) ? (t = f(n), t._d = new Date(+n._d)) : r ? p(r) ? W(t) : R(t) : V(t), new o(t))
    }
    function tt(e, t) {
        var n;
        return "string" == typeof t && (t = e.lang().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), w(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }
    function nt(e, t) {
        return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }
    function rt(e, t, n) {
        return "Month" === t ? tt(e, n) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function it(e, t) {
        return function (n) {
            return null != n ? (rt(this, e, n), at.updateOffset(this, t), this) : nt(this, e)
        }
    }
    function st(e) {
        at.duration.fn[e] = function () {
            return this._data[e]
        }
    }
    function ot(e, t) {
        at.duration.fn["as" + e] = function () {
            return +this / t
        }
    }
    function ut(e) {
        "undefined" == typeof ender && (ft = ht.moment, ht.moment = e ? n("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", at) : at)
    }
    for (var at, ft, lt, ct = "2.6.0", ht = "undefined" != typeof global ? global : this, pt = Math.round, dt = 0, vt = 1, mt = 2, gt = 3, yt = 4, bt = 5, wt = 6, Et = {}, St = {
        _isAMomentObject: null,
        _i: null,
        _f: null,
        _l: null,
        _strict: null,
        _isUTC: null,
        _offset: null,
        _pf: null,
        _lang: null
    }, xt = "undefined" != typeof module && module.exports, Tt = /^\/?Date\((\-?\d+)/i, Nt = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ct = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, kt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Lt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, At = /\d\d?/, Ot = /\d{1,3}/, Mt = /\d{1,4}/, _t = /[+\-]?\d{1,6}/, Dt = /\d+/, Pt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ht = /Z|[\+\-]\d\d:?\d\d/gi, Bt = /T/i, jt = /[\+\-]?\d+(\.\d{1,3})?/, Ft = /\d{1,2}/, It = /\d/, qt = /\d\d/, Rt = /\d{3}/, Ut = /\d{4}/, zt = /[+-]?\d{6}/, Wt = /[+-]?\d+/, Xt = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Vt = "YYYY-MM-DDTHH:mm:ssZ", $t = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
    ], Jt = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], Kt = /([\+\-]|\d\d)/gi, Qt = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }), Gt = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        Q: "quarter",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
    }, Yt = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
    }, Zt = {}, en = "DDD w W M D d".split(" "), tn = "M D H h m s w W".split(" "), nn = {
        M: function () {
            return this.month() + 1
        },
        MMM: function (e) {
            return this.lang().monthsShort(this, e)
        },
        MMMM: function (e) {
            return this.lang().months(this, e)
        },
        D: function () {
            return this.date()
        },
        DDD: function () {
            return this.dayOfYear()
        },
        d: function () {
            return this.day()
        },
        dd: function (e) {
            return this.lang().weekdaysMin(this, e)
        },
        ddd: function (e) {
            return this.lang().weekdaysShort(this, e)
        },
        dddd: function (e) {
            return this.lang().weekdays(this, e)
        },
        w: function () {
            return this.week()
        },
        W: function () {
            return this.isoWeek()
        },
        YY: function () {
            return c(this.year() % 100, 2)
        },
        YYYY: function () {
            return c(this.year(), 4)
        },
        YYYYY: function () {
            return c(this.year(), 5)
        },
        YYYYYY: function () {
            var e = this.year(),
                t = e >= 0 ? "+" : "-";
            return t + c(Math.abs(e), 6)
        },
        gg: function () {
            return c(this.weekYear() % 100, 2)
        },
        gggg: function () {
            return c(this.weekYear(), 4)
        },
        ggggg: function () {
            return c(this.weekYear(), 5)
        },
        GG: function () {
            return c(this.isoWeekYear() % 100, 2)
        },
        GGGG: function () {
            return c(this.isoWeekYear(), 4)
        },
        GGGGG: function () {
            return c(this.isoWeekYear(), 5)
        },
        e: function () {
            return this.weekday()
        },
        E: function () {
            return this.isoWeekday()
        },
        a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function () {
            return this.hours()
        },
        h: function () {
            return this.hours() % 12 || 12
        },
        m: function () {
            return this.minutes()
        },
        s: function () {
            return this.seconds()
        },
        S: function () {
            return b(this.milliseconds() / 100)
        },
        SS: function () {
            return c(b(this.milliseconds() / 10), 2)
        },
        SSS: function () {
            return c(this.milliseconds(), 3)
        },
        SSSS: function () {
            return c(this.milliseconds(), 3)
        },
        Z: function () {
            var e = -this.zone(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + c(b(e / 60), 2) + ":" + c(b(e) % 60, 2)
        },
        ZZ: function () {
            var e = -this.zone(),
                t = "+";
            return 0 > e && (e = -e, t = "-"), t + c(b(e / 60), 2) + c(b(e) % 60, 2)
        },
        z: function () {
            return this.zoneAbbr()
        },
        zz: function () {
            return this.zoneName()
        },
        X: function () {
            return this.unix()
        },
        Q: function () {
            return this.quarter()
        }
    }, rn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; en.length;) lt = en.pop(), nn[lt + "o"] = i(nn[lt], lt);
    for (; tn.length;) lt = tn.pop(), nn[lt + lt] = r(nn[lt], 2);
    for (nn.DDDD = r(nn.DDD, 3), a(s.prototype, {
        set: function (e) {
            var t, n;
            for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (e) {
            return this._months[e.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (e) {
            return this._monthsShort[e.month()]
        },
        monthsParse: function (e) {
            var t, n, r;
            for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++) if (this._monthsParse[t] || (n = at.utc([2e3, t]), r = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[t] = new RegExp(r.replace(".", ""), "i")), this._monthsParse[t].test(e)) return t
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (e) {
            return this._weekdays[e.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (e) {
            return this._weekdaysShort[e.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (e) {
            return this._weekdaysMin[e.day()]
        },
        weekdaysParse: function (e) {
            var t, n, r;
            for (this._weekdaysParse || (this._weekdaysParse = []), t = 0; 7 > t; t++) if (this._weekdaysParse[t] || (n = at([2e3, 1]).day(t), r = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(r.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },
        isPM: function (e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (e, t) {
            var n = this._calendar[e];
            return "function" == typeof n ? n.apply(t) : n
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (e, t, n, r) {
            var i = this._relativeTime[n];
            return "function" == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e)
        },
        pastFuture: function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
        },
        ordinal: function (e) {
            return this._ordinal.replace("%d", e)
        },
        _ordinal: "%d",
        preparse: function (e) {
            return e
        },
        postformat: function (e) {
            return e
        },
        week: function (e) {
            return Y(e, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function () {
            return this._invalidDate
        }
    }), at = function (n, r, i, s) {
        var o;
        return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._i = n, o._f = r, o._l = i, o._strict = s, o._isUTC = !1, o._pf = t(), et(o)
    }, at.suppressDeprecationWarnings = !1, at.createFromInputFallback = n("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
        e._d = new Date(e._i)
    }), at.utc = function (n, r, i, s) {
        var o;
        return "boolean" == typeof i && (s = i, i = e), o = {}, o._isAMomentObject = !0, o._useUTC = !0, o._isUTC = !0, o._l = i, o._i = n, o._f = r, o._strict = s, o._pf = t(), et(o).utc()
    }, at.unix = function (e) {
        return at(1e3 * e)
    }, at.duration = function (e, t) {
        var n, r, i, s = e,
            o = null;
        return at.isDuration(e) ? s = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (o = Nt.exec(e)) ? (n = "-" === o[1] ? -1 : 1, s = {
            y: 0,
            d: b(o[mt]) * n,
            h: b(o[gt]) * n,
            m: b(o[yt]) * n,
            s: b(o[bt]) * n,
            ms: b(o[wt]) * n
        }) : (o = Ct.exec(e)) && (n = "-" === o[1] ? -1 : 1, i = function (e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * n
        }, s = {
            y: i(o[2]),
            M: i(o[3]),
            d: i(o[4]),
            h: i(o[5]),
            m: i(o[6]),
            s: i(o[7]),
            w: i(o[8])
        }), r = new u(s), at.isDuration(e) && e.hasOwnProperty("_lang") && (r._lang = e._lang), r
    }, at.version = ct, at.defaultFormat = Vt, at.momentProperties = St, at.updateOffset = function () {}, at.lang = function (e, t) {
        var n;
        return e ? (t ? L(C(e), t) : null === t ? (A(e), e = "en") : Et[e] || O(e), n = at.duration.fn._lang = at.fn._lang = O(e), n._abbr) : at.fn._lang._abbr
    }, at.langData = function (e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), O(e)
    }, at.isMoment = function (e) {
        return e instanceof o || null != e && e.hasOwnProperty("_isAMomentObject")
    }, at.isDuration = function (e) {
        return e instanceof u
    }, lt = rn.length - 1; lt >= 0; --lt) y(rn[lt]);
    at.normalizeUnits = function (e) {
        return m(e)
    }, at.invalid = function (e) {
        var t = at.utc(0 / 0);
        return null != e ? a(t._pf, e) : t._pf.userInvalidated = !0, t
    }, at.parseZone = function () {
        return at.apply(null, arguments).parseZone()
    }, at.parseTwoDigitYear = function (e) {
        return b(e) + (b(e) > 68 ? 1900 : 2e3)
    }, a(at.fn = o.prototype, {
        clone: function () {
            return at(this)
        },
        valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            var e = at(this).utc();
            return 0 < e.year() && e.year() <= 9999 ? D(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : D(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },
        isValid: function () {
            return N(this)
        },
        isDSTShifted: function () {
            return this._a ? this.isValid() && v(this._a, (this._isUTC ? at.utc(this._a) : at(this._a)).toArray()) > 0 : !1
        },
        parsingFlags: function () {
            return a({}, this._pf)
        },
        invalidAt: function () {
            return this._pf.overflow
        },
        utc: function () {
            return this.zone(0)
        },
        local: function () {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function (e) {
            var t = D(this, e || at.defaultFormat);
            return this.lang().postformat(t)
        },
        add: function (e, t) {
            var n;
            return n = "string" == typeof e ? at.duration(+t, e) : at.duration(e, t), h(this, n, 1), this
        },
        subtract: function (e, t) {
            var n;
            return n = "string" == typeof e ? at.duration(+t, e) : at.duration(e, t), h(this, n, -1), this
        },
        diff: function (e, t, n) {
            var r, i, s = k(e, this),
                o = 6e4 * (this.zone() - s.zone());
            return t = m(t), "year" === t || "month" === t ? (r = 432e5 * (this.daysInMonth() + s.daysInMonth()), i = 12 * (this.year() - s.year()) + (this.month() - s.month()), i += (this - at(this).startOf("month") - (s - at(s).startOf("month"))) / r, i -= 6e4 * (this.zone() - at(this).startOf("month").zone() - (s.zone() - at(s).startOf("month").zone())) / r, "year" === t && (i /= 12)) : (r = this - s, i = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - o) / 864e5 : "week" === t ? (r - o) / 6048e5 : r), n ? i : l(i)
        },
        from: function (e, t) {
            return at.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t)
        },
        fromNow: function (e) {
            return this.from(at(), e)
        },
        calendar: function () {
            var e = k(at(), this).startOf("day"),
                t = this.diff(e, "days", !0),
                n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },
        isLeapYear: function () {
            return x(this.year())
        },
        isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = K(e, this.lang()), this.add({
                d: e - t
            })) : t
        },
        month: it("Month", !0),
        startOf: function (e) {
            switch (e = m(e)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return "week" === e ? this.weekday(0) : "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        },
        endOf: function (e) {
            return e = m(e), this.startOf(e).add("isoWeek" === e ? "week" : e, 1).subtract("ms", 1)
        },
        isAfter: function (e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) > +at(e).startOf(t)
        },
        isBefore: function (e, t) {
            return t = "undefined" != typeof t ? t : "millisecond", +this.clone().startOf(t) < +at(e).startOf(t)
        },
        isSame: function (e, t) {
            return t = t || "ms", +this.clone().startOf(t) === +k(e, this).startOf(t)
        },
        min: function (e) {
            return e = at.apply(null, arguments), this > e ? this : e
        },
        max: function (e) {
            return e = at.apply(null, arguments), e > this ? this : e
        },
        zone: function (e, t) {
            var n = this._offset || 0;
            return null == e ? this._isUTC ? n : this._d.getTimezoneOffset() : ("string" == typeof e && (e = B(e)), Math.abs(e) < 16 && (e = 60 * e), this._offset = e, this._isUTC = !0, n !== e && (!t || this._changeInProgress ? h(this, at.duration(n - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, at.updateOffset(this, !0), this._changeInProgress = null)), this)
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function () {
            return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function (e) {
            return e = e ? at(e).zone() : 0, (this.zone() - e) % 60 === 0
        },
        daysInMonth: function () {
            return w(this.year(), this.month())
        },
        dayOfYear: function (e) {
            var t = pt((at(this).startOf("day") - at(this).startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add("d", e - t)
        },
        quarter: function (e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        },
        weekYear: function (e) {
            var t = Y(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == e ? t : this.add("y", e - t)
        },
        isoWeekYear: function (e) {
            var t = Y(this, 1, 4).year;
            return null == e ? t : this.add("y", e - t)
        },
        week: function (e) {
            var t = this.lang().week(this);
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        isoWeek: function (e) {
            var t = Y(this, 1, 4).week;
            return null == e ? t : this.add("d", 7 * (e - t))
        },
        weekday: function (e) {
            var t = (this.day() + 7 - this.lang()._week.dow) % 7;
            return null == e ? t : this.add("d", e - t)
        },
        isoWeekday: function (e) {
            return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },
        isoWeeksInYear: function () {
            return E(this.year(), 1, 4)
        },
        weeksInYear: function () {
            var e = this._lang._week;
            return E(this.year(), e.dow, e.doy)
        },
        get: function (e) {
            return e = m(e), this[e]()
        },
        set: function (e, t) {
            return e = m(e), "function" == typeof this[e] && this[e](t), this
        },
        lang: function (t) {
            return t === e ? this._lang : (this._lang = O(t), this)
        }
    }), at.fn.millisecond = at.fn.milliseconds = it("Milliseconds", !1), at.fn.second = at.fn.seconds = it("Seconds", !1), at.fn.minute = at.fn.minutes = it("Minutes", !1), at.fn.hour = at.fn.hours = it("Hours", !0), at.fn.date = it("Date", !0), at.fn.dates = n("dates accessor is deprecated. Use date instead.", it("Date", !0)), at.fn.year = it("FullYear", !0), at.fn.years = n("years accessor is deprecated. Use year instead.", it("FullYear", !0)), at.fn.days = at.fn.day, at.fn.months = at.fn.month, at.fn.weeks = at.fn.week, at.fn.isoWeeks = at.fn.isoWeek, at.fn.quarters = at.fn.quarter, at.fn.toJSON = at.fn.toISOString, a(at.duration.fn = u.prototype, {
        _bubble: function () {
            var e, t, n, r, i = this._milliseconds,
                s = this._days,
                o = this._months,
                u = this._data;
            u.milliseconds = i % 1e3, e = l(i / 1e3), u.seconds = e % 60, t = l(e / 60), u.minutes = t % 60, n = l(t / 60), u.hours = n % 24, s += l(n / 24), u.days = s % 30, o += l(s / 30), u.months = o % 12, r = l(o / 12), u.years = r
        },
        weeks: function () {
            return l(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
        },
        humanize: function (e) {
            var t = +this,
                n = G(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        },
        add: function (e, t) {
            var n = at.duration(e, t);
            return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
        },
        subtract: function (e, t) {
            var n = at.duration(e, t);
            return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
        },
        get: function (e) {
            return e = m(e), this[e.toLowerCase() + "s"]()
        },
        as: function (e) {
            return e = m(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },
        lang: at.fn.lang,
        toIsoString: function () {
            var e = Math.abs(this.years()),
                t = Math.abs(this.months()),
                n = Math.abs(this.days()),
                r = Math.abs(this.hours()),
                i = Math.abs(this.minutes()),
                s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        }
    });
    for (lt in Qt) Qt.hasOwnProperty(lt) && (ot(lt, Qt[lt]), st(lt.toLowerCase()));
    ot("Weeks", 6048e5), at.duration.fn.asMonths = function () {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, at.lang("en", {
        ordinal: function (e) {
            var t = e % 10,
                n = 1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), xt ? module.exports = at : "function" == typeof define && define.amd ? (define("moment", function (e, t, n) {
        return n.config && n.config() && n.config().noGlobal === !0 && (ht.moment = ft), at
    }), ut(!0)) : ut()
}).call(this);
(function (e, t) {
    if (typeof define == "function" && define.amd) define(t);
    else {
        var n = t();
        e.ResizeController = n.ResizeController, e.BreakpointController = n.BreakpointController, e.ResponsiveImage = n.ResponsiveImage, e.ScrollController = n.ScrollController, e.ElementVisibleController = n.ElementVisibleController, e.ScrollPositionController = n.ScrollPositionController, e.StickyElementController = n.StickyElementController, e.morlock = n.API
    }
})(this, function () {
    var e, t, n;
    return function (r) {
        function i(e, t) {
            return w.call(e, t)
        }
        function s(e, t) {
            var n, r, i, s, o, u, a, f, l, c, h, p = t && t.split("/"),
                d = y.map,
                v = d && d["*"] || {};
            if (e && e.charAt(0) === ".") if (t) {
                p = p.slice(0, p.length - 1), e = e.split("/"), o = e.length - 1, y.nodeIdCompat && S.test(e[o]) && (e[o] = e[o].replace(S, "")), e = p.concat(e);
                for (l = 0; l < e.length; l += 1) {
                    h = e[l];
                    if (h === ".") e.splice(l, 1), l -= 1;
                    else if (h === "..") {
                        if (l === 1 && (e[2] === ".." || e[0] === "..")) break;
                        l > 0 && (e.splice(l - 1, 2), l -= 2)
                    }
                }
                e = e.join("/")
            } else e.indexOf("./") === 0 && (e = e.substring(2));
            if ((p || v) && d) {
                n = e.split("/");
                for (l = n.length; l > 0; l -= 1) {
                    r = n.slice(0, l).join("/");
                    if (p) for (c = p.length; c > 0; c -= 1) {
                        i = d[p.slice(0, c).join("/")];
                        if (i) {
                            i = i[r];
                            if (i) {
                                s = i, u = l;
                                break
                            }
                        }
                    }
                    if (s) break;
                    !a && v && v[r] && (a = v[r], f = l)
                }!s && a && (s = a, u = f), s && (n.splice(0, u, s), e = n.join("/"))
            }
            return e
        }
        function o(e, t) {
            return function () {
                return p.apply(r, E.call(arguments, 0).concat([e, t]))
            }
        }
        function u(e) {
            return function (t) {
                return s(t, e)
            }
        }
        function a(e) {
            return function (t) {
                m[e] = t
            }
        }
        function f(e) {
            if (i(g, e)) {
                var t = g[e];
                delete g[e], b[e] = !0, h.apply(r, t)
            }
            if (!i(m, e) && !i(b, e)) throw new Error("No " + e);
            return m[e]
        }
        function l(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }
        function c(e) {
            return function () {
                return y && y.config && y.config[e] || {}
            }
        }
        var h, p, d, v, m = {},
            g = {},
            y = {},
            b = {},
            w = Object.prototype.hasOwnProperty,
            E = [].slice,
            S = /\.js$/;
        d = function (e, t) {
            var n, r = l(e),
                i = r[0];
            return e = r[1], i && (i = s(i, t), n = f(i)), i ? n && n.normalize ? e = n.normalize(e, u(t)) : e = s(e, t) : (e = s(e, t), r = l(e), i = r[0], e = r[1], i && (n = f(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, v = {
            require: function (e) {
                return o(e)
            },
            exports: function (e) {
                var t = m[e];
                return typeof t != "undefined" ? t : m[e] = {}
            },
            module: function (e) {
                return {
                    id: e,
                    uri: "",
                    exports: m[e],
                    config: c(e)
                }
            }
        }, h = function (e, t, n, s) {
            var u, l, c, h, p, y = [],
                w = typeof n,
                E;
            s = s || e;
            if (w === "undefined" || w === "function") {
                t = !t.length && n.length ? ["require", "exports", "module"] : t;
                for (p = 0; p < t.length; p += 1) {
                    h = d(t[p], s), l = h.f;
                    if (l === "require") y[p] = v.require(e);
                    else if (l === "exports") y[p] = v.exports(e), E = !0;
                    else if (l === "module") u = y[p] = v.module(e);
                    else if (i(m, l) || i(g, l) || i(b, l)) y[p] = f(l);
                    else {
                        if (!h.p) throw new Error(e + " missing " + l);
                        h.p.load(h.n, o(s, !0), a(l), {}), y[p] = m[l]
                    }
                }
                c = n ? n.apply(m[e], y) : undefined;
                if (e) if (u && u.exports !== r && u.exports !== m[e]) m[e] = u.exports;
                else if (c !== r || !E) m[e] = c
            } else e && (m[e] = n)
        }, e = t = p = function (e, t, n, i, s) {
            if (typeof e == "string") return v[e] ? v[e](t) : f(d(e, t).f);
            if (!e.splice) {
                y = e, y.deps && p(y.deps, y.callback);
                if (!t) return;
                t.splice ? (e = t, t = n, n = null) : e = r
            }
            return t = t ||
            function () {}, typeof n == "function" && (n = i, i = s), i ? h(r, e, t, n) : setTimeout(function () {
                h(r, e, t, n)
            }, 4), p
        }, p.config = function (e) {
            return p(e)
        }, e._defined = m, n = function (e, t, n) {
            t.splice || (n = t, t = []), !i(m, e) && !i(g, e) && (g[e] = [e, t, n])
        }, n.amd = {
            jQuery: !0
        }
    }(), n("../../node_modules/almond/almond", function () {}), n("morlock/core/util", ["exports"], function (e) {
        function t(e, t) {
            return X.call(e, t)
        }
        function n(e) {
            return t(e, 0)
        }
        function r(e, t) {
            return e.concat(t)
        }
        function i(e, t) {
            if (V) return V.call(e, t);
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1
        }
        function s(e, t) {
            var n, r = 0;
            return function () {
                var i = arguments,
                    s = +(new Date),
                    o = t - (s - r);
                o <= 0 ? (clearTimeout(n), n = null, r = s, e.apply(null, i)) : n || (n = setTimeout(function () {
                    r = +(new Date), n = null, e.apply(null, i)
                }, o))
            }
        }
        function o(e, t) {
            var n = null;
            return function () {
                clearTimeout(n);
                var r = arguments;
                n = setTimeout(function () {
                    n = null, e.apply(null, r)
                }, t)
            }
        }
        function u(e) {
            return e
        }
        function a(e, t) {
            var n = Object.create(null);
            return t = y(t) ? t : JSON.stringify, function () {
                var r = arguments.length > 0 ? t.apply(this, arguments) : "noargs";
                return y(n[r]) || (n[r] = e.apply(this, arguments)), n[r]
            }
        }
        function f(e) {
            var t = P(arguments);
            return function () {
                return e.apply(null, t.concat(n(arguments)))
            }
        }
        function l(e, t) {
            t || (t = e.length);
            var i = function () {
                    if (arguments.length < t) {
                        var i = t - arguments.length;
                        return i > 0 ? l(f.apply(null, r([e], n(arguments))), i) : f.apply(null, r([e], n(arguments)))
                    }
                    return e.apply(null, arguments)
                };
            return i.curried = !0, i.toString = function () {
                return e.toString()
            }, i.arity = e.length, i
        }
        function c(e, t) {
            return E(function (n, r) {
                return n[r] = e(t[r], r), n
            }, v(t), {})
        }
        function h(e) {
            return e.length === 1 ? e : function (t) {
                return e.call(this, t)
            }
        }
        function p(e, t) {
            if ($) return t ? $.call(t, e) : t;
            var n = [];
            for (var r = 0; t && r < t.length; r++) n.push(e(t[r], r, t));
            return n
        }
        function d(e, t) {
            if (J) {
                t && J.call(t, e);
                return
            }
            for (var n = 0; n < t.length; n++) e(t[n], n, t)
        }
        function v(e) {
            if (!e) return null;
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        }
        function m(e) {
            return function () {
                return e.apply(null, K.call(arguments))
            }
        }
        function g(e) {
            return !e || !e.length
        }
        function y(e) {
            return "undefined" != typeof e
        }
        function b(e, t, n) {
            return y(e) ? e : n ? t() : t
        }
        function w(e) {
            var t = it(e);
            return p(t, v(e))
        }
        function E(e, t, n) {
            if (Q) return t ? Q.call(t, e, n) : n;
            for (var r = 0; t && r < t.length; r++) n = e(n, t[r], r, t);
            return n
        }
        function S(e, t) {
            if (G) return t ? G.call(t, e) : null;
            var n = [];
            for (var r = 0; t && r < t.length; r++) e(t[r], r, t) === !0 && n.push(t[r]);
            return n
        }
        function x(e, t) {
            return S(R(T, e), t)
        }
        function T(e) {
            return !e
        }
        function N(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null) return e === t;
            var i = e.toString();
            if (i != t.toString()) return !1;
            switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if (typeof e != "object" || typeof t != "object") return !1;
            var s = n.length;
            while (s--) if (n[s] == e) return r[s] == t;
            var o = e.constructor,
                u = t.constructor;
            if (o !== u && !(C(o) && o instanceof o && C(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
            n.push(e), r.push(t);
            var a = 0,
                f = !0;
            if (i == "[object Array]") {
                a = e.length, f = a == t.length;
                if (f) while (a--) if (!(f = N(e[a], t[a], n, r))) break
            } else {
                for (var l in e) if (k(e, l)) {
                    a++;
                    if (!(f = k(t, l) && N(e[l], t[l], n, r))) break
                }
                if (f) {
                    for (l in t) if (k(t, l) && !(a--)) break;
                    f = !a
                }
            }
            return n.pop(), r.pop(), f
        }
        function C(e) {
            return typeof e == "function"
        }
        function k(e, t) {
            return hasOwnProperty.call(e, t)
        }
        function L(e, t) {
            return function () {
                var n = e;
                "function" == typeof e && (n = e.apply(null, arguments));
                if (n) return t.apply(null, arguments)
            }
        }
        function A(e, t) {
            return rt ? rt.call(e, t) : function () {
                return e.apply(t, arguments)
            }
        }
        function O(e) {
            var n = P(arguments);
            return rt ? (n.unshift(undefined), rt.apply(e, n)) : function () {
                var r = t(arguments, 0);
                return e.apply(this, n.concat(r))
            }
        }
        function M(e, t) {
            return function () {
                setTimeout(O(e, arguments), t)
            }
        }
        function _(e, t) {
            return M(e, y(t) ? t : 1)()
        }
        function D(e, t) {
            return e.apply(null, t)
        }
        function P(e, n) {
            return n = y(n) ? n : 1, t(e, n)
        }
        function H(e) {
            return e.apply(null, P(arguments))
        }
        function B(e, t) {
            return t[e]
        }
        function j(e) {
            return e[0]
        }
        function F(e) {
            return e[e.length - 1]
        }
        function I(e) {
            var t = n(e);
            return Z.call(t), t
        }
        function q(e) {
            var t = n(e);
            return tt.call(t), t
        }
        function R() {
            var e = arguments;
            return function (t) {
                for (var n = e.length - 1; n >= 0; --n) t = e[n](t);
                return t
            }
        }
        function U(e) {
            var t = P(arguments),
                n = !1;
            return function () {
                if (!n) return n = !0, e.apply(null, t)
            }
        }
        function z(e) {
            return parseInt(e, 10)
        }
        function W(e) {
            return function () {
                return e
            }
        }
        var X = Array.prototype.slice,
            V = Array.prototype.indexOf,
            $ = Array.prototype.map,
            J = Array.prototype.forEach,
            K = Array.prototype.reverse,
            Q = Array.prototype.reduce,
            G = Array.prototype.filter,
            Y = Array.prototype.unshift,
            Z = Array.prototype.shift,
            et = Array.prototype.push,
            tt = Array.prototype.pop,
            nt = Array.prototype.sort,
            rt = Function.prototype.bind;
        e.concat = r, e.identity = u, e.memoize = a, e.autoCurry = l, e.unary = h, e.forEach = d;
        var it = l(function (e, t) {
            return e[t]
        }),
            st = l(function (e, t, n) {
                e[t] = n
            }),
            ot = m(it);
        e.pluck = ot, e.isDefined = y, e.getOption = b;
        var ut = l(function (e, t) {
            return N(e, t, [], [])
        }),
            at = m(H);
        e.flippedCall = at;
        var ft = l(function (e, t) {
            var r = n(e);
            return Y.call(r, t), r
        }),
            lt = l(function (e, t) {
                var r = n(e);
                return et.call(r, t), r
            }),
            ct = l(function (e, t) {
                var r = n(e);
                return nt.call(r, t), r
            }),
            ht = m(R);
        e.pipeline = ht;
        var pt = ut(!0);
        e.isTrue = pt;
        var dt = function () {
                var e = window.requestAnimationFrame,
                    t = 0,
                    n = ["webkit", "moz"];
                for (var r = 0; r < n.length && !e; ++r) e = window[n[r] + "RequestAnimationFrame"];
                return e || (e = function (e) {
                    var n = (new Date).getTime(),
                        r = Math.max(0, 16 - (n - t)),
                        i = window.setTimeout(function () {
                            e(n + r)
                        }, r);
                    return t = n + r, i
                }), e
            }();
        e.indexOf = i, e.throttle = s, e.debounce = o, e.mapObject = c, e.objectKeys = v, e.functionBind = A, e.partial = O, e.map = p, e.apply = D, e.objectVals = w, e.call = H, e.push = lt, e.pop = q, e.unshift = ft, e.equals = ut, e.not = T, e.delay = M, e.unshift = ft, e.nth = B, e.first = j, e.last = F, e.compose = R, e.select = S, e.get = it, e.shift = I, e.when = L, e.reduce = E, e.once = U, e.sortBy = ct, e.parseInteger = z, e.set = st, e.flip = m, e.copyArray = n, e.defer = _, e.slice = t, e.isEmpty = g, e.reject = x, e.rest = P, e.constantly = W, e.rAF = dt
    }), n("morlock/core/events", ["exports"], function (e) {
        function t(e, t, n) {
            return i.call(e, t, n, !1), u.count++, function () {
                s.call(e, t, n, !1), u.count--
            }
        }
        function n(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), o.call(e, n)
        }
        var r = [],
            i = window.addEventListener ||
        function (e, t) {
            var n = this;
            r.unshift([n, e, t, function (e) {
                e.currentTarget = n, e.preventDefault = function () {
                    e.returnValue = !1
                }, e.stopPropagation = function () {
                    e.cancelBubble = !0
                }, e.target = e.srcElement || n, t.call(n, e)
            }]), this.attachEvent("on" + e, r[0][3])
        }, s = window.removeEventListener ||
        function (e, t) {
            for (var n = 0, i; i = r[n]; ++n) if (i[0] == this && i[1] == e && i[2] == t) return this.detachEvent("on" + e, r.splice(n, 1)[0][3])
        }, o = window.dispatchEvent ||
        function (e) {
            return this.fireEvent("on" + e.type, e)
        }, u = {
            count: 0
        };
        e.eventListenerInfo = u, e.eventListener = t, e.dispatchEvent = n
    }), n("morlock/core/buffer", ["exports"], function (e) {
        function t(e, n) {
            if (!(this instanceof t)) return new t(e);
            this.max = e, this.singleValueMode = this.max === 1, this.mode = n, this.values = null, this.singleValue = null
        }
        function n(e, n) {
            return new t(e, n)
        }
        function r(e) {
            return e.singleValueMode ? e.singleValue ? 1 : 0 : e.values ? e.values.length : 0
        }
        function i(e, t) {
            if (r(e) === e.max) if (!e.singleValueMode && "sliding" === e.mode) e.values.shift();
            else if ("dropping" === e.mode) return;
            e.singleValueMode ? e.singleValue = t : (r(e) || (e.values = []), e.values.push(t))
        }
        function s(e) {
            return e.singleValueMode ? e.singleValue : e.values && e.values[e.values.length - 1]
        }
        function o(e, t) {
            if (e.singleValueMode) e.singleValue = e.singleValue || t;
            else while (!e.values || e.values.length < e.max) i(e, t)
        }
        function u(e) {
            if (e.singleValueMode) return e.singleValue;
            var t = 0;
            for (var n = 0; e.values, n < e.values.length; n++) t += e.values[n];
            return t
        }
        function a(e) {
            if (e.singleValueMode) return e.singleValue;
            var t = u(e);
            return e.values ? e.values.length ? t / e.values.length : 0 : null
        }
        function f(e) {
            e.singleValueMode ? e.singleValue = null : e.values && (e.values.length = 0, e.values = null)
        }
        e.create = n, e.len = r, e.push = i, e.lastValue = s, e.fill = o, e.sum = u, e.average = a, e.clear = f
    }), n("morlock/core/stream", ["morlock/core/events", "morlock/core/buffer", "morlock/core/util", "exports"], function (e, t, n, r) {
        function i(e, t) {
            if (!(this instanceof i)) return new i(e, t);
            this.trackSubscribers = !! e, this.subscribers = null, this.subscriberSubscribers = null, this.streamID = Q++, this.values = z(t) ? t : k(1, "sliding"), this.closed = !1, this.closeSubscribers = null, this.emptySubscribers = null, G[this.streamID] = this
        }
        function s(e, t) {
            return new i(e, t)
        }
        function o(e) {
            return O(e.values)
        }
        function u(e, t) {
            if (e.closed) return;
            return e.subscribers = e.subscribers || [], e.subscribers.push(t), e.trackSubscribers && P(R(X(U, t)), e.subscriberSubscribers), X(f, e, t)
        }
        function a(e) {
            if (e.closed) return;
            e.closed = !0, A(e.values), e.subscribers && (e.subscribers.length = 0), e.closeSubscribers && (P(U, e.closeSubscribers), e.closeSubscribers.length = 0), delete G[e.streamID]
        }
        function f(e, t) {
            if (e.subscribers) {
                var n = J(e.subscribers, t);
                n !== -1 && e.subscribers.splice(n, 1), e.subscribers.length < 1 && (e.subscribers = null, P(U, e.emptySubscribers))
            }
        }
        function l(e, t) {
            e.trackSubscribers && (e.subscriberSubscribers || (e.subscriberSubscribers = []), e.subscriberSubscribers.push(t))
        }
        function c(e, t) {
            e.closeSubscribers || (e.closeSubscribers = []), e.closeSubscribers.push(t)
        }
        function h(e, t) {
            e.emptySubscribers || (e.emptySubscribers = []), e.emptySubscribers.push(t)
        }
        function p(e, t) {
            function n() {
                if (!u) return;
                a && (a(), a = null, u = !1)
            }
            function r() {
                if (u) return;
                u = !0, a = C(e, t, function () {
                    i.closed ? n() : j(o, arguments)
                }), c(i, n)
            }
            var i = s(!0),
                o = Y(i),
                u = !1,
                a;
            return l(i, r), h(i, n), i
        }
        function d(e) {
            var t = s(!0),
                n = Y(t),
                r = function () {
                    var r = 0,
                        i = setInterval(function () {
                            t.closed ? clearInterval(i) : n(r++)
                        }, e)
                };
            return l(t, V(r)), t
        }
        function v(e) {
            var t = s(!0),
                n = X(Y, t, !0),
                r = X(setTimeout, n, e);
            return l(t, V(r)), t
        }
        function m() {
            var e = $(arguments),
                t = s(),
                n = Y(t);
            return P(function (e) {
                var r = u(e, n);
                c(t, r)
            }, e), t
        }
        function g(e, t, n) {
            var r = s(),
                i = X(Y, r),
                o = P(function (e) {
                    return e === et ? i : e
                }, n);
            return u(e, j(j, [t, o])), r
        }
        function y(e, t) {
            return e <= 0 ? t : g(t, D, [et, e])
        }
        function b(e, t) {
            return e <= 0 ? t : g(t, _, [et, e])
        }
        function w(e, t) {
            return e <= 0 ? t : g(t, M, [et, e])
        }
        function E(e, t) {
            return g(t, F, [et, e])
        }
        function S(e, t) {
            return g(t, I, [e, et])
        }
        function x(e, t) {
            return S(F(q(e), B), t)
        }
        function T(e) {
            var t;
            return S(function (e) {
                return q(t, e) ? !1 : (t = e, !0)
            }, e)
        }
        function N(e, t) {
            return g(t, F, [et, X(o, e)])
        }
        var C = e.eventListener,
            k = t.create,
            L = t.push,
            A = t.clear,
            O = t.lastValue,
            M = n.debounce,
            _ = n.throttle,
            D = n.delay,
            P = n.map,
            H = n.memoize,
            B = n.first,
            j = n.apply,
            F = n.compose,
            I = n.when,
            q = n.equals,
            R = n.unary,
            U = n.flippedCall,
            z = n.isDefined,
            W = n.autoCurry,
            X = n.partial,
            V = n.once,
            $ = n.copyArray,
            J = n.indexOf,
            K = n.rAF,
            Q = 0,
            G = {};
        r.openStreams = G;
        var Y = W(function (e, t) {
            if (e.closed) return;
            if (e.subscribers) for (var n = 0; n < e.subscribers.length; n++) e.subscribers[n](t);
            L(e.values, t)
        });
        r.emit = Y, r.close = a, r.onClose = c, r.onEmpty = h;
        var Z = H(function () {
            function e(r) {
                t.closed || (K(e), n(r))
            }
            var t = s(!0),
                n = Y(t);
            return l(t, V(e)), t
        }),
            et = ":e:";
        r.skipDuplicates = T, r.create = s, r.getValue = o, r.onValue = u, r.offValue = f, r.onSubscription = l, r.createFromEvents = p, r.timeout = v, r.createFromRAF = Z, r.merge = m, r.delay = y, r.throttle = b, r.debounce = w, r.map = E, r.filter = S, r.filterFirst = x, r.sample = N, r.interval = d
    }), n("morlock/streams/resize-stream", ["morlock/core/stream", "morlock/core/util", "exports"], function (e, t, n) {
        function r() {
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight]
        }
        var i = e,
            s = t.getOption,
            o = t.memoize,
            u = t.defer,
            a = o(function (e) {
                e = e || {};
                var t = s(e.orientationChangeDelayMs, 100),
                    n = i.createFromEvents(window, "resize"),
                    o = i.createFromEvents(window, "orientationchange"),
                    a = i.merge(n, i.delay(t, o));
                return u(i.emit(a), 10), i.skipDuplicates(i.map(r, a))
            });
        n.create = a
    }), n("morlock/core/emitter", ["morlock/core/util", "exports"], function (e, t) {
        function n() {
            if (!(this instanceof n)) return new n;
            this.callbacks = {}, this.callbackScopes = {}
        }
        function r(e, t, n, r) {
            e.callbacks[t] || (e.callbacks[t] = []), e.callbackScopes[t] || (e.callbackScopes[t] = []), a(e.callbacks[t], n) === -1 && (e.callbacks[t].push(n), e.callbackScopes[t].push(r))
        }
        function i(e, t, n) {
            if (!n) {
                e.callbacks[t] = [], e.callbackScopes[t] = [];
                return
            }
            var r = a(e.callbacks[t], n);
            r !== -1 && (e.callbacks[t].splice(r, 1), e.callbackScopes[t].splice(r, 1))
        }
        function s(e, t, n) {
            if (!e.callbacks[t]) return;
            for (var r = 0; r < e.callbacks[t].length; r++) e.callbackScopes[t][r] ? e.callbacks[t][r].call(e.callbackScopes[t][r], n) : e.callbacks[t][r](n)
        }
        function o(e) {
            var t = new n;
            return e.on = u(r, t), e.off = u(i, t), e.trigger = u(s, t), e
        }
        var u = e.partial,
            a = e.indexOf;
        t.mixin = o
    }), n("morlock/controllers/resize-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/resize-stream", "morlock/core/emitter", "exports"], function (e, t, n, r, i) {
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            l.mixin(this), e = e || {};
            var t = f.create(e);
            a.onValue(t, u(this.trigger, "resize"));
            var n = o(e.debounceMs, 200),
                r = n <= 0 ? t : a.debounce(n, t);
            a.onValue(r, u(this.trigger, "resizeEnd")), this.destroy = function () {
                a.close(t), this.off("resize"), this.off("resizeEnd")
            }
        }
        var o = e.getOption,
            u = e.partial,
            a = t,
            f = n,
            l = r;
        i["default"] = s
    }), n("vendor/modernizr", ["exports"], function (e) {
        function t(e) {
            p.cssText = e
        }
        function n(e, n) {
            return t(m.join(e + ";") + (n || ""))
        }
        function r(e, t) {
            return typeof e === t
        }
        function i(e, t) {
            return !!~ ("" + e).indexOf(t)
        }
        function s(e, t) {
            for (var n in e) {
                var r = e[n];
                if (!i(r, "-") && p[r] !== undefined) return t == "pfx" ? r : !0
            }
            return !1
        }
        function o(e, t, n) {
            for (var i in e) {
                var s = t[e[i]];
                if (s !== undefined) return n === !1 ? e[i] : r(s, "function") ? s.bind(n || t) : s
            }
            return !1
        }
        function u(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                u = (e + " " + y.join(i + " ") + i).split(" ");
            return r(t, "string") || r(t, "undefined") ? s(u, t) : (u = (e + " " + b.join(i + " ") + i).split(" "), o(u, t, n))
        }
        var a = "2.7.2",
            f = {},
            l = document.documentElement,
            c = "modernizr",
            h = document.createElement(c),
            p = h.style,
            d, v = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            g = "Webkit Moz O ms",
            y = g.split(" "),
            b = g.toLowerCase().split(" "),
            w = {},
            E = {},
            S = {},
            x = [],
            T = x.slice,
            N, C = function (e, t, n, r) {
                var i, s, o, u, a = document.createElement("div"),
                    f = document.body,
                    h = f || document.createElement("body");
                if (parseInt(n, 10)) while (n--) o = document.createElement("div"), o.id = r ? r[n] : c + (n + 1), a.appendChild(o);
                return i = ["&#173;", '<style id="s', c, '">', e, "</style>"].join(""), a.id = c, (f ? a : h).innerHTML += i, h.appendChild(a), f || (h.style.background = "", h.style.overflow = "hidden", u = l.style.overflow, l.style.overflow = "hidden", l.appendChild(h)), s = t(a, e), f ? a.parentNode.removeChild(a) : (h.parentNode.removeChild(h), l.style.overflow = u), !! s
            },
            k = function (e) {
                var t = window.matchMedia || window.msMatchMedia;
                if (t) return t(e).matches;
                var n;
                return C("@media " + e + " { #" + c + " { position: absolute; } }", function (e) {
                    n = (window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle)["position"] == "absolute"
                }), n
            },
            L = function () {
                function e(e, n) {
                    n = n || document.createElement(t[e] || "div"), e = "on" + e;
                    var i = e in n;
                    return i || (n.setAttribute || (n = document.createElement("div")), n.setAttribute && n.removeAttribute && (n.setAttribute(e, ""), i = r(n[e], "function"), r(n[e], "undefined") || (n[e] = undefined), n.removeAttribute(e))), n = null, i
                }
                var t = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            A = {}.hasOwnProperty,
            O;
        !r(A, "undefined") && !r(A.call, "undefined") ? O = function (e, t) {
            return A.call(e, t)
        } : O = function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this;
            if (typeof t != "function") throw new TypeError;
            var n = T.call(arguments, 1),
                r = function () {
                    if (this instanceof r) {
                        var i = function () {};
                        i.prototype = t.prototype;
                        var s = new i,
                            o = t.apply(s, n.concat(T.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return t.apply(e, n.concat(T.call(arguments)))
                };
            return r
        }), w.backgroundsize = function () {
            return u("backgroundSize")
        }, w.csstransforms = function () {
            return !!u("transform")
        };
        for (var M in w) O(w, M) && (N = M.toLowerCase(), f[N] = w[M](), x.push((f[N] ? "" : "no-") + N));
        f.addTest = function (e, t) {
            if (typeof e == "object") for (var n in e) O(e, n) && f.addTest(n, e[n]);
            else {
                e = e.toLowerCase();
                if (f[e] !== undefined) return f;
                t = typeof t == "function" ? t() : t, typeof enableClasses != "undefined" && enableClasses && (l.className += " " + (t ? "" : "no-") + e), f[e] = t
            }
            return f
        }, t(""), h = d = null, f._version = a, f._prefixes = m, f._domPrefixes = b, f._cssomPrefixes = y, f.mq = k, f.hasEvent = L, f.testProp = function (e) {
            return s([e])
        }, f.testAllProps = u, f.testStyles = C, f.prefixed = function (e, t, n) {
            return t ? u(e, t, n) : u(e, "pfx")
        }, e["default"] = f
    }), n("morlock/core/dom", ["morlock/core/util", "vendor/modernizr", "exports"], function (e, t, n) {
        function r(e, t, n) {
            if (S("(min-" + e + ":" + window[t] + "px)")) return function () {
                return window[t]
            };
            var r = document.documentElement;
            return function () {
                return r[n]
            }
        }
        function i() {
            return N && window.pageYOffset != document.documentElement.scrollTop ? document.documentElement.scrollTop : window.pageYOffset || document.documentElement.scrollTop
        }
        function s(e) {
            e && !e.nodeType && (e = e[0]);
            if (!e || 1 !== e.nodeType) return !1;
            var t = e.getBoundingClientRect();
            return {
                height: t.bottom - t.top,
                width: t.right - t.left,
                top: t.top,
                left: t.left
            }
        }
        function o(e, t) {
            m(g(k(e)), t)
        }
        function u(e, t) {
            var n = e.nodeType == 9 ? e : e.ownerDocument || e.document;
            if (n.defaultView && n.defaultView.getComputedStyle) {
                var r = n.defaultView.getComputedStyle(e, null);
                if (r) return r[t] || r.getPropertyValue(t) || ""
            }
            return ""
        }
        function a(e, t) {
            return e.currentStyle ? e.currentStyle[t] : null
        }
        function f(e, t) {
            t.parentNode.insertBefore(e, t)
        }
        function l(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }
        function c(e) {
            while (e = e.parentNode) if (e == document) return !0;
            return !1
        }
        function h(e) {
            if (!c(e)) return !1;
            var t = L(e, "display") === "none";
            if (t) return !1;
            var n = e.parentNode;
            return n ? h(n) : !0
        }
        function p(e) {
            return e.className.length > 0 ? e.className.split(" ") : []
        }
        var d = e.memoize,
            v = e.isDefined,
            m = e.mapObject,
            g = e.flip,
            y = e.indexOf,
            b = e.forEach,
            w = e.autoCurry,
            E = t["default"],
            S = E.mq;
        n.testMQ = S;
        var x = r("width", "innerWidth", "clientWidth");
        n.getViewportWidth = x;
        var T = r("height", "innerHeight", "clientHeight");
        n.getViewportHeight = T;
        var N = navigator.userAgent.indexOf("MSIE 10") !== -1;
        n.documentScrollY = i, n.getRect = s;
        var C = d(E.prefixed);
        n.cssPrefix = C;
        var k = w(function (e, t, n) {
            e.style[C(t)] = n
        });
        n.setStyle = k, n.setStyles = o;
        var L = w(function (e, t) {
            var n = C(t);
            return u(e, n) || a(e, n) || e.style && e.style[n]
        });
        n.getStyle = L, n.insertBefore = f, n.detachElement = l, n.isVisible = h;
        var A, O, M;
        n.getClasses = p, !v(window.Element) || "classList" in document.documentElement ? (A = function (e, t) {
            return e.classList.contains(t)
        }, O = function (e, t) {
            e.classList.add(t)
        }, M = function (e, t) {
            e.classList.remove(t)
        }) : (A = function (e, t) {
            return y(p(e), t) !== -1
        }, O = function (e, t) {
            if (_(e)) return;
            var n = p(e);
            n.push(t), e.className = n.join(" ")
        }, M = function (e, t) {
            if (!_(e)) return;
            var n = p(e),
                r = y(n, t);
            n.splice(r, 1), e.className = n.join(" ")
        });
        var _ = w(A);
        n.hasClass = _;
        var D = w(O);
        n.addClass = D;
        var P = w(M);
        n.removeClass = P;
        var H = w(function (e, t) {
            b(D(e), t)
        });
        n.addClasses = H
    }), n("morlock/streams/breakpoint-stream", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/streams/resize-stream", "exports"], function (e, t, n, r, i) {
        function s(e, t) {
            var n = d.create(),
                r;
            t.debounceMs ? r = p.debounce(t.debounceMs, n) : t.throttleMs ? r = p.throttle(t.throttleMs, n) : r = n;
            var i = a(function (e, t) {
                var n = p.create(),
                    i = "string" == typeof e ? e : o(e);
                return p.onValue(r, function () {
                    var e = p.getValue(n);
                    e = e !== null ? e : !1, e !== h(i) && p.emit(n, !e)
                }), p.map(c([t]), n)
            }, e);
            return f(p.merge, u(i))
        }
        function o(e) {
            var t;
            if ("undefined" != typeof e.mq) t = e.mq;
            else {
                var n = l(e.max, Infinity),
                    r = l(e.min, 0);
                t = "only screen", n < Infinity && (t += " and (max-width: " + n + "px)"), r > 0 && (t += " and (min-width: " + r + "px)")
            }
            return t
        }
        var u = e.objectVals,
            a = e.mapObject,
            f = e.apply,
            l = e.getOption,
            c = e.push,
            h = t.testMQ,
            p = n,
            d = r;
        i.create = s
    }), n("morlock/controllers/breakpoint-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/breakpoint-stream", "morlock/core/emitter", "exports"], function (e, t, n, r, i) {
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            p.mixin(this);
            var t = h.create(e.breakpoints, {
                throttleMs: e.throttleMs,
                debounceMs: e.debounceMs
            }),
                n = {},
                r = this;
            c.onValue(t, function (e) {
                n[e[0]] = e[1];
                var t = e[1] ? "enter" : "exit";
                r.trigger("breakpoint", [e[0], t]), r.trigger("breakpoint:" + e[0], [e[0], t])
            }), this.getActiveBreakpoints = function () {
                var e = u(a, l(n));
                return f(e, o(n))
            }
        }
        var o = e.objectKeys,
            u = e.compose,
            a = e.isTrue,
            f = e.select,
            l = e.get,
            c = t,
            h = n,
            p = r;
        i["default"] = s
    }), n("morlock/streams/scroll-stream", ["morlock/core/stream", "morlock/core/util", "morlock/core/dom", "morlock/core/events", "exports"], function (e, t, n, r, i) {
        var s = e,
            o = t.memoize,
            u = t.defer,
            a = t.partial,
            f = n.documentScrollY,
            l = r.dispatchEvent,
            c = o(function () {
                var e, t = !0,
                    n = s.createFromEvents(window, "scroll");
                s.onValue(n, function () {
                    t = !0
                });
                var r = s.createFromRAF(),
                    i = s.filter(function () {
                        if (!t) return !1;
                        t = !1;
                        var n = f();
                        return e !== n ? (e = n, !0) : !1
                    }, r);
                return u(a(l, window, "scroll"), 10), s.map(function () {
                    return e
                }, i)
            });
        i.create = c
    }), n("morlock/controllers/scroll-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/scroll-stream", "morlock/core/emitter", "exports"], function (e, t, n, r, i) {
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            l.mixin(this), e = e || {};
            var t = f.create();
            a.onValue(t, u(this.trigger, "scroll"));
            var n = a.debounce(o(e.debounceMs, 200), t);
            a.onValue(n, u(this.trigger, "scrollEnd"))
        }
        var o = e.getOption,
            u = e.partial,
            a = t,
            f = n,
            l = r;
        i["default"] = s
    }), n("morlock/controllers/element-visible-controller", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/core/emitter", "morlock/controllers/scroll-controller", "morlock/streams/resize-stream", "exports"], function (e, t, n, r, i, s, o) {
        function u(e, t) {
            if (!(this instanceof u)) return new u(e, t);
            d.mixin(this), t = t || {}, this.elem = e, this.buffer = a(t.buffer, 0), this.isVisible = !1, this.rect = null;
            var n = this.on;
            this.on = function (e, t, r) {
                n.apply(this, arguments), "enter" === e && this.isVisible && (r ? t.call(r) : t())
            };
            var r = new v;
            r.on("scroll", this.didScroll, this), r.on("scrollEnd", this.recalculatePosition, this), p.onValue(m.create(), f(this.didResize, this)), this.viewportRect = {
                height: window.innerHeight,
                top: 0
            }, this.recalculateOffsets(), setTimeout(f(this.recalculateOffsets, this), 100)
        }
        var a = e.getOption,
            f = e.functionBind,
            l = t.getRect,
            c = t.getViewportHeight,
            h = t.documentScrollY,
            p = n,
            d = r,
            v = i["default"],
            m = s;
        u.prototype.didResize = function () {
            this.recalculateOffsets()
        }, u.prototype.didScroll = function (e) {
            this.update(e)
        }, u.prototype.recalculateOffsets = function () {
            this.viewportRect.height = c(), this.recalculatePosition(), this.update(null, !0)
        }, u.prototype.recalculatePosition = function (e) {
            e || (e = h()), this.rect = l(this.elem), this.rect.top += e, this.rect.top -= this.buffer, this.rect.height += this.buffer * 2
        }, u.prototype.update = function (e, t) {
            e || (e = h()), this.viewportRect.top = e;
            var n = this.intersects(this.viewportRect, this.rect),
                r = t ? !0 : this.isVisible,
                i = t ? !0 : !this.isVisible;
            r && !n ? (this.isVisible = !1, this.didExit()) : i && n && (this.isVisible = !0, this.didEnter())
        }, u.prototype.intersects = function (e, t) {
            var n = e.top + e.height,
                r = t.top + t.height;
            return e.top <= r && t.top <= n
        }, u.prototype.didEnter = function () {
            this.trigger("enter"), this.trigger("both")
        }, u.prototype.didExit = function () {
            this.trigger("exit"), this.trigger("both")
        }, o["default"] = u
    }), n("morlock/streams/scroll-tracker-stream", ["morlock/core/stream", "morlock/streams/scroll-stream", "exports"], function (e, t, n) {
        function r(e) {
            var t = s.create(),
                n = i.create(),
                r = !1,
                o = !0;
            return i.onValue(t, function (t) {
                (o || r) && t < e ? (r = !1, i.emit(n, ["before", e])) : (o || !r) && t >= e && (r = !0, i.emit(n, ["after", e])), o = !1
            }), n
        }
        var i = e,
            s = t;
        n.create = r
    }), n("morlock/controllers/scroll-position-controller", ["morlock/core/util", "morlock/core/stream", "morlock/streams/scroll-tracker-stream", "morlock/core/emitter", "exports"], function (e, t, n, r, i) {
        function s(e) {
            if (!(this instanceof s)) return new s(e);
            f.mixin(this);
            var t = a.create(e);
            u.onValue(t, o(this.trigger, "both"));
            var n = u.filterFirst("before", t);
            u.onValue(n, o(this.trigger, "before"));
            var r = u.filterFirst("after", t);
            u.onValue(r, o(this.trigger, "after"))
        }
        var o = e.partial,
            u = t,
            a = n,
            f = r;
        i["default"] = s
    }), n("morlock/controllers/sticky-element-controller", ["morlock/core/util", "morlock/core/dom", "morlock/core/stream", "morlock/streams/scroll-stream", "morlock/streams/resize-stream", "morlock/controllers/scroll-position-controller", "vendor/modernizr", "exports"], function (e, t, n, r, i, s, o, u) {
        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t, n);
            this.elem = e, this.container = t, this.fixed = !1, this.useTransform = !0, this.originalZIndex = "", this.elemWidth = 0, this.elemHeight = 0, this.containerTop = 0, this.containerHeight = 0, this.originalTop = 0, this.spacer = document.createElement("div"), n || (n = {}), this.positionType = p(n.positionType, "absolute"), this.zIndex = p(n.zIndex, 1e3), this.marginTop = p(n.marginTop, 0), this.marginBottom = p(n.marginBottom, 0), this.useTransform = M.csstransforms && p(n.useTransform, !0), this.subscribedListeners_ = [k.onValue(L.create(), _(this)), k.onValue(k.debounce(64, A.create()), y(this.onResize, this))], l(this)
        }
        function f(e) {
            h(e), e.currentTop = null, C(e.spacer), E(e.elem, {
                zIndex: e.originalZIndex,
                width: e.originalWidth,
                height: e.originalHeight,
                position: e.originalPosition,
                left: "",
                top: e.originalOffsetTop,
                overflow: e.originalOverflow,
                display: e.originalDisplay
            }), e.useTransform && w(e.elem, "transform", e.originalTransform)
        }
        function l(e) {
            var t = b(e.container, "position");
            (t.length === 0 || "static" === t) && w(e.container, "position", "relative"), e.originalZIndex = b(e.elem, "zIndex"), e.originalPosition = b(e.elem, "position"), e.originalOffsetTop = b(e.elem, "top"), e.originalWidth = b(e.elem, "width"), e.originalHeight = b(e.elem, "height"), e.originalDisplay = b(e.elem, "display"), e.originalOverflow = b(e.elem, "overflow"), e.useTransform && (e.originalTransform = b(e.elem, "transform"));
            var n = e.elem.getBoundingClientRect();
            e.elemWidth = n.width, e.elemHeight = n.height;
            var r = N(),
                i = e.container.getBoundingClientRect();
            e.containerTop = i.top + r, e.containerHeight = i.height, e.originalTop = e.elem.offsetTop, E(e.elem, {
                position: "absolute",
                top: e.originalTop + "px",
                left: e.elem.offsetLeft + "px",
                width: e.elemWidth + "px",
                height: e.elemHeight + "px",
                overflow: "hidden",
                display: "block"
            }), e.originalPosition !== "absolute" && (S(e.spacer, "stick-element-spacer"), E(e.spacer, {
                height: e.elemHeight + "px",
                display: b(e.elem, "display"),
                "float": b(e.elem, "float"),
                pointerEvents: "none",
                visibility: "hidden",
                opacity: 0,
                zIndex: -1
            }), T(e.spacer, e.elem));
            var s = e.containerTop - e.marginTop;
            e.onBeforeHandler_ || (e.onBeforeHandler_ = v(h, e)), e.onAfterHandler_ || (e.onAfterHandler_ = v(c, e)), e.topOfContainer_ && (e.topOfContainer_.off("before", e.onBeforeHandler_), e.topOfContainer_.off("after", e.onAfterHandler_)), e.topOfContainer_ = new O(s), e.topOfContainer_.on("before", e.onBeforeHandler_), e.topOfContainer_.on("after", e.onAfterHandler_), r < s ? e.onBeforeHandler_() : e.onAfterHandler_()
        }
        function c(e) {
            if (e.fixed) return;
            S(e.elem, "fixed"), E(e.elem, {
                position: e.positionType,
                zIndex: e.zIndex
            }), e.fixed = !0
        }
        function h(e) {
            if (!e.fixed) return;
            x(e.elem, "fixed"), E(e.elem, {
                position: "absolute",
                zIndex: e.originalZIndex,
                top: e.originalTop
            }), e.fixed = !1
        }
        var p = e.getOption,
            d = e.autoCurry,
            v = e.partial,
            m = e.forEach,
            g = e.call,
            y = e.functionBind,
            b = t.getStyle,
            w = t.setStyle,
            E = t.setStyles,
            S = t.addClass,
            x = t.removeClass,
            T = t.insertBefore,
            N = t.documentScrollY,
            C = t.detachElement,
            k = n,
            L = r,
            A = i,
            O = s["default"],
            M = o["default"];
        a.prototype.onResize = function () {
            f(this), l(this), _(this, N())
        }, a.prototype.destroy = function () {
            m(g, this.subscribedListeners_), f(this), this.spacer = null
        };
        var _ = d(function (e, t) {
            if (!e.fixed) return;
            t < 0 && (t = 0);
            var n = t + e.marginTop - e.containerTop,
                r = e.containerHeight - e.elemHeight - e.marginBottom;
            e.useTransform ? r -= e.originalTop : n += e.originalTop, n = Math.max(0, Math.min(n, r)), e.currentTop !== n && (e.positionType !== "fixed" && (e.useTransform ? w(e.elem, "transform", "translate3d(0, " + n + "px, 0)") : w(e.elem, "top", n + "px")), e.currentTop = n)
        });
        u["default"] = a
    }), n("morlock/core/responsive-image", ["morlock/core/util", "morlock/core/dom", "morlock/controllers/element-visible-controller", "morlock/core/emitter", "exports"], function (e, t, n, r, i) {
        function s() {
            if (!(this instanceof s)) return new s;
            this.element = null, this.loadedSizes = {}, this.knownSizes = [], this.currentBreakpoint = null, this.src = null, this.isFlexible = !1, this.hasRetina = !1, this.preserveAspectRatio = !1, this.knownDimensions = null, this.hasLoaded = !1
        }
        function o(e) {
            var t = new s;
            t.getPath = x(e.getPath, m), y(S(E(t)), e), t.knownDimensions && t.preserveAspectRatio && a(t), t.lazyLoad && (t.observer = new k(t.element), t.observer.on("enter", function r() {
                if (!t.checkIfVisible(t)) return;
                t.observer.off("enter", r), t.lazyLoad = !1, l(t)
            }));
            var n = new ResizeController({
                debounceMs: x(e.debounceMs, 200)
            });
            return n.on("resizeEnd", T(l, t)), L.mixin(t), t
        }
        function u(e, t) {
            t || (t = {});
            var n = {
                element: e,
                src: x(t.src, e.getAttribute("data-src")),
                lazyLoad: x(t.lazyLoad, e.getAttribute("data-lazyload") === "true"),
                isFlexible: x(t.isFlexible, e.getAttribute("data-isFlexible") !== "false"),
                hasRetina: x(t.hasRetina, e.getAttribute("data-hasRetina") === "true" && window.devicePixelRatio > 1.5),
                preserveAspectRatio: x(t.preserveAspectRatio, e.getAttribute("data-preserveAspectRatio") === "true"),
                checkIfVisible: x(t.checkIfVisible, function (e) {
                    return !0
                })
            };
            return n.knownDimensions = x(t.knownDimensions, function () {
                var t = e.getAttribute("data-knownDimensions");
                if (t && t !== "false") return [w(t.split("x")[0]), w(t.split("x")[1])]
            }, !0), n.knownSizes = f(e), n.knownDimensions && n.preserveAspectRatio && a(n), o(n)
        }
        function a(e) {
            var t = e.knownDimensions[1] / e.knownDimensions[0] * 100;
            N(e.element, "paddingBottom", t + "%")
        }
        function f(e) {
            var t = e.getAttribute("data-breakpoints"),
                n = g(function (e) {
                    return w(e)
                }, t ? t.split(",") : []);
            return n.length <= 0 ? [0] : b(n, function (e, t) {
                return t - e
            })
        }
        function l(e) {
            if (e.lazyLoad) return;
            var t = C(e.element),
                n;
            for (var r = 0; r < e.knownSizes.length; r++) {
                var i = e.knownSizes[r];
                if (!(t.width <= i)) break;
                n = i
            }
            n || (n = e.knownSizes[0]), n !== e.currentBreakpoint && (e.currentBreakpoint = n, h(e, e.currentBreakpoint))
        }
        function c(e) {
            if (!e.lazyLoad) return;
            e.observer.recalculateOffsets()
        }
        function h(e, t) {
            var n = e.loadedSizes[t];
            if ("undefined" != typeof n) p(e, n);
            else {
                var r = new Image;
                r.onload = function () {
                    e.loadedSizes[t] = r, p(e, r)
                }, r.onerror = function () {
                    e.hasRetina && (r.src = e.getPath(e, t, !1))
                }, r.src = e.getPath(e, t, e.hasRetina)
            }
        }
        function p(e, t) {
            return e.hasLoaded || (e.hasLoaded = !0, setTimeout(function () {
                e.element.className += " loaded"
            }, 100)), e.trigger("load", t), e.element.tagName.toLowerCase() === "img" ? d(e, t) : v(e, t)
        }
        function d(e, t) {
            e.element.src = t.src
        }
        function v(e, t) {
            var n = N(e.element);
            n("backgroundImage", "url(" + t.src + ")");
            if (e.preserveAspectRatio) {
                var r, i;
                e.knownDimensions ? (r = e.knownDimensions[0], i = e.knownDimensions[1]) : (r = t.width, i = t.height), n("backgroundSize", "cover"), e.isFlexible ? n("paddingBottom", i / r * 100 + "%") : (n("width", r + "px"), n("height", i + "px"))
            }
        }
        function m(e, t, n) {
            if (t === 0) return e.src;
            var r = e.src.split("."),
                i = r.pop();
            return r.join(".") + "-" + t + (n ? "@2x" : "") + "." + i
        }
        var g = e.map,
            y = e.mapObject,
            b = e.sortBy,
            w = e.parseInteger,
            E = e.set,
            S = e.flip,
            x = e.getOption,
            T = e.partial,
            N = t.setStyle,
            C = t.getRect,
            k = n["default"],
            L = r;
        i.checkVisibility = c, i.create = o, i.createFromElement = u, i.update = l, i.checkVisibility = c
    }), n("morlock/api", ["morlock/controllers/resize-controller", "morlock/controllers/breakpoint-controller", "morlock/controllers/scroll-controller", "morlock/controllers/element-visible-controller", "morlock/controllers/scroll-position-controller", "morlock/controllers/sticky-element-controller", "morlock/core/util", "morlock/core/events", "morlock/core/buffer", "morlock/core/stream", "exports"], function (e, t, n, r, i, s, o, u, a, f, l) {
        function c(e) {
            var t = !1;
            for (var n = 0; n < N.length; n++) if (y.equals(N[n], e)) {
                t = !0;
                break
            }
            if (t) return C[n];
            var r = new p(e);
            return N.push(e), C.push(r), r
        }
        var h = e["default"],
            p = t["default"],
            d = n["default"],
            v = r["default"],
            m = i["default"],
            g = s["default"],
            y = o,
            b = u,
            w = a,
            E = f,
            S = y.memoize(function (e) {
                return new h(e)
            }),
            x = y.memoize(function (e) {
                return new d(e)
            }),
            T = y.memoize(function (e) {
                return k.observePosition(e)
            }),
            N = [],
            C = [],
            k = {
                onResize: function (e) {
                    var t = S({
                        debounceMs: 0
                    });
                    return t.on("resize", e)
                },
                onResizeEnd: function (e, t) {
                    var n = S(t);
                    return n.on("resizeEnd", e)
                },
                onScroll: function (e) {
                    var t = x();
                    return t.on("scroll", e)
                },
                onScrollEnd: function (e) {
                    var t = x();
                    return t.on("scrollEnd", e)
                },
                observeElement: function (e, t) {
                    return new v(e, t)
                },
                observePosition: function (e) {
                    return new m(e)
                },
                stickyElement: function (e, t, n) {
                    return new g(e, t, n)
                },
                breakpoint: {
                    enter: function (e, t) {
                        var n = c({
                            breakpoints: {
                                singleton: e
                            }
                        });
                        n.on("breakpoint:singleton", function (e) {
                            e[1] === "enter" && t(e)
                        })
                    },
                    exit: function (e, t) {
                        var n = c({
                            breakpoints: {
                                singleton: e
                            }
                        });
                        n.on("breakpoint:singleton", function (e) {
                            e[1] === "exit" && t(e)
                        })
                    }
                },
                position: {
                    before: function (e, t) {
                        var n = T(e);
                        return n.on("before", t)
                    },
                    after: function (e, t) {
                        var n = T(e);
                        return n.on("after", t)
                    }
                }
            };
        k.Stream = E, k.Events = b, k.Buffer = w, k.Util = y, l["default"] = k
    }), n("morlock/jquery", ["morlock/api", "morlock/controllers/breakpoint-controller", "morlock/controllers/sticky-element-controller", "exports"], function (e, t, n, r) {
        function i(e) {
            e.fn.morlockResize = function (t) {
                return e(this).each(function () {
                    if (this !== window) return;
                    var n = e(this);
                    s.onResize(function (e) {
                        n.trigger("morlockResize", e)
                    }), s.onResizeEnd(function (e) {
                        n.trigger("morlockResizeEnd", e)
                    }, t)
                })
            }, e.fn.morlockScroll = function () {
                return e(this).each(function () {
                    if (this !== window) return;
                    var t = e(this);
                    s.onScroll(function () {
                        t.trigger("morlockScroll")
                    }), s.onScrollEnd(function () {
                        t.trigger("morlockScrollEnd")
                    })
                })
            }, e.fn.morlockElementPosition = function (t) {
                return e(this).each(function () {
                    if (this !== window) return;
                    var n = e(this);
                    s.position.before(t, function () {
                        n.trigger("morlockElementPositionBefore", t)
                    }), s.position.after(t, function () {
                        n.trigger("morlockElementPositionAfter", t)
                    })
                })
            }, e.fn.morlockBreakpoint = function (t) {
                return e(this).each(function () {
                    if (this !== window) return;
                    var n = e(this),
                        r = new o(t);
                    r.on("breakpoint", function (e) {
                        n.trigger("morlockBreakpoint", e)
                    })
                })
            }, e.fn.morlockElementVisible = function (t) {
                return e(this).each(function () {
                    var n = e(this),
                        r = s.observeElement(this, t);
                    r.on("enter", function () {
                        n.trigger("morlockElementVisibleEnter")
                    }), r.on("exit", function () {
                        n.trigger("morlockElementVisibleExit")
                    })
                })
            }, e.fn.morlockStickyElement = function (t, n) {
                return e(this).each(function () {
                    var r = this;
                    e(r).find(t).each(function () {
                        e(this).data("morlockStickyElementController", new u(this, r, n))
                    })
                })
            }
        }
        var s = e["default"],
            o = t["default"],
            u = n["default"];
        r.defineJQueryPlugins = i
    }), n("morlock/base", ["morlock/controllers/resize-controller", "morlock/controllers/breakpoint-controller", "morlock/controllers/scroll-controller", "morlock/controllers/element-visible-controller", "morlock/controllers/scroll-position-controller", "morlock/controllers/sticky-element-controller", "morlock/core/responsive-image", "morlock/api", "morlock/jquery", "exports"], function (e, t, n, r, i, s, o, u, a, f) {
        var l = e["default"],
            c = t["default"],
            h = n["default"],
            p = r["default"],
            d = i["default"],
            v = s["default"],
            m = o,
            g = u["default"],
            y = a.defineJQueryPlugins;
        g.enableJQuery = function (e) {
            e || (e = jQuery);
            if (!e) return;
            y(e)
        }, f.API = g, f.ResizeController = l, f.BreakpointController = c, f.ResponsiveImage = m, f.ScrollController = h, f.ElementVisibleController = p, f.ScrollPositionController = d, f.StickyElementController = v
    }), t(["morlock/base"]), t("morlock/base")
});
!
function (e, t) {
    "use strict";

    function n() {
        r.READY || (y.determineEventTypes(), g.each(r.gestures, function (e) {
            w.register(e)
        }), y.onTouch(r.DOCUMENT, p, w.detect), y.onTouch(r.DOCUMENT, d, w.detect), r.READY = !0)
    }
    var r = function E(e, t) {
            return new E.Instance(e, t || {})
        };
    r.VERSION = "1.1.3", r.defaults = {
        behavior: {
            userSelect: "none",
            touchAction: "pan-y",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, r.DOCUMENT = document, r.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, r.HAS_TOUCHEVENTS = "ontouchstart" in e, r.IS_MOBILE = /mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent), r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && r.IS_MOBILE || r.HAS_POINTEREVENTS, r.CALCULATE_INTERVAL = 25;
    var i = {},
        s = r.DIRECTION_DOWN = "down",
        o = r.DIRECTION_LEFT = "left",
        u = r.DIRECTION_UP = "up",
        a = r.DIRECTION_RIGHT = "right",
        f = r.POINTER_MOUSE = "mouse",
        l = r.POINTER_TOUCH = "touch",
        c = r.POINTER_PEN = "pen",
        h = r.EVENT_START = "start",
        p = r.EVENT_MOVE = "move",
        d = r.EVENT_END = "end",
        v = r.EVENT_RELEASE = "release",
        m = r.EVENT_TOUCH = "touch";
    r.READY = !1, r.plugins = r.plugins || {}, r.gestures = r.gestures || {};
    var g = r.utils = {
        extend: function (e, n, r) {
            for (var i in n)!n.hasOwnProperty(i) || e[i] !== t && r || (e[i] = n[i]);
            return e
        },
        on: function (e, t, n) {
            e.addEventListener(t, n, !1)
        },
        off: function (e, t, n) {
            e.removeEventListener(t, n, !1)
        },
        each: function (e, n, r) {
            var i, s;
            if ("forEach" in e) e.forEach(n, r);
            else if (e.length !== t) {
                for (i = 0, s = e.length; s > i; i++) if (n.call(r, e[i], i, e) === !1) return
            } else for (i in e) if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return
        },
        inStr: function (e, t) {
            return e.indexOf(t) > -1
        },
        inArray: function (e, t) {
            if (e.indexOf) {
                var n = e.indexOf(t);
                return -1 === n ? !1 : n
            }
            for (var r = 0, i = e.length; i > r; r++) if (e[r] === t) return r;
            return !1
        },
        toArray: function (e) {
            return Array.prototype.slice.call(e, 0)
        },
        hasParent: function (e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        },
        getCenter: function (e) {
            var t = [],
                n = [],
                r = [],
                i = [],
                s = Math.min,
                o = Math.max;
            return 1 === e.length ? {
                pageX: e[0].pageX,
                pageY: e[0].pageY,
                clientX: e[0].clientX,
                clientY: e[0].clientY
            } : (g.each(e, function (e) {
                t.push(e.pageX), n.push(e.pageY), r.push(e.clientX), i.push(e.clientY)
            }), {
                pageX: (s.apply(Math, t) + o.apply(Math, t)) / 2,
                pageY: (s.apply(Math, n) + o.apply(Math, n)) / 2,
                clientX: (s.apply(Math, r) + o.apply(Math, r)) / 2,
                clientY: (s.apply(Math, i) + o.apply(Math, i)) / 2
            })
        },
        getVelocity: function (e, t, n) {
            return {
                x: Math.abs(t / e) || 0,
                y: Math.abs(n / e) || 0
            }
        },
        getAngle: function (e, t) {
            var n = t.clientX - e.clientX,
                r = t.clientY - e.clientY;
            return 180 * Math.atan2(r, n) / Math.PI
        },
        getDirection: function (e, t) {
            var n = Math.abs(e.clientX - t.clientX),
                r = Math.abs(e.clientY - t.clientY);
            return n >= r ? e.clientX - t.clientX > 0 ? o : a : e.clientY - t.clientY > 0 ? u : s
        },
        getDistance: function (e, t) {
            var n = t.clientX - e.clientX,
                r = t.clientY - e.clientY;
            return Math.sqrt(n * n + r * r)
        },
        getScale: function (e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
        },
        getRotation: function (e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
        },
        isVertical: function (e) {
            return e == u || e == s
        },
        setPrefixedCss: function (e, t, n, r) {
            var i = ["", "Webkit", "Moz", "O", "ms"];
            t = g.toCamelCase(t);
            for (var s = 0; s < i.length; s++) {
                var o = t;
                if (i[s] && (o = i[s] + o.slice(0, 1).toUpperCase() + o.slice(1)), o in e.style) {
                    e.style[o] = (null == r || r) && n || "";
                    break
                }
            }
        },
        toggleBehavior: function (e, t, n) {
            if (t && e && e.style) {
                g.each(t, function (t, r) {
                    g.setPrefixedCss(e, r, t, n)
                });
                var r = n &&
                function () {
                    return !1
                };
                "none" == t.userSelect && (e.onselectstart = r), "none" == t.userDrag && (e.ondragstart = r)
            }
        },
        toCamelCase: function (e) {
            return e.replace(/[_-]([a-z])/g, function (e) {
                return e[1].toUpperCase()
            })
        }
    },
        y = r.event = {
            preventMouseEvents: !1,
            started: !1,
            shouldDetect: !1,
            on: function (e, t, n, r) {
                var i = t.split(" ");
                g.each(i, function (t) {
                    g.on(e, t, n), r && r(t)
                })
            },
            off: function (e, t, n, r) {
                var i = t.split(" ");
                g.each(i, function (t) {
                    g.off(e, t, n), r && r(t)
                })
            },
            onTouch: function (e, t, n) {
                var s = this,
                    o = function (i) {
                        var o, u = i.type.toLowerCase(),
                            a = r.HAS_POINTEREVENTS,
                            f = g.inStr(u, "mouse");
                        f && s.preventMouseEvents || (f && t == h && 0 === i.button ? (s.preventMouseEvents = !1, s.shouldDetect = !0) : a && t == h ? s.shouldDetect = 1 === i.buttons || b.matchType(l, i) : f || t != h || (s.preventMouseEvents = !0, s.shouldDetect = !0), a && t != d && b.updatePointer(t, i), s.shouldDetect && (o = s.doDetect.call(s, i, t, e, n)), o == d && (s.preventMouseEvents = !1, s.shouldDetect = !1, b.reset()), a && t == d && b.updatePointer(t, i))
                    };
                return this.on(e, i[t], o), o
            },
            doDetect: function (e, t, n, r) {
                var i = this.getTouchList(e, t),
                    s = i.length,
                    o = t,
                    u = i.trigger,
                    a = s;
                t == h ? u = m : t == d && (u = v, a = i.length - (e.changedTouches ? e.changedTouches.length : 1)), a > 0 && this.started && (o = p), this.started = !0;
                var f = this.collectEventData(n, o, i, e);
                return t != d && r.call(w, f), u && (f.changedLength = a, f.eventType = u, r.call(w, f), f.eventType = o, delete f.changedLength), o == d && (r.call(w, f), this.started = !1), o
            },
            determineEventTypes: function () {
                var t;
                return t = r.HAS_POINTEREVENTS ? e.PointerEvent ? ["pointerdown", "pointermove", "pointerup pointercancel lostpointercapture"] : ["MSPointerDown", "MSPointerMove", "MSPointerUp MSPointerCancel MSLostPointerCapture"] : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i[h] = t[0], i[p] = t[1], i[d] = t[2], i
            },
            getTouchList: function (e, t) {
                if (r.HAS_POINTEREVENTS) return b.getTouchList();
                if (e.touches) {
                    if (t == p) return e.touches;
                    var n = [],
                        i = [].concat(g.toArray(e.touches), g.toArray(e.changedTouches)),
                        s = [];
                    return g.each(i, function (e) {
                        g.inArray(n, e.identifier) === !1 && s.push(e), n.push(e.identifier)
                    }), s
                }
                return e.identifier = 1, [e]
            },
            collectEventData: function (e, t, n, r) {
                var i = l;
                return g.inStr(r.type, "mouse") || b.matchType(f, r) ? i = f : b.matchType(c, r) && (i = c), {
                    center: g.getCenter(n),
                    timeStamp: Date.now(),
                    target: r.target,
                    touches: n,
                    eventType: t,
                    pointerType: i,
                    srcEvent: r,
                    preventDefault: function () {
                        var e = this.srcEvent;
                        e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault()
                    },
                    stopPropagation: function () {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function () {
                        return w.stopDetect()
                    }
                }
            }
        },
        b = r.PointerEvent = {
            pointers: {},
            getTouchList: function () {
                var e = [];
                return g.each(this.pointers, function (t) {
                    e.push(t)
                }), e
            },
            updatePointer: function (e, t) {
                e == d ? delete this.pointers[t.pointerId] : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t)
            },
            matchType: function (e, t) {
                if (!t.pointerType) return !1;
                var n = t.pointerType,
                    r = {};
                return r[f] = n === (t.MSPOINTER_TYPE_MOUSE || f), r[l] = n === (t.MSPOINTER_TYPE_TOUCH || l), r[c] = n === (t.MSPOINTER_TYPE_PEN || c), r[e]
            },
            reset: function () {
                this.pointers = {}
            }
        },
        w = r.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function (e, t) {
                this.current || (this.stopped = !1, this.current = {
                    inst: e,
                    startEvent: g.extend({}, t),
                    lastEvent: !1,
                    lastCalcEvent: !1,
                    futureCalcEvent: !1,
                    lastCalcData: {},
                    name: ""
                }, this.detect(t))
            },
            detect: function (e) {
                if (this.current && !this.stopped) {
                    e = this.extendEventData(e);
                    var t = this.current.inst,
                        n = t.options;
                    return g.each(this.gestures, function (r) {
                        !this.stopped && t.enabled && n[r.name] && r.handler.call(r, e, t)
                    }, this), this.current && (this.current.lastEvent = e), e.eventType == d && this.stopDetect(), e
                }
            },
            stopDetect: function () {
                this.previous = g.extend({}, this.current), this.current = null, this.stopped = !0
            },
            getCalculatedData: function (e, t, n, i, s) {
                var o = this.current,
                    u = !1,
                    a = o.lastCalcEvent,
                    f = o.lastCalcData;
                a && e.timeStamp - a.timeStamp > r.CALCULATE_INTERVAL && (t = a.center, n = e.timeStamp - a.timeStamp, i = e.center.clientX - a.center.clientX, s = e.center.clientY - a.center.clientY, u = !0), (e.eventType == m || e.eventType == v) && (o.futureCalcEvent = e), (!o.lastCalcEvent || u) && (f.velocity = g.getVelocity(n, i, s), f.angle = g.getAngle(t, e.center), f.direction = g.getDirection(t, e.center), o.lastCalcEvent = o.futureCalcEvent || e, o.futureCalcEvent = e), e.velocityX = f.velocity.x, e.velocityY = f.velocity.y, e.interimAngle = f.angle, e.interimDirection = f.direction
            },
            extendEventData: function (e) {
                var t = this.current,
                    n = t.startEvent,
                    r = t.lastEvent || n;
                (e.eventType == m || e.eventType == v) && (n.touches = [], g.each(e.touches, function (e) {
                    n.touches.push({
                        clientX: e.clientX,
                        clientY: e.clientY
                    })
                }));
                var i = e.timeStamp - n.timeStamp,
                    s = e.center.clientX - n.center.clientX,
                    o = e.center.clientY - n.center.clientY;
                return this.getCalculatedData(e, r.center, i, s, o), g.extend(e, {
                    startEvent: n,
                    deltaTime: i,
                    deltaX: s,
                    deltaY: o,
                    distance: g.getDistance(n.center, e.center),
                    angle: g.getAngle(n.center, e.center),
                    direction: g.getDirection(n.center, e.center),
                    scale: g.getScale(n.touches, e.touches),
                    rotation: g.getRotation(n.touches, e.touches)
                }), e
            },
            register: function (e) {
                var n = e.defaults || {};
                return n[e.name] === t && (n[e.name] = !0), g.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function (e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        };
    r.Instance = function (e, t) {
        var i = this;
        n(), this.element = e, this.enabled = !0, g.each(t, function (e, n) {
            delete t[n], t[g.toCamelCase(n)] = e
        }), this.options = g.extend(g.extend({}, r.defaults), t || {}), this.options.behavior && g.toggleBehavior(this.element, this.options.behavior, !0), this.eventStartHandler = y.onTouch(e, h, function (e) {
            i.enabled && e.eventType == h ? w.startDetect(i, e) : e.eventType == m && w.detect(e)
        }), this.eventHandlers = []
    }, r.Instance.prototype = {
        on: function (e, t) {
            var n = this;
            return y.on(n.element, e, t, function (e) {
                n.eventHandlers.push({
                    gesture: e,
                    handler: t
                })
            }), n
        },
        off: function (e, t) {
            var n = this;
            return y.off(n.element, e, t, function (e) {
                var r = g.inArray({
                    gesture: e,
                    handler: t
                });
                r !== !1 && n.eventHandlers.splice(r, 1)
            }), n
        },
        trigger: function (e, t) {
            t || (t = {});
            var n = r.DOCUMENT.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = t;
            var i = this.element;
            return g.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
        },
        enable: function (e) {
            return this.enabled = e, this
        },
        dispose: function () {
            var e, t;
            for (g.toggleBehavior(this.element, this.options.behavior, !1), e = -1; t = this.eventHandlers[++e];) g.off(this.element, t.gesture, t.handler);
            return this.eventHandlers = [], y.off(this.element, i[h], this.eventStartHandler), null
        }
    }, function (e) {
        function t(t, r) {
            var i = w.current;
            if (!(r.options.dragMaxTouches > 0 && t.touches.length > r.options.dragMaxTouches)) switch (t.eventType) {
            case h:
                n = !1;
                break;
            case p:
                if (t.distance < r.options.dragMinDistance && i.name != e) return;
                var f = i.startEvent.center;
                if (i.name != e && (i.name = e, r.options.dragDistanceCorrection && t.distance > 0)) {
                    var l = Math.abs(r.options.dragMinDistance / t.distance);
                    f.pageX += t.deltaX * l, f.pageY += t.deltaY * l, f.clientX += t.deltaX * l, f.clientY += t.deltaY * l, t = w.extendEventData(t)
                }(i.lastEvent.dragLockToAxis || r.options.dragLockToAxis && r.options.dragLockMinDistance <= t.distance) && (t.dragLockToAxis = !0);
                var c = i.lastEvent.direction;
                t.dragLockToAxis && c !== t.direction && (t.direction = g.isVertical(c) ? t.deltaY < 0 ? u : s : t.deltaX < 0 ? o : a), n || (r.trigger(e + "start", t), n = !0), r.trigger(e, t), r.trigger(e + t.direction, t);
                var m = g.isVertical(t.direction);
                (r.options.dragBlockVertical && m || r.options.dragBlockHorizontal && !m) && t.preventDefault();
                break;
            case v:
                n && t.changedLength <= r.options.dragMaxTouches && (r.trigger(e + "end", t), n = !1);
                break;
            case d:
                n = !1
            }
        }
        var n = !1;
        r.gestures.Drag = {
            name: e,
            index: 50,
            handler: t,
            defaults: {
                dragMinDistance: 10,
                dragDistanceCorrection: !0,
                dragMaxTouches: 1,
                dragBlockHorizontal: !1,
                dragBlockVertical: !1,
                dragLockToAxis: !1,
                dragLockMinDistance: 25
            }
        }
    }("drag"), r.gestures.Gesture = {
        name: "gesture",
        index: 1337,
        handler: function (e, t) {
            t.trigger(this.name, e)
        }
    }, function (e) {
        function t(t, r) {
            var i = r.options,
                s = w.current;
            switch (t.eventType) {
            case h:
                clearTimeout(n), s.name = e, n = setTimeout(function () {
                    s && s.name == e && r.trigger(e, t)
                }, i.holdTimeout);
                break;
            case p:
                t.distance > i.holdThreshold && clearTimeout(n);
                break;
            case v:
                clearTimeout(n)
            }
        }
        var n;
        r.gestures.Hold = {
            name: e,
            index: 10,
            defaults: {
                holdTimeout: 500,
                holdThreshold: 2
            },
            handler: t
        }
    }("hold"), r.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function (e, t) {
            e.eventType == v && t.trigger(this.name, e)
        }
    }, r.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipeMinTouches: 1,
            swipeMaxTouches: 1,
            swipeVelocityX: .6,
            swipeVelocityY: .6
        },
        handler: function (e, t) {
            if (e.eventType == v) {
                var n = e.touches.length,
                    r = t.options;
                if (n < r.swipeMinTouches || n > r.swipeMaxTouches) return;
                (e.velocityX > r.swipeVelocityX || e.velocityY > r.swipeVelocityY) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
            }
        }
    }, function (e) {
        function t(t, r) {
            var i, s, o = r.options,
                u = w.current,
                a = w.previous;
            switch (t.eventType) {
            case h:
                n = !1;
                break;
            case p:
                n = n || t.distance > o.tapMaxDistance;
                break;
            case d:
                !g.inStr(t.srcEvent.type, "cancel") && t.deltaTime < o.tapMaxTime && !n && (i = a && a.lastEvent && t.timeStamp - a.lastEvent.timeStamp, s = !1, a && a.name == e && i && i < o.doubleTapInterval && t.distance < o.doubleTapDistance && (r.trigger("doubletap", t), s = !0), (!s || o.tapAlways) && (u.name = e, r.trigger(u.name, t)))
            }
        }
        var n = !1;
        r.gestures.Tap = {
            name: e,
            index: 100,
            handler: t,
            defaults: {
                tapMaxTime: 250,
                tapMaxDistance: 10,
                tapAlways: !0,
                doubleTapDistance: 20,
                doubleTapInterval: 300
            }
        }
    }("tap"), r.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            preventDefault: !1,
            preventMouse: !1
        },
        handler: function (e, t) {
            return t.options.preventMouse && e.pointerType == f ? void e.stopDetect() : (t.options.preventDefault && e.preventDefault(), void(e.eventType == m && t.trigger("touch", e)))
        }
    }, function (e) {
        function t(t, r) {
            switch (t.eventType) {
            case h:
                n = !1;
                break;
            case p:
                if (t.touches.length < 2) return;
                var i = Math.abs(1 - t.scale),
                    s = Math.abs(t.rotation);
                if (i < r.options.transformMinScale && s < r.options.transformMinRotation) return;
                w.current.name = e, n || (r.trigger(e + "start", t), n = !0), r.trigger(e, t), s > r.options.transformMinRotation && r.trigger("rotate", t), i > r.options.transformMinScale && (r.trigger("pinch", t), r.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));
                break;
            case v:
                n && t.changedLength < 2 && (r.trigger(e + "end", t), n = !1)
            }
        }
        var n = !1;
        r.gestures.Transform = {
            name: e,
            index: 45,
            defaults: {
                transformMinScale: .01,
                transformMinRotation: 1
            },
            handler: t
        }
    }("transform"), "function" == typeof define && define.amd ? define(function () {
        return r
    }) : "undefined" != typeof module && module.exports ? module.exports = r : e.Hammer = r
}(window);
var g, ca = ca || {},
    l = this;
var pa = "closure_uid_" + (1e9 * Math.random() >>> 0),
    qa = 0;
var ua = Date.now ||
function () {
    return +(new Date)
};
p(va, Error);
va.prototype.name = "CustomError";
var Ba = /&/g,
    Ca = /</g,
    Da = />/g,
    Ea = /\"/g,
    Aa = /[&<>\"]/;
p(Ha, va);
Ha.prototype.name = "AssertionError";
var Ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
var r = Array.prototype,
    Oa = r.indexOf ?
function (e, t, n) {
    return r.indexOf.call(e, t, n)
} : function (e, t, n) {
    n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n;
    if (m(e)) return m(t) && 1 == t.length ? e.indexOf(t, n) : -1;
    for (; n < e.length; n++) if (n in e && e[n] === t) return n;
    return -1
}, s = r.forEach ?
function (e, t, n) {
    r.forEach.call(e, t, n)
} : function (e, t, n) {
    for (var r = e.length, i = m(e) ? e.split("") : e, s = 0; s < r; s++) s in i && t.call(n, i[s], s, e)
}, Pa = r.filter ?
function (e, t, n) {
    return r.filter.call(e, t, n)
} : function (e, t, n) {
    for (var r = e.length, i = [], s = 0, o = m(e) ? e.split("") : e, u = 0; u < r; u++) if (u in o) {
        var a = o[u];
        t.call(n, a, u, e) && (i[s++] = a)
    }
    return i
}, u = r.map ?
function (e, t, n) {
    return r.map.call(e, t, n)
} : function (e, t, n) {
    for (var r = e.length, i = Array(r), s = m(e) ? e.split("") : e, o = 0; o < r; o++) o in s && (i[o] = t.call(n, s[o], o, e));
    return i
}, Qa = r.reduce ?
function (e, t, i, s) {
    s && (t = n(t, s));
    return r.reduce.call(e, t, i)
} : function (e, t, n, r) {
    var i = n;
    s(e, function (n, s) {
        i = t.call(r, i, n, s, e)
    });
    return i
}, Ra = r.some ?
function (e, t, n) {
    return r.some.call(e, t, n)
} : function (e, t, n) {
    for (var r = e.length, i = m(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && t.call(n, i[s], s, e)) return !0;
    return !1
}, Sa = r.every ?
function (e, t, n) {
    return r.every.call(e, t, n)
} : function (e, t, n) {
    for (var r = e.length, i = m(e) ? e.split("") : e, s = 0; s < r; s++) if (s in i && !t.call(n, i[s], s, e)) return !1;
    return !0
};
var $a, ab = {};
var eb, fb, gb, hb;
hb = gb = fb = eb = !1;
var jb;
if (jb = ib()) {
    var nb = l.navigator;
    eb = 0 == jb.lastIndexOf("Opera", 0);
    fb = !eb && (-1 != jb.indexOf("MSIE") || -1 != jb.indexOf("Trident"));
    gb = !eb && -1 != jb.indexOf("WebKit");
    hb = !eb && !gb && !fb && "Gecko" == nb.product
}
var ob = eb,
    y = fb,
    pb = hb,
    z = gb,
    qb = l.navigator,
    rb = -1 != (qb && qb.platform || "").indexOf("Mac");
var tb;
e: {
    var ub = "",
        vb;
    if (ob && l.opera) var wb = l.opera.version,
        ub = "function" == typeof wb ? wb() : wb;
    else if (pb ? vb = /rv\:([^\);]+)(\)|;)/ : y ? vb = /\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/ : z && (vb = /WebKit\/(\S+)/), vb) var xb = vb.exec(ib()),
        ub = xb ? xb[1] : "";
    if (y) {
        var yb = sb();
        if (yb > parseFloat(ub)) {
            tb = String(yb);
            break e
        }
    }
    tb = ub
}
var zb = {};
var Ab = l.document,
    Bb = Ab && y ? sb() || ("CSS1Compat" == Ab.compatMode ? parseInt(tb, 10) : 5) : void 0;
Cb.prototype.clone = function () {
    return new Cb(this.width, this.height)
};
Cb.prototype.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
Cb.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
Cb.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Db = !y || y && 9 <= Bb,
    Eb = !pb && !y || y && y && 9 <= Bb || pb && A("1.9.1");
y && A("9");
var Fb = y || ob || z;
Gb.prototype.clone = function () {
    return new Gb(this.x, this.y)
};
Gb.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
};
Gb.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
Gb.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
var Mb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
g = Ib.prototype;
g.createElement = function (e) {
    return this.Hb.createElement(e)
};
g.createTextNode = function (e) {
    return this.Hb.createTextNode(String(e))
};
g.appendChild = function (e, t) {
    e.appendChild(t)
};
g.hf = Zb;
g.contains = function (e, t) {
    if (e.contains && 1 == t.nodeType) return e == t || e.contains(t);
    if ("undefined" != typeof e.compareDocumentPosition) return e == t || Boolean(e.compareDocumentPosition(t) & 16);
    for (; t && e != t;) t = t.parentNode;
    return t == e
};
g = dc.prototype;
g.clone = function () {
    return new dc(this.top, this.right, this.bottom, this.left)
};
g.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
g.contains = function (e) {
    return this && e ? e instanceof dc ? e.left >= this.left && e.right <= this.right && e.top >= this.top && e.bottom <= this.bottom : e.x >= this.left && e.x <= this.right && e.y >= this.top && e.y <= this.bottom : !1
};
g.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var nc = {
    thin: 2,
    medium: 4,
    thick: 6
};
var oc, I, pc, qc, rc, sc, K, tc, uc, vc, wc;
xc.prototype.ta = function () {
    this.ca ? (TweenMax.to(this.B, .4, {
        y: this.J - this.Yb,
        ease: Expo.easeOut
    }), TweenMax.to(this.tc, .4, {
        y: 0,
        ease: Expo.easeOut
    })) : (TweenMax.to(this.tc, .4, {
        y: -(this.J - this.Yb),
        ease: Expo.easeOut
    }), TweenMax.to(this.B, .4, {
        y: 0,
        ease: Expo.easeOut
    }));
    db(this.a, "is-active");
    this.ca = !this.ca
};
var zc = "closure_listenable_" + (1e6 * Math.random() | 0);
var Ec = 0;
Hc.prototype.add = function (e, t, n, r, i) {
    var s = this.K[e];
    s || (s = this.K[e] = [], this.mc++);
    var o = Ic(s, t, r, i); - 1 < o ? (e = s[o], n || (e.wc = !1)) : (e = new Fc(t, this.src, e, !! r, i), e.wc = n, s.push(e));
    return e
};
Hc.prototype.remove = function (e, t, n, i) {
    if (!(e in this.K)) return !1;
    var s = this.K[e];
    t = Ic(s, t, n, i);
    return -1 < t ? (Gc(s[t]), r.splice.call(s, t, 1), 0 == s.length && (delete this.K[e], this.mc--), !0) : !1
};
Hc.prototype.Zc = function (e) {
    var t = 0,
        n;
    for (n in this.K) if (!e || n == e) {
        for (var r = this.K[n], i = 0; i < r.length; i++)++t, Gc(r[i]);
        delete this.K[n];
        this.mc--
    }
    return t
};
Hc.prototype.Ob = function (e, t, n, r) {
    e = this.K[e];
    var i = -1;
    e && (i = Ic(e, t, n, r));
    return -1 < i ? e[i] : null
};
var Kc = !y || y && 9 <= Bb,
    Lc = y && !A("9");
!z || A("528");
pb && A("1.9b") || y && A("8") || ob && A("9.5") || z && A("528");
pb && !A("8") || y && A("9");
var Mc = 0,
    Nc = {};
L.prototype.Nd = !1;
L.prototype.xa = function () {
    if (!this.Nd && (this.Nd = !0, this.f(), 0 != Mc)) {
        var e = oa(this);
        delete Nc[e]
    }
};
L.prototype.f = function () {
    if (this.Zb) for (; this.Zb.length;) this.Zb.shift()()
};
g = Pc.prototype;
g.f = aa();
g.xa = aa();
g.Da = !1;
g.defaultPrevented = !1;
g.Rf = !0;
g.stopPropagation = function () {
    this.Da = !0
};
g.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Rf = !1
};
Qc[" "] = fa;
p(Rc, Pc);
g = Rc.prototype;
g.target = null;
g.relatedTarget = null;
g.offsetX = 0;
g.offsetY = 0;
g.clientX = 0;
g.clientY = 0;
g.screenX = 0;
g.screenY = 0;
g.button = 0;
g.keyCode = 0;
g.charCode = 0;
g.ctrlKey = !1;
g.altKey = !1;
g.shiftKey = !1;
g.metaKey = !1;
g.$h = !1;
g.ab = null;
g.stopPropagation = function () {
    Rc.d.stopPropagation.call(this);
    this.ab.stopPropagation ? this.ab.stopPropagation() : this.ab.cancelBubble = !0
};
g.preventDefault = function () {
    Rc.d.preventDefault.call(this);
    var e = this.ab;
    if (e.preventDefault) e.preventDefault();
    else if (e.returnValue = !1, Lc) try {
        if (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) e.keyCode = -1
    } catch (t) {}
};
g.f = aa();
var Sc = {},
    Tc = {},
    Uc = {};
var ed = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
var fd;
fd = function (e, t, n, r) {
    function i(e) {
        e.preventDefault();
        e.stopPropagation();
        t.call(n, e)
    }
    if (!1 !== r && gd && !Modernizr.touch) O(e, "click", function (e) {
        i(e)
    });
    else Hammer(e, {
        prevent_default: !1 !== r
    }).on("tap", i)
};
var gd = !Modernizr.touch,
    id = !1;
var kd = window.isScrolling = !1;
var od = !! l.DOMTokenList,
    pd = od ?
function (e) {
    return e.classList
} : function (e) {
    e = e.className;
    return m(e) && e.match(/\S+/g) || []
}, qd = od ?
function (e, t) {
    return e.classList.contains(t)
} : function (e, t) {
    return Ua(pd(e), t)
}, rd = od ?
function (e, t) {
    e.classList.add(t)
} : function (e, t) {
    qd(e, t) || (e.className += 0 < e.className.length ? " " + t : t)
}, sd = od ?
function (e, t) {
    e.classList.remove(t)
} : function (e, t) {
    qd(e, t) && (e.className = Pa(pd(e), function (e) {
        return e != t
    }).join(" "))
};
var td = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
var vd = z;
var wd = "StopIteration" in l ? l.StopIteration : Error("StopIteration");
xd.prototype.next = function () {
    throw wd
};
xd.prototype.rd = function () {
    return this
};
g = Ad.prototype;
g.s = 0;
g.pc = 0;
g.jf = ba("s");
g.na = function () {
    Bd(this);
    for (var e = [], t = 0; t < this.n.length; t++) e.push(this.F[this.n[t]]);
    return e
};
g.ma = function () {
    Bd(this);
    return this.n.concat()
};
g.Fb = function (e) {
    return Cd(this.F, e)
};
g.clear = function () {
    this.F = {};
    this.pc = this.s = this.n.length = 0
};
g.remove = function (e) {
    return Cd(this.F, e) ? (delete this.F[e], this.s--, this.pc++, this.n.length > 2 * this.s && Bd(this), !0) : !1
};
g.get = function (e, t) {
    return Cd(this.F, e) ? this.F[e] : t
};
g.set = function (e, t) {
    Cd(this.F, e) || (this.s++, this.n.push(e), this.pc++);
    this.F[e] = t
};
g.clone = function () {
    return new Ad(this)
};
g.rd = function (e) {
    Bd(this);
    var t = 0,
        n = this.n,
        r = this.F,
        i = this.pc,
        s = this,
        o = new xd;
    o.next = function () {
        for (;;) {
            if (i != s.pc) throw Error("The map has changed since the iterator was created");
            if (t >= n.length) throw wd;
            var o = n[t++];
            return e ? o : r[o]
        }
    };
    return o
};
g = Fd.prototype;
g.wb = "";
g.ld = "";
g.Ib = "";
g.Wc = null;
g.Rc = "";
g.Hc = "";
g.nh = !1;
g.Z = !1;
g.toString = function () {
    var e = [],
        t = this.wb;
    t && e.push(Kd(t, Ld), ":");
    if (t = this.Ib) {
        e.push("//");
        var n = this.ld;
        n && e.push(Kd(n, Ld), "@");
        e.push(encodeURIComponent(String(t)));
        t = this.Wc;
        null != t && e.push(":", String(t))
    }
    if (t = this.Rc) this.Ib && "/" != t.charAt(0) && e.push("/"), e.push(Kd(t, "/" == t.charAt(0) ? Od : Pd));
    (t = this.Ea.toString()) && e.push("?", t);
    (t = this.Hc) && e.push("#", Kd(t, Qd));
    return e.join("")
};
g.clone = function () {
    return new Fd(this)
};
g.ne = function (e) {
    this.Z = e;
    this.Ea && this.Ea.ne(e);
    return this
};
var Ld = /[#\/\?@]/g,
    Pd = /[\#\?:]/g,
    Od = /[\#\?]/g,
    Rd = /[\#\?@]/g,
    Qd = /#/g;
g = Jd.prototype;
g.p = null;
g.s = null;
g.jf = function () {
    Vd(this);
    return this.s
};
g.add = function (e, t) {
    Vd(this);
    this.V = null;
    e = Wd(this, e);
    var n = this.p.get(e);
    n || this.p.set(e, n = []);
    n.push(t);
    this.s++;
    return this
};
g.remove = function (e) {
    Vd(this);
    e = Wd(this, e);
    return this.p.Fb(e) ? (this.V = null, this.s -= this.p.get(e).length, this.p.remove(e)) : !1
};
g.clear = function () {
    this.p = this.V = null;
    this.s = 0
};
g.Fb = function (e) {
    Vd(this);
    e = Wd(this, e);
    return this.p.Fb(e)
};
g.ma = function () {
    Vd(this);
    for (var e = this.p.na(), t = this.p.ma(), n = [], r = 0; r < t.length; r++) for (var i = e[r], s = 0; s < i.length; s++) n.push(t[r]);
    return n
};
g.na = function (e) {
    Vd(this);
    var t = [];
    if (m(e)) this.Fb(e) && (t = Wa(t, this.p.get(Wd(this, e))));
    else {
        e = this.p.na();
        for (var n = 0; n < e.length; n++) t = Wa(t, e[n])
    }
    return t
};
g.set = function (e, t) {
    Vd(this);
    this.V = null;
    e = Wd(this, e);
    this.Fb(e) && (this.s -= this.p.get(e).length);
    this.p.set(e, [t]);
    this.s++;
    return this
};
g.get = function (e, t) {
    var n = e ? this.na(e) : [];
    return 0 < n.length ? String(n[0]) : t
};
g.toString = function () {
    if (this.V) return this.V;
    if (!this.p) return "";
    for (var e = [], t = this.p.ma(), n = 0; n < t.length; n++) for (var r = t[n], i = encodeURIComponent(String(r)), r = this.na(r), s = 0; s < r.length; s++) {
        var o = i;
        "" !== r[s] && (o += "=" + encodeURIComponent(String(r[s])));
        e.push(o)
    }
    return this.V = e.join("&")
};
g.clone = function () {
    var e = new Jd;
    e.V = this.V;
    this.p && (e.p = this.p.clone(), e.s = this.s);
    return e
};
g.ne = function (e) {
    e && !this.Z && (Vd(this), this.V = null, Ed(this.p, function (e, t) {
        var n = t.toLowerCase();
        t != n && (this.remove(t), Td(this, n, e))
    }, this));
    this.Z = e
};
Zd.prototype.Ne = function (e, t) {
    this.yd = !1;
    $d(this, e, t)
};
Zd.prototype.Ya = function () {
    if (this.Kb) {
        if (!this.Wf) throw new be;
        this.Wf = !1
    }
};
Zd.prototype.Eb = function (e) {
    this.Ya();
    $d(this, !0, e)
};
p(be, va);
be.prototype.message = "Deferred has already fired";
be.prototype.name = "AlreadyCalledError";
var ie = 0,
    he = 1;
p(ge, va);
var le = 0;
ke.prototype.send = function (e, t, n, r) {
    e = e || null;
    r = r || "_" + (le++).toString(36) + ua().toString(36);
    l._callbacks_ || (l._callbacks_ = {});
    var i = this.Ci.clone();
    if (e) for (var s in e) e.hasOwnProperty && !e.hasOwnProperty(s) || Sd(i, s, e[s]);
    t && (l._callbacks_[r] = me(r, t), Sd(i, this.Ag, "_callbacks_." + r));
    t = ee(i.toString(), {
        timeout: this.xb,
        Fg: !0
    });
    t.ec.push([null, ne(r, e, n), void 0]);
    t.Kb && ae(t);
    return {
        pf: r,
        Ji: t
    }
};
var pe = function () {
        function e(e, n) {
            if (!e) return [];
            if (e.constructor == Array) return e;
            if (!m(e)) return [e];
            if (m(n) && (n = B(n), !n)) return [];
            n = n || document;
            var i = n.ownerDocument || n.documentElement;
            N = n.contentType && "application/xml" == n.contentType || ob && (n.doctype || "[object XMLDocument]" == i.toString()) || !! i && (y ? i.xml : n.xmlVersion || i.xmlVersion);
            return (i = r(e)(n)) && i.Pc ? i : t(i)
        }
        function t(e) {
            if (e && e.Pc) return e;
            var t = [];
            if (!e || !e.length) return t;
            e[0] && t.push(e[0]);
            if (2 > e.length) return t;
            I++;
            if (y && N) {
                var n = I + "";
                e[0].setAttribute("_zipIdx", n);
                for (var r = 1, i; i = e[r]; r++) e[r].getAttribute("_zipIdx") != n && t.push(i), i.setAttribute("_zipIdx", n)
            } else if (y && e.Ig) try {
                for (r = 1; i = e[r]; r++) b(i) && t.push(i)
            } catch (s) {} else for (e[0] && (e[0]._zipIdx = I), r = 1; i = e[r]; r++) e[r]._zipIdx != I && t.push(i), i._zipIdx = I;
            return t
        }
        function n(e, t) {
            if (!t) return 1;
            var n = q(e);
            return t[n] ? 0 : t[n] = 1
        }
        function r(e, t) {
            if (F) {
                var n = j[e];
                if (n && !t) return n
            }
            if (n = H[e]) return n;
            var n = e.charAt(0),
                s = -1 == e.indexOf(" ");
            0 <= e.indexOf("#") && s && (t = !0);
            if (!F || t || -1 != ">~+".indexOf(n) || y && -1 != e.indexOf(":") || x && 0 <= e.indexOf(".") || -1 != e.indexOf(":contains") || -1 != e.indexOf("|=")) {
                var o = e.split(/\s*,\s*/);
                return H[e] = 2 > o.length ? i(e) : function (e) {
                    for (var t = 0, n = [], r; r = o[t++];) n = n.concat(i(r)(e));
                    return n
                }
            }
            var u = 0 <= ">~+".indexOf(e.charAt(e.length - 1)) ? e + " *" : e;
            return j[e] = function (t) {
                try {
                    if (9 != t.nodeType && !s) throw "";
                    var n = t.querySelectorAll(u);
                    y ? n.Ig = !0 : n.Pc = !0;
                    return n
                } catch (i) {
                    return r(e, !0)(t)
                }
            }
        }
        function i(e) {
            var t = E(xa(e));
            if (1 == t.length) {
                var n = o(t[0]);
                return function (e) {
                    if (e = n(e, [])) e.Pc = !0;
                    return e
                }
            }
            return function (e) {
                e = S(e);
                for (var n, r, i = t.length, s, u, a = 0; a < i; a++) {
                    u = [];
                    n = t[a];
                    r = e.length - 1;
                    0 < r && (s = {}, u.Pc = !0);
                    r = o(n);
                    for (var f = 0; n = e[f]; f++) r(n, u, s);
                    if (!u.length) break;
                    e = u
                }
                return u
            }
        }
        function o(e) {
            var t = P[e.tb];
            if (t) return t;
            var n = e.rf,
                n = n ? n.Qc : "",
                r = l(e, {
                    Za: 1
                }),
                i = "*" == e.T,
                s = document.getElementsByClassName;
            if (n) s = {
                Za: 1
            }, i && (s.T = 1), r = l(e, s), "+" == n ? t = f(r) : "~" == n ? t = a(r) : ">" == n && (t = u(r));
            else if (e.id) r = !e.xf && i ? Xd : l(e, {
                Za: 1,
                id: 1
            }), t = function (t, n) {
                var i;
                i = Hb(t);
                i = m(e.id) ? i.Hb.getElementById(e.id) : e.id;
                var s;
                if ((s = i && r(i)) && !(s = 9 == t.nodeType)) {
                    for (s = i.parentNode; s && s != t;) s = s.parentNode;
                    s = !! s
                }
                if (s) return S(i, n)
            };
            else if (s && /\{\s*\[native code\]\s*\}/.test(String(s)) && e.ha.length && !x) var r = l(e, {
                Za: 1,
                ha: 1,
                id: 1
            }),
                o = e.ha.join(" "),
                t = function (e, t) {
                    for (var n = S(0, t), i, s = 0, u = e.getElementsByClassName(o); i = u[s++];) r(i, e) && n.push(i);
                    return n
                };
            else i || e.xf ? (r = l(e, {
                Za: 1,
                T: 1,
                id: 1
            }), t = function (t, n) {
                for (var i = S(0, n), s, o = 0, u = t.getElementsByTagName(e.Vd()); s = u[o++];) r(s, t) && i.push(s);
                return i
            }) : t = function (t, n) {
                for (var r = S(0, n), i, s = 0, o = t.getElementsByTagName(e.Vd()); i = o[s++];) r.push(i);
                return r
            };
            return P[e.tb] = t
        }
        function u(e) {
            e = e || Xd;
            return function (t, r, i) {
                for (var s = 0, o = t[T]; t = o[s++];) M(t) && (!i || n(t, i)) && e(t, s) && r.push(t);
                return r
            }
        }
        function a(e) {
            return function (t, r, i) {
                for (t = t[L]; t;) {
                    if (M(t)) {
                        if (i && !n(t, i)) break;
                        e(t) && r.push(t)
                    }
                    t = t[L]
                }
                return r
            }
        }
        function f(e) {
            return function (t, r, i) {
                for (; t = t[L];) if (!k || b(t)) {
                    i && !n(t, i) || !e(t) || r.push(t);
                    break
                }
                return r
            }
        }
        function l(e, t) {
            if (!e) return Xd;
            t = t || {};
            var n = null;
            t.Za || (n = w(n, b));
            t.T || "*" != e.T && (n = w(n, function (t) {
                return t && t.tagName == e.Vd()
            }));
            t.ha || s(e.ha, function (e, t) {
                var r = RegExp("(?:^|\\s)" + e + "(?:\\s|$)");
                n = w(n, function (e) {
                    return r.test(e.className)
                });
                n.count = t
            });
            t.Pa || s(e.Pa, function (e) {
                var t = e.name;
                _[t] && (n = w(n, _[t](t, e.value)))
            });
            t.sc || s(e.sc, function (e) {
                var t, r = e.wd;
                e.type && C[e.type] ? t = C[e.type](r, e.fe) : r.length && (t = D(r));
                t && (n = w(n, t))
            });
            t.id || e.id && (n = w(n, function (t) {
                return !!t && t.id == e.id
            }));
            n || "default" in t || (n = Xd);
            return n
        }
        function c(e) {
            return p(e) % 2
        }
        function h(e) {
            return !(p(e) % 2)
        }
        function p(e) {
            var t = e.parentNode,
                n = 0,
                r = t[T],
                i = e._i || -1,
                s = t._l || -1;
            if (!r) return -1;
            r = r.length;
            if (s == r && 0 <= i && 0 <= s) return i;
            t._l = r;
            i = -1;
            for (t = t.firstElementChild || t.firstChild; t; t = t[L]) M(t) && (t._i = ++n, e === t && (i = n));
            return i
        }
        function d(e) {
            for (; e = e[L];) if (M(e)) return !1;
            return !0
        }
        function v(e) {
            for (; e = e[O];) if (M(e)) return !1;
            return !0
        }
        function g(e, t) {
            return e ? "class" == t ? e.className || "" : "for" == t ? e.htmlFor || "" : "style" == t ? e.style.cssText || "" : (N ? e.getAttribute(t) : e.getAttribute(t, 2)) || "" : ""
        }
        function b(e) {
            return 1 == e.nodeType
        }
        function w(e, t) {
            return e ? t ?
            function () {
                return e.apply(window, arguments) && t.apply(window, arguments)
            } : e : t
        }
        function E(e) {
            function t() {
                0 <= f && (m.id = n(f, d).replace(/\\/g, ""), f = -1);
                if (0 <= l) {
                    var e = l == d ? null : n(l, d);
                    0 > ">~+".indexOf(e) ? m.T = e : m.Qc = e;
                    l = -1
                }
                0 <= a && (m.ha.push(n(a + 1, d).replace(/\\/g, "")), a = -1)
            }
            function n(t, n) {
                return xa(e.slice(t, n))
            }
            e = 0 <= ">~+".indexOf(e.slice(-1)) ? e + " * " : e + " ";
            for (var r = [], i = -1, s = -1, o = -1, u = -1, a = -1, f = -1, l = -1, c = "", h = "", p, d = 0, v = e.length, m = null, g = null; c = h, h = e.charAt(d), d < v; d++)"\\" != c && (m || (p = d, m = {
                tb: null,
                Pa: [],
                sc: [],
                ha: [],
                T: null,
                Qc: null,
                id: null,
                Vd: function () {
                    return N ? this.Xh : this.T
                }
            }, l = d), 0 <= i ? "]" == h ? (g.wd ? g.fe = n(o || i + 1, d) : g.wd = n(i + 1, d), !(i = g.fe) || '"' != i.charAt(0) && "'" != i.charAt(0) || (g.fe = i.slice(1, -1)), m.sc.push(g), g = null, i = o = -1) : "=" == h && (o = 0 <= "|~^$*".indexOf(c) ? c : "", g.type = o + h, g.wd = n(i + 1, d - o.length), o = d + 1) : 0 <= s ? ")" == h && (0 <= u && (g.value = n(s + 1, d)), u = s = -1) : "#" == h ? (t(), f = d + 1) : "." == h ? (t(), a = d) : ":" == h ? (t(), u = d) : "[" == h ? (t(), i = d, g = {}) : "(" == h ? (0 <= u && (g = {
                name: n(u + 1, d),
                value: null
            }, m.Pa.push(g)), s = d) : " " == h && c != h && (t(), 0 <= u && m.Pa.push({
                name: n(u + 1, d)
            }), m.xf = m.Pa.length || m.sc.length || m.ha.length, m.Oi = m.tb = n(p, d), m.Xh = m.T = m.Qc ? null : m.T || "*", m.T && (m.T = m.T.toUpperCase()), r.length && r[r.length - 1].Qc && (m.rf = r.pop(), m.tb = m.rf.tb + " " + m.tb), r.push(m), m = null));
            return r
        }
        function S(e, t) {
            var n = t || [];
            e && n.push(e);
            return n
        }
        var x = z && "BackCompat" == document.compatMode,
            T = document.firstChild.children ? "children" : "childNodes",
            N = !1,
            C = {
                "*=": function (e, t) {
                    return function (n) {
                        return 0 <= g(n, e).indexOf(t)
                    }
                },
                "^=": function (e, t) {
                    return function (n) {
                        return 0 == g(n, e).indexOf(t)
                    }
                },
                "$=": function (e, t) {
                    return function (n) {
                        n = " " + g(n, e);
                        return n.lastIndexOf(t) == n.length - t.length
                    }
                },
                "~=": function (e, t) {
                    var n = " " + t + " ";
                    return function (t) {
                        return 0 <= (" " + g(t, e) + " ").indexOf(n)
                    }
                },
                "|=": function (e, t) {
                    t = " " + t;
                    return function (n) {
                        n = " " + g(n, e);
                        return n == t || 0 == n.indexOf(t + "-")
                    }
                },
                "=": function (e, t) {
                    return function (n) {
                        return g(n, e) == t
                    }
                }
            },
            k = "undefined" == typeof document.firstChild.nextElementSibling,
            L = k ? "nextSibling" : "nextElementSibling",
            O = k ? "previousSibling" : "previousElementSibling",
            M = k ? b : Xd,
            _ = {
                checked: function () {
                    return function (e) {
                        return e.checked || e.attributes.checked
                    }
                },
                "first-child": function () {
                    return v
                },
                "last-child": function () {
                    return d
                },
                "only-child": function () {
                    return function (e) {
                        return v(e) && d(e) ? !0 : !1
                    }
                },
                empty: function () {
                    return function (e) {
                        var t = e.childNodes;
                        for (e = e.childNodes.length - 1; 0 <= e; e--) {
                            var n = t[e].nodeType;
                            if (1 === n || 3 == n) return !1
                        }
                        return !0
                    }
                },
                contains: function (e, t) {
                    var n = t.charAt(0);
                    if ('"' == n || "'" == n) t = t.slice(1, -1);
                    return function (e) {
                        return 0 <= e.innerHTML.indexOf(t)
                    }
                },
                not: function (e, t) {
                    var n = E(t)[0],
                        r = {
                            Za: 1
                        };
                    "*" != n.T && (r.T = 1);
                    n.ha.length || (r.ha = 1);
                    var i = l(n, r);
                    return function (e) {
                        return !i(e)
                    }
                },
                "nth-child": function (e, t) {
                    if ("odd" == t) return c;
                    if ("even" == t) return h;
                    if (-1 != t.indexOf("n")) {
                        var n = t.split("n", 2),
                            r = n[0] ? "-" == n[0] ? -1 : parseInt(n[0], 10) : 1,
                            i = n[1] ? parseInt(n[1], 10) : 0,
                            s = 0,
                            o = -1;
                        0 < r ? 0 > i ? i = i % r && r + i % r : 0 < i && (i >= r && (s = i - i % r), i %= r) : 0 > r && (r *= -1, 0 < i && (o = i, i %= r));
                        if (0 < r) return function (e) {
                            e = p(e);
                            return e >= s && (0 > o || e <= o) && e % r == i
                        };
                        t = i
                    }
                    var u = parseInt(t, 10);
                    return function (e) {
                        return p(e) == u
                    }
                }
            },
            D = y ?
        function (e) {
            var t = e.toLowerCase();
            "class" == t && (e = "className");
            return function (n) {
                return N ? n.getAttribute(e) : n[e] || n[t]
            }
        } : function (e) {
            return function (t) {
                return t && t.getAttribute && t.hasAttribute(e)
            }
        }, P = {}, H = {}, j = {}, F = !! document.querySelectorAll && (!z || A("526")), I = 0, q = y ?
        function (e) {
            return N ? e.getAttribute("_uid") || e.setAttribute("_uid", ++I) || I : e.uniqueID
        } : function (e) {
            return e._uid || (e._uid = ++I)
        };
        e.Pa = _;
        return e
    }();
da("goog.dom.query", pe);
da("goog.dom.query.pseudos", pe.Pa);
(({})).Gi;
p(qe, L);
var re = "js-photo-stream-container",
    se = "js-photo-stream-desktop",
    ve = "js-photo-stream-mobile",
    te = "js-photo-stream-modal",
    ue = "js-photo-stream-full-size",
    we = "js-photo-stream-prev",
    xe = "js-photo-stream-next";
g = qe.prototype;
g.f = function () {
    I.off("breakpoint", this.pa);
    this.Aa.off(this.Sf);
    qe.d.f.call(this)
};
g.oa = function () {
    return 768 > window.innerWidth
};
g.yi = function (e) {
    (e = P(e.target, "moreDetailsURI")) && ze(this, e)
};
g.Sf = function () {
    null === this.wa && ye(this, 0)
};
g.jh = function () {
    sd(this.v, "show-modal");
    this.Ic.src = "/events/io/images/dot.png"
};
g.pa = function (e) {
    "mobile" === e[0] && this.refresh()
};
g.Zh = function (e) {
    var t = e.media$group.media$content[0];
    return {
        sb: e.published.$t,
        src: t.url,
        width: t.width,
        height: t.height,
        link: "https://plus.google.com/photos/" + this.oc + "/albums/" + this.Fe + "/" + e.gphoto$id.$t,
        Dh: e.id.$t
    }
};
g.refresh = function (e) {
    null === this.wa || ye(this, 0, e)
};
g.ui = function (e, t) {
    TweenMax.staggerFromTo(e, .2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.easeNone
    }, .05, t)
};
Ge.prototype.Ba = function () {
    window.mainPlayer = this.j = new YT.Player("video-player", {
        title: "Google I/O Live",
        height: "390",
        width: "640",
        playerVars: {
            autohide: 1,
            autoplay: 1,
            loop: 1,
            controls: 2,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            theme: "dark",
            playsinline: 1,
            html5: 1,
            wmode: "transparent"
        },
        videoId: this.zb,
        events: {
            onReady: n(this.Rh, this),
            onStateChange: n(this.Uh, this)
        }
    });
    this.Rb = this.j.getIframe()
};
Ge.prototype.Rh = function () {
    TweenMax.set(this.Rb, {
        opacity: pc ? 1 : 0
    })
};
Ge.prototype.Uh = function (e) {
    e = e.data;
    this.Lb && TweenMax.set(this.Rb, {
        opacity: pc ? 1 : 0
    });
    e === YT.PlayerState.PAUSED ? "function" === typeof this.pb && this.pb() : e === YT.PlayerState.PLAYING ? (TweenMax.to(this.Rb, .2, {
        opacity: 1
    }), this.j.setVolume(100), "function" === typeof this.bc && this.Lb && this.bc(), this.Lb && (this.Lb = !1)) : e === YT.PlayerState.ENDED && "function" === typeof this.ob && this.ob()
};
p(Ie, Pc);
p(S, L);
S.prototype[zc] = !0;
g = S.prototype;
g.ie = null;
g.addEventListener = function (e, t, n, r) {
    O(this, e, t, n, r)
};
g.removeEventListener = function (e, t, n, r) {
    $c(this, e, t, n, r)
};
g.dispatchEvent = function (e) {
    var t, n = this.ie;
    if (n) for (t = []; n; n = n.ie) t.push(n);
    var n = this.sg,
        r = e.type || e;
    if (m(e)) e = new Pc(e, n);
    else if (e instanceof Pc) e.target = e.target || n;
    else {
        var i = e;
        e = new Pc(r, n);
        Na(e, i)
    }
    var i = !0,
        s;
    if (t) for (var o = t.length - 1; !e.Da && 0 <= o; o--) s = e.currentTarget = t[o], i = Je(s, r, !0, e) && i;
    e.Da || (s = e.currentTarget = n, i = Je(s, r, !0, e) && i, e.Da || (i = Je(s, r, !1, e) && i));
    if (t) for (o = 0; !e.Da && o < t.length; o++) s = e.currentTarget = t[o], i = Je(s, r, !1, e) && i;
    return i
};
g.f = function () {
    S.d.f.call(this);
    this.la && this.la.Zc(void 0);
    this.ie = null
};
g.ba = function (e, t, n, r) {
    return this.la.add(e, t, !1, n, r)
};
g.Oc = function (e, t, n, r) {
    return this.la.add(e, t, !0, n, r)
};
g.ve = function (e, t, n, r) {
    return this.la.remove(e, t, n, r)
};
g.Ob = function (e, t, n, r) {
    return this.la.Ob(e, t, n, r)
};
p(Ke, S);
g = Ke.prototype;
g.ka = !1;
g.nc = !0;
g.cc = "/";
g.Fa = function (e) {
    e != this.ka && (this.ka = e) && this.dispatchEvent(new Ie(this.W()))
};
g.W = function () {
    if (this.nc) {
        var e = this.l.location.href,
            t = e.indexOf("#");
        return 0 > t ? "" : e.substring(t + 1)
    }
    return this.gd ? this.gd.Pi(this.cc, this.l.location) : this.l.location.pathname.substr(this.cc.length)
};
g.Ga = function (e, t) {
    e != this.W() && (this.l.history.pushState(null, t || this.l.document.title || "", Le(this, e)), this.dispatchEvent(new Ie(e)))
};
g.me = function (e, t) {
    this.l.history.replaceState(null, t || this.l.document.title || "", Le(this, e));
    this.dispatchEvent(new Ie(e))
};
g.f = function () {
    $c(this.l, "popstate", this.ac, !1, this);
    this.nc && $c(this.l, "hashchange", this.ac, !1, this)
};
g.ac = function () {
    this.ka && this.dispatchEvent(new Ie(this.W()))
};
p(Ne, S);
g = Ne.prototype;
g.enabled = !1;
g.t = null;
g.setInterval = function (e) {
    this.Sb = e;
    this.t && this.enabled ? (this.stop(), this.start()) : this.t && this.stop()
};
g.zi = function () {
    if (this.enabled) {
        var e = ua() - this.ee;
        0 < e && e < .8 * this.Sb ? this.t = this.yb.setTimeout(this.zd, this.Sb - e) : (this.t && (this.yb.clearTimeout(this.t), this.t = null), this.dispatchEvent(Oe), this.enabled && (this.t = this.yb.setTimeout(this.zd, this.Sb), this.ee = ua()))
    }
};
g.start = function () {
    this.enabled = !0;
    this.t || (this.t = this.yb.setTimeout(this.zd, this.Sb), this.ee = ua())
};
g.stop = function () {
    this.enabled = !1;
    this.t && (this.yb.clearTimeout(this.t), this.t = null)
};
g.f = function () {
    Ne.d.f.call(this);
    this.stop();
    delete this.yb
};
var Oe = "tick";
Re.prototype.vc = null;
var Se;
p(Te, Re);
Se = new Te;
var $e = {};
af.prototype.ni = 0;
af.prototype.$e = null;
af.prototype.Ze = null;
var bf = 0;
af.prototype.reset = function (e, t, n, r, i) {
    this.ni = "number" == typeof i ? i : bf++;
    r || ua();
    this.Wb = e;
    this.Eh = t;
    delete this.$e;
    delete this.Ze
};
af.prototype.Tf = function (e) {
    this.Wb = e
};
cf.prototype.Ca = null;
cf.prototype.Wb = null;
cf.prototype.Ed = null;
cf.prototype.lf = null;
df.prototype.toString = ba("name");
var ef = new df("SEVERE", 1e3),
    ff = new df("WARNING", 900),
    gf = new df("CONFIG", 700),
    hf = new df("FINE", 500);
g = cf.prototype;
g.getParent = ba("Ca");
g.hf = function () {
    this.Ed || (this.Ed = {});
    return this.Ed
};
g.Tf = function (e) {
    this.Wb = e
};
g.log = function (e, t, n) {
    if (e.value >= jf(this).value) for (e = this.fh(e, t, n), t = "log:" + e.Eh, l.console && (l.console.timeStamp ? l.console.timeStamp(t) : l.console.markTimeline && l.console.markTimeline(t)), l.msWriteProfilerMark && l.msWriteProfilerMark(t), t = this; t;) {
        n = t;
        var r = e;
        if (n.lf) for (var i = 0, s = void 0; s = n.lf[i]; i++) s(r);
        t = t.getParent()
    }
};
g.fh = function (e, t, n) {
    var r = new af(e, String(t), this.L);
    if (n) {
        r.$e = n;
        var i;
        var s = arguments.callee.caller;
        try {
            var o;
            var u = ea("window.location.href");
            if (m(n)) o = {
                message: n,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: u,
                stack: "Not available"
            };
            else {
                var a, f, c = !1;
                try {
                    a = n.lineNumber || n.Li || "Not available"
                } catch (h) {
                    a = "Not available", c = !0
                }
                try {
                    f = n.fileName || n.filename || n.sourceURL || l.$googDebugFname || u
                } catch (p) {
                    f = "Not available", c = !0
                }
                o = !c && n.lineNumber && n.fileName && n.stack && n.message && n.name ? n : {
                    message: n.message || "Not available",
                    name: n.name || "UnknownError",
                    lineNumber: a,
                    fileName: f,
                    stack: n.stack || "Not available"
                }
            }
            i = "Message: " + za(o.message) + '\nUrl: <a href="view-source:' + o.fileName + '" target="_new">' + o.fileName + "</a>\nLine: " + o.lineNumber + "\n\nBrowser stack:\n" + za(o.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(Xe(s) + "-> ")
        } catch (d) {
            i = "Exception trying to expose exception! You win, we lose. " + d
        }
        r.Ze = i
    }
    return r
};
var kf = {},
    lf = null;
p(xf, S);
var yf = "";
xf.prototype.X = mf("goog.net.XhrIo");
var zf = /^https?$/i,
    Af = ["POST", "PUT"],
    Bf = [];
g = xf.prototype;
g.Eg = function () {
    this.xa();
    Va(Bf, this)
};
g.send = function (e, t, r, i) {
    if (this.e) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Nc + "; newUri=" + e);
    t = t ? t.toUpperCase() : "GET";
    this.Nc = e;
    this.Vb = "";
    this.vf = t;
    this.Qd = !1;
    this.ua = !0;
    this.e = this.Ab ? Ue(this.Ab) : Ue(Se);
    this.pd = this.Ab ? this.Ab.vc || (this.Ab.vc = We(this.Ab)) : Se.vc || (Se.vc = We(Se));
    this.e.onreadystatechange = n(this.Gf, this);
    try {
        wf(this.X, Df(this, "Opening Xhr")), this.Zd = !0, this.e.open(t, e, !0), this.Zd = !1
    } catch (s) {
        wf(this.X, Df(this, "Error opening Xhr: " + s.message));
        Ef(this, s);
        return
    }
    e = r || "";
    var o = this.headers.clone();
    i && Ed(i, function (e, t) {
        o.set(t, e)
    });
    i = Ta(o.ma(), Ff);
    r = l.FormData && e instanceof l.FormData;
    !Ua(Af, t) || i || r || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Ed(o, function (e, t) {
        this.e.setRequestHeader(t, e)
    }, this);
    this.Qf && (this.e.responseType = this.Qf);
    "withCredentials" in this.e && (this.e.withCredentials = this.Ei);
    try {
        Gf(this), 0 < this.ic && (this.kd = y && A(9) && "number" == typeof this.e.timeout && ja(this.e.ontimeout), wf(this.X, Df(this, "Will abort after " + this.ic + "ms if incomplete, xhr2 " + this.kd)), this.kd ? (this.e.timeout = this.ic, this.e.ontimeout = n(this.xb, this)) : this.ed = Pe(this.xb, this.ic, this)), wf(this.X, Df(this, "Sending request")), this.Lc = !0, this.e.send(e), this.Lc = !1
    } catch (u) {
        wf(this.X, Df(this, "Send error: " + u.message)), Ef(this, u)
    }
};
g.xb = function () {
    "undefined" != typeof ca && this.e && (this.Vb = "Timed out after " + this.ic + "ms, aborting", wf(this.X, Df(this, this.Vb)), this.dispatchEvent("timeout"), this.abort(8))
};
g.abort = function () {
    this.e && this.ua && (wf(this.X, Df(this, "Aborting")), this.ua = !1, this.Ma = !0, this.e.abort(), this.Ma = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), If(this))
};
g.f = function () {
    this.e && (this.ua && (this.ua = !1, this.Ma = !0, this.e.abort(), this.Ma = !1), If(this, !0));
    xf.d.f.call(this)
};
g.Gf = function () {
    this.Nd || (this.Zd || this.Lc || this.Ma ? Jf(this) : this.Sh())
};
g.Sh = function () {
    Jf(this)
};
g.getAllResponseHeaders = function () {
    return this.e && 4 == Kf(this) ? this.e.getAllResponseHeaders() : ""
};
Pf.prototype.oi = function (e) {
    var t = bc(e.target, "js-ratings-holder"),
        t = C("js-rating-circle", t);
    s(t, function (e) {
        w(e, "active")
    });
    v(e.target, "active")
};
Pf.prototype.mi = function () {
    var e = new Jd;
    e.add("freeform", this.Jg.value || "");
    var t = !1;
    s(this.ci, function (n) {
        var r = E("js-rating-circle.active", n);
        n.getAttribute("data-type") && (r ? e.add(n.getAttribute("data-type"), r.getAttribute("data-rating")) : (e.add(n.getAttribute("data-type"), 1), t = !0))
    });
    t || (v(this.bi, "-hide"), w(this.ei, "-hide"), Cf("/events/io/schedule/session/" + this.pf + "/rate", function (e) {}, "POST", e.toString()), E("js-details").scrollTop = 0)
};
Qf.prototype.onResize = function () {
    this.If && this.If.refresh()
};
Qf.prototype.$b = function (e) {
    "" === e.fd ? (this.ke && (v(this.o, "-hide"), s(this.Ha, function (e) {
        e.setAttribute("src", "")
    }), s(this.Ha, function (e) {
        e.setAttribute("src", "")
    }), w(this.mb, "-overflow-hidden"), this.ke = !1), this.Mc = !1) : (e = e.fd.split("/"), this.Ec = e = e[e.length - 1], Rf(this, e))
};
Qf.prototype.Ce = function (e) {
    var t = this;
    O(e, "click", function (e) {
        e.preventDefault();
        e.stopPropagation()
    });
    x(e, "-live-streaming") && w(E("js-video", e), "-hide");
    (new Hammer(e)).on("tap", function (n) {
        n.preventDefault();
        n.stopPropagation();
        x(n.target, "js-schedule-pin") || (t.Xb ? (n = e.getAttribute("href"), t.m.Ga(n.split(t.Xb.substr(1))[1])) : (n = e.getAttribute("data-session-id"), t.Ec = n, Rf(t, n)))
    })
};
Qf.prototype.De = function (e) {
    var t = this;
    if (e)(new Hammer(e)).on("tap", function (n) {
        n.preventDefault();
        n.gesture.preventDefault();
        t.k && (t.k.pe ? (s(t.Kf, function (t) {
            t.getAttribute("data-id") === e.getAttribute("data-id") && db(bc(t, "event"), "saved")
        }), n = e.getAttribute("data-id"), db(e, "-saved"), t.k.ag(n)) : Xf(t.k))
    })
};
p(Yf, S);
g = Yf.prototype;
g.$b = function (e) {
    "" !== e.fd ? (this.zb = e.fd, dg(this)) : this.rb && (this.H.j.stopVideo(), this.ob())
};
g.bc = function () {
    "" === this.m.W() && this.m.me(this.zb);
    this.H.j.playVideoAt(0);
    TweenMax.set(this.xe, {
        autoAlpha: 1
    });
    TweenMax.to(this.H.Rb, .3, {
        opacity: 1,
        ease: Expo.easeOut
    })
};
g.ob = function () {
    this.H.Lb = !0;
    "" !== this.m.W() && this.m.me("");
    TweenMax.set(this.xe, {
        autoAlpha: 0
    });
    TweenMax.to(this.H.Rb, .3, {
        opacity: 0,
        ease: Expo.easeOut
    })
};
g.pb = function () {
    if (rc || pc) this.m.Ga(""), this.ob()
};
g.ae = function () {
    var e = document.createElement("script");
    e.src = "//www.youtube.com/iframe_api";
    Xb(e);
    window.onYouTubeIframeAPIReady = n(this.Ba, this)
};
g.Ba = function () {
    this.Bb = !0;
    this.dispatchEvent(new Pc("onYouTubeIframeAPIReady"))
};
var ag = "111395306401981598462",
    bg = "6029456067262589905",
    $f = "js-photo-stream";
Yf.prototype.f = function () {
    Oc(this.qb);
    this.qb = null;
    Yf.d.f.call(this)
};
Yf.prototype.le = function () {
    this.qb.refresh()
};
g = T.prototype;
g.ya = function () {
    return this.va.getData()
};
g.setData = function (e) {
    nd(this.c, e, [], []) || (this.c = e, this.ja())
};
g.show = function () {
    this.md = !0
};
g.i = function () {
    this.md = !1
};
g.ja = aa();
var eg = {
    Si: !0
},
    fg = {
        Ui: !0
    },
    gg = {
        Ti: !0
    };
U.prototype.toString = ba("content");
var jg = {};
y && A(8);
p(kg, U);
kg.prototype.Y = eg;
p(lg, U);
lg.prototype.Y = {
    ii: !0
};
p(mg, U);
mg.prototype.Y = {
    ii: !0
};
p(ng, U);
ng.prototype.Y = fg;
p(og, U);
og.prototype.Y = {
    Ri: !0
};
p(pg, U);
pg.prototype.Y = {
    Qi: !0
};
var V = qg(kg);
qg(lg);
qg(mg);
qg(ng);
qg(og);
qg(pg);
var Ag = {
    "\0": "&#0;",
    '"': "&quot;",
    "&": "&",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "	": "&#9;",
    "\n": "&#10;",
    "": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "": "&#133;",
    " ": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};
var Bg = {
    "\0": "%00",
    "": "%01",
    "": "%02",
    "": "%03",
    "": "%04",
    "": "%05",
    "": "%06",
    "": "%07",
    "\b": "%08",
    "	": "%09",
    "\n": "%0A",
    "": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "": "%0E",
    "": "%0F",
    "": "%10",
    "": "%11",
    "": "%12",
    "": "%13",
    "": "%14",
    "": "%15",
    "": "%16",
    "": "%17",
    "": "%18",
    "": "%19",
    "": "%1A",
    "": "%1B",
    "": "%1C",
    "": "%1D",
    "": "%1E",
    "": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "": "%7F",
    "": "%C2%85",
    " ": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "！": "%EF%BC%81",
    "＃": "%EF%BC%83",
    "＄": "%EF%BC%84",
    "＆": "%EF%BC%86",
    "＇": "%EF%BC%87",
    "（": "%EF%BC%88",
    "）": "%EF%BC%89",
    "＊": "%EF%BC%8A",
    "＋": "%EF%BC%8B",
    "，": "%EF%BC%8C",
    "／": "%EF%BC%8F",
    "：": "%EF%BC%9A",
    "；": "%EF%BC%9B",
    "＝": "%EF%BC%9D",
    "？": "%EF%BC%9F",
    "＠": "%EF%BC%A0",
    "［": "%EF%BC%BB",
    "］": "%EF%BC%BD"
};
var rg = /[\x00\x22\x26\x27\x3c\x3e]/g,
    vg = /[\x00\x22\x27\x3c\x3e]/g,
    wg = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    yg = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    tg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    ug = /</g;
p(Lg, T);
Lg.prototype.ja = function () {
    this.c && this.ga()
};
Lg.prototype.i = function () {
    Q(this.a, "hidden", !0);
    Lg.d.i.call(this)
};
Lg.prototype.show = function () {
    Q(this.a, "hidden", !1);
    Lg.d.show.call(this)
};
Lg.prototype.ga = function () {
    hg(this.Ta, Jg, this.c)
};
g = $.prototype;
g.D = function (e) {
    e && e()
};
g.setData = function (e) {
    this.c = e;
    this.ja()
};
g.ja = aa();
g.ya = function () {
    return this.bd.getData()
};
g.M = function (e, t) {
    this.bd.M(e, t)
};
g.N = function (e, t) {
    this.bd.N(e, t)
};
g.h = function (e, t) {
    this.bd.h(e, t)
};
p(Mg, $);
Mg.prototype.D = function (e) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "before"
    });
    this.N("message", !1);
    Mg.d.D.call(this, e)
};
p(Ng, L);
Ng.prototype.setData = function (e) {
    var t = e && (null === this.c || this.c && this.c.id !== e.key || this.c && this.c.Sa !== e.live_stream_id);
    !t && e || Og(this);
    e ? t ? (this.c = {
        id: e.key,
        A: e.theme,
        $f: e.themeTitle,
        title: e.title,
        Sa: e.live_stream_id
    }, e.speakers && (this.c.I = u(e.speakers, function (e) {
        var t = e.photo;
        t && (t = t.replace(/^http:/, ""));
        return {
            name: e.firstname + " " + e.lastname,
            Jf: t
        }
    }), this.c.ra = u(this.c.I, function (e) {
        return e.name
    }).join(", ")), this.ga(), Pg(this), F(this.U, "opacity", "")) : this.Fd() : (this.c = null, F(this.U, "opacity", 0))
};
Ng.prototype.ga = function () {
    hg(this.U, this.Ta, this.c)
};
Ng.prototype.Fd = aa();
Ng.prototype.qi = function () {
    var e = new Pc("loadSessionDetails", this.c.id),
        t = document.body;
    Ac(t) ? Je(t, "loadSessionDetails", !1, e) : cd(t, "loadSessionDetails", !1, e)
};
p(Qg, T);
Qg.prototype.ja = function () {
    if (this.c) {
        Tg(this);
        if (this.c.u && null !== this.c.u) {
            var e = this.c.u[0].pretty_time;
            ac(this.Lg, e ? e + " PDT" : "")
        }
        this.c.G && null !== this.c.G && (e = this.c.G[0].pretty_time, ac(this.Gh, e ? e + " PDT" : ""));
        setTimeout(n(this.Tg, this), 100)
    }
};
Qg.prototype.Tg = function () {
    this.Cg.refresh();
    this.he.refresh()
};
Qg.prototype.show = function () {
    Q(this.a, "hidden", !1);
    Qg.d.show.call(this)
};
Qg.prototype.i = function () {
    Q(this.a, "hidden", !0);
    Qg.d.i.call(this)
};
p(Wg, T);
Wg.prototype.ja = function () {
    this.c && this.c.da.title && this.ga()
};
Wg.prototype.i = function () {
    Q(this.a, "hidden", !0);
    Wg.d.i.call(this)
};
Wg.prototype.show = function () {
    Q(this.a, "hidden", !1);
    Wg.d.show.call(this)
};
Wg.prototype.ga = function () {
    hg(this.Ta, Ig, {
        title: this.c.da.title,
        time: this.c.be ? " " : this.c.da.pretty_time + " PDT",
        ra: u(this.c.da.speakers, function (e) {
            return e.firstname + " " + e.lastname
        }).join(", ")
    })
};
p(Xg, T);
Xg.prototype.i = function (e) {
    if (e) {
        e = H(this.eb);
        e = e.height;
        var t = H(this.fa),
            t = t.height;
        TweenMax.to(this.fa, .3, {
            y: -t,
            ease: Expo.easeOut,
            delay: 1
        });
        TweenMax.to(this.uc, .5, {
            y: -e,
            ease: Expo.easeOut,
            clearProps: "y",
            delay: 1,
            onComplete: function () {
                TweenMax.set(this.uc, {
                    y: 0
                });
                Q(this.eb, "hidden", !0);
                this.ue && Q(this.fa, "-lighter", !0);
                rc && Q(this.fa, "static", !0)
            },
            onCompleteScope: this
        });
        TweenMax.to(this.fa, .3, {
            y: 0,
            ease: Expo.easeOut,
            delay: 1.5
        })
    } else Q(this.eb, "hidden", !0), this.ue && Q(this.fa, "-lighter", !0), rc && Q(this.fa, "static", !0);
    Xg.d.i.call(this)
};
Xg.prototype.show = function () {
    rc && Q(this.fa, "static", !1);
    Q(this.eb, "hidden", !1);
    this.ue ? Q(this.fa, "-lighter", !1) : (TweenMax.set(this.eb, {
        opacity: 0
    }), setTimeout(n(function () {
        s(sc, ResponsiveImage.update);
        TweenMax.to(this.eb, .2, {
            opacity: 1
        })
    }, this), 50));
    Xg.d.show.call(this)
};
p(Yg, T);
Yg.prototype.ja = function () {
    if (this.c) {
        TweenLite.set(this.Uc, {
            opacity: 0
        });
        if (this.rb) He(this.H, this.c.live_stream_id), this.H.j.playVideo(), this.Tb = !0;
        else {
            var e = n(function () {
                this.Uc = B("video-player");
                this.Tb = this.rb = !0
            }, this),
                t = n(this.pb, this);
            this.H = new Ge(this.c.live_stream_id, e, t);
            this.va.Bb ? this.H.Ba() : this.va.ba("onYouTubeIframeAPIReady", function () {
                this.H.Ba()
            }, !1, this)
        }
        Q(document.body, "video-playing", !0);
        var r = {
            y: Nb(document).y
        };
        TweenLite.to(r, .3, {
            y: 0,
            ease: Expo.easeOut,
            onUpdate: function () {
                window.scrollTo(0, r.y)
            },
            onComplete: function () {
                window.scrollTo(0, 0)
            }
        })
    }
};
Yg.prototype.i = function () {
    this.rb && (this.H.j.setVolume(0), this.H.j.pauseVideo(), this.H.j.stopVideo(), this.Tb = !1, Q(document.body, "video-playing", !1));
    TweenLite.set(this.Uc, {
        opacity: 0
    });
    Q(this.a, "hidden", !0);
    Yg.d.i.call(this)
};
Yg.prototype.show = function () {
    this.rb && !this.Tb && (this.H.j.playVideo(), this.H.j.setVolume(100), this.Tb = !0);
    Q(this.a, "hidden", !1);
    Yg.d.show.call(this)
};
p(Zg, T);
Zg.prototype.ja = function () {
    this.c && (this.yc && Q(this.yc, "hidden", this.c.be), this.je.setData(this.c.da), this.Vc.setData(this.c), this.c.da.title || this.Vc.i())
};
Zg.prototype.i = function (e) {
    this.mf.show(e);
    this.je.i();
    this.Vc.i();
    Zg.d.i.call(this)
};
Zg.prototype.show = function (e) {
    this.mf.i(e);
    this.je.show();
    this.Vc.show();
    Zg.d.show.call(this)
};
p($g, L);
var ah = [];
g = $g.prototype;
g.ba = function (e, t, n, r, i) {
    ka(t) || (ah[0] = t, t = ah);
    for (var s = 0; s < t.length; s++) {
        var o = O(e, t[s], n || this, r || !1, i || this.Wd || this);
        if (!o) break;
        this.n[o.key] = o
    }
    return this
};
g.Oc = function (e, t, n, r, i) {
    if (ka(t)) for (var s = 0; s < t.length; s++) this.Oc(e, t[s], n, r, i);
    else {
        e = Zc(e, t, n || this, r, i || this.Wd || this);
        if (!e) return this;
        this.n[e.key] = e
    }
    return this
};
g.ve = function (e, t, n, r, i) {
    if (ka(t)) for (var s = 0; s < t.length; s++) this.ve(e, t[s], n, r, i);
    else i = i || this.Wd || this, n = Vc(n || this), r = !! r, t = Ac(e) ? e.Ob(t, n, r, i) : e ? (e = ad(e)) ? e.Ob(t, n, r, i) : null : null, t && (bd(t), delete this.n[t.key]);
    return this
};
g.Zc = function () {
    Ja(this.n, bd);
    this.n = {}
};
g.f = function () {
    $g.d.f.call(this);
    this.Zc()
};
g.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented")
};
p(Zf, S);
Zf.prototype.ka = !1;
Zf.prototype.lb = !1;
Zf.prototype.ib = null;
var jh = function (e, t) {
        var n = t || bh;
        return function () {
            var t = this || l,
                t = t.closure_memoize_cache_ || (t.closure_memoize_cache_ = {}),
                r = n(oa(e), arguments);
            return t.hasOwnProperty(r) ? t[r] : t[r] = e.apply(this, arguments)
        }
    }(function () {
        return y ? 8 <= document.documentMode : "onhashchange" in l
    }),
    fh = y && !(y && 8 <= Bb),
    kh = fh;
g = Zf.prototype;
g.kb = null;
g.f = function () {
    Zf.d.f.call(this);
    this.Ka.xa();
    this.Fa(!1)
};
g.Fa = function (e) {
    if (e != this.ka) if (fh && !this.Pd) this.Vf = e;
    else if (e) if (ob ? this.Ka.ba(this.l.document, lh, this.Vh) : pb && this.Ka.ba(this.l, "pageshow", this.Th), jh() && this.Va) this.Ka.ba(this.l, "hashchange", this.Qh), this.ka = !0, this.dispatchEvent(new Ie(this.W()));
    else {
        if (!y || this.Pd) this.Ka.ba(this.t, Oe, n(this.Ya, this, !0)), this.ka = !0, fh || (this.ib = this.W(), this.dispatchEvent(new Ie(this.W()))), this.t.start()
    } else this.ka = !1, this.Ka.Zc(), this.t.stop()
};
g.Ph = function () {
    this.Pd = !0;
    this.Qb.value && ih(this, this.Qb.value, !0);
    this.Fa(this.Vf)
};
g.Th = function (e) {
    e.ab.persisted && (this.Fa(!1), this.Fa(!0))
};
g.Qh = function () {
    var e = mh(this.l);
    e != this.ib && nh(this, e)
};
g.W = function () {
    return null != this.kb ? this.kb : this.Va ? mh(this.l) : oh(this) || ""
};
g.Ga = function (e, t) {
    ph(this, e, !1, t)
};
g.me = function (e, t) {
    ph(this, e, !0, t)
};
g.Ya = function () {
    if (this.Va) {
        var e = mh(this.l);
        e != this.ib && nh(this, e)
    }
    if (!this.Va || fh) if (e = oh(this) || "", null == this.kb || e == this.kb) this.kb = null, e != this.ib && nh(this, e)
};
g.Vh = function () {
    this.t.stop();
    this.t.start()
};
var lh = ["mousedown", "keydown", "mousemove"],
    qh = "<title>%s</title><body>%s</body>",
    gh = '<iframe id="%s" style="display:none" %s></iframe>',
    dh = '<input type="text" name="%s" id="%s" style="display:none">',
    ch = 0,
    eh = 150,
    rh = 1e4;
p(sh, $);
sh.prototype.D = function (e) {
    this.h("live-grid", !1);
    this.h("message", !1);
    this.M("time-slots", {
        focus: "current",
        u: this.ya().ia.u,
        G: this.ya().ia.G,
        nf: !1
    });
    this.N("time-slots", !1);
    this.M("main-player", {
        be: !1,
        da: this.c.da
    });
    this.N("main-player", !1);
    sh.d.D.call(this, e)
};
p(th, $);
th.prototype.D = function (e) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "error"
    });
    this.N("message", !1);
    th.d.D.call(this, e)
};
p(uh, $);
uh.prototype.D = function (e) {
    this.h("time-slots", !1);
    this.h("main-player", !1);
    this.h("live-grid", !1);
    this.M("message", {
        message: "eod-" + this.c.Id
    });
    this.N("message", !1);
    uh.d.D.call(this, e)
};
p(vh, $);
vh.prototype.D = function (e) {
    this.h("live-grid", !1);
    this.h("message", !1);
    this.h("time-slots", !1);
    this.M("main-player", {
        be: !0,
        da: this.c.da
    });
    this.N("main-player", !0);
    vh.d.D.call(this, e)
};
p(zh, L);
g = zh.prototype;
g.f = function () {
    I.off("breakpoint", this.pa);
    clearInterval(this.Ai);
    zh.d.f.call(this)
};
g.hg = function () {
    var e = C("js-relative-time");
    s(e, function (e) {
        var t = e.getAttribute("datetime");
        t && (t = moment(t), ac(e, t.fromNow()))
    })
};
g.wf = function (e) {
    ja(window.gapi) && ja(window.gapi.client) && ja(window.gapi.client.load) ? gapi.client.load("plus", "v1", n(function () {
        gapi.client.setApiKey(this.ph);
        this.lg = !1;
        this.Nf && (this.Nf = !1, e())
    }, this)) : setTimeout(n(this.wf, this, e), 100)
};
g.oa = function () {
    return 768 > window.innerWidth
};
g.pa = function (e) {
    "mobile" === e[0] && (this.ea ? this.ga() : this.refresh())
};
g.Yh = function (e) {
    var t, n, r, i, s = e.actor.displayName,
        o = e.actor.image.url,
        u = e.actor.url,
        a = e.url;
    e.object && e.object.attachments && 0 < e.object.attachments.length && "video" === e.object.attachments[0].objectType && (t = e.object.attachments[0].url);
    var f = e.object.content,
        f = f.replace(/<a\s/g, '<a target="_blank" ');
    "share" === e.verb ? (r = e.annotation, r = r.replace(/<a\s/g, '<a target="_blank" '), i = {
        name: e.object.actor.displayName,
        xd: e.object.actor.image.url,
        Db: e.object.actor.url,
        url: e.object.url,
        qc: t,
        sb: e.published,
        body: f
    }) : (n = t, r = f);
    return {
        url: a,
        Db: u,
        name: s,
        xd: o,
        body: r,
        qc: n,
        sb: e.published,
        S: i
    }
};
g.refresh = function (e) {
    this.lg || Ah(this, n(function (e) {
        this.ea = u(e, function (e) {
            var t = {},
                n;
            for (n in e) t[n] = e[n];
            t.body = V(t.body);
            t.S && (t.S.body = V(t.S.body));
            return t
        });
        this.ga()
    }, this), e)
};
g.ga = function () {
    hg(this.v, Kg, {
        oh: this.ea,
        Di: "https://plus.google.com/" + this.oc + "/posts"
    });
    setTimeout(n(this.hg, this), 50)
};
g = Bh.prototype;
g.ug = function (e) {
    e = new e(this);
    this.gc[e.name] = e
};
g.getData = function () {
    return this.va.getData()
};
g.M = function (e, t) {
    this.va.M(e, t)
};
g.N = function (e, t) {
    this.va.N(e, t)
};
g.h = function (e, t) {
    this.va.h(e, t)
};
p(Dh, $);
Dh.prototype.D = function (e) {
    this.h("main-player", !1);
    this.h("message", !1);
    this.ya().ia.G ? (this.M("time-slots", {
        focus: "next",
        u: this.ya().ia.u,
        G: this.ya().ia.G,
        nf: !0
    }), this.N("time-slots", !1)) : this.h("time-slots", !1);
    this.M("live-grid", {
        u: this.ya().ia.u
    });
    this.N("live-grid", !1);
    Dh.d.D.call(this, e)
};
p(Eh, $);
Eh.prototype.D = function (e) {
    this.h("live-grid", !1);
    this.h("main-player", !1);
    this.h("time-slots", !1);
    this.M("message", {
        message: "pre-keynote"
    });
    this.N("message", !1);
    Eh.d.D.call(this, e)
};
p(Fh, $);
Fh.prototype.D = function (e) {
    this.h("main-player", !1);
    this.h("live-grid", !1);
    this.M("time-slots", {
        focus: "next",
        u: null,
        G: this.ya().ia.G
    });
    this.N("time-slots", !1);
    this.M("message", {
        message: "upcoming"
    });
    this.N("message", !1);
    Fh.d.D.call(this, e)
};
p(Gh, Ng);
Gh.prototype.pa = function (e) {
    var t = e[1];
    "desktop" === e[0] && "enter" === t && Hh() && this.qd && this.ze && Ih(this)
};
Gh.prototype.jg = function (e) {
    this.j.setVolume && this.j.setVolume(0);
    this.j.mute && this.j.mute();
    e.data === YT.PlayerState.PLAYING ? rd(this.U, "playing") : sd(this.U, "playing")
};
Gh.prototype.ga = function () {
    Gh.d.ga.call(this);
    Kh(this)
};
Gh.prototype.Fd = function () {
    Gh.d.Fd.call(this);
    Kh(this)
};
p(Lh, T);
Lh.prototype.show = function () {
    Q(this.a, "hidden", !1);
    s(this.Dd, function (e) {
        Jh(e)
    }, this);
    Lh.d.show.call(this)
};
Lh.prototype.ja = function () {
    this.c && this.c.u && null !== this.c.u && this.render()
};
Lh.prototype.i = function () {
    Q(this.a, "hidden", !0);
    s(this.Dd, function (e) {
        e.c && e.j && e.j.pauseVideo && e.j.pauseVideo()
    }, this);
    Lh.d.i.call(this)
};
Lh.prototype.render = function () {
    s(this.Dd, function (e, t) {
        e.setData(this.c.u[t])
    }, this)
};
p(Mh, S);
var Nh = "js-photo-stream",
    Oh = "js-qa-feed",
    Ph = window.GOOGLE_PLUS_API_KEY;
g = Mh.prototype;
g.M = function (e, t) {
    this.ye[e].setData(t)
};
g.N = function (e, t) {
    var n = this.ye[e];
    n.md || n.show(t)
};
g.h = function (e, t) {
    var n = this.ye[e];
    n.md && n.i(t)
};
g.$b = function () {
    this.c && Qh(this)
};
g.Gc = function () {
    this.qb = new qe(this.Tc, "107150983484568200135", "6025966182952561553");
    this.Mf = new zh(this.ai, "+GoogleDevelopers", Ph);
    TweenMax.to(document.body, .5, {
        opacity: 1
    })
};
g.setData = function (e) {
    this.c = e;
    Qh(this)
};
g.getData = ba("c");
g.refresh = function () {
    this.qb && this.qb.refresh();
    this.Mf && this.Mf.refresh();
    Cf("/events/io/schedule/live/json", n(function (e) {
        if (Mf(e.target)) {
            var t = e.target,
                n = Nf(t);
            console.log("???????1");
            e = Of(t).Date || Of(t).date;
            e = moment(e);
            t = Of(t).Age || Of(t).age || 0;
            (t = parseInt(t, 10)) && e.add(1e3 * t);
            n = Sh(n);
            t = Th(n, e);
            this.setData({
                Ii: n,
                ia: t,
                currentTime: e
            })
        } else this.c || this.setData(null)
    }, this))
};
g.ae = function () {
    var e = document.createElement("script");
    e.src = "//www.youtube.com/iframe_api";
    Xb(e);
    window.onYouTubeIframeAPIReady = n(this.Ba, this)
};
g.Ba = function () {
    this.Bb = !0;
    this.dispatchEvent(new Pc("onYouTubeIframeAPIReady"))
};
p(Wh, L);
Wh.prototype.f = function () {
    Oc(this.vd);
    this.vd = null;
    s(this.li, Oc);
    this.li = null;
    Wh.d.f.call(this)
};
Wh.prototype.le = function () {
    this.vd.refresh()
};
ai.prototype.Je = function () {
    var e = this;
    window.navigator.geolocation.getCurrentPosition(function (t) {
        t = new google.maps.LatLng(t.coords.latitude, t.coords.longitude);
        (new google.maps.Geocoder).geocode({
            location: t
        }, function (t, n) {
            if (n === google.maps.GeocoderStatus.OK) {
                var r = t[0].address_components;
                e.jb = t[0].geometry.location;
                e.sd = bi(r);
                e.new_u = bi_1(r);
                ci(e)
            } else alert("Location not found! Try again?")
        })
    }, function () {
    	var t = document.getElementById("default-location").getAttribute("content");
    	var t1 = t.split(",");
    	if(t1[3].length == 0){
    		e.wh && bd(e.wh)
    	}else{
	    	t = new google.maps.LatLng(t1[3], t1[4]);
	        (new google.maps.Geocoder).geocode({
	            location: t
	        }, function (t, n) {
	            if (n === google.maps.GeocoderStatus.OK) {
	                var r = t[0].address_components;
	                e.jb = t[0].geometry.location;
	                e.sd = bi(r);
	                e.new_u = bi_1(r);
	                ci(e)
	            } else alert("Location not found! Try again?")
	        })
    	}
    })
};
ai.prototype.Ld = function () {
    console.log("displayResults_")
};
p(ei, ai);
ei.prototype.Ld = function (e, t, n, r, i) {
    var s = this;
    (function () {
        s.Dg = E("js-location-name");
        s.Od = E("js-distance");
        s.Vg = E("js-driving");
        s.bh = E("js-flux-capacitor");
        s.uMore1 = E("js-url-more-main");
        s.de1 = E("js-flux-fajr");
        s.de2 = E("js-flux-dhuhr");
        s.de3 = E("js-flux-asr");
        s.de4 = E("js-flux-maghrib");
        s.de5 = E("js-flux-isha");
        s.Dg.innerHTML = s.sd;
        //var test = loadXMLDoc(i.jb.lat() + "," + i.jb.lng());
        s.uMore1.href = "/schedule/@" + i.jb.lat() + "," + i.jb.lng() + "/" + i.new_u;
        s.Od.innerHTML = e + " miles";
        s.de1.innerHTML = r[0];
        s.de2.innerHTML = r[2];
        s.de3.innerHTML = r[3];
        s.de4.innerHTML = r[5];
        s.de5.innerHTML = r[6];
        db(s.zf, "js-active");
        db(s.R, "js-active");
        TweenMax.to(s.a, .5, {
            height: 600,
            ease: Expo.easeOut
        });
        TweenMax.to({
            x: 1
        }, .25, {
            x: 0,
            onComplete: function () {
                var e = s.C.getCenter();
                google.maps.event.trigger(s.C, "resize");
                s.C.panTo(e)
            }
        })
    })()
};

function loadXMLDoc(location)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			console.log(xmlhttp.responseText);
			var txt = document.getElementById("print").href;
			document.getElementById("print").href = txt + "&zone_name=" + JSON.parse(xmlhttp.responseText).timeZoneId; 
			return JSON.parse(xmlhttp.responseText).timeZoneId;
		}
	}
	var url = "https://maps.googleapis___.com/mapsadad/apiasdad/timezoneasda/jsonasdasd?location="+ location +"&timestamp=1331161200";
	xmlhttp.open("GET", url + Math.random(),true);
	xmlhttp.send();
}

p(ii, ai);
ii.prototype.Ld = function (e, t, n, r, i) {
    var s = this,
        o = H(this.td).height,
        u = window.innerHeight || document.documentElement.clientHeight,
        a = parseInt(r[7]),
        f = ["Fajr", "", "Dhuhr", "Asr", "", "Maghrib", "Isha"];
    if (a == -1) {
        this.Od.innerHTML = f[6] + " " + r[6]
    } else {
        this.Od.innerHTML = f[a] + " " + r[a]
    }
    this.uMore.href = "/schedule/@" + i.jb.lat() + "," + i.jb.lng() + "/" + i.new_u;
    TweenMax.to(this.a, .4, {
        height: Math.max(~~ (.75 * u), o),
        onComplete: function () {
            var e = s.C.getCenter();
            google.maps.event.trigger(s.C, "resize");
            s.C.panTo(e);
            ji(s)
        }
    });
    TweenMax.to(this.He, .4, {
        y: .75 * o,
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: function () {
            F(this.He, "display", "none")
        },
        onCompleteScope: this
    });
    TweenMax.to(this.td, .4, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut
    });
    TweenMax.to(this.Ee, .4, {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: .4
    })
};
p(ki, L);
var mi = new Ad;
ki.prototype.f = function () {
    mi.remove(this.L);
    this.a = null;
    s(this.Jb, function (e) {
        e.off("tap")
    });
    this.Jb.length = 0;
    ki.d.f.call(this)
};
ki.prototype.open = function () {
    this.ce = !0;
    v(this.a, "is-active")
};
ki.prototype.close = function () {
    this.ce = !1;
    w(this.a, "is-active")
};
ki.prototype.toggle = function () {
    this.ce ? this.close() : this.open()
};
qi.prototype.Hf = function () {
    var e = 0;
    s(this.ea, function (t) {
        t.style.height = "";
        t = H(t);
        e = Math.max(e, t.height)
    });
    s(this.ea, function (t) {
        F(t, "height", e + "px")
    })
};
qi.prototype.refresh = function () {
    this.ea = C("js-match-item", this.a);
    this.Hf()
};
p(Wf, L);
var Sg = new Ad;
Wf.prototype.refresh = function () {
    this.J = H(this.Oa[this.P]).height;
    this.od = H(this.a).width;
    F(this.a, {
        "min-height": this.J + "px"
    })
};
Wf.prototype.kf = function () {
    var e = this.P + 1 === this.qe ? 0 : this.P + 1;
    this.Ug && 0 === e || ti(this, e, -1)
};
Wf.prototype.gh = function () {
    ti(this, 0 > this.P - 1 ? this.qe - 1 : this.P - 1, 1)
};
xi.prototype.ud = function () {
    s(this.ea, function (e, t) {
        TweenMax.to(e, .1, {
            opacity: 1,
            delay: .3 * t + .05
        }, .3);
        TweenMax.to(e, .6, {
            y: 0,
            delay: .3 * t,
            ease: Expo.easeOut
        })
    })
};
yi.prototype.ta = function (e) {
    if (this.ca) {
        var t = H(this.B).width;
        TweenMax.to(this.B, e ? this.Xe : 0, {
            x: this.Fc * t,
            ease: Expo.easeOut,
            onComplete: function () {
                F(this.B, "display", "none")
            },
            onCompleteScope: this
        })
    } else TweenMax.to(this.B, e ? this.Xe : 0, {
        x: 0,
        ease: Expo.easeOut,
        onStart: function () {
            F(this.B, "display", "block")
        },
        onStartScope: this
    });
    this.ca = !this.ca
};
p(zi, yi);
zi.prototype.ta = function (e, t) {
    t && (this.te = !this.te);
    zi.d.ta.call(this, e);
    if (this.ca && !this.te) Ai(this);
    else {
        F(this.Ra, "position", "");
        window.scrollTo(0, this.Hd);
        TweenMax.set(this.Ra, {
            clearProps: "y"
        });
        TweenMax.set(this.jc, {
            clearProps: "y"
        });
        for (var n = 0, r = this.$a.length; n < r; n++) bd(this.$a[n]);
        this.$a = []
    }
    Q(this.uc, "basement-open", this.ca)
};
Hi.prototype.oe = function () {
    if (!this.sa) {
        this.sa = [];
        var e = C("js-sticky-container"),
            t = this;
        s(e, function (e) {
            var n = C("js-sticky-element", e);
            s(n, function (n) {
                var r = qd(n, "timeslot__label") ? 120 : 0;
                n = morlock.stickyElement(n, e, {
                    marginTop: r
                });
                t.sa.push(n)
            })
        });
        O(window, "resize", n(this.Of, this));
        this.Of()
    }
};
Hi.prototype.Of = function () {
    this.kg && F(this.kg, {
        "min-height": window.innerHeight + "px"
    })
};
p(Mi, L);
g = Mi.prototype;
g.Oe = null;
g.We = null;
g.Ac = function () {
    return this.Oe ? this.Oe() : {}
};
g.Md = function (e) {
    if (this.We) this.We(e);
    else if (na(e)) if (ma(e.xa)) e.xa();
    else for (var t in e) delete e[t]
};
g.f = function () {
    Mi.d.f.call(this);
    for (var e = this.Nb; e.length;) this.Md(e.pop());
    delete this.Nb
};
Oi.prototype.X = mf("goog.debug.Trace");
Qi.prototype.toString = function () {
    var e = [];
    e.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.we && e.push(" [VarAlloc = ", this.we, "]");
    return e.join("")
};
Pi.prototype.toString = function () {
    return null == this.type ? this.Hg : "[" + this.type + "] " + this.Hg
};
Oi.prototype.reset = function () {
    for (var e = 0; e < this.aa.length; e++) {
        var t = this.Rd.id;
        t && Ni(this.Xd, t);
        Ni(this.Rd, this.aa[e])
    }
    this.aa.length = 0;
    this.ge.clear();
    this.Xf = ua();
    this.Me = this.bg = this.cg = this.dg = this.eg = 0;
    t = this.hc.ma();
    for (e = 0; e < t.length; e++) {
        var n = this.hc.get(t[e]);
        n.count = 0;
        n.time = 0;
        n.we = 0;
        Ni(this.Yf, n)
    }
    this.hc.clear()
};
Oi.prototype.toString = function () {
    for (var e = [], t = -1, n = [], r = 0; r < this.aa.length; r++) {
        var i = this.aa[r];
        1 == i.Sd && n.pop();
        e.push(" ", Ri(i, this.Xf, t, n.join("")));
        t = i.Ye;
        e.push("\n");
        0 == i.Sd && n.push("|  ")
    }
    if (0 != this.ge.jf()) {
        var s = ua();
        e.push(" Unstopped timers:\n");
        zd(this.ge, function (t) {
            e.push("  ", t, " (", s - t.startTime, " ms, started at ", Ti(t.startTime), ")\n")
        })
    }
    t = this.hc.ma();
    for (r = 0; r < t.length; r++) n = this.hc.get(t[r]), 1 < n.count && e.push(" TOTAL ", n, "\n");
    e.push("Total tracers created ", this.bg, "\n", "Total comments created ", this.Me, "\n", "Overhead start: ", this.eg, " ms\n", "Overhead end: ", this.dg, " ms\n", "Overhead comment: ", this.cg, " ms\n");
    return e.join("")
};
new Oi;
g = Ui.prototype;
g.pa = function (e) {
    var t = e[0];
    "enter" === e[1] && Vi(this, t)
};
g.vh = function (e, t) {
    var r = B(t);
    r.style.cursor = "pointer";
    (new Hammer(r)).on("tap", n(e, this))
};
g.Wg = function () {
    this.$d = !0;
    this.Mb && this.ud()
};
g.Xg = function () {
    this.$d = !1
};
g.ud = function () {
    this.Mb = !1;
    var e = this.mh / 1e3;
    TweenLite.fromTo(B("phone_1_"), .6, {
        x: -144
    }, {
        x: 0,
        ease: Expo.easeOut,
        delay: e
    });
    TweenLite.fromTo(B("tablet_1_"), .6, {
        x: 144
    }, {
        x: 0,
        ease: Expo.easeOut,
        delay: e
    });
    TweenLite.fromTo(B("p-cta"), .4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: e + 1
    });
    TweenLite.fromTo(B("c-cta"), .4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: e + 1.1
    });
    TweenLite.fromTo(B("t-cta"), .4, {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: e + 1.2
    });
    TweenLite.fromTo(B("watch_1_"), .8, {
        y: 150
    }, {
        y: 0,
        ease: Elastic.easeOut.config(1, .75),
        delay: e + 1.8,
        onComplete: function () {
            this.Gc = !0
        },
        onCompleteScope: this
    })
};
g.fg = function () {
    this.$d && this.Gc && (this.uf++, s(this.kh, function (e, t) {
        0 === this.uf % (e.icons.length - 1) && TweenLite.set(e.icons, {
            x: 0,
            y: 0
        });
        TweenLite.to(e.icons, this.ri / 1e3, {
            x: "p" === e.type ? "-=0" : "-=32",
            y: "p" !== e.type ? "-=0" : "-=32",
            delay: this.ti / 1e3 * t,
            ease: Expo.easeInOut
        })
    }, this))
};
g.dh = function () {
    "computer" === this.La ? Wi(this) : (this.La = "computer", this.zc.setAttribute("display", "true"), this.nd.setAttribute("display", "none"), this.Sc.setAttribute("display", "none"), this.dd.setAttribute("display", "none"), TweenLite.to(B("phone_1_"), .6, {
        x: -20,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), .6, {
        x: -60,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), .6, {
        x: 100,
        ease: Expo.easeOut
    }))
};
g.eh = function () {
    "tablet" === this.La ? Wi(this) : (this.La = "tablet", this.zc.setAttribute("display", "none"), this.nd.setAttribute("display", "none"), this.Sc.setAttribute("display", "none"), this.dd.setAttribute("display", "true"), TweenLite.to(B("phone_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), .6, {
        x: -50,
        ease: Expo.easeOut
    }))
};
g.ef = function () {
    "phone_watch" === this.La ? Wi(this) : (this.La = "phone_watch", this.zc.setAttribute("display", "none"), this.nd.setAttribute("display", "true"), this.Sc.setAttribute("display", "true"), this.dd.setAttribute("display", "none"), TweenLite.to(B("phone_1_"), .6, {
        x: 60,
        ease: Expo.easeOut
    }), TweenLite.to(B("watch_1_"), .6, {
        x: 80,
        ease: Expo.easeOut
    }), TweenLite.to(B("tablet_1_"), .6, {
        x: 0,
        ease: Expo.easeOut
    }))
};
Yi.prototype.refresh = function () {
    this.gb.length = 0;
    var e = C("js-lazy-load");
    this.gb = Qa(e, function (e, t) {
        qd(t, "loaded") || e.push(t);
        return e
    }, []);
    Zi(this)
};
Ii.prototype.ag = function (e) {
    if (this.k) {
        var t = Oa(Tf(this.k), e); - 1 === t ? Tf(this.k).push(e) : Ya(Tf(this.k), t, 1);
        cj(this)
    }
};
Ii.prototype.tg = function (e) {
    (new Hammer(e)).on("tap", n(this.Uf, this, e))
};
Ii.prototype.Uf = function (e) {
    var t = C("js-filter", $b(e));
    v(this.cb, "-hide");
    s(t, function (t) {
        e !== t ? w(t, "selected") : db(t, "selected")
    });
    cj(this)
};
Ii.prototype.refresh = function () {
    qc.fi && (Sf(qc), qc.xc())
};
gj.prototype.qg = function (e) {
    if (this.Td) {
        var t = gapi.auth.getToken().access_token,
            n = new XMLHttpRequest;
        n.open("GET", this.Td);
        n.setRequestHeader("Authorization", "Bearer " + t);
        n.onload = function (t) {
            var n = null;
            try {
                n = JSON.parse(t.target.responseText)
            } catch (r) {
                n = {
                    error: "Could not parse JSON. " + r
                }
            }
            e(n, {
                response: t.target.response,
                responseType: t.target.responseType,
                status: t.target.status,
                statusText: t.target.statusText
            })
        };
        n.onerror = function (t) {
            e(null, t)
        };
        n.send()
    } else e(null)
};
gj.prototype.rg = function (e, t) {
    if (null == e) this.Ae && console.log("obj is null. Ignoring");
    else {
        boundary = "-------314159265358979323846";
        delimiter = "\r\n--" + boundary + "\r\n";
        close_delim = "\r\n--" + boundary + "--";
        var n = null != this.Ud,
            r;
        r = n ? {} : {
            title: this.filename,
            mimeType: "application/json",
            parents: [{
                id: "appdata"
            }]
        };
        var i = btoa(JSON.stringify(e));
        r = delimiter + "Content-Type: application/json\r\n\r\n" + JSON.stringify(r) + delimiter + "Content-Type: application/json\r\nContent-Transfer-Encoding: base64\r\n\r\n" + i + close_delim;
        gapi.client.request({
            path: "/upload/drive/v2/files" + (n ? "/" + this.Ud : ""),
            method: n ? "PUT" : "POST",
            params: {
                uploadType: "multipart"
            },
            headers: {
                "Content-Type": 'multipart/mixed; boundary="' + boundary + '"'
            },
            body: r
        }).execute(function (n) {
            mj(this, n);
            try {
                var r;
                e: {
                    if (null != e && "object" == typeof e && "starred_sessions" in e && Array.isArray(e.starred_sessions)) for (var i = 0; i < e.starred_sessions.length; i++) {
                        var s = e.starred_sessions[i];
                        if (null != s && 0 === s.indexOf("GCM:")) {
                            r = s.substr(4);
                            break e
                        }
                    }
                    r = null
                }
                if (null != r) {
                    var o = new XMLHttpRequest;
                    o.open("POST", this.ng);
                    o.setRequestHeader("Authorization", "key=" + r);
                    o.send("{'sync_jitter': 100}")
                }
            } catch (u) {
                console.log("Could not notify other devices.")
            }
            t(n)
        }.bind(this))
    }
};
nj.prototype.hh = function () {
    var e = this;
    oj(function () {
        Xf(e, !0)
    })
};
nj.prototype.getData = function () {
    window.starredSessionsAPIOnload = n(this.hh, this);
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.async = !0;
    e.src = "https://apis.google.com/js/client.js?onload=starredSessionsAPIOnload";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
};
nj.prototype.ag = function (e) {
    if (Tf(this)) {
        var t = Oa(Tf(this), e); - 1 === t ? Tf(this).push(e) : Tf(this).splice(t, 1);
        qj(this, this.fc)
    }
};
p(rj, L);
rj.prototype.f = function () {
    this.Ia = this.cd = null;
    this.Nh();
    rj.d.f.call(this)
};
rj.prototype.i = function () {
    w(this.cd, "tab-is-active");
    w(this.O, "tab-is-active");
    TweenLite.set(this.O, {
        autoAlpha: 0
    })
};
rj.prototype.show = function (e) {
    sj(this.Ia, H(this.O).height);
    v(this.cd, "tab-is-active");
    v(this.O, "tab-is-active");
    var t;
    t = "undefined" === typeof e || !1 === e;
    this.Dc || t ? (TweenLite.set(this.O, {
        autoAlpha: 1,
        x: 0
    }), this.Dc && !t && (e = this.Yd < e, t = .1, ab.contains(this.Ia.a, "js-delay-fast") && (t = .05), ab.contains(this.Ia.a, "js-delay-slow") && (t = .25), tj(this, e, t))) : (TweenLite.set(this.O, {
        autoAlpha: 1
    }), TweenLite.fromTo(this.O, this.si, {
        x: e > this.Yd ? -100 : 100
    }, {
        x: 0,
        ease: Expo.easeOut
    }));
    e = C("js-tab-lazy-load", this.B);
    s(e, function (e) {
        e.src || (e.src = P(e, "src"))
    })
};
p(uj, L);
var wj = new Ad;
uj.prototype.f = function () {
    wj.remove(this.L);
    this.B = this.a = null;
    I.off("breakpoint", this.Bd);
    oc.off("resize", this.Pf);
    s(this.$, function (e) {
        e.xa()
    });
    this.$ = null;
    uj.d.f.call(this)
};
uj.prototype.setActive = function (e) {
    e !== this.Xa && ("undefined" !== typeof this.Xa && this.$[this.Xa] && this.$[this.Xa].i(), "undefined" !== typeof e && this.$[e] && this.$[e].show(this.pi && this.Xa), this.Xa = e, this.Bg())
};
uj.prototype.gi = function (e, t) {
    var n = H(this.$[this.Xa].O).height;
    if (t) {
        var r = e[1] - t;
        n < r && (n = r)
    }
    sj(this, n)
};
yj.prototype.xc = function () {
    this.Qe && (0 > kc(this.Qe[1]).y - window.scrollY - 80 ? (w(this.$[0], "tab-is-active"), v(this.$[1], "tab-is-active")) : (v(this.$[0], "tab-is-active"), w(this.$[1], "tab-is-active")))
};
yj.prototype.oe = function () {
    if (!this.sa) {
        this.sa = [];
        if (768 <= window.innerWidth) {
            var e = C("js-sticky-container"),
                t = this;
            s(e, function (e) {
                var n = C("js-sticky-element", e);
                s(n, function (n) {
                    var r = qd(n, "timeslot__label") ? 120 : 0;
                    n = morlock.stickyElement(n, e, {
                        marginTop: r
                    });
                    t.sa.push(n)
                })
            })
        }
        var e = pe(".schedule__col.-left")[0],
            n = pe(".schedule__days-wrapper", e)[0],
            e = morlock.stickyElement(n, e, {
                positionType: "fixed"
            });
        this.sa.push(e)
    }
};
da("io.init", function (e) {
    K = !(Modernizr.inlinesvg && Modernizr.csstransforms && "ArrayBuffer" in window);
    ld();
    zj();
    if (navigator.userAgent.match(/MSIE 8\./)) v(document.body, "ie8"), Aj(e);
    else {
        var t = navigator.userAgent.toLowerCase();
        rc = t.match(/ipad|iphone|mobile/) || [];
        rc = 0 < rc.length;
        pc = t.match(/android|ipad|iphone|mobile|tablet/) || [];
        pc = 0 < pc.length;
        oc = new ResizeController({
            throttleMs: 100
        });
        I = new BreakpointController({
            breakpoints: {
                mobile: {
                    max: 767
                },
                desktop: {
                    min: 768,
                    max: 1440
                },
                "x-large": {
                    min: 1441
                }
            }
        });
        t = C("js-card-intro");
        s(t, function (e) {
            new xi(e)
        });
        t = C("js-match-max");
        s(t, Rg);
        new Yi;
        new zi(E("js-basement"), .6, !1);
        sc = [];
        wc = vc = !1;
        I.on("breakpoint", function (e) {
            var t = e[0];
            e = e[1];
            "mobile" !== t || "enter" !== e || vc || (Bj("js-responsive-image-mobile"), vc = !0);
            ("desktop" !== t && "x-large" !== t || "enter" !== e) && ("mobile" !== t || "exit" !== e) || wc || (Bj("js-responsive-image"), wc = !0);
            for (t = 0; t < sc.length; t++) ResponsiveImage.update(sc[t])
        });
        "schedule" !== e && (t = C("js-paging"), s(t, function (e) {
            var t = P(e, "hasResponsiveImages") ?
            function (e) {
                e = C("js-lazy-init", e);
                s(e, function (e) {
                    e && !x(e, "loaded") && (e = ResponsiveImage.createFromElement(e), sc.push(e), ResponsiveImage.update(e))
                })
            } : aa();
            new Wf(e, [], !1, t)
        }));
        Aj(e);
        pi();
        O(window, "load", function () {
            void 0 !== window.gapi && window.gapi.plusone.go()
        }, !1)
    }
});