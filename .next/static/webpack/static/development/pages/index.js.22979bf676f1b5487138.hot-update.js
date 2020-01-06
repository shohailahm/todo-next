webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/mobx-react-lite/dist/index.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/mobx-react-lite/dist/index.module.js ***!
  \***********************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observer, optimizeScheduler, useAsObservableSource, useComputed, useDisposable, useForceUpdate, useLocalStore, useObservable, useObserver, useStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return ObserverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return isUsingStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizeScheduler", function() { return optimizeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return useAsObservableSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComputed", function() { return useComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDisposable", function() { return useDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return useLocalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return useObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return useObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

function useObservable(initialValue) {
    var observableRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (!observableRef.current) {
        observableRef.current = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initialValue);
    }
    return observableRef.current;
}

function useComputed(func, inputs) {
    if (inputs === void 0) { inputs = []; }
    var computed$1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])(func); }, inputs);
    return computed$1.get();
}

var doNothingDisposer = function () {
    // empty
};
/**
 * Adds an observable effect (reaction, autorun, or anything else that returns a disposer) that will be registered upon component creation and disposed upon unmounting.
 * Returns the generated disposer for early disposal.
 *
 * @export
 * @template D
 * @param {() => D} disposerGenerator A function that returns the disposer of the wanted effect.
 * @param {ReadonlyArray<any>} [inputs=[]] If you want the effect to be automatically re-created when some variable(s) are changed then pass them in this array.
 * @returns {D}
 */
function useDisposable(disposerGenerator, inputs) {
    if (inputs === void 0) { inputs = []; }
    var disposerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    var earlyDisposedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        return lazyCreateDisposer(false);
    }, inputs);
    function lazyCreateDisposer(earlyDisposal) {
        // ensure that we won't create a new disposer if it was early disposed
        if (earlyDisposedRef.current) {
            return doNothingDisposer;
        }
        if (!disposerRef.current) {
            var newDisposer = disposerGenerator();
            if (typeof newDisposer !== "function") {
                var error = new Error("generated disposer must be a function");
                {
                    // tslint:disable-next-line:no-console
                    console.error(error);
                    return doNothingDisposer;
                }
            }
            disposerRef.current = newDisposer;
        }
        return function () {
            if (disposerRef.current) {
                disposerRef.current();
                disposerRef.current = null;
            }
            if (earlyDisposal) {
                earlyDisposedRef.current = true;
            }
        };
    }
    return lazyCreateDisposer(true);
}

var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function printDebugValue(v) {
    if (!v.current) {
        return "<unknown>";
    }
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["getDependencyTree"])(v.current);
}

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}

var EMPTY_OBJECT = {};
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var reaction = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
    if (!reaction.current) {
        reaction.current = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"]("observer(" + baseComponentName + ")", function () {
            forceUpdate();
        });
    }
    var dispose = function () {
        if (reaction.current && !reaction.current.isDisposed) {
            reaction.current.dispose();
            reaction.current = null;
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(reaction, printDebugValue);
    useUnmount(function () {
        dispose();
    });
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.current.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        dispose();
        throw exception; // re-throw any exceptions catched during rendering
    }
    return rendering;
}

// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not intested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";
function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

function useAsObservableSourceInternal(current, usedByLocalStore) {
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(current, {}, { deep: false }); }), 1), res = _a[0];
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}

function useLocalStore(initializer, current) {
    var source = useAsObservableSourceInternal(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
        var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["observable"])(initializer(source));
        if (isPlainObject(local)) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["transaction"])(function () { return fn.apply(context, args); });
    };
}

var optimizeScheduler = function (reactionScheduler) {
    if (typeof reactionScheduler === "function") {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: reactionScheduler });
    }
};




/***/ }),

/***/ "./node_modules/mobx-react/dist/mobx-react.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobx-react.module.js ***!
  \***********************************************************/
