(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();
var Mu = {
        exports: {}
    },
    gi = {},
    Du = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element"),
    df = Symbol.for("react.portal"),
    pf = Symbol.for("react.fragment"),
    hf = Symbol.for("react.strict_mode"),
    mf = Symbol.for("react.profiler"),
    yf = Symbol.for("react.provider"),
    gf = Symbol.for("react.context"),
    vf = Symbol.for("react.forward_ref"),
    wf = Symbol.for("react.suspense"),
    xf = Symbol.for("react.memo"),
    kf = Symbol.for("react.lazy"),
    gl = Symbol.iterator;

function Sf(e) {
    return e === null || typeof e != "object" ? null : (e = gl && e[gl] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Iu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Bu = Object.assign,
    Fu = {};

function pn(e, t, n) {
    this.props = e, this.context = t, this.refs = Fu, this.updater = n || Iu
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
pn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Uu() {}
Uu.prototype = pn.prototype;

function go(e, t, n) {
    this.props = e, this.context = t, this.refs = Fu, this.updater = n || Iu
}
var vo = go.prototype = new Uu;
vo.constructor = go;
Bu(vo, pn.prototype);
vo.isPureReactComponent = !0;
var vl = Array.isArray,
    $u = Object.prototype.hasOwnProperty,
    wo = {
        current: null
    },
    Vu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Hu(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) $u.call(t, r) && !Vu.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: sr,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: wo.current
    }
}

function _f(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function xo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr
}

function Ef(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var wl = /\/+/g;

function Bi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ef("" + e.key) : t.toString(36)
}

function Lr(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case sr:
                case df:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + Bi(o, 0) : r, vl(i) ? (n = "", e != null && (n = e.replace(wl, "$&/") + "/"), Lr(i, t, n, "", function(c) {
        return c
    })) : i != null && (xo(i) && (i = _f(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(wl, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", vl(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var u = r + Bi(s, l);
            o += Lr(s, t, n, u, i)
        } else if (u = Sf(e), typeof u == "function")
            for (e = u.call(e), l = 0; !(s = e.next()).done;) s = s.value, u = r + Bi(s, l++), o += Lr(s, t, n, u, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function dr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Lr(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function Nf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ce = {
        current: null
    },
    Or = {
        transition: null
    },
    Cf = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: Or,
        ReactCurrentOwner: wo
    };

function Wu() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: dr,
    forEach: function(e, t, n) {
        dr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return dr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return dr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!xo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = pn;
R.Fragment = pf;
R.Profiler = mf;
R.PureComponent = go;
R.StrictMode = hf;
R.Suspense = wf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf;
R.act = Wu;
R.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Bu({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = wo.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (u in t) $u.call(t, u) && !Vu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: sr,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
R.createContext = function(e) {
    return e = {
        $$typeof: gf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: yf,
        _context: e
    }, e.Consumer = e
};
R.createElement = Hu;
R.createFactory = function(e) {
    var t = Hu.bind(null, e);
    return t.type = e, t
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(e) {
    return {
        $$typeof: vf,
        render: e
    }
};
R.isValidElement = xo;
R.lazy = function(e) {
    return {
        $$typeof: kf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Nf
    }
};
R.memo = function(e, t) {
    return {
        $$typeof: xf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function(e) {
    var t = Or.transition;
    Or.transition = {};
    try {
        e()
    } finally {
        Or.transition = t
    }
};
R.unstable_act = Wu;
R.useCallback = function(e, t) {
    return ce.current.useCallback(e, t)
};
R.useContext = function(e) {
    return ce.current.useContext(e)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(e) {
    return ce.current.useDeferredValue(e)
};
R.useEffect = function(e, t) {
    return ce.current.useEffect(e, t)
};
R.useId = function() {
    return ce.current.useId()
};
R.useImperativeHandle = function(e, t, n) {
    return ce.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function(e, t) {
    return ce.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function(e, t) {
    return ce.current.useLayoutEffect(e, t)
};
R.useMemo = function(e, t) {
    return ce.current.useMemo(e, t)
};
R.useReducer = function(e, t, n) {
    return ce.current.useReducer(e, t, n)
};
R.useRef = function(e) {
    return ce.current.useRef(e)
};
R.useState = function(e) {
    return ce.current.useState(e)
};
R.useSyncExternalStore = function(e, t, n) {
    return ce.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function() {
    return ce.current.useTransition()
};
R.version = "18.3.1";
Du.exports = R;
var q = Du.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tf = q,
    Pf = Symbol.for("react.element"),
    jf = Symbol.for("react.fragment"),
    Rf = Object.prototype.hasOwnProperty,
    Lf = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Of = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Qu(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Rf.call(t, r) && !Of.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Pf,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Lf.current
    }
}
gi.Fragment = jf;
gi.jsx = Qu;
gi.jsxs = Qu;
Mu.exports = gi;
var f = Mu.exports,
    Ku = {
        exports: {}
    },
    Se = {},
    qu = {
        exports: {}
    },
    Yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var j = E.length;
        E.push(P);
        e: for (; 0 < j;) {
            var Q = j - 1 >>> 1,
                Z = E[Q];
            if (0 < i(Z, P)) E[Q] = P, E[j] = Z, j = Q;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var P = E[0],
            j = E.pop();
        if (j !== P) {
            E[0] = j;
            e: for (var Q = 0, Z = E.length, cr = Z >>> 1; Q < cr;) {
                var Et = 2 * (Q + 1) - 1,
                    Ii = E[Et],
                    Nt = Et + 1,
                    fr = E[Nt];
                if (0 > i(Ii, j)) Nt < Z && 0 > i(fr, Ii) ? (E[Q] = fr, E[Nt] = j, Q = Nt) : (E[Q] = Ii, E[Et] = j, Q = Et);
                else if (Nt < Z && 0 > i(fr, j)) E[Q] = fr, E[Nt] = j, Q = Nt;
                else break e
            }
        }
        return P
    }

    function i(E, P) {
        var j = E.sortIndex - P.sortIndex;
        return j !== 0 ? j : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var u = [],
        c = [],
        m = 1,
        y = null,
        h = 3,
        w = !1,
        x = !1,
        k = !1,
        B = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(E) {
        for (var P = n(c); P !== null;) {
            if (P.callback === null) r(c);
            else if (P.startTime <= E) r(c), P.sortIndex = P.expirationTime, t(u, P);
            else break;
            P = n(c)
        }
    }

    function g(E) {
        if (k = !1, p(E), !x)
            if (n(u) !== null) x = !0, Mi(_);
            else {
                var P = n(c);
                P !== null && Di(g, P.startTime - E)
            }
    }

    function _(E, P) {
        x = !1, k && (k = !1, d(T), T = -1), w = !0;
        var j = h;
        try {
            for (p(P), y = n(u); y !== null && (!(y.expirationTime > P) || E && !Le());) {
                var Q = y.callback;
                if (typeof Q == "function") {
                    y.callback = null, h = y.priorityLevel;
                    var Z = Q(y.expirationTime <= P);
                    P = e.unstable_now(), typeof Z == "function" ? y.callback = Z : y === n(u) && r(u), p(P)
                } else r(u);
                y = n(u)
            }
            if (y !== null) var cr = !0;
            else {
                var Et = n(c);
                Et !== null && Di(g, Et.startTime - P), cr = !1
            }
            return cr
        } finally {
            y = null, h = j, w = !1
        }
    }
    var N = !1,
        C = null,
        T = -1,
        W = 5,
        L = -1;

    function Le() {
        return !(e.unstable_now() - L < W)
    }

    function gn() {
        if (C !== null) {
            var E = e.unstable_now();
            L = E;
            var P = !0;
            try {
                P = C(!0, E)
            } finally {
                P ? vn() : (N = !1, C = null)
            }
        } else N = !1
    }
    var vn;
    if (typeof a == "function") vn = function() {
        a(gn)
    };
    else if (typeof MessageChannel < "u") {
        var yl = new MessageChannel,
            ff = yl.port2;
        yl.port1.onmessage = gn, vn = function() {
            ff.postMessage(null)
        }
    } else vn = function() {
        B(gn, 0)
    };

    function Mi(E) {
        C = E, N || (N = !0, vn())
    }

    function Di(E, P) {
        T = B(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        x || w || (x = !0, Mi(_))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(E) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = h
        }
        var j = h;
        h = P;
        try {
            return E()
        } finally {
            h = j
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, P) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var j = h;
        h = E;
        try {
            return P()
        } finally {
            h = j
        }
    }, e.unstable_scheduleCallback = function(E, P, j) {
        var Q = e.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? Q + j : Q) : j = Q, E) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = j + Z, E = {
            id: m++,
            callback: P,
            priorityLevel: E,
            startTime: j,
            expirationTime: Z,
            sortIndex: -1
        }, j > Q ? (E.sortIndex = j, t(c, E), n(u) === null && E === n(c) && (k ? (d(T), T = -1) : k = !0, Di(g, j - Q))) : (E.sortIndex = Z, t(u, E), x || w || (x = !0, Mi(_))), E
    }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(E) {
        var P = h;
        return function() {
            var j = h;
            h = P;
            try {
                return E.apply(this, arguments)
            } finally {
                h = j
            }
        }
    }
})(Yu);
qu.exports = Yu;
var Af = qu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf = q,
    ke = Af;

function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Xu = new Set,
    Vn = {};

function Bt(e, t) {
    on(e, t), on(e + "Capture", t)
}

function on(e, t) {
    for (Vn[e] = t, e = 0; e < t.length; e++) Xu.add(t[e])
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ys = Object.prototype.hasOwnProperty,
    Mf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    xl = {},
    kl = {};

function Df(e) {
    return ys.call(kl, e) ? !0 : ys.call(xl, e) ? !1 : Mf.test(e) ? kl[e] = !0 : (xl[e] = !0, !1)
}

function If(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Bf(e, t, n, r) {
    if (t === null || typeof t > "u" || If(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function fe(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    re[t] = new fe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    re[e] = new fe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    re[e] = new fe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    re[e] = new fe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    re[e] = new fe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ko = /[\-:]([a-z])/g;

function So(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ko, So);
    re[t] = new fe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ko, So);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ko, So);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
re.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function _o(e, t, n, r) {
    var i = re.hasOwnProperty(t) ? re[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bf(t, n, i, r) && (n = null), r || i === null ? Df(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var nt = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    pr = Symbol.for("react.element"),
    $t = Symbol.for("react.portal"),
    Vt = Symbol.for("react.fragment"),
    Eo = Symbol.for("react.strict_mode"),
    gs = Symbol.for("react.profiler"),
    Gu = Symbol.for("react.provider"),
    Ju = Symbol.for("react.context"),
    No = Symbol.for("react.forward_ref"),
    vs = Symbol.for("react.suspense"),
    ws = Symbol.for("react.suspense_list"),
    Co = Symbol.for("react.memo"),
    it = Symbol.for("react.lazy"),
    Zu = Symbol.for("react.offscreen"),
    Sl = Symbol.iterator;

function wn(e) {
    return e === null || typeof e != "object" ? null : (e = Sl && e[Sl] || e["@@iterator"], typeof e == "function" ? e : null)
}
var V = Object.assign,
    Fi;

function Pn(e) {
    if (Fi === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Fi = t && t[1] || ""
    }
    return `
` + Fi + e
}
var Ui = !1;

function $i(e, t) {
    if (!e || Ui) return "";
    Ui = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];) l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--, l--, 0 > l || i[o] !== s[l]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Ui = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Pn(e) : ""
}

function Ff(e) {
    switch (e.tag) {
        case 5:
            return Pn(e.type);
        case 16:
            return Pn("Lazy");
        case 13:
            return Pn("Suspense");
        case 19:
            return Pn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = $i(e.type, !1), e;
        case 11:
            return e = $i(e.type.render, !1), e;
        case 1:
            return e = $i(e.type, !0), e;
        default:
            return ""
    }
}

function xs(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Vt:
            return "Fragment";
        case $t:
            return "Portal";
        case gs:
            return "Profiler";
        case Eo:
            return "StrictMode";
        case vs:
            return "Suspense";
        case ws:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ju:
            return (e.displayName || "Context") + ".Consumer";
        case Gu:
            return (e._context.displayName || "Context") + ".Provider";
        case No:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Co:
            return t = e.displayName || null, t !== null ? t : xs(e.type) || "Memo";
        case it:
            t = e._payload, e = e._init;
            try {
                return xs(e(t))
            } catch {}
    }
    return null
}

function Uf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return xs(t);
        case 8:
            return t === Eo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function wt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function bu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function $f(e) {
    var t = bu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function hr(e) {
    e._valueTracker || (e._valueTracker = $f(e))
}

function ea(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = bu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function qr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ks(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function _l(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = wt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ta(e, t) {
    t = t.checked, t != null && _o(e, "checked", t, !1)
}

function Ss(e, t) {
    ta(e, t);
    var n = wt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? _s(e, t.type, n) : t.hasOwnProperty("defaultValue") && _s(e, t.type, wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function El(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function _s(e, t, n) {
    (t !== "number" || qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jn = Array.isArray;

function bt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + wt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Es(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Nl(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(v(92));
            if (jn(n)) {
                if (1 < n.length) throw Error(v(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: wt(n)
    }
}

function na(e, t) {
    var n = wt(t.value),
        r = wt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Cl(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ra(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ns(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ra(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var mr, ia = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (mr = mr || document.createElement("div"), mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Hn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var An = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Vf = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function(e) {
    Vf.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), An[t] = An[e]
    })
});

function sa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || An.hasOwnProperty(e) && An[e] ? ("" + t).trim() : t + "px"
}

function oa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = sa(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Hf = V({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Cs(e, t) {
    if (t) {
        if (Hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(v(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(v(62))
    }
}

function Ts(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Ps = null;

function To(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var js = null,
    en = null,
    tn = null;

function Tl(e) {
    if (e = ur(e)) {
        if (typeof js != "function") throw Error(v(280));
        var t = e.stateNode;
        t && (t = Si(t), js(e.stateNode, e.type, t))
    }
}

function la(e) {
    en ? tn ? tn.push(e) : tn = [e] : en = e
}

function ua() {
    if (en) {
        var e = en,
            t = tn;
        if (tn = en = null, Tl(e), t)
            for (e = 0; e < t.length; e++) Tl(t[e])
    }
}

function aa(e, t) {
    return e(t)
}

function ca() {}
var Vi = !1;

function fa(e, t, n) {
    if (Vi) return e(t, n);
    Vi = !0;
    try {
        return aa(e, t, n)
    } finally {
        Vi = !1, (en !== null || tn !== null) && (ca(), ua())
    }
}

function Wn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Si(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(v(231, t, typeof n));
    return n
}
var Rs = !1;
if (Ze) try {
    var xn = {};
    Object.defineProperty(xn, "passive", {
        get: function() {
            Rs = !0
        }
    }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn)
} catch {
    Rs = !1
}

function Wf(e, t, n, r, i, s, o, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (m) {
        this.onError(m)
    }
}
var zn = !1,
    Yr = null,
    Xr = !1,
    Ls = null,
    Qf = {
        onError: function(e) {
            zn = !0, Yr = e
        }
    };

function Kf(e, t, n, r, i, s, o, l, u) {
    zn = !1, Yr = null, Wf.apply(Qf, arguments)
}

function qf(e, t, n, r, i, s, o, l, u) {
    if (Kf.apply(this, arguments), zn) {
        if (zn) {
            var c = Yr;
            zn = !1, Yr = null
        } else throw Error(v(198));
        Xr || (Xr = !0, Ls = c)
    }
}

function Ft(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function da(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Pl(e) {
    if (Ft(e) !== e) throw Error(v(188))
}

function Yf(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ft(e), t === null) throw Error(v(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return Pl(i), e;
                if (s === r) return Pl(i), t;
                s = s.sibling
            }
            throw Error(v(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (l === r) {
                    o = !0, r = i, n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (l === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o) throw Error(v(189))
            }
        }
        if (n.alternate !== r) throw Error(v(190))
    }
    if (n.tag !== 3) throw Error(v(188));
    return n.stateNode.current === n ? e : t
}

function pa(e) {
    return e = Yf(e), e !== null ? ha(e) : null
}

function ha(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = ha(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var ma = ke.unstable_scheduleCallback,
    jl = ke.unstable_cancelCallback,
    Xf = ke.unstable_shouldYield,
    Gf = ke.unstable_requestPaint,
    K = ke.unstable_now,
    Jf = ke.unstable_getCurrentPriorityLevel,
    Po = ke.unstable_ImmediatePriority,
    ya = ke.unstable_UserBlockingPriority,
    Gr = ke.unstable_NormalPriority,
    Zf = ke.unstable_LowPriority,
    ga = ke.unstable_IdlePriority,
    vi = null,
    He = null;

function bf(e) {
    if (He && typeof He.onCommitFiberRoot == "function") try {
        He.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : nd,
    ed = Math.log,
    td = Math.LN2;

function nd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ed(e) / td | 0) | 0
}
var yr = 64,
    gr = 4194304;

function Rn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Rn(l) : (s &= o, s !== 0 && (r = Rn(s)))
    } else o = n & ~i, o !== 0 ? r = Rn(o) : s !== 0 && (r = Rn(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ie(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function rd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function id(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - Ie(s),
            l = 1 << o,
            u = i[o];
        u === -1 ? (!(l & n) || l & r) && (i[o] = rd(l, t)) : u <= t && (e.expiredLanes |= l), s &= ~l
    }
}

function Os(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function va() {
    var e = yr;
    return yr <<= 1, !(yr & 4194240) && (yr = 64), e
}

function Hi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function or(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n
}

function sd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Ie(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function jo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ie(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var z = 0;

function wa(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var xa, Ro, ka, Sa, _a, As = !1,
    vr = [],
    ct = null,
    ft = null,
    dt = null,
    Qn = new Map,
    Kn = new Map,
    ot = [],
    od = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Rl(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            ct = null;
            break;
        case "dragenter":
        case "dragleave":
            ft = null;
            break;
        case "mouseover":
        case "mouseout":
            dt = null;
            break;
        case "pointerover":
        case "pointerout":
            Qn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Kn.delete(t.pointerId)
    }
}

function kn(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = ur(t), t !== null && Ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function ld(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return ct = kn(ct, e, t, n, r, i), !0;
        case "dragenter":
            return ft = kn(ft, e, t, n, r, i), !0;
        case "mouseover":
            return dt = kn(dt, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Qn.set(s, kn(Qn.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, Kn.set(s, kn(Kn.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Ea(e) {
    var t = Pt(e.target);
    if (t !== null) {
        var n = Ft(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = da(n), t !== null) {
                    e.blockedOn = t, _a(e.priority, function() {
                        ka(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ps = r, n.target.dispatchEvent(r), Ps = null
        } else return t = ur(n), t !== null && Ro(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Ll(e, t, n) {
    Ar(e) && n.delete(t)
}

function ud() {
    As = !1, ct !== null && Ar(ct) && (ct = null), ft !== null && Ar(ft) && (ft = null), dt !== null && Ar(dt) && (dt = null), Qn.forEach(Ll), Kn.forEach(Ll)
}

function Sn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, As || (As = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, ud)))
}

function qn(e) {
    function t(i) {
        return Sn(i, e)
    }
    if (0 < vr.length) {
        Sn(vr[0], e);
        for (var n = 1; n < vr.length; n++) {
            var r = vr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ct !== null && Sn(ct, e), ft !== null && Sn(ft, e), dt !== null && Sn(dt, e), Qn.forEach(t), Kn.forEach(t), n = 0; n < ot.length; n++) r = ot[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ot.length && (n = ot[0], n.blockedOn === null);) Ea(n), n.blockedOn === null && ot.shift()
}
var nn = nt.ReactCurrentBatchConfig,
    Zr = !0;

function ad(e, t, n, r) {
    var i = z,
        s = nn.transition;
    nn.transition = null;
    try {
        z = 1, Lo(e, t, n, r)
    } finally {
        z = i, nn.transition = s
    }
}

function cd(e, t, n, r) {
    var i = z,
        s = nn.transition;
    nn.transition = null;
    try {
        z = 4, Lo(e, t, n, r)
    } finally {
        z = i, nn.transition = s
    }
}

function Lo(e, t, n, r) {
    if (Zr) {
        var i = zs(e, t, n, r);
        if (i === null) bi(e, t, r, br, n), Rl(e, r);
        else if (ld(i, e, t, n, r)) r.stopPropagation();
        else if (Rl(e, r), t & 4 && -1 < od.indexOf(e)) {
            for (; i !== null;) {
                var s = ur(i);
                if (s !== null && xa(s), s = zs(e, t, n, r), s === null && bi(e, t, r, br, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else bi(e, t, r, null, n)
    }
}
var br = null;

function zs(e, t, n, r) {
    if (br = null, e = To(r), e = Pt(e), e !== null)
        if (t = Ft(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = da(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return br = e, null
}

function Na(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Jf()) {
                case Po:
                    return 1;
                case ya:
                    return 4;
                case Gr:
                case Zf:
                    return 16;
                case ga:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var ut = null,
    Oo = null,
    zr = null;

function Ca() {
    if (zr) return zr;
    var e, t = Oo,
        n = t.length,
        r, i = "value" in ut ? ut.value : ut.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return zr = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Mr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function wr() {
    return !0
}

function Ol() {
    return !1
}

function _e(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wr : Ol, this.isPropagationStopped = Ol, this
    }
    return V(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wr)
        },
        persist: function() {},
        isPersistent: wr
    }), t
}
var hn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Ao = _e(hn),
    lr = V({}, hn, {
        view: 0,
        detail: 0
    }),
    fd = _e(lr),
    Wi, Qi, _n, wi = V({}, lr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: zo,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== _n && (_n && e.type === "mousemove" ? (Wi = e.screenX - _n.screenX, Qi = e.screenY - _n.screenY) : Qi = Wi = 0, _n = e), Wi)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Qi
        }
    }),
    Al = _e(wi),
    dd = V({}, wi, {
        dataTransfer: 0
    }),
    pd = _e(dd),
    hd = V({}, lr, {
        relatedTarget: 0
    }),
    Ki = _e(hd),
    md = V({}, hn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    yd = _e(md),
    gd = V({}, hn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    vd = _e(gd),
    wd = V({}, hn, {
        data: 0
    }),
    zl = _e(wd),
    xd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    kd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Sd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function _d(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Sd[e]) ? !!t[e] : !1
}

function zo() {
    return _d
}
var Ed = V({}, lr, {
        key: function(e) {
            if (e.key) {
                var t = xd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zo,
        charCode: function(e) {
            return e.type === "keypress" ? Mr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Nd = _e(Ed),
    Cd = V({}, wi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Ml = _e(Cd),
    Td = V({}, lr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zo
    }),
    Pd = _e(Td),
    jd = V({}, hn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Rd = _e(jd),
    Ld = V({}, wi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Od = _e(Ld),
    Ad = [9, 13, 27, 32],
    Mo = Ze && "CompositionEvent" in window,
    Mn = null;
Ze && "documentMode" in document && (Mn = document.documentMode);
var zd = Ze && "TextEvent" in window && !Mn,
    Ta = Ze && (!Mo || Mn && 8 < Mn && 11 >= Mn),
    Dl = " ",
    Il = !1;

function Pa(e, t) {
    switch (e) {
        case "keyup":
            return Ad.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function ja(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ht = !1;

function Md(e, t) {
    switch (e) {
        case "compositionend":
            return ja(t);
        case "keypress":
            return t.which !== 32 ? null : (Il = !0, Dl);
        case "textInput":
            return e = t.data, e === Dl && Il ? null : e;
        default:
            return null
    }
}

function Dd(e, t) {
    if (Ht) return e === "compositionend" || !Mo && Pa(e, t) ? (e = Ca(), zr = Oo = ut = null, Ht = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ta && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Id = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Id[e.type] : t === "textarea"
}

function Ra(e, t, n, r) {
    la(r), t = ei(t, "onChange"), 0 < t.length && (n = new Ao("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Dn = null,
    Yn = null;

function Bd(e) {
    $a(e, 0)
}

function xi(e) {
    var t = Kt(e);
    if (ea(t)) return e
}

function Fd(e, t) {
    if (e === "change") return t
}
var La = !1;
if (Ze) {
    var qi;
    if (Ze) {
        var Yi = "oninput" in document;
        if (!Yi) {
            var Fl = document.createElement("div");
            Fl.setAttribute("oninput", "return;"), Yi = typeof Fl.oninput == "function"
        }
        qi = Yi
    } else qi = !1;
    La = qi && (!document.documentMode || 9 < document.documentMode)
}

function Ul() {
    Dn && (Dn.detachEvent("onpropertychange", Oa), Yn = Dn = null)
}

function Oa(e) {
    if (e.propertyName === "value" && xi(Yn)) {
        var t = [];
        Ra(t, Yn, e, To(e)), fa(Bd, t)
    }
}

function Ud(e, t, n) {
    e === "focusin" ? (Ul(), Dn = t, Yn = n, Dn.attachEvent("onpropertychange", Oa)) : e === "focusout" && Ul()
}

function $d(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return xi(Yn)
}

function Vd(e, t) {
    if (e === "click") return xi(t)
}

function Hd(e, t) {
    if (e === "input" || e === "change") return xi(t)
}

function Wd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Fe = typeof Object.is == "function" ? Object.is : Wd;

function Xn(e, t) {
    if (Fe(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ys.call(t, i) || !Fe(e[i], t[i])) return !1
    }
    return !0
}

function $l(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Vl(e, t) {
    var n = $l(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $l(n)
    }
}

function Aa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Aa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function za() {
    for (var e = window, t = qr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = qr(e.document)
    }
    return t
}

function Do(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Qd(e) {
    var t = za(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Aa(n.ownerDocument.documentElement, n)) {
        if (r !== null && Do(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Vl(n, s);
                var o = Vl(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Kd = Ze && "documentMode" in document && 11 >= document.documentMode,
    Wt = null,
    Ms = null,
    In = null,
    Ds = !1;

function Hl(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ds || Wt == null || Wt !== qr(r) || (r = Wt, "selectionStart" in r && Do(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), In && Xn(In, r) || (In = r, r = ei(Ms, "onSelect"), 0 < r.length && (t = new Ao("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Wt)))
}

function xr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Qt = {
        animationend: xr("Animation", "AnimationEnd"),
        animationiteration: xr("Animation", "AnimationIteration"),
        animationstart: xr("Animation", "AnimationStart"),
        transitionend: xr("Transition", "TransitionEnd")
    },
    Xi = {},
    Ma = {};
Ze && (Ma = document.createElement("div").style, "AnimationEvent" in window || (delete Qt.animationend.animation, delete Qt.animationiteration.animation, delete Qt.animationstart.animation), "TransitionEvent" in window || delete Qt.transitionend.transition);

function ki(e) {
    if (Xi[e]) return Xi[e];
    if (!Qt[e]) return e;
    var t = Qt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ma) return Xi[e] = t[n];
    return e
}
var Da = ki("animationend"),
    Ia = ki("animationiteration"),
    Ba = ki("animationstart"),
    Fa = ki("transitionend"),
    Ua = new Map,
    Wl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function kt(e, t) {
    Ua.set(e, t), Bt(t, [e])
}
for (var Gi = 0; Gi < Wl.length; Gi++) {
    var Ji = Wl[Gi],
        qd = Ji.toLowerCase(),
        Yd = Ji[0].toUpperCase() + Ji.slice(1);
    kt(qd, "on" + Yd)
}
kt(Da, "onAnimationEnd");
kt(Ia, "onAnimationIteration");
kt(Ba, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(Fa, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ln = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));

function Ql(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, qf(r, t, void 0, e), e.currentTarget = null
}

function $a(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        u = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, u !== s && i.isPropagationStopped()) break e;
                    Ql(i, l, c), s = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (l = r[o], u = l.instance, c = l.currentTarget, l = l.listener, u !== s && i.isPropagationStopped()) break e;
                        Ql(i, l, c), s = u
                    }
        }
    }
    if (Xr) throw e = Ls, Xr = !1, Ls = null, e
}

function D(e, t) {
    var n = t[$s];
    n === void 0 && (n = t[$s] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Va(t, e, 2, !1), n.add(r))
}

function Zi(e, t, n) {
    var r = 0;
    t && (r |= 4), Va(n, e, r, t)
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);

function Gn(e) {
    if (!e[kr]) {
        e[kr] = !0, Xu.forEach(function(n) {
            n !== "selectionchange" && (Xd.has(n) || Zi(n, !1, e), Zi(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[kr] || (t[kr] = !0, Zi("selectionchange", !1, t))
    }
}

function Va(e, t, n, r) {
    switch (Na(t)) {
        case 1:
            var i = ad;
            break;
        case 4:
            i = cd;
            break;
        default:
            i = Lo
    }
    n = i.bind(null, t, n, e), i = void 0, !Rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function bi(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    o = o.return
                }
            for (; l !== null;) {
                if (o = Pt(l), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = s = o;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    fa(function() {
        var c = s,
            m = To(n),
            y = [];
        e: {
            var h = Ua.get(e);
            if (h !== void 0) {
                var w = Ao,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Mr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = Nd;
                        break;
                    case "focusin":
                        x = "focus", w = Ki;
                        break;
                    case "focusout":
                        x = "blur", w = Ki;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Ki;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = Al;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = pd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = Pd;
                        break;
                    case Da:
                    case Ia:
                    case Ba:
                        w = yd;
                        break;
                    case Fa:
                        w = Rd;
                        break;
                    case "scroll":
                        w = fd;
                        break;
                    case "wheel":
                        w = Od;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = vd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = Ml
                }
                var k = (t & 4) !== 0,
                    B = !k && e === "scroll",
                    d = k ? h !== null ? h + "Capture" : null : h;
                k = [];
                for (var a = c, p; a !== null;) {
                    p = a;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g, d !== null && (g = Wn(a, d), g != null && k.push(Jn(a, g, p)))), B) break;
                    a = a.return
                }
                0 < k.length && (h = new w(h, x, null, n, m), y.push({
                    event: h,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Ps && (x = n.relatedTarget || n.fromElement) && (Pt(x) || x[be])) break e;
                if ((w || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = c, x = x ? Pt(x) : null, x !== null && (B = Ft(x), x !== B || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = c), w !== x)) {
                    if (k = Al, g = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = Ml, g = "onPointerLeave", d = "onPointerEnter", a = "pointer"), B = w == null ? h : Kt(w), p = x == null ? h : Kt(x), h = new k(g, a + "leave", w, n, m), h.target = B, h.relatedTarget = p, g = null, Pt(m) === c && (k = new k(d, a + "enter", x, n, m), k.target = p, k.relatedTarget = B, g = k), B = g, w && x) t: {
                        for (k = w, d = x, a = 0, p = k; p; p = Ut(p)) a++;
                        for (p = 0, g = d; g; g = Ut(g)) p++;
                        for (; 0 < a - p;) k = Ut(k),
                        a--;
                        for (; 0 < p - a;) d = Ut(d),
                        p--;
                        for (; a--;) {
                            if (k === d || d !== null && k === d.alternate) break t;
                            k = Ut(k), d = Ut(d)
                        }
                        k = null
                    }
                    else k = null;
                    w !== null && Kl(y, h, w, k, !1), x !== null && B !== null && Kl(y, B, x, k, !0)
                }
            }
            e: {
                if (h = c ? Kt(c) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var _ = Fd;
                else if (Bl(h))
                    if (La) _ = Hd;
                    else {
                        _ = $d;
                        var N = Ud
                    }
                else(w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = Vd);
                if (_ && (_ = _(e, c))) {
                    Ra(y, _, n, m);
                    break e
                }
                N && N(e, h, c),
                e === "focusout" && (N = h._wrapperState) && N.controlled && h.type === "number" && _s(h, "number", h.value)
            }
            switch (N = c ? Kt(c) : window, e) {
                case "focusin":
                    (Bl(N) || N.contentEditable === "true") && (Wt = N, Ms = c, In = null);
                    break;
                case "focusout":
                    In = Ms = Wt = null;
                    break;
                case "mousedown":
                    Ds = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ds = !1, Hl(y, n, m);
                    break;
                case "selectionchange":
                    if (Kd) break;
                case "keydown":
                case "keyup":
                    Hl(y, n, m)
            }
            var C;
            if (Mo) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Ht ? Pa(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (Ta && n.locale !== "ko" && (Ht || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ht && (C = Ca()) : (ut = m, Oo = "value" in ut ? ut.value : ut.textContent, Ht = !0)), N = ei(c, T), 0 < N.length && (T = new zl(T, e, null, n, m), y.push({
                event: T,
                listeners: N
            }), C ? T.data = C : (C = ja(n), C !== null && (T.data = C)))),
            (C = zd ? Md(e, n) : Dd(e, n)) && (c = ei(c, "onBeforeInput"), 0 < c.length && (m = new zl("onBeforeInput", "beforeinput", null, n, m), y.push({
                event: m,
                listeners: c
            }), m.data = C))
        }
        $a(y, t)
    })
}

function Jn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function ei(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Wn(e, n), s != null && r.unshift(Jn(e, s, i)), s = Wn(e, t), s != null && r.push(Jn(e, s, i))), e = e.return
    }
    return r
}

function Ut(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Kl(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var l = n,
            u = l.alternate,
            c = l.stateNode;
        if (u !== null && u === r) break;
        l.tag === 5 && c !== null && (l = c, i ? (u = Wn(n, s), u != null && o.unshift(Jn(n, u, l))) : i || (u = Wn(n, s), u != null && o.push(Jn(n, u, l)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Gd = /\r\n?/g,
    Jd = /\u0000|\uFFFD/g;

function ql(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gd, `
`).replace(Jd, "")
}

function Sr(e, t, n) {
    if (t = ql(t), ql(e) !== t && n) throw Error(v(425))
}

function ti() {}
var Is = null,
    Bs = null;

function Fs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Us = typeof setTimeout == "function" ? setTimeout : void 0,
    Zd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yl = typeof Promise == "function" ? Promise : void 0,
    bd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yl < "u" ? function(e) {
        return Yl.resolve(null).then(e).catch(ep)
    } : Us;

function ep(e) {
    setTimeout(function() {
        throw e
    })
}

function es(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), qn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    qn(t)
}

function pt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Xl(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mn = Math.random().toString(36).slice(2),
    Ve = "__reactFiber$" + mn,
    Zn = "__reactProps$" + mn,
    be = "__reactContainer$" + mn,
    $s = "__reactEvents$" + mn,
    tp = "__reactListeners$" + mn,
    np = "__reactHandles$" + mn;

function Pt(e) {
    var t = e[Ve];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[be] || n[Ve]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Xl(e); e !== null;) {
                    if (n = e[Ve]) return n;
                    e = Xl(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ur(e) {
    return e = e[Ve] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Kt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v(33))
}

function Si(e) {
    return e[Zn] || null
}
var Vs = [],
    qt = -1;

function St(e) {
    return {
        current: e
    }
}

function I(e) {
    0 > qt || (e.current = Vs[qt], Vs[qt] = null, qt--)
}

function M(e, t) {
    qt++, Vs[qt] = e.current, e.current = t
}
var xt = {},
    le = St(xt),
    me = St(!1),
    At = xt;

function ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function ye(e) {
    return e = e.childContextTypes, e != null
}

function ni() {
    I(me), I(le)
}

function Gl(e, t, n) {
    if (le.current !== xt) throw Error(v(168));
    M(le, t), M(me, n)
}

function Ha(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(v(108, Uf(e) || "Unknown", i));
    return V({}, n, r)
}

function ri(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, At = le.current, M(le, e), M(me, me.current), !0
}

function Jl(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(v(169));
    n ? (e = Ha(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, I(me), I(le), M(le, e)) : I(me), M(me, n)
}
var Ye = null,
    _i = !1,
    ts = !1;

function Wa(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}

function rp(e) {
    _i = !0, Wa(e)
}

function _t() {
    if (!ts && Ye !== null) {
        ts = !0;
        var e = 0,
            t = z;
        try {
            var n = Ye;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ye = null, _i = !1
        } catch (i) {
            throw Ye !== null && (Ye = Ye.slice(e + 1)), ma(Po, _t), i
        } finally {
            z = t, ts = !1
        }
    }
    return null
}
var Yt = [],
    Xt = 0,
    ii = null,
    si = 0,
    Ee = [],
    Ne = 0,
    zt = null,
    Xe = 1,
    Ge = "";

function Ct(e, t) {
    Yt[Xt++] = si, Yt[Xt++] = ii, ii = e, si = t
}

function Qa(e, t, n) {
    Ee[Ne++] = Xe, Ee[Ne++] = Ge, Ee[Ne++] = zt, zt = e;
    var r = Xe;
    e = Ge;
    var i = 32 - Ie(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Ie(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Xe = 1 << 32 - Ie(t) + i | n << i | r, Ge = s + e
    } else Xe = 1 << s | n << i | r, Ge = e
}

function Io(e) {
    e.return !== null && (Ct(e, 1), Qa(e, 1, 0))
}

function Bo(e) {
    for (; e === ii;) ii = Yt[--Xt], Yt[Xt] = null, si = Yt[--Xt], Yt[Xt] = null;
    for (; e === zt;) zt = Ee[--Ne], Ee[Ne] = null, Ge = Ee[--Ne], Ee[Ne] = null, Xe = Ee[--Ne], Ee[Ne] = null
}
var xe = null,
    we = null,
    F = !1,
    De = null;

function Ka(e, t) {
    var n = Te(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Zl(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, we = pt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, we = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? {
                id: Xe,
                overflow: Ge
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, we = null, !0) : !1;
        default:
            return !1
    }
}

function Hs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ws(e) {
    if (F) {
        var t = we;
        if (t) {
            var n = t;
            if (!Zl(e, t)) {
                if (Hs(e)) throw Error(v(418));
                t = pt(n.nextSibling);
                var r = xe;
                t && Zl(e, t) ? Ka(r, n) : (e.flags = e.flags & -4097 | 2, F = !1, xe = e)
            }
        } else {
            if (Hs(e)) throw Error(v(418));
            e.flags = e.flags & -4097 | 2, F = !1, xe = e
        }
    }
}

function bl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    xe = e
}

function _r(e) {
    if (e !== xe) return !1;
    if (!F) return bl(e), F = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Fs(e.type, e.memoizedProps)), t && (t = we)) {
        if (Hs(e)) throw qa(), Error(v(418));
        for (; t;) Ka(e, t), t = pt(t.nextSibling)
    }
    if (bl(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = pt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            we = null
        }
    } else we = xe ? pt(e.stateNode.nextSibling) : null;
    return !0
}

function qa() {
    for (var e = we; e;) e = pt(e.nextSibling)
}

function un() {
    we = xe = null, F = !1
}

function Fo(e) {
    De === null ? De = [e] : De.push(e)
}
var ip = nt.ReactCurrentBatchConfig;

function En(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(v(309));
                var r = n.stateNode
            }
            if (!r) throw Error(v(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(v(284));
        if (!n._owner) throw Error(v(290, e))
    }
    return e
}

function Er(e, t) {
    throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function eu(e) {
    var t = e._init;
    return t(e._payload)
}

function Ya(e) {
    function t(d, a) {
        if (e) {
            var p = d.deletions;
            p === null ? (d.deletions = [a], d.flags |= 16) : p.push(a)
        }
    }

    function n(d, a) {
        if (!e) return null;
        for (; a !== null;) t(d, a), a = a.sibling;
        return null
    }

    function r(d, a) {
        for (d = new Map; a !== null;) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
        return d
    }

    function i(d, a) {
        return d = gt(d, a), d.index = 0, d.sibling = null, d
    }

    function s(d, a, p) {
        return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < a ? (d.flags |= 2, a) : p) : (d.flags |= 2, a)) : (d.flags |= 1048576, a)
    }

    function o(d) {
        return e && d.alternate === null && (d.flags |= 2), d
    }

    function l(d, a, p, g) {
        return a === null || a.tag !== 6 ? (a = us(p, d.mode, g), a.return = d, a) : (a = i(a, p), a.return = d, a)
    }

    function u(d, a, p, g) {
        var _ = p.type;
        return _ === Vt ? m(d, a, p.props.children, g, p.key) : a !== null && (a.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === it && eu(_) === a.type) ? (g = i(a, p.props), g.ref = En(d, a, p), g.return = d, g) : (g = Vr(p.type, p.key, p.props, null, d.mode, g), g.ref = En(d, a, p), g.return = d, g)
    }

    function c(d, a, p, g) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = as(p, d.mode, g), a.return = d, a) : (a = i(a, p.children || []), a.return = d, a)
    }

    function m(d, a, p, g, _) {
        return a === null || a.tag !== 7 ? (a = Ot(p, d.mode, g, _), a.return = d, a) : (a = i(a, p), a.return = d, a)
    }

    function y(d, a, p) {
        if (typeof a == "string" && a !== "" || typeof a == "number") return a = us("" + a, d.mode, p), a.return = d, a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case pr:
                    return p = Vr(a.type, a.key, a.props, null, d.mode, p), p.ref = En(d, null, a), p.return = d, p;
                case $t:
                    return a = as(a, d.mode, p), a.return = d, a;
                case it:
                    var g = a._init;
                    return y(d, g(a._payload), p)
            }
            if (jn(a) || wn(a)) return a = Ot(a, d.mode, p, null), a.return = d, a;
            Er(d, a)
        }
        return null
    }

    function h(d, a, p, g) {
        var _ = a !== null ? a.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return _ !== null ? null : l(d, a, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case pr:
                    return p.key === _ ? u(d, a, p, g) : null;
                case $t:
                    return p.key === _ ? c(d, a, p, g) : null;
                case it:
                    return _ = p._init, h(d, a, _(p._payload), g)
            }
            if (jn(p) || wn(p)) return _ !== null ? null : m(d, a, p, g, null);
            Er(d, p)
        }
        return null
    }

    function w(d, a, p, g, _) {
        if (typeof g == "string" && g !== "" || typeof g == "number") return d = d.get(p) || null, l(a, d, "" + g, _);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case pr:
                    return d = d.get(g.key === null ? p : g.key) || null, u(a, d, g, _);
                case $t:
                    return d = d.get(g.key === null ? p : g.key) || null, c(a, d, g, _);
                case it:
                    var N = g._init;
                    return w(d, a, p, N(g._payload), _)
            }
            if (jn(g) || wn(g)) return d = d.get(p) || null, m(a, d, g, _, null);
            Er(a, g)
        }
        return null
    }

    function x(d, a, p, g) {
        for (var _ = null, N = null, C = a, T = a = 0, W = null; C !== null && T < p.length; T++) {
            C.index > T ? (W = C, C = null) : W = C.sibling;
            var L = h(d, C, p[T], g);
            if (L === null) {
                C === null && (C = W);
                break
            }
            e && C && L.alternate === null && t(d, C), a = s(L, a, T), N === null ? _ = L : N.sibling = L, N = L, C = W
        }
        if (T === p.length) return n(d, C), F && Ct(d, T), _;
        if (C === null) {
            for (; T < p.length; T++) C = y(d, p[T], g), C !== null && (a = s(C, a, T), N === null ? _ = C : N.sibling = C, N = C);
            return F && Ct(d, T), _
        }
        for (C = r(d, C); T < p.length; T++) W = w(C, d, T, p[T], g), W !== null && (e && W.alternate !== null && C.delete(W.key === null ? T : W.key), a = s(W, a, T), N === null ? _ = W : N.sibling = W, N = W);
        return e && C.forEach(function(Le) {
            return t(d, Le)
        }), F && Ct(d, T), _
    }

    function k(d, a, p, g) {
        var _ = wn(p);
        if (typeof _ != "function") throw Error(v(150));
        if (p = _.call(p), p == null) throw Error(v(151));
        for (var N = _ = null, C = a, T = a = 0, W = null, L = p.next(); C !== null && !L.done; T++, L = p.next()) {
            C.index > T ? (W = C, C = null) : W = C.sibling;
            var Le = h(d, C, L.value, g);
            if (Le === null) {
                C === null && (C = W);
                break
            }
            e && C && Le.alternate === null && t(d, C), a = s(Le, a, T), N === null ? _ = Le : N.sibling = Le, N = Le, C = W
        }
        if (L.done) return n(d, C), F && Ct(d, T), _;
        if (C === null) {
            for (; !L.done; T++, L = p.next()) L = y(d, L.value, g), L !== null && (a = s(L, a, T), N === null ? _ = L : N.sibling = L, N = L);
            return F && Ct(d, T), _
        }
        for (C = r(d, C); !L.done; T++, L = p.next()) L = w(C, d, T, L.value, g), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? T : L.key), a = s(L, a, T), N === null ? _ = L : N.sibling = L, N = L);
        return e && C.forEach(function(gn) {
            return t(d, gn)
        }), F && Ct(d, T), _
    }

    function B(d, a, p, g) {
        if (typeof p == "object" && p !== null && p.type === Vt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case pr:
                    e: {
                        for (var _ = p.key, N = a; N !== null;) {
                            if (N.key === _) {
                                if (_ = p.type, _ === Vt) {
                                    if (N.tag === 7) {
                                        n(d, N.sibling), a = i(N, p.props.children), a.return = d, d = a;
                                        break e
                                    }
                                } else if (N.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === it && eu(_) === N.type) {
                                    n(d, N.sibling), a = i(N, p.props), a.ref = En(d, N, p), a.return = d, d = a;
                                    break e
                                }
                                n(d, N);
                                break
                            } else t(d, N);
                            N = N.sibling
                        }
                        p.type === Vt ? (a = Ot(p.props.children, d.mode, g, p.key), a.return = d, d = a) : (g = Vr(p.type, p.key, p.props, null, d.mode, g), g.ref = En(d, a, p), g.return = d, d = g)
                    }
                    return o(d);
                case $t:
                    e: {
                        for (N = p.key; a !== null;) {
                            if (a.key === N)
                                if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                                    n(d, a.sibling), a = i(a, p.children || []), a.return = d, d = a;
                                    break e
                                } else {
                                    n(d, a);
                                    break
                                }
                            else t(d, a);
                            a = a.sibling
                        }
                        a = as(p, d.mode, g),
                        a.return = d,
                        d = a
                    }
                    return o(d);
                case it:
                    return N = p._init, B(d, a, N(p._payload), g)
            }
            if (jn(p)) return x(d, a, p, g);
            if (wn(p)) return k(d, a, p, g);
            Er(d, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(d, a.sibling), a = i(a, p), a.return = d, d = a) : (n(d, a), a = us(p, d.mode, g), a.return = d, d = a), o(d)) : n(d, a)
    }
    return B
}
var an = Ya(!0),
    Xa = Ya(!1),
    oi = St(null),
    li = null,
    Gt = null,
    Uo = null;

function $o() {
    Uo = Gt = li = null
}

function Vo(e) {
    var t = oi.current;
    I(oi), e._currentValue = t
}

function Qs(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function rn(e, t) {
    li = e, Uo = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null)
}

function je(e) {
    var t = e._currentValue;
    if (Uo !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Gt === null) {
            if (li === null) throw Error(v(308));
            Gt = e, li.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Gt = Gt.next = e;
    return t
}
var jt = null;

function Ho(e) {
    jt === null ? jt = [e] : jt.push(e)
}

function Ga(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Ho(t)) : (n.next = i.next, i.next = n), t.interleaved = n, et(e, r)
}

function et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var st = !1;

function Wo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ja(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Je(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, A & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, et(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Ho(r)) : (t.next = i.next, i.next = t), r.interleaved = t, et(e, n)
}

function Dr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, jo(e, n)
    }
}

function tu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ui(e, t, n, r) {
    var i = e.updateQueue;
    st = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l,
            c = u.next;
        u.next = null, o === null ? s = c : o.next = c, o = u;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, l = m.lastBaseUpdate, l !== o && (l === null ? m.firstBaseUpdate = c : l.next = c, m.lastBaseUpdate = u))
    }
    if (s !== null) {
        var y = i.baseState;
        o = 0, m = c = u = null, l = s;
        do {
            var h = l.lane,
                w = l.eventTime;
            if ((r & h) === h) {
                m !== null && (m = m.next = {
                    eventTime: w,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e,
                        k = l;
                    switch (h = t, w = n, k.tag) {
                        case 1:
                            if (x = k.payload, typeof x == "function") {
                                y = x.call(w, y, h);
                                break e
                            }
                            y = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = k.payload, h = typeof x == "function" ? x.call(w, y, h) : x, h == null) break e;
                            y = V({}, y, h);
                            break e;
                        case 2:
                            st = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [l] : h.push(l))
            } else w = {
                eventTime: w,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, m === null ? (c = m = w, u = y) : m = m.next = w, o |= h;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (m === null && (u = y), i.baseState = u, i.firstBaseUpdate = c, i.lastBaseUpdate = m, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        Dt |= o, e.lanes = o, e.memoizedState = y
    }
}

function nu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(v(191, i));
                i.call(r)
            }
        }
}
var ar = {},
    We = St(ar),
    bn = St(ar),
    er = St(ar);

function Rt(e) {
    if (e === ar) throw Error(v(174));
    return e
}

function Qo(e, t) {
    switch (M(er, t), M(bn, e), M(We, ar), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ns(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ns(t, e)
    }
    I(We), M(We, t)
}

function cn() {
    I(We), I(bn), I(er)
}

function Za(e) {
    Rt(er.current);
    var t = Rt(We.current),
        n = Ns(t, e.type);
    t !== n && (M(bn, e), M(We, n))
}

function Ko(e) {
    bn.current === e && (I(We), I(bn))
}
var U = St(0);

function ai(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ns = [];

function qo() {
    for (var e = 0; e < ns.length; e++) ns[e]._workInProgressVersionPrimary = null;
    ns.length = 0
}
var Ir = nt.ReactCurrentDispatcher,
    rs = nt.ReactCurrentBatchConfig,
    Mt = 0,
    $ = null,
    G = null,
    b = null,
    ci = !1,
    Bn = !1,
    tr = 0,
    sp = 0;

function ie() {
    throw Error(v(321))
}

function Yo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fe(e[n], t[n])) return !1;
    return !0
}

function Xo(e, t, n, r, i, s) {
    if (Mt = s, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ir.current = e === null || e.memoizedState === null ? ap : cp, e = n(r, i), Bn) {
        s = 0;
        do {
            if (Bn = !1, tr = 0, 25 <= s) throw Error(v(301));
            s += 1, b = G = null, t.updateQueue = null, Ir.current = fp, e = n(r, i)
        } while (Bn)
    }
    if (Ir.current = fi, t = G !== null && G.next !== null, Mt = 0, b = G = $ = null, ci = !1, t) throw Error(v(300));
    return e
}

function Go() {
    var e = tr !== 0;
    return tr = 0, e
}

function $e() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return b === null ? $.memoizedState = b = e : b = b.next = e, b
}

function Re() {
    if (G === null) {
        var e = $.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = G.next;
    var t = b === null ? $.memoizedState : b.next;
    if (t !== null) b = t, G = e;
    else {
        if (e === null) throw Error(v(310));
        G = e, e = {
            memoizedState: G.memoizedState,
            baseState: G.baseState,
            baseQueue: G.baseQueue,
            queue: G.queue,
            next: null
        }, b === null ? $.memoizedState = b = e : b = b.next = e
    }
    return b
}

function nr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function is(e) {
    var t = Re(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = G,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var l = o = null,
            u = null,
            c = s;
        do {
            var m = c.lane;
            if ((Mt & m) === m) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var y = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = y, o = r) : u = u.next = y, $.lanes |= m, Dt |= m
            }
            c = c.next
        } while (c !== null && c !== s);
        u === null ? o = r : u.next = l, Fe(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, $.lanes |= s, Dt |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function ss(e) {
    var t = Re(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        Fe(s, t.memoizedState) || (he = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function ba() {}

function ec(e, t) {
    var n = $,
        r = Re(),
        i = t(),
        s = !Fe(r.memoizedState, i);
    if (s && (r.memoizedState = i, he = !0), r = r.queue, Jo(rc.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || b !== null && b.memoizedState.tag & 1) {
        if (n.flags |= 2048, rr(9, nc.bind(null, n, r, i, t), void 0, null), ee === null) throw Error(v(349));
        Mt & 30 || tc(n, t, i)
    }
    return i
}

function tc(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function nc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ic(t) && sc(e)
}

function rc(e, t, n) {
    return n(function() {
        ic(t) && sc(e)
    })
}

function ic(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Fe(e, n)
    } catch {
        return !0
    }
}

function sc(e) {
    var t = et(e, 1);
    t !== null && Be(t, e, 1, -1)
}

function ru(e) {
    var t = $e();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = up.bind(null, $, e), [t.memoizedState, e]
}

function rr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = $.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function oc() {
    return Re().memoizedState
}

function Br(e, t, n, r) {
    var i = $e();
    $.flags |= e, i.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ei(e, t, n, r) {
    var i = Re();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (G !== null) {
        var o = G.memoizedState;
        if (s = o.destroy, r !== null && Yo(r, o.deps)) {
            i.memoizedState = rr(t, n, s, r);
            return
        }
    }
    $.flags |= e, i.memoizedState = rr(1 | t, n, s, r)
}

function iu(e, t) {
    return Br(8390656, 8, e, t)
}

function Jo(e, t) {
    return Ei(2048, 8, e, t)
}

function lc(e, t) {
    return Ei(4, 2, e, t)
}

function uc(e, t) {
    return Ei(4, 4, e, t)
}

function ac(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function cc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ei(4, 4, ac.bind(null, t, e), n)
}

function Zo() {}

function fc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function dc(e, t) {
    var n = Re();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function pc(e, t, n) {
    return Mt & 21 ? (Fe(n, t) || (n = va(), $.lanes |= n, Dt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n)
}

function op(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = rs.transition;
    rs.transition = {};
    try {
        e(!1), t()
    } finally {
        z = n, rs.transition = r
    }
}

function hc() {
    return Re().memoizedState
}

function lp(e, t, n) {
    var r = yt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, mc(e)) yc(t, n);
    else if (n = Ga(e, t, n, r), n !== null) {
        var i = ae();
        Be(n, e, r, i), gc(n, t, r)
    }
}

function up(e, t, n) {
    var r = yt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (mc(e)) yc(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                l = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = l, Fe(l, o)) {
                var u = t.interleaved;
                u === null ? (i.next = i, Ho(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Ga(e, t, i, r), n !== null && (i = ae(), Be(n, e, r, i), gc(n, t, r))
    }
}

function mc(e) {
    var t = e.alternate;
    return e === $ || t !== null && t === $
}

function yc(e, t) {
    Bn = ci = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function gc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, jo(e, n)
    }
}
var fi = {
        readContext: je,
        useCallback: ie,
        useContext: ie,
        useEffect: ie,
        useImperativeHandle: ie,
        useInsertionEffect: ie,
        useLayoutEffect: ie,
        useMemo: ie,
        useReducer: ie,
        useRef: ie,
        useState: ie,
        useDebugValue: ie,
        useDeferredValue: ie,
        useTransition: ie,
        useMutableSource: ie,
        useSyncExternalStore: ie,
        useId: ie,
        unstable_isNewReconciler: !1
    },
    ap = {
        readContext: je,
        useCallback: function(e, t) {
            return $e().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: je,
        useEffect: iu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Br(4194308, 4, ac.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Br(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Br(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = $e();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = $e();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = lp.bind(null, $, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = $e();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ru,
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            return $e().memoizedState = e
        },
        useTransition: function() {
            var e = ru(!1),
                t = e[0];
            return e = op.bind(null, e[1]), $e().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = $,
                i = $e();
            if (F) {
                if (n === void 0) throw Error(v(407));
                n = n()
            } else {
                if (n = t(), ee === null) throw Error(v(349));
                Mt & 30 || tc(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, iu(rc.bind(null, r, s, e), [e]), r.flags |= 2048, rr(9, nc.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = $e(),
                t = ee.identifierPrefix;
            if (F) {
                var n = Ge,
                    r = Xe;
                n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = sp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    cp = {
        readContext: je,
        useCallback: fc,
        useContext: je,
        useEffect: Jo,
        useImperativeHandle: cc,
        useInsertionEffect: lc,
        useLayoutEffect: uc,
        useMemo: dc,
        useReducer: is,
        useRef: oc,
        useState: function() {
            return is(nr)
        },
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            var t = Re();
            return pc(t, G.memoizedState, e)
        },
        useTransition: function() {
            var e = is(nr)[0],
                t = Re().memoizedState;
            return [e, t]
        },
        useMutableSource: ba,
        useSyncExternalStore: ec,
        useId: hc,
        unstable_isNewReconciler: !1
    },
    fp = {
        readContext: je,
        useCallback: fc,
        useContext: je,
        useEffect: Jo,
        useImperativeHandle: cc,
        useInsertionEffect: lc,
        useLayoutEffect: uc,
        useMemo: dc,
        useReducer: ss,
        useRef: oc,
        useState: function() {
            return ss(nr)
        },
        useDebugValue: Zo,
        useDeferredValue: function(e) {
            var t = Re();
            return G === null ? t.memoizedState = e : pc(t, G.memoizedState, e)
        },
        useTransition: function() {
            var e = ss(nr)[0],
                t = Re().memoizedState;
            return [e, t]
        },
        useMutableSource: ba,
        useSyncExternalStore: ec,
        useId: hc,
        unstable_isNewReconciler: !1
    };

function Ae(e, t) {
    if (e && e.defaultProps) {
        t = V({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Ks(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ni = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ft(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae(),
            i = yt(e),
            s = Je(r, i);
        s.payload = t, n != null && (s.callback = n), t = ht(e, s, i), t !== null && (Be(t, e, i, r), Dr(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae(),
            i = yt(e),
            s = Je(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = ht(e, s, i), t !== null && (Be(t, e, i, r), Dr(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ae(),
            r = yt(e),
            i = Je(n, r);
        i.tag = 2, t != null && (i.callback = t), t = ht(e, i, r), t !== null && (Be(t, e, r, n), Dr(t, e, r))
    }
};

function su(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(i, s) : !0
}

function vc(e, t, n) {
    var r = !1,
        i = xt,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = je(s) : (i = ye(t) ? At : le.current, r = t.contextTypes, s = (r = r != null) ? ln(e, i) : xt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ni, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function ou(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ni.enqueueReplaceState(t, t.state, null)
}

function qs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Wo(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = je(s) : (s = ye(t) ? At : le.current, i.context = ln(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ks(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ni.enqueueReplaceState(i, i.state, null), ui(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function fn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Ff(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function os(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Ys(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var dp = typeof WeakMap == "function" ? WeakMap : Map;

function wc(e, t, n) {
    n = Je(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        pi || (pi = !0, io = r), Ys(e, t)
    }, n
}

function xc(e, t, n) {
    n = Je(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Ys(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Ys(e, t), typeof r != "function" && (mt === null ? mt = new Set([this]) : mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function lu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new dp;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Cp.bind(null, e, t, n), t.then(e, e))
}

function uu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function au(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, ht(n, t, 1))), n.lanes |= 1), e)
}
var pp = nt.ReactCurrentOwner,
    he = !1;

function ue(e, t, n, r) {
    t.child = e === null ? Xa(t, null, n, r) : an(t, e.child, n, r)
}

function cu(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return rn(t, i), r = Xo(e, t, n, r, s, i), n = Go(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tt(e, t, i)) : (F && n && Io(t), t.flags |= 1, ue(e, t, r, i), t.child)
}

function fu(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !ol(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, kc(e, t, s, r, i)) : (e = Vr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xn, n(o, r) && e.ref === t.ref) return tt(e, t, i)
    }
    return t.flags |= 1, e = gt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function kc(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Xn(s, r) && e.ref === t.ref)
            if (he = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (he = !0);
            else return t.lanes = e.lanes, tt(e, t, i)
    }
    return Xs(e, t, n, r, i)
}

function Sc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, M(Zt, ve), ve |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, M(Zt, ve), ve |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, M(Zt, ve), ve |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, M(Zt, ve), ve |= r;
    return ue(e, t, i, n), t.child
}

function _c(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Xs(e, t, n, r, i) {
    var s = ye(n) ? At : le.current;
    return s = ln(t, s), rn(t, i), n = Xo(e, t, n, r, s, i), r = Go(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, tt(e, t, i)) : (F && r && Io(t), t.flags |= 1, ue(e, t, n, i), t.child)
}

function du(e, t, n, r, i) {
    if (ye(n)) {
        var s = !0;
        ri(t)
    } else s = !1;
    if (rn(t, i), t.stateNode === null) Fr(e, t), vc(t, n, r), qs(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            l = t.memoizedProps;
        o.props = l;
        var u = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = je(c) : (c = ye(n) ? At : le.current, c = ln(t, c));
        var m = n.getDerivedStateFromProps,
            y = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || u !== c) && ou(t, o, r, c), st = !1;
        var h = t.memoizedState;
        o.state = h, ui(t, r, o, i), u = t.memoizedState, l !== r || h !== u || me.current || st ? (typeof m == "function" && (Ks(t, n, m, r), u = t.memoizedState), (l = st || su(t, n, l, r, h, u, c)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = c, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Ja(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Ae(t.type, l), o.props = c, y = t.pendingProps, h = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = je(u) : (u = ye(n) ? At : le.current, u = ln(t, u));
        var w = n.getDerivedStateFromProps;
        (m = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== y || h !== u) && ou(t, o, r, u), st = !1, h = t.memoizedState, o.state = h, ui(t, r, o, i);
        var x = t.memoizedState;
        l !== y || h !== x || me.current || st ? (typeof w == "function" && (Ks(t, n, w, r), x = t.memoizedState), (c = st || su(t, n, c, r, h, x, u) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = u, r = c) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Gs(e, t, n, r, s, i)
}

function Gs(e, t, n, r, i, s) {
    _c(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Jl(t, n, !1), tt(e, t, s);
    r = t.stateNode, pp.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = an(t, e.child, null, s), t.child = an(t, null, l, s)) : ue(e, t, l, s), t.memoizedState = r.state, i && Jl(t, n, !0), t.child
}

function Ec(e) {
    var t = e.stateNode;
    t.pendingContext ? Gl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gl(e, t.context, !1), Qo(e, t.containerInfo)
}

function pu(e, t, n, r, i) {
    return un(), Fo(i), t.flags |= 256, ue(e, t, n, r), t.child
}
var Js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Zs(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Nc(e, t, n) {
    var r = t.pendingProps,
        i = U.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), M(U, i & 1), e === null) return Ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Pi(o, r, 0, null), e = Ot(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Zs(n), t.memoizedState = Js, e) : bo(t, o));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return hp(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = gt(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = gt(l, s) : (s = Ot(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? Zs(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Js, r
    }
    return s = e.child, e = s.sibling, r = gt(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function bo(e, t) {
    return t = Pi({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Nr(e, t, n, r) {
    return r !== null && Fo(r), an(t, e.child, null, n), e = bo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function hp(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = os(Error(v(422))), Nr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Pi({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = Ot(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && an(t, e.child, null, o), t.child.memoizedState = Zs(o), t.memoizedState = Js, s);
    if (!(t.mode & 1)) return Nr(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, s = Error(v(419)), r = os(s, r, void 0), Nr(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0, he || l) {
        if (r = ee, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, et(e, i), Be(r, e, i, -1))
        }
        return sl(), r = os(Error(v(421))), Nr(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tp.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, we = pt(i.nextSibling), xe = t, F = !0, De = null, e !== null && (Ee[Ne++] = Xe, Ee[Ne++] = Ge, Ee[Ne++] = zt, Xe = e.id, Ge = e.overflow, zt = t), t = bo(t, r.children), t.flags |= 4096, t)
}

function hu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Qs(e.return, t, n)
}

function ls(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Cc(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (ue(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && hu(e, n, t);
            else if (e.tag === 19) hu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (M(U, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && ai(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ls(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && ai(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            ls(t, !0, n, null, s);
            break;
        case "together":
            ls(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Fr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Dt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
        for (e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = gt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function mp(e, t, n) {
    switch (t.tag) {
        case 3:
            Ec(t), un();
            break;
        case 5:
            Za(t);
            break;
        case 1:
            ye(t.type) && ri(t);
            break;
        case 4:
            Qo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            M(oi, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (M(U, U.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nc(e, t, n) : (M(U, U.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
            M(U, U.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Cc(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), M(U, U.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Sc(e, t, n)
    }
    return tt(e, t, n)
}
var Tc, bs, Pc, jc;
Tc = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
bs = function() {};
Pc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Rt(We.current);
        var s = null;
        switch (n) {
            case "input":
                i = ks(e, i), r = ks(e, r), s = [];
                break;
            case "select":
                i = V({}, i, {
                    value: void 0
                }), r = V({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Es(e, i), r = Es(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ti)
        }
        Cs(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Vn.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l) !l.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (s || (s = []), s.push(c, n)), n = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, u != null && l !== u && (s = s || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Vn.hasOwnProperty(c) ? (u != null && c === "onScroll" && D("scroll", e), s || l === u || (s = [])) : (s = s || []).push(c, u))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
jc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Nn(e, t) {
    if (!F) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function yp(e, t, n) {
    var r = t.pendingProps;
    switch (Bo(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return se(t), null;
        case 1:
            return ye(t.type) && ni(), se(t), null;
        case 3:
            return r = t.stateNode, cn(), I(me), I(le), qo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (lo(De), De = null))), bs(e, t), se(t), null;
        case 5:
            Ko(t);
            var i = Rt(er.current);
            if (n = t.type, e !== null && t.stateNode != null) Pc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(v(166));
                    return se(t), null
                }
                if (e = Rt(We.current), _r(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[Ve] = t, r[Zn] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            D("cancel", r), D("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            D("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Ln.length; i++) D(Ln[i], r);
                            break;
                        case "source":
                            D("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            D("error", r), D("load", r);
                            break;
                        case "details":
                            D("toggle", r);
                            break;
                        case "input":
                            _l(r, s), D("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, D("invalid", r);
                            break;
                        case "textarea":
                            Nl(r, s), D("invalid", r)
                    }
                    Cs(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Sr(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Sr(r.textContent, l, e), i = ["children", "" + l]) : Vn.hasOwnProperty(o) && l != null && o === "onScroll" && D("scroll", r)
                        } switch (n) {
                        case "input":
                            hr(r), El(r, s, !0);
                            break;
                        case "textarea":
                            hr(r), Cl(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = ti)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ra(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[Zn] = r, Tc(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Ts(n, r), n) {
                            case "dialog":
                                D("cancel", e), D("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                D("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Ln.length; i++) D(Ln[i], e);
                                i = r;
                                break;
                            case "source":
                                D("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                D("error", e), D("load", e), i = r;
                                break;
                            case "details":
                                D("toggle", e), i = r;
                                break;
                            case "input":
                                _l(e, r), i = ks(e, r), D("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = V({}, r, {
                                    value: void 0
                                }), D("invalid", e);
                                break;
                            case "textarea":
                                Nl(e, r), i = Es(e, r), D("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Cs(n, i),
                        l = i;
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var u = l[s];
                                s === "style" ? oa(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && ia(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hn(e, u) : typeof u == "number" && Hn(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Vn.hasOwnProperty(s) ? u != null && s === "onScroll" && D("scroll", e) : u != null && _o(e, s, u, o))
                            } switch (n) {
                            case "input":
                                hr(e), El(e, r, !1);
                                break;
                            case "textarea":
                                hr(e), Cl(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + wt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? bt(e, !!r.multiple, s, !1) : r.defaultValue != null && bt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = ti)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return se(t), null;
        case 6:
            if (e && t.stateNode != null) jc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
                if (n = Rt(er.current), Rt(We.current), _r(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (s = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
                        case 3:
                            Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r
            }
            return se(t), null;
        case 13:
            if (I(U), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (F && we !== null && t.mode & 1 && !(t.flags & 128)) qa(), un(), t.flags |= 98560, s = !1;
                else if (s = _r(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(v(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(v(317));
                        s[Ve] = t
                    } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    se(t), s = !1
                } else De !== null && (lo(De), De = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || U.current & 1 ? J === 0 && (J = 3) : sl())), t.updateQueue !== null && (t.flags |= 4), se(t), null);
        case 4:
            return cn(), bs(e, t), e === null && Gn(t.stateNode.containerInfo), se(t), null;
        case 10:
            return Vo(t.type._context), se(t), null;
        case 17:
            return ye(t.type) && ni(), se(t), null;
        case 19:
            if (I(U), s = t.memoizedState, s === null) return se(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) Nn(s, !1);
                else {
                    if (J !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = ai(e), o !== null) {
                                for (t.flags |= 128, Nn(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return M(U, U.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && K() > dn && (t.flags |= 128, r = !0, Nn(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ai(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !F) return se(t), null
                    } else 2 * K() - s.renderingStartTime > dn && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = K(), t.sibling = null, n = U.current, M(U, r ? n & 1 | 2 : n & 1), t) : (se(t), null);
        case 22:
        case 23:
            return il(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(v(156, t.tag))
}

function gp(e, t) {
    switch (Bo(t), t.tag) {
        case 1:
            return ye(t.type) && ni(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return cn(), I(me), I(le), qo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ko(t), null;
        case 13:
            if (I(U), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(v(340));
                un()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return I(U), null;
        case 4:
            return cn(), null;
        case 10:
            return Vo(t.type._context), null;
        case 22:
        case 23:
            return il(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Cr = !1,
    oe = !1,
    vp = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;

function Jt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            H(e, t, r)
        } else n.current = null
}

function eo(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var mu = !1;

function wp(e, t) {
    if (Is = Zr, e = za(), Do(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    l = -1,
                    u = -1,
                    c = 0,
                    m = 0,
                    y = e,
                    h = null;
                t: for (;;) {
                    for (var w; y !== n || i !== 0 && y.nodeType !== 3 || (l = o + i), y !== s || r !== 0 && y.nodeType !== 3 || (u = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (w = y.firstChild) !== null;) h = y, y = w;
                    for (;;) {
                        if (y === e) break t;
                        if (h === n && ++c === i && (l = o), h === s && ++m === r && (u = o), (w = y.nextSibling) !== null) break;
                        y = h, h = y.parentNode
                    }
                    y = w
                }
                n = l === -1 || u === -1 ? null : {
                    start: l,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Bs = {
            focusedElem: e,
            selectionRange: n
        }, Zr = !1, S = t; S !== null;)
        if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
        else
            for (; S !== null;) {
                t = S;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var k = x.memoizedProps,
                                    B = x.memoizedState,
                                    d = t.stateNode,
                                    a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Ae(t.type, k), B);
                                d.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(v(163))
                    }
                } catch (g) {
                    H(t, t.return, g)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, S = e;
                    break
                }
                S = t.return
            }
    return x = mu, mu = !1, x
}

function Fn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && eo(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function Ci(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function to(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Rc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[Zn], delete t[$s], delete t[tp], delete t[np])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Lc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function yu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Lc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function no(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ti));
    else if (r !== 4 && (e = e.child, e !== null))
        for (no(e, t, n), e = e.sibling; e !== null;) no(e, t, n), e = e.sibling
}

function ro(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ro(e, t, n), e = e.sibling; e !== null;) ro(e, t, n), e = e.sibling
}
var te = null,
    ze = !1;

function rt(e, t, n) {
    for (n = n.child; n !== null;) Oc(e, t, n), n = n.sibling
}

function Oc(e, t, n) {
    if (He && typeof He.onCommitFiberUnmount == "function") try {
        He.onCommitFiberUnmount(vi, n)
    } catch {}
    switch (n.tag) {
        case 5:
            oe || Jt(n, t);
        case 6:
            var r = te,
                i = ze;
            te = null, rt(e, t, n), te = r, ze = i, te !== null && (ze ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
            break;
        case 18:
            te !== null && (ze ? (e = te, n = n.stateNode, e.nodeType === 8 ? es(e.parentNode, n) : e.nodeType === 1 && es(e, n), qn(e)) : es(te, n.stateNode));
            break;
        case 4:
            r = te, i = ze, te = n.stateNode.containerInfo, ze = !0, rt(e, t, n), te = r, ze = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && eo(n, t, o), i = i.next
                } while (i !== r)
            }
            rt(e, t, n);
            break;
        case 1:
            if (!oe && (Jt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                H(n, t, l)
            }
            rt(e, t, n);
            break;
        case 21:
            rt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, rt(e, t, n), oe = r) : rt(e, t, n);
            break;
        default:
            rt(e, t, n)
    }
}

function gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new vp), t.forEach(function(r) {
            var i = Pp.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Oe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            te = l.stateNode, ze = !1;
                            break e;
                        case 3:
                            te = l.stateNode.containerInfo, ze = !0;
                            break e;
                        case 4:
                            te = l.stateNode.containerInfo, ze = !0;
                            break e
                    }
                    l = l.return
                }
                if (te === null) throw Error(v(160));
                Oc(s, o, i), te = null, ze = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (c) {
                H(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Ac(t, e), t = t.sibling
}

function Ac(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Oe(t, e), Ue(e), r & 4) {
                try {
                    Fn(3, e, e.return), Ci(3, e)
                } catch (k) {
                    H(e, e.return, k)
                }
                try {
                    Fn(5, e, e.return)
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 1:
            Oe(t, e), Ue(e), r & 512 && n !== null && Jt(n, n.return);
            break;
        case 5:
            if (Oe(t, e), Ue(e), r & 512 && n !== null && Jt(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Hn(i, "")
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    l === "input" && s.type === "radio" && s.name != null && ta(i, s), Ts(l, o);
                    var c = Ts(l, s);
                    for (o = 0; o < u.length; o += 2) {
                        var m = u[o],
                            y = u[o + 1];
                        m === "style" ? oa(i, y) : m === "dangerouslySetInnerHTML" ? ia(i, y) : m === "children" ? Hn(i, y) : _o(i, m, y, c)
                    }
                    switch (l) {
                        case "input":
                            Ss(i, s);
                            break;
                        case "textarea":
                            na(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var w = s.value;
                            w != null ? bt(i, !!s.multiple, w, !1) : h !== !!s.multiple && (s.defaultValue != null ? bt(i, !!s.multiple, s.defaultValue, !0) : bt(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Zn] = s
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 6:
            if (Oe(t, e), Ue(e), r & 4) {
                if (e.stateNode === null) throw Error(v(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (k) {
                    H(e, e.return, k)
                }
            }
            break;
        case 3:
            if (Oe(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                qn(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
            break;
        case 4:
            Oe(t, e), Ue(e);
            break;
        case 13:
            Oe(t, e), Ue(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (nl = K())), r & 4 && gu(e);
            break;
        case 22:
            if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (c = oe) || m, Oe(t, e), oe = c) : Oe(t, e), Ue(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
                    for (S = e, m = e.child; m !== null;) {
                        for (y = S = m; S !== null;) {
                            switch (h = S, w = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Fn(4, h, h.return);
                                    break;
                                case 1:
                                    Jt(h, h.return);
                                    var x = h.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (k) {
                                            H(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Jt(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        wu(y);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = h, S = w) : wu(y)
                        }
                        m = m.sibling
                    }
                e: for (m = null, y = e;;) {
                    if (y.tag === 5) {
                        if (m === null) {
                            m = y;
                            try {
                                i = y.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = y.stateNode, u = y.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, l.style.display = sa("display", o))
                            } catch (k) {
                                H(e, e.return, k)
                            }
                        }
                    } else if (y.tag === 6) {
                        if (m === null) try {
                            y.stateNode.nodeValue = c ? "" : y.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
                        y.child.return = y, y = y.child;
                        continue
                    }
                    if (y === e) break e;
                    for (; y.sibling === null;) {
                        if (y.return === null || y.return === e) break e;
                        m === y && (m = null), y = y.return
                    }
                    m === y && (m = null), y.sibling.return = y.return, y = y.sibling
                }
            }
            break;
        case 19:
            Oe(t, e), Ue(e), r & 4 && gu(e);
            break;
        case 21:
            break;
        default:
            Oe(t, e), Ue(e)
    }
}

function Ue(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Lc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(v(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Hn(i, ""), r.flags &= -33);
                    var s = yu(e);
                    ro(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        l = yu(e);
                    no(e, l, o);
                    break;
                default:
                    throw Error(v(161))
            }
        }
        catch (u) {
            H(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function xp(e, t, n) {
    S = e, zc(e)
}

function zc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var i = S,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Cr;
            if (!o) {
                var l = i.alternate,
                    u = l !== null && l.memoizedState !== null || oe;
                l = Cr;
                var c = oe;
                if (Cr = o, (oe = u) && !c)
                    for (S = i; S !== null;) o = S, u = o.child, o.tag === 22 && o.memoizedState !== null ? xu(i) : u !== null ? (u.return = o, S = u) : xu(i);
                for (; s !== null;) S = s, zc(s), s = s.sibling;
                S = i, Cr = l, oe = c
            }
            vu(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, S = s) : vu(e)
    }
}

function vu(e) {
    for (; S !== null;) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        oe || Ci(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !oe)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ae(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = t.updateQueue;
                        s !== null && nu(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            nu(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var m = c.memoizedState;
                                if (m !== null) {
                                    var y = m.dehydrated;
                                    y !== null && qn(y)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(v(163))
                }
                oe || t.flags & 512 && to(t)
            } catch (h) {
                H(t, t.return, h)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function wu(e) {
    for (; S !== null;) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function xu(e) {
    for (; S !== null;) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ci(4, t)
                    } catch (u) {
                        H(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            H(t, i, u)
                        }
                    }
                    var s = t.return;
                    try {
                        to(t)
                    } catch (u) {
                        H(t, s, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        to(t)
                    } catch (u) {
                        H(t, o, u)
                    }
            }
        } catch (u) {
            H(t, t.return, u)
        }
        if (t === e) {
            S = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, S = l;
            break
        }
        S = t.return
    }
}
var kp = Math.ceil,
    di = nt.ReactCurrentDispatcher,
    el = nt.ReactCurrentOwner,
    Pe = nt.ReactCurrentBatchConfig,
    A = 0,
    ee = null,
    Y = null,
    ne = 0,
    ve = 0,
    Zt = St(0),
    J = 0,
    ir = null,
    Dt = 0,
    Ti = 0,
    tl = 0,
    Un = null,
    pe = null,
    nl = 0,
    dn = 1 / 0,
    qe = null,
    pi = !1,
    io = null,
    mt = null,
    Tr = !1,
    at = null,
    hi = 0,
    $n = 0,
    so = null,
    Ur = -1,
    $r = 0;

function ae() {
    return A & 6 ? K() : Ur !== -1 ? Ur : Ur = K()
}

function yt(e) {
    return e.mode & 1 ? A & 2 && ne !== 0 ? ne & -ne : ip.transition !== null ? ($r === 0 && ($r = va()), $r) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Na(e.type)), e) : 1
}

function Be(e, t, n, r) {
    if (50 < $n) throw $n = 0, so = null, Error(v(185));
    or(e, n, r), (!(A & 2) || e !== ee) && (e === ee && (!(A & 2) && (Ti |= n), J === 4 && lt(e, ne)), ge(e, r), n === 1 && A === 0 && !(t.mode & 1) && (dn = K() + 500, _i && _t()))
}

function ge(e, t) {
    var n = e.callbackNode;
    id(e, t);
    var r = Jr(e, e === ee ? ne : 0);
    if (r === 0) n !== null && jl(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && jl(n), t === 1) e.tag === 0 ? rp(ku.bind(null, e)) : Wa(ku.bind(null, e)), bd(function() {
            !(A & 6) && _t()
        }), n = null;
        else {
            switch (wa(r)) {
                case 1:
                    n = Po;
                    break;
                case 4:
                    n = ya;
                    break;
                case 16:
                    n = Gr;
                    break;
                case 536870912:
                    n = ga;
                    break;
                default:
                    n = Gr
            }
            n = Vc(n, Mc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Mc(e, t) {
    if (Ur = -1, $r = 0, A & 6) throw Error(v(327));
    var n = e.callbackNode;
    if (sn() && e.callbackNode !== n) return null;
    var r = Jr(e, e === ee ? ne : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = mi(e, r);
    else {
        t = r;
        var i = A;
        A |= 2;
        var s = Ic();
        (ee !== e || ne !== t) && (qe = null, dn = K() + 500, Lt(e, t));
        do try {
            Ep();
            break
        } catch (l) {
            Dc(e, l)
        }
        while (!0);
        $o(), di.current = s, A = i, Y !== null ? t = 0 : (ee = null, ne = 0, t = J)
    }
    if (t !== 0) {
        if (t === 2 && (i = Os(e), i !== 0 && (r = i, t = oo(e, i))), t === 1) throw n = ir, Lt(e, 0), lt(e, r), ge(e, K()), n;
        if (t === 6) lt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Sp(i) && (t = mi(e, r), t === 2 && (s = Os(e), s !== 0 && (r = s, t = oo(e, s))), t === 1)) throw n = ir, Lt(e, 0), lt(e, r), ge(e, K()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(v(345));
                case 2:
                    Tt(e, pe, qe);
                    break;
                case 3:
                    if (lt(e, r), (r & 130023424) === r && (t = nl + 500 - K(), 10 < t)) {
                        if (Jr(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            ae(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Us(Tt.bind(null, e, pe, qe), t);
                        break
                    }
                    Tt(e, pe, qe);
                    break;
                case 4:
                    if (lt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - Ie(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kp(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Us(Tt.bind(null, e, pe, qe), r);
                        break
                    }
                    Tt(e, pe, qe);
                    break;
                case 5:
                    Tt(e, pe, qe);
                    break;
                default:
                    throw Error(v(329))
            }
        }
    }
    return ge(e, K()), e.callbackNode === n ? Mc.bind(null, e) : null
}

function oo(e, t) {
    var n = Un;
    return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = mi(e, t), e !== 2 && (t = pe, pe = n, t !== null && lo(t)), e
}

function lo(e) {
    pe === null ? pe = e : pe.push.apply(pe, e)
}

function Sp(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Fe(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function lt(e, t) {
    for (t &= ~tl, t &= ~Ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ie(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ku(e) {
    if (A & 6) throw Error(v(327));
    sn();
    var t = Jr(e, 0);
    if (!(t & 1)) return ge(e, K()), null;
    var n = mi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Os(e);
        r !== 0 && (t = r, n = oo(e, r))
    }
    if (n === 1) throw n = ir, Lt(e, 0), lt(e, t), ge(e, K()), n;
    if (n === 6) throw Error(v(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, pe, qe), ge(e, K()), null
}

function rl(e, t) {
    var n = A;
    A |= 1;
    try {
        return e(t)
    } finally {
        A = n, A === 0 && (dn = K() + 500, _i && _t())
    }
}

function It(e) {
    at !== null && at.tag === 0 && !(A & 6) && sn();
    var t = A;
    A |= 1;
    var n = Pe.transition,
        r = z;
    try {
        if (Pe.transition = null, z = 1, e) return e()
    } finally {
        z = r, Pe.transition = n, A = t, !(A & 6) && _t()
    }
}

function il() {
    ve = Zt.current, I(Zt)
}

function Lt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Zd(n)), Y !== null)
        for (n = Y.return; n !== null;) {
            var r = n;
            switch (Bo(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ni();
                    break;
                case 3:
                    cn(), I(me), I(le), qo();
                    break;
                case 5:
                    Ko(r);
                    break;
                case 4:
                    cn();
                    break;
                case 13:
                    I(U);
                    break;
                case 19:
                    I(U);
                    break;
                case 10:
                    Vo(r.type._context);
                    break;
                case 22:
                case 23:
                    il()
            }
            n = n.return
        }
    if (ee = e, Y = e = gt(e.current, null), ne = ve = t, J = 0, ir = null, tl = Ti = Dt = 0, pe = Un = null, jt !== null) {
        for (t = 0; t < jt.length; t++)
            if (n = jt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            } jt = null
    }
    return e
}

function Dc(e, t) {
    do {
        var n = Y;
        try {
            if ($o(), Ir.current = fi, ci) {
                for (var r = $.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ci = !1
            }
            if (Mt = 0, b = G = $ = null, Bn = !1, tr = 0, el.current = null, n === null || n.return === null) {
                J = 1, ir = t, Y = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    l = n,
                    u = t;
                if (t = ne, l.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        m = l,
                        y = m.tag;
                    if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
                        var h = m.alternate;
                        h ? (m.updateQueue = h.updateQueue, m.memoizedState = h.memoizedState, m.lanes = h.lanes) : (m.updateQueue = null, m.memoizedState = null)
                    }
                    var w = uu(o);
                    if (w !== null) {
                        w.flags &= -257, au(w, o, l, s, t), w.mode & 1 && lu(s, c, t), t = w, u = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var k = new Set;
                            k.add(u), t.updateQueue = k
                        } else x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            lu(s, c, t), sl();
                            break e
                        }
                        u = Error(v(426))
                    }
                } else if (F && l.mode & 1) {
                    var B = uu(o);
                    if (B !== null) {
                        !(B.flags & 65536) && (B.flags |= 256), au(B, o, l, s, t), Fo(fn(u, l));
                        break e
                    }
                }
                s = u = fn(u, l),
                J !== 4 && (J = 2),
                Un === null ? Un = [s] : Un.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var d = wc(s, u, t);
                            tu(s, d);
                            break e;
                        case 1:
                            l = u;
                            var a = s.type,
                                p = s.stateNode;
                            if (!(s.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (mt === null || !mt.has(p)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var g = xc(s, l, t);
                                tu(s, g);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            Fc(n)
        } catch (_) {
            t = _, Y === n && n !== null && (Y = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Ic() {
    var e = di.current;
    return di.current = fi, e === null ? fi : e
}

function sl() {
    (J === 0 || J === 3 || J === 2) && (J = 4), ee === null || !(Dt & 268435455) && !(Ti & 268435455) || lt(ee, ne)
}

function mi(e, t) {
    var n = A;
    A |= 2;
    var r = Ic();
    (ee !== e || ne !== t) && (qe = null, Lt(e, t));
    do try {
        _p();
        break
    } catch (i) {
        Dc(e, i)
    }
    while (!0);
    if ($o(), A = n, di.current = r, Y !== null) throw Error(v(261));
    return ee = null, ne = 0, J
}

function _p() {
    for (; Y !== null;) Bc(Y)
}

function Ep() {
    for (; Y !== null && !Xf();) Bc(Y)
}

function Bc(e) {
    var t = $c(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps, t === null ? Fc(e) : Y = t, el.current = null
}

function Fc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = gp(n, t), n !== null) {
                n.flags &= 32767, Y = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                J = 6, Y = null;
                return
            }
        } else if (n = yp(n, t, ve), n !== null) {
            Y = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Y = t;
            return
        }
        Y = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}

function Tt(e, t, n) {
    var r = z,
        i = Pe.transition;
    try {
        Pe.transition = null, z = 1, Np(e, t, n, r)
    } finally {
        Pe.transition = i, z = r
    }
    return null
}

function Np(e, t, n, r) {
    do sn(); while (at !== null);
    if (A & 6) throw Error(v(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(v(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (sd(e, s), e === ee && (Y = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Tr || (Tr = !0, Vc(Gr, function() {
            return sn(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = Pe.transition, Pe.transition = null;
        var o = z;
        z = 1;
        var l = A;
        A |= 4, el.current = null, wp(e, n), Ac(n, e), Qd(Bs), Zr = !!Is, Bs = Is = null, e.current = n, xp(n), Gf(), A = l, z = o, Pe.transition = s
    } else e.current = n;
    if (Tr && (Tr = !1, at = e, hi = i), s = e.pendingLanes, s === 0 && (mt = null), bf(n.stateNode), ge(e, K()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (pi) throw pi = !1, e = io, io = null, e;
    return hi & 1 && e.tag !== 0 && sn(), s = e.pendingLanes, s & 1 ? e === so ? $n++ : ($n = 0, so = e) : $n = 0, _t(), null
}

function sn() {
    if (at !== null) {
        var e = wa(hi),
            t = Pe.transition,
            n = z;
        try {
            if (Pe.transition = null, z = 16 > e ? 16 : e, at === null) var r = !1;
            else {
                if (e = at, at = null, hi = 0, A & 6) throw Error(v(331));
                var i = A;
                for (A |= 4, S = e.current; S !== null;) {
                    var s = S,
                        o = s.child;
                    if (S.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (S = c; S !== null;) {
                                    var m = S;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fn(8, m, s)
                                    }
                                    var y = m.child;
                                    if (y !== null) y.return = m, S = y;
                                    else
                                        for (; S !== null;) {
                                            m = S;
                                            var h = m.sibling,
                                                w = m.return;
                                            if (Rc(m), m === c) {
                                                S = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = w, S = h;
                                                break
                                            }
                                            S = w
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var k = x.child;
                                if (k !== null) {
                                    x.child = null;
                                    do {
                                        var B = k.sibling;
                                        k.sibling = null, k = B
                                    } while (k !== null)
                                }
                            }
                            S = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, S = o;
                    else e: for (; S !== null;) {
                        if (s = S, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Fn(9, s, s.return)
                        }
                        var d = s.sibling;
                        if (d !== null) {
                            d.return = s.return, S = d;
                            break e
                        }
                        S = s.return
                    }
                }
                var a = e.current;
                for (S = a; S !== null;) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null) p.return = o, S = p;
                    else e: for (o = a; S !== null;) {
                        if (l = S, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ci(9, l)
                            }
                        } catch (_) {
                            H(l, l.return, _)
                        }
                        if (l === o) {
                            S = null;
                            break e
                        }
                        var g = l.sibling;
                        if (g !== null) {
                            g.return = l.return, S = g;
                            break e
                        }
                        S = l.return
                    }
                }
                if (A = i, _t(), He && typeof He.onPostCommitFiberRoot == "function") try {
                    He.onPostCommitFiberRoot(vi, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            z = n, Pe.transition = t
        }
    }
    return !1
}

function Su(e, t, n) {
    t = fn(n, t), t = wc(e, t, 1), e = ht(e, t, 1), t = ae(), e !== null && (or(e, 1, t), ge(e, t))
}

function H(e, t, n) {
    if (e.tag === 3) Su(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Su(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mt === null || !mt.has(r))) {
                    e = fn(n, e), e = xc(t, e, 1), t = ht(t, e, 1), e = ae(), t !== null && (or(t, 1, e), ge(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Cp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > K() - nl ? Lt(e, 0) : tl |= n), ge(e, t)
}

function Uc(e, t) {
    t === 0 && (e.mode & 1 ? (t = gr, gr <<= 1, !(gr & 130023424) && (gr = 4194304)) : t = 1);
    var n = ae();
    e = et(e, t), e !== null && (or(e, t, n), ge(e, n))
}

function Tp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Uc(e, n)
}

function Pp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(v(314))
    }
    r !== null && r.delete(t), Uc(e, n)
}
var $c;
$c = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, mp(e, t, n);
            he = !!(e.flags & 131072)
        }
    else he = !1, F && t.flags & 1048576 && Qa(t, si, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Fr(e, t), e = t.pendingProps;
            var i = ln(t, le.current);
            rn(t, n), i = Xo(null, t, r, e, i, n);
            var s = Go();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (s = !0, ri(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Wo(t), i.updater = Ni, t.stateNode = i, i._reactInternals = t, qs(t, r, e, n), t = Gs(null, t, r, !0, s, n)) : (t.tag = 0, F && s && Io(t), ue(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Fr(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Rp(r), e = Ae(r, e), i) {
                    case 0:
                        t = Xs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = du(null, t, r, e, n);
                        break e;
                    case 11:
                        t = cu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = fu(null, t, r, Ae(r.type, e), n);
                        break e
                }
                throw Error(v(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Xs(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), du(e, t, r, i, n);
        case 3:
            e: {
                if (Ec(t), e === null) throw Error(v(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                Ja(e, t),
                ui(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = fn(Error(v(423)), t), t = pu(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = fn(Error(v(424)), t), t = pu(e, t, r, n, i);
                    break e
                } else
                    for (we = pt(t.stateNode.containerInfo.firstChild), xe = t, F = !0, De = null, n = Xa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (un(), r === i) {
                        t = tt(e, t, n);
                        break e
                    }
                    ue(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Za(t), e === null && Ws(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, Fs(r, i) ? o = null : s !== null && Fs(r, s) && (t.flags |= 32), _c(e, t), ue(e, t, o, n), t.child;
        case 6:
            return e === null && Ws(t), null;
        case 13:
            return Nc(e, t, n);
        case 4:
            return Qo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = an(t, null, r, n) : ue(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), cu(e, t, r, i, n);
        case 7:
            return ue(e, t, t.pendingProps, n), t.child;
        case 8:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ue(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, M(oi, r._currentValue), r._currentValue = o, s !== null)
                    if (Fe(s.value, o)) {
                        if (s.children === i.children && !me.current) {
                            t = tt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var u = l.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (s.tag === 1) {
                                            u = Je(-1, n & -n), u.tag = 2;
                                            var c = s.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var m = c.pending;
                                                m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u
                                            }
                                        }
                                        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Qs(s.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(v(341));
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Qs(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                ue(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, rn(t, n), i = je(i), r = r(i), t.flags |= 1, ue(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ae(r, t.pendingProps), i = Ae(r.type, i), fu(e, t, r, i, n);
        case 15:
            return kc(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ae(r, i), Fr(e, t), t.tag = 1, ye(r) ? (e = !0, ri(t)) : e = !1, rn(t, n), vc(t, r, i), qs(t, r, i, n), Gs(null, t, r, !0, e, n);
        case 19:
            return Cc(e, t, n);
        case 22:
            return Sc(e, t, n)
    }
    throw Error(v(156, t.tag))
};

function Vc(e, t) {
    return ma(e, t)
}

function jp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Te(e, t, n, r) {
    return new jp(e, t, n, r)
}

function ol(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Rp(e) {
    if (typeof e == "function") return ol(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === No) return 11;
        if (e === Co) return 14
    }
    return 2
}

function gt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Vr(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") ol(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Vt:
            return Ot(n.children, i, s, t);
        case Eo:
            o = 8, i |= 8;
            break;
        case gs:
            return e = Te(12, n, t, i | 2), e.elementType = gs, e.lanes = s, e;
        case vs:
            return e = Te(13, n, t, i), e.elementType = vs, e.lanes = s, e;
        case ws:
            return e = Te(19, n, t, i), e.elementType = ws, e.lanes = s, e;
        case Zu:
            return Pi(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Gu:
                    o = 10;
                    break e;
                case Ju:
                    o = 9;
                    break e;
                case No:
                    o = 11;
                    break e;
                case Co:
                    o = 14;
                    break e;
                case it:
                    o = 16, r = null;
                    break e
            }
            throw Error(v(130, e == null ? e : typeof e, ""))
    }
    return t = Te(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function Ot(e, t, n, r) {
    return e = Te(7, e, r, t), e.lanes = n, e
}

function Pi(e, t, n, r) {
    return e = Te(22, e, r, t), e.elementType = Zu, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function us(e, t, n) {
    return e = Te(6, e, null, t), e.lanes = n, e
}

function as(e, t, n) {
    return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Lp(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hi(0), this.expirationTimes = Hi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hi(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function ll(e, t, n, r, i, s, o, l, u) {
    return e = new Lp(e, t, n, l, u), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Te(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Wo(s), e
}

function Op(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $t,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Hc(e) {
    if (!e) return xt;
    e = e._reactInternals;
    e: {
        if (Ft(e) !== e || e.tag !== 1) throw Error(v(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ye(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(v(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ye(n)) return Ha(e, n, t)
    }
    return t
}

function Wc(e, t, n, r, i, s, o, l, u) {
    return e = ll(n, r, !0, e, i, s, o, l, u), e.context = Hc(null), n = e.current, r = ae(), i = yt(n), s = Je(r, i), s.callback = t ?? null, ht(n, s, i), e.current.lanes = i, or(e, i, r), ge(e, r), e
}

function ji(e, t, n, r) {
    var i = t.current,
        s = ae(),
        o = yt(i);
    return n = Hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ht(i, t, o), e !== null && (Be(e, i, o, s), Dr(e, i, o)), o
}

function yi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function _u(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ul(e, t) {
    _u(e, t), (e = e.alternate) && _u(e, t)
}

function Ap() {
    return null
}
var Qc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function al(e) {
    this._internalRoot = e
}
Ri.prototype.render = al.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    ji(e, t, null, null)
};
Ri.prototype.unmount = al.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        It(function() {
            ji(null, e, null, null)
        }), t[be] = null
    }
};

function Ri(e) {
    this._internalRoot = e
}
Ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Sa();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++);
        ot.splice(n, 0, e), n === 0 && Ea(e)
    }
};

function cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Li(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Eu() {}

function zp(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = yi(o);
                s.call(c)
            }
        }
        var o = Wc(t, r, e, 0, null, !1, !1, "", Eu);
        return e._reactRootContainer = o, e[be] = o.current, Gn(e.nodeType === 8 ? e.parentNode : e), It(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = yi(u);
            l.call(c)
        }
    }
    var u = ll(e, 0, !1, null, null, !1, !1, "", Eu);
    return e._reactRootContainer = u, e[be] = u.current, Gn(e.nodeType === 8 ? e.parentNode : e), It(function() {
        ji(t, u, n, r)
    }), u
}

function Oi(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = yi(o);
                l.call(u)
            }
        }
        ji(t, o, e, i)
    } else o = zp(n, t, e, i, r);
    return yi(o)
}
xa = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Rn(t.pendingLanes);
                n !== 0 && (jo(t, n | 1), ge(t, K()), !(A & 6) && (dn = K() + 500, _t()))
            }
            break;
        case 13:
            It(function() {
                var r = et(e, 1);
                if (r !== null) {
                    var i = ae();
                    Be(r, e, 1, i)
                }
            }), ul(e, 1)
    }
};
Ro = function(e) {
    if (e.tag === 13) {
        var t = et(e, 134217728);
        if (t !== null) {
            var n = ae();
            Be(t, e, 134217728, n)
        }
        ul(e, 134217728)
    }
};
ka = function(e) {
    if (e.tag === 13) {
        var t = yt(e),
            n = et(e, t);
        if (n !== null) {
            var r = ae();
            Be(n, e, t, r)
        }
        ul(e, t)
    }
};
Sa = function() {
    return z
};
_a = function(e, t) {
    var n = z;
    try {
        return z = e, t()
    } finally {
        z = n
    }
};
js = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ss(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Si(r);
                        if (!i) throw Error(v(90));
                        ea(r), Ss(r, i)
                    }
                }
            }
            break;
        case "textarea":
            na(e, n);
            break;
        case "select":
            t = n.value, t != null && bt(e, !!n.multiple, t, !1)
    }
};
aa = rl;
ca = It;
var Mp = {
        usingClientEntryPoint: !1,
        Events: [ur, Kt, Si, la, ua, rl]
    },
    Cn = {
        findFiberByHostInstance: Pt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Dp = {
        bundleType: Cn.bundleType,
        version: Cn.version,
        rendererPackageName: Cn.rendererPackageName,
        rendererConfig: Cn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = pa(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Cn.findFiberByHostInstance || Ap,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber) try {
        vi = Pr.inject(Dp), He = Pr
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
Se.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cl(t)) throw Error(v(200));
    return Op(e, t, null, n)
};
Se.createRoot = function(e, t) {
    if (!cl(e)) throw Error(v(299));
    var n = !1,
        r = "",
        i = Qc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ll(e, 1, !1, null, null, n, !1, r, i), e[be] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new al(t)
};
Se.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
    return e = pa(t), e = e === null ? null : e.stateNode, e
};
Se.flushSync = function(e) {
    return It(e)
};
Se.hydrate = function(e, t, n) {
    if (!Li(t)) throw Error(v(200));
    return Oi(null, e, t, !0, n)
};
Se.hydrateRoot = function(e, t, n) {
    if (!cl(e)) throw Error(v(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = Qc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Wc(t, null, e, 1, n ?? null, i, !1, s, o), e[be] = t.current, Gn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ri(t)
};
Se.render = function(e, t, n) {
    if (!Li(t)) throw Error(v(200));
    return Oi(null, e, t, !1, n)
};
Se.unmountComponentAtNode = function(e) {
    if (!Li(e)) throw Error(v(40));
    return e._reactRootContainer ? (It(function() {
        Oi(null, null, e, !1, function() {
            e._reactRootContainer = null, e[be] = null
        })
    }), !0) : !1
};
Se.unstable_batchedUpdates = rl;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Li(n)) throw Error(v(200));
    if (e == null || e._reactInternals === void 0) throw Error(v(38));
    return Oi(e, t, n, !1, r)
};
Se.version = "18.3.1-next-f1338f8080-20240426";

function Kc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)
    } catch (e) {
        console.error(e)
    }
}
Kc(), Ku.exports = Se;
var Ip = Ku.exports,
    qc, Nu = Ip;
qc = Nu.createRoot, Nu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bp = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    de = (e, t) => {
        const n = q.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: l = "",
            children: u,
            ...c
        }, m) => q.createElement("svg", {
            ref: m,
            ...Bp,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? Number(s) * 24 / Number(i) : s,
            className: ["lucide", `lucide-${Fp(e)}`, l].join(" "),
            ...c
        }, [...t.map(([y, h]) => q.createElement(y, h)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = de("Activity", [
    ["path", {
        d: "M22 12h-4l-3 9L9 3l-3 9H2",
        key: "d5dnw9"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = de("ArrowLeft", [
    ["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }],
    ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = de("Cpu", [
    ["rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        key: "1vbyd7"
    }],
    ["rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        key: "o3kz5p"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = de("HardDrive", [
    ["line", {
        x1: "22",
        x2: "2",
        y1: "12",
        y2: "12",
        key: "1y58io"
    }],
    ["path", {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr"
    }],
    ["line", {
        x1: "6",
        x2: "6.01",
        y1: "16",
        y2: "16",
        key: "sgf278"
    }],
    ["line", {
        x1: "10",
        x2: "10.01",
        y1: "16",
        y2: "16",
        key: "1l4acy"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = de("Monitor", [
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "3",
        rx: "2",
        key: "48i651"
    }],
    ["line", {
        x1: "8",
        x2: "16",
        y1: "21",
        y2: "21",
        key: "1svkeh"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "21",
        key: "vw1qmm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = de("Network", [
    ["rect", {
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "4q2zg0"
    }],
    ["rect", {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "8cvhb9"
    }],
    ["rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
        key: "1egb70"
    }],
    ["path", {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
        key: "1jsf9p"
    }],
    ["path", {
        d: "M12 12V8",
        key: "2874zd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = de("Power", [
    ["path", {
        d: "M12 2v10",
        key: "mnfbl"
    }],
    ["path", {
        d: "M18.4 6.6a9 9 0 1 1-12.77.04",
        key: "obofu9"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = de("RefreshCw", [
    ["path", {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc"
    }],
    ["path", {
        d: "M21 3v5h-5",
        key: "1q7to0"
    }],
    ["path", {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3"
    }],
    ["path", {
        d: "M8 16H3v5",
        key: "1cv678"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = de("ShieldAlert", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }],
    ["path", {
        d: "M12 8v4",
        key: "1got3b"
    }],
    ["path", {
        d: "M12 16h.01",
        key: "1drbdi"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = de("ShieldOff", [
    ["path", {
        d: "m2 2 20 20",
        key: "1ooewy"
    }],
    ["path", {
        d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
        key: "1jlk70"
    }],
    ["path", {
        d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
        key: "18rp1v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = de("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = de("Skull", [
    ["circle", {
        cx: "9",
        cy: "12",
        r: "1",
        key: "1vctgf"
    }],
    ["circle", {
        cx: "15",
        cy: "12",
        r: "1",
        key: "1tmaij"
    }],
    ["path", {
        d: "M8 20v2h8v-2",
        key: "ded4og"
    }],
    ["path", {
        d: "m12.5 17-.5-1-.5 1h1z",
        key: "3me087"
    }],
    ["path", {
        d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",
        key: "xq9p5u"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = de("Terminal", [
    ["polyline", {
        points: "4 17 10 11 4 5",
        key: "akl6gq"
    }],
    ["line", {
        x1: "12",
        x2: "20",
        y1: "19",
        y2: "19",
        key: "q2wloq"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = de("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = de("Users", [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }]
    ]),
    Ke = Object.create(null);
Ke.open = "0";
Ke.close = "1";
Ke.ping = "2";
Ke.pong = "3";
Ke.message = "4";
Ke.upgrade = "5";
Ke.noop = "6";
const Hr = Object.create(null);
Object.keys(Ke).forEach(e => {
    Hr[Ke[e]] = e
});
const co = {
        type: "error",
        data: "parser error"
    },
    Gc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    Jc = typeof ArrayBuffer == "function",
    Zc = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer,
    fl = ({
        type: e,
        data: t
    }, n, r) => Gc && t instanceof Blob ? n ? r(t) : Tu(t, r) : Jc && (t instanceof ArrayBuffer || Zc(t)) ? n ? r(t) : Tu(new Blob([t]), r) : r(Ke[e] + (t || "")),
    Tu = (e, t) => {
        const n = new FileReader;
        return n.onload = function() {
            const r = n.result.split(",")[1];
            t("b" + (r || ""))
        }, n.readAsDataURL(e)
    };

function Pu(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}
let cs;

function Gp(e, t) {
    if (Gc && e.data instanceof Blob) return e.data.arrayBuffer().then(Pu).then(t);
    if (Jc && (e.data instanceof ArrayBuffer || Zc(e.data))) return t(Pu(e.data));
    fl(e, !1, n => {
        cs || (cs = new TextEncoder), t(cs.encode(n))
    })
}
const ju = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    On = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ju.length; e++) On[ju.charCodeAt(e)] = e;
const Jp = e => {
        let t = e.length * .75,
            n = e.length,
            r, i = 0,
            s, o, l, u;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const c = new ArrayBuffer(t),
            m = new Uint8Array(c);
        for (r = 0; r < n; r += 4) s = On[e.charCodeAt(r)], o = On[e.charCodeAt(r + 1)], l = On[e.charCodeAt(r + 2)], u = On[e.charCodeAt(r + 3)], m[i++] = s << 2 | o >> 4, m[i++] = (o & 15) << 4 | l >> 2, m[i++] = (l & 3) << 6 | u & 63;
        return c
    },
    Zp = typeof ArrayBuffer == "function",
    dl = (e, t) => {
        if (typeof e != "string") return {
            type: "message",
            data: bc(e, t)
        };
        const n = e.charAt(0);
        return n === "b" ? {
            type: "message",
            data: bp(e.substring(1), t)
        } : Hr[n] ? e.length > 1 ? {
            type: Hr[n],
            data: e.substring(1)
        } : {
            type: Hr[n]
        } : co
    },
    bp = (e, t) => {
        if (Zp) {
            const n = Jp(e);
            return bc(n, t)
        } else return {
            base64: !0,
            data: e
        }
    },
    bc = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof Blob ? e : new Blob([e]);
            case "arraybuffer":
            default:
                return e instanceof ArrayBuffer ? e : e.buffer
        }
    },
    ef = "",
    eh = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let i = 0;
        e.forEach((s, o) => {
            fl(s, !1, l => {
                r[o] = l, ++i === n && t(r.join(ef))
            })
        })
    },
    th = (e, t) => {
        const n = e.split(ef),
            r = [];
        for (let i = 0; i < n.length; i++) {
            const s = dl(n[i], t);
            if (r.push(s), s.type === "error") break
        }
        return r
    };

function nh() {
    return new TransformStream({
        transform(e, t) {
            Gp(e, n => {
                const r = n.length;
                let i;
                if (r < 126) i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 126), s.setUint16(1, r)
                } else {
                    i = new Uint8Array(9);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 127), s.setBigUint64(1, BigInt(r))
                }
                e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(n)
            })
        }
    })
}
let fs;

function jr(e) {
    return e.reduce((t, n) => t + n.length, 0)
}

function Rr(e, t) {
    if (e[0].length === t) return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let i = 0; i < t; i++) n[i] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
}

function rh(e, t) {
    fs || (fs = new TextDecoder);
    const n = [];
    let r = 0,
        i = -1,
        s = !1;
    return new TransformStream({
        transform(o, l) {
            for (n.push(o);;) {
                if (r === 0) {
                    if (jr(n) < 1) break;
                    const u = Rr(n, 1);
                    s = (u[0] & 128) === 128, i = u[0] & 127, i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2
                } else if (r === 1) {
                    if (jr(n) < 2) break;
                    const u = Rr(n, 2);
                    i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), r = 3
                } else if (r === 2) {
                    if (jr(n) < 8) break;
                    const u = Rr(n, 8),
                        c = new DataView(u.buffer, u.byteOffset, u.length),
                        m = c.getUint32(0);
                    if (m > Math.pow(2, 21) - 1) {
                        l.enqueue(co);
                        break
                    }
                    i = m * Math.pow(2, 32) + c.getUint32(4), r = 3
                } else {
                    if (jr(n) < i) break;
                    const u = Rr(n, i);
                    l.enqueue(dl(s ? u : fs.decode(u), t)), r = 0
                }
                if (i === 0 || i > e) {
                    l.enqueue(co);
                    break
                }
            }
        }
    })
}
const tf = 4;

function X(e) {
    if (e) return ih(e)
}

function ih(e) {
    for (var t in X.prototype) e[t] = X.prototype[t];
    return e
}
X.prototype.on = X.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
};
X.prototype.once = function(e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments)
    }
    return n.fn = t, this.on(e, n), this
};
X.prototype.off = X.prototype.removeListener = X.prototype.removeAllListeners = X.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var n = this._callbacks["$" + e];
    if (!n) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + e], this;
    for (var r, i = 0; i < n.length; i++)
        if (r = n[i], r === t || r.fn === t) {
            n.splice(i, 1);
            break
        } return n.length === 0 && delete this._callbacks["$" + e], this
};
X.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
    }
    return this
};
X.prototype.emitReserved = X.prototype.emit;
X.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
};
X.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
};
const Ai = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0),
    Ce = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    sh = "arraybuffer";

function nf(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {})
}
const oh = Ce.setTimeout,
    lh = Ce.clearTimeout;

function zi(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = oh.bind(Ce), e.clearTimeoutFn = lh.bind(Ce)) : (e.setTimeoutFn = Ce.setTimeout.bind(Ce), e.clearTimeoutFn = Ce.clearTimeout.bind(Ce))
}
const uh = 1.33;

function ah(e) {
    return typeof e == "string" ? ch(e) : Math.ceil((e.byteLength || e.size) * uh)
}

function ch(e) {
    let t = 0,
        n = 0;
    for (let r = 0, i = e.length; r < i; r++) t = e.charCodeAt(r), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
    return n
}

function rf() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function fh(e) {
    let t = "";
    for (let n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}

function dh(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
}
class ph extends Error {
    constructor(t, n, r) {
        super(t), this.description = n, this.context = r, this.type = "TransportError"
    }
}
class pl extends X {
    constructor(t) {
        super(), this.writable = !1, zi(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64
    }
    onError(t, n, r) {
        return super.emitReserved("error", new ph(t, n, r)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(t) {
        const n = dl(t, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed", super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, n = {}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        const n = fh(t);
        return n.length ? "?" + n : ""
    }
}
class hh extends pl {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused", t()
        };
        if (this._polling || !this.writable) {
            let r = 0;
            this._polling && (r++, this.once("pollComplete", function() {
                --r || n()
            })), this.writable || (r++, this.once("drain", function() {
                --r || n()
            }))
        } else n()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(t) {
        const n = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(r)
        };
        th(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const t = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1, eh(t, n => {
            this.doWrite(n, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const t = this.opts.secure ? "https" : "http",
            n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = rf()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n)
    }
}
let sf = !1;
try {
    sf = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const mh = sf;

function yh() {}
class gh extends hh {
    constructor(t) {
        if (super(t), typeof location < "u") {
            const n = location.protocol === "https:";
            let r = location.port;
            r || (r = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port
        }
    }
    doWrite(t, n) {
        const r = this.request({
            method: "POST",
            data: t
        });
        r.on("success", n), r.on("error", (i, s) => {
            this.onError("xhr post error", i, s)
        })
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)), t.on("error", (n, r) => {
            this.onError("xhr poll error", n, r)
        }), this.pollXhr = t
    }
}
class Qe extends X {
    constructor(t, n, r) {
        super(), this.createRequest = t, zi(this, r), this._opts = r, this._method = r.method || "GET", this._uri = n, this._data = r.data !== void 0 ? r.data : null, this._create()
    }
    _create() {
        var t;
        const n = nf(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const r = this._xhr = this.createRequest(n);
        try {
            r.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i])
                }
            } catch {}
            if (this._method === "POST") try {
                r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                r.setRequestHeader("Accept", "*/*")
            } catch {}(t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
                var i;
                r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(r.getResponseHeader("set-cookie"))), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0)
                }, 0))
            }, r.send(this._data)
        } catch (i) {
            this.setTimeoutFn(() => {
                this._onError(i)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = Qe.requestsCount++, Qe.requests[this._index] = this)
    }
    _onError(t) {
        this.emitReserved("error", t, this._xhr), this._cleanup(!0)
    }
    _cleanup(t) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = yh, t) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete Qe.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const t = this._xhr.responseText;
        t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
Qe.requestsCount = 0;
Qe.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Ru);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in Ce ? "pagehide" : "unload";
        addEventListener(e, Ru, !1)
    }
}

function Ru() {
    for (let e in Qe.requests) Qe.requests.hasOwnProperty(e) && Qe.requests[e].abort()
}
const vh = function() {
    const e = of({
        xdomain: !1
    });
    return e && e.responseType !== null
}();
class wh extends gh {
    constructor(t) {
        super(t);
        const n = t && t.forceBase64;
        this.supportsBinary = vh && !n
    }
    request(t = {}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts), new Qe(of, this.uri(), t)
    }
}

function of(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || mh)) return new XMLHttpRequest
    } catch {}
    if (!t) try {
        return new Ce[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const lf = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class xh extends pl {
    get name() {
        return "websocket"
    }
    doOpen() {
        const t = this.uri(),
            n = this.opts.protocols,
            r = lf ? {} : nf(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, n, r)
        } catch (i) {
            return this.emitReserved("error", i)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }), this.ws.onmessage = t => this.onData(t.data), this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            fl(r, this.supportsBinary, s => {
                try {
                    this.doWrite(r, s)
                } catch {}
                i && Ai(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws",
            n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = rf()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n)
    }
}
const ds = Ce.WebSocket || Ce.MozWebSocket;
class kh extends xh {
    createSocket(t, n, r) {
        return lf ? new ds(t, n, r) : n ? new ds(t, n) : new ds(t)
    }
    doWrite(t, n) {
        this.ws.send(n)
    }
}
class Sh extends pl {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(t => {
            this.onError("webtransport error", t)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(t => {
                const n = rh(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    r = t.readable.pipeThrough(n).getReader(),
                    i = nh();
                i.readable.pipeTo(t.writable), this._writer = i.writable.getWriter();
                const s = () => {
                    r.read().then(({
                        done: l,
                        value: u
                    }) => {
                        l || (this.onPacket(u), s())
                    }).catch(l => {})
                };
                s();
                const o = {
                    type: "open"
                };
                this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen())
            })
        })
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            this._writer.write(r).then(() => {
                i && Ai(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
const _h = {
        websocket: kh,
        webtransport: Sh,
        polling: wh
    },
    Eh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Nh = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function fo(e) {
    if (e.length > 8e3) throw "URI too long";
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
    let i = Eh.exec(e || ""),
        s = {},
        o = 14;
    for (; o--;) s[Nh[o]] = i[o] || "";
    return n != -1 && r != -1 && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = Ch(s, s.path), s.queryKey = Th(s, s.query), s
}

function Ch(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r
}

function Th(e, t) {
    const n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
        i && (n[i] = s)
    }), n
}
const po = typeof addEventListener == "function" && typeof removeEventListener == "function",
    Wr = [];
po && addEventListener("offline", () => {
    Wr.forEach(e => e())
}, !1);
class vt extends X {
    constructor(t, n) {
        if (super(), this.binaryType = sh, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
            const r = fo(t);
            n.hostname = r.host, n.secure = r.protocol === "https" || r.protocol === "wss", n.port = r.port, r.query && (n.query = r.query)
        } else n.host && (n.hostname = fo(n.host).host);
        zi(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach(r => {
            const i = r.prototype.name;
            this.transports.push(i), this._transportsByName[i] = r
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = dh(this.opts.query)), po && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, Wr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = tf, n.transport = t, this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[t]);
        return new this._transportsByName[t](r)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const t = this.opts.rememberUpgrade && vt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(t);
        n.open(), this.setTransport(n)
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open", vt.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = t.data, this._onError(n);
                break;
            case "message":
                this.emitReserved("data", t.data), this.emitReserved("message", t.data);
                break
        }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const t = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const t = this._getWritablePackets();
            this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if (i && (n += ah(i)), r > 0 && n > this._maxPayload) return this.writeBuffer.slice(0, r);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const t = Date.now() > this._pingTimeoutTime;
        return t && (this._pingTimeoutTime = 0, Ai(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), t
    }
    write(t, n, r) {
        return this._sendPacket("message", t, n, r), this
    }
    send(t, n, r) {
        return this._sendPacket("message", t, n, r), this
    }
    _sendPacket(t, n, r, i) {
        if (typeof n == "function" && (i = n, n = void 0), typeof r == "function" && (i = r, r = null), this.readyState === "closing" || this.readyState === "closed") return;
        r = r || {}, r.compress = r.compress !== !1;
        const s = {
            type: t,
            data: n,
            options: r
        };
        this.emitReserved("packetCreate", s), this.writeBuffer.push(s), i && this.once("flush", i), this.flush()
    }
    close() {
        const t = () => {
                this._onClose("forced close"), this.transport.close()
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t()
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? r() : t()
        }) : this.upgrading ? r() : t()), this
    }
    _onError(t) {
        if (vt.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", t), this._onClose("transport error", t)
    }
    _onClose(t, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), po && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const r = Wr.indexOf(this._offlineEventListener);
                r !== -1 && Wr.splice(r, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
vt.protocol = tf;
class Ph extends vt {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++) this._probe(this._upgrades[t])
    }
    _probe(t) {
        let n = this.createTransport(t),
            r = !1;
        vt.priorWebsocketSuccess = !1;
        const i = () => {
            r || (n.send([{
                type: "ping",
                data: "probe"
            }]), n.once("packet", y => {
                if (!r)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", n), !n) return;
                        vt.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
                            r || this.readyState !== "closed" && (m(), this.setTransport(n), n.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const h = new Error("probe error");
                        h.transport = n.name, this.emitReserved("upgradeError", h)
                    }
            }))
        };

        function s() {
            r || (r = !0, m(), n.close(), n = null)
        }
        const o = y => {
            const h = new Error("probe error: " + y);
            h.transport = n.name, s(), this.emitReserved("upgradeError", h)
        };

        function l() {
            o("transport closed")
        }

        function u() {
            o("socket closed")
        }

        function c(y) {
            n && y.name !== n.name && s()
        }
        const m = () => {
            n.removeListener("open", i), n.removeListener("error", o), n.removeListener("close", l), this.off("close", u), this.off("upgrading", c)
        };
        n.once("open", i), n.once("error", o), n.once("close", l), this.once("close", u), this.once("upgrading", c), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
            r || n.open()
        }, 200) : n.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t)
    }
    _filterUpgrades(t) {
        const n = [];
        for (let r = 0; r < t.length; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n
    }
}
let jh = class extends Ph {
    constructor(t, n = {}) {
        const r = typeof t == "object" ? t : n;
        (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map(i => _h[i]).filter(i => !!i)), super(t, r)
    }
};

function Rh(e, t = "", n) {
    let r = e;
    n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), r = fo(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + s + ":" + r.port + t, r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port), r
}
const Lh = typeof ArrayBuffer == "function",
    Oh = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer,
    uf = Object.prototype.toString,
    Ah = typeof Blob == "function" || typeof Blob < "u" && uf.call(Blob) === "[object BlobConstructor]",
    zh = typeof File == "function" || typeof File < "u" && uf.call(File) === "[object FileConstructor]";

function hl(e) {
    return Lh && (e instanceof ArrayBuffer || Oh(e)) || Ah && e instanceof Blob || zh && e instanceof File
}

function Qr(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++)
            if (Qr(e[n])) return !0;
        return !1
    }
    if (hl(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return Qr(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Qr(e[n])) return !0;
    return !1
}

function Mh(e) {
    const t = [],
        n = e.data,
        r = e;
    return r.data = ho(n, t), r.attachments = t.length, {
        packet: r,
        buffers: t
    }
}

function ho(e, t) {
    if (!e) return e;
    if (hl(e)) {
        const n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), n
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = ho(e[r], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ho(e[r], t));
        return n
    }
    return e
}

function Dh(e, t) {
    return e.data = mo(e.data, t), delete e.attachments, e
}

function mo(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length) return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = mo(e[n], t);
    else if (typeof e == "object")
        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (e[n] = mo(e[n], t));
    return e
}
const Ih = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
    Bh = 5;
var O;
(function(e) {
    e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
})(O || (O = {}));
class Fh {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === O.EVENT || t.type === O.ACK) && Qr(t) ? this.encodeAsBinary({
            type: t.type === O.EVENT ? O.BINARY_EVENT : O.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === O.BINARY_EVENT || t.type === O.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n
    }
    encodeAsBinary(t) {
        const n = Mh(t),
            r = this.encodeAsString(n.packet),
            i = n.buffers;
        return i.unshift(r), i
    }
}

function Lu(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
class ml extends X {
    constructor(t) {
        super(), this.reviver = t
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            const r = n.type === O.BINARY_EVENT;
            r || n.type === O.BINARY_ACK ? (n.type = r ? O.EVENT : O.ACK, this.reconstructor = new Uh(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (hl(t) || t.base64)
            if (this.reconstructor) n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let n = 0;
        const r = {
            type: Number(t.charAt(0))
        };
        if (O[r.type] === void 0) throw new Error("unknown packet type " + r.type);
        if (r.type === O.BINARY_EVENT || r.type === O.BINARY_ACK) {
            const s = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length;);
            const o = t.substring(s, n);
            if (o != Number(o) || t.charAt(n) !== "-") throw new Error("Illegal attachments");
            r.attachments = Number(o)
        }
        if (t.charAt(n + 1) === "/") {
            const s = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length););
            r.nsp = t.substring(s, n)
        } else r.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const s = n + 1;
            for (; ++n;) {
                const o = t.charAt(n);
                if (o == null || Number(o) != o) {
                    --n;
                    break
                }
                if (n === t.length) break
            }
            r.id = Number(t.substring(s, n + 1))
        }
        if (t.charAt(++n)) {
            const s = this.tryParse(t.substr(n));
            if (ml.isPayloadValid(r.type, s)) r.data = s;
            else throw new Error("invalid payload")
        }
        return r
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case O.CONNECT:
                return Lu(n);
            case O.DISCONNECT:
                return n === void 0;
            case O.CONNECT_ERROR:
                return typeof n == "string" || Lu(n);
            case O.EVENT:
            case O.BINARY_EVENT:
                return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Ih.indexOf(n[0]) === -1);
            case O.ACK:
            case O.BINARY_ACK:
                return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class Uh {
    constructor(t) {
        this.packet = t, this.buffers = [], this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            const n = Dh(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}
const $h = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: ml,
    Encoder: Fh,
    get PacketType() {
        return O
    },
    protocol: Bh
}, Symbol.toStringTag, {
    value: "Module"
}));

function Me(e, t, n) {
    return e.on(t, n),
        function() {
            e.off(t, n)
        }
}
const Vh = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class af extends X {
    constructor(t, n, r) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [Me(t, "open", this.onopen.bind(this)), Me(t, "packet", this.onpacket.bind(this)), Me(t, "error", this.onerror.bind(this)), Me(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this
    }
    emit(t, ...n) {
        var r, i, s;
        if (Vh.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
        const o = {
            type: O.EVENT,
            data: n
        };
        if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
            const m = this.ids++,
                y = n.pop();
            this._registerAckCallback(m, y), o.id = m
        }
        const l = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable,
            u = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
        return this.flags.volatile && !l || (u ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this
    }
    _registerAckCallback(t, n) {
        var r;
        const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return
        }
        const s = this.io.setTimeoutFn(() => {
                delete this.acks[t];
                for (let l = 0; l < this.sendBuffer.length; l++) this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
                n.call(this, new Error("operation has timed out"))
            }, i),
            o = (...l) => {
                this.io.clearTimeoutFn(s), n.apply(this, l)
            };
        o.withError = !0, this.acks[t] = o
    }
    emitWithAck(t, ...n) {
        return new Promise((r, i) => {
            const s = (o, l) => o ? i(o) : r(l);
            s.withError = !0, n.push(s), this.emit(t, ...n)
        })
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push((i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), n && n(i)) : (this._queue.shift(), n && n(null, ...s)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue()
    }
    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args))
    }
    packet(t) {
        t.nsp = this.nsp, this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: O.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, n) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(r => String(r.id) === t)) {
                const r = this.acks[t];
                delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(t) {
        if (t.nsp === this.nsp) switch (t.type) {
            case O.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case O.EVENT:
            case O.BINARY_EVENT:
                this.onevent(t);
                break;
            case O.ACK:
            case O.BINARY_ACK:
                this.onack(t);
                break;
            case O.DISCONNECT:
                this.ondisconnect();
                break;
            case O.CONNECT_ERROR:
                this.destroy();
                const r = new Error(t.data.message);
                r.data = t.data.data, this.emitReserved("connect_error", r);
                break
        }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t)
        }
        super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function(...i) {
            r || (r = !0, n.packet({
                type: O.ACK,
                id: t,
                data: i
            }))
        }
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data))
    }
    onconnect(t, n) {
        this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t), this.packet(t)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: O.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(t) {
        return this.flags.timeout = t, this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data)
        }
    }
}

function yn(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
yn.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
};
yn.prototype.reset = function() {
    this.attempts = 0
};
yn.prototype.setMin = function(e) {
    this.ms = e
};
yn.prototype.setMax = function(e) {
    this.max = e
};
yn.prototype.setJitter = function(e) {
    this.jitter = e
};
class yo extends X {
    constructor(t, n) {
        var r;
        super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, zi(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : .5), this.backoff = new yn({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
        const i = n.parser || $h;
        this.encoder = new i.Encoder, this.decoder = new i.Decoder, this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this)
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this)
    }
    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this)
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new jh(this.uri, this.opts);
        const n = this.engine,
            r = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const i = Me(n, "open", function() {
                r.onopen(), t && t()
            }),
            s = l => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", l), t ? t(l) : this.maybeReconnectOnOpen()
            },
            o = Me(n, "error", s);
        if (this._timeout !== !1) {
            const l = this._timeout,
                u = this.setTimeoutFn(() => {
                    i(), s(new Error("timeout")), n.close()
                }, l);
            this.opts.autoUnref && u.unref(), this.subs.push(() => {
                this.clearTimeoutFn(u)
            })
        }
        return this.subs.push(i), this.subs.push(o), this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const t = this.engine;
        this.subs.push(Me(t, "ping", this.onping.bind(this)), Me(t, "data", this.ondata.bind(this)), Me(t, "error", this.onerror.bind(this)), Me(t, "close", this.onclose.bind(this)), Me(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(t) {
        Ai(() => {
            this.emitReserved("packet", t)
        }, this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, n) {
        let r = this.nsps[t];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new af(this, t, n), this.nsps[t] = r), r
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n)
            if (this.nsps[r].active) return;
        this._close()
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, n) {
        var r;
        this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open(i => {
                    i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect()
                }))
            }, n);
            this.opts.autoUnref && r.unref(), this.subs.push(() => {
                this.clearTimeoutFn(r)
            })
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t)
    }
}
const Tn = {};

function ps(e, t) {
    typeof e == "object" && (t = e, e = void 0), t = t || {};
    const n = Rh(e, t.path || "/socket.io"),
        r = n.source,
        i = n.id,
        s = n.path,
        o = Tn[i] && s in Tn[i].nsps,
        l = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
    let u;
    return l ? u = new yo(r, t) : (Tn[i] || (Tn[i] = new yo(r, t)), u = Tn[i]), n.query && !t.query && (t.query = n.queryKey), u.socket(n.path, t)
}
Object.assign(ps, {
    Manager: yo,
    Socket: af,
    io: ps,
    connect: ps
});
const hs = "http://163.172.66.233:5000";
let Ou = null;
const Kr = {
    setToken: e => {
        Ou = e
    },
    login: async (e, t) => {
        try {
            const n = await fetch(`${hs}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        username: e,
                        password: t
                    })
                }),
                r = await n.json();
            if (!n.ok) throw new Error(r.error || "Login failed");
            return Ou = r.token, r
        } catch (n) {
            throw console.error("Login error:", n), n
        }
    },
    refreshStatus: async e => {
        try {
            console.debug("Checking agent status..."), console.debug(`Debug command: awk -F ", " '{if($1=="agent` + e + `") print $4}' /var/log/agents.log"`);
            const t = await fetch(`${hs}/api/refresh`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        agent_id: e
                    })
                }),
                n = await t.json();
            if (!t.ok) throw new Error(n.error || "Failed to refresh status");
            return n
        } catch (t) {
            throw console.error("Refresh status error:", t), t
        }
    },
    checkAuth: async () => {
        try {
            return (await (await fetch(`${hs}/api/check-auth`, {
                credentials: "include"
            })).json()).authenticated
        } catch (e) {
            return console.error("Check auth error:", e), !1
        }
    }
};

function Hh({
    onLogin: e
}) {
    const [t, n] = q.useState(""), [r, i] = q.useState(""), [s, o] = q.useState(""), [l, u] = q.useState(!0);
    if (q.useEffect(() => {
            (async () => {
                try {
                    await Kr.checkAuth() && e(!0)
                } finally {
                    u(!1)
                }
            })()
        }, [e]), l) return f.jsx("div", {
        className: "min-h-screen bg-gray-900 flex items-center justify-center",
        children: f.jsx("div", {
            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"
        })
    });
    const c = async m => {
        m.preventDefault(), u(!0), o("");
        try {
            const {
                token: y
            } = await Kr.login(t, r);
            Kr.setToken(y), e(!0)
        } catch {
            o("Invalid credentials")
        } finally {
            u(!1)
        }
    };
    return f.jsx("div", {
        className: "min-h-screen bg-gray-900 flex items-center justify-center p-4",
        children: f.jsxs("div", {
            className: "max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-2xl",
            children: [f.jsxs("div", {
                className: "text-center",
                children: [f.jsx(Yc, {
                    className: "mx-auto h-12 w-12 text-red-500"
                }), f.jsx("h2", {
                    className: "mt-6 text-3xl font-bold text-gray-100",
                    children: "PHANTOM C2"
                }), f.jsx("p", {
                    className: "mt-2 text-sm text-gray-400",
                    children: "Command & Control Interface v2.4.1"
                })]
            }), f.jsxs("form", {
                className: "mt-8 space-y-6",
                onSubmit: c,
                children: [s && f.jsx("div", {
                    className: "text-red-500 text-sm text-center bg-red-500/10 py-2 rounded",
                    children: s
                }), f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsxs("div", {
                        children: [f.jsx("label", {
                            htmlFor: "username",
                            className: "sr-only",
                            children: "Username"
                        }), f.jsx("input", {
                            id: "username",
                            name: "username",
                            type: "text",
                            required: !0,
                            className: "appearance-none rounded relative block w-full px-3 py-2 border border-gray-700 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                            placeholder: "Username",
                            value: t,
                            onChange: m => n(m.target.value),
                            disabled: l
                        })]
                    }), f.jsxs("div", {
                        children: [f.jsx("label", {
                            htmlFor: "password",
                            className: "sr-only",
                            children: "Password"
                        }), f.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            required: !0,
                            className: "appearance-none rounded relative block w-full px-3 py-2 border border-gray-700 bg-gray-700/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                            placeholder: "Password",
                            value: r,
                            onChange: m => i(m.target.value),
                            disabled: l
                        })]
                    })]
                }), f.jsx("div", {
                    children: f.jsx("button", {
                        type: "submit",
                        className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50",
                        disabled: l,
                        children: l ? "Authenticating..." : "Access System"
                    })
                })]
            })]
        })
    })
}

function Au({
    agents: e,
    selectedAgent: t,
    onSelectAgent: n,
    fullWidth: r
}) {
    const i = s => {
        switch (s) {
            case "active":
                return f.jsx(Xc, {
                    className: "h-5 w-5 text-green-500"
                });
            case "idle":
                return f.jsx(Yc, {
                    className: "h-5 w-5 text-yellow-500"
                });
            case "offline":
                return f.jsx(qp, {
                    className: "h-5 w-5 text-gray-500"
                })
        }
    };
    return f.jsxs("div", {
        className: `bg-gray-800 rounded-lg p-6 ${r?"col-span-full":""}`,
        children: [f.jsx("h2", {
            className: "text-xl font-bold mb-4",
            children: "Active Agents"
        }), f.jsx("div", {
            className: `grid ${r?"grid-cols-1 md:grid-cols-2 lg:grid-cols-3":""} gap-4`,
            children: e.map(s => f.jsxs("div", {
                className: `p-4 rounded cursor-pointer transition-all ${(t==null?void 0:t.id)===s.id?"bg-red-500/10 border border-red-500":"bg-gray-700 hover:bg-gray-600"}`,
                onClick: () => n(s),
                children: [f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [f.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [i(s.status), f.jsx("span", {
                            className: "font-mono",
                            children: s.hostname
                        })]
                    }), f.jsx("span", {
                        className: `px-2 py-1 rounded-full text-xs ${s.status==="active"?"bg-green-500/20 text-green-400":s.status==="idle"?"bg-yellow-500/20 text-yellow-400":"bg-gray-500/20 text-gray-400"}`,
                        children: s.status
                    })]
                }), f.jsxs("div", {
                    className: "text-sm text-gray-400 mt-2 space-y-1",
                    children: [f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [f.jsx("span", {
                            children: "IP:"
                        }), f.jsx("span", {
                            className: "font-mono",
                            children: s.ip
                        })]
                    }), f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [f.jsx("span", {
                            children: "OS:"
                        }), f.jsx("span", {
                            children: s.os
                        })]
                    }), f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [f.jsx("span", {
                            children: "User:"
                        }), f.jsx("span", {
                            className: "font-mono",
                            children: s.username
                        })]
                    }), f.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [f.jsx("span", {
                            children: "Privileges:"
                        }), f.jsx("span", {
                            className: `
                  ${s.privileges==="system"?"text-red-400":s.privileges==="admin"?"text-yellow-400":"text-gray-400"}
                `,
                            children: s.privileges
                        })]
                    })]
                })]
            }, s.id))
        })]
    })
}
const cf = [{
    id: "1",
    name: "HTTP-Primary",
    type: "http",
    host: "0.0.0.0",
    port: 3e3,
    status: "active",
    payloadType: "exe",
    connectedAgents: 2,
    created: "2025-02-13 12:00:00"
}, {
    id: "2",
    name: "HTTP-Backup",
    type: "https",
    host: "0.0.0.0",
    port: 4e3,
    status: "stopped",
    payloadType: "dll",
    connectedAgents: 0,
    created: "2025-02-13 13:30:00"
}];

function Wh() {
    const [e] = q.useState(cf);
    return f.jsxs("div", {
        className: "space-y-6",
        children: [f.jsx("div", {
            className: "flex items-center justify-between",
            children: f.jsx("h2", {
                className: "text-2xl font-bold",
                children: "Listeners"
            })
        }), f.jsx("div", {
            className: "bg-gray-800 rounded-lg overflow-hidden",
            children: f.jsxs("table", {
                className: "w-full",
                children: [f.jsx("thead", {
                    children: f.jsxs("tr", {
                        className: "bg-gray-700",
                        children: [f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Name"
                        }), f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Type"
                        }), f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Host:Port"
                        }), f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Status"
                        }), f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Payload"
                        }), f.jsx("th", {
                            className: "px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider",
                            children: "Agents"
                        })]
                    })
                }), f.jsx("tbody", {
                    className: "divide-y divide-gray-700",
                    children: e.map(t => f.jsxs("tr", {
                        className: "hover:bg-gray-700/50",
                        children: [f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: f.jsx("span", {
                                className: "font-medium",
                                children: t.name
                            })
                        }), f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: f.jsx("span", {
                                className: "uppercase",
                                children: t.type
                            })
                        }), f.jsxs("td", {
                            className: "px-6 py-4 whitespace-nowrap font-mono",
                            children: [t.host, ":", t.port]
                        }), f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: f.jsx("span", {
                                className: `px-2 py-1 rounded-full text-xs ${t.status==="active"?"bg-green-500/20 text-green-400":"bg-gray-500/20 text-gray-400"}`,
                                children: t.status
                            })
                        }), f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap uppercase",
                            children: t.payloadType
                        }), f.jsx("td", {
                            className: "px-6 py-4 whitespace-nowrap",
                            children: t.connectedAgents
                        })]
                    }, t.id))
                })]
            })
        })]
    })
}

function Qh({
    selectedAgent: e
}) {
    q.useState("");
    const t = q.useRef(null),
        r = [{
            id: "1",
            agentId: "1",
            command: "whoami",
            output: "john.doe",
            timestamp: "2025-02-13 15:28:00",
            status: "completed"
        }, {
            id: "2",
            agentId: "1",
            command: "netstat -ano",
            output: "[ERROR] Command execution failed: Access denied",
            timestamp: "2025-02-13 15:29:30",
            status: "failed"
        }, {
            id: "3",
            agentId: "1",
            command: "systeminfo",
            output: `Host Name:                 DESKTOP-X1Y2Z3
OS Name:                   Microsoft Windows 10 Pro
OS Version:                10.0.19045`,
            timestamp: "2025-02-13 15:30:00",
            status: "completed"
        }, {
            id: "4",
            agentId: "2",
            command: "uname -a",
            output: "Linux srv-web-prod 5.15.0-41-generic #44-Ubuntu SMP Wed Jun 22 14:20:53 UTC 2022 x86_64 GNU/Linux",
            timestamp: "2025-02-13 15:31:00",
            status: "completed"
        }, {
            id: "5",
            agentId: "2",
            command: "ps aux | grep nginx",
            output: "www-data    1234  0.0  0.2 142956 21321 ?   S    Feb13   0:00 nginx: worker process",
            timestamp: "2025-02-13 15:32:00",
            status: "completed"
        }, {
            id: "6",
            agentId: "3",
            command: "net user",
            output: `User accounts for \\\\DC01

Administrator            Guest                    krbtgt`,
            timestamp: "2025-02-13 15:33:00",
            status: "completed"
        }, {
            id: "7",
            agentId: "3",
            command: "ipconfig /all",
            output: `Windows IP Configuration

Host Name: DC01
Primary DNS Suffix: domain.local`,
            timestamp: "2025-02-13 15:34:00",
            status: "completed"
        }].filter(i => i.agentId === e.id);
    return q.useEffect(() => {
        t.current && (t.current.scrollTop = t.current.scrollHeight)
    }, [r]), f.jsxs("div", {
        className: "bg-gray-800 rounded-lg p-6",
        children: [f.jsxs("div", {
            className: "flex items-center space-x-2 mb-4",
            children: [f.jsx(ao, {
                className: "h-5 w-5 text-gray-400"
            }), f.jsx("h2", {
                className: "text-xl font-bold",
                children: "Command Terminal"
            })]
        }), f.jsxs("div", {
            className: "bg-gray-900 rounded p-4 h-[400px] overflow-y-auto font-mono",
            ref: t,
            children: [f.jsx("div", {
                className: "text-sm text-gray-500 mb-4",
                children: "$ commands history..."
            }), r.map(i => f.jsxs("div", {
                className: "mb-4",
                children: [f.jsxs("div", {
                    className: "flex items-center text-gray-400",
                    children: [f.jsx("span", {
                        className: "text-red-500 mr-2",
                        children: "$"
                    }), f.jsx("span", {
                        children: i.command
                    }), f.jsx("span", {
                        className: "ml-auto text-xs",
                        children: i.timestamp
                    })]
                }), f.jsx("div", {
                    className: `mt-1 whitespace-pre-wrap ${i.status==="failed"?"text-red-400":"text-green-400"}`,
                    children: i.output
                })]
            }, i.id))]
        })]
    })
}

function Kh({
    agent: e,
    onBack: t
}) {
    const [n, r] = q.useState(!1), [i, s] = q.useState(null), o = async () => {
        r(!0), s(null);
        try {
            const u = await Kr.refreshStatus(e.id);
            s({
                text: u.message,
                type: "success"
            })
        } catch {
            s({
                text: "Failed to refresh status",
                type: "error"
            })
        } finally {
            r(!1), setTimeout(() => s(null), 3e3)
        }
    }, l = [{
        icon: $p,
        label: "Architecture",
        value: e.architecture
    }, {
        icon: Xp,
        label: "Username",
        value: e.username
    }, {
        icon: Xc,
        label: "Privileges",
        value: e.privileges
    }, {
        icon: uo,
        label: "Processes",
        value: e.processes
    }, {
        icon: Vp,
        label: "Memory",
        value: e.memory
    }, {
        icon: Wp,
        label: "Disk",
        value: e.disk
    }];
    return f.jsxs("div", {
        className: "space-y-6",
        children: [f.jsxs("div", {
            className: "flex items-center justify-between",
            children: [f.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [f.jsx("button", {
                    onClick: t,
                    className: "p-2 hover:bg-gray-700 rounded",
                    children: f.jsx(Up, {
                        className: "h-5 w-5"
                    })
                }), f.jsx("h2", {
                    className: "text-2xl font-bold",
                    children: "Agent Details"
                })]
            }), f.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [i && f.jsx("span", {
                    className: `text-sm ${i.type==="success"?"text-green-400":"text-red-400"}`,
                    children: i.text
                }), f.jsxs("button", {
                    onClick: o,
                    disabled: n,
                    className: "flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50",
                    children: [f.jsx(Kp, {
                        className: `h-4 w-4 ${n?"animate-spin":""}`
                    }), f.jsx("span", {
                        children: n ? "Refreshing..." : "Refresh Status"
                    })]
                })]
            })]
        }), f.jsxs("div", {
            className: "bg-gray-800 rounded-lg p-6",
            children: [f.jsxs("div", {
                className: "flex items-center justify-between mb-6",
                children: [f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "text-xl font-bold",
                        children: e.hostname
                    }), f.jsxs("p", {
                        className: "text-gray-400 mt-1",
                        children: [f.jsx("span", {
                            className: "font-mono",
                            children: e.ip
                        }), " • ", e.os]
                    })]
                }), f.jsx("span", {
                    className: `px-3 py-1 rounded-full text-sm ${e.status==="active"?"bg-green-500/20 text-green-400":e.status==="idle"?"bg-yellow-500/20 text-yellow-400":"bg-gray-500/20 text-gray-400"}`,
                    children: e.status
                })]
            }), f.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",
                children: l.map(({
                    icon: u,
                    label: c,
                    value: m
                }) => f.jsxs("div", {
                    className: "bg-gray-700/50 rounded p-4",
                    children: [f.jsxs("div", {
                        className: "flex items-center space-x-2 text-gray-400 mb-1",
                        children: [f.jsx(u, {
                            className: "h-4 w-4"
                        }), f.jsx("span", {
                            children: c
                        })]
                    }), f.jsx("div", {
                        className: "text-lg font-medium",
                        children: m
                    })]
                }, c))
            })]
        }), f.jsx(Qh, {
            selectedAgent: e
        })]
    })
}
const ms = [{
        id: "1",
        hostname: "DESKTOP-X1Y2Z3",
        ip: "192.168.1.105",
        os: "Windows 10 Pro",
        lastSeen: "2025-02-13 15:30:22",
        status: "active",
        username: "john.doe",
        architecture: "x64",
        privileges: "admin",
        processes: 142,
        memory: "4.2GB/16GB",
        disk: "120GB/512GB"
    }, {
        id: "2",
        hostname: "srv-web-prod",
        ip: "10.0.0.50",
        os: "Ubuntu 22.04 LTS",
        lastSeen: "2025-02-13 15:29:45",
        status: "idle",
        username: "www-data",
        architecture: "x64",
        privileges: "user",
        processes: 89,
        memory: "2.1GB/8GB",
        disk: "45GB/100GB"
    }, {
        id: "3",
        hostname: "DC01",
        ip: "192.168.1.10",
        os: "Windows Server 2019",
        lastSeen: "2025-02-13 15:31:00",
        status: "active",
        username: "SYSTEM",
        architecture: "x64",
        privileges: "system",
        processes: 98,
        memory: "8.4GB/32GB",
        disk: "200GB/1TB"
    }],
    zu = [{
        id: "1",
        agentId: "1",
        command: "whoami",
        output: "john.doe",
        timestamp: "2025-02-13 15:28:00",
        status: "completed"
    }, {
        id: "2",
        agentId: "1",
        command: "netstat -ano",
        output: "[ERROR] Command execution failed: Access denied",
        timestamp: "2025-02-13 15:29:30",
        status: "failed"
    }, {
        id: "3",
        agentId: "1",
        command: "systeminfo",
        output: `Host Name:                 DESKTOP-X1Y2Z3
OS Name:                   Microsoft Windows 10 Pro
OS Version:                10.0.19045`,
        timestamp: "2025-02-13 15:30:00",
        status: "completed"
    }, {
        id: "4",
        agentId: "2",
        command: "uname -a",
        output: "Linux srv-web-prod 5.15.0-41-generic #44-Ubuntu SMP Wed Jun 22 14:20:53 UTC 2022 x86_64 GNU/Linux",
        timestamp: "2025-02-13 15:31:00",
        status: "completed"
    }, {
        id: "5",
        agentId: "2",
        command: "ps aux | grep nginx",
        output: "www-data    1234  0.0  0.2 142956 21321 ?   S    Feb13   0:00 nginx: worker process",
        timestamp: "2025-02-13 15:32:00",
        status: "completed"
    }, {
        id: "6",
        agentId: "3",
        command: "net user",
        output: `User accounts for \\\\DC01

Administrator            Guest                    krbtgt`,
        timestamp: "2025-02-13 15:33:00",
        status: "completed"
    }, {
        id: "7",
        agentId: "3",
        command: "ipconfig /all",
        output: `Windows IP Configuration

Host Name: DC01
Primary DNS Suffix: domain.local`,
        timestamp: "2025-02-13 15:34:00",
        status: "completed"
    }];

function qh() {
    const [e, t] = q.useState(null), [n, r] = q.useState("dashboard"), i = () => {
        switch (n) {
            case "dashboard":
                return f.jsxs("div", {
                    className: "space-y-8",
                    children: [f.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [f.jsx("div", {
                            className: "bg-gray-800 p-6 rounded-lg",
                            children: f.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [f.jsxs("div", {
                                    children: [f.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Active Agents"
                                    }), f.jsx("h3", {
                                        className: "text-2xl font-bold",
                                        children: ms.filter(o => o.status === "active").length
                                    })]
                                }), f.jsx(Cu, {
                                    className: "h-8 w-8 text-green-500"
                                })]
                            })
                        }), f.jsx("div", {
                            className: "bg-gray-800 p-6 rounded-lg",
                            children: f.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [f.jsxs("div", {
                                    children: [f.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Total Commands"
                                    }), f.jsx("h3", {
                                        className: "text-2xl font-bold",
                                        children: zu.length
                                    })]
                                }), f.jsx(ao, {
                                    className: "h-8 w-8 text-blue-500"
                                })]
                            })
                        }), f.jsx("div", {
                            className: "bg-gray-800 p-6 rounded-lg",
                            children: f.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [f.jsxs("div", {
                                    children: [f.jsx("p", {
                                        className: "text-gray-400",
                                        children: "Active Listeners"
                                    }), f.jsx("h3", {
                                        className: "text-2xl font-bold",
                                        children: cf.filter(o => o.status === "active").length
                                    })]
                                }), f.jsx(uo, {
                                    className: "h-8 w-8 text-yellow-500"
                                })]
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [f.jsxs("div", {
                            className: "bg-gray-800 p-6 rounded-lg",
                            children: [f.jsx("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Recent Activity"
                            }), f.jsx("div", {
                                className: "space-y-4",
                                children: zu.slice(-5).map(o => f.jsxs("div", {
                                    className: "flex items-center justify-between p-3 bg-gray-700/50 rounded",
                                    children: [f.jsxs("div", {
                                        className: "flex items-center space-x-3",
                                        children: [f.jsx(ao, {
                                            className: "h-4 w-4 text-gray-400"
                                        }), f.jsx("span", {
                                            className: "font-mono text-sm",
                                            children: o.command
                                        })]
                                    }), f.jsx("span", {
                                        className: "text-xs text-gray-400",
                                        children: o.timestamp
                                    })]
                                }, o.id))
                            })]
                        }), f.jsx("div", {
                            children: f.jsx(Au, {
                                agents: ms.filter(o => o.status === "active"),
                                selectedAgent: e,
                                onSelectAgent: o => {
                                    t(o), r("agent-detail")
                                },
                                fullWidth: !0
                            })
                        })]
                    })]
                });
            case "agents":
                return f.jsx("div", {
                    className: "grid grid-cols-1 gap-8",
                    children: f.jsx(Au, {
                        agents: ms,
                        selectedAgent: e,
                        onSelectAgent: o => {
                            t(o), r("agent-detail")
                        },
                        fullWidth: !0
                    })
                });
            case "listeners":
                return f.jsx(Wh, {});
            case "agent-detail":
                return e ? f.jsx(Kh, {
                    agent: e,
                    onBack: () => r("dashboard")
                }) : null;
            default:
                return null
        }
    }, s = ({
        icon: o,
        label: l,
        page: u,
        alert: c
    }) => f.jsxs("button", {
        className: `w-full flex items-center space-x-2 px-4 py-2 rounded ${n===u?"bg-gray-700":"hover:bg-gray-700"}`,
        onClick: () => r(u),
        children: [f.jsx(o, {
            className: "h-5 w-5"
        }), f.jsx("span", {
            children: l
        }), c && f.jsx("span", {
            className: "ml-auto bg-red-500 text-xs px-2 py-1 rounded-full",
            children: "New"
        })]
    });
    return f.jsx("div", {
        className: "min-h-screen bg-gray-900 text-gray-100",
        children: f.jsxs("div", {
            className: "flex h-screen",
            children: [f.jsxs("div", {
                className: "w-64 bg-gray-800 p-4",
                children: [f.jsxs("div", {
                    className: "flex items-center space-x-2 mb-8",
                    children: [f.jsx(Yp, {
                        className: "h-8 w-8 text-red-500"
                    }), f.jsx("span", {
                        className: "text-xl font-bold",
                        children: "PHANTOM C2"
                    })]
                }), f.jsxs("nav", {
                    className: "space-y-2",
                    children: [f.jsx(s, {
                        icon: Hp,
                        label: "Dashboard",
                        page: "dashboard"
                    }), f.jsx(s, {
                        icon: Cu,
                        label: "Agents",
                        page: "agents",
                        alert: !0
                    }), f.jsx(s, {
                        icon: uo,
                        label: "Listeners",
                        page: "listeners"
                    }), f.jsxs("button", {
                        className: "w-full flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-700 text-red-500",
                        children: [f.jsx(Qp, {
                            className: "h-5 w-5"
                        }), f.jsx("span", {
                            children: f.jsx("a", {
                                href: "/logout",
                                children: "Logout"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "mt-8 p-4 bg-gray-700/50 rounded",
                    children: [f.jsx("h3", {
                        className: "text-sm font-semibold mb-2",
                        children: "System Status"
                    }), f.jsxs("div", {
                        className: "space-y-2 text-sm",
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [f.jsx("span", {
                                className: "text-gray-400",
                                children: "Active Agents"
                            }), f.jsx("span", {
                                className: "text-green-400",
                                children: "2"
                            })]
                        }), f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [f.jsx("span", {
                                className: "text-gray-400",
                                children: "Listeners"
                            }), f.jsx("span", {
                                className: "text-blue-400",
                                children: "1"
                            })]
                        }), f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [f.jsx("span", {
                                className: "text-gray-400",
                                children: "Commands"
                            }), f.jsx("span", {
                                className: "text-yellow-400",
                                children: "24"
                            })]
                        })]
                    })]
                })]
            }), f.jsx("div", {
                className: "flex-1 p-8",
                children: i()
            })]
        })
    })
}

function Yh() {
    const [e, t] = q.useState(!1);
    return f.jsx("div", {
        className: "min-h-screen bg-gray-900",
        children: e ? f.jsx(qh, {}) : f.jsx(Hh, {
            onLogin: t
        })
    })
}
qc(document.getElementById("root")).render(f.jsx(q.StrictMode, {
    children: f.jsx(Yh, {})
}));