/*! exports provided: Observer, useObserver, useAsObservableSource, useLocalStore, isUsingStaticRendering, useStaticRendering, observer, Provider, MobXProviderContext, inject, disposeOnUnmount, PropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobXProviderContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disposeOnUnmount", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return ee; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/dist/index.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["Observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObserver", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAsObservableSource", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useAsObservableSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocalStore", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsingStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useStaticRendering"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var g=0,w={};function j(e){return w[e]||(w[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var r="__$mobx-react "+e+" ("+g+")";return g++,r}(e)),w[e]}function x(e,r){if(P(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(var n=0;n<t.length;n++)if(!hasOwnProperty.call(r,t[n])||!P(e[t[n]],r[t[n]]))return!1;return!0}function P(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var E={$$typeof:1,render:1,compare:1,type:1,childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1};function S(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t})}var R=j("patchMixins"),k=j("patchedDefinition");function A(e,r){for(var t=this,o=[],n=arguments.length-2;n-- >0;)o[n]=arguments[n+2];r.locks++;try{var i;return null!=e&&(i=e.apply(this,o)),i}finally{r.locks--,0===r.locks&&r.methods.forEach(function(e){e.apply(t,o)})}}function C(e,r){return function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];A.call.apply(A,[this,e,r].concat(t))}}function U(e,r,t){var o=function(e,r){var t=e[R]=e[R]||{},o=t[r]=t[r]||{};return o.locks=o.locks||0,o.methods=o.methods||[],o}(e,r);o.methods.indexOf(t)<0&&o.methods.push(t);var n=Object.getOwnPropertyDescriptor(e,r);if(!n||!n[k]){var i=function e(r,t,o,n,i){var a,c=C(i,n);return(a={})[k]=!0,a.get=function(){return c},a.set=function(i){if(this===r)c=C(i,n);else{var a=e(this,t,o,n,i);Object.defineProperty(this,t,a)}},a.configurable=!0,a.enumerable=o,a}(e,r,n?n.enumerable:void 0,o,e[r]);Object.defineProperty(e,r,i)}}var M=mobx__WEBPACK_IMPORTED_MODULE_3__["$mobx"]||"$mobx",$=j("isUnmounted"),_=j("skipRender"),T=j("isForcingUpdate");function N(e,t){return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!x(this.props,e)}function D(e,r){var t=j("reactProp_"+r+"_valueHolder"),o=j("reactProp_"+r+"_atomHolder");function n(){return this[o]||S(this,o,Object(mobx__WEBPACK_IMPORTED_MODULE_3__["createAtom"])("reactive "+r)),this[o]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){return n.call(this).reportObserved(),this[t]},set:function(e){this[T]||x(this[t],e)?S(this,t,e):(S(this,t,e),S(this,_,!0),n.call(this).reportChanged(),S(this,_,!1))}})}var I="function"==typeof Symbol&&Symbol.for,q=I?Symbol.for("react.forward_ref"):"function"==typeof react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"]&&Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function(){}).$$typeof,F=I?Symbol.for("react.memo"):"function"==typeof react__WEBPACK_IMPORTED_MODULE_2__["memo"]&&Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(function(){}).$$typeof;function W(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),F&&e.$$typeof===F)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(q&&e.$$typeof===q){var s=e.render;if("function"!=typeof s)throw new Error("render property of ForwardRef was not a function");return Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function(){var e=arguments;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["Observer"],null,function(){return s.apply(void 0,e)})})}return"function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_2__["Component"],e)?function(e){var t=e.prototype;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"])if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==N)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=N;D(t,"props"),D(t,"state");var o=t.render;return t.render=function(){return function(e){var t=this;if(!0===Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])())return e.call(this);S(this,_,!1),S(this,T,!1);var o=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",n=e.bind(this),i=!1,c=new mobx__WEBPACK_IMPORTED_MODULE_3__["Reaction"](o+".render()",function(){if(!i&&(i=!0,!0!==t[$])){var e=!0;try{S(t,T,!0),t[_]||react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.forceUpdate.call(t),e=!1}finally{S(t,T,!1),e&&c.dispose()}}});function s(){i=!1;var e=void 0,r=void 0;if(c.track(function(){try{r=Object(mobx__WEBPACK_IMPORTED_MODULE_3__["_allowStateChanges"])(!1,n)}catch(r){e=r}}),e)throw e;return r}return c.reactComponent=this,s[M]=c,this.render=s,s.call(this)}.call(this,o)},U(t,"componentWillUnmount",function(){!0!==Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["isUsingStaticRendering"])()&&(this.render[M]&&this.render[M].dispose(),this[$]=!0)}),e}(e):Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["observer"])(e)}var L=react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});function X(e){var r=e.children,t=function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===r.indexOf(o)&&(t[o]=e[o]);return t}(e,["children"]),o=react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(L),i=react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(Object.assign({},o,t)).current;if( true&&!x(i,Object.assign({},i,t)))throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(L.Provider,{value:i},r)}function H(e,r,t,o){var i,a,c,s=react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function(t,o){var i=Object.assign({},t),a=react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(L);return Object.assign(i,e(a||{},i)||{}),o&&(i.ref=o),Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(r,i)});return o&&(s=W(s)),s.isMobxInjector=!0,i=r,a=s,c=Object.getOwnPropertyNames(Object.getPrototypeOf(i)),Object.getOwnPropertyNames(i).forEach(function(e){E[e]||-1!==c.indexOf(e)||Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))}),s.wrappedComponent=r,s.displayName=function(e,r){var t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r?"inject-with-"+r+"("+t+")":"inject("+t+")"}(r,t),s}function Y(){for(var e,r=[],t=arguments.length;t--;)r[t]=arguments[t];return"function"==typeof arguments[0]?(e=arguments[0],function(r){return H(e,r,e.name,!0)}):function(e){return H(function(e){return function(r,t){return e.forEach(function(e){if(!(e in t)){if(!(e in r))throw new Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");t[e]=r[e]}}),t}}(r),e,r.join("-"),!1)}}X.displayName="MobXProvider";var V=j("disposeOnUnmountProto"),z=j("disposeOnUnmountInst");function B(){var e=this;(this[V]||[]).concat(this[z]||[]).forEach(function(r){var t="string"==typeof r?e[r]:r;null!=t&&(Array.isArray(t)?t.map(function(e){return e()}):t())})}function G(e,r){if(Array.isArray(r))return r.map(function(r){return G(e,r)});var t=Object.getPrototypeOf(e).constructor||Object.getPrototypeOf(e.constructor),o=Object.getPrototypeOf(e.constructor);if(t!==react__WEBPACK_IMPORTED_MODULE_2__["Component"]&&t!==react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]&&o!==react__WEBPACK_IMPORTED_MODULE_2__["Component"]&&o!==react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"])throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");if("string"!=typeof r&&"function"!=typeof r&&!Array.isArray(r))throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");var n=!!e[V]||!!e[z];return("string"==typeof r?e[V]||(e[V]=[]):e[z]||(e[z]=[])).push(r),n||U(e,"componentWillUnmount",B),"string"!=typeof r?r:void 0}function J(e){function r(r,t,o,n,i,a){for(var c=[],s=arguments.length-6;s-- >0;)c[s]=arguments[s+6];return Object(mobx__WEBPACK_IMPORTED_MODULE_3__["untracked"])(function(){return n=n||"<<anonymous>>",a=a||o,null==t[o]?r?new Error("The "+i+" `"+a+"` is marked as required in `"+n+"`, but its value is `"+(null===t[o]?"null":"undefined")+"`."):null:e.apply(void 0,[t,o,n,i,a].concat(c))})}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function K(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||"Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol}(r,e)?"symbol":r}function Q(e,r){return J(function(t,o,n,i,a){return Object(mobx__WEBPACK_IMPORTED_MODULE_3__["untracked"])(function(){if(e&&K(t[o])===r.toLowerCase())return null;var i;switch(r){case"Array":i=mobx__WEBPACK_IMPORTED_MODULE_3__["isObservableArray"];break;case"Object":i=mobx__WEBPACK_IMPORTED_MODULE_3__["isObservableObject"];break;case"Map":i=mobx__WEBPACK_IMPORTED_MODULE_3__["isObservableMap"];break;default:throw new Error("Unexpected mobxType: "+r)}var c=t[o];if(!i(c)){var s=function(e){var r=K(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}(c),u=e?" or javascript `"+r.toLowerCase()+"`":"";return new Error("Invalid prop `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected `mobx.Observable"+r+"`"+u+".")}return null})})}function Z(e,r){return J(function(t,o,n,i,a){for(var c=[],s=arguments.length-5;s-- >0;)c[s]=arguments[s+5];return Object(mobx__WEBPACK_IMPORTED_MODULE_3__["untracked"])(function(){if("function"!=typeof r)return new Error("Property `"+a+"` of component `"+n+"` has invalid PropType notation.");var s=Q(e,"Array")(t,o,n);if(s instanceof Error)return s;for(var u=t[o],f=0;f<u.length;f++)if((s=r.apply(void 0,[u,f,n,i,a+"["+f+"]"].concat(c)))instanceof Error)return s;return null})})}var ee={observableArray:Q(!1,"Array"),observableArrayOf:Z.bind(null,!1),observableMap:Q(!1,"Map"),observableObject:Q(!1,"Object"),arrayOrObservableArray:Q(!0,"Array"),arrayOrObservableArrayOf:Z.bind(null,!0),objectOrObservableObject:Q(!0,"Object")};if(!react__WEBPACK_IMPORTED_MODULE_2__["Component"])throw new Error("mobx-react requires React to be available");if(!mobx__WEBPACK_IMPORTED_MODULE_3__["observable"])throw new Error("mobx-react requires mobx to be available");"function"==typeof react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]&&Object(mobx__WEBPACK_IMPORTED_MODULE_3__["configure"])({reactionScheduler:react_dom__WEBPACK_IMPORTED_MODULE_0__["unstable_batchedUpdates"]});
//# sourceMappingURL=mobx-react.module.js.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _stores_todolist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/todolist */ "./stores/todolist.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Lists = _stores_todolist__WEBPACK_IMPORTED_MODULE_7__["TodoList"];
var Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["inject"])("myStore")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      todoList = _useState2[0],
      setTodos = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_10__["autorun"])(function () {
      debugger;
      Lists.addTodo(props.obj);
    });
  }, [props.obj]); //  useEffect(()=>{
  //   Lists.addTodo(props.obj);
  //   // return ()=>{
  //   //   console.log("unmonunt");
  //   // }
  //  },[props.obj]);

  function onInput(val) {
    setValue(val);
  }

  var submitTodo = function submitTodo() {
    // Router.push('/about');
    var todos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);

    var obj = {
      name: value,
      id: new Date().toISOString(),
      status: "pending"
    };
    setTodos([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos), [obj]));
    Lists.addTodo(obj);
  };

  return __jsx("div", {
    className: "container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about"
  }, __jsx("a", {
    title: "about page"
  }, props.about)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/todos"
  }, __jsx("a", {
    title: "about page"
  }, "Todos Page")), __jsx("div", {
    className: "inputContainer"
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: onInput,
    submit: submitTodo
  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    todos: Lists.getTodos
  })));
}));

Index.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("init props started"); // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
          // const data = await res.json();
          // console.log(`Show data fetched. Count: ${data.length}`);
          // return {
          //   shows: data.map(entry => entry.show)
          // };

          return _context.abrupt("return", {
            about: "about",
            obj: {
              name: "first",
              id: new Date().toISOString(),
              status: "pending"
            }
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.22979bf676f1b5487138.hot-update.js.map