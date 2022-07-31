const uv=function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&e(g)}).observe(document,{childList:!0,subtree:!0});function Q(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=Q(t);fetch(t.href,n)}};uv();var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function F0(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var d={exports:{}},sA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yC=Symbol.for("react.element"),fv=Symbol.for("react.portal"),Uv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Rv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),Yv=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),qd=Symbol.iterator;function yv(A){return A===null||typeof A!="object"?null:(A=qd&&A[qd]||A["@@iterator"],typeof A=="function"?A:null)}var u0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d0=Object.assign,f0={};function sE(A,B,Q){this.props=A,this.context=B,this.refs=f0,this.updater=Q||u0}sE.prototype.isReactComponent={};sE.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")};sE.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function U0(){}U0.prototype=sE.prototype;function Jw(A,B,Q){this.props=A,this.context=B,this.refs=f0,this.updater=Q||u0}var Sw=Jw.prototype=new U0;Sw.constructor=Jw;d0(Sw,sE.prototype);Sw.isPureReactComponent=!0;var _d=Array.isArray,M0=Object.prototype.hasOwnProperty,Zw={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function p0(A,B,Q){var e,t={},n=null,g=null;if(B!=null)for(e in B.ref!==void 0&&(g=B.ref),B.key!==void 0&&(n=""+B.key),B)M0.call(B,e)&&!h0.hasOwnProperty(e)&&(t[e]=B[e]);var E=arguments.length-2;if(E===1)t.children=Q;else if(1<E){for(var r=Array(E),C=0;C<E;C++)r[C]=arguments[C+2];t.children=r}if(A&&A.defaultProps)for(e in E=A.defaultProps,E)t[e]===void 0&&(t[e]=E[e]);return{$$typeof:yC,type:A,key:n,ref:g,props:t,_owner:Zw.current}}function vv(A,B){return{$$typeof:yC,type:A.type,key:B,ref:A.ref,props:A.props,_owner:A._owner}}function Lw(A){return typeof A=="object"&&A!==null&&A.$$typeof===yC}function bv(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return B[Q]})}var $d=/\/+/g;function dI(A,B){return typeof A=="object"&&A!==null&&A.key!=null?bv(""+A.key):B.toString(36)}function qi(A,B,Q,e,t){var n=typeof A;(n==="undefined"||n==="boolean")&&(A=null);var g=!1;if(A===null)g=!0;else switch(n){case"string":case"number":g=!0;break;case"object":switch(A.$$typeof){case yC:case fv:g=!0}}if(g)return g=A,t=t(g),A=e===""?"."+dI(g,0):e,_d(t)?(Q="",A!=null&&(Q=A.replace($d,"$&/")+"/"),qi(t,B,Q,"",function(C){return C})):t!=null&&(Lw(t)&&(t=vv(t,Q+(!t.key||g&&g.key===t.key?"":(""+t.key).replace($d,"$&/")+"/")+A)),B.push(t)),1;if(g=0,e=e===""?".":e+":",_d(A))for(var E=0;E<A.length;E++){n=A[E];var r=e+dI(n,E);g+=qi(n,B,Q,r,t)}else if(r=yv(A),typeof r=="function")for(A=r.call(A),E=0;!(n=A.next()).done;)n=n.value,r=e+dI(n,E++),g+=qi(n,B,Q,r,t);else if(n==="object")throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return g}function fi(A,B,Q){if(A==null)return A;var e=[],t=0;return qi(A,e,"","",function(n){return B.call(Q,n,t++)}),e}function kv(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var jB={current:null},_i={transition:null},Jv={ReactCurrentDispatcher:jB,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Zw};sA.Children={map:fi,forEach:function(A,B,Q){fi(A,function(){B.apply(this,arguments)},Q)},count:function(A){var B=0;return fi(A,function(){B++}),B},toArray:function(A){return fi(A,function(B){return B})||[]},only:function(A){if(!Lw(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};sA.Component=sE;sA.Fragment=Uv;sA.Profiler=hv;sA.PureComponent=Jw;sA.StrictMode=Mv;sA.Suspense=mv;sA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;sA.cloneElement=function(A,B,Q){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var e=d0({},A.props),t=A.key,n=A.ref,g=A._owner;if(B!=null){if(B.ref!==void 0&&(n=B.ref,g=Zw.current),B.key!==void 0&&(t=""+B.key),A.type&&A.type.defaultProps)var E=A.type.defaultProps;for(r in B)M0.call(B,r)&&!h0.hasOwnProperty(r)&&(e[r]=B[r]===void 0&&E!==void 0?E[r]:B[r])}var r=arguments.length-2;if(r===1)e.children=Q;else if(1<r){E=Array(r);for(var C=0;C<r;C++)E[C]=arguments[C+2];e.children=E}return{$$typeof:yC,type:A.type,key:t,ref:n,props:e,_owner:g}};sA.createContext=function(A){return A={$$typeof:Gv,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:pv,_context:A},A.Consumer=A};sA.createElement=p0;sA.createFactory=function(A){var B=p0.bind(null,A);return B.type=A,B};sA.createRef=function(){return{current:null}};sA.forwardRef=function(A){return{$$typeof:Rv,render:A}};sA.isValidElement=Lw;sA.lazy=function(A){return{$$typeof:Nv,_payload:{_status:-1,_result:A},_init:kv}};sA.memo=function(A,B){return{$$typeof:Yv,type:A,compare:B===void 0?null:B}};sA.startTransition=function(A){var B=_i.transition;_i.transition={};try{A()}finally{_i.transition=B}};sA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};sA.useCallback=function(A,B){return jB.current.useCallback(A,B)};sA.useContext=function(A){return jB.current.useContext(A)};sA.useDebugValue=function(){};sA.useDeferredValue=function(A){return jB.current.useDeferredValue(A)};sA.useEffect=function(A,B){return jB.current.useEffect(A,B)};sA.useId=function(){return jB.current.useId()};sA.useImperativeHandle=function(A,B,Q){return jB.current.useImperativeHandle(A,B,Q)};sA.useInsertionEffect=function(A,B){return jB.current.useInsertionEffect(A,B)};sA.useLayoutEffect=function(A,B){return jB.current.useLayoutEffect(A,B)};sA.useMemo=function(A,B){return jB.current.useMemo(A,B)};sA.useReducer=function(A,B,Q){return jB.current.useReducer(A,B,Q)};sA.useRef=function(A){return jB.current.useRef(A)};sA.useState=function(A){return jB.current.useState(A)};sA.useSyncExternalStore=function(A,B,Q){return jB.current.useSyncExternalStore(A,B,Q)};sA.useTransition=function(){return jB.current.useTransition()};sA.version="18.2.0";(function(A){A.exports=sA})(d);const y=F0(d.exports);var Vl={},Te={exports:{}},UQ={},G0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function B(Z,O){var H=Z.length;Z.push(O);A:for(;0<H;){var gA=H-1>>>1,T=Z[gA];if(0<t(T,O))Z[gA]=O,Z[H]=T,H=gA;else break A}}function Q(Z){return Z.length===0?null:Z[0]}function e(Z){if(Z.length===0)return null;var O=Z[0],H=Z.pop();if(H!==O){Z[0]=H;A:for(var gA=0,T=Z.length,oA=T>>>1;gA<oA;){var cA=2*(gA+1)-1,_=Z[cA],CA=cA+1,vA=Z[CA];if(0>t(_,H))CA<T&&0>t(vA,_)?(Z[gA]=vA,Z[CA]=H,gA=CA):(Z[gA]=_,Z[cA]=H,gA=cA);else if(CA<T&&0>t(vA,H))Z[gA]=vA,Z[CA]=H,gA=CA;else break A}}return O}function t(Z,O){var H=Z.sortIndex-O.sortIndex;return H!==0?H:Z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;A.unstable_now=function(){return n.now()}}else{var g=Date,E=g.now();A.unstable_now=function(){return g.now()-E}}var r=[],C=[],i=1,o=null,a=3,s=!1,I=!1,D=!1,c=typeof setTimeout=="function"?setTimeout:null,l=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(Z){for(var O=Q(C);O!==null;){if(O.callback===null)e(C);else if(O.startTime<=Z)e(C),O.sortIndex=O.expirationTime,B(r,O);else break;O=Q(C)}}function f(Z){if(D=!1,u(Z),!I)if(Q(r)!==null)I=!0,nA(M);else{var O=Q(C);O!==null&&iA(f,O.startTime-Z)}}function M(Z,O){I=!1,D&&(D=!1,l(G),G=-1),s=!0;var H=a;try{for(u(O),o=Q(r);o!==null&&(!(o.expirationTime>O)||Z&&!S());){var gA=o.callback;if(typeof gA=="function"){o.callback=null,a=o.priorityLevel;var T=gA(o.expirationTime<=O);O=A.unstable_now(),typeof T=="function"?o.callback=T:o===Q(r)&&e(r),u(O)}else e(r);o=Q(r)}if(o!==null)var oA=!0;else{var cA=Q(C);cA!==null&&iA(f,cA.startTime-O),oA=!1}return oA}finally{o=null,a=H,s=!1}}var p=!1,h=null,G=-1,J=5,k=-1;function S(){return!(A.unstable_now()-k<J)}function W(){if(h!==null){var Z=A.unstable_now();k=Z;var O=!0;try{O=h(!0,Z)}finally{O?x():(p=!1,h=null)}}else p=!1}var x;if(typeof w=="function")x=function(){w(W)};else if(typeof MessageChannel<"u"){var tA=new MessageChannel,P=tA.port2;tA.port1.onmessage=W,x=function(){P.postMessage(null)}}else x=function(){c(W,0)};function nA(Z){h=Z,p||(p=!0,x())}function iA(Z,O){G=c(function(){Z(A.unstable_now())},O)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(Z){Z.callback=null},A.unstable_continueExecution=function(){I||s||(I=!0,nA(M))},A.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<Z?Math.floor(1e3/Z):5},A.unstable_getCurrentPriorityLevel=function(){return a},A.unstable_getFirstCallbackNode=function(){return Q(r)},A.unstable_next=function(Z){switch(a){case 1:case 2:case 3:var O=3;break;default:O=a}var H=a;a=O;try{return Z()}finally{a=H}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(Z,O){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var H=a;a=Z;try{return O()}finally{a=H}},A.unstable_scheduleCallback=function(Z,O,H){var gA=A.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?gA+H:gA):H=gA,Z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,Z={id:i++,callback:O,priorityLevel:Z,startTime:H,expirationTime:T,sortIndex:-1},H>gA?(Z.sortIndex=H,B(C,Z),Q(r)===null&&Z===Q(C)&&(D?(l(G),G=-1):D=!0,iA(f,H-gA))):(Z.sortIndex=T,B(r,Z),I||s||(I=!0,nA(M))),Z},A.unstable_shouldYield=S,A.unstable_wrapCallback=function(Z){var O=a;return function(){var H=a;a=O;try{return Z.apply(this,arguments)}finally{a=H}}}})(R0);(function(A){A.exports=R0})(G0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=d.exports,dQ=G0.exports;function L(A){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+A,Q=1;Q<arguments.length;Q++)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified React error #"+A+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,Wr={};function Kn(A,B){Pg(A,B),Pg(A+"Capture",B)}function Pg(A,B){for(Wr[A]=B,A=0;A<B.length;A++)Y0.add(B[A])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,Sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Af={},Bf={};function Zv(A){return xl.call(Bf,A)?!0:xl.call(Af,A)?!1:Sv.test(A)?Bf[A]=!0:(Af[A]=!0,!1)}function Lv(A,B,Q,e){if(Q!==null&&Q.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return e?!1:Q!==null?!Q.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Xv(A,B,Q,e){if(B===null||typeof B>"u"||Lv(A,B,Q,e))return!0;if(e)return!1;if(Q!==null)switch(Q.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function qB(A,B,Q,e,t,n,g){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=e,this.attributeNamespace=t,this.mustUseProperty=Q,this.propertyName=A,this.type=B,this.sanitizeURL=n,this.removeEmptyString=g}var RB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){RB[A]=new qB(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var B=A[0];RB[B]=new qB(B,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){RB[A]=new qB(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){RB[A]=new qB(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){RB[A]=new qB(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){RB[A]=new qB(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){RB[A]=new qB(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){RB[A]=new qB(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){RB[A]=new qB(A,5,!1,A.toLowerCase(),null,!1,!1)});var Xw=/[\-:]([a-z])/g;function Hw(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var B=A.replace(Xw,Hw);RB[B]=new qB(B,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var B=A.replace(Xw,Hw);RB[B]=new qB(B,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var B=A.replace(Xw,Hw);RB[B]=new qB(B,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){RB[A]=new qB(A,1,!1,A.toLowerCase(),null,!1,!1)});RB.xlinkHref=new qB("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){RB[A]=new qB(A,1,!1,A.toLowerCase(),null,!0,!0)});function Tw(A,B,Q,e){var t=RB.hasOwnProperty(B)?RB[B]:null;(t!==null?t.type!==0:e||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(Xv(B,Q,t,e)&&(Q=null),e||t===null?Zv(B)&&(Q===null?A.removeAttribute(B):A.setAttribute(B,""+Q)):t.mustUseProperty?A[t.propertyName]=Q===null?t.type===3?!1:"":Q:(B=t.attributeName,e=t.attributeNamespace,Q===null?A.removeAttribute(B):(t=t.type,Q=t===3||t===4&&Q===!0?"":""+Q,e?A.setAttributeNS(e,B,Q):A.setAttribute(B,Q))))}var et=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),Fg=Symbol.for("react.portal"),ug=Symbol.for("react.fragment"),Ww=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),Ow=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Vw=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),v0=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function PE(A){return A===null||typeof A!="object"?null:(A=Qf&&A[Qf]||A["@@iterator"],typeof A=="function"?A:null)}var zA=Object.assign,fI;function Cr(A){if(fI===void 0)try{throw Error()}catch(Q){var B=Q.stack.trim().match(/\n( *(at )?)/);fI=B&&B[1]||""}return`
`+fI+A}var UI=!1;function MI(A,B){if(!A||UI)return"";UI=!0;var Q=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(C){var e=C}Reflect.construct(A,[],B)}else{try{B.call()}catch(C){e=C}A.call(B.prototype)}else{try{throw Error()}catch(C){e=C}A()}}catch(C){if(C&&e&&typeof C.stack=="string"){for(var t=C.stack.split(`
`),n=e.stack.split(`
`),g=t.length-1,E=n.length-1;1<=g&&0<=E&&t[g]!==n[E];)E--;for(;1<=g&&0<=E;g--,E--)if(t[g]!==n[E]){if(g!==1||E!==1)do if(g--,E--,0>E||t[g]!==n[E]){var r=`
`+t[g].replace(" at new "," at ");return A.displayName&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",A.displayName)),r}while(1<=g&&0<=E);break}}}finally{UI=!1,Error.prepareStackTrace=Q}return(A=A?A.displayName||A.name:"")?Cr(A):""}function Hv(A){switch(A.tag){case 5:return Cr(A.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return A=MI(A.type,!1),A;case 11:return A=MI(A.type.render,!1),A;case 1:return A=MI(A.type,!0),A;default:return""}}function jl(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case ug:return"Fragment";case Fg:return"Portal";case zl:return"Profiler";case Ww:return"StrictMode";case Pl:return"Suspense";case Kl:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case y0:return(A.displayName||"Context")+".Consumer";case N0:return(A._context.displayName||"Context")+".Provider";case Ow:var B=A.render;return A=A.displayName,A||(A=B.displayName||B.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case Vw:return B=A.displayName||null,B!==null?B:jl(A.type)||"Memo";case st:B=A._payload,A=A._init;try{return jl(A(B))}catch{}}return null}function Tv(A){var B=A.type;switch(A.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=B.render,A=A.displayName||A.name||"",B.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jl(B);case 8:return B===Ww?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function Tt(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function b0(A){var B=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function Wv(A){var B=b0(A)?"checked":"value",Q=Object.getOwnPropertyDescriptor(A.constructor.prototype,B),e=""+A[B];if(!A.hasOwnProperty(B)&&typeof Q<"u"&&typeof Q.get=="function"&&typeof Q.set=="function"){var t=Q.get,n=Q.set;return Object.defineProperty(A,B,{configurable:!0,get:function(){return t.call(this)},set:function(g){e=""+g,n.call(this,g)}}),Object.defineProperty(A,B,{enumerable:Q.enumerable}),{getValue:function(){return e},setValue:function(g){e=""+g},stopTracking:function(){A._valueTracker=null,delete A[B]}}}}function Mi(A){A._valueTracker||(A._valueTracker=Wv(A))}function k0(A){if(!A)return!1;var B=A._valueTracker;if(!B)return!0;var Q=B.getValue(),e="";return A&&(e=b0(A)?A.checked?"true":"false":A.value),A=e,A!==Q?(B.setValue(A),!0):!1}function Do(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function ql(A,B){var Q=B.checked;return zA({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:Q!=null?Q:A._wrapperState.initialChecked})}function ef(A,B){var Q=B.defaultValue==null?"":B.defaultValue,e=B.checked!=null?B.checked:B.defaultChecked;Q=Tt(B.value!=null?B.value:Q),A._wrapperState={initialChecked:e,initialValue:Q,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function J0(A,B){B=B.checked,B!=null&&Tw(A,"checked",B,!1)}function _l(A,B){J0(A,B);var Q=Tt(B.value),e=B.type;if(Q!=null)e==="number"?(Q===0&&A.value===""||A.value!=Q)&&(A.value=""+Q):A.value!==""+Q&&(A.value=""+Q);else if(e==="submit"||e==="reset"){A.removeAttribute("value");return}B.hasOwnProperty("value")?$l(A,B.type,Q):B.hasOwnProperty("defaultValue")&&$l(A,B.type,Tt(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(A.defaultChecked=!!B.defaultChecked)}function tf(A,B,Q){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var e=B.type;if(!(e!=="submit"&&e!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+A._wrapperState.initialValue,Q||B===A.value||(A.value=B),A.defaultValue=B}Q=A.name,Q!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,Q!==""&&(A.name=Q)}function $l(A,B,Q){(B!=="number"||Do(A.ownerDocument)!==A)&&(Q==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+Q&&(A.defaultValue=""+Q))}var ir=Array.isArray;function bg(A,B,Q,e){if(A=A.options,B){B={};for(var t=0;t<Q.length;t++)B["$"+Q[t]]=!0;for(Q=0;Q<A.length;Q++)t=B.hasOwnProperty("$"+A[Q].value),A[Q].selected!==t&&(A[Q].selected=t),t&&e&&(A[Q].defaultSelected=!0)}else{for(Q=""+Tt(Q),B=null,t=0;t<A.length;t++){if(A[t].value===Q){A[t].selected=!0,e&&(A[t].defaultSelected=!0);return}B!==null||A[t].disabled||(B=A[t])}B!==null&&(B.selected=!0)}}function Ac(A,B){if(B.dangerouslySetInnerHTML!=null)throw Error(L(91));return zA({},B,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function nf(A,B){var Q=B.value;if(Q==null){if(Q=B.children,B=B.defaultValue,Q!=null){if(B!=null)throw Error(L(92));if(ir(Q)){if(1<Q.length)throw Error(L(93));Q=Q[0]}B=Q}B==null&&(B=""),Q=B}A._wrapperState={initialValue:Tt(Q)}}function S0(A,B){var Q=Tt(B.value),e=Tt(B.defaultValue);Q!=null&&(Q=""+Q,Q!==A.value&&(A.value=Q),B.defaultValue==null&&A.defaultValue!==Q&&(A.defaultValue=Q)),e!=null&&(A.defaultValue=""+e)}function gf(A){var B=A.textContent;B===A._wrapperState.initialValue&&B!==""&&B!==null&&(A.value=B)}function Z0(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(A,B){return A==null||A==="http://www.w3.org/1999/xhtml"?Z0(B):A==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var hi,L0=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,Q,e,t){MSApp.execUnsafeLocalFunction(function(){return A(B,Q,e,t)})}:A}(function(A,B){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=B;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=hi.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;B.firstChild;)A.appendChild(B.firstChild)}});function Or(A,B){if(B){var Q=A.firstChild;if(Q&&Q===A.lastChild&&Q.nodeType===3){Q.nodeValue=B;return}}A.textContent=B}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ov=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(A){Ov.forEach(function(B){B=B+A.charAt(0).toUpperCase()+A.substring(1),ur[B]=ur[A]})});function X0(A,B,Q){return B==null||typeof B=="boolean"||B===""?"":Q||typeof B!="number"||B===0||ur.hasOwnProperty(A)&&ur[A]?(""+B).trim():B+"px"}function H0(A,B){A=A.style;for(var Q in B)if(B.hasOwnProperty(Q)){var e=Q.indexOf("--")===0,t=X0(Q,B[Q],e);Q==="float"&&(Q="cssFloat"),e?A.setProperty(Q,t):A[Q]=t}}var Vv=zA({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(A,B){if(B){if(Vv[A]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(L(137,A));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(L(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(L(61))}if(B.style!=null&&typeof B.style!="object")throw Error(L(62))}}function ec(A,B){if(A.indexOf("-")===-1)return typeof B.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tc=null;function xw(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var nc=null,kg=null,Jg=null;function Ef(A){if(A=kC(A)){if(typeof nc!="function")throw Error(L(280));var B=A.stateNode;B&&(B=Sa(B),nc(A.stateNode,A.type,B))}}function T0(A){kg?Jg?Jg.push(A):Jg=[A]:kg=A}function W0(){if(kg){var A=kg,B=Jg;if(Jg=kg=null,Ef(A),B)for(A=0;A<B.length;A++)Ef(B[A])}}function O0(A,B){return A(B)}function V0(){}var hI=!1;function x0(A,B,Q){if(hI)return A(B,Q);hI=!0;try{return O0(A,B,Q)}finally{hI=!1,(kg!==null||Jg!==null)&&(V0(),W0())}}function Vr(A,B){var Q=A.stateNode;if(Q===null)return null;var e=Sa(Q);if(e===null)return null;Q=e[B];A:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(A=A.type,e=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!e;break A;default:A=!1}if(A)return null;if(Q&&typeof Q!="function")throw Error(L(231,B,typeof Q));return Q}var gc=!1;if(Ve)try{var KE={};Object.defineProperty(KE,"passive",{get:function(){gc=!0}}),window.addEventListener("test",KE,KE),window.removeEventListener("test",KE,KE)}catch{gc=!1}function xv(A,B,Q,e,t,n,g,E,r){var C=Array.prototype.slice.call(arguments,3);try{B.apply(Q,C)}catch(i){this.onError(i)}}var dr=!1,Fo=null,uo=!1,Ec=null,zv={onError:function(A){dr=!0,Fo=A}};function Pv(A,B,Q,e,t,n,g,E,r){dr=!1,Fo=null,xv.apply(zv,arguments)}function Kv(A,B,Q,e,t,n,g,E,r){if(Pv.apply(this,arguments),dr){if(dr){var C=Fo;dr=!1,Fo=null}else throw Error(L(198));uo||(uo=!0,Ec=C)}}function jn(A){var B=A,Q=A;if(A.alternate)for(;B.return;)B=B.return;else{A=B;do B=A,(B.flags&4098)!==0&&(Q=B.return),A=B.return;while(A)}return B.tag===3?Q:null}function z0(A){if(A.tag===13){var B=A.memoizedState;if(B===null&&(A=A.alternate,A!==null&&(B=A.memoizedState)),B!==null)return B.dehydrated}return null}function rf(A){if(jn(A)!==A)throw Error(L(188))}function jv(A){var B=A.alternate;if(!B){if(B=jn(A),B===null)throw Error(L(188));return B!==A?null:A}for(var Q=A,e=B;;){var t=Q.return;if(t===null)break;var n=t.alternate;if(n===null){if(e=t.return,e!==null){Q=e;continue}break}if(t.child===n.child){for(n=t.child;n;){if(n===Q)return rf(t),A;if(n===e)return rf(t),B;n=n.sibling}throw Error(L(188))}if(Q.return!==e.return)Q=t,e=n;else{for(var g=!1,E=t.child;E;){if(E===Q){g=!0,Q=t,e=n;break}if(E===e){g=!0,e=t,Q=n;break}E=E.sibling}if(!g){for(E=n.child;E;){if(E===Q){g=!0,Q=n,e=t;break}if(E===e){g=!0,e=n,Q=t;break}E=E.sibling}if(!g)throw Error(L(189))}}if(Q.alternate!==e)throw Error(L(190))}if(Q.tag!==3)throw Error(L(188));return Q.stateNode.current===Q?A:B}function P0(A){return A=jv(A),A!==null?K0(A):null}function K0(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var B=K0(A);if(B!==null)return B;A=A.sibling}return null}var j0=dQ.unstable_scheduleCallback,Cf=dQ.unstable_cancelCallback,qv=dQ.unstable_shouldYield,_v=dQ.unstable_requestPaint,AB=dQ.unstable_now,$v=dQ.unstable_getCurrentPriorityLevel,zw=dQ.unstable_ImmediatePriority,q0=dQ.unstable_UserBlockingPriority,fo=dQ.unstable_NormalPriority,Ab=dQ.unstable_LowPriority,_0=dQ.unstable_IdlePriority,va=null,ce=null;function Bb(A){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(va,A,void 0,(A.current.flags&128)===128)}catch{}}var PQ=Math.clz32?Math.clz32:tb,Qb=Math.log,eb=Math.LN2;function tb(A){return A>>>=0,A===0?32:31-(Qb(A)/eb|0)|0}var pi=64,Gi=4194304;function or(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Uo(A,B){var Q=A.pendingLanes;if(Q===0)return 0;var e=0,t=A.suspendedLanes,n=A.pingedLanes,g=Q&268435455;if(g!==0){var E=g&~t;E!==0?e=or(E):(n&=g,n!==0&&(e=or(n)))}else g=Q&~t,g!==0?e=or(g):n!==0&&(e=or(n));if(e===0)return 0;if(B!==0&&B!==e&&(B&t)===0&&(t=e&-e,n=B&-B,t>=n||t===16&&(n&4194240)!==0))return B;if((e&4)!==0&&(e|=Q&16),B=A.entangledLanes,B!==0)for(A=A.entanglements,B&=e;0<B;)Q=31-PQ(B),t=1<<Q,e|=A[Q],B&=~t;return e}function nb(A,B){switch(A){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gb(A,B){for(var Q=A.suspendedLanes,e=A.pingedLanes,t=A.expirationTimes,n=A.pendingLanes;0<n;){var g=31-PQ(n),E=1<<g,r=t[g];r===-1?((E&Q)===0||(E&e)!==0)&&(t[g]=nb(E,B)):r<=B&&(A.expiredLanes|=E),n&=~E}}function rc(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function $0(){var A=pi;return pi<<=1,(pi&4194240)===0&&(pi=64),A}function pI(A){for(var B=[],Q=0;31>Q;Q++)B.push(A);return B}function vC(A,B,Q){A.pendingLanes|=B,B!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,B=31-PQ(B),A[B]=Q}function Eb(A,B){var Q=A.pendingLanes&~B;A.pendingLanes=B,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=B,A.mutableReadLanes&=B,A.entangledLanes&=B,B=A.entanglements;var e=A.eventTimes;for(A=A.expirationTimes;0<Q;){var t=31-PQ(Q),n=1<<t;B[t]=0,e[t]=-1,A[t]=-1,Q&=~n}}function Pw(A,B){var Q=A.entangledLanes|=B;for(A=A.entanglements;Q;){var e=31-PQ(Q),t=1<<e;t&B|A[e]&B&&(A[e]|=B),Q&=~t}}var mA=0;function Ap(A){return A&=-A,1<A?4<A?(A&268435455)!==0?16:536870912:4:1}var Bp,Kw,Qp,ep,tp,Cc=!1,Ri=[],Nt=null,yt=null,vt=null,xr=new Map,zr=new Map,wt=[],rb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(A,B){switch(A){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":xr.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":zr.delete(B.pointerId)}}function jE(A,B,Q,e,t,n){return A===null||A.nativeEvent!==n?(A={blockedOn:B,domEventName:Q,eventSystemFlags:e,nativeEvent:n,targetContainers:[t]},B!==null&&(B=kC(B),B!==null&&Kw(B)),A):(A.eventSystemFlags|=e,B=A.targetContainers,t!==null&&B.indexOf(t)===-1&&B.push(t),A)}function Cb(A,B,Q,e,t){switch(B){case"focusin":return Nt=jE(Nt,A,B,Q,e,t),!0;case"dragenter":return yt=jE(yt,A,B,Q,e,t),!0;case"mouseover":return vt=jE(vt,A,B,Q,e,t),!0;case"pointerover":var n=t.pointerId;return xr.set(n,jE(xr.get(n)||null,A,B,Q,e,t)),!0;case"gotpointercapture":return n=t.pointerId,zr.set(n,jE(zr.get(n)||null,A,B,Q,e,t)),!0}return!1}function np(A){var B=cn(A.target);if(B!==null){var Q=jn(B);if(Q!==null){if(B=Q.tag,B===13){if(B=z0(Q),B!==null){A.blockedOn=B,tp(A.priority,function(){Qp(Q)});return}}else if(B===3&&Q.stateNode.current.memoizedState.isDehydrated){A.blockedOn=Q.tag===3?Q.stateNode.containerInfo:null;return}}}A.blockedOn=null}function $i(A){if(A.blockedOn!==null)return!1;for(var B=A.targetContainers;0<B.length;){var Q=ic(A.domEventName,A.eventSystemFlags,B[0],A.nativeEvent);if(Q===null){Q=A.nativeEvent;var e=new Q.constructor(Q.type,Q);tc=e,Q.target.dispatchEvent(e),tc=null}else return B=kC(Q),B!==null&&Kw(B),A.blockedOn=Q,!1;B.shift()}return!0}function af(A,B,Q){$i(A)&&Q.delete(B)}function ib(){Cc=!1,Nt!==null&&$i(Nt)&&(Nt=null),yt!==null&&$i(yt)&&(yt=null),vt!==null&&$i(vt)&&(vt=null),xr.forEach(af),zr.forEach(af)}function qE(A,B){A.blockedOn===B&&(A.blockedOn=null,Cc||(Cc=!0,dQ.unstable_scheduleCallback(dQ.unstable_NormalPriority,ib)))}function Pr(A){function B(t){return qE(t,A)}if(0<Ri.length){qE(Ri[0],A);for(var Q=1;Q<Ri.length;Q++){var e=Ri[Q];e.blockedOn===A&&(e.blockedOn=null)}}for(Nt!==null&&qE(Nt,A),yt!==null&&qE(yt,A),vt!==null&&qE(vt,A),xr.forEach(B),zr.forEach(B),Q=0;Q<wt.length;Q++)e=wt[Q],e.blockedOn===A&&(e.blockedOn=null);for(;0<wt.length&&(Q=wt[0],Q.blockedOn===null);)np(Q),Q.blockedOn===null&&wt.shift()}var Sg=et.ReactCurrentBatchConfig,Mo=!0;function ob(A,B,Q,e){var t=mA,n=Sg.transition;Sg.transition=null;try{mA=1,jw(A,B,Q,e)}finally{mA=t,Sg.transition=n}}function ab(A,B,Q,e){var t=mA,n=Sg.transition;Sg.transition=null;try{mA=4,jw(A,B,Q,e)}finally{mA=t,Sg.transition=n}}function jw(A,B,Q,e){if(Mo){var t=ic(A,B,Q,e);if(t===null)JI(A,B,e,ho,Q),of(A,e);else if(Cb(t,A,B,Q,e))e.stopPropagation();else if(of(A,e),B&4&&-1<rb.indexOf(A)){for(;t!==null;){var n=kC(t);if(n!==null&&Bp(n),n=ic(A,B,Q,e),n===null&&JI(A,B,e,ho,Q),n===t)break;t=n}t!==null&&e.stopPropagation()}else JI(A,B,e,null,Q)}}var ho=null;function ic(A,B,Q,e){if(ho=null,A=xw(e),A=cn(A),A!==null)if(B=jn(A),B===null)A=null;else if(Q=B.tag,Q===13){if(A=z0(B),A!==null)return A;A=null}else if(Q===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;A=null}else B!==A&&(A=null);return ho=A,null}function gp(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case zw:return 1;case q0:return 4;case fo:case Ab:return 16;case _0:return 536870912;default:return 16}default:return 16}}var Mt=null,qw=null,Ao=null;function Ep(){if(Ao)return Ao;var A,B=qw,Q=B.length,e,t="value"in Mt?Mt.value:Mt.textContent,n=t.length;for(A=0;A<Q&&B[A]===t[A];A++);var g=Q-A;for(e=1;e<=g&&B[Q-e]===t[n-e];e++);return Ao=t.slice(A,1<e?1-e:void 0)}function Bo(A){var B=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&B===13&&(A=13)):A=B,A===10&&(A=13),32<=A||A===13?A:0}function mi(){return!0}function sf(){return!1}function MQ(A){function B(Q,e,t,n,g){this._reactName=Q,this._targetInst=t,this.type=e,this.nativeEvent=n,this.target=g,this.currentTarget=null;for(var E in A)A.hasOwnProperty(E)&&(Q=A[E],this[E]=Q?Q(n):n[E]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?mi:sf,this.isPropagationStopped=sf,this}return zA(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Q=this.nativeEvent;Q&&(Q.preventDefault?Q.preventDefault():typeof Q.returnValue!="unknown"&&(Q.returnValue=!1),this.isDefaultPrevented=mi)},stopPropagation:function(){var Q=this.nativeEvent;Q&&(Q.stopPropagation?Q.stopPropagation():typeof Q.cancelBubble!="unknown"&&(Q.cancelBubble=!0),this.isPropagationStopped=mi)},persist:function(){},isPersistent:mi}),B}var IE={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_w=MQ(IE),bC=zA({},IE,{view:0,detail:0}),sb=MQ(bC),GI,RI,_E,ba=zA({},bC,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$w,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==_E&&(_E&&A.type==="mousemove"?(GI=A.screenX-_E.screenX,RI=A.screenY-_E.screenY):RI=GI=0,_E=A),GI)},movementY:function(A){return"movementY"in A?A.movementY:RI}}),If=MQ(ba),Ib=zA({},ba,{dataTransfer:0}),lb=MQ(Ib),cb=zA({},bC,{relatedTarget:0}),mI=MQ(cb),wb=zA({},IE,{animationName:0,elapsedTime:0,pseudoElement:0}),Db=MQ(wb),Fb=zA({},IE,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),ub=MQ(Fb),db=zA({},IE,{data:0}),lf=MQ(db),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hb(A){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(A):(A=Mb[A])?!!B[A]:!1}function $w(){return hb}var pb=zA({},bC,{key:function(A){if(A.key){var B=fb[A.key]||A.key;if(B!=="Unidentified")return B}return A.type==="keypress"?(A=Bo(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?Ub[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$w,charCode:function(A){return A.type==="keypress"?Bo(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Bo(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Gb=MQ(pb),Rb=zA({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=MQ(Rb),mb=zA({},bC,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$w}),Yb=MQ(mb),Nb=zA({},IE,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=MQ(Nb),vb=zA({},ba,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),bb=MQ(vb),kb=[9,13,27,32],AD=Ve&&"CompositionEvent"in window,fr=null;Ve&&"documentMode"in document&&(fr=document.documentMode);var Jb=Ve&&"TextEvent"in window&&!fr,rp=Ve&&(!AD||fr&&8<fr&&11>=fr),wf=String.fromCharCode(32),Df=!1;function Cp(A,B){switch(A){case"keyup":return kb.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var dg=!1;function Sb(A,B){switch(A){case"compositionend":return ip(B);case"keypress":return B.which!==32?null:(Df=!0,wf);case"textInput":return A=B.data,A===wf&&Df?null:A;default:return null}}function Zb(A,B){if(dg)return A==="compositionend"||!AD&&Cp(A,B)?(A=Ep(),Ao=qw=Mt=null,dg=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return rp&&B.locale!=="ko"?null:B.data;default:return null}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B==="input"?!!Lb[A.type]:B==="textarea"}function op(A,B,Q,e){T0(e),B=po(B,"onChange"),0<B.length&&(Q=new _w("onChange","change",null,Q,e),A.push({event:Q,listeners:B}))}var Ur=null,Kr=null;function Xb(A){fp(A,0)}function ka(A){var B=Mg(A);if(k0(B))return A}function Hb(A,B){if(A==="change")return B}var ap=!1;if(Ve){var YI;if(Ve){var NI="oninput"in document;if(!NI){var uf=document.createElement("div");uf.setAttribute("oninput","return;"),NI=typeof uf.oninput=="function"}YI=NI}else YI=!1;ap=YI&&(!document.documentMode||9<document.documentMode)}function df(){Ur&&(Ur.detachEvent("onpropertychange",sp),Kr=Ur=null)}function sp(A){if(A.propertyName==="value"&&ka(Kr)){var B=[];op(B,Kr,A,xw(A)),x0(Xb,B)}}function Tb(A,B,Q){A==="focusin"?(df(),Ur=B,Kr=Q,Ur.attachEvent("onpropertychange",sp)):A==="focusout"&&df()}function Wb(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return ka(Kr)}function Ob(A,B){if(A==="click")return ka(B)}function Vb(A,B){if(A==="input"||A==="change")return ka(B)}function xb(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var $Q=typeof Object.is=="function"?Object.is:xb;function jr(A,B){if($Q(A,B))return!0;if(typeof A!="object"||A===null||typeof B!="object"||B===null)return!1;var Q=Object.keys(A),e=Object.keys(B);if(Q.length!==e.length)return!1;for(e=0;e<Q.length;e++){var t=Q[e];if(!xl.call(B,t)||!$Q(A[t],B[t]))return!1}return!0}function ff(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Uf(A,B){var Q=ff(A);A=0;for(var e;Q;){if(Q.nodeType===3){if(e=A+Q.textContent.length,A<=B&&e>=B)return{node:Q,offset:B-A};A=e}A:{for(;Q;){if(Q.nextSibling){Q=Q.nextSibling;break A}Q=Q.parentNode}Q=void 0}Q=ff(Q)}}function Ip(A,B){return A&&B?A===B?!0:A&&A.nodeType===3?!1:B&&B.nodeType===3?Ip(A,B.parentNode):"contains"in A?A.contains(B):A.compareDocumentPosition?!!(A.compareDocumentPosition(B)&16):!1:!1}function lp(){for(var A=window,B=Do();B instanceof A.HTMLIFrameElement;){try{var Q=typeof B.contentWindow.location.href=="string"}catch{Q=!1}if(Q)A=B.contentWindow;else break;B=Do(A.document)}return B}function BD(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B&&(B==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||B==="textarea"||A.contentEditable==="true")}function zb(A){var B=lp(),Q=A.focusedElem,e=A.selectionRange;if(B!==Q&&Q&&Q.ownerDocument&&Ip(Q.ownerDocument.documentElement,Q)){if(e!==null&&BD(Q)){if(B=e.start,A=e.end,A===void 0&&(A=B),"selectionStart"in Q)Q.selectionStart=B,Q.selectionEnd=Math.min(A,Q.value.length);else if(A=(B=Q.ownerDocument||document)&&B.defaultView||window,A.getSelection){A=A.getSelection();var t=Q.textContent.length,n=Math.min(e.start,t);e=e.end===void 0?n:Math.min(e.end,t),!A.extend&&n>e&&(t=e,e=n,n=t),t=Uf(Q,n);var g=Uf(Q,e);t&&g&&(A.rangeCount!==1||A.anchorNode!==t.node||A.anchorOffset!==t.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)&&(B=B.createRange(),B.setStart(t.node,t.offset),A.removeAllRanges(),n>e?(A.addRange(B),A.extend(g.node,g.offset)):(B.setEnd(g.node,g.offset),A.addRange(B)))}}for(B=[],A=Q;A=A.parentNode;)A.nodeType===1&&B.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof Q.focus=="function"&&Q.focus(),Q=0;Q<B.length;Q++)A=B[Q],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var Pb=Ve&&"documentMode"in document&&11>=document.documentMode,fg=null,oc=null,Mr=null,ac=!1;function Mf(A,B,Q){var e=Q.window===Q?Q.document:Q.nodeType===9?Q:Q.ownerDocument;ac||fg==null||fg!==Do(e)||(e=fg,"selectionStart"in e&&BD(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Mr&&jr(Mr,e)||(Mr=e,e=po(oc,"onSelect"),0<e.length&&(B=new _w("onSelect","select",null,B,Q),A.push({event:B,listeners:e}),B.target=fg)))}function Yi(A,B){var Q={};return Q[A.toLowerCase()]=B.toLowerCase(),Q["Webkit"+A]="webkit"+B,Q["Moz"+A]="moz"+B,Q}var Ug={animationend:Yi("Animation","AnimationEnd"),animationiteration:Yi("Animation","AnimationIteration"),animationstart:Yi("Animation","AnimationStart"),transitionend:Yi("Transition","TransitionEnd")},yI={},cp={};Ve&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ug.animationend.animation,delete Ug.animationiteration.animation,delete Ug.animationstart.animation),"TransitionEvent"in window||delete Ug.transitionend.transition);function Ja(A){if(yI[A])return yI[A];if(!Ug[A])return A;var B=Ug[A],Q;for(Q in B)if(B.hasOwnProperty(Q)&&Q in cp)return yI[A]=B[Q];return A}var wp=Ja("animationend"),Dp=Ja("animationiteration"),Fp=Ja("animationstart"),up=Ja("transitionend"),dp=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(A,B){dp.set(A,B),Kn(B,[A])}for(var vI=0;vI<hf.length;vI++){var bI=hf[vI],Kb=bI.toLowerCase(),jb=bI[0].toUpperCase()+bI.slice(1);zt(Kb,"on"+jb)}zt(wp,"onAnimationEnd");zt(Dp,"onAnimationIteration");zt(Fp,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(up,"onTransitionEnd");Pg("onMouseEnter",["mouseout","mouseover"]);Pg("onMouseLeave",["mouseout","mouseover"]);Pg("onPointerEnter",["pointerout","pointerover"]);Pg("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function pf(A,B,Q){var e=A.type||"unknown-event";A.currentTarget=Q,Kv(e,B,void 0,A),A.currentTarget=null}function fp(A,B){B=(B&4)!==0;for(var Q=0;Q<A.length;Q++){var e=A[Q],t=e.event;e=e.listeners;A:{var n=void 0;if(B)for(var g=e.length-1;0<=g;g--){var E=e[g],r=E.instance,C=E.currentTarget;if(E=E.listener,r!==n&&t.isPropagationStopped())break A;pf(t,E,C),n=r}else for(g=0;g<e.length;g++){if(E=e[g],r=E.instance,C=E.currentTarget,E=E.listener,r!==n&&t.isPropagationStopped())break A;pf(t,E,C),n=r}}}if(uo)throw A=Ec,uo=!1,Ec=null,A}function kA(A,B){var Q=B[wc];Q===void 0&&(Q=B[wc]=new Set);var e=A+"__bubble";Q.has(e)||(Up(B,A,2,!1),Q.add(e))}function kI(A,B,Q){var e=0;B&&(e|=4),Up(Q,A,e,B)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function qr(A){if(!A[Ni]){A[Ni]=!0,Y0.forEach(function(Q){Q!=="selectionchange"&&(qb.has(Q)||kI(Q,!1,A),kI(Q,!0,A))});var B=A.nodeType===9?A:A.ownerDocument;B===null||B[Ni]||(B[Ni]=!0,kI("selectionchange",!1,B))}}function Up(A,B,Q,e){switch(gp(B)){case 1:var t=ob;break;case 4:t=ab;break;default:t=jw}Q=t.bind(null,B,Q,A),t=void 0,!gc||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(t=!0),e?t!==void 0?A.addEventListener(B,Q,{capture:!0,passive:t}):A.addEventListener(B,Q,!0):t!==void 0?A.addEventListener(B,Q,{passive:t}):A.addEventListener(B,Q,!1)}function JI(A,B,Q,e,t){var n=e;if((B&1)===0&&(B&2)===0&&e!==null)A:for(;;){if(e===null)return;var g=e.tag;if(g===3||g===4){var E=e.stateNode.containerInfo;if(E===t||E.nodeType===8&&E.parentNode===t)break;if(g===4)for(g=e.return;g!==null;){var r=g.tag;if((r===3||r===4)&&(r=g.stateNode.containerInfo,r===t||r.nodeType===8&&r.parentNode===t))return;g=g.return}for(;E!==null;){if(g=cn(E),g===null)return;if(r=g.tag,r===5||r===6){e=n=g;continue A}E=E.parentNode}}e=e.return}x0(function(){var C=n,i=xw(Q),o=[];A:{var a=dp.get(A);if(a!==void 0){var s=_w,I=A;switch(A){case"keypress":if(Bo(Q)===0)break A;case"keydown":case"keyup":s=Gb;break;case"focusin":I="focus",s=mI;break;case"focusout":I="blur",s=mI;break;case"beforeblur":case"afterblur":s=mI;break;case"click":if(Q.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=lb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Yb;break;case wp:case Dp:case Fp:s=Db;break;case up:s=yb;break;case"scroll":s=sb;break;case"wheel":s=bb;break;case"copy":case"cut":case"paste":s=ub;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=cf}var D=(B&4)!==0,c=!D&&A==="scroll",l=D?a!==null?a+"Capture":null:a;D=[];for(var w=C,u;w!==null;){u=w;var f=u.stateNode;if(u.tag===5&&f!==null&&(u=f,l!==null&&(f=Vr(w,l),f!=null&&D.push(_r(w,f,u)))),c)break;w=w.return}0<D.length&&(a=new s(a,I,null,Q,i),o.push({event:a,listeners:D}))}}if((B&7)===0){A:{if(a=A==="mouseover"||A==="pointerover",s=A==="mouseout"||A==="pointerout",a&&Q!==tc&&(I=Q.relatedTarget||Q.fromElement)&&(cn(I)||I[xe]))break A;if((s||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,s?(I=Q.relatedTarget||Q.toElement,s=C,I=I?cn(I):null,I!==null&&(c=jn(I),I!==c||I.tag!==5&&I.tag!==6)&&(I=null)):(s=null,I=C),s!==I)){if(D=If,f="onMouseLeave",l="onMouseEnter",w="mouse",(A==="pointerout"||A==="pointerover")&&(D=cf,f="onPointerLeave",l="onPointerEnter",w="pointer"),c=s==null?a:Mg(s),u=I==null?a:Mg(I),a=new D(f,w+"leave",s,Q,i),a.target=c,a.relatedTarget=u,f=null,cn(i)===C&&(D=new D(l,w+"enter",I,Q,i),D.target=u,D.relatedTarget=c,f=D),c=f,s&&I)B:{for(D=s,l=I,w=0,u=D;u;u=og(u))w++;for(u=0,f=l;f;f=og(f))u++;for(;0<w-u;)D=og(D),w--;for(;0<u-w;)l=og(l),u--;for(;w--;){if(D===l||l!==null&&D===l.alternate)break B;D=og(D),l=og(l)}D=null}else D=null;s!==null&&Gf(o,a,s,D,!1),I!==null&&c!==null&&Gf(o,c,I,D,!0)}}A:{if(a=C?Mg(C):window,s=a.nodeName&&a.nodeName.toLowerCase(),s==="select"||s==="input"&&a.type==="file")var M=Hb;else if(Ff(a))if(ap)M=Vb;else{M=Wb;var p=Tb}else(s=a.nodeName)&&s.toLowerCase()==="input"&&(a.type==="checkbox"||a.type==="radio")&&(M=Ob);if(M&&(M=M(A,C))){op(o,M,Q,i);break A}p&&p(A,a,C),A==="focusout"&&(p=a._wrapperState)&&p.controlled&&a.type==="number"&&$l(a,"number",a.value)}switch(p=C?Mg(C):window,A){case"focusin":(Ff(p)||p.contentEditable==="true")&&(fg=p,oc=C,Mr=null);break;case"focusout":Mr=oc=fg=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Mf(o,Q,i);break;case"selectionchange":if(Pb)break;case"keydown":case"keyup":Mf(o,Q,i)}var h;if(AD)A:{switch(A){case"compositionstart":var G="onCompositionStart";break A;case"compositionend":G="onCompositionEnd";break A;case"compositionupdate":G="onCompositionUpdate";break A}G=void 0}else dg?Cp(A,Q)&&(G="onCompositionEnd"):A==="keydown"&&Q.keyCode===229&&(G="onCompositionStart");G&&(rp&&Q.locale!=="ko"&&(dg||G!=="onCompositionStart"?G==="onCompositionEnd"&&dg&&(h=Ep()):(Mt=i,qw="value"in Mt?Mt.value:Mt.textContent,dg=!0)),p=po(C,G),0<p.length&&(G=new lf(G,A,null,Q,i),o.push({event:G,listeners:p}),h?G.data=h:(h=ip(Q),h!==null&&(G.data=h)))),(h=Jb?Sb(A,Q):Zb(A,Q))&&(C=po(C,"onBeforeInput"),0<C.length&&(i=new lf("onBeforeInput","beforeinput",null,Q,i),o.push({event:i,listeners:C}),i.data=h))}fp(o,B)})}function _r(A,B,Q){return{instance:A,listener:B,currentTarget:Q}}function po(A,B){for(var Q=B+"Capture",e=[];A!==null;){var t=A,n=t.stateNode;t.tag===5&&n!==null&&(t=n,n=Vr(A,Q),n!=null&&e.unshift(_r(A,n,t)),n=Vr(A,B),n!=null&&e.push(_r(A,n,t))),A=A.return}return e}function og(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function Gf(A,B,Q,e,t){for(var n=B._reactName,g=[];Q!==null&&Q!==e;){var E=Q,r=E.alternate,C=E.stateNode;if(r!==null&&r===e)break;E.tag===5&&C!==null&&(E=C,t?(r=Vr(Q,n),r!=null&&g.unshift(_r(Q,r,E))):t||(r=Vr(Q,n),r!=null&&g.push(_r(Q,r,E)))),Q=Q.return}g.length!==0&&A.push({event:B,listeners:g})}var _b=/\r\n?/g,$b=/\u0000|\uFFFD/g;function Rf(A){return(typeof A=="string"?A:""+A).replace(_b,`
`).replace($b,"")}function yi(A,B,Q){if(B=Rf(B),Rf(A)!==B&&Q)throw Error(L(425))}function Go(){}var sc=null,Ic=null;function lc(A,B){return A==="textarea"||A==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,Ak=typeof clearTimeout=="function"?clearTimeout:void 0,mf=typeof Promise=="function"?Promise:void 0,Bk=typeof queueMicrotask=="function"?queueMicrotask:typeof mf<"u"?function(A){return mf.resolve(null).then(A).catch(Qk)}:cc;function Qk(A){setTimeout(function(){throw A})}function SI(A,B){var Q=B,e=0;do{var t=Q.nextSibling;if(A.removeChild(Q),t&&t.nodeType===8)if(Q=t.data,Q==="/$"){if(e===0){A.removeChild(t),Pr(B);return}e--}else Q!=="$"&&Q!=="$?"&&Q!=="$!"||e++;Q=t}while(Q);Pr(B)}function bt(A){for(;A!=null;A=A.nextSibling){var B=A.nodeType;if(B===1||B===3)break;if(B===8){if(B=A.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return A}function Yf(A){A=A.previousSibling;for(var B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="$"||Q==="$!"||Q==="$?"){if(B===0)return A;B--}else Q==="/$"&&B++}A=A.previousSibling}return null}var lE=Math.random().toString(36).slice(2),ie="__reactFiber$"+lE,$r="__reactProps$"+lE,xe="__reactContainer$"+lE,wc="__reactEvents$"+lE,ek="__reactListeners$"+lE,tk="__reactHandles$"+lE;function cn(A){var B=A[ie];if(B)return B;for(var Q=A.parentNode;Q;){if(B=Q[xe]||Q[ie]){if(Q=B.alternate,B.child!==null||Q!==null&&Q.child!==null)for(A=Yf(A);A!==null;){if(Q=A[ie])return Q;A=Yf(A)}return B}A=Q,Q=A.parentNode}return null}function kC(A){return A=A[ie]||A[xe],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function Mg(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(L(33))}function Sa(A){return A[$r]||null}var Dc=[],hg=-1;function Pt(A){return{current:A}}function JA(A){0>hg||(A.current=Dc[hg],Dc[hg]=null,hg--)}function bA(A,B){hg++,Dc[hg]=A.current,A.current=B}var Wt={},SB=Pt(Wt),EQ=Pt(!1),bn=Wt;function Kg(A,B){var Q=A.type.contextTypes;if(!Q)return Wt;var e=A.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===B)return e.__reactInternalMemoizedMaskedChildContext;var t={},n;for(n in Q)t[n]=B[n];return e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=B,A.__reactInternalMemoizedMaskedChildContext=t),t}function rQ(A){return A=A.childContextTypes,A!=null}function Ro(){JA(EQ),JA(SB)}function Nf(A,B,Q){if(SB.current!==Wt)throw Error(L(168));bA(SB,B),bA(EQ,Q)}function Mp(A,B,Q){var e=A.stateNode;if(B=B.childContextTypes,typeof e.getChildContext!="function")return Q;e=e.getChildContext();for(var t in e)if(!(t in B))throw Error(L(108,Tv(A)||"Unknown",t));return zA({},Q,e)}function mo(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||Wt,bn=SB.current,bA(SB,A),bA(EQ,EQ.current),!0}function yf(A,B,Q){var e=A.stateNode;if(!e)throw Error(L(169));Q?(A=Mp(A,B,bn),e.__reactInternalMemoizedMergedChildContext=A,JA(EQ),JA(SB),bA(SB,A)):JA(EQ),bA(EQ,Q)}var ve=null,Za=!1,ZI=!1;function hp(A){ve===null?ve=[A]:ve.push(A)}function nk(A){Za=!0,hp(A)}function Kt(){if(!ZI&&ve!==null){ZI=!0;var A=0,B=mA;try{var Q=ve;for(mA=1;A<Q.length;A++){var e=Q[A];do e=e(!0);while(e!==null)}ve=null,Za=!1}catch(t){throw ve!==null&&(ve=ve.slice(A+1)),j0(zw,Kt),t}finally{mA=B,ZI=!1}}return null}var pg=[],Gg=0,Yo=null,No=0,mQ=[],YQ=0,kn=null,Je=1,Se="";function Cn(A,B){pg[Gg++]=No,pg[Gg++]=Yo,Yo=A,No=B}function pp(A,B,Q){mQ[YQ++]=Je,mQ[YQ++]=Se,mQ[YQ++]=kn,kn=A;var e=Je;A=Se;var t=32-PQ(e)-1;e&=~(1<<t),Q+=1;var n=32-PQ(B)+t;if(30<n){var g=t-t%5;n=(e&(1<<g)-1).toString(32),e>>=g,t-=g,Je=1<<32-PQ(B)+t|Q<<t|e,Se=n+A}else Je=1<<n|Q<<t|e,Se=A}function QD(A){A.return!==null&&(Cn(A,1),pp(A,1,0))}function eD(A){for(;A===Yo;)Yo=pg[--Gg],pg[Gg]=null,No=pg[--Gg],pg[Gg]=null;for(;A===kn;)kn=mQ[--YQ],mQ[YQ]=null,Se=mQ[--YQ],mQ[YQ]=null,Je=mQ[--YQ],mQ[YQ]=null}var uQ=null,DQ=null,LA=!1,VQ=null;function Gp(A,B){var Q=NQ(5,null,null,0);Q.elementType="DELETED",Q.stateNode=B,Q.return=A,B=A.deletions,B===null?(A.deletions=[Q],A.flags|=16):B.push(Q)}function vf(A,B){switch(A.tag){case 5:var Q=A.type;return B=B.nodeType!==1||Q.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(A.stateNode=B,uQ=A,DQ=bt(B.firstChild),!0):!1;case 6:return B=A.pendingProps===""||B.nodeType!==3?null:B,B!==null?(A.stateNode=B,uQ=A,DQ=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(Q=kn!==null?{id:Je,overflow:Se}:null,A.memoizedState={dehydrated:B,treeContext:Q,retryLane:1073741824},Q=NQ(18,null,null,0),Q.stateNode=B,Q.return=A,A.child=Q,uQ=A,DQ=null,!0):!1;default:return!1}}function Fc(A){return(A.mode&1)!==0&&(A.flags&128)===0}function uc(A){if(LA){var B=DQ;if(B){var Q=B;if(!vf(A,B)){if(Fc(A))throw Error(L(418));B=bt(Q.nextSibling);var e=uQ;B&&vf(A,B)?Gp(e,Q):(A.flags=A.flags&-4097|2,LA=!1,uQ=A)}}else{if(Fc(A))throw Error(L(418));A.flags=A.flags&-4097|2,LA=!1,uQ=A}}}function bf(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;uQ=A}function vi(A){if(A!==uQ)return!1;if(!LA)return bf(A),LA=!0,!1;var B;if((B=A.tag!==3)&&!(B=A.tag!==5)&&(B=A.type,B=B!=="head"&&B!=="body"&&!lc(A.type,A.memoizedProps)),B&&(B=DQ)){if(Fc(A))throw Rp(),Error(L(418));for(;B;)Gp(A,B),B=bt(B.nextSibling)}if(bf(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(L(317));A:{for(A=A.nextSibling,B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="/$"){if(B===0){DQ=bt(A.nextSibling);break A}B--}else Q!=="$"&&Q!=="$!"&&Q!=="$?"||B++}A=A.nextSibling}DQ=null}}else DQ=uQ?bt(A.stateNode.nextSibling):null;return!0}function Rp(){for(var A=DQ;A;)A=bt(A.nextSibling)}function jg(){DQ=uQ=null,LA=!1}function tD(A){VQ===null?VQ=[A]:VQ.push(A)}var gk=et.ReactCurrentBatchConfig;function WQ(A,B){if(A&&A.defaultProps){B=zA({},B),A=A.defaultProps;for(var Q in A)B[Q]===void 0&&(B[Q]=A[Q]);return B}return B}var yo=Pt(null),vo=null,Rg=null,nD=null;function gD(){nD=Rg=vo=null}function ED(A){var B=yo.current;JA(yo),A._currentValue=B}function dc(A,B,Q){for(;A!==null;){var e=A.alternate;if((A.childLanes&B)!==B?(A.childLanes|=B,e!==null&&(e.childLanes|=B)):e!==null&&(e.childLanes&B)!==B&&(e.childLanes|=B),A===Q)break;A=A.return}}function Zg(A,B){vo=A,nD=Rg=null,A=A.dependencies,A!==null&&A.firstContext!==null&&((A.lanes&B)!==0&&(nQ=!0),A.firstContext=null)}function bQ(A){var B=A._currentValue;if(nD!==A)if(A={context:A,memoizedValue:B,next:null},Rg===null){if(vo===null)throw Error(L(308));Rg=A,vo.dependencies={lanes:0,firstContext:A}}else Rg=Rg.next=A;return B}var wn=null;function rD(A){wn===null?wn=[A]:wn.push(A)}function mp(A,B,Q,e){var t=B.interleaved;return t===null?(Q.next=Q,rD(B)):(Q.next=t.next,t.next=Q),B.interleaved=Q,ze(A,e)}function ze(A,B){A.lanes|=B;var Q=A.alternate;for(Q!==null&&(Q.lanes|=B),Q=A,A=A.return;A!==null;)A.childLanes|=B,Q=A.alternate,Q!==null&&(Q.childLanes|=B),Q=A,A=A.return;return Q.tag===3?Q.stateNode:null}var It=!1;function CD(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(A,B){A=A.updateQueue,B.updateQueue===A&&(B.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function We(A,B){return{eventTime:A,lane:B,tag:0,payload:null,callback:null,next:null}}function kt(A,B,Q){var e=A.updateQueue;if(e===null)return null;if(e=e.shared,(FA&2)!==0){var t=e.pending;return t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B,ze(A,Q)}return t=e.interleaved,t===null?(B.next=B,rD(e)):(B.next=t.next,t.next=B),e.interleaved=B,ze(A,Q)}function Qo(A,B,Q){if(B=B.updateQueue,B!==null&&(B=B.shared,(Q&4194240)!==0)){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,Pw(A,Q)}}function kf(A,B){var Q=A.updateQueue,e=A.alternate;if(e!==null&&(e=e.updateQueue,Q===e)){var t=null,n=null;if(Q=Q.firstBaseUpdate,Q!==null){do{var g={eventTime:Q.eventTime,lane:Q.lane,tag:Q.tag,payload:Q.payload,callback:Q.callback,next:null};n===null?t=n=g:n=n.next=g,Q=Q.next}while(Q!==null);n===null?t=n=B:n=n.next=B}else t=n=B;Q={baseState:e.baseState,firstBaseUpdate:t,lastBaseUpdate:n,shared:e.shared,effects:e.effects},A.updateQueue=Q;return}A=Q.lastBaseUpdate,A===null?Q.firstBaseUpdate=B:A.next=B,Q.lastBaseUpdate=B}function bo(A,B,Q,e){var t=A.updateQueue;It=!1;var n=t.firstBaseUpdate,g=t.lastBaseUpdate,E=t.shared.pending;if(E!==null){t.shared.pending=null;var r=E,C=r.next;r.next=null,g===null?n=C:g.next=C,g=r;var i=A.alternate;i!==null&&(i=i.updateQueue,E=i.lastBaseUpdate,E!==g&&(E===null?i.firstBaseUpdate=C:E.next=C,i.lastBaseUpdate=r))}if(n!==null){var o=t.baseState;g=0,i=C=r=null,E=n;do{var a=E.lane,s=E.eventTime;if((e&a)===a){i!==null&&(i=i.next={eventTime:s,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});A:{var I=A,D=E;switch(a=B,s=Q,D.tag){case 1:if(I=D.payload,typeof I=="function"){o=I.call(s,o,a);break A}o=I;break A;case 3:I.flags=I.flags&-65537|128;case 0:if(I=D.payload,a=typeof I=="function"?I.call(s,o,a):I,a==null)break A;o=zA({},o,a);break A;case 2:It=!0}}E.callback!==null&&E.lane!==0&&(A.flags|=64,a=t.effects,a===null?t.effects=[E]:a.push(E))}else s={eventTime:s,lane:a,tag:E.tag,payload:E.payload,callback:E.callback,next:null},i===null?(C=i=s,r=o):i=i.next=s,g|=a;if(E=E.next,E===null){if(E=t.shared.pending,E===null)break;a=E,E=a.next,a.next=null,t.lastBaseUpdate=a,t.shared.pending=null}}while(1);if(i===null&&(r=o),t.baseState=r,t.firstBaseUpdate=C,t.lastBaseUpdate=i,B=t.shared.interleaved,B!==null){t=B;do g|=t.lane,t=t.next;while(t!==B)}else n===null&&(t.shared.lanes=0);Sn|=g,A.lanes=g,A.memoizedState=o}}function Jf(A,B,Q){if(A=B.effects,B.effects=null,A!==null)for(B=0;B<A.length;B++){var e=A[B],t=e.callback;if(t!==null){if(e.callback=null,e=Q,typeof t!="function")throw Error(L(191,t));t.call(e)}}}var Np=new m0.Component().refs;function fc(A,B,Q,e){B=A.memoizedState,Q=Q(e,B),Q=Q==null?B:zA({},B,Q),A.memoizedState=Q,A.lanes===0&&(A.updateQueue.baseState=Q)}var La={isMounted:function(A){return(A=A._reactInternals)?jn(A)===A:!1},enqueueSetState:function(A,B,Q){A=A._reactInternals;var e=PB(),t=St(A),n=We(e,t);n.payload=B,Q!=null&&(n.callback=Q),B=kt(A,n,t),B!==null&&(KQ(B,A,t,e),Qo(B,A,t))},enqueueReplaceState:function(A,B,Q){A=A._reactInternals;var e=PB(),t=St(A),n=We(e,t);n.tag=1,n.payload=B,Q!=null&&(n.callback=Q),B=kt(A,n,t),B!==null&&(KQ(B,A,t,e),Qo(B,A,t))},enqueueForceUpdate:function(A,B){A=A._reactInternals;var Q=PB(),e=St(A),t=We(Q,e);t.tag=2,B!=null&&(t.callback=B),B=kt(A,t,e),B!==null&&(KQ(B,A,e,Q),Qo(B,A,e))}};function Sf(A,B,Q,e,t,n,g){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(e,n,g):B.prototype&&B.prototype.isPureReactComponent?!jr(Q,e)||!jr(t,n):!0}function yp(A,B,Q){var e=!1,t=Wt,n=B.contextType;return typeof n=="object"&&n!==null?n=bQ(n):(t=rQ(B)?bn:SB.current,e=B.contextTypes,n=(e=e!=null)?Kg(A,t):Wt),B=new B(Q,n),A.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=La,A.stateNode=B,B._reactInternals=A,e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=t,A.__reactInternalMemoizedMaskedChildContext=n),B}function Zf(A,B,Q,e){A=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(Q,e),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(Q,e),B.state!==A&&La.enqueueReplaceState(B,B.state,null)}function Uc(A,B,Q,e){var t=A.stateNode;t.props=Q,t.state=A.memoizedState,t.refs=Np,CD(A);var n=B.contextType;typeof n=="object"&&n!==null?t.context=bQ(n):(n=rQ(B)?bn:SB.current,t.context=Kg(A,n)),t.state=A.memoizedState,n=B.getDerivedStateFromProps,typeof n=="function"&&(fc(A,B,n,Q),t.state=A.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(B=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),B!==t.state&&La.enqueueReplaceState(t,t.state,null),bo(A,Q,t,e),t.state=A.memoizedState),typeof t.componentDidMount=="function"&&(A.flags|=4194308)}function $E(A,B,Q){if(A=Q.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(Q._owner){if(Q=Q._owner,Q){if(Q.tag!==1)throw Error(L(309));var e=Q.stateNode}if(!e)throw Error(L(147,A));var t=e,n=""+A;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===n?B.ref:(B=function(g){var E=t.refs;E===Np&&(E=t.refs={}),g===null?delete E[n]:E[n]=g},B._stringRef=n,B)}if(typeof A!="string")throw Error(L(284));if(!Q._owner)throw Error(L(290,A))}return A}function bi(A,B){throw A=Object.prototype.toString.call(B),Error(L(31,A==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":A))}function Lf(A){var B=A._init;return B(A._payload)}function vp(A){function B(l,w){if(A){var u=l.deletions;u===null?(l.deletions=[w],l.flags|=16):u.push(w)}}function Q(l,w){if(!A)return null;for(;w!==null;)B(l,w),w=w.sibling;return null}function e(l,w){for(l=new Map;w!==null;)w.key!==null?l.set(w.key,w):l.set(w.index,w),w=w.sibling;return l}function t(l,w){return l=Zt(l,w),l.index=0,l.sibling=null,l}function n(l,w,u){return l.index=u,A?(u=l.alternate,u!==null?(u=u.index,u<w?(l.flags|=2,w):u):(l.flags|=2,w)):(l.flags|=1048576,w)}function g(l){return A&&l.alternate===null&&(l.flags|=2),l}function E(l,w,u,f){return w===null||w.tag!==6?(w=VI(u,l.mode,f),w.return=l,w):(w=t(w,u),w.return=l,w)}function r(l,w,u,f){var M=u.type;return M===ug?i(l,w,u.props.children,f,u.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===st&&Lf(M)===w.type)?(f=t(w,u.props),f.ref=$E(l,w,u),f.return=l,f):(f=ro(u.type,u.key,u.props,null,l.mode,f),f.ref=$E(l,w,u),f.return=l,f)}function C(l,w,u,f){return w===null||w.tag!==4||w.stateNode.containerInfo!==u.containerInfo||w.stateNode.implementation!==u.implementation?(w=xI(u,l.mode,f),w.return=l,w):(w=t(w,u.children||[]),w.return=l,w)}function i(l,w,u,f,M){return w===null||w.tag!==7?(w=pn(u,l.mode,f,M),w.return=l,w):(w=t(w,u),w.return=l,w)}function o(l,w,u){if(typeof w=="string"&&w!==""||typeof w=="number")return w=VI(""+w,l.mode,u),w.return=l,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ui:return u=ro(w.type,w.key,w.props,null,l.mode,u),u.ref=$E(l,null,w),u.return=l,u;case Fg:return w=xI(w,l.mode,u),w.return=l,w;case st:var f=w._init;return o(l,f(w._payload),u)}if(ir(w)||PE(w))return w=pn(w,l.mode,u,null),w.return=l,w;bi(l,w)}return null}function a(l,w,u,f){var M=w!==null?w.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return M!==null?null:E(l,w,""+u,f);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ui:return u.key===M?r(l,w,u,f):null;case Fg:return u.key===M?C(l,w,u,f):null;case st:return M=u._init,a(l,w,M(u._payload),f)}if(ir(u)||PE(u))return M!==null?null:i(l,w,u,f,null);bi(l,u)}return null}function s(l,w,u,f,M){if(typeof f=="string"&&f!==""||typeof f=="number")return l=l.get(u)||null,E(w,l,""+f,M);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ui:return l=l.get(f.key===null?u:f.key)||null,r(w,l,f,M);case Fg:return l=l.get(f.key===null?u:f.key)||null,C(w,l,f,M);case st:var p=f._init;return s(l,w,u,p(f._payload),M)}if(ir(f)||PE(f))return l=l.get(u)||null,i(w,l,f,M,null);bi(w,f)}return null}function I(l,w,u,f){for(var M=null,p=null,h=w,G=w=0,J=null;h!==null&&G<u.length;G++){h.index>G?(J=h,h=null):J=h.sibling;var k=a(l,h,u[G],f);if(k===null){h===null&&(h=J);break}A&&h&&k.alternate===null&&B(l,h),w=n(k,w,G),p===null?M=k:p.sibling=k,p=k,h=J}if(G===u.length)return Q(l,h),LA&&Cn(l,G),M;if(h===null){for(;G<u.length;G++)h=o(l,u[G],f),h!==null&&(w=n(h,w,G),p===null?M=h:p.sibling=h,p=h);return LA&&Cn(l,G),M}for(h=e(l,h);G<u.length;G++)J=s(h,l,G,u[G],f),J!==null&&(A&&J.alternate!==null&&h.delete(J.key===null?G:J.key),w=n(J,w,G),p===null?M=J:p.sibling=J,p=J);return A&&h.forEach(function(S){return B(l,S)}),LA&&Cn(l,G),M}function D(l,w,u,f){var M=PE(u);if(typeof M!="function")throw Error(L(150));if(u=M.call(u),u==null)throw Error(L(151));for(var p=M=null,h=w,G=w=0,J=null,k=u.next();h!==null&&!k.done;G++,k=u.next()){h.index>G?(J=h,h=null):J=h.sibling;var S=a(l,h,k.value,f);if(S===null){h===null&&(h=J);break}A&&h&&S.alternate===null&&B(l,h),w=n(S,w,G),p===null?M=S:p.sibling=S,p=S,h=J}if(k.done)return Q(l,h),LA&&Cn(l,G),M;if(h===null){for(;!k.done;G++,k=u.next())k=o(l,k.value,f),k!==null&&(w=n(k,w,G),p===null?M=k:p.sibling=k,p=k);return LA&&Cn(l,G),M}for(h=e(l,h);!k.done;G++,k=u.next())k=s(h,l,G,k.value,f),k!==null&&(A&&k.alternate!==null&&h.delete(k.key===null?G:k.key),w=n(k,w,G),p===null?M=k:p.sibling=k,p=k);return A&&h.forEach(function(W){return B(l,W)}),LA&&Cn(l,G),M}function c(l,w,u,f){if(typeof u=="object"&&u!==null&&u.type===ug&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case Ui:A:{for(var M=u.key,p=w;p!==null;){if(p.key===M){if(M=u.type,M===ug){if(p.tag===7){Q(l,p.sibling),w=t(p,u.props.children),w.return=l,l=w;break A}}else if(p.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===st&&Lf(M)===p.type){Q(l,p.sibling),w=t(p,u.props),w.ref=$E(l,p,u),w.return=l,l=w;break A}Q(l,p);break}else B(l,p);p=p.sibling}u.type===ug?(w=pn(u.props.children,l.mode,f,u.key),w.return=l,l=w):(f=ro(u.type,u.key,u.props,null,l.mode,f),f.ref=$E(l,w,u),f.return=l,l=f)}return g(l);case Fg:A:{for(p=u.key;w!==null;){if(w.key===p)if(w.tag===4&&w.stateNode.containerInfo===u.containerInfo&&w.stateNode.implementation===u.implementation){Q(l,w.sibling),w=t(w,u.children||[]),w.return=l,l=w;break A}else{Q(l,w);break}else B(l,w);w=w.sibling}w=xI(u,l.mode,f),w.return=l,l=w}return g(l);case st:return p=u._init,c(l,w,p(u._payload),f)}if(ir(u))return I(l,w,u,f);if(PE(u))return D(l,w,u,f);bi(l,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,w!==null&&w.tag===6?(Q(l,w.sibling),w=t(w,u),w.return=l,l=w):(Q(l,w),w=VI(u,l.mode,f),w.return=l,l=w),g(l)):Q(l,w)}return c}var qg=vp(!0),bp=vp(!1),JC={},we=Pt(JC),AC=Pt(JC),BC=Pt(JC);function Dn(A){if(A===JC)throw Error(L(174));return A}function iD(A,B){switch(bA(BC,B),bA(AC,A),bA(we,JC),A=B.nodeType,A){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:Bc(null,"");break;default:A=A===8?B.parentNode:B,B=A.namespaceURI||null,A=A.tagName,B=Bc(B,A)}JA(we),bA(we,B)}function _g(){JA(we),JA(AC),JA(BC)}function kp(A){Dn(BC.current);var B=Dn(we.current),Q=Bc(B,A.type);B!==Q&&(bA(AC,A),bA(we,Q))}function oD(A){AC.current===A&&(JA(we),JA(AC))}var OA=Pt(0);function ko(A){for(var B=A;B!==null;){if(B.tag===13){var Q=B.memoizedState;if(Q!==null&&(Q=Q.dehydrated,Q===null||Q.data==="$?"||Q.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if((B.flags&128)!==0)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var LI=[];function aD(){for(var A=0;A<LI.length;A++)LI[A]._workInProgressVersionPrimary=null;LI.length=0}var eo=et.ReactCurrentDispatcher,XI=et.ReactCurrentBatchConfig,Jn=0,xA=null,rB=null,oB=null,Jo=!1,hr=!1,QC=0,Ek=0;function NB(){throw Error(L(321))}function sD(A,B){if(B===null)return!1;for(var Q=0;Q<B.length&&Q<A.length;Q++)if(!$Q(A[Q],B[Q]))return!1;return!0}function ID(A,B,Q,e,t,n){if(Jn=n,xA=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,eo.current=A===null||A.memoizedState===null?ok:ak,A=Q(e,t),hr){n=0;do{if(hr=!1,QC=0,25<=n)throw Error(L(301));n+=1,oB=rB=null,B.updateQueue=null,eo.current=sk,A=Q(e,t)}while(hr)}if(eo.current=So,B=rB!==null&&rB.next!==null,Jn=0,oB=rB=xA=null,Jo=!1,B)throw Error(L(300));return A}function lD(){var A=QC!==0;return QC=0,A}function Ce(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oB===null?xA.memoizedState=oB=A:oB=oB.next=A,oB}function kQ(){if(rB===null){var A=xA.alternate;A=A!==null?A.memoizedState:null}else A=rB.next;var B=oB===null?xA.memoizedState:oB.next;if(B!==null)oB=B,rB=A;else{if(A===null)throw Error(L(310));rB=A,A={memoizedState:rB.memoizedState,baseState:rB.baseState,baseQueue:rB.baseQueue,queue:rB.queue,next:null},oB===null?xA.memoizedState=oB=A:oB=oB.next=A}return oB}function eC(A,B){return typeof B=="function"?B(A):B}function HI(A){var B=kQ(),Q=B.queue;if(Q===null)throw Error(L(311));Q.lastRenderedReducer=A;var e=rB,t=e.baseQueue,n=Q.pending;if(n!==null){if(t!==null){var g=t.next;t.next=n.next,n.next=g}e.baseQueue=t=n,Q.pending=null}if(t!==null){n=t.next,e=e.baseState;var E=g=null,r=null,C=n;do{var i=C.lane;if((Jn&i)===i)r!==null&&(r=r.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),e=C.hasEagerState?C.eagerState:A(e,C.action);else{var o={lane:i,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};r===null?(E=r=o,g=e):r=r.next=o,xA.lanes|=i,Sn|=i}C=C.next}while(C!==null&&C!==n);r===null?g=e:r.next=E,$Q(e,B.memoizedState)||(nQ=!0),B.memoizedState=e,B.baseState=g,B.baseQueue=r,Q.lastRenderedState=e}if(A=Q.interleaved,A!==null){t=A;do n=t.lane,xA.lanes|=n,Sn|=n,t=t.next;while(t!==A)}else t===null&&(Q.lanes=0);return[B.memoizedState,Q.dispatch]}function TI(A){var B=kQ(),Q=B.queue;if(Q===null)throw Error(L(311));Q.lastRenderedReducer=A;var e=Q.dispatch,t=Q.pending,n=B.memoizedState;if(t!==null){Q.pending=null;var g=t=t.next;do n=A(n,g.action),g=g.next;while(g!==t);$Q(n,B.memoizedState)||(nQ=!0),B.memoizedState=n,B.baseQueue===null&&(B.baseState=n),Q.lastRenderedState=n}return[n,e]}function Jp(){}function Sp(A,B){var Q=xA,e=kQ(),t=B(),n=!$Q(e.memoizedState,t);if(n&&(e.memoizedState=t,nQ=!0),e=e.queue,cD(Xp.bind(null,Q,e,A),[A]),e.getSnapshot!==B||n||oB!==null&&oB.memoizedState.tag&1){if(Q.flags|=2048,tC(9,Lp.bind(null,Q,e,t,B),void 0,null),IB===null)throw Error(L(349));(Jn&30)!==0||Zp(Q,B,t)}return t}function Zp(A,B,Q){A.flags|=16384,A={getSnapshot:B,value:Q},B=xA.updateQueue,B===null?(B={lastEffect:null,stores:null},xA.updateQueue=B,B.stores=[A]):(Q=B.stores,Q===null?B.stores=[A]:Q.push(A))}function Lp(A,B,Q,e){B.value=Q,B.getSnapshot=e,Hp(B)&&Tp(A)}function Xp(A,B,Q){return Q(function(){Hp(B)&&Tp(A)})}function Hp(A){var B=A.getSnapshot;A=A.value;try{var Q=B();return!$Q(A,Q)}catch{return!0}}function Tp(A){var B=ze(A,1);B!==null&&KQ(B,A,1,-1)}function Xf(A){var B=Ce();return typeof A=="function"&&(A=A()),B.memoizedState=B.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eC,lastRenderedState:A},B.queue=A,A=A.dispatch=ik.bind(null,xA,A),[B.memoizedState,A]}function tC(A,B,Q,e){return A={tag:A,create:B,destroy:Q,deps:e,next:null},B=xA.updateQueue,B===null?(B={lastEffect:null,stores:null},xA.updateQueue=B,B.lastEffect=A.next=A):(Q=B.lastEffect,Q===null?B.lastEffect=A.next=A:(e=Q.next,Q.next=A,A.next=e,B.lastEffect=A)),A}function Wp(){return kQ().memoizedState}function to(A,B,Q,e){var t=Ce();xA.flags|=A,t.memoizedState=tC(1|B,Q,void 0,e===void 0?null:e)}function Xa(A,B,Q,e){var t=kQ();e=e===void 0?null:e;var n=void 0;if(rB!==null){var g=rB.memoizedState;if(n=g.destroy,e!==null&&sD(e,g.deps)){t.memoizedState=tC(B,Q,n,e);return}}xA.flags|=A,t.memoizedState=tC(1|B,Q,n,e)}function Hf(A,B){return to(8390656,8,A,B)}function cD(A,B){return Xa(2048,8,A,B)}function Op(A,B){return Xa(4,2,A,B)}function Vp(A,B){return Xa(4,4,A,B)}function xp(A,B){if(typeof B=="function")return A=A(),B(A),function(){B(null)};if(B!=null)return A=A(),B.current=A,function(){B.current=null}}function zp(A,B,Q){return Q=Q!=null?Q.concat([A]):null,Xa(4,4,xp.bind(null,B,A),Q)}function wD(){}function Pp(A,B){var Q=kQ();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&sD(B,e[1])?e[0]:(Q.memoizedState=[A,B],A)}function Kp(A,B){var Q=kQ();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&sD(B,e[1])?e[0]:(A=A(),Q.memoizedState=[A,B],A)}function jp(A,B,Q){return(Jn&21)===0?(A.baseState&&(A.baseState=!1,nQ=!0),A.memoizedState=Q):($Q(Q,B)||(Q=$0(),xA.lanes|=Q,Sn|=Q,A.baseState=!0),B)}function rk(A,B){var Q=mA;mA=Q!==0&&4>Q?Q:4,A(!0);var e=XI.transition;XI.transition={};try{A(!1),B()}finally{mA=Q,XI.transition=e}}function qp(){return kQ().memoizedState}function Ck(A,B,Q){var e=St(A);if(Q={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null},_p(A))$p(B,Q);else if(Q=mp(A,B,Q,e),Q!==null){var t=PB();KQ(Q,A,e,t),AG(Q,B,e)}}function ik(A,B,Q){var e=St(A),t={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null};if(_p(A))$p(B,t);else{var n=A.alternate;if(A.lanes===0&&(n===null||n.lanes===0)&&(n=B.lastRenderedReducer,n!==null))try{var g=B.lastRenderedState,E=n(g,Q);if(t.hasEagerState=!0,t.eagerState=E,$Q(E,g)){var r=B.interleaved;r===null?(t.next=t,rD(B)):(t.next=r.next,r.next=t),B.interleaved=t;return}}catch{}finally{}Q=mp(A,B,t,e),Q!==null&&(t=PB(),KQ(Q,A,e,t),AG(Q,B,e))}}function _p(A){var B=A.alternate;return A===xA||B!==null&&B===xA}function $p(A,B){hr=Jo=!0;var Q=A.pending;Q===null?B.next=B:(B.next=Q.next,Q.next=B),A.pending=B}function AG(A,B,Q){if((Q&4194240)!==0){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,Pw(A,Q)}}var So={readContext:bQ,useCallback:NB,useContext:NB,useEffect:NB,useImperativeHandle:NB,useInsertionEffect:NB,useLayoutEffect:NB,useMemo:NB,useReducer:NB,useRef:NB,useState:NB,useDebugValue:NB,useDeferredValue:NB,useTransition:NB,useMutableSource:NB,useSyncExternalStore:NB,useId:NB,unstable_isNewReconciler:!1},ok={readContext:bQ,useCallback:function(A,B){return Ce().memoizedState=[A,B===void 0?null:B],A},useContext:bQ,useEffect:Hf,useImperativeHandle:function(A,B,Q){return Q=Q!=null?Q.concat([A]):null,to(4194308,4,xp.bind(null,B,A),Q)},useLayoutEffect:function(A,B){return to(4194308,4,A,B)},useInsertionEffect:function(A,B){return to(4,2,A,B)},useMemo:function(A,B){var Q=Ce();return B=B===void 0?null:B,A=A(),Q.memoizedState=[A,B],A},useReducer:function(A,B,Q){var e=Ce();return B=Q!==void 0?Q(B):B,e.memoizedState=e.baseState=B,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:B},e.queue=A,A=A.dispatch=Ck.bind(null,xA,A),[e.memoizedState,A]},useRef:function(A){var B=Ce();return A={current:A},B.memoizedState=A},useState:Xf,useDebugValue:wD,useDeferredValue:function(A){return Ce().memoizedState=A},useTransition:function(){var A=Xf(!1),B=A[0];return A=rk.bind(null,A[1]),Ce().memoizedState=A,[B,A]},useMutableSource:function(){},useSyncExternalStore:function(A,B,Q){var e=xA,t=Ce();if(LA){if(Q===void 0)throw Error(L(407));Q=Q()}else{if(Q=B(),IB===null)throw Error(L(349));(Jn&30)!==0||Zp(e,B,Q)}t.memoizedState=Q;var n={value:Q,getSnapshot:B};return t.queue=n,Hf(Xp.bind(null,e,n,A),[A]),e.flags|=2048,tC(9,Lp.bind(null,e,n,Q,B),void 0,null),Q},useId:function(){var A=Ce(),B=IB.identifierPrefix;if(LA){var Q=Se,e=Je;Q=(e&~(1<<32-PQ(e)-1)).toString(32)+Q,B=":"+B+"R"+Q,Q=QC++,0<Q&&(B+="H"+Q.toString(32)),B+=":"}else Q=Ek++,B=":"+B+"r"+Q.toString(32)+":";return A.memoizedState=B},unstable_isNewReconciler:!1},ak={readContext:bQ,useCallback:Pp,useContext:bQ,useEffect:cD,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:Vp,useMemo:Kp,useReducer:HI,useRef:Wp,useState:function(){return HI(eC)},useDebugValue:wD,useDeferredValue:function(A){var B=kQ();return jp(B,rB.memoizedState,A)},useTransition:function(){var A=HI(eC)[0],B=kQ().memoizedState;return[A,B]},useMutableSource:Jp,useSyncExternalStore:Sp,useId:qp,unstable_isNewReconciler:!1},sk={readContext:bQ,useCallback:Pp,useContext:bQ,useEffect:cD,useImperativeHandle:zp,useInsertionEffect:Op,useLayoutEffect:Vp,useMemo:Kp,useReducer:TI,useRef:Wp,useState:function(){return TI(eC)},useDebugValue:wD,useDeferredValue:function(A){var B=kQ();return rB===null?B.memoizedState=A:jp(B,rB.memoizedState,A)},useTransition:function(){var A=TI(eC)[0],B=kQ().memoizedState;return[A,B]},useMutableSource:Jp,useSyncExternalStore:Sp,useId:qp,unstable_isNewReconciler:!1};function $g(A,B){try{var Q="",e=B;do Q+=Hv(e),e=e.return;while(e);var t=Q}catch(n){t=`
Error generating stack: `+n.message+`
`+n.stack}return{value:A,source:B,stack:t,digest:null}}function WI(A,B,Q){return{value:A,source:null,stack:Q!=null?Q:null,digest:B!=null?B:null}}function Mc(A,B){try{console.error(B.value)}catch(Q){setTimeout(function(){throw Q})}}var Ik=typeof WeakMap=="function"?WeakMap:Map;function BG(A,B,Q){Q=We(-1,Q),Q.tag=3,Q.payload={element:null};var e=B.value;return Q.callback=function(){Lo||(Lo=!0,bc=e),Mc(A,B)},Q}function QG(A,B,Q){Q=We(-1,Q),Q.tag=3;var e=A.type.getDerivedStateFromError;if(typeof e=="function"){var t=B.value;Q.payload=function(){return e(t)},Q.callback=function(){Mc(A,B)}}var n=A.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(Q.callback=function(){Mc(A,B),typeof e!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var g=B.stack;this.componentDidCatch(B.value,{componentStack:g!==null?g:""})}),Q}function Tf(A,B,Q){var e=A.pingCache;if(e===null){e=A.pingCache=new Ik;var t=new Set;e.set(B,t)}else t=e.get(B),t===void 0&&(t=new Set,e.set(B,t));t.has(Q)||(t.add(Q),A=Rk.bind(null,A,B,Q),B.then(A,A))}function Wf(A){do{var B;if((B=A.tag===13)&&(B=A.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return A;A=A.return}while(A!==null);return null}function Of(A,B,Q,e,t){return(A.mode&1)===0?(A===B?A.flags|=65536:(A.flags|=128,Q.flags|=131072,Q.flags&=-52805,Q.tag===1&&(Q.alternate===null?Q.tag=17:(B=We(-1,1),B.tag=2,kt(Q,B,1))),Q.lanes|=1),A):(A.flags|=65536,A.lanes=t,A)}var lk=et.ReactCurrentOwner,nQ=!1;function WB(A,B,Q,e){B.child=A===null?bp(B,null,Q,e):qg(B,A.child,Q,e)}function Vf(A,B,Q,e,t){Q=Q.render;var n=B.ref;return Zg(B,t),e=ID(A,B,Q,e,n,t),Q=lD(),A!==null&&!nQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,Pe(A,B,t)):(LA&&Q&&QD(B),B.flags|=1,WB(A,B,e,t),B.child)}function xf(A,B,Q,e,t){if(A===null){var n=Q.type;return typeof n=="function"&&!hD(n)&&n.defaultProps===void 0&&Q.compare===null&&Q.defaultProps===void 0?(B.tag=15,B.type=n,eG(A,B,n,e,t)):(A=ro(Q.type,null,e,B,B.mode,t),A.ref=B.ref,A.return=B,B.child=A)}if(n=A.child,(A.lanes&t)===0){var g=n.memoizedProps;if(Q=Q.compare,Q=Q!==null?Q:jr,Q(g,e)&&A.ref===B.ref)return Pe(A,B,t)}return B.flags|=1,A=Zt(n,e),A.ref=B.ref,A.return=B,B.child=A}function eG(A,B,Q,e,t){if(A!==null){var n=A.memoizedProps;if(jr(n,e)&&A.ref===B.ref)if(nQ=!1,B.pendingProps=e=n,(A.lanes&t)!==0)(A.flags&131072)!==0&&(nQ=!0);else return B.lanes=A.lanes,Pe(A,B,t)}return hc(A,B,Q,e,t)}function tG(A,B,Q){var e=B.pendingProps,t=e.children,n=A!==null?A.memoizedState:null;if(e.mode==="hidden")if((B.mode&1)===0)B.memoizedState={baseLanes:0,cachePool:null,transitions:null},bA(Yg,wQ),wQ|=Q;else{if((Q&1073741824)===0)return A=n!==null?n.baseLanes|Q:Q,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:A,cachePool:null,transitions:null},B.updateQueue=null,bA(Yg,wQ),wQ|=A,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=n!==null?n.baseLanes:Q,bA(Yg,wQ),wQ|=e}else n!==null?(e=n.baseLanes|Q,B.memoizedState=null):e=Q,bA(Yg,wQ),wQ|=e;return WB(A,B,t,Q),B.child}function nG(A,B){var Q=B.ref;(A===null&&Q!==null||A!==null&&A.ref!==Q)&&(B.flags|=512,B.flags|=2097152)}function hc(A,B,Q,e,t){var n=rQ(Q)?bn:SB.current;return n=Kg(B,n),Zg(B,t),Q=ID(A,B,Q,e,n,t),e=lD(),A!==null&&!nQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,Pe(A,B,t)):(LA&&e&&QD(B),B.flags|=1,WB(A,B,Q,t),B.child)}function zf(A,B,Q,e,t){if(rQ(Q)){var n=!0;mo(B)}else n=!1;if(Zg(B,t),B.stateNode===null)no(A,B),yp(B,Q,e),Uc(B,Q,e,t),e=!0;else if(A===null){var g=B.stateNode,E=B.memoizedProps;g.props=E;var r=g.context,C=Q.contextType;typeof C=="object"&&C!==null?C=bQ(C):(C=rQ(Q)?bn:SB.current,C=Kg(B,C));var i=Q.getDerivedStateFromProps,o=typeof i=="function"||typeof g.getSnapshotBeforeUpdate=="function";o||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==e||r!==C)&&Zf(B,g,e,C),It=!1;var a=B.memoizedState;g.state=a,bo(B,e,g,t),r=B.memoizedState,E!==e||a!==r||EQ.current||It?(typeof i=="function"&&(fc(B,Q,i,e),r=B.memoizedState),(E=It||Sf(B,Q,E,e,a,r,C))?(o||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(B.flags|=4194308)):(typeof g.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=e,B.memoizedState=r),g.props=e,g.state=r,g.context=C,e=E):(typeof g.componentDidMount=="function"&&(B.flags|=4194308),e=!1)}else{g=B.stateNode,Yp(A,B),E=B.memoizedProps,C=B.type===B.elementType?E:WQ(B.type,E),g.props=C,o=B.pendingProps,a=g.context,r=Q.contextType,typeof r=="object"&&r!==null?r=bQ(r):(r=rQ(Q)?bn:SB.current,r=Kg(B,r));var s=Q.getDerivedStateFromProps;(i=typeof s=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==o||a!==r)&&Zf(B,g,e,r),It=!1,a=B.memoizedState,g.state=a,bo(B,e,g,t);var I=B.memoizedState;E!==o||a!==I||EQ.current||It?(typeof s=="function"&&(fc(B,Q,s,e),I=B.memoizedState),(C=It||Sf(B,Q,C,e,a,I,r)||!1)?(i||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(e,I,r),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(e,I,r)),typeof g.componentDidUpdate=="function"&&(B.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===A.memoizedProps&&a===A.memoizedState||(B.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&a===A.memoizedState||(B.flags|=1024),B.memoizedProps=e,B.memoizedState=I),g.props=e,g.state=I,g.context=r,e=C):(typeof g.componentDidUpdate!="function"||E===A.memoizedProps&&a===A.memoizedState||(B.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&a===A.memoizedState||(B.flags|=1024),e=!1)}return pc(A,B,Q,e,n,t)}function pc(A,B,Q,e,t,n){nG(A,B);var g=(B.flags&128)!==0;if(!e&&!g)return t&&yf(B,Q,!1),Pe(A,B,n);e=B.stateNode,lk.current=B;var E=g&&typeof Q.getDerivedStateFromError!="function"?null:e.render();return B.flags|=1,A!==null&&g?(B.child=qg(B,A.child,null,n),B.child=qg(B,null,E,n)):WB(A,B,E,n),B.memoizedState=e.state,t&&yf(B,Q,!0),B.child}function gG(A){var B=A.stateNode;B.pendingContext?Nf(A,B.pendingContext,B.pendingContext!==B.context):B.context&&Nf(A,B.context,!1),iD(A,B.containerInfo)}function Pf(A,B,Q,e,t){return jg(),tD(t),B.flags|=256,WB(A,B,Q,e),B.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function Rc(A){return{baseLanes:A,cachePool:null,transitions:null}}function EG(A,B,Q){var e=B.pendingProps,t=OA.current,n=!1,g=(B.flags&128)!==0,E;if((E=g)||(E=A!==null&&A.memoizedState===null?!1:(t&2)!==0),E?(n=!0,B.flags&=-129):(A===null||A.memoizedState!==null)&&(t|=1),bA(OA,t&1),A===null)return uc(B),A=B.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?((B.mode&1)===0?B.lanes=1:A.data==="$!"?B.lanes=8:B.lanes=1073741824,null):(g=e.children,A=e.fallback,n?(e=B.mode,n=B.child,g={mode:"hidden",children:g},(e&1)===0&&n!==null?(n.childLanes=0,n.pendingProps=g):n=Wa(g,e,0,null),A=pn(A,e,Q,null),n.return=B,A.return=B,n.sibling=A,B.child=n,B.child.memoizedState=Rc(Q),B.memoizedState=Gc,A):DD(B,g));if(t=A.memoizedState,t!==null&&(E=t.dehydrated,E!==null))return ck(A,B,g,e,E,t,Q);if(n){n=e.fallback,g=B.mode,t=A.child,E=t.sibling;var r={mode:"hidden",children:e.children};return(g&1)===0&&B.child!==t?(e=B.child,e.childLanes=0,e.pendingProps=r,B.deletions=null):(e=Zt(t,r),e.subtreeFlags=t.subtreeFlags&14680064),E!==null?n=Zt(E,n):(n=pn(n,g,Q,null),n.flags|=2),n.return=B,e.return=B,e.sibling=n,B.child=e,e=n,n=B.child,g=A.child.memoizedState,g=g===null?Rc(Q):{baseLanes:g.baseLanes|Q,cachePool:null,transitions:g.transitions},n.memoizedState=g,n.childLanes=A.childLanes&~Q,B.memoizedState=Gc,e}return n=A.child,A=n.sibling,e=Zt(n,{mode:"visible",children:e.children}),(B.mode&1)===0&&(e.lanes=Q),e.return=B,e.sibling=null,A!==null&&(Q=B.deletions,Q===null?(B.deletions=[A],B.flags|=16):Q.push(A)),B.child=e,B.memoizedState=null,e}function DD(A,B){return B=Wa({mode:"visible",children:B},A.mode,0,null),B.return=A,A.child=B}function ki(A,B,Q,e){return e!==null&&tD(e),qg(B,A.child,null,Q),A=DD(B,B.pendingProps.children),A.flags|=2,B.memoizedState=null,A}function ck(A,B,Q,e,t,n,g){if(Q)return B.flags&256?(B.flags&=-257,e=WI(Error(L(422))),ki(A,B,g,e)):B.memoizedState!==null?(B.child=A.child,B.flags|=128,null):(n=e.fallback,t=B.mode,e=Wa({mode:"visible",children:e.children},t,0,null),n=pn(n,t,g,null),n.flags|=2,e.return=B,n.return=B,e.sibling=n,B.child=e,(B.mode&1)!==0&&qg(B,A.child,null,g),B.child.memoizedState=Rc(g),B.memoizedState=Gc,n);if((B.mode&1)===0)return ki(A,B,g,null);if(t.data==="$!"){if(e=t.nextSibling&&t.nextSibling.dataset,e)var E=e.dgst;return e=E,n=Error(L(419)),e=WI(n,e,void 0),ki(A,B,g,e)}if(E=(g&A.childLanes)!==0,nQ||E){if(e=IB,e!==null){switch(g&-g){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=(t&(e.suspendedLanes|g))!==0?0:t,t!==0&&t!==n.retryLane&&(n.retryLane=t,ze(A,t),KQ(e,A,t,-1))}return MD(),e=WI(Error(L(421))),ki(A,B,g,e)}return t.data==="$?"?(B.flags|=128,B.child=A.child,B=mk.bind(null,A),t._reactRetry=B,null):(A=n.treeContext,DQ=bt(t.nextSibling),uQ=B,LA=!0,VQ=null,A!==null&&(mQ[YQ++]=Je,mQ[YQ++]=Se,mQ[YQ++]=kn,Je=A.id,Se=A.overflow,kn=B),B=DD(B,e.children),B.flags|=4096,B)}function Kf(A,B,Q){A.lanes|=B;var e=A.alternate;e!==null&&(e.lanes|=B),dc(A.return,B,Q)}function OI(A,B,Q,e,t){var n=A.memoizedState;n===null?A.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:e,tail:Q,tailMode:t}:(n.isBackwards=B,n.rendering=null,n.renderingStartTime=0,n.last=e,n.tail=Q,n.tailMode=t)}function rG(A,B,Q){var e=B.pendingProps,t=e.revealOrder,n=e.tail;if(WB(A,B,e.children,Q),e=OA.current,(e&2)!==0)e=e&1|2,B.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=B.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&Kf(A,Q,B);else if(A.tag===19)Kf(A,Q,B);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===B)break A;for(;A.sibling===null;){if(A.return===null||A.return===B)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}e&=1}if(bA(OA,e),(B.mode&1)===0)B.memoizedState=null;else switch(t){case"forwards":for(Q=B.child,t=null;Q!==null;)A=Q.alternate,A!==null&&ko(A)===null&&(t=Q),Q=Q.sibling;Q=t,Q===null?(t=B.child,B.child=null):(t=Q.sibling,Q.sibling=null),OI(B,!1,t,Q,n);break;case"backwards":for(Q=null,t=B.child,B.child=null;t!==null;){if(A=t.alternate,A!==null&&ko(A)===null){B.child=t;break}A=t.sibling,t.sibling=Q,Q=t,t=A}OI(B,!0,Q,null,n);break;case"together":OI(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function no(A,B){(B.mode&1)===0&&A!==null&&(A.alternate=null,B.alternate=null,B.flags|=2)}function Pe(A,B,Q){if(A!==null&&(B.dependencies=A.dependencies),Sn|=B.lanes,(Q&B.childLanes)===0)return null;if(A!==null&&B.child!==A.child)throw Error(L(153));if(B.child!==null){for(A=B.child,Q=Zt(A,A.pendingProps),B.child=Q,Q.return=B;A.sibling!==null;)A=A.sibling,Q=Q.sibling=Zt(A,A.pendingProps),Q.return=B;Q.sibling=null}return B.child}function wk(A,B,Q){switch(B.tag){case 3:gG(B),jg();break;case 5:kp(B);break;case 1:rQ(B.type)&&mo(B);break;case 4:iD(B,B.stateNode.containerInfo);break;case 10:var e=B.type._context,t=B.memoizedProps.value;bA(yo,e._currentValue),e._currentValue=t;break;case 13:if(e=B.memoizedState,e!==null)return e.dehydrated!==null?(bA(OA,OA.current&1),B.flags|=128,null):(Q&B.child.childLanes)!==0?EG(A,B,Q):(bA(OA,OA.current&1),A=Pe(A,B,Q),A!==null?A.sibling:null);bA(OA,OA.current&1);break;case 19:if(e=(Q&B.childLanes)!==0,(A.flags&128)!==0){if(e)return rG(A,B,Q);B.flags|=128}if(t=B.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),bA(OA,OA.current),e)break;return null;case 22:case 23:return B.lanes=0,tG(A,B,Q)}return Pe(A,B,Q)}var CG,mc,iG,oG;CG=function(A,B){for(var Q=B.child;Q!==null;){if(Q.tag===5||Q.tag===6)A.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===B)break;for(;Q.sibling===null;){if(Q.return===null||Q.return===B)return;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}};mc=function(){};iG=function(A,B,Q,e){var t=A.memoizedProps;if(t!==e){A=B.stateNode,Dn(we.current);var n=null;switch(Q){case"input":t=ql(A,t),e=ql(A,e),n=[];break;case"select":t=zA({},t,{value:void 0}),e=zA({},e,{value:void 0}),n=[];break;case"textarea":t=Ac(A,t),e=Ac(A,e),n=[];break;default:typeof t.onClick!="function"&&typeof e.onClick=="function"&&(A.onclick=Go)}Qc(Q,e);var g;Q=null;for(C in t)if(!e.hasOwnProperty(C)&&t.hasOwnProperty(C)&&t[C]!=null)if(C==="style"){var E=t[C];for(g in E)E.hasOwnProperty(g)&&(Q||(Q={}),Q[g]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(Wr.hasOwnProperty(C)?n||(n=[]):(n=n||[]).push(C,null));for(C in e){var r=e[C];if(E=t!=null?t[C]:void 0,e.hasOwnProperty(C)&&r!==E&&(r!=null||E!=null))if(C==="style")if(E){for(g in E)!E.hasOwnProperty(g)||r&&r.hasOwnProperty(g)||(Q||(Q={}),Q[g]="");for(g in r)r.hasOwnProperty(g)&&E[g]!==r[g]&&(Q||(Q={}),Q[g]=r[g])}else Q||(n||(n=[]),n.push(C,Q)),Q=r;else C==="dangerouslySetInnerHTML"?(r=r?r.__html:void 0,E=E?E.__html:void 0,r!=null&&E!==r&&(n=n||[]).push(C,r)):C==="children"?typeof r!="string"&&typeof r!="number"||(n=n||[]).push(C,""+r):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(C)?(r!=null&&C==="onScroll"&&kA("scroll",A),n||E===r||(n=[])):(n=n||[]).push(C,r))}Q&&(n=n||[]).push("style",Q);var C=n;(B.updateQueue=C)&&(B.flags|=4)}};oG=function(A,B,Q,e){Q!==e&&(B.flags|=4)};function Ar(A,B){if(!LA)switch(A.tailMode){case"hidden":B=A.tail;for(var Q=null;B!==null;)B.alternate!==null&&(Q=B),B=B.sibling;Q===null?A.tail=null:Q.sibling=null;break;case"collapsed":Q=A.tail;for(var e=null;Q!==null;)Q.alternate!==null&&(e=Q),Q=Q.sibling;e===null?B||A.tail===null?A.tail=null:A.tail.sibling=null:e.sibling=null}}function yB(A){var B=A.alternate!==null&&A.alternate.child===A.child,Q=0,e=0;if(B)for(var t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags&14680064,e|=t.flags&14680064,t.return=A,t=t.sibling;else for(t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags,e|=t.flags,t.return=A,t=t.sibling;return A.subtreeFlags|=e,A.childLanes=Q,B}function Dk(A,B,Q){var e=B.pendingProps;switch(eD(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yB(B),null;case 1:return rQ(B.type)&&Ro(),yB(B),null;case 3:return e=B.stateNode,_g(),JA(EQ),JA(SB),aD(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(A===null||A.child===null)&&(vi(B)?B.flags|=4:A===null||A.memoizedState.isDehydrated&&(B.flags&256)===0||(B.flags|=1024,VQ!==null&&(Sc(VQ),VQ=null))),mc(A,B),yB(B),null;case 5:oD(B);var t=Dn(BC.current);if(Q=B.type,A!==null&&B.stateNode!=null)iG(A,B,Q,e,t),A.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!e){if(B.stateNode===null)throw Error(L(166));return yB(B),null}if(A=Dn(we.current),vi(B)){e=B.stateNode,Q=B.type;var n=B.memoizedProps;switch(e[ie]=B,e[$r]=n,A=(B.mode&1)!==0,Q){case"dialog":kA("cancel",e),kA("close",e);break;case"iframe":case"object":case"embed":kA("load",e);break;case"video":case"audio":for(t=0;t<ar.length;t++)kA(ar[t],e);break;case"source":kA("error",e);break;case"img":case"image":case"link":kA("error",e),kA("load",e);break;case"details":kA("toggle",e);break;case"input":ef(e,n),kA("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!n.multiple},kA("invalid",e);break;case"textarea":nf(e,n),kA("invalid",e)}Qc(Q,n),t=null;for(var g in n)if(n.hasOwnProperty(g)){var E=n[g];g==="children"?typeof E=="string"?e.textContent!==E&&(n.suppressHydrationWarning!==!0&&yi(e.textContent,E,A),t=["children",E]):typeof E=="number"&&e.textContent!==""+E&&(n.suppressHydrationWarning!==!0&&yi(e.textContent,E,A),t=["children",""+E]):Wr.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&kA("scroll",e)}switch(Q){case"input":Mi(e),tf(e,n,!0);break;case"textarea":Mi(e),gf(e);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(e.onclick=Go)}e=t,B.updateQueue=e,e!==null&&(B.flags|=4)}else{g=t.nodeType===9?t:t.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=Z0(Q)),A==="http://www.w3.org/1999/xhtml"?Q==="script"?(A=g.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof e.is=="string"?A=g.createElement(Q,{is:e.is}):(A=g.createElement(Q),Q==="select"&&(g=A,e.multiple?g.multiple=!0:e.size&&(g.size=e.size))):A=g.createElementNS(A,Q),A[ie]=B,A[$r]=e,CG(A,B,!1,!1),B.stateNode=A;A:{switch(g=ec(Q,e),Q){case"dialog":kA("cancel",A),kA("close",A),t=e;break;case"iframe":case"object":case"embed":kA("load",A),t=e;break;case"video":case"audio":for(t=0;t<ar.length;t++)kA(ar[t],A);t=e;break;case"source":kA("error",A),t=e;break;case"img":case"image":case"link":kA("error",A),kA("load",A),t=e;break;case"details":kA("toggle",A),t=e;break;case"input":ef(A,e),t=ql(A,e),kA("invalid",A);break;case"option":t=e;break;case"select":A._wrapperState={wasMultiple:!!e.multiple},t=zA({},e,{value:void 0}),kA("invalid",A);break;case"textarea":nf(A,e),t=Ac(A,e),kA("invalid",A);break;default:t=e}Qc(Q,t),E=t;for(n in E)if(E.hasOwnProperty(n)){var r=E[n];n==="style"?H0(A,r):n==="dangerouslySetInnerHTML"?(r=r?r.__html:void 0,r!=null&&L0(A,r)):n==="children"?typeof r=="string"?(Q!=="textarea"||r!=="")&&Or(A,r):typeof r=="number"&&Or(A,""+r):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(Wr.hasOwnProperty(n)?r!=null&&n==="onScroll"&&kA("scroll",A):r!=null&&Tw(A,n,r,g))}switch(Q){case"input":Mi(A),tf(A,e,!1);break;case"textarea":Mi(A),gf(A);break;case"option":e.value!=null&&A.setAttribute("value",""+Tt(e.value));break;case"select":A.multiple=!!e.multiple,n=e.value,n!=null?bg(A,!!e.multiple,n,!1):e.defaultValue!=null&&bg(A,!!e.multiple,e.defaultValue,!0);break;default:typeof t.onClick=="function"&&(A.onclick=Go)}switch(Q){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break A;case"img":e=!0;break A;default:e=!1}}e&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return yB(B),null;case 6:if(A&&B.stateNode!=null)oG(A,B,A.memoizedProps,e);else{if(typeof e!="string"&&B.stateNode===null)throw Error(L(166));if(Q=Dn(BC.current),Dn(we.current),vi(B)){if(e=B.stateNode,Q=B.memoizedProps,e[ie]=B,(n=e.nodeValue!==Q)&&(A=uQ,A!==null))switch(A.tag){case 3:yi(e.nodeValue,Q,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&yi(e.nodeValue,Q,(A.mode&1)!==0)}n&&(B.flags|=4)}else e=(Q.nodeType===9?Q:Q.ownerDocument).createTextNode(e),e[ie]=B,B.stateNode=e}return yB(B),null;case 13:if(JA(OA),e=B.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(LA&&DQ!==null&&(B.mode&1)!==0&&(B.flags&128)===0)Rp(),jg(),B.flags|=98560,n=!1;else if(n=vi(B),e!==null&&e.dehydrated!==null){if(A===null){if(!n)throw Error(L(318));if(n=B.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(L(317));n[ie]=B}else jg(),(B.flags&128)===0&&(B.memoizedState=null),B.flags|=4;yB(B),n=!1}else VQ!==null&&(Sc(VQ),VQ=null),n=!0;if(!n)return B.flags&65536?B:null}return(B.flags&128)!==0?(B.lanes=Q,B):(e=e!==null,e!==(A!==null&&A.memoizedState!==null)&&e&&(B.child.flags|=8192,(B.mode&1)!==0&&(A===null||(OA.current&1)!==0?CB===0&&(CB=3):MD())),B.updateQueue!==null&&(B.flags|=4),yB(B),null);case 4:return _g(),mc(A,B),A===null&&qr(B.stateNode.containerInfo),yB(B),null;case 10:return ED(B.type._context),yB(B),null;case 17:return rQ(B.type)&&Ro(),yB(B),null;case 19:if(JA(OA),n=B.memoizedState,n===null)return yB(B),null;if(e=(B.flags&128)!==0,g=n.rendering,g===null)if(e)Ar(n,!1);else{if(CB!==0||A!==null&&(A.flags&128)!==0)for(A=B.child;A!==null;){if(g=ko(A),g!==null){for(B.flags|=128,Ar(n,!1),e=g.updateQueue,e!==null&&(B.updateQueue=e,B.flags|=4),B.subtreeFlags=0,e=Q,Q=B.child;Q!==null;)n=Q,A=e,n.flags&=14680066,g=n.alternate,g===null?(n.childLanes=0,n.lanes=A,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=g.childLanes,n.lanes=g.lanes,n.child=g.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=g.memoizedProps,n.memoizedState=g.memoizedState,n.updateQueue=g.updateQueue,n.type=g.type,A=g.dependencies,n.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),Q=Q.sibling;return bA(OA,OA.current&1|2),B.child}A=A.sibling}n.tail!==null&&AB()>AE&&(B.flags|=128,e=!0,Ar(n,!1),B.lanes=4194304)}else{if(!e)if(A=ko(g),A!==null){if(B.flags|=128,e=!0,Q=A.updateQueue,Q!==null&&(B.updateQueue=Q,B.flags|=4),Ar(n,!0),n.tail===null&&n.tailMode==="hidden"&&!g.alternate&&!LA)return yB(B),null}else 2*AB()-n.renderingStartTime>AE&&Q!==1073741824&&(B.flags|=128,e=!0,Ar(n,!1),B.lanes=4194304);n.isBackwards?(g.sibling=B.child,B.child=g):(Q=n.last,Q!==null?Q.sibling=g:B.child=g,n.last=g)}return n.tail!==null?(B=n.tail,n.rendering=B,n.tail=B.sibling,n.renderingStartTime=AB(),B.sibling=null,Q=OA.current,bA(OA,e?Q&1|2:Q&1),B):(yB(B),null);case 22:case 23:return UD(),e=B.memoizedState!==null,A!==null&&A.memoizedState!==null!==e&&(B.flags|=8192),e&&(B.mode&1)!==0?(wQ&1073741824)!==0&&(yB(B),B.subtreeFlags&6&&(B.flags|=8192)):yB(B),null;case 24:return null;case 25:return null}throw Error(L(156,B.tag))}function Fk(A,B){switch(eD(B),B.tag){case 1:return rQ(B.type)&&Ro(),A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 3:return _g(),JA(EQ),JA(SB),aD(),A=B.flags,(A&65536)!==0&&(A&128)===0?(B.flags=A&-65537|128,B):null;case 5:return oD(B),null;case 13:if(JA(OA),A=B.memoizedState,A!==null&&A.dehydrated!==null){if(B.alternate===null)throw Error(L(340));jg()}return A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 19:return JA(OA),null;case 4:return _g(),null;case 10:return ED(B.type._context),null;case 22:case 23:return UD(),null;case 24:return null;default:return null}}var Ji=!1,bB=!1,uk=typeof WeakSet=="function"?WeakSet:Set,K=null;function mg(A,B){var Q=A.ref;if(Q!==null)if(typeof Q=="function")try{Q(null)}catch(e){KA(A,B,e)}else Q.current=null}function Yc(A,B,Q){try{Q()}catch(e){KA(A,B,e)}}var jf=!1;function dk(A,B){if(sc=Mo,A=lp(),BD(A)){if("selectionStart"in A)var Q={start:A.selectionStart,end:A.selectionEnd};else A:{Q=(Q=A.ownerDocument)&&Q.defaultView||window;var e=Q.getSelection&&Q.getSelection();if(e&&e.rangeCount!==0){Q=e.anchorNode;var t=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{Q.nodeType,n.nodeType}catch{Q=null;break A}var g=0,E=-1,r=-1,C=0,i=0,o=A,a=null;B:for(;;){for(var s;o!==Q||t!==0&&o.nodeType!==3||(E=g+t),o!==n||e!==0&&o.nodeType!==3||(r=g+e),o.nodeType===3&&(g+=o.nodeValue.length),(s=o.firstChild)!==null;)a=o,o=s;for(;;){if(o===A)break B;if(a===Q&&++C===t&&(E=g),a===n&&++i===e&&(r=g),(s=o.nextSibling)!==null)break;o=a,a=o.parentNode}o=s}Q=E===-1||r===-1?null:{start:E,end:r}}else Q=null}Q=Q||{start:0,end:0}}else Q=null;for(Ic={focusedElem:A,selectionRange:Q},Mo=!1,K=B;K!==null;)if(B=K,A=B.child,(B.subtreeFlags&1028)!==0&&A!==null)A.return=B,K=A;else for(;K!==null;){B=K;try{var I=B.alternate;if((B.flags&1024)!==0)switch(B.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var D=I.memoizedProps,c=I.memoizedState,l=B.stateNode,w=l.getSnapshotBeforeUpdate(B.elementType===B.type?D:WQ(B.type,D),c);l.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=B.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(f){KA(B,B.return,f)}if(A=B.sibling,A!==null){A.return=B.return,K=A;break}K=B.return}return I=jf,jf=!1,I}function pr(A,B,Q){var e=B.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var n=t.destroy;t.destroy=void 0,n!==void 0&&Yc(B,Q,n)}t=t.next}while(t!==e)}}function Ha(A,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var Q=B=B.next;do{if((Q.tag&A)===A){var e=Q.create;Q.destroy=e()}Q=Q.next}while(Q!==B)}}function Nc(A){var B=A.ref;if(B!==null){var Q=A.stateNode;switch(A.tag){case 5:A=Q;break;default:A=Q}typeof B=="function"?B(A):B.current=A}}function aG(A){var B=A.alternate;B!==null&&(A.alternate=null,aG(B)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(B=A.stateNode,B!==null&&(delete B[ie],delete B[$r],delete B[wc],delete B[ek],delete B[tk])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function sG(A){return A.tag===5||A.tag===3||A.tag===4}function qf(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||sG(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function yc(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.nodeType===8?Q.parentNode.insertBefore(A,B):Q.insertBefore(A,B):(Q.nodeType===8?(B=Q.parentNode,B.insertBefore(A,Q)):(B=Q,B.appendChild(A)),Q=Q._reactRootContainer,Q!=null||B.onclick!==null||(B.onclick=Go));else if(e!==4&&(A=A.child,A!==null))for(yc(A,B,Q),A=A.sibling;A!==null;)yc(A,B,Q),A=A.sibling}function vc(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.insertBefore(A,B):Q.appendChild(A);else if(e!==4&&(A=A.child,A!==null))for(vc(A,B,Q),A=A.sibling;A!==null;)vc(A,B,Q),A=A.sibling}var UB=null,OQ=!1;function it(A,B,Q){for(Q=Q.child;Q!==null;)IG(A,B,Q),Q=Q.sibling}function IG(A,B,Q){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(va,Q)}catch{}switch(Q.tag){case 5:bB||mg(Q,B);case 6:var e=UB,t=OQ;UB=null,it(A,B,Q),UB=e,OQ=t,UB!==null&&(OQ?(A=UB,Q=Q.stateNode,A.nodeType===8?A.parentNode.removeChild(Q):A.removeChild(Q)):UB.removeChild(Q.stateNode));break;case 18:UB!==null&&(OQ?(A=UB,Q=Q.stateNode,A.nodeType===8?SI(A.parentNode,Q):A.nodeType===1&&SI(A,Q),Pr(A)):SI(UB,Q.stateNode));break;case 4:e=UB,t=OQ,UB=Q.stateNode.containerInfo,OQ=!0,it(A,B,Q),UB=e,OQ=t;break;case 0:case 11:case 14:case 15:if(!bB&&(e=Q.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){t=e=e.next;do{var n=t,g=n.destroy;n=n.tag,g!==void 0&&((n&2)!==0||(n&4)!==0)&&Yc(Q,B,g),t=t.next}while(t!==e)}it(A,B,Q);break;case 1:if(!bB&&(mg(Q,B),e=Q.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=Q.memoizedProps,e.state=Q.memoizedState,e.componentWillUnmount()}catch(E){KA(Q,B,E)}it(A,B,Q);break;case 21:it(A,B,Q);break;case 22:Q.mode&1?(bB=(e=bB)||Q.memoizedState!==null,it(A,B,Q),bB=e):it(A,B,Q);break;default:it(A,B,Q)}}function _f(A){var B=A.updateQueue;if(B!==null){A.updateQueue=null;var Q=A.stateNode;Q===null&&(Q=A.stateNode=new uk),B.forEach(function(e){var t=Yk.bind(null,A,e);Q.has(e)||(Q.add(e),e.then(t,t))})}}function TQ(A,B){var Q=B.deletions;if(Q!==null)for(var e=0;e<Q.length;e++){var t=Q[e];try{var n=A,g=B,E=g;A:for(;E!==null;){switch(E.tag){case 5:UB=E.stateNode,OQ=!1;break A;case 3:UB=E.stateNode.containerInfo,OQ=!0;break A;case 4:UB=E.stateNode.containerInfo,OQ=!0;break A}E=E.return}if(UB===null)throw Error(L(160));IG(n,g,t),UB=null,OQ=!1;var r=t.alternate;r!==null&&(r.return=null),t.return=null}catch(C){KA(t,B,C)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)lG(B,A),B=B.sibling}function lG(A,B){var Q=A.alternate,e=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(TQ(B,A),re(A),e&4){try{pr(3,A,A.return),Ha(3,A)}catch(D){KA(A,A.return,D)}try{pr(5,A,A.return)}catch(D){KA(A,A.return,D)}}break;case 1:TQ(B,A),re(A),e&512&&Q!==null&&mg(Q,Q.return);break;case 5:if(TQ(B,A),re(A),e&512&&Q!==null&&mg(Q,Q.return),A.flags&32){var t=A.stateNode;try{Or(t,"")}catch(D){KA(A,A.return,D)}}if(e&4&&(t=A.stateNode,t!=null)){var n=A.memoizedProps,g=Q!==null?Q.memoizedProps:n,E=A.type,r=A.updateQueue;if(A.updateQueue=null,r!==null)try{E==="input"&&n.type==="radio"&&n.name!=null&&J0(t,n),ec(E,g);var C=ec(E,n);for(g=0;g<r.length;g+=2){var i=r[g],o=r[g+1];i==="style"?H0(t,o):i==="dangerouslySetInnerHTML"?L0(t,o):i==="children"?Or(t,o):Tw(t,i,o,C)}switch(E){case"input":_l(t,n);break;case"textarea":S0(t,n);break;case"select":var a=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!n.multiple;var s=n.value;s!=null?bg(t,!!n.multiple,s,!1):a!==!!n.multiple&&(n.defaultValue!=null?bg(t,!!n.multiple,n.defaultValue,!0):bg(t,!!n.multiple,n.multiple?[]:"",!1))}t[$r]=n}catch(D){KA(A,A.return,D)}}break;case 6:if(TQ(B,A),re(A),e&4){if(A.stateNode===null)throw Error(L(162));t=A.stateNode,n=A.memoizedProps;try{t.nodeValue=n}catch(D){KA(A,A.return,D)}}break;case 3:if(TQ(B,A),re(A),e&4&&Q!==null&&Q.memoizedState.isDehydrated)try{Pr(B.containerInfo)}catch(D){KA(A,A.return,D)}break;case 4:TQ(B,A),re(A);break;case 13:TQ(B,A),re(A),t=A.child,t.flags&8192&&(n=t.memoizedState!==null,t.stateNode.isHidden=n,!n||t.alternate!==null&&t.alternate.memoizedState!==null||(dD=AB())),e&4&&_f(A);break;case 22:if(i=Q!==null&&Q.memoizedState!==null,A.mode&1?(bB=(C=bB)||i,TQ(B,A),bB=C):TQ(B,A),re(A),e&8192){if(C=A.memoizedState!==null,(A.stateNode.isHidden=C)&&!i&&(A.mode&1)!==0)for(K=A,i=A.child;i!==null;){for(o=K=i;K!==null;){switch(a=K,s=a.child,a.tag){case 0:case 11:case 14:case 15:pr(4,a,a.return);break;case 1:mg(a,a.return);var I=a.stateNode;if(typeof I.componentWillUnmount=="function"){e=a,Q=a.return;try{B=e,I.props=B.memoizedProps,I.state=B.memoizedState,I.componentWillUnmount()}catch(D){KA(e,Q,D)}}break;case 5:mg(a,a.return);break;case 22:if(a.memoizedState!==null){AU(o);continue}}s!==null?(s.return=a,K=s):AU(o)}i=i.sibling}A:for(i=null,o=A;;){if(o.tag===5){if(i===null){i=o;try{t=o.stateNode,C?(n=t.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(E=o.stateNode,r=o.memoizedProps.style,g=r!=null&&r.hasOwnProperty("display")?r.display:null,E.style.display=X0("display",g))}catch(D){KA(A,A.return,D)}}}else if(o.tag===6){if(i===null)try{o.stateNode.nodeValue=C?"":o.memoizedProps}catch(D){KA(A,A.return,D)}}else if((o.tag!==22&&o.tag!==23||o.memoizedState===null||o===A)&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===A)break A;for(;o.sibling===null;){if(o.return===null||o.return===A)break A;i===o&&(i=null),o=o.return}i===o&&(i=null),o.sibling.return=o.return,o=o.sibling}}break;case 19:TQ(B,A),re(A),e&4&&_f(A);break;case 21:break;default:TQ(B,A),re(A)}}function re(A){var B=A.flags;if(B&2){try{A:{for(var Q=A.return;Q!==null;){if(sG(Q)){var e=Q;break A}Q=Q.return}throw Error(L(160))}switch(e.tag){case 5:var t=e.stateNode;e.flags&32&&(Or(t,""),e.flags&=-33);var n=qf(A);vc(A,n,t);break;case 3:case 4:var g=e.stateNode.containerInfo,E=qf(A);yc(A,E,g);break;default:throw Error(L(161))}}catch(r){KA(A,A.return,r)}A.flags&=-3}B&4096&&(A.flags&=-4097)}function fk(A,B,Q){K=A,cG(A)}function cG(A,B,Q){for(var e=(A.mode&1)!==0;K!==null;){var t=K,n=t.child;if(t.tag===22&&e){var g=t.memoizedState!==null||Ji;if(!g){var E=t.alternate,r=E!==null&&E.memoizedState!==null||bB;E=Ji;var C=bB;if(Ji=g,(bB=r)&&!C)for(K=t;K!==null;)g=K,r=g.child,g.tag===22&&g.memoizedState!==null?BU(t):r!==null?(r.return=g,K=r):BU(t);for(;n!==null;)K=n,cG(n),n=n.sibling;K=t,Ji=E,bB=C}$f(A)}else(t.subtreeFlags&8772)!==0&&n!==null?(n.return=t,K=n):$f(A)}}function $f(A){for(;K!==null;){var B=K;if((B.flags&8772)!==0){var Q=B.alternate;try{if((B.flags&8772)!==0)switch(B.tag){case 0:case 11:case 15:bB||Ha(5,B);break;case 1:var e=B.stateNode;if(B.flags&4&&!bB)if(Q===null)e.componentDidMount();else{var t=B.elementType===B.type?Q.memoizedProps:WQ(B.type,Q.memoizedProps);e.componentDidUpdate(t,Q.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var n=B.updateQueue;n!==null&&Jf(B,n,e);break;case 3:var g=B.updateQueue;if(g!==null){if(Q=null,B.child!==null)switch(B.child.tag){case 5:Q=B.child.stateNode;break;case 1:Q=B.child.stateNode}Jf(B,g,Q)}break;case 5:var E=B.stateNode;if(Q===null&&B.flags&4){Q=E;var r=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":r.autoFocus&&Q.focus();break;case"img":r.src&&(Q.src=r.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var C=B.alternate;if(C!==null){var i=C.memoizedState;if(i!==null){var o=i.dehydrated;o!==null&&Pr(o)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}bB||B.flags&512&&Nc(B)}catch(a){KA(B,B.return,a)}}if(B===A){K=null;break}if(Q=B.sibling,Q!==null){Q.return=B.return,K=Q;break}K=B.return}}function AU(A){for(;K!==null;){var B=K;if(B===A){K=null;break}var Q=B.sibling;if(Q!==null){Q.return=B.return,K=Q;break}K=B.return}}function BU(A){for(;K!==null;){var B=K;try{switch(B.tag){case 0:case 11:case 15:var Q=B.return;try{Ha(4,B)}catch(r){KA(B,Q,r)}break;case 1:var e=B.stateNode;if(typeof e.componentDidMount=="function"){var t=B.return;try{e.componentDidMount()}catch(r){KA(B,t,r)}}var n=B.return;try{Nc(B)}catch(r){KA(B,n,r)}break;case 5:var g=B.return;try{Nc(B)}catch(r){KA(B,g,r)}}}catch(r){KA(B,B.return,r)}if(B===A){K=null;break}var E=B.sibling;if(E!==null){E.return=B.return,K=E;break}K=B.return}}var Uk=Math.ceil,Zo=et.ReactCurrentDispatcher,FD=et.ReactCurrentOwner,yQ=et.ReactCurrentBatchConfig,FA=0,IB=null,nB=null,hB=0,wQ=0,Yg=Pt(0),CB=0,nC=null,Sn=0,Ta=0,uD=0,Gr=null,QQ=null,dD=0,AE=1/0,ye=null,Lo=!1,bc=null,Jt=null,Si=!1,ht=null,Xo=0,Rr=0,kc=null,go=-1,Eo=0;function PB(){return(FA&6)!==0?AB():go!==-1?go:go=AB()}function St(A){return(A.mode&1)===0?1:(FA&2)!==0&&hB!==0?hB&-hB:gk.transition!==null?(Eo===0&&(Eo=$0()),Eo):(A=mA,A!==0||(A=window.event,A=A===void 0?16:gp(A.type)),A)}function KQ(A,B,Q,e){if(50<Rr)throw Rr=0,kc=null,Error(L(185));vC(A,Q,e),((FA&2)===0||A!==IB)&&(A===IB&&((FA&2)===0&&(Ta|=Q),CB===4&&Dt(A,hB)),CQ(A,e),Q===1&&FA===0&&(B.mode&1)===0&&(AE=AB()+500,Za&&Kt()))}function CQ(A,B){var Q=A.callbackNode;gb(A,B);var e=Uo(A,A===IB?hB:0);if(e===0)Q!==null&&Cf(Q),A.callbackNode=null,A.callbackPriority=0;else if(B=e&-e,A.callbackPriority!==B){if(Q!=null&&Cf(Q),B===1)A.tag===0?nk(QU.bind(null,A)):hp(QU.bind(null,A)),Bk(function(){(FA&6)===0&&Kt()}),Q=null;else{switch(Ap(e)){case 1:Q=zw;break;case 4:Q=q0;break;case 16:Q=fo;break;case 536870912:Q=_0;break;default:Q=fo}Q=MG(Q,wG.bind(null,A))}A.callbackPriority=B,A.callbackNode=Q}}function wG(A,B){if(go=-1,Eo=0,(FA&6)!==0)throw Error(L(327));var Q=A.callbackNode;if(Lg()&&A.callbackNode!==Q)return null;var e=Uo(A,A===IB?hB:0);if(e===0)return null;if((e&30)!==0||(e&A.expiredLanes)!==0||B)B=Ho(A,e);else{B=e;var t=FA;FA|=2;var n=FG();(IB!==A||hB!==B)&&(ye=null,AE=AB()+500,hn(A,B));do try{pk();break}catch(E){DG(A,E)}while(1);gD(),Zo.current=n,FA=t,nB!==null?B=0:(IB=null,hB=0,B=CB)}if(B!==0){if(B===2&&(t=rc(A),t!==0&&(e=t,B=Jc(A,t))),B===1)throw Q=nC,hn(A,0),Dt(A,e),CQ(A,AB()),Q;if(B===6)Dt(A,e);else{if(t=A.current.alternate,(e&30)===0&&!Mk(t)&&(B=Ho(A,e),B===2&&(n=rc(A),n!==0&&(e=n,B=Jc(A,n))),B===1))throw Q=nC,hn(A,0),Dt(A,e),CQ(A,AB()),Q;switch(A.finishedWork=t,A.finishedLanes=e,B){case 0:case 1:throw Error(L(345));case 2:on(A,QQ,ye);break;case 3:if(Dt(A,e),(e&130023424)===e&&(B=dD+500-AB(),10<B)){if(Uo(A,0)!==0)break;if(t=A.suspendedLanes,(t&e)!==e){PB(),A.pingedLanes|=A.suspendedLanes&t;break}A.timeoutHandle=cc(on.bind(null,A,QQ,ye),B);break}on(A,QQ,ye);break;case 4:if(Dt(A,e),(e&4194240)===e)break;for(B=A.eventTimes,t=-1;0<e;){var g=31-PQ(e);n=1<<g,g=B[g],g>t&&(t=g),e&=~n}if(e=t,e=AB()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*Uk(e/1960))-e,10<e){A.timeoutHandle=cc(on.bind(null,A,QQ,ye),e);break}on(A,QQ,ye);break;case 5:on(A,QQ,ye);break;default:throw Error(L(329))}}}return CQ(A,AB()),A.callbackNode===Q?wG.bind(null,A):null}function Jc(A,B){var Q=Gr;return A.current.memoizedState.isDehydrated&&(hn(A,B).flags|=256),A=Ho(A,B),A!==2&&(B=QQ,QQ=Q,B!==null&&Sc(B)),A}function Sc(A){QQ===null?QQ=A:QQ.push.apply(QQ,A)}function Mk(A){for(var B=A;;){if(B.flags&16384){var Q=B.updateQueue;if(Q!==null&&(Q=Q.stores,Q!==null))for(var e=0;e<Q.length;e++){var t=Q[e],n=t.getSnapshot;t=t.value;try{if(!$Q(n(),t))return!1}catch{return!1}}}if(Q=B.child,B.subtreeFlags&16384&&Q!==null)Q.return=B,B=Q;else{if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function Dt(A,B){for(B&=~uD,B&=~Ta,A.suspendedLanes|=B,A.pingedLanes&=~B,A=A.expirationTimes;0<B;){var Q=31-PQ(B),e=1<<Q;A[Q]=-1,B&=~e}}function QU(A){if((FA&6)!==0)throw Error(L(327));Lg();var B=Uo(A,0);if((B&1)===0)return CQ(A,AB()),null;var Q=Ho(A,B);if(A.tag!==0&&Q===2){var e=rc(A);e!==0&&(B=e,Q=Jc(A,e))}if(Q===1)throw Q=nC,hn(A,0),Dt(A,B),CQ(A,AB()),Q;if(Q===6)throw Error(L(345));return A.finishedWork=A.current.alternate,A.finishedLanes=B,on(A,QQ,ye),CQ(A,AB()),null}function fD(A,B){var Q=FA;FA|=1;try{return A(B)}finally{FA=Q,FA===0&&(AE=AB()+500,Za&&Kt())}}function Zn(A){ht!==null&&ht.tag===0&&(FA&6)===0&&Lg();var B=FA;FA|=1;var Q=yQ.transition,e=mA;try{if(yQ.transition=null,mA=1,A)return A()}finally{mA=e,yQ.transition=Q,FA=B,(FA&6)===0&&Kt()}}function UD(){wQ=Yg.current,JA(Yg)}function hn(A,B){A.finishedWork=null,A.finishedLanes=0;var Q=A.timeoutHandle;if(Q!==-1&&(A.timeoutHandle=-1,Ak(Q)),nB!==null)for(Q=nB.return;Q!==null;){var e=Q;switch(eD(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&Ro();break;case 3:_g(),JA(EQ),JA(SB),aD();break;case 5:oD(e);break;case 4:_g();break;case 13:JA(OA);break;case 19:JA(OA);break;case 10:ED(e.type._context);break;case 22:case 23:UD()}Q=Q.return}if(IB=A,nB=A=Zt(A.current,null),hB=wQ=B,CB=0,nC=null,uD=Ta=Sn=0,QQ=Gr=null,wn!==null){for(B=0;B<wn.length;B++)if(Q=wn[B],e=Q.interleaved,e!==null){Q.interleaved=null;var t=e.next,n=Q.pending;if(n!==null){var g=n.next;n.next=t,e.next=g}Q.pending=e}wn=null}return A}function DG(A,B){do{var Q=nB;try{if(gD(),eo.current=So,Jo){for(var e=xA.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jo=!1}if(Jn=0,oB=rB=xA=null,hr=!1,QC=0,FD.current=null,Q===null||Q.return===null){CB=1,nC=B,nB=null;break}A:{var n=A,g=Q.return,E=Q,r=B;if(B=hB,E.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){var C=r,i=E,o=i.tag;if((i.mode&1)===0&&(o===0||o===11||o===15)){var a=i.alternate;a?(i.updateQueue=a.updateQueue,i.memoizedState=a.memoizedState,i.lanes=a.lanes):(i.updateQueue=null,i.memoizedState=null)}var s=Wf(g);if(s!==null){s.flags&=-257,Of(s,g,E,n,B),s.mode&1&&Tf(n,C,B),B=s,r=C;var I=B.updateQueue;if(I===null){var D=new Set;D.add(r),B.updateQueue=D}else I.add(r);break A}else{if((B&1)===0){Tf(n,C,B),MD();break A}r=Error(L(426))}}else if(LA&&E.mode&1){var c=Wf(g);if(c!==null){(c.flags&65536)===0&&(c.flags|=256),Of(c,g,E,n,B),tD($g(r,E));break A}}n=r=$g(r,E),CB!==4&&(CB=2),Gr===null?Gr=[n]:Gr.push(n),n=g;do{switch(n.tag){case 3:n.flags|=65536,B&=-B,n.lanes|=B;var l=BG(n,r,B);kf(n,l);break A;case 1:E=r;var w=n.type,u=n.stateNode;if((n.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Jt===null||!Jt.has(u)))){n.flags|=65536,B&=-B,n.lanes|=B;var f=QG(n,E,B);kf(n,f);break A}}n=n.return}while(n!==null)}dG(Q)}catch(M){B=M,nB===Q&&Q!==null&&(nB=Q=Q.return);continue}break}while(1)}function FG(){var A=Zo.current;return Zo.current=So,A===null?So:A}function MD(){(CB===0||CB===3||CB===2)&&(CB=4),IB===null||(Sn&268435455)===0&&(Ta&268435455)===0||Dt(IB,hB)}function Ho(A,B){var Q=FA;FA|=2;var e=FG();(IB!==A||hB!==B)&&(ye=null,hn(A,B));do try{hk();break}catch(t){DG(A,t)}while(1);if(gD(),FA=Q,Zo.current=e,nB!==null)throw Error(L(261));return IB=null,hB=0,CB}function hk(){for(;nB!==null;)uG(nB)}function pk(){for(;nB!==null&&!qv();)uG(nB)}function uG(A){var B=UG(A.alternate,A,wQ);A.memoizedProps=A.pendingProps,B===null?dG(A):nB=B,FD.current=null}function dG(A){var B=A;do{var Q=B.alternate;if(A=B.return,(B.flags&32768)===0){if(Q=Dk(Q,B,wQ),Q!==null){nB=Q;return}}else{if(Q=Fk(Q,B),Q!==null){Q.flags&=32767,nB=Q;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{CB=6,nB=null;return}}if(B=B.sibling,B!==null){nB=B;return}nB=B=A}while(B!==null);CB===0&&(CB=5)}function on(A,B,Q){var e=mA,t=yQ.transition;try{yQ.transition=null,mA=1,Gk(A,B,Q,e)}finally{yQ.transition=t,mA=e}return null}function Gk(A,B,Q,e){do Lg();while(ht!==null);if((FA&6)!==0)throw Error(L(327));Q=A.finishedWork;var t=A.finishedLanes;if(Q===null)return null;if(A.finishedWork=null,A.finishedLanes=0,Q===A.current)throw Error(L(177));A.callbackNode=null,A.callbackPriority=0;var n=Q.lanes|Q.childLanes;if(Eb(A,n),A===IB&&(nB=IB=null,hB=0),(Q.subtreeFlags&2064)===0&&(Q.flags&2064)===0||Si||(Si=!0,MG(fo,function(){return Lg(),null})),n=(Q.flags&15990)!==0,(Q.subtreeFlags&15990)!==0||n){n=yQ.transition,yQ.transition=null;var g=mA;mA=1;var E=FA;FA|=4,FD.current=null,dk(A,Q),lG(Q,A),zb(Ic),Mo=!!sc,Ic=sc=null,A.current=Q,fk(Q),_v(),FA=E,mA=g,yQ.transition=n}else A.current=Q;if(Si&&(Si=!1,ht=A,Xo=t),n=A.pendingLanes,n===0&&(Jt=null),Bb(Q.stateNode),CQ(A,AB()),B!==null)for(e=A.onRecoverableError,Q=0;Q<B.length;Q++)t=B[Q],e(t.value,{componentStack:t.stack,digest:t.digest});if(Lo)throw Lo=!1,A=bc,bc=null,A;return(Xo&1)!==0&&A.tag!==0&&Lg(),n=A.pendingLanes,(n&1)!==0?A===kc?Rr++:(Rr=0,kc=A):Rr=0,Kt(),null}function Lg(){if(ht!==null){var A=Ap(Xo),B=yQ.transition,Q=mA;try{if(yQ.transition=null,mA=16>A?16:A,ht===null)var e=!1;else{if(A=ht,ht=null,Xo=0,(FA&6)!==0)throw Error(L(331));var t=FA;for(FA|=4,K=A.current;K!==null;){var n=K,g=n.child;if((K.flags&16)!==0){var E=n.deletions;if(E!==null){for(var r=0;r<E.length;r++){var C=E[r];for(K=C;K!==null;){var i=K;switch(i.tag){case 0:case 11:case 15:pr(8,i,n)}var o=i.child;if(o!==null)o.return=i,K=o;else for(;K!==null;){i=K;var a=i.sibling,s=i.return;if(aG(i),i===C){K=null;break}if(a!==null){a.return=s,K=a;break}K=s}}}var I=n.alternate;if(I!==null){var D=I.child;if(D!==null){I.child=null;do{var c=D.sibling;D.sibling=null,D=c}while(D!==null)}}K=n}}if((n.subtreeFlags&2064)!==0&&g!==null)g.return=n,K=g;else A:for(;K!==null;){if(n=K,(n.flags&2048)!==0)switch(n.tag){case 0:case 11:case 15:pr(9,n,n.return)}var l=n.sibling;if(l!==null){l.return=n.return,K=l;break A}K=n.return}}var w=A.current;for(K=w;K!==null;){g=K;var u=g.child;if((g.subtreeFlags&2064)!==0&&u!==null)u.return=g,K=u;else A:for(g=w;K!==null;){if(E=K,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Ha(9,E)}}catch(M){KA(E,E.return,M)}if(E===g){K=null;break A}var f=E.sibling;if(f!==null){f.return=E.return,K=f;break A}K=E.return}}if(FA=t,Kt(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(va,A)}catch{}e=!0}return e}finally{mA=Q,yQ.transition=B}}return!1}function eU(A,B,Q){B=$g(Q,B),B=BG(A,B,1),A=kt(A,B,1),B=PB(),A!==null&&(vC(A,1,B),CQ(A,B))}function KA(A,B,Q){if(A.tag===3)eU(A,A,Q);else for(;B!==null;){if(B.tag===3){eU(B,A,Q);break}else if(B.tag===1){var e=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Jt===null||!Jt.has(e))){A=$g(Q,A),A=QG(B,A,1),B=kt(B,A,1),A=PB(),B!==null&&(vC(B,1,A),CQ(B,A));break}}B=B.return}}function Rk(A,B,Q){var e=A.pingCache;e!==null&&e.delete(B),B=PB(),A.pingedLanes|=A.suspendedLanes&Q,IB===A&&(hB&Q)===Q&&(CB===4||CB===3&&(hB&130023424)===hB&&500>AB()-dD?hn(A,0):uD|=Q),CQ(A,B)}function fG(A,B){B===0&&((A.mode&1)===0?B=1:(B=Gi,Gi<<=1,(Gi&130023424)===0&&(Gi=4194304)));var Q=PB();A=ze(A,B),A!==null&&(vC(A,B,Q),CQ(A,Q))}function mk(A){var B=A.memoizedState,Q=0;B!==null&&(Q=B.retryLane),fG(A,Q)}function Yk(A,B){var Q=0;switch(A.tag){case 13:var e=A.stateNode,t=A.memoizedState;t!==null&&(Q=t.retryLane);break;case 19:e=A.stateNode;break;default:throw Error(L(314))}e!==null&&e.delete(B),fG(A,Q)}var UG;UG=function(A,B,Q){if(A!==null)if(A.memoizedProps!==B.pendingProps||EQ.current)nQ=!0;else{if((A.lanes&Q)===0&&(B.flags&128)===0)return nQ=!1,wk(A,B,Q);nQ=(A.flags&131072)!==0}else nQ=!1,LA&&(B.flags&1048576)!==0&&pp(B,No,B.index);switch(B.lanes=0,B.tag){case 2:var e=B.type;no(A,B),A=B.pendingProps;var t=Kg(B,SB.current);Zg(B,Q),t=ID(null,B,e,A,t,Q);var n=lD();return B.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,rQ(e)?(n=!0,mo(B)):n=!1,B.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,CD(B),t.updater=La,B.stateNode=t,t._reactInternals=B,Uc(B,e,A,Q),B=pc(null,B,e,!0,n,Q)):(B.tag=0,LA&&n&&QD(B),WB(null,B,t,Q),B=B.child),B;case 16:e=B.elementType;A:{switch(no(A,B),A=B.pendingProps,t=e._init,e=t(e._payload),B.type=e,t=B.tag=yk(e),A=WQ(e,A),t){case 0:B=hc(null,B,e,A,Q);break A;case 1:B=zf(null,B,e,A,Q);break A;case 11:B=Vf(null,B,e,A,Q);break A;case 14:B=xf(null,B,e,WQ(e.type,A),Q);break A}throw Error(L(306,e,""))}return B;case 0:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:WQ(e,t),hc(A,B,e,t,Q);case 1:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:WQ(e,t),zf(A,B,e,t,Q);case 3:A:{if(gG(B),A===null)throw Error(L(387));e=B.pendingProps,n=B.memoizedState,t=n.element,Yp(A,B),bo(B,e,null,Q);var g=B.memoizedState;if(e=g.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},B.updateQueue.baseState=n,B.memoizedState=n,B.flags&256){t=$g(Error(L(423)),B),B=Pf(A,B,e,Q,t);break A}else if(e!==t){t=$g(Error(L(424)),B),B=Pf(A,B,e,Q,t);break A}else for(DQ=bt(B.stateNode.containerInfo.firstChild),uQ=B,LA=!0,VQ=null,Q=bp(B,null,e,Q),B.child=Q;Q;)Q.flags=Q.flags&-3|4096,Q=Q.sibling;else{if(jg(),e===t){B=Pe(A,B,Q);break A}WB(A,B,e,Q)}B=B.child}return B;case 5:return kp(B),A===null&&uc(B),e=B.type,t=B.pendingProps,n=A!==null?A.memoizedProps:null,g=t.children,lc(e,t)?g=null:n!==null&&lc(e,n)&&(B.flags|=32),nG(A,B),WB(A,B,g,Q),B.child;case 6:return A===null&&uc(B),null;case 13:return EG(A,B,Q);case 4:return iD(B,B.stateNode.containerInfo),e=B.pendingProps,A===null?B.child=qg(B,null,e,Q):WB(A,B,e,Q),B.child;case 11:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:WQ(e,t),Vf(A,B,e,t,Q);case 7:return WB(A,B,B.pendingProps,Q),B.child;case 8:return WB(A,B,B.pendingProps.children,Q),B.child;case 12:return WB(A,B,B.pendingProps.children,Q),B.child;case 10:A:{if(e=B.type._context,t=B.pendingProps,n=B.memoizedProps,g=t.value,bA(yo,e._currentValue),e._currentValue=g,n!==null)if($Q(n.value,g)){if(n.children===t.children&&!EQ.current){B=Pe(A,B,Q);break A}}else for(n=B.child,n!==null&&(n.return=B);n!==null;){var E=n.dependencies;if(E!==null){g=n.child;for(var r=E.firstContext;r!==null;){if(r.context===e){if(n.tag===1){r=We(-1,Q&-Q),r.tag=2;var C=n.updateQueue;if(C!==null){C=C.shared;var i=C.pending;i===null?r.next=r:(r.next=i.next,i.next=r),C.pending=r}}n.lanes|=Q,r=n.alternate,r!==null&&(r.lanes|=Q),dc(n.return,Q,B),E.lanes|=Q;break}r=r.next}}else if(n.tag===10)g=n.type===B.type?null:n.child;else if(n.tag===18){if(g=n.return,g===null)throw Error(L(341));g.lanes|=Q,E=g.alternate,E!==null&&(E.lanes|=Q),dc(g,Q,B),g=n.sibling}else g=n.child;if(g!==null)g.return=n;else for(g=n;g!==null;){if(g===B){g=null;break}if(n=g.sibling,n!==null){n.return=g.return,g=n;break}g=g.return}n=g}WB(A,B,t.children,Q),B=B.child}return B;case 9:return t=B.type,e=B.pendingProps.children,Zg(B,Q),t=bQ(t),e=e(t),B.flags|=1,WB(A,B,e,Q),B.child;case 14:return e=B.type,t=WQ(e,B.pendingProps),t=WQ(e.type,t),xf(A,B,e,t,Q);case 15:return eG(A,B,B.type,B.pendingProps,Q);case 17:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:WQ(e,t),no(A,B),B.tag=1,rQ(e)?(A=!0,mo(B)):A=!1,Zg(B,Q),yp(B,e,t),Uc(B,e,t,Q),pc(null,B,e,!0,A,Q);case 19:return rG(A,B,Q);case 22:return tG(A,B,Q)}throw Error(L(156,B.tag))};function MG(A,B){return j0(A,B)}function Nk(A,B,Q,e){this.tag=A,this.key=Q,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function NQ(A,B,Q,e){return new Nk(A,B,Q,e)}function hD(A){return A=A.prototype,!(!A||!A.isReactComponent)}function yk(A){if(typeof A=="function")return hD(A)?1:0;if(A!=null){if(A=A.$$typeof,A===Ow)return 11;if(A===Vw)return 14}return 2}function Zt(A,B){var Q=A.alternate;return Q===null?(Q=NQ(A.tag,B,A.key,A.mode),Q.elementType=A.elementType,Q.type=A.type,Q.stateNode=A.stateNode,Q.alternate=A,A.alternate=Q):(Q.pendingProps=B,Q.type=A.type,Q.flags=0,Q.subtreeFlags=0,Q.deletions=null),Q.flags=A.flags&14680064,Q.childLanes=A.childLanes,Q.lanes=A.lanes,Q.child=A.child,Q.memoizedProps=A.memoizedProps,Q.memoizedState=A.memoizedState,Q.updateQueue=A.updateQueue,B=A.dependencies,Q.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},Q.sibling=A.sibling,Q.index=A.index,Q.ref=A.ref,Q}function ro(A,B,Q,e,t,n){var g=2;if(e=A,typeof A=="function")hD(A)&&(g=1);else if(typeof A=="string")g=5;else A:switch(A){case ug:return pn(Q.children,t,n,B);case Ww:g=8,t|=8;break;case zl:return A=NQ(12,Q,B,t|2),A.elementType=zl,A.lanes=n,A;case Pl:return A=NQ(13,Q,B,t),A.elementType=Pl,A.lanes=n,A;case Kl:return A=NQ(19,Q,B,t),A.elementType=Kl,A.lanes=n,A;case v0:return Wa(Q,t,n,B);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case N0:g=10;break A;case y0:g=9;break A;case Ow:g=11;break A;case Vw:g=14;break A;case st:g=16,e=null;break A}throw Error(L(130,A==null?A:typeof A,""))}return B=NQ(g,Q,B,t),B.elementType=A,B.type=e,B.lanes=n,B}function pn(A,B,Q,e){return A=NQ(7,A,e,B),A.lanes=Q,A}function Wa(A,B,Q,e){return A=NQ(22,A,e,B),A.elementType=v0,A.lanes=Q,A.stateNode={isHidden:!1},A}function VI(A,B,Q){return A=NQ(6,A,null,B),A.lanes=Q,A}function xI(A,B,Q){return B=NQ(4,A.children!==null?A.children:[],A.key,B),B.lanes=Q,B.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},B}function vk(A,B,Q,e,t){this.tag=B,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pI(0),this.expirationTimes=pI(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pI(0),this.identifierPrefix=e,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function pD(A,B,Q,e,t,n,g,E,r){return A=new vk(A,B,Q,E,r),B===1?(B=1,n===!0&&(B|=8)):B=0,n=NQ(3,null,null,B),A.current=n,n.stateNode=A,n.memoizedState={element:e,isDehydrated:Q,cache:null,transitions:null,pendingSuspenseBoundaries:null},CD(n),A}function bk(A,B,Q){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fg,key:e==null?null:""+e,children:A,containerInfo:B,implementation:Q}}function hG(A){if(!A)return Wt;A=A._reactInternals;A:{if(jn(A)!==A||A.tag!==1)throw Error(L(170));var B=A;do{switch(B.tag){case 3:B=B.stateNode.context;break A;case 1:if(rQ(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break A}}B=B.return}while(B!==null);throw Error(L(171))}if(A.tag===1){var Q=A.type;if(rQ(Q))return Mp(A,Q,B)}return B}function pG(A,B,Q,e,t,n,g,E,r){return A=pD(Q,e,!0,A,t,n,g,E,r),A.context=hG(null),Q=A.current,e=PB(),t=St(Q),n=We(e,t),n.callback=B!=null?B:null,kt(Q,n,t),A.current.lanes=t,vC(A,t,e),CQ(A,e),A}function Oa(A,B,Q,e){var t=B.current,n=PB(),g=St(t);return Q=hG(Q),B.context===null?B.context=Q:B.pendingContext=Q,B=We(n,g),B.payload={element:A},e=e===void 0?null:e,e!==null&&(B.callback=e),A=kt(t,B,g),A!==null&&(KQ(A,t,g,n),Qo(A,t,g)),g}function To(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function tU(A,B){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var Q=A.retryLane;A.retryLane=Q!==0&&Q<B?Q:B}}function GD(A,B){tU(A,B),(A=A.alternate)&&tU(A,B)}function kk(){return null}var GG=typeof reportError=="function"?reportError:function(A){console.error(A)};function RD(A){this._internalRoot=A}Va.prototype.render=RD.prototype.render=function(A){var B=this._internalRoot;if(B===null)throw Error(L(409));Oa(A,B,null,null)};Va.prototype.unmount=RD.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var B=A.containerInfo;Zn(function(){Oa(null,A,null,null)}),B[xe]=null}};function Va(A){this._internalRoot=A}Va.prototype.unstable_scheduleHydration=function(A){if(A){var B=ep();A={blockedOn:null,target:A,priority:B};for(var Q=0;Q<wt.length&&B!==0&&B<wt[Q].priority;Q++);wt.splice(Q,0,A),Q===0&&np(A)}};function mD(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function xa(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function nU(){}function Jk(A,B,Q,e,t){if(t){if(typeof e=="function"){var n=e;e=function(){var C=To(g);n.call(C)}}var g=pG(B,e,A,0,null,!1,!1,"",nU);return A._reactRootContainer=g,A[xe]=g.current,qr(A.nodeType===8?A.parentNode:A),Zn(),g}for(;t=A.lastChild;)A.removeChild(t);if(typeof e=="function"){var E=e;e=function(){var C=To(r);E.call(C)}}var r=pD(A,0,!1,null,null,!1,!1,"",nU);return A._reactRootContainer=r,A[xe]=r.current,qr(A.nodeType===8?A.parentNode:A),Zn(function(){Oa(B,r,Q,e)}),r}function za(A,B,Q,e,t){var n=Q._reactRootContainer;if(n){var g=n;if(typeof t=="function"){var E=t;t=function(){var r=To(g);E.call(r)}}Oa(B,g,A,t)}else g=Jk(Q,B,A,t,e);return To(g)}Bp=function(A){switch(A.tag){case 3:var B=A.stateNode;if(B.current.memoizedState.isDehydrated){var Q=or(B.pendingLanes);Q!==0&&(Pw(B,Q|1),CQ(B,AB()),(FA&6)===0&&(AE=AB()+500,Kt()))}break;case 13:Zn(function(){var e=ze(A,1);if(e!==null){var t=PB();KQ(e,A,1,t)}}),GD(A,1)}};Kw=function(A){if(A.tag===13){var B=ze(A,134217728);if(B!==null){var Q=PB();KQ(B,A,134217728,Q)}GD(A,134217728)}};Qp=function(A){if(A.tag===13){var B=St(A),Q=ze(A,B);if(Q!==null){var e=PB();KQ(Q,A,B,e)}GD(A,B)}};ep=function(){return mA};tp=function(A,B){var Q=mA;try{return mA=A,B()}finally{mA=Q}};nc=function(A,B,Q){switch(B){case"input":if(_l(A,Q),B=Q.name,Q.type==="radio"&&B!=null){for(Q=A;Q.parentNode;)Q=Q.parentNode;for(Q=Q.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<Q.length;B++){var e=Q[B];if(e!==A&&e.form===A.form){var t=Sa(e);if(!t)throw Error(L(90));k0(e),_l(e,t)}}}break;case"textarea":S0(A,Q);break;case"select":B=Q.value,B!=null&&bg(A,!!Q.multiple,B,!1)}};O0=fD;V0=Zn;var Sk={usingClientEntryPoint:!1,Events:[kC,Mg,Sa,T0,W0,fD]},Br={findFiberByHostInstance:cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Zk={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=P0(A),A===null?null:A.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{va=Zi.inject(Zk),ce=Zi}catch{}}UQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sk;UQ.createPortal=function(A,B){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mD(B))throw Error(L(200));return bk(A,B,null,Q)};UQ.createRoot=function(A,B){if(!mD(A))throw Error(L(299));var Q=!1,e="",t=GG;return B!=null&&(B.unstable_strictMode===!0&&(Q=!0),B.identifierPrefix!==void 0&&(e=B.identifierPrefix),B.onRecoverableError!==void 0&&(t=B.onRecoverableError)),B=pD(A,1,!1,null,null,Q,!1,e,t),A[xe]=B.current,qr(A.nodeType===8?A.parentNode:A),new RD(B)};UQ.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var B=A._reactInternals;if(B===void 0)throw typeof A.render=="function"?Error(L(188)):(A=Object.keys(A).join(","),Error(L(268,A)));return A=P0(B),A=A===null?null:A.stateNode,A};UQ.flushSync=function(A){return Zn(A)};UQ.hydrate=function(A,B,Q){if(!xa(B))throw Error(L(200));return za(null,A,B,!0,Q)};UQ.hydrateRoot=function(A,B,Q){if(!mD(A))throw Error(L(405));var e=Q!=null&&Q.hydratedSources||null,t=!1,n="",g=GG;if(Q!=null&&(Q.unstable_strictMode===!0&&(t=!0),Q.identifierPrefix!==void 0&&(n=Q.identifierPrefix),Q.onRecoverableError!==void 0&&(g=Q.onRecoverableError)),B=pG(B,null,A,1,Q!=null?Q:null,t,!1,n,g),A[xe]=B.current,qr(A),e)for(A=0;A<e.length;A++)Q=e[A],t=Q._getVersion,t=t(Q._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[Q,t]:B.mutableSourceEagerHydrationData.push(Q,t);return new Va(B)};UQ.render=function(A,B,Q){if(!xa(B))throw Error(L(200));return za(null,A,B,!1,Q)};UQ.unmountComponentAtNode=function(A){if(!xa(A))throw Error(L(40));return A._reactRootContainer?(Zn(function(){za(null,null,A,!1,function(){A._reactRootContainer=null,A[xe]=null})}),!0):!1};UQ.unstable_batchedUpdates=fD;UQ.unstable_renderSubtreeIntoContainer=function(A,B,Q,e){if(!xa(Q))throw Error(L(200));if(A==null||A._reactInternals===void 0)throw Error(L(38));return za(A,B,Q,!1,e)};UQ.version="18.2.0-next-9e3b772b8-20220608";(function(A){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(Q){console.error(Q)}}B(),A.exports=UQ})(Te);const Xg=F0(Te.exports);var gU=Te.exports;Vl.createRoot=gU.createRoot,Vl.hydrateRoot=gU.hydrateRoot;function gC(){return gC=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},gC.apply(this,arguments)}var Fn;(function(A){A.Pop="POP",A.Push="PUSH",A.Replace="REPLACE"})(Fn||(Fn={}));var EU=function(A){return A},rU="beforeunload",Lk="popstate";function Xk(A){A===void 0&&(A={});var B=A,Q=B.window,e=Q===void 0?document.defaultView:Q,t=e.history;function n(){var h=e.location,G=h.pathname,J=h.search,k=h.hash,S=t.state||{};return[S.idx,EU({pathname:G,search:J,hash:k,state:S.usr||null,key:S.key||"default"})]}var g=null;function E(){if(g)s.call(g),g=null;else{var h=Fn.Pop,G=n(),J=G[0],k=G[1];if(s.length){if(J!=null){var S=i-J;S&&(g={action:h,location:k,retry:function(){M(S*-1)}},M(S))}}else w(h)}}e.addEventListener(Lk,E);var r=Fn.Pop,C=n(),i=C[0],o=C[1],a=iU(),s=iU();i==null&&(i=0,t.replaceState(gC({},t.state,{idx:i}),""));function I(h){return typeof h=="string"?h:Tk(h)}function D(h,G){return G===void 0&&(G=null),EU(gC({pathname:o.pathname,hash:"",search:""},typeof h=="string"?cE(h):h,{state:G,key:Hk()}))}function c(h,G){return[{usr:h.state,key:h.key,idx:G},I(h)]}function l(h,G,J){return!s.length||(s.call({action:h,location:G,retry:J}),!1)}function w(h){r=h;var G=n();i=G[0],o=G[1],a.call({action:r,location:o})}function u(h,G){var J=Fn.Push,k=D(h,G);function S(){u(h,G)}if(l(J,k,S)){var W=c(k,i+1),x=W[0],tA=W[1];try{t.pushState(x,"",tA)}catch{e.location.assign(tA)}w(J)}}function f(h,G){var J=Fn.Replace,k=D(h,G);function S(){f(h,G)}if(l(J,k,S)){var W=c(k,i),x=W[0],tA=W[1];t.replaceState(x,"",tA),w(J)}}function M(h){t.go(h)}var p={get action(){return r},get location(){return o},createHref:I,push:u,replace:f,go:M,back:function(){M(-1)},forward:function(){M(1)},listen:function(G){return a.push(G)},block:function(G){var J=s.push(G);return s.length===1&&e.addEventListener(rU,CU),function(){J(),s.length||e.removeEventListener(rU,CU)}}};return p}function CU(A){A.preventDefault(),A.returnValue=""}function iU(){var A=[];return{get length(){return A.length},push:function(Q){return A.push(Q),function(){A=A.filter(function(e){return e!==Q})}},call:function(Q){A.forEach(function(e){return e&&e(Q)})}}}function Hk(){return Math.random().toString(36).substr(2,8)}function Tk(A){var B=A.pathname,Q=B===void 0?"/":B,e=A.search,t=e===void 0?"":e,n=A.hash,g=n===void 0?"":n;return t&&t!=="?"&&(Q+=t.charAt(0)==="?"?t:"?"+t),g&&g!=="#"&&(Q+=g.charAt(0)==="#"?g:"#"+g),Q}function cE(A){var B={};if(A){var Q=A.indexOf("#");Q>=0&&(B.hash=A.substr(Q),A=A.substr(0,Q));var e=A.indexOf("?");e>=0&&(B.search=A.substr(e),A=A.substr(0,e)),A&&(B.pathname=A)}return B}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const RG=d.exports.createContext(null),YD=d.exports.createContext(null),Pa=d.exports.createContext({outlet:null,matches:[]});function Ue(A,B){if(!A)throw new Error(B)}function Wk(A,B,Q){Q===void 0&&(Q="/");let e=typeof B=="string"?cE(B):B,t=YG(e.pathname||"/",Q);if(t==null)return null;let n=mG(A);Ok(n);let g=null;for(let E=0;g==null&&E<n.length;++E)g=$k(n[E],t);return g}function mG(A,B,Q,e){return B===void 0&&(B=[]),Q===void 0&&(Q=[]),e===void 0&&(e=""),A.forEach((t,n)=>{let g={relativePath:t.path||"",caseSensitive:t.caseSensitive===!0,childrenIndex:n,route:t};g.relativePath.startsWith("/")&&(g.relativePath.startsWith(e)||Ue(!1),g.relativePath=g.relativePath.slice(e.length));let E=Gn([e,g.relativePath]),r=Q.concat(g);t.children&&t.children.length>0&&(t.index===!0&&Ue(!1),mG(t.children,B,r,E)),!(t.path==null&&!t.index)&&B.push({path:E,score:qk(E,t.index),routesMeta:r})}),B}function Ok(A){A.sort((B,Q)=>B.score!==Q.score?Q.score-B.score:_k(B.routesMeta.map(e=>e.childrenIndex),Q.routesMeta.map(e=>e.childrenIndex)))}const Vk=/^:\w+$/,xk=3,zk=2,Pk=1,Kk=10,jk=-2,oU=A=>A==="*";function qk(A,B){let Q=A.split("/"),e=Q.length;return Q.some(oU)&&(e+=jk),B&&(e+=zk),Q.filter(t=>!oU(t)).reduce((t,n)=>t+(Vk.test(n)?xk:n===""?Pk:Kk),e)}function _k(A,B){return A.length===B.length&&A.slice(0,-1).every((e,t)=>e===B[t])?A[A.length-1]-B[B.length-1]:0}function $k(A,B){let{routesMeta:Q}=A,e={},t="/",n=[];for(let g=0;g<Q.length;++g){let E=Q[g],r=g===Q.length-1,C=t==="/"?B:B.slice(t.length)||"/",i=AJ({path:E.relativePath,caseSensitive:E.caseSensitive,end:r},C);if(!i)return null;Object.assign(e,i.params);let o=E.route;n.push({params:e,pathname:Gn([t,i.pathname]),pathnameBase:NG(Gn([t,i.pathnameBase])),route:o}),i.pathnameBase!=="/"&&(t=Gn([t,i.pathnameBase]))}return n}function AJ(A,B){typeof A=="string"&&(A={path:A,caseSensitive:!1,end:!0});let[Q,e]=BJ(A.path,A.caseSensitive,A.end),t=B.match(Q);if(!t)return null;let n=t[0],g=n.replace(/(.)\/+$/,"$1"),E=t.slice(1);return{params:e.reduce((C,i,o)=>{if(i==="*"){let a=E[o]||"";g=n.slice(0,n.length-a.length).replace(/(.)\/+$/,"$1")}return C[i]=QJ(E[o]||""),C},{}),pathname:n,pathnameBase:g,pattern:A}}function BJ(A,B,Q){B===void 0&&(B=!1),Q===void 0&&(Q=!0);let e=[],t="^"+A.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(g,E)=>(e.push(E),"([^\\/]+)"));return A.endsWith("*")?(e.push("*"),t+=A==="*"||A==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t+=Q?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(t,B?void 0:"i"),e]}function QJ(A,B){try{return decodeURIComponent(A)}catch{return A}}function eJ(A,B){B===void 0&&(B="/");let{pathname:Q,search:e="",hash:t=""}=typeof A=="string"?cE(A):A;return{pathname:Q?Q.startsWith("/")?Q:tJ(Q,B):B,search:gJ(e),hash:EJ(t)}}function tJ(A,B){let Q=B.replace(/\/+$/,"").split("/");return A.split("/").forEach(t=>{t===".."?Q.length>1&&Q.pop():t!=="."&&Q.push(t)}),Q.length>1?Q.join("/"):"/"}function nJ(A,B,Q){let e=typeof A=="string"?cE(A):A,t=A===""||e.pathname===""?"/":e.pathname,n;if(t==null)n=Q;else{let E=B.length-1;if(t.startsWith("..")){let r=t.split("/");for(;r[0]==="..";)r.shift(),E-=1;e.pathname=r.join("/")}n=E>=0?B[E]:"/"}let g=eJ(e,n);return t&&t!=="/"&&t.endsWith("/")&&!g.pathname.endsWith("/")&&(g.pathname+="/"),g}function YG(A,B){if(B==="/")return A;if(!A.toLowerCase().startsWith(B.toLowerCase()))return null;let Q=A.charAt(B.length);return Q&&Q!=="/"?null:A.slice(B.length)||"/"}const Gn=A=>A.join("/").replace(/\/\/+/g,"/"),NG=A=>A.replace(/\/+$/,"").replace(/^\/*/,"/"),gJ=A=>!A||A==="?"?"":A.startsWith("?")?A:"?"+A,EJ=A=>!A||A==="#"?"":A.startsWith("#")?A:"#"+A;function SC(){return d.exports.useContext(YD)!=null}function yG(){return SC()||Ue(!1),d.exports.useContext(YD).location}function ND(){SC()||Ue(!1);let{basename:A,navigator:B}=d.exports.useContext(RG),{matches:Q}=d.exports.useContext(Pa),{pathname:e}=yG(),t=JSON.stringify(Q.map(E=>E.pathnameBase)),n=d.exports.useRef(!1);return d.exports.useEffect(()=>{n.current=!0}),d.exports.useCallback(function(E,r){if(r===void 0&&(r={}),!n.current)return;if(typeof E=="number"){B.go(E);return}let C=nJ(E,JSON.parse(t),e);A!=="/"&&(C.pathname=Gn([A,C.pathname])),(r.replace?B.replace:B.push)(C,r.state)},[A,B,t,e])}const rJ=d.exports.createContext(null);function CJ(A){let B=d.exports.useContext(Pa).outlet;return B&&d.exports.createElement(rJ.Provider,{value:A},B)}function iJ(A,B){SC()||Ue(!1);let{matches:Q}=d.exports.useContext(Pa),e=Q[Q.length-1],t=e?e.params:{};e&&e.pathname;let n=e?e.pathnameBase:"/";e&&e.route;let g=yG(),E;if(B){var r;let a=typeof B=="string"?cE(B):B;n==="/"||((r=a.pathname)==null?void 0:r.startsWith(n))||Ue(!1),E=a}else E=g;let C=E.pathname||"/",i=n==="/"?C:C.slice(n.length)||"/",o=Wk(A,{pathname:i});return oJ(o&&o.map(a=>Object.assign({},a,{params:Object.assign({},t,a.params),pathname:Gn([n,a.pathname]),pathnameBase:a.pathnameBase==="/"?n:Gn([n,a.pathnameBase])})),Q)}function oJ(A,B){return B===void 0&&(B=[]),A==null?null:A.reduceRight((Q,e,t)=>d.exports.createElement(Pa.Provider,{children:e.route.element!==void 0?e.route.element:Q,value:{outlet:Q,matches:B.concat(A.slice(0,t+1))}}),null)}function vG(A){let{to:B,replace:Q,state:e}=A;SC()||Ue(!1);let t=ND();return d.exports.useEffect(()=>{t(B,{replace:Q,state:e})}),null}function aJ(A){return CJ(A.context)}function wg(A){Ue(!1)}function sJ(A){let{basename:B="/",children:Q=null,location:e,navigationType:t=Fn.Pop,navigator:n,static:g=!1}=A;SC()&&Ue(!1);let E=NG(B),r=d.exports.useMemo(()=>({basename:E,navigator:n,static:g}),[E,n,g]);typeof e=="string"&&(e=cE(e));let{pathname:C="/",search:i="",hash:o="",state:a=null,key:s="default"}=e,I=d.exports.useMemo(()=>{let D=YG(C,E);return D==null?null:{pathname:D,search:i,hash:o,state:a,key:s}},[E,C,i,o,a,s]);return I==null?null:d.exports.createElement(RG.Provider,{value:r},d.exports.createElement(YD.Provider,{children:Q,value:{location:I,navigationType:t}}))}function IJ(A){let{children:B,location:Q}=A;return iJ(Zc(B),Q)}function Zc(A){let B=[];return d.exports.Children.forEach(A,Q=>{if(!d.exports.isValidElement(Q))return;if(Q.type===d.exports.Fragment){B.push.apply(B,Zc(Q.props.children));return}Q.type!==wg&&Ue(!1);let e={caseSensitive:Q.props.caseSensitive,element:Q.props.element,index:Q.props.index,path:Q.props.path};Q.props.children&&(e.children=Zc(Q.props.children)),B.push(e)}),B}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lJ(A){let{basename:B,children:Q,window:e}=A,t=d.exports.useRef();t.current==null&&(t.current=Xk({window:e}));let n=t.current,[g,E]=d.exports.useState({action:n.action,location:n.location});return d.exports.useLayoutEffect(()=>n.listen(E),[n]),d.exports.createElement(sJ,{basename:B,children:Q,location:g.location,navigationType:g.action,navigator:n})}var Lc={exports:{}};(function(A,B){(function(Q,e){A.exports=e()})(dv,function(){return function(Q){function e(){return new Promise(function(C,i){var o="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+o);try{var a=new WebSocket(o);a.onopen=function(s){var I="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+I),a.send(I)},a.onmessage=function(s){console.log("[WS]: Data received from server: "+s.data),console.log("[WS]: Finish testing - OK"),C()},a.onerror=function(s){console.log("[WS]: ",s.message),console.log("[WS]: Finish testing - ERROR"),i()}}catch(s){console.log("[WS]: ",s),i()}})}function t(){return new Promise(function(C,i){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var o=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));o.onmessage=function(a){console.log("[WebWorker]: Message received from worker: ",a.data),console.log("[WebWorker]: Finish testing - OK"),C()},o.onerror=function(a){console.error("[WebWorker]: Finish testing - ERROR"),i()},o.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),i()}}else console.log("[WebWorker]: No Web Worker support"),i()})}function n(){return new Promise(function(C,i){console.log("[ORIGN]: Start testing");var o=window.location.protocol,a=window.location.hostname;o==="https:"||o==="file:"||o==="http:"&&(a.indexOf("localhost")>-1||a.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),C()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),i())})}function g(){return new Promise(function(C,i){console.log("[AUDIO CONTEXT]: Start testing");var o=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,a=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;o&&a?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),C()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",E()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),i())})}function E(){var C="";return C+="getUserMedia: ",C+=navigator.getUserMedia?"1":"0",C+=", ",C+="mediaDevices: ",C+=navigator.mediaDevices?"1":"0",C+=", ",C+="mediaDevices.getUserMedia: ",C+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",C+=", ",C+="webkitGUM: ",C+=navigator.webkitGetUserMedia?"1":"0",C+=", ",C+="mozGUM: ",C+=navigator.mozGetUserMedia?"1":"0",C+=", ",C+="msGUM: ",C+=navigator.msGetUserMedia?"1":"0",C+=`
`,C+=`window: 
`,C+="AudioContext: ",C+=window.AudioContext?"1":"0",C+=", ",C+="webkitAC: ",C+=window.webkitAudioContext?"1":"0",C+=", ",C+="mozAC: ",C+=window.mozAudioContext?"1":"0",C+=`
`,C+="userAgent: ",C+=navigator.userAgent,C}function r(){var C=this,i=Object.keys(this);function o(a){return C[a]()}return i=i.filter(a=>a!=="run"&&a!=="getAudioDebugInfo"),i.reduce((a,s)=>a.then(()=>o(s)),Promise.resolve())}Q.alanDiagnostic={testSocket:e,testWorker:t,testOrignSecure:n,testAudioContext:g,getAudioDebugInfo:E,run:r}}(window),function(Q){var e="studio.alan.app",t={baseURL:"wss://"+(e.indexOf("$")===0||e===""?window.location.hostname:e),codec:"opus",version:"2.0.45",platform:"web"};function n(){var o=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';

var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`]),{type:"text/javascript"})),this._worker.onmessage=function(a){if(a.data[0]==="fireEvent"){o._fire(a.data[1],a.data[2]);return}if(a.data[0]==="alanAudio"){if(a.data[1]==="playText"){alanAudio.playText(a.data[2]);return}if(a.data[1]==="playAudio"||a.data[1]==="playFrame"){alanAudio.playAudio(a.data[2]);return}if(a.data[1]==="playEvent"||a.data[1]==="playCommand"){alanAudio.playEvent(a.data[2]);return}if(a.data[1]==="showPopup"){alanAudio.showPopup(a.data[2]);return}if(a.data[1]==="stop"){alanAudio.stop();return}}if(a.data[0]==="callback"){o._callback[a.data[1]](a.data[2],a.data[3]),delete o._callback[a.data[1]];return}if(a.data[0]==="setDialogId"){o._dialogId=a.data[1];return}console.error("invalid event",a.data)},this._worker.onerror=function(a){console.error("error in worker: "+a.filename+":"+a.lineno+" - "+a.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}n.prototype.on=function(o,a){var s=this._handlers[o];s||(s=[],this._handlers[o]=s),s.push(a)},n.prototype.off=function(o,a){var s=this._handlers[o];if(s){var I=s.indexOf(a);I>=0&&s.splice(I,1)}},n.prototype.getSettings=function(){return{server:t.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},n.prototype.setVisual=function(o){this._worker.postMessage(["setVisual",o])},n.prototype.call=function(o,a,s){var I=null;s&&(I=this._callIds++,this._callback[I]=s),this._worker.postMessage(["call",I,o,a])},n.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(o){o()}),this._worker.postMessage(["close"]),this._worker.terminate()},n.prototype._fire=function(o,a){var s=this._handlers[o];if(s)for(var I=0;I<s.length;I++)s[I](a)},n.prototype._addCleanup=function(o){this._cleanups.push(o)};function g(o,a){var s={};for(var I in a)s[I]=a[I];for(var I in o)s[I]=o[I];return!a||a&&a.platform==null?s.platform=t.platform:s.platform=t.platform+":"+a.platform,!a||a&&a.platformVersion==null?s.platformVersion=t.version:s.platformVersion=t.version+":"+a.platformVersion,a&&a.appName&&(s.appName=a.appName),s}function E(o){return o.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function r(o,a,s,I,D){var c=new n;if(s&&(t.baseURL="wss://"+s),c._config.projectId=o,c._config.codec=t.codec,c._config.version=t.version,c._config.url=t.baseURL+"/ws_project/"+o,!E(o))throw new Error("Wrong projectId was provided");c._worker.postMessage(["connectProject",c._config,g(a,D),I]);function l(f,M){alanAudio.on(f,M),c._addCleanup(function(){alanAudio.off(f,M)})}function w(f){function M(p,h){f==="frame"&&alanAudio.isPlaying()||c._worker.postMessage(["onAudioEvent",f,p,h])}l(f,M)}function u(f){function M(p){c._fire(f,p)}l(f,M)}return w("frame"),w("micStop"),w("playStart"),u("text"),u("command"),c._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),c}function C(o,a,s,I,D){var c=new n;if(s&&(t.baseURL="wss://"+s),c._config.projectId=o,c._config.codec=t.codec,c._config.version=t.version,c._config.url=t.baseURL+"/ws_project/"+o,!E(o))throw new Error("Wrong projectId was provided");c._worker.postMessage(["connectProject",c._config,g(a,D),I]);function l(f,M){alanAudio.on(f,M),c._addCleanup(function(){alanAudio.off(f,M)})}function w(f){function M(p,h){f==="frame"&&alanAudio.isPlaying()||c._worker.postMessage(["onAudioEvent",f,p,h])}l(f,M)}function u(f){function M(p){c._fire(f,p)}l(f,M)}return w("frame"),w("micStop"),w("playStart"),u("text"),u("command"),c}function i(o,a){var s=new n;return a&&(t.baseURL="wss://"+a),s._config.version=t.version,s._config.url=t.baseURL+"/ws_tutor",s._worker.postMessage(["connectProject",s._config,o]),s}Q.alanSDKVersion=t.version,Q.alan={sdkVersion:t.version,diagnostic:Q.alanDiagnostic,projectTest:C,project:r,tutor:i}}(window),function(Q){var e="playIdle",t="playActive",n="playStopped",g="micIdle",E="micActive",r="micStopped",C="audioRunning",i={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3},o=new Worker(window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`]),{type:"text/javascript"})),a={},s=r,I=n,D=[],c=null,l=null,w=window.AudioContext||window.webkitAudioContext,u=null,f=!1,M=!!document.documentMode,p=!M&&!!window.StyleMedia,h=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor);p||h?l=new w({sampleRate:i.sampleRate}):l=new w,l.resume().then(()=>Z(C));var G=null,J=null,k=l.createGain(),S=l.createScriptProcessor(i.bufferLength,1,1);S.onaudioprocess=({inputBuffer:T})=>tA(T),S.connect(l.destination),o.start&&o.start();var W=({data:T})=>{switch(T.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":Z("frame",i.sampleRate,T.page);break;case"done":o.removeEventListener("message",W);break;case"print":console.log("AUDIO-WORKER",T.text);break}};o.addEventListener("message",W),o.postMessage({command:"init",originalSampleRate:l.sampleRate,encoderSampleRate:i.sampleRate,encoderApplication:i.encoderApplication,encodePCM:i.encodePCM});function x(){return J?Promise.resolve(J):navigator.mediaDevices.getUserMedia({audio:!0}).then(T=>{Z("micAllowed"),G=T,J=l.createMediaStreamSource(T),J.connect(k),k.connect(S)})}function tA(T){if(!(s!==E||I===t||f)){var oA=[T.getChannelData(0)];o.postMessage({command:"encode",buffers:oA})}}function P(){return c||(c=document.createElement("audio"),c.addEventListener("ended",function(){I=e,nA(!0)}),document.body.appendChild(c),c.setAttribute("autoplay","true"),c)}function nA(T){if(l.state!=="suspended"&&(T&&!D.length&&iA(),!(!D.length||I===t))){for(;D.length&&I!==t;){var oA=D.shift();oA.event?Z("command",oA.event):oA.text?Z("text",oA.text):oA.popup?Z("popup",oA.popup):oA.audio?I===e&&(I=t,Z("playStart"),P().setAttribute("src",oA.audio)):console.error("invalid queue item")}T&&I!==t&&iA()}}function iA(){Z("playStop")}function Z(T,oA,cA){var _=a[T];if(_)for(var CA=0;CA<_.length;CA++)_[CA](oA,cA)}Q.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},Q.isAudioRunning=function(){return l&&l.state==="running"},Q.isPlaying=function(){return I===t},Q.playText=function(T){l.resume().then(()=>{D.push({text:T}),nA()})},Q.playCommand=function(T){l.resume().then(()=>{D.push({event:T}),nA()})},Q.showPopup=function(T){T.popup.force?Z("popup",T):l.resume().then(()=>{D.push({popup:T}),nA()})},Q.playEvent=function(T){Q.playCommand(T)},Q.playAudio=function(T){l.resume().then(()=>{D.push({audio:T}),nA()})},Q.on=function(T,oA){var cA=a[T];cA==null?a[T]=[oA]:cA.push(oA)},Q.off=function(T,oA){var cA=a[T];if(cA){var _=cA.indexOf(oA);_>=0&&cA.splice(_,1)}},Q.resumeAudioCtx=function(){l.resume()};var O=!1;function H(T){O=T}Q.isMicAllowed=function(){return O},Q.start=function(T){u&&(clearTimeout(u),u=null),P().setAttribute("src",""),I=e,x().then(()=>{s=E,Z("micStart")}).then(()=>{H(!0),l.resume()}).catch(oA=>{Z("micFail",oA)}),T&&(T(),T=null)},Q.stop=function(){J&&(s=g),u&&(clearTimeout(u),u=null),u=setTimeout(gA,i.micTimeout),Z("micStop"),I=n,D=[],c&&(c.pause(),c.currentTime=0,c.src="")},Q.skipExternalSounds=function(T){f=T};function gA(){console.log("stopping the mic."),s=r,J&&(J.disconnect(),J=null),k.disconnect(),G&&(G.getTracks?G.getTracks().forEach(T=>T.stop()):G.stop(),G=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B),function(Q){var e="1.8.34";window.alanBtn&&console.warn("Alan: the Alan Button source code has already added (v."+e+")");var t="Alan voice assistant",n=null,g,E=null,r,C=!1;try{localStorage.getItem("test"),C=!0}catch{C=!1}var i=!1;try{sessionStorage.getItem("test"),i=!0}catch{i=!1}function o(c){return c?"1":"0"}function a(){return`
        Debug Info:
        alanBtn: v.`.concat(e,`
        alanSDK: v.`).concat(window.alanSDKVersion,`
        projectId: `).concat(n||"unknown",`
        deviceId: `).concat(s(),`
        navigator: 
        getUserMedia: `).concat(o(navigator.getUserMedia),`, 
        mediaDevices: `).concat(o(navigator.mediaDevices),`, 
        mediaDevices.getUserMedia: `).concat(o(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),`,
        webkitGUM: `).concat(o(navigator.webkitGetUserMedia),`,
        mozGUM: `).concat(o(navigator.mozGetUserMedia),`,
        msGUM: `).concat(o(navigator.msGetUserMedia),`,
        window:
        AudioContext: `).concat(o(window.AudioContext),`,
        webkitAC: `).concat(o(window.webkitAudioContext),`,
        mozAC: `).concat(o(window.mozAudioContext),`,
        userAgent: `).concat(navigator.userAgent,`
        `)}function s(){var c="alan-btn-uuid-"+n;return C&&(g=localStorage.getItem(c)),g||(g=I(),C&&localStorage.setItem(c,g)),g}function I(){function c(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()}function D(c){c=c||{};var l=!1,w=!1,u=!0,f=!1,M=!1,p=!1,h=!1,G;if(c.mode==="tutor"?(G="tutor",f=!0):c.mode==="demo"?G="demo":G="component",console.log("Alan: v."+e),window.tutorProject&&!gn()&&r){if(n===c.key)return r;throw new Error("The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.")}r={version:e,setVisualState:function(F){l||window.tutorProject&&window.tutorProject.setVisual(F)},callProjectApi:function(F,N,Y){var AA="script::";if(!l){if(!F)throw new Error("Function name for callProjectApi must be provided");window.tutorProject&&(F.indexOf(AA)===0?window.tutorProject.call(F,N,Y):window.tutorProject.call(AA+F,N,Y))}},playText:function(F){l||window.tutorProject&&window.tutorProject.call("play",{text:F})},playCommand:function(F){l||aA.playCommand({data:F})},activate:function(){return dd()},deactivate:function(){l||aA.stop()},isActive:function(){return Bg},callClientApi:function(F,N,Y){console.error(`The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.

See more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi`),!l&&window.tutorProject&&window.tutorProject.call(F,N,Y)},setAuthData:function(F){console.error(`The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.

See more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata`),!l&&window.tutorProject&&(window.tutorProject.close(),window.tutorProject=window.alan.project(c.key,ld(F),c.host),window.tutorProject.on("connectStatus",TE),window.tutorProject.on("options",HE))},setOptions:function(F){HE(F)},setPreviewState:function(F){fB(F)},remove:function(){aA.stop(),window.tutorProject.close(),z.innerHTML="",r=null,gn()||(window.tutorProject=null)},stop:function(){aA.stop()},updateButtonState:function(F){TE(F)},sendEvent:k},document.addEventListener("click",J);function J(){aA.resumeAudioCtx(),document.removeEventListener("click",J)}function k(F,N){var Y=N?{name:F,value:N}:{name:F};S(Y)}function S(F){window.tutorProject?window.tutorProject.call("clientEvent",F):setTimeout(function(){return S(F)},3e3)}c.host&&""+c.host,(c.position==="absolute"||c.pinned)&&(f=!0),c.position==="absolute"&&(M=!0);var W={default:"ONLINE",offline:"OFFLINE",disconnected:"CONNECTING",listening:"LISTEN",understood:"PROCESS",intermediate:"PROCESS",speaking:"REPLY"},x="default",tA="listening",P="speaking",nA="intermediate",iA="understood",Z="disconnected",O="offline",H="lowVolume",gA="permissionDenied",T="noVoiceSupport",oA="notSecureOrigin",cA="Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone",_="Your browser doesn\u2019t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. "+a(),CA='Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "'+window.location.protocol+'" protocol and "'+window.location.hostname+'" hostname',vA="Low volume level",$B="You're offline",PA=null,Qe="browser-does-not-support-voice-input",pQ="microphone-access-blocked",nt="preview-mode",GA="btn-is-disabled",tI="no-alan-audio-instance-was-provided",NE=Z,Qn=null,en=!1,Bg=!1,aQ=!1,YB=!1,he=!1,Qg=!0,yE=3e4,GQ,gt=[0,0],Et=!1,eg=!1,rt=!1,tn=null,nI=0,gI,EI=300,Ku=0,ju=0,Oy=EI+"ms",gi=!0;function qu(){GQ=cd(function(){en?GQ():(aA.stop(),p=!0)},yE)}qu();var vE="",_u="",$u="";aI()||(vE="alan-pulsating 2s ease-in-out infinite",_u="alan-mic-pulsating 1.4s ease-in-out infinite",$u="alan-triangle-mic-pulsating 1.2s ease-in-out infinite");var Vy="alan-gradient 3s ease-in-out infinite",xy="disconnected-loader-animation 2s linear infinite",aA=window.alanAudio,z=c.rootEl||document.createElement("div"),zy=document.getElementsByTagName("body")[0],QA=document.createElement("div"),Ad="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==",Py=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
`,Ky=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=
`,$A=document.createElement("div"),sQ=document.createElement("img"),LB=document.createElement("img"),dB=document.createElement("img"),XB=document.createElement("img"),bE=document.createElement("img"),Ei=document.createElement("img"),ri=document.createElement("img"),Ci=document.createElement("img"),ii=document.createElement("img"),oi=document.createElement("img"),ai=document.createElement("img"),si=document.createElement("img"),Ii=document.createElement("img"),li=document.createElement("img"),IA=document.createElement("div"),SA=document.createElement("div"),tg=document.createElement("img"),nn=document.createElement("img"),kE=document.createElement("img"),ng=document.createElement("img"),DA=document.createElement("div"),JE=document.createElement("div"),Bd=!1,Qd=!1,rI=!0,jy=new Audio("data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAA2+bWRhdNwATGF2YzUyLjEwOC4wAEI4qTpRvIg0Vzm9dWB5qtSee+dV99Zx+l/Fq3cRzpUzwAczEW3K/QeibL/z/o61lFt2+2XCTlsCfHhPJn0NNjJXaYSmaGfiEpxAmgMa8Y2Ku6tMaY2KEd0fh2Lq+1V9QG2AG2X9fz/aRthoUg25mjNoUzfH76Zho4Cf+NoHx+YADSANIAuZgCoAAAAFwAgra8wAABKSk/AIUHOc8dID2qtSdc86r763r7a82c3db4VK9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOIRxP//9ff9l+StBOFQEEIMADrU1esviVP0+/58+1VXjrYUTqI8wqniRIBSUmZdymtUaj50znKCY0MEME2aHNzNhuEHb0MhRkTocVXOwAwa/MACXcksMsAAAAwgASEoo7GegIIQYAHWpqdU8sv9Pv+nt7UrxxgAAAAAAAAAjyswppc3gAAAABVlwgAAAAADghHEnxPFkQQMIcx2IUooUhB58D/n/j8QiSXYbrMqqoH6UR9o49FoWGURDSXZCbt224HuTzw83B/8ZqeLzP6MKrV7m60F8kasq3hbtLnW80RAWCQAEAAAARIRR2I2McUBFxyP9v7/SIkl2ZbndVVUH1QAAAOepYKxFCsoZScK3ra6yEismpEDlxJtTPBoJABMMQDmcMRhnn/aTL8p8ROYkXzoqpkwAABM4hHErTQEDgAAIEnskThJqTnqEIklwG8yqqgYTV/DSPoRrAZ1CAXtWTyKqALkJAayvmk+spUNhRZFUNV6Mzyg7YGJlokaGF4WnZ5fU/X9unfpWvu7NFAFQAAAs/mkkMchiMJrkzUIRJLAzMqqEQ3oUygkpG7mgf/K/FYBrCTnTXKAMTEZ1sIqaGkgm6sO2+pzYVqJBdTmL8SnzOcGRfmYMl7VVKgXTXACdjgCEcSQCpBsACQfyixkGKAe1JEIiJIBWZVUpQMAsYkHDKBsfXlsW4/hCc7iSUneiLJQhIaUWHTYMiWuAmJBDZMMcmAol2GUV+ZwF671Aw+ybevC/QwC4CEKzx1KURCQSARALv4wYqEEgUXJEIRJLAzMqhEHAnTe768EYWipFDgDkYvDk42wsIsUwccDIsoNtD/7Nm6YLEhRZCy6h2XOha33MO8CgBwCEsTZ3wFUAAAgBeixSDmriEIiSwMyqqqooRAp1GNLBSNp5RcTS8l2g7/b+u6q8tBwW57VbLU2oBv+n09/9wj1waNQOE1QpKmzRCrQjaqEd8eIFnXTh3zFhdMAAqqACIfxeixIE1yRCESSwMzKqgqMoTESt4QjZgsGFUtaJEMp8LJAXooj3+3WcyqEp36CI7ACG22YVqKB4zOCkKBSdBARCIcCFOx0wH4bgWEpJh1GyhLkH9z2/xl1V//tz918e3n15zeb/tX3v2r67cWBgyQYDgU9joaw0P20rqBOd9DKSUM10E8XGk+/7tPGGmkCekRgEINDc0Pt9XF3sCYOlyyiAcY9CgAC11Lu50cQwALAUAoMhAAAAIJAAEyH4XCws5EOo2UJcg/unn/G9VP/pz9L4+OvXmuW/759+Onx3OAKuJ0NdeIDTb8D870iFiAfFpRPfgvSHxpAVEcwiiQ3ND7YBSQDA+WQYAxgAAACXUrADAAAFAKAAADAAAAABwIXxP/////33+SIlmJoqCDF4A1rUlytaFjvqoMnx8JFSsLtjG2dw/3SLWQaHJm/f394Rk+Mw9/f3LJ8Nh33ID4zD3hlGT4zB/DzAyLmKeRaDF2YZZYCYDzAADL6AAJNz2MbhBS9gONakuVrSrDegAAAAAAAAAAAAAAAAAAAAAAAHAIRxO/3QLrv96FE9jMzHQQnCLqSPyF+fMkvQVzmVVKEYDOZb+JDkWMmagDNGlV8YVyOcEQtEXaobWdUJHI7bEoppIp7Uiik9SubFIkua4AoohJUmmqAgiFwAAAAQonshmY4oCLqSPsP+v/HnzJL03rJzmVVUAAAAAADw4AIJSKRsBMl0g80mlwVypim1qJmkOEmbnQVaKCG5kQiMbcOV5xOQkmAO8EQAAADghHE5+iwX80gYR0khjmgIupIn2PwiSXYPDKqqCQAF7vZ+YzDhw2cgmc3uruZIFhtd4crrbzCODPCTJKnFQvqS6iHAbu46CoqUyL0pKjZpeMQOaoAgAAAAEE7EOxTUD3EkT7H4RJLjLN5lVVFAEgAEgD2FY0ntXGAt0SRICwvTrCJv1UODqZlaT6AOegWBIromeSWSoxlO9egbXN0dp28QAAAAAAAAEhyEcTQw1ACQAAgFWiGMJQmu4jvOOiRNAbyqqh2ACC3f/t2jRTyWL5jszVMifzz2rQdYnkhuwttkp5U21jyAhGa4DBAgogkJK+R3TBrSs5iKAYKv1VngTyw/WHItS4I6hUIFZsYUBBqSJ3z10iSXAbzKqqAAJFhJME0pWpkXar2uMoazjdI2uIq7baa8ZyK25EYK4dkuGiibKae+FcpExR6WRZAAIT+9rZ7IpCs5VkWACoAAADiEsTF8QQaQAAfzYjBIFUuIQiJNAbyqESYfGhCtCrwVPBz816cYA0ZADmNLmkNEN0LjyfLRa87M4vMq81Q21YWHw45SqEAA/m9FCgILkiEIklgZmVVUAABFuelUuPVDQ+rz7vT3HFwwUJ0TnTk4KS1Z4tD+aa8S/y5azYVNW3N5twoAEkAAAAAAcIU6bOYfi2TDm0zJBxZolA5/1tl67HWTk1eh1h0n0FoxKZVPOCQZxDTU+0CW3yHTpHJ6Oz40a+kOuj1D8cs5yO9xQg4qAEcnmCAoAAHBiU/Q6JunJ8aS9dNc/y+nNrh52cyIcPxODm0xQsSQcWZIwOWqy+vQ85OzWtA+/fthc2xqKAAAAAOwHWAAAAAPK4AAAAAIAAAAAw23cSfXeM9zAwHurwCF8T///+3p7/kkJZieJgkACa1qtW4qXIFUCgUFQsMY4j8DKUDAid5YtPTqWk2ZPv7wj4+Gwn39x8fDY9/eE/x8Nu++gD4yGCd0IZ8VBONyn/I3vBdONoMFdQwWsxR4AASTlsUjGgTABNa1WrrUnGay6qgAAAAAAAAAAAD+N44PeAAmIVAAHIRxO/oBQPAOeDEtkE7IEoUakfl/5P/H8okl6ePKucyqEYG9C2bdNxT4AosQ4eHIWhD1zGBNoApQpOuMLroxwolNBCLnWWitpjOFotNq1trCaHnkiMp+PdKWittvQdEJSgCtRBOaxkhkCYJNSPl/y/4/WIku2WzMxigAAAAMCMGjOADF7n7S7MQJqpGpU4fGyKZQRGVARnsF20GKIIDMs51uwUFLEBfDABMXs8CuSzdut04VXpdnUFwAAcCEcTzynZ7iAUg5QKWOZwk4knp/n+30iJLtUbrMYoSAXWl/XeS5cNcA7J6r0w/vB3NZc1pQkBIC0bEUh7JjUUKJ5neIMryQmZRnrqMaecRXAXFARAAAgpSSGOKQg4kn2H6oiS4DeZVUoAIkAKEhTE7zBC5IoMSJYWGN0QacZ4uxvRwAxAWRCDsISUUhaGFRDu1F+V7Y4WovctM1RBPziIAAAARBwIRxMN4Oh4AACBV7KE4Rakj15tESS4VG8yqqg7AAx3yAVHLSKXAYSNCQjalJOuKhREZzVWg7ErQLGxYsHZxJwlc7CeYwtSEQaWNEpGILROvXhIALIAAAARAgTYqkGKAg1cT39rQkTQG8qqqqAIBIizGVKZ3EwRe47owRjUUzmoVa977M/BuJxuHc27b0VZpAG7O6IFJPWK2myi1ly4AAAAAAucCEsTQXTNIAAAfzgiBKFF3EQiJJAK3VUAR8rsmtxc0W7XRaxLVlVVpHBpuTfSgnlsimhYX0FUV02T/opLsyJPCyuSuDrAZAhaQg/m9EiUKLkiEIklgZmVQA8qAwkTdVrwVZWr0cpr4MY/GhqLEJYZtRWCpsjTZRL7MEMKbfTwi8oBQOAIU43PYfiqPTG0xKBiNpCTDj9vE6J1P7H8/x7enm7l/bb6k6DuWY3f9G2fZaLnSgrpIAASiB/lsAVlx0w3no8ifVk8qMVZlSc20aBnXlroKFsywA2AG0gAcyAb+wLRxjn5CNQ4T3KQ/jbGB82UHBACcQgB8D8TD7Y2mJUKRtISYcfp4nROp/Y/n+Pb083cuvnb6k6AAAAAAAA2AAAAA8iAAAAAABOoBgAFgAAAAAAAAAAAAAADHOAAHKQ7uBgAAAAAADgIXxP///8/du+LRljGgOHXx+ia+05A/ddee/IAoNCjp3vRoKaiFBR235qwu2Mc+3SGxAbOpp1JjwyQP4v4fwzP4/aLzeJTH5IpQMOE826HHFGOP6Qph+0+OECaVgGRQoAElAAAARhskNhUI0Bw8/X8VfH5YB+rWeeeNAooAAAAAAAAAAAAfw8WLtyn4ZSh/HsAAAAAAABEABwIRxP6/6FdxOOCVtjETHE4RakiET9n/L/jr97MZmVVKEFQLYCLrsA1UD3NgiA2cS0qYxzHjwDqRAtJ0rhetKCh7Jr2ekSGS2mclwhLyGZa5KQMKicWOhwdJueC/tgEZR2MTkAABUBK4gjYobGImMaQg1chCPy/2f34/Ww3uqqqUALsgAAAAccUQDRRwJKLzuQQ4wznklMiqdhAleJuNU9xzZVPCSINtHQ1c958XBKcSSc4ztdMAAABQABwAAAAyxtb292AAAAbG12aGQAAAAAfCWwgHwlsIAAAAPoAAABwAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWHRyYWsAAABcdGtoZAAAAA98JbCAfCWwgAAAAAEAAAAAAAABwAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAfRtZGlhAAAAIG1kaGQAAAAAfCWwgHwlsIAAALuAAABUAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGfbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFjc3RibAAAAFtzdHNkAAAAAAAAAAEAAABLbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAALuAAAAAAAAnZXNkcwAAAAADGQABAAQRQBUAAAAAAPoAAAAAAAUCEZAGAQIAAAAYc3R0cwAAAAAAAAABAAAAFQAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAaHN0c3oAAAAAAAAAAAAAABUAAADgAAAAjwAAAKgAAACqAAAApQAAAKIAAADaAAAAgQAAAKoAAACnAAAAtAAAAIkAAACjAAAAhgAAALsAAACkAAAAowAAAIMAAADDAAAAmQAAALsAAABkc3RjbwAAAAAAAAAVAAAAKAAAAQgAAAGXAAACPwAAAukAAAOOAAAEMAAABQoAAAWLAAAGNQAABtwAAAeQAAAIGQAACLwAAAlCAAAJ/QAACqEAAAtEAAALxwAADIoAAA0jAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi45My4w");jy.onerror=function(){};var CI=new Audio("data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAWbbWRhdNwATGF2YzUyLjEwOC4wAEI4liJvGTaBRNWgpCwBiMCjrsceWmt/FX4+tazOAVVgZQfdya5JhBsOJ3/kOLuaScl8ydUMZk+oCXDAQR4AwMDdP/MDUUJNh9sfnQJI67rzSfO+O/wSYeAkr2hw/AiHzSA2iwAABVoAAATSEQAWBwACwAJq0j8oENVh51BL41uvM13rzrd1VazVblJSlB968g89yG7I+jnst9OXR9sLNIq6QTNdwTAiACMbS6bNcogBd6uHq2bP2+9v8W4RgZ9J87InCwEgAAAWoAVCYE0wABICYCwSCJYARiABQOAhHEhXf73AAAJuzqc3hQAPh5nPtWt3xrF1EDTThAsCZ35emIYzsHbWvviUi8B6TR6I3FEXS27pXovDTi9vXdk9kY83K6Li6LESt19EOrWbdod7lUhQIAAJazuQ7g8AOHSuNY1XF5fHMiqBjnJiSEKXL9Gg066fyhzOdsPOiq4JVfeSAalwAACoAADP9I7P8VyuxAAKAFkyYAAAAKuAIRxPH/fokAACXs6kGYTABrzk6a56yvbx7b8gTbkJGTKRMwZs+oNhUlJEbiZbqKHWI/1XrNXxFH4+/4rXvevonT+RC8L+qkBfR39U5ApqpAenmrOx5wgTd6xnMwjglbQdwkAB5ydVrOKrzmmgDL02TydTcY7HxwkJFi4RS2Vwz8aYywsACoAADHC1AQXlwqZuxhilTKAF1V4JyJwsAOAhLE6t////CEJi0lIRhMAL1qTV1cvNVqRUG/e+CR0TMHKNkqjy3ad0D7sSMbq7CXo+u3OvRI5mjGY5lPPQ6kIynobbeJBzOu4xQhoBJZQcw54odEI3Bx8NLTQoAAExaDsEwAnGrai5eaSXAJaO9ay9zDzSeUvgfsrNuf2qrZiR60AAAAAAAAAAAADgIU7ZOQfgPxcRhxbikgn261Y/Z8XoA5N+b6U1DtrC2jv2QJmqLIZrCkNBopcnyH/JG3R7bW52taiziWookX3P9k3HUqdzD8B+KxINaqsigH7ceYU/ida6SpStjzj4PNrxhLba06ZYIKWPr84KCGKhkIkq1T3t6yquOKkcdlLKNjiWzUbtxKauaRHmVDPwVzP2c35acUOAIXxPIV/+8AACWtQ0CYAOOKV8ZVr6y99SgzBUQSAcP9VlkmanC8ykvqjcWDiztAmWZ1i6WlCdF0K052WpCj8LWvUxBc1t/PZvCN+/xVgFxmM5eoQAArKWg8hAAGlp5VdXL1VgBM/CAWXJzbtdgq4kNkqDm7hm+6Ij7YH0femapCwAAAAAAmXrSe4FAAAAAABC5yEcTy3X++ABAlLQgxqEQAXON+Ul5eq49fEFD1zBIxKViiEo2PTaYQMJMMHxUWUFZ2mUDgfxhAzn/iY8YUfqVj25fPC4xpq/CNv8VD4mmPzwyhvtSzGKDBvmtgpWNJiCICVggrUXBK2g7BMAGmnnJNZeq676uqDv3f078fLYKuyQ0z/Lr1Yx381ass4E+MCY54AAAAWlk4JAAAawAA4hHEo///93AgJi0k8UBEAHm61xS5remmhljsjmck4t2n53zihd/FMh54rUP4IigM9qSQXshl7ObbJMP7XpqWVWARSkTKnm/NZIO1GF/1iQVW68fvVzu63sz8JaJy2EUirqAAInYsmrQNgmADrUmkaVwurlhYH1LVzlzX4KLE+3OsxUdPRiWJAAAAAAAAAAE5EQABwhGogf/////x1JSIQABetS5L1xllD6Lkf3uE14UyZQQs1HttutUitG2UFsarRLNRUzQq1kKhZOw0Do2JrSsR0FFUzQpKaCkpIKG0Do2g0NsWad60dCTkDwAXrUku71WiqH5vx+zUYwk9rInJSyUnwmEAAAAAAAAAOAIRAEYIwcIRAEYIwcIRAEYIwcAAAC5G1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAEAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIQdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABrG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAu4AAADAAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAVdtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAARtzdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAAA+gAAAAAABQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAMAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAABEc3RzegAAAAAAAAAAAAAADAAAAOsAAACdAAAAngAAAIsAAACWAAAAkQAAAJ0AAACTAAAAeQAAAAYAAAAGAAAABgAAAEBzdGNvAAAAAAAAAAwAAAAoAAABEwAAAbAAAAJOAAAC2QAAA28AAAQAAAAEnQAABTAAAAWpAAAFrwAABbUAAABgdWR0YQAAAFhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACtpbHN0AAAAI6l0b28AAAAbZGF0YQAAAAEAAAAATGF2ZjUyLjkzLjA=");CI.onerror=function(){Bd=!0};var ee=new Audio("data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAAAAE00QSBtcDQyaXNvbQAAAAFtZGF0AAAAAAAAEXohTMaAB//+fl/BB7eRCgV2mzE3qLQC1u4rDx0KkHPyP1u9BFKZpQkBB8EicZPF5QlOkEJ0CfxejbF3c+XEnaGMrrPIi1pFYX7RSRwfPCfji+Rm0yGDwXUvEbQDhsh2jUC3FkfyaOAfzkXvoQEqnC1FecwjgLVauoVSOWRDynF4XD1zKtfD1DCtfFZSrh98VEfFNJRghlwCehCn5OPSGuv5OW92wL6xXijBoPoR7iE7gq1Psxwd8XKRPwoaKeSNdlSVhTX3MJ0rTBlYIMMspkJnTNIQT1DMAVDDua4RiI33A9Bgso4voe3qbITeimbtNGJEKK3sIjpv14j7p5egilM0oSAn0vkZDH+NyHnXnJPuXnYn4RQQ47xIhprGQaZPAxCCI+PXymDl7blk2fSrBGW/RtGkHDsFCfZZnbOqlBqXrEoaglwjsBP0/81CHifxES7HtySnEZOCI1REkxruZ9h56hax83BiQV0uKLk2G2m2OROyNbBdMEgfGix5wKADUIpkBO4OoOnyb/URHgTSIvUpNkUivz4T40/RMpF135VpOcVi/jaiZkjUTRrzxqK6Um1gYb/vVhfr9VGpnvApXXcq7lVLPTrChM1tMzGeXoyG8hTagEkMw6ZaE5ERc7DQSnE5up6NxLY4gxG+MRABwCF6FGW2B2JhWGSm4jkrn5Pp7YOAIBQC2jq5AHE4l0m5hEQ/8vauaadaV6Rig03RaDMTNhQsLttn2EhHqY+X3Vi09fZuLsxQ6ctFn2fZ3NqSZLKp7maonEbMjAQd46NtmKuntwEGbzYzIVaVpYYjKI/xtGGCpGrjjCDHHi8X6x5qdfKRBYtAvk9FOwaMAn1Hw5StArWbfVLAXvY1ok4xaFbVqVqIhBMClwFKEAAAESQuUDYqDFZqVtXq/4fr56UQOFAFAK3N0z3Txb+17p1TCNJfVvWvz35LZzj8Zz79VIlSRdD0j6zj0OPK2BQfisWi13A5qpo/cvGvZOxf2vNNkqFPaS2N2Vsbt6tjkYDvvvdOjcw2y6ZpkqVVVZVUUtFmpyUWWNCtOJ4shO+7CR3E6URA6TFykd1ADamZJkB3d3rmOw6F4jazKsUzUN+T3nxqhzyh3qx4pwspSnZGTenE98n24zulbEnAgzTqJAWBYC1FVQJViHAhGgj98H///I2Gk2IyWKSIGwkGQkFwkFhIk68qHfyeeEFTyQQKALHxdRAdIoD4QfN9RmuCzV0ano4IIYQkMBLYw5UsuBOd2vYwha4Znoka6T10PtualGszgHPwKlU8/+2wLSGdRh5MxAWArV7MqAY9P+fe+LyuYpn2vqGL6trm2yLxwG13W2cJ3s/fjgpgSVnV3GJoCu4G1jsZoKqVJaCe5MV+y1hERS3hwy94k2xAv/net3ntB/4j9M5gQekdh6OsLB86SKxWRCBOqSBFMaviCl+H3ffUGS3jDY8VEFAbu8dbVHYZIwqCwkceRKV/R+66J0LASgAs+haA4Aw76UDgKJbIpkxhRvKizCNaix0SUwlxHjJCc1zDinkWRn3BKOykJBQt5hOOXyeSspyC6yjO0R11fRvvojZ1CjCkdKDAzBTQyKBreiARne+wEpYRim8EBgivVbR9XRhWqRtwZqMyOnLRchLUivXL0evSiKIQ8/EedgmCROhUA6RgN0PuXCiiNavaTJ78D2o6B7MxCmgroGewObQy5e20Vr4dFhy56RDX2fjofPSxrNBehgIBqIIa+T+l6HdgbanfByEaFFWOD2IyWKTEFwqRgoYhjQk3/Rp+uE4FwEKABLhUwjLPhLZq4TayevWHTW9Wr1waHfBDxqRl4D4dKUF9E9hoSxGo5/KSjwcvDFGCGRNjLKotWpO//S+xTc5SDJalVLHg/6HTKOCnO/NKkVhqfRxGsb0u4jWdKVUfz5b1E7gzwcYhZqTupGdbToNrUvFzgbHuZ2AVAOP2O7lMW7r4s+qBBiNGTzxXQ5vY7climkQHn2zy3M0KkNsoLj2yZFujsvyZoF13aFQfeJ25GGWUgI2wweyCSwudFsFCIu1nj7D6scDgEAKDArr2wfQrMgi+Fy5y/Fs1cjSMsi5NKRu9UIx5OXSgYxCkwR99kgj98ggDdSalWlfV/g4L5QVOsTVYTzzk+TGWrdDiZbKs3ld4n1BoVDKaYPhEUYVkSg+9wP1dfD6LR5yC7LwgU5wvcC+JdOUqms8TFBs9Q0Ob/sjAusvQyrjsZBJnPBlTQOSiwcrd8IpqFkI7oaBA3M84abyu3AUoE1Bk4UhJ7NXutUf8El2o7vwhGgj78H///IWwyWGSIKgsdEj+XK32D27HVxxgAABLHOJvCtjAbsqA6vfq46YbDRcLRAMj5B2lJnMiVSHjocCGH+H6dDaEUbRFMkrysRaKkNeMyq52F+q/JuyNFPVMPzpnhKkAz/7wjkGViMDc4VFIQIHb3ZQZw6PDkbVJCRcYkl3AEUEUANDM0oeFYol7QgzMIcjoCwFFUAwjkqMeszwNW40jpbVXI7PD69wiOkWvFerPV+QlR127inp+RwZbXHNMiV0mX4/HyswzrlSPOO9pVvMZ71+WlJSQBNyWut3h7GxLKJLDJWEkAho/4D+cccCUQJQAJZ2mTwkjQbgl4Drov1KDxKijrq06ABOLJIWM8SoDfRYMYW6GG7xoAvMItlphhOvvz0WpOf0P2HQNG4oL2q4Cpt4GTf45UioVRHlYk2Bux2AKFRLAIN3j3til3crhCfCLR69bYx20K2JIomzfmh3X2PB1JIRGm+Jg2+dE/Ixc4ZCOX51ZfWaVQ5cxEWlKmpg9QGhCms8XZimgIizxKkR8DC8Sv/gm5xBTkbzh3Pr6BbvwIRoI7xB7OXy1sMlhk7PILp/I5P6D+WJ7F89b1eXWcDChLy/QloYAzYoYfNDzjXJFUxgLAANaiZhy7GOFBfRPa9r2Ywz/5lUnmSKJDQyx25yy0NT1T1LhxCpiYvLGsKWyiI9JtWMvbXUC+RO5jABJmYPo10ED4OR2ikapTrZTr+dN+x9luN8+02c3kjEomW7zSWvup51yWYA1l+RpcZrXy1BdAEU5m6syGB1y68Nc+TfP48k3VNP+c6R1P5cWGMoH0H7dhyVyC8uz1c++mxe3d5klx2bJ3sncJbPJZdNfONtVwWroqCkYnel0kZ0BzcTg96EkpHbQCC3jIwoyAjLGx7FKULAmJAkDAWGgToXh4HTL11i93XG9MlRKjYqeGSglpKON9P+W6RoYusLfMwAOMSiSCXWKxPDinIBOndwUmrwxqz3T/+vS3jUS25axUbPH3o1raefpvMlDecmjWk+KVMeyAdyCYbkxHVsANzdNSMiGyTKCkVfenHcooJwDpj67gmFjNU0+geOug+WMoEgT7qKjFY6gvA5iGi88jFXvYgRQUaEro2njsxeESnoOymhCpV8qAKYwQDQRqJb0I3onQWTOQeL6yJX+vJ4BVTHKfTM1AwWOyjxJ1In3WsEiqVFMsOGnbuya+fvK2KstjYb4jFmeqVYJ7aym2UeNmXd+IRoO//i926x9idFiYlhdDOUJrhdtuTXW6OM4osq6rWKgEvKsxj8UIr37u4x2bey34cuAxhyqEjkLVTvaRgLsOKhIbvVLbASQW9czUVC+lNTnOGlJGzfVXoVMtTtt9zF7ZXTUz3VF3N3l3W2r12Wd4GBpc5JjOeblMxO5FKKgp1WDQFBQ74TaAUgMSNbbyC0KdQyE0S1TUcROxcgWZa8bnYgrDSQFTBkIIYINB0hLNzmGrvtvkWrDO2Qp1GCmQCUt6olVNQJSJuthTgE6EbAMErCbpOo7NnQ5seQzrbS8mV9M1VE5MU63g00KN/Hq7EI8nzLrZZ8V93OOvUQCPsansREsSCgSDgKCgTGgKBYKBcGrDweQkzzVWm9MXUq+eMEzEihcLj95i+eM4RfP22CSWRTBI8C5pneFmkYDuDZ12GSMgsK1hrQ4xg4einiWJRnGAHWrgEvpNLAHPkdozM7LvwVtukei8FxaE4UVpyiQ+Oyem/N7ZxcN/20eYuPitICE85F0MJJ4JThIkvEq1qzYG3hR11awmeUbnNwcEQinIorJnRHOuKUr65E/b7CuXUlcI9LsF9pgcqC8rtk6T5V3rAyX6K+NlJxPgtVVCpIUtLT4SjXiFNSqC16Z46ntA4yriETRbbyoqEYp3r1TNvp51t/Gl659bvwhGhRFlYtiYlhYcBYaGZKhBoPR1d0sQVaoIKAkOmRhz4jkRbRzgzGjTzWc+I4GmYPWfiTK3nSsAHyCKnlHfSt60uyNDwXoqa2BzgKGaFcxvWE0QA6hQHDOiFJainWQQ4rUP7V0glyb5LxCrpoHvvoBYPCFcctCUE4/8J2XmaZK3hY0ECA+Lz9H92PsciSRWMjdYs9NgziT3tDjU00xiYDFeE60wVwQAPZSriCK7WHSBIyO72LcU8oDSrGCex5r+CzXyQLtC3TyRXBWB33QbtQRWmVijLaQ23k4ZlPah2O4VFGt44ot8NyCIsZGsYkgLWMIb6pRwBd4tKSgSquqBIZPvsV0u4CtKrjnhFOi5GwYJJ3RSWwwdBCRLwv24SMH9ewRFRTEUpWFretjNRk3IgoaqTVz5WhWglCUusioRtKs2dmNVZKiSxSbLORpLFI0QAwN1QnK65nPmNx2Q5xesHWkBeMXo2k0FbQApmM58iORRECfi5izmIuQ5znYUK5FbfK4kklyBdD2AyizuwVSXRK0E2BIypEYwMzJLFIvSMEKmBODsUNEyxYwETrY2gIGIjI5j5Eiw0XtgyjIBFTc8Pp3bjghGhQ9ihFjYdBaCHAQFpS7CggFQBAgrPznO+HU4MWDUxhEngvuwAUSYeeLrr2a1VEKZx0Yj4HD7laJEogVFr8zqrAbojZPQ4z9V10sHDH96pTvtZ4eRZykhQJgfKvxkBFJgWBeEKcQMaII/SigpQYHNBwEEwhBXa3UnIaqoZWsMGYDmOWzNtokRWEgJSMllAJAK8rwMLaJG+LXGBG6Tqb7aKoapzNkJN2v4+uspoXomgSEAAczaTfM7ga0fR9zokgE4gwb+k/12kn5jxLSutL2YF8xtXNWxdrchWuAJTvD2JUWISQFiINmIQAGL4DrkWKgFIFmCmc2g88+fPHlqrBAB7+lE8BgbFlKgBiTj7M7pCMPgyI5OCGCQmKzrQSgkV8ca5EHyLHt+Kh9APUrLAz5qXMJDQsDCy6aWV82Aicrzi5ocr3U+0AtR7IatFe26g3rCqSsNEhMUWXICUshQZwNQPbMMBlYySm4OhLQTmlxWiqoYFVSIAaCSxrpgU4rCUglct7LaCwLWwIsNBKqktGTSTZcm+DQLMg+riPttNf9gJF0l/lR86H9N1Ox1uf+gFC/W78hGhQ1ihEiYqIYJBYKEYSGCpeK2vhKRnAVKRGWOQRu1yA8D+x/NRe94rS178YwI4qZoD3r9j759PdF/gilKoLfwtaXKap7rtY29dp7srocBXqD7pd554++DSmqMtYd3e0al0mm5l4uZOl8wog37m8XeNCc7lTKwiQNqMzPm9Ld2oAuHxOm9LuROd2ak97lMBnxePslqa4T6qzVzFTqwLJSIaj0xCMRkjVNdkmEvo2ki3fBMSAAel4PH9eU+VCvc07fICtLcOh4LfbOORavbs8/kiLotbu+goc5KUbu8HY2Io7Ej2Cg2OggNoBYQqyZYBgEcAWfFXDOosKfbYfGYmNToNAzt0ZGlE1WsmBwMbqdKMqRfpkITR2OqdWCpVMaXTpay0xdQs3NExg2j4G+3e8co3+B8khh6SuM8XfCSDis0r0EAeXXXn3KUprBDwCCQem/qv5/nwyPkHlau60GaF7gBIAZxh6rxF2mdb5JFnxNZJwK2BujWdSCcVIq0EgODoZ3CgcphaUZCeMJHVbUNhWhpkJzY0CLYERSwdJC7XJWF25yUexFYoLqnfgAAAONbW9vdgAAAGxtdmhkAAAAANfIAsvXyALLAAAD6AAAAH8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAfp0cmFrAAAAXHRraGQAAAAB18gCy9fIAssAAAABAAAAAAAAAH8AAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAOdGdhcwAAAAAAAAAAAYhtZGlhAAAAIG1kaGQAAAAA18gCy9fIAssAALuAAAAoAFXEAAAAAAAxaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAENvcmUgTWVkaWEgQXVkaW8AAAABL21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA83N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAQAEgICAFEAVAAAAAAI2cgACNnIFgICAAhGQBoCAgAECAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAKAAAAAQAAADxzdHN6AAAAAAAAAAAAAAAKAAAB7gAAAXUAAAG7AAABkwAAAaUAAAH+AAAB9wAAAcIAAAGzAAABqgAAABRzdGNvAAAAAAAAAAEAAAAsAAABH3VkdGEAAAEXbWV0YQAAAAAAAAAiaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAAA6Wlsc3QAAAC8LS0tLQAAABxtZWFuAAAAAGNvbS5hcHBsZS5pVHVuZXMAAAAUbmFtZQAAAABpVHVuU01QQgAAAIRkYXRhAAAAAQAAAAAgMDAwMDAwMDAgMDAwMDBDNDAgMDAwMDAzRUYgMDAwMDAwMDAwMDAwMTdEMSAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny40MS4xMDA=");ee.onerror=function(){Qd=!0},ee.onended=function(){rI||setTimeout(function(){aA.skipExternalSounds(!1)},100)},ee.onplay=function(){rI||aA.skipExternalSounds(!0)};var pe=document.createElement("div"),te=document.createElement("div"),ne=document.createElement("div"),ge=document.createElement("div"),Ee=document.createElement("div"),HB=document.createElement("div"),TB=document.createElement("div"),tB,SE,ed,td,nd,Ge,ZE,gd,iI,oI=!1;window.addEventListener("online",Ed),window.addEventListener("offline",Ed);function Ed(){navigator.onLine?fB(LE()):(aA.stop(),fB(O))}function LE(F){return F===void 0&&(F=x),Cv()?iv()?F:T:oA}var gg={tutor:{btnSize:44,rightPos:0,leftPos:0,bottomPos:0,topPos:0},demo:{btnSize:c.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0},component:{btnSize:c.size||64,rightPos:20,leftPos:20,bottomPos:40,topPos:0}};function gn(){return G.indexOf("tutor")>-1}function aI(){return G.indexOf("preview")>-1}tB=gg[G].btnSize;function ci(F){return/^\d+$/.test(F)?F+"px":F}function qy(){for(var F=document.getElementsByTagName("*"),N=4,Y=0;Y<F.length;Y++){var AA=Number.parseInt(document.defaultView.getComputedStyle(F[Y],null).getPropertyValue("z-index"),10);AA>N&&(N=AA)}return N}Ge=c.zIndex||qy()+1,ZE=Ge-2,gd=Ge-1,iI=Ge-3,Ge&&(z.style.zIndex=Ge),z.style.position=c.position?c.position:"fixed",sI(),JE.classList.add("alanBtn-recognised-text-content"),DA.classList.add("alanBtn-recognised-text-holder"),wi(DA);function sI(F){var N=F?Dv():null;N&&(N.orientation==="left"&&(c.left=N.x,c.top=N.y),N.orientation==="right"&&(c.right=N.x,c.top=N.y)),c.left!==void 0&&(aQ=!0),c.top!==void 0&&(YB=!0),aQ?SE=ci(c.left!==void 0?c.left:gg[G].leftPos):(SE=ci(c.right!==void 0?c.right:gg[G].rightPos),nd=parseInt(SE,10)),z.style[aQ?"left":"right"]=SE,rd()}function rd(){YB?td=ci(c.top!==void 0?c.top:gg[G].topPos):ed=ci(c.bottom!==void 0?c.bottom:gg[G].bottomPos),YB?(z.style.top=td,z.style.setProperty("bottom","")):(z.style.bottom=ed,z.style.setProperty("top",""))}function wi(F,N){var Y=parseInt(tB,10);aQ?(F.style.textAlign="left",F.style.right="",F.style.left=(M?0:parseInt(z.style.left,10))+Y+10+"px"):(F.style.textAlign="right",F.style.left="",F.style.right=(M?0:parseInt(z.style.right,10))+Y+10+"px"),N||(YB?(F.style.bottom="",F.style.top=(M?0:parseInt(z.style.top,10))+Y/2+"px"):(F.style.top="",F.style.bottom=(M?0:parseInt(z.style.bottom,10))+Y/2+"px")),M&&(F.style.position="absolute",F.classList.add("alan-btn-lib__absolute-positioned")),N&&(F.style.bottom="",F.style.top=(M?0:N)+Y/2+"px",F.style.setProperty("transform","translateY(-50%)","important")),F.style.zIndex=gd}function Cd(){aQ?(QA.style.left="0",QA.style.right="",DA.classList.remove("alan-btn-lib__left-side"),DA.classList.add("alan-btn-lib__right-side")):(QA.style.right="0",QA.style.left="",DA.classList.remove("alan-btn-lib__right-side"),DA.classList.add("alan-btn-lib__left-side"))}function id(F){tB=F,QA.style.width=F+"px",QA.style.minWidth=F+"px",QA.style.maxWidth=F+"px",QA.style.minHeight=F+"px",QA.style.height=F+"px",QA.style.maxHeight=F+"px",z.style.width=F+"px",z.style.minWidth=F+"px",z.style.maxWidth=F+"px",z.style.minHeight=F+"px",z.style.height=F+"px",z.style.maxHeight=F+"px",Ct()&&(DA.style.maxWidth="calc(100vw - "+(parseInt(SE,10)+parseInt(tB,10)+20)+"px)"),ad([HB,TB]),wi(DA)}QA.style.color="#fff",QA.style.position="absolute";var Re="transform 0.4s ease-in-out, opacity 0.4s ease-in-out";id(tB),YB?QA.style.top="0":QA.style.bottom="0",Cd(),QA.style.borderRadius="50%",QA.style.textAlign="center",QA.style.transition=Re,QA.style.zIndex=Ge,c&&c.tabIndex&&(QA.tabIndex=c.tabIndex),aI()?QA.style.cursor="default":Ct()||(QA.style.cursor="pointer"),$A.style.minHeight="100%",$A.style.height="100%",$A.style.maxHeight="100%",$A.style.top="0%",$A.style.left="0%",$A.style.zIndex=ZE,$A.style.position="relative",$A.style.transition=Re;function _y(F){for(var N=0;N<F.length;N++)F[N].style.minHeight="100%",F[N].style.height="100%",F[N].style.maxHeight="100%",F[N].style.minWidth="100%",F[N].style.width="100%",F[N].style.maxWidth="100%",F[N].style.top="0%",F[N].style.left="0%",F[N].style.position="absolute",F[N].style.pointerEvents="none",F[N].style.animationIterationCount="infinite",F[N].style.animationDuration="9s",F[N].style.animationTimingFunction="ease-in-out",F[N].style.opacity=0,F[N].alt=t+" logo animated part "+N,$A.appendChild(F[N])}bE.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFogTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlLTIiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",Ei.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LDEuODU4NDEzMzFlLTE1IDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgTDMwLjk0NDQ0NDQsMCBMMzAuODIyNzM0NywxLjgzNTczNjRlLTE1IEMzMC43OTI0NzYzLDEuODk0OTg1MzllLTE1IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgQzMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LDIuMDMyMDE2NDNlLTE1IDE3LjE3NzI2NTMsMCBMMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",ri.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",Ci.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",ii.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBMMzAuOTQ0NDQ0NCwtMS40MjEwODU0N2UtMTQgTDMwLjgyMjczNDcsLTEuMjM3NTExODNlLTE0IEMzMC43OTI0NzYzLC0xLjIzMTU4NjkzZS0xNCAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MTE5MjQsMjEgTDIzLjk1NjQ1ODIsMjEgQzI0LjczMDk1NjIsMjAuOTk5ODkzOSAyNS40NDE1ODY3LDIxLjI5NTM4NDggMjUuODAxNDg0NiwyMS45ODIzNzY3IEwyOS45ODE5MDE1LDI5Ljk2MjE3NjkgQzMwLjMzODM0NCwzMC42NDI1NzMyIDMwLjA3NjY4NTIsMzEuNDgzNTk5NyAyOS4zOTc0NzAxLDMxLjg0MDY2MjEgQzI5LjE5ODM4MzgsMzEuOTQ1MzIxNSAyOC45NzY5MDkzLDMyIDI4Ljc1MjA3MzgsMzIgTDExLjIwOTMzNzgsMzIgTDEuNzA3ODY0OTUsMzIgQzAuOTQwODAyNzk2LDMyIDAuMzE4OTc2MDU5LDMxLjM3NzA5MTggMC4zMTg5NzYwNTksMzAuNjA4Njk1NyBDMC4zMTg5NzYwNTksMzAuMzg0NTk0OCAwLjM3MzAxNTYxOCwzMC4xNjM4MSAwLjQ3NjQ5NzEwNiwyOS45NjUxMjU2IEw0LjYzMDYyNzg1LDIxLjk4OTE5NDUgQzQuOTg5NjE3NzYsMjEuMjk5OTMzOSA1LjcwMTMxMTAxLDIxLjAwMDEwNjMgNi40NzczOTQ2NiwyMSBMMTguMjcxMTkyNCwyMSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",oi.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBMMzAuOTQ0NDQ0NCwwIEwzMC44MjI3MzQ3LDEuODM1NzM2NGUtMTUgQzMwLjc5MjQ3NjMsMS44OTQ5ODUzOWUtMTUgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",ai.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEwzMC45NDQ0NDQ0LDAgTDMwLjgyMjczNDcsMS44MzU3MzY0ZS0xNSBDMzAuNzkyNDc2MywxLjg5NDk4NTM5ZS0xNSAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEMzMC42Nzk5OTUsMS44NTg0MTMzMWUtMTUgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",si.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",Ii.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",li.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTEwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMTAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBMMS43MDc4NjQ5NSwzMiBDMC45NDA4MDI3OTYsMzIgMC4zMTg5NzYwNTksMzEuMzc3MDkxOCAwLjMxODk3NjA1OSwzMC42MDg2OTU3IEMwLjMxODk3NjA1OSwzMC4zODQ1OTQ4IDAuMzczMDE1NjE4LDMwLjE2MzgxIDAuNDc2NDk3MTA2LDI5Ljk2NTEyNTYgTDQuNjMwNjI3ODUsMjEuOTg5MTk0NSBDNC45ODk2MTc3NiwyMS4yOTk5MzM5IDUuNzAxMzExMDEsMjEuMDAwMTA2MyA2LjQ3NzM5NDY2LDIxIEwxOC4yMDEzODg5LDIxIEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUtMiIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBDMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LC0xLjIxNzg4MzgzZS0xNCAxNy4xNzcyNjUzLC0xLjQyMTA4NTQ3ZS0xNCBMMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",_y([bE,Ei,ri,Ci,ii,oi,ai,si,Ii,li]),sQ.alt=t+" button icon for idle state",LB.alt=t+" button icon for listening state",dB.alt=t+" button icon for processing state",XB.alt=t+" button icon for reply state";var od=[sQ,LB,dB,XB];sQ.src=Ad;for(var HQ=0;HQ<od.length;HQ++){var RQ=od[HQ];RQ.style.minHeight="100%",RQ.style.height="100%",RQ.style.maxHeight="100%",RQ.style.minWidth="100%",RQ.style.width="100%",RQ.style.maxWidth="100%",RQ.style.top="0%",RQ.style.left="0%",RQ.style.position="absolute",RQ.style.pointerEvents="none",RQ.style.borderRadius="50%",$A.appendChild(RQ)}IA.style.minHeight="100%",IA.style.height="100%",IA.style.maxHeight="100%",IA.style.minWidth="100%",IA.style.width="100%",IA.style.maxWidth="100%",IA.style.top="0%",IA.style.left="0%",IA.style.zIndex=ZE,IA.style.position="absolute",IA.style.opacity="0",IA.style.transition=Re,IA.style.overflow="hidden",IA.style.borderRadius="50%",IA.style.backgroundSize="100% 100%",IA.style.backgroundPosition="center center",IA.style.backgroundRepeat="no-repeat",IA.classList.add("triangleMicIconBg"),IA.classList.add("triangleMicIconBg-default"),SA.style.minHeight="100%",SA.style.height="100%",SA.style.maxHeight="100%",SA.style.minWidth="100%",SA.style.width="100%",SA.style.maxWidth="100%",SA.style.top="0%",SA.style.left="0%",SA.style.zIndex=ZE,SA.style.position="absolute",SA.style.opacity="0",SA.style.transition=Re,SA.style.overflow="hidden",SA.style.borderRadius="50%",SA.style.backgroundSize="0% 0%",SA.style.backgroundPosition="center center",SA.style.backgroundRepeat="no-repeat",SA.classList.add("circleMicIconBg");function Di(F,N){var Y=N.height,AA=N.top,lA=N.altText,WA=N.src,uA=N.animation;F.style.minHeight=Y,F.style.height=Y,F.style.maxHeight=Y,F.style.top=AA,F.style.left=AA,F.style.zIndex=ZE,F.style.position="absolute",F.style.transition=Re,F.style.opacity="0",F.alt=t+lA,F.src=WA,uA&&(F.style.animation=uA)}Di(tg,{height:"70%",top:"15%",altText:" disconnected microphone icon",animation:xy,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZTMCAxNDkuMDIgMCA5NiA0Mi45OCAwIDk2IDB6IiBvcGFjaXR5PSIuMDIiLz4KICAgICAgICA8cGF0aCBkPSJNMTMxLjk2NiAxOS4wOTJjLTMwLTE0LTY1LjI4NC05Ljg0OS05MS4xNDIgMTIuNTc1QzE0Ljk2NiA1NC4wOTIgNi44NSA4My44MSAxMi45MDggMTEzLjk1YzYuMDU4IDMwLjE0MiAzMC4zMDIgNTYuMTkgNjAuMDU4IDY0LjE0MiAzNS4xODMgOS40MDYgNzMtNCA5My0zNC0xNy45MjQgMjMuOTE2LTUyLjM2NiAzOC4yOTMtODMgMzMtMzAuMTY4LTUuMjEtNTcuMTA0LTMxLjExLTY0LTYxLTcuMzQ3LTMxLjgzNS43NzktNTYgMjctODBzODAtMjYgMTA5IDljNS41MzYgNi42ODEgMTMgMTkgMTUgMzQgMSA2IDEgNyAyIDEyIDAgMiAyIDQgNCA0IDMgMCA1LjM3NC0yLjI1NiA1LTYtMy0zMC0yMS41NTYtNTcuMTkzLTQ5LTcweiIgb3BhY2l0eT0iLjQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="}),Di(nn,{height:"100%",top:"0%",altText:" low volume icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1taWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWxhbi1CdXR0b24tLy1BbmltYXRpb24tLy1idXR0b24tbm8tbWljIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTguNDczNjg0MiBDMzIsMjUuNzE5NDczNyAyNi43OCwzMS42OTI2MzE2IDIwLDMyLjY5ODQyMTEgTDIwLDQwIEMyMCw0MS4xMDQ1Njk1IDE5LjEwNDU2OTUsNDIgMTgsNDIgQzE2Ljg5NTQzMDUsNDIgMTYsNDEuMTA0NTY5NSAxNiw0MCBMMTYsMzIuNjk4NDIxMSBDOS4yMiwzMS42OTI2MzE2IDQsMjUuNzE5NDczNyA0LDE4LjQ3MzY4NDIgTDQsMTggQzQsMTYuODk1NDMwNSA0Ljg5NTQzMDUsMTYgNiwxNiBDNy4xMDQ1Njk1LDE2IDgsMTYuODk1NDMwNSA4LDE4IEw4LDE4LjQ3MzY4NDIgQzgsMjQuMTQxODY5OCAxMi40NzcxNTI1LDI4LjczNjg0MjEgMTgsMjguNzM2ODQyMSBDMjMuNTIyODQ3NSwyOC43MzY4NDIxIDI4LDI0LjE0MTg2OTggMjgsMTguNDczNjg0MiBMMjgsMTggQzI4LDE2Ljg5NTQzMDUgMjguODk1NDMwNSwxNiAzMCwxNiBDMzEuMTA0NTY5NSwxNiAzMiwxNi44OTU0MzA1IDMyLDE4IEwzMiwxOC40NzM2ODQyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LC00LjUyNzM3MjYzZS0xNCBDMjEuMzEzNzA4NSwtNC42MTg1Mjc3OGUtMTQgMjQsMi43NTY5ODMzOCAyNCw2LjE1Nzg5NDc0IEwyNCwxOC40NzM2ODQyIEMyNCwyMS44NzQ1OTU2IDIxLjMxMzcwODUsMjQuNjMxNTc4OSAxOCwyNC42MzE1Nzg5IEMxNC42ODYyOTE1LDI0LjYzMTU3ODkgMTIsMjEuODc0NTk1NiAxMiwxOC40NzM2ODQyIEwxMiw2LjE1Nzg5NDc0IEMxMiwyLjc1Njk4MzM4IDE0LjY4NjI5MTUsLTQuNTI3MzcyNjNlLTE0IDE4LC00LjYxODUyNzc4ZS0xNCBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjgxLDMuMjcgTDM0LjczLDM0LjE5IEMzNS40MzE0MDE2LDM0Ljg5MTQwMTYgMzUuNDMxNDAxNiwzNi4wMjg1OTg0IDM0LjczLDM2LjczIEMzNC4wMjg1OTg0LDM3LjQzMTQwMTYgMzIuODkxNDAxNiwzNy40MzE0MDE2IDMyLjE5LDM2LjczIEwxLjI3LDUuODEgQzAuNTY4NTk4MzY4LDUuMTA4NTk4MzcgMC41Njg1OTgzNjgsMy45NzE0MDE2MyAxLjI3LDMuMjcgQzEuOTcxNDAxNjMsMi41Njg1OTgzNyAzLjEwODU5ODM3LDIuNTY4NTk4MzcgMy44MSwzLjI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`}),Di(kE,{height:"100%",top:"0%",altText:" no voice support icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII="}),Di(ng,{height:"100%",top:"0%",altText:" offline icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`});var II={idle:{background:{color:["rgb(34, 203, 255)","rgb(25, 149, 255)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]}},listen:{background:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgb(0, 70, 255)"]}},process:{background:{color:["rgba(0, 255, 205, 0.95)","rgba(0, 115, 255, 0.95)"]},hover:{color:["rgb(0, 115, 255)","rgba(0, 115, 255, 0.95)"]}},reply:{background:{color:["rgba(122, 40, 255, 0.95)","rgba(61, 122, 255, 0.95)"]},hover:{color:["rgba(122, 40, 255, 0.95)","rgb(122, 40, 255)"]}}};HB.style.transform="rotate(-315deg)",TB.style.transform="rotate(-45deg)",ad([HB,TB]);function ad(F){for(var N=0;N<F.length;N++){var Y=F[N];Y.style.height=tB/2+"px",Y.style.maxHeight=tB/2+"px",Y.style.minHeight=tB/2+"px",Y.style.minWidth=tB+"px",Y.style.width=tB+"px",Y.style.maxWidth=tB+"px",Y.style.top="calc(100%/2 - "+tB/2/2+"px)",Y.style.filter="blur("+tB/10+"px)",Y.style.left=0,Y.style.zIndex=iI,Y.style.position="absolute",Y.style.transition=Re,Y.style.opacity=".5",Y.style.borderRadius="100px",Y.classList.add("alanBtn-oval-bg-default")}}var sd="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==";pe.classList.add("alanBtn-bg-default"),te.classList.add("alanBtn-bg-listening"),ne.classList.add("alanBtn-bg-speaking"),ge.classList.add("alanBtn-bg-intermediate"),Ee.classList.add("alanBtn-bg-understood"),WE(pe),WE(te),WE(ne),WE(ge),WE(Ee);var Eg="1",$y="0";pe.style.opacity=Eg;var Id=[SA,IA,$A,ng,nn,kE,bE,Ei,ri,Ci,ii,oi,ai,si,Ii,li];for(HQ=0;HQ<Id.length;HQ++)Id[HQ].setAttribute("draggable","false");Cg([te,ne,ge,Ee]),QA.appendChild(HB),QA.appendChild(TB),QA.appendChild(pe),QA.appendChild(te),QA.appendChild(ne),QA.appendChild(ge),QA.appendChild(Ee),QA.appendChild($A),QA.appendChild(IA),QA.appendChild(SA),QA.appendChild(tg),QA.appendChild(nn),QA.appendChild(kE),QA.appendChild(ng),QA.classList.add("alanBtn"),Ct()&&z.classList.add("mobile"),lI();function $(F){return".alan-"+rg()+(F?"":" ")}function lI(F){var N,Y="",AA=rg(),lA;c.shadowDOM?lA=c.shadowDOM.getElementById("alan-stylesheet-"+AA):lA=document.getElementById("alan-stylesheet-"+AA),lA&&(lA.disabled=!0,lA.parentNode.removeChild(lA)),N=document.createElement("style"),N.setAttribute("id","alan-stylesheet-"+AA),N.type="text/css",Y+=".alanBtn-root * {  box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}";var WA=Ct()?":active":":hover";Ct()||(Y+=$()+".alanBtn{transform: scale(1);"+Re+";} .alanBtn"+WA+"{transform: scale(1.11111);transition:"+Re+";}.alanBtn:focus {transform: scale(1);"+Re+";  border: solid 3px #50e3c2;  outline: none;  }"),Y+=$()+".alanBtn-recognised-text-holder { position:fixed; transform: translateY("+(YB?"-":"")+"50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}",Y+=$()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__left-side { text-align: left;}",Y+=$()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__right-side { text-align: right;}",Y+=$()+" .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}",Y+=$(!0)+".alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  ",Y+=$(!0)+".alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  ",Y+=$()+".alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }",Y+=$()+".alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }",Y+=$()+".alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }",Y+=$()+".alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }",Y+=$()+`.shadow-appear {  opacity: 1 !important;  }
`,Y+=$()+".shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }",Y+=$(!0)+".alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",Y+=$(!0)+".alan-btn-offline .alanBtn"+WA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",Y+=$(!0)+".alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",Y+=$(!0)+".alan-btn-no-voice-support .alanBtn"+WA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",Y+=$(!0)+".alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",Y+=$(!0)+".alan-btn-permission-denied .alanBtn"+WA+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",Y+=$()+".triangleMicIconBg {background-image:url("+Py+"); pointer-events: none;}",Y+=$()+".circleMicIconBg {background-image:url("+Ky+"); pointer-events: none;}",Y+=$()+" img {pointer-events: none;}",Y+=$()+""+WA+" .triangleMicIconBg-default {opacity:0!important;}",Y+=$()+".alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",Y+=$()+".alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}",Y+=$()+'.alan-alert-popup__close-btn {background:url("'+sd+'") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}',Y+=$()+".alan-overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",Y+=$()+".alan-overlay-popup.alan-btn-lib__default-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:6px 30px 6px 12px;text-align: left;width: 220px;background: rgb(255 255 255);}",Y+=$()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__right {border-top-right-radius: 0!important;}",Y+=$()+".alan-overlay-popup.alan-btn-lib__top.alan-btn-lib__left {border-top-left-radius: 0!important;}",Y+=$()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__left {border-bottom-left-radius: 0!important;}",Y+=$()+".alan-overlay-popup.alan-btn-lib__bottom.alan-btn-lib__right {border-bottom-right-radius: 0!important;}",Y+=$()+".alan-overlay-popup {position: fixed;opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",Y+=$()+".alan-overlay-popup__body {position:relative;color: #0D1940;font-size: 16px;line-height: 20px;}",Y+=$()+'.alan-overlay-popup__ok {background:url("'+sd+'") no-repeat center; background-size:100% 100%;min-height:14px;height:14px;max-height:14px;min-width:14px;width:14px;max-width:14px;opacity:0;transition:opacity 300ms ease-in-out;position:absolute;top:8px;right:8px;cursor: pointer;pointer-events: auto!important;}',Y+=$()+".alan-overlay-popup__ok:hover {opacity:0.9}",Y+=$()+".alan-overlay-popup:hover .alan-overlay-popup__ok{opacity:1;transition:opacity 300ms ease-in-out;}",Y+=$()+IQ("alan-gradient","0%{backgroundPosition: 0 0;}50%{backgroundPosition: -100% 0;}100%{backgroundPosition: 0 0;}"),Y+=$()+IQ("alan-pulsating","0%{transform: scale(1.11111);}50%{transform: scale(1.0);}100%{transform: scale(1.11111);}"),Y+=$()+IQ("alan-mic-pulsating","0%{transform: scale(0.91);}50%{transform: scale(1.0);}100%{transform: scale(0.91);}"),Y+=$()+IQ("alan-triangle-mic-pulsating","0%{transform: scale(0.94);}50%{transform: scale(1.0);}100%{transform: scale(0.94);}"),Y+=$()+IQ("alan-fade-in","0%{opacity: 0;}100%{opacity:1;}"),Y+=$()+IQ("alan-fade-out","0%{opacity: 1;}100%{opacity:0;}"),Y+=$()+IQ("text-holder-appear","0%{opacity:0; color:transparent; background-color:rgba(245, 252, 252, 0.0);border: solid 1px transparent; }100%{opacity:1; color:#000;background-color:rgba(245, 252, 252, 0.8);}"),Y+=$()+IQ("text-holder-disappear","0%{opacity:1; color:#000;background-color:rgba(245, 252, 252, 0.8);  }100%{opacity:0; color:transparent;background-color:rgba(245, 252, 252, 0.0);border: solid 1px transparent;}");function uA(Fv,Pd){for(var Kd=[0,10,20,30,40,50,60,70,80,90,100],jd="",ig=0;ig<Kd.length;ig++){var uI=0;Pd===0?uI=ig===0||ig===10?1:0:uI=ig===Pd?1:0,jd+="".concat(Kd[ig],"% {  opacity: ").concat(uI,";  } ")}return $()+IQ(Fv,jd)}for(var me=0;me<10;me++)Y+=uA("logo-state-".concat(me+1,"-animation"),me);Y+=$()+IQ("disconnected-loader-animation","0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }"),Y+=$()+IQ("oval1-animation","0%{  transform: rotate(-315deg);  } 50%{  transform: rotate(-495deg);  } 100%{  transform: rotate(-315deg);  }"),Y+=$()+IQ("oval2-animation","0%{  transform: rotate(-45deg);  } 50%{  transform: rotate(-215deg);  } 100%{  transform: rotate(-45deg);  }"),Y+=$()+IQ("alan-text-fade-in","0%{  opacity: 0;  } 100%{   opacity: 1;  }"),Y+=$()+".alanBtn-bg-default.super-hidden{opacity:0!important;display:none;}";var rn=II;F&&(F.btnLayerOptions?rn=II:rn=F||II);var EB,Ye,xE={idle:["default"],listen:["listening"],process:["intermediate","understood"],reply:["speaking"]},Ne,cQ,zE=Object.keys(xE);for(HQ=0;HQ<zE.length;HQ++){Ye=zE[HQ],Ne=xE[Ye],EB=rn[Ye];for(var FI=0;FI<Ne.length;FI++)cQ=Ne[FI],EB.background&&(Y+=$()+".alanBtn-bg-"+cQ+" {",Y+="background-image: linear-gradient(122deg,"+EB.background.color[0]+","+EB.background.color[1]+");",Y+="}",Y+=$()+".alanBtn-oval-bg-"+cQ+" {",Y+="background-image: linear-gradient(122deg,"+EB.background.color[0]+","+EB.background.color[1]+");",Y+="}"),EB.hover&&(Y+=$()+".alanBtn"+WA+" .alanBtn-bg-"+cQ+":not(.super-hidden) {",Y+="background-image: linear-gradient(122deg,"+EB.hover.color[0]+","+EB.hover.color[1]+");",Y+="}",Y+=$()+".alanBtn:active .alanBtn-bg-"+cQ+":not(.super-hidden) {",Y+="background-image: linear-gradient(122deg,"+EB.hover.color[0]+","+EB.hover.color[1]+");",Y+="}",Y+=$()+".alanBtn"+WA+" .alanBtn-oval-bg-"+cQ+":not(.super-hidden) {",Y+="background-image: linear-gradient(122deg,"+EB.hover.color[0]+","+EB.hover.color[1]+");",Y+="}",Y+=$()+".alanBtn:active .alanBtn-oval-bg-"+cQ+":not(.super-hidden) {",Y+="background-image: linear-gradient(122deg,"+EB.hover.color[0]+","+EB.hover.color[1]+");",Y+="}")}N.innerHTML=Y,c.shadowDOM?c.shadowDOM.prepend(N):document.getElementsByTagName("head")[0].appendChild(N)}function IQ(F,N){for(var Y=["@-webkit-keyframes","@keyframes"],AA="",lA=0;lA<Y.length;lA++)AA+=Y[lA]+" "+F+"{"+N+"} ";return AA}c&&(c.alanAudio&&(aA=c.alanAudio),c.key?(n=c.key,Hd(),fB(LE(Z)),window.tutorProject=window.alan.project(c.key,ld(c.authData),c.host,null,{platform:G==="demo"?"alanplayground":null,userAgent:navigator.userAgent,appName:window.location.hostname}),window.tutorProject.on("connectStatus",TE),window.tutorProject.on("options",HE)):(gn()||console.error("The Alan Button key wasn't provided"),fB(LE())));function ld(F){var N=F||{};return N.uuid=s(),N}function rg(){var F;return c.key?(F=c.key,F.substr(0,F.indexOf("/"))):G}function cd(F,N){var Y,AA=N||100;return function(lA){clearTimeout(Y),Y=setTimeout(function(){F.apply(this,lA)},AA)}}var Av=cd(function(){XE(!0,!0)},400),wd=window.innerHeight,Dd=window.orientation;function Bv(){return/apple/i.test(navigator.vendor)}window.onresize=function(){if(!gn()&&!M){var F=Math.abs(wd-window.innerHeight),N=(Ct()||rv())&&Bv(),Y=Dd!==window.orientation,AA=F!==0,lA=N&&(F===84||F===95||F===50||F===0);if(Dd=window.orientation,wd=window.innerHeight,(Y||eg||lA)&&AA){var WA=z.getBoundingClientRect(),uA;F===0?uA=WA.top+84:uA=WA.top,Y&&window.orientation===0?rd():z.style.setProperty("top",Vd(uA)+"px","important")}XE(!1),Av({})}};var Fd=!1;function Qv(){if(navigator.permissions){var F="microphone";navigator.permissions.query({name:F}).then(function(N){N.state==="prompt"&&(Zd()?Fd||(Fd=!0,Fi({overlay:!0,buttonUnderOverlay:!0})):Fi({overlay:!0,buttonUnderOverlay:!0}),S({micPermissionPrompt:!0})),N.state!=="granted"?S({buttonClicked:!0,micAllowed:!1}):S({buttonClicked:!0,micAllowed:!0})}).catch(function(){console.warn("Not possible to detect mic permissions"),setTimeout(function(){return S({buttonClicked:!0,micAllowed:aA.isMicAllowed()})},300)})}else setTimeout(function(){return S({buttonClicked:!0,micAllowed:aA.isMicAllowed()})},300)}aA.on("popup",ev);function ud(F){Qv(),c.onBeforeMicStart&&c.onBeforeMicStart(),aA.on("micStart",Gd),aA.on("micStop",cI),aA.on("micAllowed",hd),aA.on("audioRunning",pd),fd(),aA.on("micFail",Rd),aA.on("playStart",Yd),aA.on("playStop",Nd),aA.on("command",kd),aA.start(F),c.onMicStarted&&c.onMicStarted()}function dd(){var F=new Promise(function(N,Y){if(l){Y({err:GA});return}if(aI()){Y({err:nt});return}function AA(lA){lA==="authorized"&&(window.tutorProject.off("connectStatus",AA),ud(N))}if(aA)switch(NE){case x:try{ud(N)}catch{PA=_,Y({err:Qe})}break;case Z:case O:window.tutorProject.on("connectStatus",AA);break;case gA:Y({err:pQ}),S({buttonClicked:!0,micAllowed:!1});break;case tA:case P:case nA:case iA:N(),S({buttonClicked:!0,micAllowed:!0});break}else Y({err:tI})});return F}function fd(){aA.isAudioRunning()&&S({playAllowed:!0})}function ev(F){lQ(),!(Ct()||gn())&&F&&Fi(F.popup?F.popup:F)}function Fi(F,N){if(!l&&!oI&&!!u){ui=F;var Y=F.message,AA=F.buttonMarginInPopup,lA=F.overlay,WA=parseInt(tB,10),uA=document.createElement("div"),me=z.getBoundingClientRect(),rn=2147483647,EB=12;if(oI=!0,uA.id="alan-overlay-popup",uA.classList.add("alan-overlay-popup"),F.buttonUnderOverlay!==!0&&(QA.style.zIndex=rn.toString()),uA.style.zIndex=(rn-2).toString(),F.preventClick&&(QA.style.pointerEvents="none"),F.style){var Ye=document.createElement("style");Ye.setAttribute("id","alan-stylesheet-popup"),Ye.type="text/css";var xE="alan-popup-"+I();uA.classList.add(xE),Ye.innerHTML=F.style.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-:]*\s*\{)/gi,".".concat(xE," $&")),c.shadowDOM?c.shadowDOM.prepend(Ye):document.getElementsByTagName("head")[0].appendChild(Ye)}uA.classList.add(aQ?"alan-btn-lib__left":"alan-btn-lib__right"),M?(uA.style.position="absolute",uA.style[aQ?"left":"right"]=(-AA||0)+"px",uA.style[YB?"top":"bottom"]=(AA?-AA:WA+EB)+"px",uA.classList.add(YB?"alan-btn-lib__top":"alan-btn-lib__bottom")):(aQ?uA.style.left=me.x+(-AA||0)+"px":uA.style.right=nd+(-AA||0)+"px",me.top>80?(uA.classList.add("alan-btn-lib__bottom"),uA.style.top=me.top+(AA?WA+AA:-EB)+"px",uA.style.setProperty("transform","translateY(-100%)","important")):(uA.classList.add("alan-btn-lib__top"),uA.style.top=me.top+(AA?-AA:WA+EB)+"px")),F.html?uA.innerHTML=F.html:Y&&(uA.classList.add("alan-btn-lib__default-popup"),uA.innerHTML='<div class="alan-overlay-popup__body">'+Y+"</div>");var Ne=document.createElement("div");if(Ne.id="alan-overlay-ok-btn",Ne.classList.add("alan-overlay-popup__ok"),F.html&&uA.children[0]?uA.children[0].appendChild(Ne):uA.appendChild(Ne),z.appendChild(uA),lA&&N!==!0){var cQ=document.createElement("div");cQ.id="alan-overlay",cQ.classList.add("alan-overlay"),cQ.style.zIndex=(rn-3).toString(),z.appendChild(cQ),cQ.addEventListener("click",lQ)}Ne.addEventListener("click",tv),document.addEventListener("keyup",Ud);var zE="showPopup";F.name&&(zE+=":"+F.name),k(zE)}}function tv(){lQ(),S({popupCloseClicked:!0})}function Ud(F){F.keyCode===27&&(lQ(),S({popupCloseClicked:!0}))}function lQ(F,N,Y){N!==!0&&(ui=null);var AA=z.querySelector("#alan-overlay"),lA=z.querySelector("#alan-overlay-popup");if(!!lA){var WA=z.querySelector("#alan-overlay-ok-btn");WA&&WA.removeEventListener("click",lQ),AA&&Y!==!0&&(AA.remove(),AA.removeEventListener("click",lQ)),lA&&lA.remove(),document.removeEventListener("keyup",Ud),QA.style.zIndex=Ge,QA.style.pointerEvents="auto",oI=!1}}var ui;function XE(F,N){var Y=z.querySelector("#alan-overlay-popup");Y&&(Y.style.visibility=F?"visible":"hidden",F&&(lQ(null,!0,N),ui&&Fi(ui,N)))}QA.addEventListener("click",function(F){if(!rt&&!!gi){if(lQ(),E||(E=!0,S({firstClick:!0})),PA){PA===cA&&S({buttonClicked:!0,micAllowed:!1}),wI(PA);return}if(aA)NE==="default"?(Ev(),dd()):aA.stop();else throw new Error("No alan audio instance was provided");this.blur()}});function Md(F){var N="";w||Et||(he=!0,c.hideRecognizedText||(DA.classList.value.indexOf("alanBtn-text-appearing")===-1&&(DA.style.opacity="1",DA.classList.add("alan-btn-lib__with-text"),DA.classList.add("alanBtn-text-appearing"),DA.classList.remove("alanBtn-text-disappearing")),F.text&&(N=F.text,N.length>200&&(N=N.substr(0,200)),JE.innerHTML=N),DA.classList.contains("alan-btn-lib__absolute-positioned")&&(N.length<33?(DA.style.whiteSpace="nowrap",DA.style.minWidth="auto"):(DA.style.minWidth="236px",DA.style.whiteSpace="normal")),N.length>60&&N.length<=80?DA.classList.add("alanBtn-recognised-text-holder-long"):N.length>80?DA.classList.add("alanBtn-recognised-text-holder-super-long"):(DA.classList.remove("alanBtn-recognised-text-holder-long"),DA.classList.remove("alanBtn-recognised-text-holder-super-long")),nv(N)))}function nv(F){Ct()||c.hideRecognizedText||(JE.innerText=F)}function di(F,N){if(!c.hideRecognizedText&&he){if(N===!0){DA.style.opacity="0",DA.classList.remove("alanBtn-text-appearing"),he=!1;return}else DA.classList.add("alanBtn-text-disappearing"),DA.classList.remove("alanBtn-text-appearing");he=!1,setTimeout(function(){JE.innerHTML="",DA.classList.remove("alanBtn-recognised-text-holder-long"),DA.classList.remove("alanBtn-recognised-text-holder-super-long"),DA.classList.remove("alan-btn-lib__with-text")},F||810)}}function HE(F){F&&F.web?(h=F.web.keepButtonPositionAfterDnD,h||wv(),sI(F.web.keepButtonPositionAfterDnD)):sI(),F&&F.web&&F.web.hideS2TPanel===!0?sv():av(),F&&F.web&&F.web.popupEnabled===!0?u=!0:(u=!1,lQ()),F&&F.web&&F.web.timeout!==void 0&&(yE=F.web.timeout,qu()),F&&F.web&&Xd(F.web.btnOptions),Iv(F),c.mode!=="tutor"&&F&&F.web&&id(F.web.buttonSize||gg[G].btnSize),C&&F&&localStorage.setItem(Sd(),JSON.stringify(F)),F&&F.web&&F.web.playReadyToListenSound!==void 0&&lv(F.web.playReadyToListenSound),F&&F.web&&F.web.hidden===!0?ov():Ld()}function TE(F){c.onConnectionStatus&&c.onConnectionStatus(F),F==="disconnected"?Qn!==O&&fB(LE(Z)):F==="authorized"&&fB(Qn||LE())}function hd(){S({micAllowed:!0})}function pd(){fd()}function Gd(){if(p){p=!1,aA.start();return}lQ(),fB(tA),Jd(),Bg=!0,window.tutorProject&&(window.tutorProject.on("text",yd),window.tutorProject.on("parsed",vd),window.tutorProject.on("recognized",bd),window.tutorProject.on("connectStatus",TE),window.tutorProject.on("options",HE))}function cI(){gv(),en=!1,aA.off("micStart",Gd),aA.off("micStop",cI),aA.off("micAllowed",hd),aA.off("audioRunning",pd),aA.off("micFail",Rd),aA.off("playStart",Yd),aA.off("playStop",Nd),aA.off("command",kd),di(),fB(x),Bg=!1,window.tutorProject&&(window.tutorProject.off("text",yd),window.tutorProject.off("parsed",vd),window.tutorProject.off("recognized",bd),window.tutorProject.off("connectStatus",TE),window.tutorProject.off("options",HE)),c.onMicStopped&&c.onMicStopped()}function Rd(F){cI(),F&&(lQ(),F.name==="NotAllowedError"?fB(gA):F.name==="SecurityError"?(fB(oA),setTimeout(function(){wI(CA)},300)):console.error(F.name+" "+F.message))}function wI(F){var N=z.querySelector("#alan-alert-popup");if(!N){var Y=document.createElement("div");N=document.createElement("div");var AA=2147483647;Y.id="alan-overlay-for-alert",Y.classList.add("alan-overlay-for-alert"),N.id="alan-alert-popup",N.classList.add("alan-alert-popup"),QA.style.zIndex=AA.toString(),Y.style.zIndex=(AA-3).toString(),N.style.zIndex=(AA-2).toString(),N.innerHTML=F;var lA=document.createElement("div");lA.id="alan-alert-popup-close-btn",lA.classList.add("alan-alert-popup__close-btn"),N.appendChild(lA),z.appendChild(N),z.appendChild(Y),lA.addEventListener("click",DI),Y.addEventListener("click",DI),document.addEventListener("keyup",md)}}function md(F){F.keyCode===27&&DI()}function DI(){var F=z.querySelector("#alan-overlay-for-alert"),N=z.querySelector("#alan-alert-popup"),Y=z.querySelector("#alan-alert-popup-close-btn");Y&&Y.removeEventListener("click",lQ),F&&(F.remove(),F.removeEventListener("click",lQ)),N&&N.remove(),QA.style.zIndex=Ge,QA.style.pointerEvents="auto",document.removeEventListener("keyup",md)}function Yd(F){console.log("BTN: play start"),en=!0,fB(P),GQ()}function Nd(F){console.log("BTN: play stop"),en=!1,Jd(),fB(tA),GQ()}function yd(F){c.onEvent&&c.onEvent(Object.assign(F,{name:"text"})),GQ()}function vd(F){c.onEvent&&c.onEvent(Object.assign(F,{name:"parsed"})),GQ(),Md(F)}function bd(F){c.onEvent&&c.onEvent(Object.assign(F,{name:"recognized"})),F.final===!0?fB(iA):fB(nA),Md(F),GQ()}function kd(F){c.onCommand&&c.onCommand(F.data),Bg&&fB(tA),GQ()}function gv(){Bd||(CI.currentTime=0,CI.play().catch(function(){console.log("No deactivation sound, because the user didn't interact with the button")}))}function Ev(){!Qg||(ee.loop=!0,ee.muted=!0,ee.play().catch(function(F){console.log(F)}))}function Jd(){rI=!1,Qg&&(aA.skipExternalSounds(!0),Qd||(ee.currentTime=0,ee.muted=!1,ee.loop=!1,ee.play().catch(function(F){console.log(F)})))}function En(F,N){F&&F.src&&(F.style.opacity=1);for(var Y=0;Y<N.length;Y++)N[Y].style.opacity=0}function fB(F){c.onButtonState&&c.onButtonState(W[F]);var N=[],Y=0;if(F!==Z&&(Qn=F),PA=null,F===x?(QA.style.animation="",$A.style.animation="",IA.style.animation="",pe.classList.remove("super-hidden"),pe.style.opacity=Eg,HB.style.animation="",TB.style.animation="",HB.style.opacity="0",TB.style.opacity="0",OE(x),$A.style.opacity="1",IA.style.opacity="0",En(sQ,[LB,dB,XB]),Cg([te,ne,ge,Ee])):F===tA?(QA.style.animation=vE,$A.style.animation=_u,te.classList.remove("super-hidden"),te.style.opacity=Eg,HB.style.opacity="1",TB.style.opacity="1",OE(tA),$A.style.opacity="1",LB.src||(IA.style.animation=$u,IA.style.opacity="1"),En(LB,[sQ,dB,XB]),Cg([ne,ge,Ee])):F===P?(di(),QA.style.animation=vE,ne.classList.remove("super-hidden"),ne.style.opacity=Eg,HB.style.opacity="1",TB.style.opacity="1",OE(P),En(XB,[sQ,LB,dB]),Cg([pe,te,ge,Ee])):F===nA?(QA.style.animation=vE,ge.classList.remove("super-hidden"),ge.style.opacity=Eg,HB.style.opacity="1",TB.style.opacity="1",OE(nA),$A.style.opacity="1",dB.src||(IA.style.opacity="1"),Cg([pe,te,ne,Ee]),En(dB,[sQ,LB,XB])):F===iA&&(QA.style.animation=vE,Ee.classList.remove("super-hidden"),Ee.style.opacity=Eg,HB.style.opacity="1",TB.style.opacity="1",OE(iA),$A.style.opacity="1",dB.src?IA.style.opacity="0":IA.style.opacity="1",En(dB,[sQ,LB,XB]),Cg([pe,te,ne,ge])),F===P?(IA.style.opacity="0",IA.style.backgroundSize="0% 0%",XB.src||(SA.style.opacity="1",SA.style.backgroundSize="100% 100%")):(SA.style.opacity="0",SA.style.backgroundSize="0% 0%",IA.style.backgroundSize="100% 100%"),F===x?IA.classList.add("triangleMicIconBg-default"):IA.classList.remove("triangleMicIconBg-default"),N=[bE,Ei,ri,Ci,ii,oi,ai,si,Ii,li],F===tA&&!LB.src||F===nA&&!dB.src||F===P&&!XB.src||F===iA&&!dB.src){if(bE.style.animationName==="")for(Y=0;Y<N.length;Y++)Y===0?N[Y].style.opacity=1:N[Y].style.opacity=0,N[Y].style.animationName="logo-state-"+(Y+1)+"-animation";sQ.style.opacity="0"}else for(Y=0;Y<N.length;Y++)N[Y].style.opacity=0,N[Y].style.animationName="";F===H||F===gA||F===T||F===oA?(F===H?(z.classList.add("alan-btn-low-volume"),PA=vA):F===gA?(z.classList.add("alan-btn-permission-denied"),PA=cA,console.warn(cA)):(F===T||F===oA)&&(z.classList.add("alan-btn-no-voice-support"),F===T?PA=_:F===oA&&(PA=CA)),F===T?(kE.style.opacity="1",nn.style.opacity="0"):(kE.style.opacity="0",nn.style.opacity="1"),En(null,[sQ,LB,dB,XB]),$A.style.opacity="0",IA.style.opacity="0",tg.style.opacity="0",ng.style.opacity="0",HB.style.animation="",TB.style.animation="",HB.style.opacity="0",TB.style.opacity="0"):F===Z||F===O?(F===Z&&z.classList.add("alan-btn-disconnected"),F===O&&(z.classList.add("alan-btn-offline"),PA=$B),IA.style.opacity="0",nn.style.opacity="0",HB.style.animation="",TB.style.animation="",HB.style.opacity="0",TB.style.opacity="0",En(null,[sQ,LB,dB,XB]),F===Z?($A.style.opacity="0",tg.style.opacity="1"):($A.style.opacity="0",tg.style.opacity="0",ng.style.opacity="1")):(nn.style.opacity="0",ng.style.opacity="0",tg.style.opacity="0",z.classList.remove("alan-btn-low-volume"),z.classList.remove("alan-btn-permission-denied"),z.classList.remove("alan-btn-disconnected"),z.classList.remove("alan-btn-offline"),z.classList.remove("alan-btn-no-voice-support")),NE=F}function WE(F){F.style.transition="all 0.4s linear",F.style.position="absolute",F.style.top="0px",F.style.left="0px",F.style.width="100%",F.style.height="100%",F.style.borderRadius="50%",F.style.zIndex=iI,F.style.backgroundPosition="0 0",F.style.opacity=0,F.style.opacity=0,F.style.transition="opacity 300ms ease-in-out",F.style.animation=Vy,F.style.display="block"}function Cg(F){for(var N=0;N<F.length;N++)F[N].style.opacity=$y,F[N].classList.add("super-hidden")}function OE(F){for(var N=[HB,TB],Y=F||x,AA=["alanBtn-oval-bg-"+x,"alanBtn-oval-bg-"+tA,"alanBtn-oval-bg-"+nA,"alanBtn-oval-bg-"+iA,"alanBtn-oval-bg-"+P],lA=0;lA<N.length;lA++){N[lA].classList.add("alanBtn-oval-bg-"+Y);for(var WA=0;WA<AA.length;WA++)N[lA].classList.remove(AA[WA])}}function Sd(){var F="";return c&&c.key&&(F=c.key),"alan-btn-options-"+F}function Ct(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function rv(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)}function Cv(){var F=!1,N=window.location.protocol,Y=window.location.hostname;return N==="https:"&&(F=!0),Zd()&&(F=!0),N==="http:"&&(Y.indexOf("localhost")>-1||Y.indexOf("127.0.0.1")>-1)&&(F=!0),F}function Zd(){var F=window.location.protocol;return F==="file:"}function iv(){var F=!1,N,Y;return N=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,Y=window.AudioContext||window.webkitAudioContext||window.mozAudioContext,N&&Y&&(F=!0),F}function Ld(){z.innerHTML="",DA.appendChild(JE),z.appendChild(DA),z.appendChild(QA),l=!1,S({buttonReady:!0})}function ov(){gn()||(aA.stop(),z.innerHTML="",l=!0)}function av(){w=!1}function sv(){w=!0,di()}function Xd(F){F?lI(F):lI()}function Iv(F){F&&F.web&&(F.web.logoUrl&&!F.web.logoIdle&&!F.web.logoListen&&!F.web.logoProcess&&!F.web.logoReply?(LB.src=F.web.logoUrl,dB.src=F.web.logoUrl,XB.src=F.web.logoUrl):(F.web.logoIdle?sQ.src=F.web.logoIdle:sQ.src=Ad,F.web.logoListen?LB.src=F.web.logoListen:(LB.removeAttribute("src"),LB.style.opacity="0"),F.web.logoProcess?dB.src=F.web.logoProcess:(dB.removeAttribute("src"),dB.style.opacity="0"),F.web.logoReply?XB.src=F.web.logoReply:(XB.removeAttribute("src"),XB.style.opacity="0")))}function lv(F){Qg=F}z.classList.add("alanBtn-root"),z.classList.add("alan-"+rg());var VE=null;if(gn())Ld();else if(C)try{Hd()}catch{}function Hd(){if(C)try{VE=JSON.parse(localStorage.getItem(Sd())),VE&&VE.web&&VE.web.btnOptions&&Xd(VE.web.btnOptions)}catch{}}c.rootEl||zy.appendChild(z),f||(QA.addEventListener("mousedown",Td,!0),QA.addEventListener("touchstart",Td,{passive:!1}),document.addEventListener("mouseup",Od,!0),document.addEventListener("touchend",Od,{passive:!1}),document.addEventListener("mousemove",Wd,!0),document.addEventListener("touchmove",Wd,{passive:!1}));function Td(F){var N=F.touches?F.touches[0]:F,Y;if(!!N&&!(!gi||F.buttons!==void 0&&F.buttons!==1)&&(Et=!0,z.style.transition="0ms",Y=z.getBoundingClientRect(),Y)){var AA=Y.x;tn||(tn=aQ?AA:window.innerWidth-AA-tB-(window.innerWidth-document.documentElement.clientWidth)),nI=AA,gt=[N.clientX,N.clientY],gI=parseInt(Y.top,10)}}function Wd(F){var N=F.touches?F.touches[0]:F,Y,AA;if(!!N&&Et)return XE(!1),di(0,!0),F.preventDefault(),rt||(z.style.setProperty("left",nI+"px","important"),z.style.setProperty("right","auto","important"),z.style.setProperty("top",gI+"px","important"),z.style.setProperty("bottom","auto","important")),rt=!0,Y=nI+N.clientX-gt[0],AA=gI+N.clientY-gt[1],Ku=N.clientX-gt[0],ju=N.clientY-gt[1],z.style.setProperty("left",cv(Y)+"px","important"),z.style.setProperty("top",Vd(AA)+"px","important"),F.preventDefault(),!1}function Od(F){var N,Y,AA;if(Et){if(AA=F.changedTouches?F.changedTouches[0]:F,!AA)return;if(Et=!1,z.style.transition=Oy,N=parseInt(z.style.left,10),Y=parseInt(z.style.top,10),Math.abs(Ku)<15&&Math.abs(ju)<15){setTimeout(function(){rt=!1,gi=!0},300);return}N<=window.innerWidth/2?(z.style.setProperty("left",tn+"px","important"),xd("to-left"),aQ=!0,wi(DA,Y),eg=!0,setTimeout(function(){XE(!0),zd("left",tn,Y)},EI)):(z.style.setProperty("left",window.innerWidth-tn-tB-(window.innerWidth-document.documentElement.clientWidth)+"px","important"),setTimeout(function(){z.style.setProperty("right",tn+"px","important"),xd("to-right"),aQ=!1,wi(DA,Y),zd("right",tn,Y),eg=!0,gi=!0,XE(!0)},EI)),setTimeout(function(){rt=!1},300)}}function Vd(F){var N=10;return F<N?N:F>window.innerHeight-tB-N?window.innerHeight-tB-N:F}function cv(F){var N=10;return F<N?N:F>window.innerWidth-tB-N?window.innerWidth-tB-N:F}function xd(F){F==="to-left"?z.style.setProperty("right","auto","important"):z.style.setProperty("left","auto","important"),Cd()}function zd(F,N,Y){if(!!h&&i){var AA=rg();sessionStorage.setItem("alan-btn-saved-orientation-"+AA,F),sessionStorage.setItem("alan-btn-saved-x-pos-"+AA,Math.floor(N).toString()),sessionStorage.setItem("alan-btn-saved-y-pos-"+AA,Math.floor(Y).toString())}}function wv(){if(i){var F=rg();sessionStorage.removeItem("alan-btn-saved-orientation-"+F),sessionStorage.removeItem("alan-btn-saved-x-pos-"+F),sessionStorage.removeItem("alan-btn-saved-y-pos-"+F)}}function Dv(){if(i){var F=rg(),N={orientation:sessionStorage.getItem("alan-btn-saved-orientation-"+F),x:+sessionStorage.getItem("alan-btn-saved-x-pos-"+F),y:+sessionStorage.getItem("alan-btn-saved-y-pos-"+F)};return N.orientation?N:null}return null}return r}Q.alanBtn=D,Q.alanBtn.getDebugInfo=a}(window),alanBtn})})(Lc,Lc.exports);const cJ=Lc.exports;function wJ(){return d.exports.createElement("div",null,d.exports.createElement("h1",null,"Welcome to AlanAppointments!"))}var bG={exports:{}},kG={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BE=d.exports;function DJ(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var FJ=typeof Object.is=="function"?Object.is:DJ,uJ=BE.useState,dJ=BE.useEffect,fJ=BE.useLayoutEffect,UJ=BE.useDebugValue;function MJ(A,B){var Q=B(),e=uJ({inst:{value:Q,getSnapshot:B}}),t=e[0].inst,n=e[1];return fJ(function(){t.value=Q,t.getSnapshot=B,zI(t)&&n({inst:t})},[A,Q,B]),dJ(function(){return zI(t)&&n({inst:t}),A(function(){zI(t)&&n({inst:t})})},[A]),UJ(Q),Q}function zI(A){var B=A.getSnapshot;A=A.value;try{var Q=B();return!FJ(A,Q)}catch{return!0}}function hJ(A,B){return B()}var pJ=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?hJ:MJ;kG.useSyncExternalStore=BE.useSyncExternalStore!==void 0?BE.useSyncExternalStore:pJ;(function(A){A.exports=kG})(bG);var JG={exports:{}},SG={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=d.exports,GJ=bG.exports;function RJ(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var mJ=typeof Object.is=="function"?Object.is:RJ,YJ=GJ.useSyncExternalStore,NJ=Ka.useRef,yJ=Ka.useEffect,vJ=Ka.useMemo,bJ=Ka.useDebugValue;SG.useSyncExternalStoreWithSelector=function(A,B,Q,e,t){var n=NJ(null);if(n.current===null){var g={hasValue:!1,value:null};n.current=g}else g=n.current;n=vJ(function(){function r(s){if(!C){if(C=!0,i=s,s=e(s),t!==void 0&&g.hasValue){var I=g.value;if(t(I,s))return o=I}return o=s}if(I=o,mJ(i,s))return I;var D=e(s);return t!==void 0&&t(I,D)?I:(i=s,o=D)}var C=!1,i,o,a=Q===void 0?null:Q;return[function(){return r(B())},a===null?void 0:function(){return r(a())}]},[B,Q,e,t]);var E=YJ(A,n[0],n[1]);return yJ(function(){g.hasValue=!0,g.value=E},[E]),bJ(E),E};(function(A){A.exports=SG})(JG);function kJ(A){A()}let ZG=kJ;const JJ=A=>ZG=A,SJ=()=>ZG,Ot=y.createContext(null);function LG(){return d.exports.useContext(Ot)}const ZJ=()=>{throw new Error("uSES not initialized!")};let XG=ZJ;const LJ=A=>{XG=A},XJ=(A,B)=>A===B;function HJ(A=Ot){const B=A===Ot?LG:()=>d.exports.useContext(A);return function(e,t=XJ){const{store:n,subscription:g,getServerState:E}=B(),r=XG(g.addNestedSub,n.getState,E||n.getState,e,t);return d.exports.useDebugValue(r),r}}const TJ=HJ();function HG(A,B){if(A==null)return{};var Q={},e=Object.keys(A),t,n;for(n=0;n<e.length;n++)t=e[n],!(B.indexOf(t)>=0)&&(Q[t]=A[t]);return Q}var TG={exports:{}},YA={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cB=typeof Symbol=="function"&&Symbol.for,yD=cB?Symbol.for("react.element"):60103,vD=cB?Symbol.for("react.portal"):60106,ja=cB?Symbol.for("react.fragment"):60107,qa=cB?Symbol.for("react.strict_mode"):60108,_a=cB?Symbol.for("react.profiler"):60114,$a=cB?Symbol.for("react.provider"):60109,As=cB?Symbol.for("react.context"):60110,bD=cB?Symbol.for("react.async_mode"):60111,Bs=cB?Symbol.for("react.concurrent_mode"):60111,Qs=cB?Symbol.for("react.forward_ref"):60112,es=cB?Symbol.for("react.suspense"):60113,WJ=cB?Symbol.for("react.suspense_list"):60120,ts=cB?Symbol.for("react.memo"):60115,ns=cB?Symbol.for("react.lazy"):60116,OJ=cB?Symbol.for("react.block"):60121,VJ=cB?Symbol.for("react.fundamental"):60117,xJ=cB?Symbol.for("react.responder"):60118,zJ=cB?Symbol.for("react.scope"):60119;function hQ(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case yD:switch(A=A.type,A){case bD:case Bs:case ja:case _a:case qa:case es:return A;default:switch(A=A&&A.$$typeof,A){case As:case Qs:case ns:case ts:case $a:return A;default:return B}}case vD:return B}}}function WG(A){return hQ(A)===Bs}YA.AsyncMode=bD;YA.ConcurrentMode=Bs;YA.ContextConsumer=As;YA.ContextProvider=$a;YA.Element=yD;YA.ForwardRef=Qs;YA.Fragment=ja;YA.Lazy=ns;YA.Memo=ts;YA.Portal=vD;YA.Profiler=_a;YA.StrictMode=qa;YA.Suspense=es;YA.isAsyncMode=function(A){return WG(A)||hQ(A)===bD};YA.isConcurrentMode=WG;YA.isContextConsumer=function(A){return hQ(A)===As};YA.isContextProvider=function(A){return hQ(A)===$a};YA.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===yD};YA.isForwardRef=function(A){return hQ(A)===Qs};YA.isFragment=function(A){return hQ(A)===ja};YA.isLazy=function(A){return hQ(A)===ns};YA.isMemo=function(A){return hQ(A)===ts};YA.isPortal=function(A){return hQ(A)===vD};YA.isProfiler=function(A){return hQ(A)===_a};YA.isStrictMode=function(A){return hQ(A)===qa};YA.isSuspense=function(A){return hQ(A)===es};YA.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===ja||A===Bs||A===_a||A===qa||A===es||A===WJ||typeof A=="object"&&A!==null&&(A.$$typeof===ns||A.$$typeof===ts||A.$$typeof===$a||A.$$typeof===As||A.$$typeof===Qs||A.$$typeof===VJ||A.$$typeof===xJ||A.$$typeof===zJ||A.$$typeof===OJ)};YA.typeOf=hQ;(function(A){A.exports=YA})(TG);var OG=TG.exports,PJ={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KJ={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},VG={};VG[OG.ForwardRef]=PJ;VG[OG.Memo]=KJ;var jJ={exports:{}},NA={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kD=Symbol.for("react.element"),JD=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Es=Symbol.for("react.strict_mode"),rs=Symbol.for("react.profiler"),Cs=Symbol.for("react.provider"),is=Symbol.for("react.context"),qJ=Symbol.for("react.server_context"),os=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),Is=Symbol.for("react.memo"),ls=Symbol.for("react.lazy"),_J=Symbol.for("react.offscreen"),xG;xG=Symbol.for("react.module.reference");function XQ(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case kD:switch(A=A.type,A){case gs:case rs:case Es:case as:case ss:return A;default:switch(A=A&&A.$$typeof,A){case qJ:case is:case os:case ls:case Is:case Cs:return A;default:return B}}case JD:return B}}}NA.ContextConsumer=is;NA.ContextProvider=Cs;NA.Element=kD;NA.ForwardRef=os;NA.Fragment=gs;NA.Lazy=ls;NA.Memo=Is;NA.Portal=JD;NA.Profiler=rs;NA.StrictMode=Es;NA.Suspense=as;NA.SuspenseList=ss;NA.isAsyncMode=function(){return!1};NA.isConcurrentMode=function(){return!1};NA.isContextConsumer=function(A){return XQ(A)===is};NA.isContextProvider=function(A){return XQ(A)===Cs};NA.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===kD};NA.isForwardRef=function(A){return XQ(A)===os};NA.isFragment=function(A){return XQ(A)===gs};NA.isLazy=function(A){return XQ(A)===ls};NA.isMemo=function(A){return XQ(A)===Is};NA.isPortal=function(A){return XQ(A)===JD};NA.isProfiler=function(A){return XQ(A)===rs};NA.isStrictMode=function(A){return XQ(A)===Es};NA.isSuspense=function(A){return XQ(A)===as};NA.isSuspenseList=function(A){return XQ(A)===ss};NA.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===gs||A===rs||A===Es||A===as||A===ss||A===_J||typeof A=="object"&&A!==null&&(A.$$typeof===ls||A.$$typeof===Is||A.$$typeof===Cs||A.$$typeof===is||A.$$typeof===os||A.$$typeof===xG||A.getModuleId!==void 0)};NA.typeOf=XQ;(function(A){A.exports=NA})(jJ);function $J(){const A=SJ();let B=null,Q=null;return{clear(){B=null,Q=null},notify(){A(()=>{let e=B;for(;e;)e.callback(),e=e.next})},get(){let e=[],t=B;for(;t;)e.push(t),t=t.next;return e},subscribe(e){let t=!0,n=Q={callback:e,next:null,prev:Q};return n.prev?n.prev.next=n:B=n,function(){!t||B===null||(t=!1,n.next?n.next.prev=n.prev:Q=n.prev,n.prev?n.prev.next=n.next:B=n.next)}}}}const aU={notify(){},get:()=>[]};function AS(A,B){let Q,e=aU;function t(o){return r(),e.subscribe(o)}function n(){e.notify()}function g(){i.onStateChange&&i.onStateChange()}function E(){return Boolean(Q)}function r(){Q||(Q=B?B.addNestedSub(g):A.subscribe(g),e=$J())}function C(){Q&&(Q(),Q=void 0,e.clear(),e=aU)}const i={addNestedSub:t,notifyNestedSubs:n,handleChangeWrapper:g,isSubscribed:E,trySubscribe:r,tryUnsubscribe:C,getListeners:()=>e};return i}const BS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=BS?d.exports.useLayoutEffect:d.exports.useEffect;function eS({store:A,context:B,children:Q,serverState:e}){const t=d.exports.useMemo(()=>{const E=AS(A);return{store:A,subscription:E,getServerState:e?()=>e:void 0}},[A,e]),n=d.exports.useMemo(()=>A.getState(),[A]);QS(()=>{const{subscription:E}=t;return E.onStateChange=E.notifyNestedSubs,E.trySubscribe(),n!==A.getState()&&E.notifyNestedSubs(),()=>{E.tryUnsubscribe(),E.onStateChange=void 0}},[t,n]);const g=B||Ot;return y.createElement(g.Provider,{value:t},Q)}function zG(A=Ot){const B=A===Ot?LG:()=>d.exports.useContext(A);return function(){const{store:e}=B();return e}}const tS=zG();function nS(A=Ot){const B=A===Ot?tS:zG(A);return function(){return B().dispatch}}const PG=nS();LJ(JG.exports.useSyncExternalStoreWithSelector);JJ(Te.exports.unstable_batchedUpdates);(typeof globalThis<"u"?globalThis:window).FullCalendarVDom={Component:d.exports.Component,createElement:d.exports.createElement,render:Te.exports.render,createRef:d.exports.createRef,Fragment:d.exports.Fragment,createContext:d.exports.createContext,createPortal:Te.exports.createPortal,flushSync:gS,unmountComponentAtNode:Te.exports.unmountComponentAtNode};function gS(A){A()}var Xc=function(A,B){return Xc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(Q,e){Q.__proto__=e}||function(Q,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(Q[t]=e[t])},Xc(A,B)};function BA(A,B){if(typeof B!="function"&&B!==null)throw new TypeError("Class extends value "+String(B)+" is not a constructor or null");Xc(A,B);function Q(){this.constructor=A}A.prototype=B===null?Object.create(B):(Q.prototype=B.prototype,new Q)}var m=function(){return m=Object.assign||function(B){for(var Q,e=1,t=arguments.length;e<t;e++){Q=arguments[e];for(var n in Q)Object.prototype.hasOwnProperty.call(Q,n)&&(B[n]=Q[n])}return B},m.apply(this,arguments)};function SD(A,B){var Q={};for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&B.indexOf(e)<0&&(Q[e]=A[e]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(A);t<e.length;t++)B.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(A,e[t])&&(Q[e[t]]=A[e[t]]);return Q}function jA(A,B,Q){if(Q||arguments.length===2)for(var e=0,t=B.length,n;e<t;e++)(n||!(e in B))&&(n||(n=Array.prototype.slice.call(B,0,e)),n[e]=B[e]);return A.concat(n||Array.prototype.slice.call(B))}if(typeof FullCalendarVDom>"u")throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");var ZD=FullCalendarVDom.Component,b=FullCalendarVDom.createElement;FullCalendarVDom.render;var JQ=FullCalendarVDom.createRef,tQ=FullCalendarVDom.Fragment,KG=FullCalendarVDom.createContext,ES=FullCalendarVDom.createPortal;FullCalendarVDom.flushSync;FullCalendarVDom.unmountComponentAtNode;/*!
FullCalendar v5.11.2
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/var Dg=function(){function A(B,Q){this.context=B,this.internalEventSource=Q}return A.prototype.remove=function(){this.context.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},A.prototype.refetch=function(){this.context.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId],isRefetch:!0})},Object.defineProperty(A.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"format",{get:function(){return this.internalEventSource.meta.format},enumerable:!1,configurable:!0}),A}();function LD(A){A.parentNode&&A.parentNode.removeChild(A)}function kB(A,B){if(A.closest)return A.closest(B);if(!document.documentElement.contains(A))return null;do{if(rS(A,B))return A;A=A.parentElement||A.parentNode}while(A!==null&&A.nodeType===1);return null}function rS(A,B){var Q=A.matches||A.matchesSelector||A.msMatchesSelector;return Q.call(A,B)}function CS(A,B){for(var Q=A instanceof HTMLElement?[A]:A,e=[],t=0;t<Q.length;t+=1)for(var n=Q[t].querySelectorAll(B),g=0;g<n.length;g+=1)e.push(n[g]);return e}var iS=/(top|left|right|bottom|width|height)$/i;function mr(A,B){for(var Q in B)oS(A,Q,B[Q])}function oS(A,B,Q){Q==null?A.style[B]="":typeof Q=="number"&&iS.test(B)?A.style[B]=Q+"px":A.style[B]=Q}function jG(A){var B,Q;return(Q=(B=A.composedPath)===null||B===void 0?void 0:B.call(A)[0])!==null&&Q!==void 0?Q:A.target}function qG(A){return A.getRootNode?A.getRootNode():document}var sU=0;function cs(){return sU+=1,"fc-dom-"+sU}function ws(A){A.preventDefault()}function aS(A,B){return function(Q){var e=kB(Q.target,A);e&&B.call(e,Q,e)}}function _G(A,B,Q,e){var t=aS(Q,e);return A.addEventListener(B,t),function(){A.removeEventListener(B,t)}}function sS(A,B,Q,e){var t;return _G(A,"mouseover",B,function(n,g){if(g!==t){t=g,Q(n,g);var E=function(r){t=null,e(r,g),g.removeEventListener("mouseleave",E)};g.addEventListener("mouseleave",E)}})}var IU=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];function IS(A,B){var Q=function(e){B(e),IU.forEach(function(t){A.removeEventListener(t,Q)})};IU.forEach(function(e){A.addEventListener(e,Q)})}function $G(A){return m({onClick:A},AR(A))}function AR(A){return{tabIndex:0,onKeyDown:function(B){(B.key==="Enter"||B.key===" ")&&(A(B),B.preventDefault())}}}var lU=0;function wE(){return lU+=1,String(lU)}function XD(){document.body.classList.add("fc-not-allowed")}function HD(){document.body.classList.remove("fc-not-allowed")}function lS(A){A.classList.add("fc-unselectable"),A.addEventListener("selectstart",ws)}function cS(A){A.classList.remove("fc-unselectable"),A.removeEventListener("selectstart",ws)}function wS(A){A.addEventListener("contextmenu",ws)}function DS(A){A.removeEventListener("contextmenu",ws)}function FS(A){var B=[],Q=[],e,t;for(typeof A=="string"?Q=A.split(/\s*,\s*/):typeof A=="function"?Q=[A]:Array.isArray(A)&&(Q=A),e=0;e<Q.length;e+=1)t=Q[e],typeof t=="string"?B.push(t.charAt(0)==="-"?{field:t.substring(1),order:-1}:{field:t,order:1}):typeof t=="function"&&B.push({func:t});return B}function uS(A,B,Q){var e,t;for(e=0;e<Q.length;e+=1)if(t=dS(A,B,Q[e]),t)return t;return 0}function dS(A,B,Q){return Q.func?Q.func(A,B):fS(A[Q.field],B[Q.field])*(Q.order||1)}function fS(A,B){return!A&&!B?0:B==null?-1:A==null?1:typeof A=="string"||typeof B=="string"?String(A).localeCompare(String(B)):A-B}function PI(A,B){var Q=String(A);return"000".substr(0,B-Q.length)+Q}function Yr(A,B,Q){return typeof A=="function"?A.apply(void 0,B):typeof A=="string"?B.reduce(function(e,t,n){return e.replace("$"+n,t||"")},A):Q}function US(A,B){return A-B}function KI(A){return A%1===0}function MS(A){var B=A.querySelector(".fc-scrollgrid-shrink-frame"),Q=A.querySelector(".fc-scrollgrid-shrink-cushion");if(!B)throw new Error("needs fc-scrollgrid-shrink-frame className");if(!Q)throw new Error("needs fc-scrollgrid-shrink-cushion className");return A.getBoundingClientRect().width-B.getBoundingClientRect().width+Q.getBoundingClientRect().width}var hS=["sun","mon","tue","wed","thu","fri","sat"];function cU(A,B){var Q=pt(A);return Q[2]+=B*7,gQ(Q)}function KB(A,B){var Q=pt(A);return Q[2]+=B,gQ(Q)}function Ln(A,B){var Q=pt(A);return Q[6]+=B,gQ(Q)}function pS(A,B){return DE(A,B)/7}function DE(A,B){return(B.valueOf()-A.valueOf())/(1e3*60*60*24)}function GS(A,B){return(B.valueOf()-A.valueOf())/(1e3*60*60)}function RS(A,B){return(B.valueOf()-A.valueOf())/(1e3*60)}function mS(A,B){return(B.valueOf()-A.valueOf())/1e3}function YS(A,B){var Q=HA(A),e=HA(B);return{years:0,months:0,days:Math.round(DE(Q,e)),milliseconds:B.valueOf()-e.valueOf()-(A.valueOf()-Q.valueOf())}}function NS(A,B){var Q=Wo(A,B);return Q!==null&&Q%7===0?Q/7:null}function Wo(A,B){return Gt(A)===Gt(B)?Math.round(DE(A,B)):null}function HA(A){return gQ([A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate()])}function yS(A){return gQ([A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours()])}function vS(A){return gQ([A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours(),A.getUTCMinutes()])}function bS(A){return gQ([A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours(),A.getUTCMinutes(),A.getUTCSeconds()])}function kS(A,B,Q){var e=A.getUTCFullYear(),t=jI(A,e,B,Q);if(t<1)return jI(A,e-1,B,Q);var n=jI(A,e+1,B,Q);return n>=1?Math.min(t,n):t}function jI(A,B,Q,e){var t=gQ([B,0,1+JS(B,Q,e)]),n=HA(A),g=Math.round(DE(t,n));return Math.floor(g/7)+1}function JS(A,B,Q){var e=7+B-Q,t=(7+gQ([A,0,e]).getUTCDay()-B)%7;return-t+e-1}function wU(A){return[A.getFullYear(),A.getMonth(),A.getDate(),A.getHours(),A.getMinutes(),A.getSeconds(),A.getMilliseconds()]}function DU(A){return new Date(A[0],A[1]||0,A[2]==null?1:A[2],A[3]||0,A[4]||0,A[5]||0)}function pt(A){return[A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours(),A.getUTCMinutes(),A.getUTCSeconds(),A.getUTCMilliseconds()]}function gQ(A){return A.length===1&&(A=A.concat([0])),new Date(Date.UTC.apply(Date,A))}function BR(A){return!isNaN(A.valueOf())}function Gt(A){return A.getUTCHours()*1e3*60*60+A.getUTCMinutes()*1e3*60+A.getUTCSeconds()*1e3+A.getUTCMilliseconds()}function TD(A,B,Q,e){return{instanceId:wE(),defId:A,range:B,forcedStartTzo:Q==null?null:Q,forcedEndTzo:e==null?null:e}}var Oo=Object.prototype.hasOwnProperty;function WD(A,B){var Q={};if(B)for(var e in B){for(var t=[],n=A.length-1;n>=0;n-=1){var g=A[n][e];if(typeof g=="object"&&g)t.unshift(g);else if(g!==void 0){Q[e]=g;break}}t.length&&(Q[e]=WD(t))}for(var n=A.length-1;n>=0;n-=1){var E=A[n];for(var r in E)r in Q||(Q[r]=E[r])}return Q}function Xn(A,B){var Q={};for(var e in A)B(A[e],e)&&(Q[e]=A[e]);return Q}function qn(A,B){var Q={};for(var e in A)Q[e]=B(A[e],e);return Q}function QR(A){for(var B={},Q=0,e=A;Q<e.length;Q++){var t=e[Q];B[t]=!0}return B}function OD(A){var B=[];for(var Q in A)B.push(A[Q]);return B}function Ke(A,B){if(A===B)return!0;for(var Q in A)if(Oo.call(A,Q)&&!(Q in B))return!1;for(var Q in B)if(Oo.call(B,Q)&&A[Q]!==B[Q])return!1;return!0}function FU(A,B){var Q=[];for(var e in A)Oo.call(A,e)&&(e in B||Q.push(e));for(var e in B)Oo.call(B,e)&&A[e]!==B[e]&&Q.push(e);return Q}function qI(A,B,Q){if(Q===void 0&&(Q={}),A===B)return!0;for(var e in B)if(!(e in A&&SS(A[e],B[e],Q[e])))return!1;for(var e in A)if(!(e in B))return!1;return!0}function SS(A,B,Q){return A===B||Q===!0?!0:Q?Q(A,B):!1}function ZS(A,B,Q,e){B===void 0&&(B=0),e===void 0&&(e=1);var t=[];Q==null&&(Q=Object.keys(A).length);for(var n=B;n<Q;n+=e){var g=A[n];g!==void 0&&t.push(g)}return t}function LS(A,B,Q,e){for(var t=0;t<e.length;t+=1){var n=e[t].parse(A,Q);if(n){var g=A.allDay;return g==null&&(g=B,g==null&&(g=n.allDayGuess,g==null&&(g=!1))),{allDay:g,duration:n.duration,typeData:n.typeData,typeId:t}}}return null}function QE(A,B,Q){var e=Q.dateEnv,t=Q.pluginHooks,n=Q.options,g=A.defs,E=A.instances;E=Xn(E,function(c){return!g[c.defId].recurringDef});for(var r in g){var C=g[r];if(C.recurringDef){var i=C.recurringDef.duration;i||(i=C.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration);for(var o=XS(C,i,B,e,t.recurringTypes),a=0,s=o;a<s.length;a++){var I=s[a],D=TD(r,{start:I,end:e.add(I,i)});E[D.instanceId]=D}}}return{defs:g,instances:E}}function XS(A,B,Q,e,t){var n=t[A.recurringDef.typeId],g=n.expand(A.recurringDef.typeData,{start:e.subtract(Q.start,B),end:Q.end},e);return A.allDay&&(g=g.map(HA)),g}var HS=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function MA(A,B){var Q;return typeof A=="string"?TS(A):typeof A=="object"&&A?uU(A):typeof A=="number"?uU((Q={},Q[B||"milliseconds"]=A,Q)):null}function TS(A){var B=HS.exec(A);if(B){var Q=B[1]?-1:1;return{years:0,months:0,days:Q*(B[2]?parseInt(B[2],10):0),milliseconds:Q*((B[3]?parseInt(B[3],10):0)*60*60*1e3+(B[4]?parseInt(B[4],10):0)*60*1e3+(B[5]?parseInt(B[5],10):0)*1e3+(B[6]?parseInt(B[6],10):0))}}return null}function uU(A){var B={years:A.years||A.year||0,months:A.months||A.month||0,days:A.days||A.day||0,milliseconds:(A.hours||A.hour||0)*60*60*1e3+(A.minutes||A.minute||0)*60*1e3+(A.seconds||A.second||0)*1e3+(A.milliseconds||A.millisecond||A.ms||0)},Q=A.weeks||A.week;return Q&&(B.days+=Q*7,B.specifiedWeeks=!0),B}function WS(A,B){return A.years===B.years&&A.months===B.months&&A.days===B.days&&A.milliseconds===B.milliseconds}function OS(A,B){return{years:A.years-B.years,months:A.months-B.months,days:A.days-B.days,milliseconds:A.milliseconds-B.milliseconds}}function VS(A){return Hg(A)/365}function xS(A){return Hg(A)/30}function Hg(A){return EC(A)/864e5}function EC(A){return A.years*(365*864e5)+A.months*(30*864e5)+A.days*864e5+A.milliseconds}function Hc(A){var B=A.milliseconds;if(B){if(B%1e3!==0)return{unit:"millisecond",value:B};if(B%(1e3*60)!==0)return{unit:"second",value:B/1e3};if(B%(1e3*60*60)!==0)return{unit:"minute",value:B/(1e3*60)};if(B)return{unit:"hour",value:B/(1e3*60*60)}}return A.days?A.specifiedWeeks&&A.days%7===0?{unit:"week",value:A.days/7}:{unit:"day",value:A.days}:A.months?{unit:"month",value:A.months}:A.years?{unit:"year",value:A.years}:{unit:"millisecond",value:0}}function zS(A,B,Q){Q===void 0&&(Q=!1);var e=A.toISOString();return e=e.replace(".000",""),Q&&(e=e.replace("T00:00:00Z","")),e.length>10&&(B==null?e=e.replace("Z",""):B!==0&&(e=e.replace("Z",VD(B,!0)))),e}function eR(A){return A.toISOString().replace(/T.*$/,"")}function VD(A,B){B===void 0&&(B=!1);var Q=A<0?"-":"+",e=Math.abs(A),t=Math.floor(e/60),n=Math.round(e%60);return B?Q+PI(t,2)+":"+PI(n,2):"GMT"+Q+t+(n?":"+PI(n,2):"")}function rC(A,B,Q){if(A===B)return!0;var e=A.length,t;if(e!==B.length)return!1;for(t=0;t<e;t+=1)if(!(Q?Q(A[t],B[t]):A[t]===B[t]))return!1;return!0}function dA(A,B,Q){var e,t;return function(){for(var n=[],g=0;g<arguments.length;g++)n[g]=arguments[g];if(!e)t=A.apply(this,n);else if(!rC(e,n)){Q&&Q(t);var E=A.apply(this,n);(!B||!B(E,t))&&(t=E)}return e=n,t}}function Co(A,B,Q){var e=this,t,n;return function(g){if(!t)n=A.call(e,g);else if(!Ke(t,g)){Q&&Q(n);var E=A.call(e,g);(!B||!B(E,n))&&(n=E)}return t=g,n}}var dU={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},Vo={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},Li=/\s*([ap])\.?m\.?/i,PS=/,/g,KS=/\s+/g,jS=/\u200e/g,qS=/UTC|GMT/,_S=function(){function A(B){var Q={},e={},t=0;for(var n in B)n in dU?(e[n]=B[n],t=Math.max(dU[n],t)):(Q[n]=B[n],n in Vo&&(t=Math.max(Vo[n],t)));this.standardDateProps=Q,this.extendedSettings=e,this.severity=t,this.buildFormattingFunc=dA(fU)}return A.prototype.format=function(B,Q){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,Q)(B)},A.prototype.formatRange=function(B,Q,e,t){var n=this,g=n.standardDateProps,E=n.extendedSettings,r=tZ(B.marker,Q.marker,e.calendarSystem);if(!r)return this.format(B,e);var C=r;C>1&&(g.year==="numeric"||g.year==="2-digit")&&(g.month==="numeric"||g.month==="2-digit")&&(g.day==="numeric"||g.day==="2-digit")&&(C=1);var i=this.format(B,e),o=this.format(Q,e);if(i===o)return i;var a=nZ(g,C),s=fU(a,E,e),I=s(B),D=s(Q),c=gZ(i,I,o,D),l=E.separator||t||e.defaultSeparator||"";return c?c.before+I+l+D+c.after:i+l+o},A.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";case 2:return"day";default:return"time"}},A}();function fU(A,B,Q){var e=Object.keys(A).length;return e===1&&A.timeZoneName==="short"?function(t){return VD(t.timeZoneOffset)}:e===0&&B.week?function(t){return eZ(Q.computeWeekNumber(t.marker),Q.weekText,Q.weekTextLong,Q.locale,B.week)}:$S(A,B,Q)}function $S(A,B,Q){A=m({},A),B=m({},B),AZ(A,B),A.timeZone="UTC";var e=new Intl.DateTimeFormat(Q.locale.codes,A),t;if(B.omitZeroMinute){var n=m({},A);delete n.minute,t=new Intl.DateTimeFormat(Q.locale.codes,n)}return function(g){var E=g.marker,r;t&&!E.getUTCMinutes()?r=t:r=e;var C=r.format(E);return BZ(C,g,A,B,Q)}}function AZ(A,B){A.timeZoneName&&(A.hour||(A.hour="2-digit"),A.minute||(A.minute="2-digit")),A.timeZoneName==="long"&&(A.timeZoneName="short"),B.omitZeroMinute&&(A.second||A.millisecond)&&delete B.omitZeroMinute}function BZ(A,B,Q,e,t){return A=A.replace(jS,""),Q.timeZoneName==="short"&&(A=QZ(A,t.timeZone==="UTC"||B.timeZoneOffset==null?"UTC":VD(B.timeZoneOffset))),e.omitCommas&&(A=A.replace(PS,"").trim()),e.omitZeroMinute&&(A=A.replace(":00","")),e.meridiem===!1?A=A.replace(Li,"").trim():e.meridiem==="narrow"?A=A.replace(Li,function(n,g){return g.toLocaleLowerCase()}):e.meridiem==="short"?A=A.replace(Li,function(n,g){return g.toLocaleLowerCase()+"m"}):e.meridiem==="lowercase"&&(A=A.replace(Li,function(n){return n.toLocaleLowerCase()})),A=A.replace(KS," "),A=A.trim(),A}function QZ(A,B){var Q=!1;return A=A.replace(qS,function(){return Q=!0,B}),Q||(A+=" "+B),A}function eZ(A,B,Q,e,t){var n=[];return t==="long"?n.push(Q):(t==="short"||t==="narrow")&&n.push(B),(t==="long"||t==="short")&&n.push(" "),n.push(e.simpleNumberFormat.format(A)),e.options.direction==="rtl"&&n.reverse(),n.join("")}function tZ(A,B,Q){return Q.getMarkerYear(A)!==Q.getMarkerYear(B)?5:Q.getMarkerMonth(A)!==Q.getMarkerMonth(B)?4:Q.getMarkerDay(A)!==Q.getMarkerDay(B)?2:Gt(A)!==Gt(B)?1:0}function nZ(A,B){var Q={};for(var e in A)(!(e in Vo)||Vo[e]<=B)&&(Q[e]=A[e]);return Q}function gZ(A,B,Q,e){for(var t=0;t<A.length;){var n=A.indexOf(B,t);if(n===-1)break;var g=A.substr(0,n);t=n+B.length;for(var E=A.substr(t),r=0;r<Q.length;){var C=Q.indexOf(e,r);if(C===-1)break;var i=Q.substr(0,C);r=C+e.length;var o=Q.substr(r);if(g===i&&E===o)return{before:g,after:E}}}return null}function UU(A,B){var Q=B.markerToArray(A.marker);return{marker:A.marker,timeZoneOffset:A.timeZoneOffset,array:Q,year:Q[0],month:Q[1],day:Q[2],hour:Q[3],minute:Q[4],second:Q[5],millisecond:Q[6]}}function xo(A,B,Q,e){var t=UU(A,Q.calendarSystem),n=B?UU(B,Q.calendarSystem):null;return{date:t,start:t,end:n,timeZone:Q.timeZone,localeCodes:Q.locale.codes,defaultSeparator:e||Q.defaultSeparator}}var EZ=function(){function A(B){this.cmdStr=B}return A.prototype.format=function(B,Q,e){return Q.cmdFormatter(this.cmdStr,xo(B,null,Q,e))},A.prototype.formatRange=function(B,Q,e,t){return e.cmdFormatter(this.cmdStr,xo(B,Q,e,t))},A}(),rZ=function(){function A(B){this.func=B}return A.prototype.format=function(B,Q,e){return this.func(xo(B,null,Q,e))},A.prototype.formatRange=function(B,Q,e,t){return this.func(xo(B,Q,e,t))},A}();function MB(A){return typeof A=="object"&&A?new _S(A):typeof A=="string"?new EZ(A):typeof A=="function"?new rZ(A):null}var MU={navLinkDayClick:v,navLinkWeekClick:v,duration:MA,bootstrapFontAwesome:v,buttonIcons:v,customButtons:v,defaultAllDayEventDuration:MA,defaultTimedEventDuration:MA,nextDayThreshold:MA,scrollTime:MA,scrollTimeReset:Boolean,slotMinTime:MA,slotMaxTime:MA,dayPopoverFormat:MB,slotDuration:MA,snapDuration:MA,headerToolbar:v,footerToolbar:v,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:MB,dayHeaderClassNames:v,dayHeaderContent:v,dayHeaderDidMount:v,dayHeaderWillUnmount:v,dayCellClassNames:v,dayCellContent:v,dayCellDidMount:v,dayCellWillUnmount:v,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:v,weekNumbers:Boolean,weekNumberClassNames:v,weekNumberContent:v,weekNumberDidMount:v,weekNumberWillUnmount:v,editable:Boolean,viewClassNames:v,viewDidMount:v,viewWillUnmount:v,nowIndicator:Boolean,nowIndicatorClassNames:v,nowIndicatorContent:v,nowIndicatorDidMount:v,nowIndicatorWillUnmount:v,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:v,locale:v,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:v,eventOrder:FS,eventOrderStrict:Boolean,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:v,contentHeight:v,direction:String,weekNumberFormat:MB,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,weekTextLong:String,progressiveEventRendering:Boolean,businessHours:v,initialDate:v,now:v,eventDataTransform:v,stickyHeaderDates:v,stickyFooterScrollbar:v,viewHeight:v,defaultAllDay:Boolean,eventSourceFailure:v,eventSourceSuccess:v,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:v,eventConstraint:v,eventAllow:v,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:v,eventContent:v,eventDidMount:v,eventWillUnmount:v,selectConstraint:v,selectOverlap:v,selectAllow:v,droppable:Boolean,unselectCancel:String,slotLabelFormat:v,slotLaneClassNames:v,slotLaneContent:v,slotLaneDidMount:v,slotLaneWillUnmount:v,slotLabelClassNames:v,slotLabelContent:v,slotLabelDidMount:v,slotLabelWillUnmount:v,dayMaxEvents:v,dayMaxEventRows:v,dayMinWidth:Number,slotLabelInterval:MA,allDayText:String,allDayClassNames:v,allDayContent:v,allDayDidMount:v,allDayWillUnmount:v,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:MB,rerenderDelay:Number,moreLinkText:v,moreLinkHint:v,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMaxStack:Number,eventMinHeight:Number,eventMinWidth:Number,eventShortHeight:Number,slotEventOverlap:Boolean,plugins:v,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:MA,hiddenDays:v,monthMode:Boolean,fixedWeekCount:Boolean,validRange:v,visibleRange:v,titleFormat:v,eventInteractive:Boolean,noEventsText:String,viewHint:v,navLinkHint:v,closeHint:String,timeHint:String,eventHint:String,moreLinkClick:v,moreLinkClassNames:v,moreLinkContent:v,moreLinkDidMount:v,moreLinkWillUnmount:v},Nr={eventDisplay:"auto",defaultRangeSeparator:" - ",titleRangeSeparator:" \u2013 ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",dayHeaders:!0,initialView:"",aspectRatio:1.35,headerToolbar:{start:"title",center:"",end:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,nowIndicator:!1,scrollTime:"06:00:00",scrollTimeReset:!0,slotMinTime:"00:00:00",slotMaxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1,eventMinHeight:15,eventMinWidth:30,eventShortHeight:30},hU={datesSet:v,eventsSet:v,eventAdd:v,eventChange:v,eventRemove:v,windowResize:v,eventClick:v,eventMouseEnter:v,eventMouseLeave:v,select:v,unselect:v,loading:v,_unmount:v,_beforeprint:v,_afterprint:v,_noEventDrop:v,_noEventResize:v,_resize:v,_scrollRequest:v},pU={buttonText:v,buttonHints:v,views:v,plugins:v,initialEvents:v,events:v,eventSources:v},an={headerToolbar:ag,footerToolbar:ag,buttonText:ag,buttonHints:ag,buttonIcons:ag,dateIncrement:ag};function ag(A,B){return typeof A=="object"&&typeof B=="object"&&A&&B?Ke(A,B):A===B}var CZ={type:String,component:v,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:v,usesMinMaxTime:Boolean,classNames:v,content:v,didMount:v,willUnmount:v};function _I(A){return WD(A,an)}function xD(A,B){var Q={},e={};for(var t in B)t in A&&(Q[t]=B[t](A[t]));for(var t in A)t in B||(e[t]=A[t]);return{refined:Q,extra:e}}function v(A){return A}function zo(A,B,Q,e){for(var t=jQ(),n=KD(Q),g=0,E=A;g<E.length;g++){var r=E[g],C=nR(r,B,Q,e,n);C&&Tc(C,t)}return t}function Tc(A,B){return B===void 0&&(B=jQ()),B.defs[A.def.defId]=A.def,A.instance&&(B.instances[A.instance.instanceId]=A.instance),B}function zD(A,B){var Q=A.instances[B];if(Q){var e=A.defs[Q.defId],t=Ds(A,function(n){return iZ(e,n)});return t.defs[e.defId]=e,t.instances[Q.instanceId]=Q,t}return jQ()}function iZ(A,B){return Boolean(A.groupId&&A.groupId===B.groupId)}function jQ(){return{defs:{},instances:{}}}function PD(A,B){return{defs:m(m({},A.defs),B.defs),instances:m(m({},A.instances),B.instances)}}function Ds(A,B){var Q=Xn(A.defs,B),e=Xn(A.instances,function(t){return Q[t.defId]});return{defs:Q,instances:e}}function oZ(A,B){var Q=A.defs,e=A.instances,t={},n={};for(var g in Q)B.defs[g]||(t[g]=Q[g]);for(var E in e)!B.instances[E]&&t[e[E].defId]&&(n[E]=e[E]);return{defs:t,instances:n}}function aZ(A,B){return Array.isArray(A)?zo(A,null,B,!0):typeof A=="object"&&A?zo([A],null,B,!0):A!=null?String(A):null}function Wc(A){return Array.isArray(A)?A:typeof A=="string"?A.split(/\s+/):[]}var Po={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:v,overlap:v,allow:v,className:Wc,classNames:Wc,color:String,backgroundColor:String,borderColor:String,textColor:String},sZ={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Ko(A,B){var Q=aZ(A.constraint,B);return{display:A.display||null,startEditable:A.startEditable!=null?A.startEditable:A.editable,durationEditable:A.durationEditable!=null?A.durationEditable:A.editable,constraints:Q!=null?[Q]:[],overlap:A.overlap!=null?A.overlap:null,allows:A.allow!=null?[A.allow]:[],backgroundColor:A.backgroundColor||A.color||"",borderColor:A.borderColor||A.color||"",textColor:A.textColor||"",classNames:(A.className||[]).concat(A.classNames||[])}}function IZ(A){return A.reduce(lZ,sZ)}function lZ(A,B){return{display:B.display!=null?B.display:A.display,startEditable:B.startEditable!=null?B.startEditable:A.startEditable,durationEditable:B.durationEditable!=null?B.durationEditable:A.durationEditable,constraints:A.constraints.concat(B.constraints),overlap:typeof B.overlap=="boolean"?B.overlap:A.overlap,allows:A.allows.concat(B.allows),backgroundColor:B.backgroundColor||A.backgroundColor,borderColor:B.borderColor||A.borderColor,textColor:B.textColor||A.textColor,classNames:A.classNames.concat(B.classNames)}}var io={id:String,groupId:String,title:String,url:String,interactive:Boolean},tR={start:v,end:v,date:v,allDay:Boolean},cZ=m(m(m({},io),tR),{extendedProps:v});function nR(A,B,Q,e,t){t===void 0&&(t=KD(Q));var n=gR(A,Q,t),g=n.refined,E=n.extra,r=DZ(B,Q),C=LS(g,r,Q.dateEnv,Q.pluginHooks.recurringTypes);if(C){var i=Oc(g,E,B?B.sourceId:"",C.allDay,Boolean(C.duration),Q);return i.recurringDef={typeId:C.typeId,typeData:C.typeData,duration:C.duration},{def:i,instance:null}}var o=wZ(g,r,Q,e);if(o){var i=Oc(g,E,B?B.sourceId:"",o.allDay,o.hasEnd,Q),a=TD(i.defId,o.range,o.forcedStartTzo,o.forcedEndTzo);return{def:i,instance:a}}return null}function gR(A,B,Q){return Q===void 0&&(Q=KD(B)),xD(A,Q)}function KD(A){return m(m(m({},Po),cZ),A.pluginHooks.eventRefiners)}function Oc(A,B,Q,e,t,n){for(var g={title:A.title||"",groupId:A.groupId||"",publicId:A.id||"",url:A.url||"",recurringDef:null,defId:wE(),sourceId:Q,allDay:e,hasEnd:t,interactive:A.interactive,ui:Ko(A,n),extendedProps:m(m({},A.extendedProps||{}),B)},E=0,r=n.pluginHooks.eventDefMemberAdders;E<r.length;E++){var C=r[E];m(g,C(A))}return Object.freeze(g.ui.classNames),Object.freeze(g.extendedProps),g}function wZ(A,B,Q,e){var t=A.allDay,n,g=null,E=!1,r,C=null,i=A.start!=null?A.start:A.date;if(n=Q.dateEnv.createMarkerMeta(i),n)g=n.marker;else if(!e)return null;return A.end!=null&&(r=Q.dateEnv.createMarkerMeta(A.end)),t==null&&(B!=null?t=B:t=(!n||n.isTimeUnspecified)&&(!r||r.isTimeUnspecified)),t&&g&&(g=HA(g)),r&&(C=r.marker,t&&(C=HA(C)),g&&C<=g&&(C=null)),C?E=!0:e||(E=Q.options.forceEventDuration||!1,C=Q.dateEnv.add(g,t?Q.options.defaultAllDayEventDuration:Q.options.defaultTimedEventDuration)),{allDay:t,hasEnd:E,range:{start:g,end:C},forcedStartTzo:n?n.forcedTzo:null,forcedEndTzo:r?r.forcedTzo:null}}function DZ(A,B){var Q=null;return A&&(Q=A.defaultAllDay),Q==null&&(Q=B.options.defaultAllDay),Q}function ER(A){var B=Math.floor(DE(A.start,A.end))||1,Q=HA(A.start),e=KB(Q,B);return{start:Q,end:e}}function rR(A,B){B===void 0&&(B=MA(0));var Q=null,e=null;if(A.end){e=HA(A.end);var t=A.end.valueOf()-e.valueOf();t&&t>=EC(B)&&(e=KB(e,1))}return A.start&&(Q=HA(A.start),e&&e<=Q&&(e=KB(Q,1))),{start:Q,end:e}}function Ng(A,B,Q,e){return e==="year"?MA(Q.diffWholeYears(A,B),"year"):e==="month"?MA(Q.diffWholeMonths(A,B),"month"):YS(A,B)}function FZ(A,B){var Q=null,e=null;return A.start&&(Q=B.createMarker(A.start)),A.end&&(e=B.createMarker(A.end)),!Q&&!e||Q&&e&&e<Q?null:{start:Q,end:e}}function GU(A,B){var Q=[],e=B.start,t,n;for(A.sort(uZ),t=0;t<A.length;t+=1)n=A[t],n.start>e&&Q.push({start:e,end:n.start}),n.end>e&&(e=n.end);return e<B.end&&Q.push({start:e,end:B.end}),Q}function uZ(A,B){return A.start.valueOf()-B.start.valueOf()}function CC(A,B){var Q=A.start,e=A.end,t=null;return B.start!==null&&(Q===null?Q=B.start:Q=new Date(Math.max(Q.valueOf(),B.start.valueOf()))),B.end!=null&&(e===null?e=B.end:e=new Date(Math.min(e.valueOf(),B.end.valueOf()))),(Q===null||e===null||Q<e)&&(t={start:Q,end:e}),t}function dZ(A,B){return(A.start===null?null:A.start.valueOf())===(B.start===null?null:B.start.valueOf())&&(A.end===null?null:A.end.valueOf())===(B.end===null?null:B.end.valueOf())}function jD(A,B){return(A.end===null||B.start===null||A.end>B.start)&&(A.start===null||B.end===null||A.start<B.end)}function Fs(A,B){return(A.start===null||B.start!==null&&B.start>=A.start)&&(A.end===null||B.end!==null&&B.end<=A.end)}function Rn(A,B){return(A.start===null||B>=A.start)&&(A.end===null||B<A.end)}function fZ(A,B){return B.start!=null&&A<B.start?B.start:B.end!=null&&A>=B.end?new Date(B.end.valueOf()-1):A}function RU(A,B,Q,e){var t={},n={},g={},E=[],r=[],C=jo(A.defs,B);for(var i in A.defs){var o=A.defs[i],a=C[o.defId];a.display==="inverse-background"&&(o.groupId?(t[o.groupId]=[],g[o.groupId]||(g[o.groupId]=o)):n[i]=[])}for(var s in A.instances){var I=A.instances[s],o=A.defs[I.defId],a=C[o.defId],D=I.range,c=!o.allDay&&e?rR(D,e):D,l=CC(c,Q);l&&(a.display==="inverse-background"?o.groupId?t[o.groupId].push(l):n[I.defId].push(l):a.display!=="none"&&(a.display==="background"?E:r).push({def:o,ui:a,instance:I,range:l,isStart:c.start&&c.start.valueOf()===l.start.valueOf(),isEnd:c.end&&c.end.valueOf()===l.end.valueOf()}))}for(var w in t)for(var u=t[w],f=GU(u,Q),M=0,p=f;M<p.length;M++){var h=p[M],o=g[w],a=C[o.defId];E.push({def:o,ui:a,instance:null,range:h,isStart:!1,isEnd:!1})}for(var i in n)for(var u=n[i],f=GU(u,Q),G=0,J=f;G<J.length;G++){var h=J[G];E.push({def:A.defs[i],ui:C[i],instance:null,range:h,isStart:!1,isEnd:!1})}return{bg:E,fg:r}}function mU(A,B){A.fcSeg=B}function eE(A){return A.fcSeg||A.parentNode.fcSeg||null}function jo(A,B){return qn(A,function(Q){return CR(Q,B)})}function CR(A,B){var Q=[];return B[""]&&Q.push(B[""]),B[A.defId]&&Q.push(B[A.defId]),Q.push(A.ui),IZ(Q)}function UZ(A,B){var Q=A.map(MZ);return Q.sort(function(e,t){return uS(e,t,B)}),Q.map(function(e){return e._seg})}function MZ(A){var B=A.eventRange,Q=B.def,e=B.instance?B.instance.range:B.range,t=e.start?e.start.valueOf():0,n=e.end?e.end.valueOf():0;return m(m(m({},Q.extendedProps),Q),{id:Q.publicId,start:t,end:n,duration:n-t,allDay:Number(Q.allDay),_seg:A})}function hZ(A,B){for(var Q=B.pluginHooks,e=Q.isDraggableTransformers,t=A.eventRange,n=t.def,g=t.ui,E=g.startEditable,r=0,C=e;r<C.length;r++){var i=C[r];E=i(E,n,g,B)}return E}function pZ(A,B){return A.isStart&&A.eventRange.ui.durationEditable&&B.options.eventResizableFromStart}function GZ(A,B){return A.isEnd&&A.eventRange.ui.durationEditable}function iR(A,B,Q,e,t,n,g){var E=Q.dateEnv,r=Q.options,C=r.displayEventTime,i=r.displayEventEnd,o=A.eventRange.def,a=A.eventRange.instance;C==null&&(C=e!==!1),i==null&&(i=t!==!1);var s=a.range.start,I=a.range.end,D=n||A.start||A.eventRange.range.start,c=g||A.end||A.eventRange.range.end,l=HA(s).valueOf()===HA(D).valueOf(),w=HA(Ln(I,-1)).valueOf()===HA(Ln(c,-1)).valueOf();return C&&!o.allDay&&(l||w)?(D=l?s:D,c=w?I:c,i&&o.hasEnd?E.formatRange(D,c,B,{forcedStartTzo:n?null:a.forcedStartTzo,forcedEndTzo:g?null:a.forcedEndTzo}):E.format(D,B,{forcedTzo:n?null:a.forcedStartTzo})):""}function yr(A,B,Q){var e=A.eventRange.range;return{isPast:e.end<(Q||B.start),isFuture:e.start>=(Q||B.end),isToday:B&&Rn(B,e.start)}}function RZ(A){var B=["fc-event"];return A.isMirror&&B.push("fc-event-mirror"),A.isDraggable&&B.push("fc-event-draggable"),(A.isStartResizable||A.isEndResizable)&&B.push("fc-event-resizable"),A.isDragging&&B.push("fc-event-dragging"),A.isResizing&&B.push("fc-event-resizing"),A.isSelected&&B.push("fc-event-selected"),A.isStart&&B.push("fc-event-start"),A.isEnd&&B.push("fc-event-end"),A.isPast&&B.push("fc-event-past"),A.isToday&&B.push("fc-event-today"),A.isFuture&&B.push("fc-event-future"),B}function mZ(A){return A.instance?A.instance.instanceId:A.def.defId+":"+A.range.start.toISOString()}function oR(A,B){var Q=A.eventRange,e=Q.def,t=Q.instance,n=e.url;if(n)return{href:n};var g=B.emitter,E=B.options,r=E.eventInteractive;return r==null&&(r=e.interactive,r==null&&(r=Boolean(g.hasHandlers("eventClick")))),r?AR(function(C){g.trigger("eventClick",{el:C.target,event:new qA(B,e,t),jsEvent:C,view:B.viewApi})}):{}}var YZ={start:v,end:v,allDay:Boolean};function NZ(A,B,Q){var e=yZ(A,B),t=e.range;if(!t.start)return null;if(!t.end){if(Q==null)return null;t.end=B.add(t.start,Q)}return e}function yZ(A,B){var Q=xD(A,YZ),e=Q.refined,t=Q.extra,n=e.start?B.createMarkerMeta(e.start):null,g=e.end?B.createMarkerMeta(e.end):null,E=e.allDay;return E==null&&(E=n&&n.isTimeUnspecified&&(!g||g.isTimeUnspecified)),m({range:{start:n?n.marker:null,end:g?g.marker:null},allDay:E},t)}function vZ(A,B){return dZ(A.range,B.range)&&A.allDay===B.allDay&&bZ(A,B)}function bZ(A,B){for(var Q in B)if(Q!=="range"&&Q!=="allDay"&&A[Q]!==B[Q])return!1;for(var Q in A)if(!(Q in B))return!1;return!0}function kZ(A,B){return m(m({},sR(A.range,B,A.allDay)),{allDay:A.allDay})}function aR(A,B,Q){return m(m({},sR(A,B,Q)),{timeZone:B.timeZone})}function sR(A,B,Q){return{start:B.toDate(A.start),end:B.toDate(A.end),startStr:B.formatIso(A.start,{omitTime:Q}),endStr:B.formatIso(A.end,{omitTime:Q})}}function JZ(A,B,Q){var e=gR({editable:!1},Q),t=Oc(e.refined,e.extra,"",A.allDay,!0,Q);return{def:t,ui:CR(t,B),instance:TD(t.defId,A.range),range:A.range,isStart:!0,isEnd:!0}}function IR(A,B,Q){Q.emitter.trigger("select",m(m({},qD(A,Q)),{jsEvent:B?B.origEvent:null,view:Q.viewApi||Q.calendarApi.view}))}function SZ(A,B){B.emitter.trigger("unselect",{jsEvent:A?A.origEvent:null,view:B.viewApi||B.calendarApi.view})}function qD(A,B){for(var Q={},e=0,t=B.pluginHooks.dateSpanTransforms;e<t.length;e++){var n=t[e];m(Q,n(A,B))}return m(Q,kZ(A,B.dateEnv)),Q}function YU(A,B,Q){var e=Q.dateEnv,t=Q.options,n=B;return A?(n=HA(n),n=e.add(n,t.defaultAllDayEventDuration)):n=e.add(n,t.defaultTimedEventDuration),n}function _D(A,B,Q,e){var t=jo(A.defs,B),n=jQ();for(var g in A.defs){var E=A.defs[g];n.defs[g]=ZZ(E,t[g],Q,e)}for(var r in A.instances){var C=A.instances[r],E=n.defs[C.defId];n.instances[r]=LZ(C,E,t[C.defId],Q,e)}return n}function ZZ(A,B,Q,e){var t=Q.standardProps||{};t.hasEnd==null&&B.durationEditable&&(Q.startDelta||Q.endDelta)&&(t.hasEnd=!0);var n=m(m(m({},A),t),{ui:m(m({},A.ui),t.ui)});Q.extendedProps&&(n.extendedProps=m(m({},n.extendedProps),Q.extendedProps));for(var g=0,E=e.pluginHooks.eventDefMutationAppliers;g<E.length;g++){var r=E[g];r(n,Q,e)}return!n.hasEnd&&e.options.forceEventDuration&&(n.hasEnd=!0),n}function LZ(A,B,Q,e,t){var n=t.dateEnv,g=e.standardProps&&e.standardProps.allDay===!0,E=e.standardProps&&e.standardProps.hasEnd===!1,r=m({},A);return g&&(r.range=ER(r.range)),e.datesDelta&&Q.startEditable&&(r.range={start:n.add(r.range.start,e.datesDelta),end:n.add(r.range.end,e.datesDelta)}),e.startDelta&&Q.durationEditable&&(r.range={start:n.add(r.range.start,e.startDelta),end:r.range.end}),e.endDelta&&Q.durationEditable&&(r.range={start:r.range.start,end:n.add(r.range.end,e.endDelta)}),E&&(r.range={start:r.range.start,end:YU(B.allDay,r.range.start,t)}),B.allDay&&(r.range={start:HA(r.range.start),end:HA(r.range.end)}),r.range.end<r.range.start&&(r.range.end=YU(B.allDay,r.range.start,t)),r}var XZ=function(){function A(B,Q,e){this.type=B,this.getCurrentData=Q,this.dateEnv=e}return Object.defineProperty(A.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"title",{get:function(){return this.getCurrentData().viewTitle},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)},enumerable:!1,configurable:!0}),A.prototype.getOption=function(B){return this.getCurrentData().options[B]},A}(),HZ={id:String,defaultAllDay:Boolean,url:String,format:String,events:v,eventDataTransform:v,success:v,failure:v};function lR(A,B,Q){Q===void 0&&(Q=cR(B));var e;if(typeof A=="string"?e={url:A}:typeof A=="function"||Array.isArray(A)?e={events:A}:typeof A=="object"&&A&&(e=A),e){var t=xD(e,Q),n=t.refined,g=t.extra,E=TZ(n,B);if(E)return{_raw:A,isFetching:!1,latestFetchId:"",fetchRange:null,defaultAllDay:n.defaultAllDay,eventDataTransform:n.eventDataTransform,success:n.success,failure:n.failure,publicId:n.id||"",sourceId:wE(),sourceDefId:E.sourceDefId,meta:E.meta,ui:Ko(n,B),extendedProps:g}}return null}function cR(A){return m(m(m({},Po),HZ),A.pluginHooks.eventSourceRefiners)}function TZ(A,B){for(var Q=B.pluginHooks.eventSourceDefs,e=Q.length-1;e>=0;e-=1){var t=Q[e],n=t.parseMeta(A);if(n)return{sourceDefId:e,meta:n}}return null}function WZ(A,B){switch(B.type){case"CHANGE_DATE":return B.dateMarker;default:return A}}function OZ(A,B){var Q=A.initialDate;return Q!=null?B.createMarker(Q):ZC(A.now,B)}function ZC(A,B){return typeof A=="function"&&(A=A()),A==null?B.createNowMarker():B.createMarker(A)}var VZ=function(){function A(){}return A.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData()},A.prototype.dispatch=function(B){return this.currentDataManager.dispatch(B)},Object.defineProperty(A.prototype,"view",{get:function(){return this.getCurrentData().viewApi},enumerable:!1,configurable:!0}),A.prototype.batchRendering=function(B){B()},A.prototype.updateSize=function(){this.trigger("_resize",!0)},A.prototype.setOption=function(B,Q){this.dispatch({type:"SET_OPTION",optionName:B,rawOptionValue:Q})},A.prototype.getOption=function(B){return this.currentDataManager.currentCalendarOptionsInput[B]},A.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales)},A.prototype.on=function(B,Q){var e=this.currentDataManager;e.currentCalendarOptionsRefiners[B]?e.emitter.on(B,Q):console.warn("Unknown listener name '"+B+"'")},A.prototype.off=function(B,Q){this.currentDataManager.emitter.off(B,Q)},A.prototype.trigger=function(B){for(var Q,e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];(Q=this.currentDataManager.emitter).trigger.apply(Q,jA([B],e))},A.prototype.changeView=function(B,Q){var e=this;this.batchRendering(function(){if(e.unselect(),Q)if(Q.start&&Q.end)e.dispatch({type:"CHANGE_VIEW_TYPE",viewType:B}),e.dispatch({type:"SET_OPTION",optionName:"visibleRange",rawOptionValue:Q});else{var t=e.getCurrentData().dateEnv;e.dispatch({type:"CHANGE_VIEW_TYPE",viewType:B,dateMarker:t.createMarker(Q)})}else e.dispatch({type:"CHANGE_VIEW_TYPE",viewType:B})})},A.prototype.zoomTo=function(B,Q){var e=this.getCurrentData(),t;Q=Q||"day",t=e.viewSpecs[Q]||this.getUnitViewSpec(Q),this.unselect(),t?this.dispatch({type:"CHANGE_VIEW_TYPE",viewType:t.type,dateMarker:B}):this.dispatch({type:"CHANGE_DATE",dateMarker:B})},A.prototype.getUnitViewSpec=function(B){var Q=this.getCurrentData(),e=Q.viewSpecs,t=Q.toolbarConfig,n=[].concat(t.header?t.header.viewsWithButtons:[],t.footer?t.footer.viewsWithButtons:[]),g,E;for(var r in e)n.push(r);for(g=0;g<n.length;g+=1)if(E=e[n[g]],E&&E.singleUnit===B)return E;return null},A.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},A.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},A.prototype.prevYear=function(){var B=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:B.dateEnv.addYears(B.currentDate,-1)})},A.prototype.nextYear=function(){var B=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:B.dateEnv.addYears(B.currentDate,1)})},A.prototype.today=function(){var B=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:ZC(B.calendarOptions.now,B.dateEnv)})},A.prototype.gotoDate=function(B){var Q=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Q.dateEnv.createMarker(B)})},A.prototype.incrementDate=function(B){var Q=this.getCurrentData(),e=MA(B);e&&(this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Q.dateEnv.add(Q.currentDate,e)}))},A.prototype.getDate=function(){var B=this.getCurrentData();return B.dateEnv.toDate(B.currentDate)},A.prototype.formatDate=function(B,Q){var e=this.getCurrentData().dateEnv;return e.format(e.createMarker(B),MB(Q))},A.prototype.formatRange=function(B,Q,e){var t=this.getCurrentData().dateEnv;return t.formatRange(t.createMarker(B),t.createMarker(Q),MB(e),e)},A.prototype.formatIso=function(B,Q){var e=this.getCurrentData().dateEnv;return e.formatIso(e.createMarker(B),{omitTime:Q})},A.prototype.select=function(B,Q){var e;Q==null?B.start!=null?e=B:e={start:B,end:null}:e={start:B,end:Q};var t=this.getCurrentData(),n=NZ(e,t.dateEnv,MA({days:1}));n&&(this.dispatch({type:"SELECT_DATES",selection:n}),IR(n,null,t))},A.prototype.unselect=function(B){var Q=this.getCurrentData();Q.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),SZ(B,Q))},A.prototype.addEvent=function(B,Q){if(B instanceof qA){var e=B._def,t=B._instance,n=this.getCurrentData();return n.eventStore.defs[e.defId]||(this.dispatch({type:"ADD_EVENTS",eventStore:Tc({def:e,instance:t})}),this.triggerEventAdd(B)),B}var g=this.getCurrentData(),E;if(Q instanceof Dg)E=Q.internalEventSource;else if(typeof Q=="boolean")Q&&(E=OD(g.eventSources)[0]);else if(Q!=null){var r=this.getEventSourceById(Q);if(!r)return console.warn('Could not find an event source with ID "'+Q+'"'),null;E=r.internalEventSource}var C=nR(B,E,g,!1);if(C){var i=new qA(g,C.def,C.def.recurringDef?null:C.instance);return this.dispatch({type:"ADD_EVENTS",eventStore:Tc(C)}),this.triggerEventAdd(i),i}return null},A.prototype.triggerEventAdd=function(B){var Q=this,e=this.getCurrentData().emitter;e.trigger("eventAdd",{event:B,relatedEvents:[],revert:function(){Q.dispatch({type:"REMOVE_EVENTS",eventStore:wR(B)})}})},A.prototype.getEventById=function(B){var Q=this.getCurrentData(),e=Q.eventStore,t=e.defs,n=e.instances;B=String(B);for(var g in t){var E=t[g];if(E.publicId===B){if(E.recurringDef)return new qA(Q,E,null);for(var r in n){var C=n[r];if(C.defId===E.defId)return new qA(Q,E,C)}}}return null},A.prototype.getEvents=function(){var B=this.getCurrentData();return mn(B.eventStore,B)},A.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},A.prototype.getEventSources=function(){var B=this.getCurrentData(),Q=B.eventSources,e=[];for(var t in Q)e.push(new Dg(B,Q[t]));return e},A.prototype.getEventSourceById=function(B){var Q=this.getCurrentData(),e=Q.eventSources;B=String(B);for(var t in e)if(e[t].publicId===B)return new Dg(Q,e[t]);return null},A.prototype.addEventSource=function(B){var Q=this.getCurrentData();if(B instanceof Dg)return Q.eventSources[B.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[B.internalEventSource]}),B;var e=lR(B,Q);return e?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e]}),new Dg(Q,e)):null},A.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},A.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES",isRefetch:!0})},A.prototype.scrollToTime=function(B){var Q=MA(B);Q&&this.trigger("_scrollRequest",{time:Q})},A}(),qA=function(){function A(B,Q,e){this._context=B,this._def=Q,this._instance=e||null}return A.prototype.setProp=function(B,Q){var e,t;if(B in tR)console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if(B==="id")Q=io[B](Q),this.mutate({standardProps:{publicId:Q}});else if(B in io)Q=io[B](Q),this.mutate({standardProps:(e={},e[B]=Q,e)});else if(B in Po){var n=Po[B](Q);B==="color"?n={backgroundColor:Q,borderColor:Q}:B==="editable"?n={startEditable:Q,durationEditable:Q}:n=(t={},t[B]=Q,t),this.mutate({standardProps:{ui:n}})}else console.warn("Could not set prop '"+B+"'. Use setExtendedProp instead.")},A.prototype.setExtendedProp=function(B,Q){var e;this.mutate({extendedProps:(e={},e[B]=Q,e)})},A.prototype.setStart=function(B,Q){Q===void 0&&(Q={});var e=this._context.dateEnv,t=e.createMarker(B);if(t&&this._instance){var n=this._instance.range,g=Ng(n.start,t,e,Q.granularity);Q.maintainDuration?this.mutate({datesDelta:g}):this.mutate({startDelta:g})}},A.prototype.setEnd=function(B,Q){Q===void 0&&(Q={});var e=this._context.dateEnv,t;if(!(B!=null&&(t=e.createMarker(B),!t))&&this._instance)if(t){var n=Ng(this._instance.range.end,t,e,Q.granularity);this.mutate({endDelta:n})}else this.mutate({standardProps:{hasEnd:!1}})},A.prototype.setDates=function(B,Q,e){e===void 0&&(e={});var t=this._context.dateEnv,n={allDay:e.allDay},g=t.createMarker(B),E;if(!!g&&!(Q!=null&&(E=t.createMarker(Q),!E))&&this._instance){var r=this._instance.range;e.allDay===!0&&(r=ER(r));var C=Ng(r.start,g,t,e.granularity);if(E){var i=Ng(r.end,E,t,e.granularity);WS(C,i)?this.mutate({datesDelta:C,standardProps:n}):this.mutate({startDelta:C,endDelta:i,standardProps:n})}else n.hasEnd=!1,this.mutate({datesDelta:C,standardProps:n})}},A.prototype.moveStart=function(B){var Q=MA(B);Q&&this.mutate({startDelta:Q})},A.prototype.moveEnd=function(B){var Q=MA(B);Q&&this.mutate({endDelta:Q})},A.prototype.moveDates=function(B){var Q=MA(B);Q&&this.mutate({datesDelta:Q})},A.prototype.setAllDay=function(B,Q){Q===void 0&&(Q={});var e={allDay:B},t=Q.maintainDuration;t==null&&(t=this._context.options.allDayMaintainDuration),this._def.allDay!==B&&(e.hasEnd=t),this.mutate({standardProps:e})},A.prototype.formatRange=function(B){var Q=this._context.dateEnv,e=this._instance,t=MB(B);return this._def.hasEnd?Q.formatRange(e.range.start,e.range.end,t,{forcedStartTzo:e.forcedStartTzo,forcedEndTzo:e.forcedEndTzo}):Q.format(e.range.start,t,{forcedTzo:e.forcedStartTzo})},A.prototype.mutate=function(B){var Q=this._instance;if(Q){var e=this._def,t=this._context,n=t.getCurrentData().eventStore,g=zD(n,Q.instanceId),E={"":{display:"",startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}};g=_D(g,E,B,t);var r=new A(t,e,Q);this._def=g.defs[e.defId],this._instance=g.instances[Q.instanceId],t.dispatch({type:"MERGE_EVENTS",eventStore:g}),t.emitter.trigger("eventChange",{oldEvent:r,event:this,relatedEvents:mn(g,t,Q),revert:function(){t.dispatch({type:"RESET_EVENTS",eventStore:n})}})}},A.prototype.remove=function(){var B=this._context,Q=wR(this);B.dispatch({type:"REMOVE_EVENTS",eventStore:Q}),B.emitter.trigger("eventRemove",{event:this,relatedEvents:[],revert:function(){B.dispatch({type:"MERGE_EVENTS",eventStore:Q})}})},Object.defineProperty(A.prototype,"source",{get:function(){var B=this._def.sourceId;return B?new Dg(this._context,this._context.getCurrentData().eventSources[B]):null},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"startStr",{get:function(){var B=this._instance;return B?this._context.dateEnv.formatIso(B.range.start,{omitTime:this._def.allDay,forcedTzo:B.forcedStartTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"endStr",{get:function(){var B=this._instance;return B&&this._def.hasEnd?this._context.dateEnv.formatIso(B.range.end,{omitTime:this._def.allDay,forcedTzo:B.forcedEndTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"id",{get:function(){return this._def.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"title",{get:function(){return this._def.title},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"url",{get:function(){return this._def.url},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"display",{get:function(){return this._def.ui.display||"auto"},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!1,configurable:!0}),A.prototype.toPlainObject=function(B){B===void 0&&(B={});var Q=this._def,e=Q.ui,t=this,n=t.startStr,g=t.endStr,E={};return Q.title&&(E.title=Q.title),n&&(E.start=n),g&&(E.end=g),Q.publicId&&(E.id=Q.publicId),Q.groupId&&(E.groupId=Q.groupId),Q.url&&(E.url=Q.url),e.display&&e.display!=="auto"&&(E.display=e.display),B.collapseColor&&e.backgroundColor&&e.backgroundColor===e.borderColor?E.color=e.backgroundColor:(e.backgroundColor&&(E.backgroundColor=e.backgroundColor),e.borderColor&&(E.borderColor=e.borderColor)),e.textColor&&(E.textColor=e.textColor),e.classNames.length&&(E.classNames=e.classNames),Object.keys(Q.extendedProps).length&&(B.collapseExtendedProps?m(E,Q.extendedProps):E.extendedProps=Q.extendedProps),E},A.prototype.toJSON=function(){return this.toPlainObject()},A}();function wR(A){var B,Q,e=A._def,t=A._instance;return{defs:(B={},B[e.defId]=e,B),instances:t?(Q={},Q[t.instanceId]=t,Q):{}}}function mn(A,B,Q){var e=A.defs,t=A.instances,n=[],g=Q?Q.instanceId:"";for(var E in t){var r=t[E],C=e[r.defId];r.instanceId!==g&&n.push(new qA(B,C,r))}return n}var DR={};function xZ(A,B){DR[A]=B}function zZ(A){return new DR[A]}var PZ=function(){function A(){}return A.prototype.getMarkerYear=function(B){return B.getUTCFullYear()},A.prototype.getMarkerMonth=function(B){return B.getUTCMonth()},A.prototype.getMarkerDay=function(B){return B.getUTCDate()},A.prototype.arrayToMarker=function(B){return gQ(B)},A.prototype.markerToArray=function(B){return pt(B)},A}();xZ("gregory",PZ);var KZ=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function jZ(A){var B=KZ.exec(A);if(B){var Q=new Date(Date.UTC(Number(B[1]),B[3]?Number(B[3])-1:0,Number(B[5]||1),Number(B[7]||0),Number(B[8]||0),Number(B[10]||0),B[12]?Number("0."+B[12])*1e3:0));if(BR(Q)){var e=null;return B[13]&&(e=(B[15]==="-"?-1:1)*(Number(B[16]||0)*60+Number(B[18]||0))),{marker:Q,isTimeUnspecified:!B[6],timeZoneOffset:e}}}return null}var qZ=function(){function A(B){var Q=this.timeZone=B.timeZone,e=Q!=="local"&&Q!=="UTC";B.namedTimeZoneImpl&&e&&(this.namedTimeZoneImpl=new B.namedTimeZoneImpl(Q)),this.canComputeOffset=Boolean(!e||this.namedTimeZoneImpl),this.calendarSystem=zZ(B.calendarSystem),this.locale=B.locale,this.weekDow=B.locale.week.dow,this.weekDoy=B.locale.week.doy,B.weekNumberCalculation==="ISO"&&(this.weekDow=1,this.weekDoy=4),typeof B.firstDay=="number"&&(this.weekDow=B.firstDay),typeof B.weekNumberCalculation=="function"&&(this.weekNumberFunc=B.weekNumberCalculation),this.weekText=B.weekText!=null?B.weekText:B.locale.options.weekText,this.weekTextLong=(B.weekTextLong!=null?B.weekTextLong:B.locale.options.weekTextLong)||this.weekText,this.cmdFormatter=B.cmdFormatter,this.defaultSeparator=B.defaultSeparator}return A.prototype.createMarker=function(B){var Q=this.createMarkerMeta(B);return Q===null?null:Q.marker},A.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker(new Date().valueOf()):gQ(wU(new Date))},A.prototype.createMarkerMeta=function(B){if(typeof B=="string")return this.parse(B);var Q=null;return typeof B=="number"?Q=this.timestampToMarker(B):B instanceof Date?(B=B.valueOf(),isNaN(B)||(Q=this.timestampToMarker(B))):Array.isArray(B)&&(Q=gQ(B)),Q===null||!BR(Q)?null:{marker:Q,isTimeUnspecified:!1,forcedTzo:null}},A.prototype.parse=function(B){var Q=jZ(B);if(Q===null)return null;var e=Q.marker,t=null;return Q.timeZoneOffset!==null&&(this.canComputeOffset?e=this.timestampToMarker(e.valueOf()-Q.timeZoneOffset*60*1e3):t=Q.timeZoneOffset),{marker:e,isTimeUnspecified:Q.isTimeUnspecified,forcedTzo:t}},A.prototype.getYear=function(B){return this.calendarSystem.getMarkerYear(B)},A.prototype.getMonth=function(B){return this.calendarSystem.getMarkerMonth(B)},A.prototype.add=function(B,Q){var e=this.calendarSystem.markerToArray(B);return e[0]+=Q.years,e[1]+=Q.months,e[2]+=Q.days,e[6]+=Q.milliseconds,this.calendarSystem.arrayToMarker(e)},A.prototype.subtract=function(B,Q){var e=this.calendarSystem.markerToArray(B);return e[0]-=Q.years,e[1]-=Q.months,e[2]-=Q.days,e[6]-=Q.milliseconds,this.calendarSystem.arrayToMarker(e)},A.prototype.addYears=function(B,Q){var e=this.calendarSystem.markerToArray(B);return e[0]+=Q,this.calendarSystem.arrayToMarker(e)},A.prototype.addMonths=function(B,Q){var e=this.calendarSystem.markerToArray(B);return e[1]+=Q,this.calendarSystem.arrayToMarker(e)},A.prototype.diffWholeYears=function(B,Q){var e=this.calendarSystem;return Gt(B)===Gt(Q)&&e.getMarkerDay(B)===e.getMarkerDay(Q)&&e.getMarkerMonth(B)===e.getMarkerMonth(Q)?e.getMarkerYear(Q)-e.getMarkerYear(B):null},A.prototype.diffWholeMonths=function(B,Q){var e=this.calendarSystem;return Gt(B)===Gt(Q)&&e.getMarkerDay(B)===e.getMarkerDay(Q)?e.getMarkerMonth(Q)-e.getMarkerMonth(B)+(e.getMarkerYear(Q)-e.getMarkerYear(B))*12:null},A.prototype.greatestWholeUnit=function(B,Q){var e=this.diffWholeYears(B,Q);return e!==null?{unit:"year",value:e}:(e=this.diffWholeMonths(B,Q),e!==null?{unit:"month",value:e}:(e=NS(B,Q),e!==null?{unit:"week",value:e}:(e=Wo(B,Q),e!==null?{unit:"day",value:e}:(e=GS(B,Q),KI(e)?{unit:"hour",value:e}:(e=RS(B,Q),KI(e)?{unit:"minute",value:e}:(e=mS(B,Q),KI(e)?{unit:"second",value:e}:{unit:"millisecond",value:Q.valueOf()-B.valueOf()}))))))},A.prototype.countDurationsBetween=function(B,Q,e){var t;return e.years&&(t=this.diffWholeYears(B,Q),t!==null)?t/VS(e):e.months&&(t=this.diffWholeMonths(B,Q),t!==null)?t/xS(e):e.days&&(t=Wo(B,Q),t!==null)?t/Hg(e):(Q.valueOf()-B.valueOf())/EC(e)},A.prototype.startOf=function(B,Q){return Q==="year"?this.startOfYear(B):Q==="month"?this.startOfMonth(B):Q==="week"?this.startOfWeek(B):Q==="day"?HA(B):Q==="hour"?yS(B):Q==="minute"?vS(B):Q==="second"?bS(B):null},A.prototype.startOfYear=function(B){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(B)])},A.prototype.startOfMonth=function(B){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(B),this.calendarSystem.getMarkerMonth(B)])},A.prototype.startOfWeek=function(B){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(B),this.calendarSystem.getMarkerMonth(B),B.getUTCDate()-(B.getUTCDay()-this.weekDow+7)%7])},A.prototype.computeWeekNumber=function(B){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(B)):kS(B,this.weekDow,this.weekDoy)},A.prototype.format=function(B,Q,e){return e===void 0&&(e={}),Q.format({marker:B,timeZoneOffset:e.forcedTzo!=null?e.forcedTzo:this.offsetForMarker(B)},this)},A.prototype.formatRange=function(B,Q,e,t){return t===void 0&&(t={}),t.isEndExclusive&&(Q=Ln(Q,-1)),e.formatRange({marker:B,timeZoneOffset:t.forcedStartTzo!=null?t.forcedStartTzo:this.offsetForMarker(B)},{marker:Q,timeZoneOffset:t.forcedEndTzo!=null?t.forcedEndTzo:this.offsetForMarker(Q)},this,t.defaultSeparator)},A.prototype.formatIso=function(B,Q){Q===void 0&&(Q={});var e=null;return Q.omitTimeZoneOffset||(Q.forcedTzo!=null?e=Q.forcedTzo:e=this.offsetForMarker(B)),zS(B,e,Q.omitTime)},A.prototype.timestampToMarker=function(B){return this.timeZone==="local"?gQ(wU(new Date(B))):this.timeZone==="UTC"||!this.namedTimeZoneImpl?new Date(B):gQ(this.namedTimeZoneImpl.timestampToArray(B))},A.prototype.offsetForMarker=function(B){return this.timeZone==="local"?-DU(pt(B)).getTimezoneOffset():this.timeZone==="UTC"?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(pt(B)):null},A.prototype.toDate=function(B,Q){return this.timeZone==="local"?DU(pt(B)):this.timeZone==="UTC"?new Date(B.valueOf()):this.namedTimeZoneImpl?new Date(B.valueOf()-this.namedTimeZoneImpl.offsetForArray(pt(B))*1e3*60):new Date(B.valueOf()-(Q||0))},A}(),_Z=[],FR={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",weekTextLong:"Week",closeHint:"Close",timeHint:"Time",eventHint:"Event",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"},uR=m(m({},FR),{buttonHints:{prev:"Previous $0",next:"Next $0",today:function(A,B){return B==="day"?"Today":"This "+A}},viewHint:"$0 view",navLinkHint:"Go to $0",moreLinkHint:function(A){return"Show "+A+" more event"+(A===1?"":"s")}});function $Z(A){for(var B=A.length>0?A[0].code:"en",Q=_Z.concat(A),e={en:uR},t=0,n=Q;t<n.length;t++){var g=n[t];e[g.code]=g}return{map:e,defaultCode:B}}function dR(A,B){return typeof A=="object"&&!Array.isArray(A)?fR(A.code,[A.code],A):AL(A,B)}function AL(A,B){var Q=[].concat(A||[]),e=BL(Q,B)||uR;return fR(A,Q,e)}function BL(A,B){for(var Q=0;Q<A.length;Q+=1)for(var e=A[Q].toLocaleLowerCase().split("-"),t=e.length;t>0;t-=1){var n=e.slice(0,t).join("-");if(B[n])return B[n]}return null}function fR(A,B,Q){var e=WD([FR,Q],["buttonText"]);delete e.code;var t=e.week;return delete e.week,{codeArg:A,codes:B,week:t,simpleNumberFormat:new Intl.NumberFormat(A),options:e}}var QL={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],display:"inverse-background",classNames:"fc-non-business",groupId:"_businessHours"};function eL(A,B){return zo(tL(A),null,B)}function tL(A){var B;return A===!0?B=[{}]:Array.isArray(A)?B=A.filter(function(Q){return Q.daysOfWeek}):typeof A=="object"&&A?B=[A]:B=[],B=B.map(function(Q){return m(m({},QL),Q)}),B}function nL(A,B){return A.left>=B.left&&A.left<B.right&&A.top>=B.top&&A.top<B.bottom}function UR(A,B){var Q={left:Math.max(A.left,B.left),right:Math.min(A.right,B.right),top:Math.max(A.top,B.top),bottom:Math.min(A.bottom,B.bottom)};return Q.left<Q.right&&Q.top<Q.bottom?Q:!1}function gL(A,B){return{left:Math.min(Math.max(A.left,B.left),B.right),top:Math.min(Math.max(A.top,B.top),B.bottom)}}function EL(A){return{left:(A.left+A.right)/2,top:(A.top+A.bottom)/2}}function rL(A,B){return{left:A.left-B.left,top:A.top-B.top}}var $I;function MR(){return $I==null&&($I=CL()),$I}function CL(){if(typeof document>"u")return!0;var A=document.createElement("div");A.style.position="absolute",A.style.top="0px",A.style.left="0px",A.innerHTML="<table><tr><td><div></div></td></tr></table>",A.querySelector("table").style.height="100px",A.querySelector("div").style.height="100%",document.body.appendChild(A);var B=A.querySelector("div"),Q=B.offsetHeight>0;return document.body.removeChild(A),Q}function hR(A,B,Q,e){return{dow:A.getUTCDay(),isDisabled:Boolean(e&&!Rn(e.activeRange,A)),isOther:Boolean(e&&!Rn(e.currentRange,A)),isToday:Boolean(B&&Rn(B,A)),isPast:Boolean(Q?A<Q:B?A<B.start:!1),isFuture:Boolean(Q?A>Q:B?A>=B.end:!1)}}function $D(A,B){var Q=["fc-day","fc-day-"+hS[A.dow]];return A.isDisabled?Q.push("fc-day-disabled"):(A.isToday&&(Q.push("fc-day-today"),Q.push(B.getClass("today"))),A.isPast&&Q.push("fc-day-past"),A.isFuture&&Q.push("fc-day-future"),A.isOther&&Q.push("fc-day-other")),Q}var iL=MB({year:"numeric",month:"long",day:"numeric"}),oL=MB({week:"long"});function AF(A,B,Q,e){Q===void 0&&(Q="day"),e===void 0&&(e=!0);var t=A.dateEnv,n=A.options,g=A.calendarApi,E=t.format(B,Q==="week"?oL:iL);if(n.navLinks){var r=t.toDate(B),C=function(i){var o=Q==="day"?n.navLinkDayClick:Q==="week"?n.navLinkWeekClick:null;typeof o=="function"?o.call(g,t.toDate(B),i):(typeof o=="string"&&(Q=o),g.zoomTo(B,Q))};return m({title:Yr(n.navLinkHint,[E,r],E),"data-navlink":""},e?$G(C):{onClick:C})}return{"aria-label":E}}var Al=null;function aL(){return Al===null&&(Al=sL()),Al}function sL(){var A=document.createElement("div");mr(A,{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}),A.innerHTML="<div></div>",document.body.appendChild(A);var B=A.firstChild,Q=B.getBoundingClientRect().left>A.getBoundingClientRect().left;return LD(A),Q}var Bl;function IL(){return Bl||(Bl=lL()),Bl}function lL(){var A=document.createElement("div");A.style.overflow="scroll",A.style.position="absolute",A.style.top="-9999px",A.style.left="-9999px",document.body.appendChild(A);var B=pR(A);return document.body.removeChild(A),B}function pR(A){return{x:A.offsetHeight-A.clientHeight,y:A.offsetWidth-A.clientWidth}}function cL(A,B){B===void 0&&(B=!1);var Q=window.getComputedStyle(A),e=parseInt(Q.borderLeftWidth,10)||0,t=parseInt(Q.borderRightWidth,10)||0,n=parseInt(Q.borderTopWidth,10)||0,g=parseInt(Q.borderBottomWidth,10)||0,E=pR(A),r=E.y-e-t,C=E.x-n-g,i={borderLeft:e,borderRight:t,borderTop:n,borderBottom:g,scrollbarBottom:C,scrollbarLeft:0,scrollbarRight:0};return aL()&&Q.direction==="rtl"?i.scrollbarLeft=r:i.scrollbarRight=r,B&&(i.paddingLeft=parseInt(Q.paddingLeft,10)||0,i.paddingRight=parseInt(Q.paddingRight,10)||0,i.paddingTop=parseInt(Q.paddingTop,10)||0,i.paddingBottom=parseInt(Q.paddingBottom,10)||0),i}function wL(A,B,Q){B===void 0&&(B=!1);var e=Q?A.getBoundingClientRect():BF(A),t=cL(A,B),n={left:e.left+t.borderLeft+t.scrollbarLeft,right:e.right-t.borderRight-t.scrollbarRight,top:e.top+t.borderTop,bottom:e.bottom-t.borderBottom-t.scrollbarBottom};return B&&(n.left+=t.paddingLeft,n.right-=t.paddingRight,n.top+=t.paddingTop,n.bottom-=t.paddingBottom),n}function BF(A){var B=A.getBoundingClientRect();return{left:B.left+window.pageXOffset,top:B.top+window.pageYOffset,right:B.right+window.pageXOffset,bottom:B.bottom+window.pageYOffset}}function DL(A){for(var B=GR(A),Q=A.getBoundingClientRect(),e=0,t=B;e<t.length;e++){var n=t[e],g=UR(Q,n.getBoundingClientRect());if(g)Q=g;else return null}return Q}function GR(A){for(var B=[];A instanceof HTMLElement;){var Q=window.getComputedStyle(A);if(Q.position==="fixed")break;/(auto|scroll)/.test(Q.overflow+Q.overflowY+Q.overflowX)&&B.push(A),A=A.parentNode}return B}function FL(A,B,Q){var e=!1,t=function(){e||(e=!0,B.apply(this,arguments))},n=function(){e||(e=!0,Q&&Q.apply(this,arguments))},g=A(t,n);g&&typeof g.then=="function"&&g.then(t,n)}var us=function(){function A(){this.handlers={},this.thisContext=null}return A.prototype.setThisContext=function(B){this.thisContext=B},A.prototype.setOptions=function(B){this.options=B},A.prototype.on=function(B,Q){uL(this.handlers,B,Q)},A.prototype.off=function(B,Q){dL(this.handlers,B,Q)},A.prototype.trigger=function(B){for(var Q=[],e=1;e<arguments.length;e++)Q[e-1]=arguments[e];for(var t=this.handlers[B]||[],n=this.options&&this.options[B],g=[].concat(n||[],t),E=0,r=g;E<r.length;E++){var C=r[E];C.apply(this.thisContext,Q)}},A.prototype.hasHandlers=function(B){return Boolean(this.handlers[B]&&this.handlers[B].length||this.options&&this.options[B])},A}();function uL(A,B,Q){(A[B]||(A[B]=[])).push(Q)}function dL(A,B,Q){Q?A[B]&&(A[B]=A[B].filter(function(e){return e!==Q})):delete A[B]}var Vc=function(){function A(B,Q,e,t){this.els=Q;var n=this.originClientRect=B.getBoundingClientRect();e&&this.buildElHorizontals(n.left),t&&this.buildElVerticals(n.top)}return A.prototype.buildElHorizontals=function(B){for(var Q=[],e=[],t=0,n=this.els;t<n.length;t++){var g=n[t],E=g.getBoundingClientRect();Q.push(E.left-B),e.push(E.right-B)}this.lefts=Q,this.rights=e},A.prototype.buildElVerticals=function(B){for(var Q=[],e=[],t=0,n=this.els;t<n.length;t++){var g=n[t],E=g.getBoundingClientRect();Q.push(E.top-B),e.push(E.bottom-B)}this.tops=Q,this.bottoms=e},A.prototype.leftToIndex=function(B){var Q=this,e=Q.lefts,t=Q.rights,n=e.length,g;for(g=0;g<n;g+=1)if(B>=e[g]&&B<t[g])return g},A.prototype.topToIndex=function(B){var Q=this,e=Q.tops,t=Q.bottoms,n=e.length,g;for(g=0;g<n;g+=1)if(B>=e[g]&&B<t[g])return g},A.prototype.getWidth=function(B){return this.rights[B]-this.lefts[B]},A.prototype.getHeight=function(B){return this.bottoms[B]-this.tops[B]},A}(),QF=function(){function A(){}return A.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},A.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},A.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},A.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},A.prototype.canScrollUp=function(){return this.getScrollTop()>0},A.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},A.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},A.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},A}(),fL=function(A){BA(B,A);function B(Q){var e=A.call(this)||this;return e.el=Q,e}return B.prototype.getScrollTop=function(){return this.el.scrollTop},B.prototype.getScrollLeft=function(){return this.el.scrollLeft},B.prototype.setScrollTop=function(Q){this.el.scrollTop=Q},B.prototype.setScrollLeft=function(Q){this.el.scrollLeft=Q},B.prototype.getScrollWidth=function(){return this.el.scrollWidth},B.prototype.getScrollHeight=function(){return this.el.scrollHeight},B.prototype.getClientHeight=function(){return this.el.clientHeight},B.prototype.getClientWidth=function(){return this.el.clientWidth},B}(QF),UL=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.getScrollTop=function(){return window.pageYOffset},B.prototype.getScrollLeft=function(){return window.pageXOffset},B.prototype.setScrollTop=function(Q){window.scroll(window.pageXOffset,Q)},B.prototype.setScrollLeft=function(Q){window.scroll(Q,window.pageYOffset)},B.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},B.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},B.prototype.getClientHeight=function(){return document.documentElement.clientHeight},B.prototype.getClientWidth=function(){return document.documentElement.clientWidth},B}(QF),LC=function(){function A(B){this.iconOverrideOption&&this.setIconOverride(B[this.iconOverrideOption])}return A.prototype.setIconOverride=function(B){var Q,e;if(typeof B=="object"&&B){Q=m({},this.iconClasses);for(e in B)Q[e]=this.applyIconOverridePrefix(B[e]);this.iconClasses=Q}else B===!1&&(this.iconClasses={})},A.prototype.applyIconOverridePrefix=function(B){var Q=this.iconOverridePrefix;return Q&&B.indexOf(Q)!==0&&(B=Q+B),B},A.prototype.getClass=function(B){return this.classes[B]||""},A.prototype.getIconClass=function(B,Q){var e;return Q&&this.rtlIconClasses?e=this.rtlIconClasses[B]||this.iconClasses[B]:e=this.iconClasses[B],e?this.baseIconClass+" "+e:""},A.prototype.getCustomButtonIconClass=function(B){var Q;return this.iconOverrideCustomButtonOption&&(Q=B[this.iconOverrideCustomButtonOption],Q)?this.baseIconClass+" "+this.applyIconOverridePrefix(Q):""},A}();LC.prototype.classes={};LC.prototype.iconClasses={};LC.prototype.baseIconClass="";LC.prototype.iconOverridePrefix="";var ML=function(){function A(B,Q,e,t){var n=this;this.execFunc=B,this.emitter=Q,this.scrollTime=e,this.scrollTimeReset=t,this.handleScrollRequest=function(g){n.queuedRequest=m({},n.queuedRequest||{},g),n.drain()},Q.on("_scrollRequest",this.handleScrollRequest),this.fireInitialScroll()}return A.prototype.detach=function(){this.emitter.off("_scrollRequest",this.handleScrollRequest)},A.prototype.update=function(B){B&&this.scrollTimeReset?this.fireInitialScroll():this.drain()},A.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime})},A.prototype.drain=function(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)},A}(),_n=KG({});function hL(A,B,Q,e,t,n,g,E,r,C,i,o,a){return{dateEnv:t,options:Q,pluginHooks:g,emitter:C,dispatch:E,getCurrentData:r,calendarApi:i,viewSpec:A,viewApi:B,dateProfileGenerator:e,theme:n,isRtl:Q.direction==="rtl",addResizeHandler:function(s){C.on("_resize",s)},removeResizeHandler:function(s){C.off("_resize",s)},createScrollResponder:function(s){return new ML(s,C,MA(Q.scrollTime),Q.scrollTimeReset)},registerInteractiveComponent:o,unregisterInteractiveComponent:a}}var ds=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.shouldComponentUpdate=function(Q,e){return this.debug&&console.log(FU(Q,this.props),FU(e,this.state)),!qI(this.props,Q,this.propEquality)||!qI(this.state,e,this.stateEquality)},B.prototype.safeSetState=function(Q){qI(this.state,m(m({},this.state),Q),this.stateEquality)||this.setState(Q)},B.addPropsEquality=pL,B.addStateEquality=GL,B.contextType=_n,B}(ZD);ds.prototype.propEquality={};ds.prototype.stateEquality={};var TA=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.contextType=_n,B}(ds);function pL(A){var B=Object.create(this.prototype.propEquality);m(B,A),this.prototype.propEquality=B}function GL(A){var B=Object.create(this.prototype.stateEquality);m(B,A),this.prototype.stateEquality=B}function je(A,B){typeof A=="function"?A(B):A&&(A.current=B)}var FE=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.uid=wE(),Q}return B.prototype.prepareHits=function(){},B.prototype.queryHit=function(Q,e,t,n){return null},B.prototype.isValidSegDownEl=function(Q){return!this.props.eventDrag&&!this.props.eventResize&&!kB(Q,".fc-event-mirror")},B.prototype.isValidDateDownEl=function(Q){return!kB(Q,".fc-event:not(.fc-bg-event)")&&!kB(Q,".fc-more-link")&&!kB(Q,"a[data-navlink]")&&!kB(Q,".fc-popover")},B}(TA);function jt(A){return{id:wE(),deps:A.deps||[],reducers:A.reducers||[],isLoadingFuncs:A.isLoadingFuncs||[],contextInit:[].concat(A.contextInit||[]),eventRefiners:A.eventRefiners||{},eventDefMemberAdders:A.eventDefMemberAdders||[],eventSourceRefiners:A.eventSourceRefiners||{},isDraggableTransformers:A.isDraggableTransformers||[],eventDragMutationMassagers:A.eventDragMutationMassagers||[],eventDefMutationAppliers:A.eventDefMutationAppliers||[],dateSelectionTransformers:A.dateSelectionTransformers||[],datePointTransforms:A.datePointTransforms||[],dateSpanTransforms:A.dateSpanTransforms||[],views:A.views||{},viewPropsTransformers:A.viewPropsTransformers||[],isPropsValid:A.isPropsValid||null,externalDefTransforms:A.externalDefTransforms||[],viewContainerAppends:A.viewContainerAppends||[],eventDropTransformers:A.eventDropTransformers||[],componentInteractions:A.componentInteractions||[],calendarInteractions:A.calendarInteractions||[],themeClasses:A.themeClasses||{},eventSourceDefs:A.eventSourceDefs||[],cmdFormatter:A.cmdFormatter,recurringTypes:A.recurringTypes||[],namedTimeZonedImpl:A.namedTimeZonedImpl,initialView:A.initialView||"",elementDraggingImpl:A.elementDraggingImpl,optionChangeHandlers:A.optionChangeHandlers||{},scrollGridImpl:A.scrollGridImpl||null,contentTypeHandlers:A.contentTypeHandlers||{},listenerRefiners:A.listenerRefiners||{},optionRefiners:A.optionRefiners||{},propSetHandlers:A.propSetHandlers||{}}}function RL(A,B){var Q={},e={reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function t(n){for(var g=0,E=n;g<E.length;g++){var r=E[g];Q[r.id]||(Q[r.id]=!0,t(r.deps),e=YL(e,r))}}return A&&t(A),t(B),e}function mL(){var A=[],B=[],Q;return function(e,t){return(!Q||!rC(e,A)||!rC(t,B))&&(Q=RL(e,t)),A=e,B=t,Q}}function YL(A,B){return{reducers:A.reducers.concat(B.reducers),isLoadingFuncs:A.isLoadingFuncs.concat(B.isLoadingFuncs),contextInit:A.contextInit.concat(B.contextInit),eventRefiners:m(m({},A.eventRefiners),B.eventRefiners),eventDefMemberAdders:A.eventDefMemberAdders.concat(B.eventDefMemberAdders),eventSourceRefiners:m(m({},A.eventSourceRefiners),B.eventSourceRefiners),isDraggableTransformers:A.isDraggableTransformers.concat(B.isDraggableTransformers),eventDragMutationMassagers:A.eventDragMutationMassagers.concat(B.eventDragMutationMassagers),eventDefMutationAppliers:A.eventDefMutationAppliers.concat(B.eventDefMutationAppliers),dateSelectionTransformers:A.dateSelectionTransformers.concat(B.dateSelectionTransformers),datePointTransforms:A.datePointTransforms.concat(B.datePointTransforms),dateSpanTransforms:A.dateSpanTransforms.concat(B.dateSpanTransforms),views:m(m({},A.views),B.views),viewPropsTransformers:A.viewPropsTransformers.concat(B.viewPropsTransformers),isPropsValid:B.isPropsValid||A.isPropsValid,externalDefTransforms:A.externalDefTransforms.concat(B.externalDefTransforms),viewContainerAppends:A.viewContainerAppends.concat(B.viewContainerAppends),eventDropTransformers:A.eventDropTransformers.concat(B.eventDropTransformers),calendarInteractions:A.calendarInteractions.concat(B.calendarInteractions),componentInteractions:A.componentInteractions.concat(B.componentInteractions),themeClasses:m(m({},A.themeClasses),B.themeClasses),eventSourceDefs:A.eventSourceDefs.concat(B.eventSourceDefs),cmdFormatter:B.cmdFormatter||A.cmdFormatter,recurringTypes:A.recurringTypes.concat(B.recurringTypes),namedTimeZonedImpl:B.namedTimeZonedImpl||A.namedTimeZonedImpl,initialView:A.initialView||B.initialView,elementDraggingImpl:A.elementDraggingImpl||B.elementDraggingImpl,optionChangeHandlers:m(m({},A.optionChangeHandlers),B.optionChangeHandlers),scrollGridImpl:B.scrollGridImpl||A.scrollGridImpl,contentTypeHandlers:m(m({},A.contentTypeHandlers),B.contentTypeHandlers),listenerRefiners:m(m({},A.listenerRefiners),B.listenerRefiners),optionRefiners:m(m({},A.optionRefiners),B.optionRefiners),propSetHandlers:m(m({},A.propSetHandlers),B.propSetHandlers)}}var qt=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B}(LC);qt.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"};qt.prototype.baseIconClass="fc-icon";qt.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"};qt.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"};qt.prototype.iconOverrideOption="buttonIcons";qt.prototype.iconOverrideCustomButtonOption="icon";qt.prototype.iconOverridePrefix="fc-icon-";function NL(A,B){var Q={},e;for(e in A)xc(e,Q,A,B);for(e in B)xc(e,Q,A,B);return Q}function xc(A,B,Q,e){if(B[A])return B[A];var t=yL(A,B,Q,e);return t&&(B[A]=t),t}function yL(A,B,Q,e){var t=Q[A],n=e[A],g=function(i){return t&&t[i]!==null?t[i]:n&&n[i]!==null?n[i]:null},E=g("component"),r=g("superType"),C=null;if(r){if(r===A)throw new Error("Can't have a custom view type that references itself");C=xc(r,B,Q,e)}return!E&&C&&(E=C.component),E?{type:A,component:E,defaults:m(m({},C?C.defaults:{}),t?t.rawOptions:{}),overrides:m(m({},C?C.overrides:{}),n?n.rawOptions:{})}:null}var uE=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.rootElRef=JQ(),Q.handleRootEl=function(e){je(Q.rootElRef,e),Q.props.elRef&&je(Q.props.elRef,e)},Q}return B.prototype.render=function(){var Q=this,e=this.props,t=e.hookProps;return b(eF,{hookProps:t,didMount:e.didMount,willUnmount:e.willUnmount,elRef:this.handleRootEl},function(n){return b(RR,{hookProps:t,content:e.content,defaultContent:e.defaultContent,backupElRef:Q.rootElRef},function(g,E){return e.children(n,YR(e.classNames,t),g,E)})})},B}(TA),vL=KG(0);function RR(A){return b(vL.Consumer,null,function(B){return b(bL,m({renderId:B},A))})}var bL=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.innerElRef=JQ(),Q}return B.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent())},B.prototype.componentDidMount=function(){this.updateCustomContent()},B.prototype.componentDidUpdate=function(){this.updateCustomContent()},B.prototype.componentWillUnmount=function(){this.customContentInfo&&this.customContentInfo.destroy&&this.customContentInfo.destroy()},B.prototype.renderInnerContent=function(){var Q=this.customContentInfo,e=this.getInnerContent(),t=this.getContentMeta(e);return!Q||Q.contentKey!==t.contentKey?(Q&&(Q.destroy&&Q.destroy(),Q=this.customContentInfo=null),t.contentKey&&(Q=this.customContentInfo=m({contentKey:t.contentKey,contentVal:e[t.contentKey]},t.buildLifecycleFuncs()))):Q&&(Q.contentVal=e[t.contentKey]),Q?[]:e},B.prototype.getInnerContent=function(){var Q=this.props,e=NU(Q.content,Q.hookProps);return e===void 0&&(e=NU(Q.defaultContent,Q.hookProps)),e==null?null:e},B.prototype.getContentMeta=function(Q){var e=this.context.pluginHooks.contentTypeHandlers,t="",n=null;if(Q){for(var g in e)if(Q[g]!==void 0){t=g,n=e[g];break}}return{contentKey:t,buildLifecycleFuncs:n}},B.prototype.updateCustomContent=function(){this.customContentInfo&&this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,this.customContentInfo.contentVal)},B}(TA),eF=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.handleRootEl=function(e){Q.rootEl=e,Q.props.elRef&&je(Q.props.elRef,e)},Q}return B.prototype.render=function(){return this.props.children(this.handleRootEl)},B.prototype.componentDidMount=function(){var Q=this.props.didMount;Q&&Q(m(m({},this.props.hookProps),{el:this.rootEl}))},B.prototype.componentWillUnmount=function(){var Q=this.props.willUnmount;Q&&Q(m(m({},this.props.hookProps),{el:this.rootEl}))},B}(TA);function mR(){var A,B,Q=[];return function(e,t){return(!B||!Ke(B,t)||e!==A)&&(A=e,B=t,Q=YR(e,t)),Q}}function YR(A,B){return typeof A=="function"&&(A=A(B)),Wc(A)}function NU(A,B){return typeof A=="function"?A(B,b):A}var zc=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.normalizeClassNames=mR(),Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=t.options,g={view:t.viewApi},E=this.normalizeClassNames(n.viewClassNames,g);return b(eF,{hookProps:g,didMount:n.viewDidMount,willUnmount:n.viewWillUnmount,elRef:e.elRef},function(r){return e.children(r,["fc-"+e.viewSpec.type+"-view","fc-view"].concat(E))})},B}(TA);function yU(A){return qn(A,kL)}function kL(A){var B=typeof A=="function"?{component:A}:A,Q=B.component;return B.content&&(Q=JL(B)),{superType:B.type,component:Q,rawOptions:B}}function JL(A){return function(B){return b(_n.Consumer,null,function(Q){return b(zc,{viewSpec:Q.viewSpec},function(e,t){var n=m(m({},B),{nextDayThreshold:Q.options.nextDayThreshold});return b(uE,{hookProps:n,classNames:A.classNames,content:A.content,didMount:A.didMount,willUnmount:A.willUnmount,elRef:e},function(g,E,r,C){return b("div",{className:t.concat(E).join(" "),ref:g},C)})})})}}function SL(A,B,Q,e){var t=yU(A),n=yU(B.views),g=NL(t,n);return qn(g,function(E){return ZL(E,n,B,Q,e)})}function ZL(A,B,Q,e,t){var n=A.overrides.duration||A.defaults.duration||e.duration||Q.duration,g=null,E="",r="",C={};if(n&&(g=LL(n),g)){var i=Hc(g);E=i.unit,i.value===1&&(r=E,C=B[E]?B[E].rawOptions:{})}var o=function(s){var I=s.buttonText||{},D=A.defaults.buttonTextKey;return D!=null&&I[D]!=null?I[D]:I[A.type]!=null?I[A.type]:I[r]!=null?I[r]:null},a=function(s){var I=s.buttonHints||{},D=A.defaults.buttonTextKey;return D!=null&&I[D]!=null?I[D]:I[A.type]!=null?I[A.type]:I[r]!=null?I[r]:null};return{type:A.type,component:A.component,duration:g,durationUnit:E,singleUnit:r,optionDefaults:A.defaults,optionOverrides:m(m({},C),A.overrides),buttonTextOverride:o(e)||o(Q)||A.overrides.buttonText,buttonTextDefault:o(t)||A.defaults.buttonText||o(Nr)||A.type,buttonTitleOverride:a(e)||a(Q)||A.overrides.buttonHint,buttonTitleDefault:a(t)||A.defaults.buttonHint||a(Nr)}}var vU={};function LL(A){var B=JSON.stringify(A),Q=vU[B];return Q===void 0&&(Q=MA(A),vU[B]=Q),Q}var NR=function(){function A(B){this.props=B,this.nowDate=ZC(B.nowInput,B.dateEnv),this.initHiddenDays()}return A.prototype.buildPrev=function(B,Q,e){var t=this.props.dateEnv,n=t.subtract(t.startOf(Q,B.currentRangeUnit),B.dateIncrement);return this.build(n,-1,e)},A.prototype.buildNext=function(B,Q,e){var t=this.props.dateEnv,n=t.add(t.startOf(Q,B.currentRangeUnit),B.dateIncrement);return this.build(n,1,e)},A.prototype.build=function(B,Q,e){e===void 0&&(e=!0);var t=this.props,n,g,E,r,C,i;return n=this.buildValidRange(),n=this.trimHiddenDays(n),e&&(B=fZ(B,n)),g=this.buildCurrentRangeInfo(B,Q),E=/^(year|month|week|day)$/.test(g.unit),r=this.buildRenderRange(this.trimHiddenDays(g.range),g.unit,E),r=this.trimHiddenDays(r),C=r,t.showNonCurrentDates||(C=CC(C,g.range)),C=this.adjustActiveRange(C),C=CC(C,n),i=jD(g.range,n),{validRange:n,currentRange:g.range,currentRangeUnit:g.unit,isRangeAllDay:E,activeRange:C,renderRange:r,slotMinTime:t.slotMinTime,slotMaxTime:t.slotMaxTime,isValid:i,dateIncrement:this.buildDateIncrement(g.duration)}},A.prototype.buildValidRange=function(){var B=this.props.validRangeInput,Q=typeof B=="function"?B.call(this.props.calendarApi,this.nowDate):B;return this.refineRange(Q)||{start:null,end:null}},A.prototype.buildCurrentRangeInfo=function(B,Q){var e=this.props,t=null,n=null,g=null,E;return e.duration?(t=e.duration,n=e.durationUnit,g=this.buildRangeFromDuration(B,Q,t,n)):(E=this.props.dayCount)?(n="day",g=this.buildRangeFromDayCount(B,Q,E)):(g=this.buildCustomVisibleRange(B))?n=e.dateEnv.greatestWholeUnit(g.start,g.end).unit:(t=this.getFallbackDuration(),n=Hc(t).unit,g=this.buildRangeFromDuration(B,Q,t,n)),{duration:t,unit:n,range:g}},A.prototype.getFallbackDuration=function(){return MA({day:1})},A.prototype.adjustActiveRange=function(B){var Q=this.props,e=Q.dateEnv,t=Q.usesMinMaxTime,n=Q.slotMinTime,g=Q.slotMaxTime,E=B.start,r=B.end;return t&&(Hg(n)<0&&(E=HA(E),E=e.add(E,n)),Hg(g)>1&&(r=HA(r),r=KB(r,-1),r=e.add(r,g))),{start:E,end:r}},A.prototype.buildRangeFromDuration=function(B,Q,e,t){var n=this.props,g=n.dateEnv,E=n.dateAlignment,r,C,i;if(!E){var o=this.props.dateIncrement;o&&EC(o)<EC(e)?E=Hc(o).unit:E=t}Hg(e)<=1&&this.isHiddenDay(r)&&(r=this.skipHiddenDays(r,Q),r=HA(r));function a(){r=g.startOf(B,E),C=g.add(r,e),i={start:r,end:C}}return a(),this.trimHiddenDays(i)||(B=this.skipHiddenDays(B,Q),a()),i},A.prototype.buildRangeFromDayCount=function(B,Q,e){var t=this.props,n=t.dateEnv,g=t.dateAlignment,E=0,r=B,C;g&&(r=n.startOf(r,g)),r=HA(r),r=this.skipHiddenDays(r,Q),C=r;do C=KB(C,1),this.isHiddenDay(C)||(E+=1);while(E<e);return{start:r,end:C}},A.prototype.buildCustomVisibleRange=function(B){var Q=this.props,e=Q.visibleRangeInput,t=typeof e=="function"?e.call(Q.calendarApi,Q.dateEnv.toDate(B)):e,n=this.refineRange(t);return n&&(n.start==null||n.end==null)?null:n},A.prototype.buildRenderRange=function(B,Q,e){return B},A.prototype.buildDateIncrement=function(B){var Q=this.props.dateIncrement,e;return Q||((e=this.props.dateAlignment)?MA(1,e):B||MA({days:1}))},A.prototype.refineRange=function(B){if(B){var Q=FZ(B,this.props.dateEnv);return Q&&(Q=rR(Q)),Q}return null},A.prototype.initHiddenDays=function(){var B=this.props.hiddenDays||[],Q=[],e=0,t;for(this.props.weekends===!1&&B.push(0,6),t=0;t<7;t+=1)(Q[t]=B.indexOf(t)!==-1)||(e+=1);if(!e)throw new Error("invalid hiddenDays");this.isHiddenDayHash=Q},A.prototype.trimHiddenDays=function(B){var Q=B.start,e=B.end;return Q&&(Q=this.skipHiddenDays(Q)),e&&(e=this.skipHiddenDays(e,-1,!0)),Q==null||e==null||Q<e?{start:Q,end:e}:null},A.prototype.isHiddenDay=function(B){return B instanceof Date&&(B=B.getUTCDay()),this.isHiddenDayHash[B]},A.prototype.skipHiddenDays=function(B,Q,e){for(Q===void 0&&(Q=1),e===void 0&&(e=!1);this.isHiddenDayHash[(B.getUTCDay()+(e?Q:0)+7)%7];)B=KB(B,Q);return B},A}();function XL(A,B){switch(B.type){case"CHANGE_VIEW_TYPE":A=B.viewType}return A}function HL(A,B){var Q;switch(B.type){case"SET_OPTION":return m(m({},A),(Q={},Q[B.optionName]=B.rawOptionValue,Q));default:return A}}function TL(A,B,Q,e){var t;switch(B.type){case"CHANGE_VIEW_TYPE":return e.build(B.dateMarker||Q);case"CHANGE_DATE":return e.build(B.dateMarker);case"PREV":if(t=e.buildPrev(A,Q),t.isValid)return t;break;case"NEXT":if(t=e.buildNext(A,Q),t.isValid)return t;break}return A}function WL(A,B,Q){var e=B?B.activeRange:null;return vR({},jL(A,Q),e,Q)}function OL(A,B,Q,e){var t=Q?Q.activeRange:null;switch(B.type){case"ADD_EVENT_SOURCES":return vR(A,B.sources,t,e);case"REMOVE_EVENT_SOURCE":return xL(A,B.sourceId);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return Q?bR(A,t,e):A;case"FETCH_EVENT_SOURCES":return tF(A,B.sourceIds?QR(B.sourceIds):kR(A,e),t,B.isRefetch||!1,e);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return KL(A,B.sourceId,B.fetchId,B.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return A}}function VL(A,B,Q){var e=B?B.activeRange:null;return tF(A,kR(A,Q),e,!0,Q)}function yR(A){for(var B in A)if(A[B].isFetching)return!0;return!1}function vR(A,B,Q,e){for(var t={},n=0,g=B;n<g.length;n++){var E=g[n];t[E.sourceId]=E}return Q&&(t=bR(t,Q,e)),m(m({},A),t)}function xL(A,B){return Xn(A,function(Q){return Q.sourceId!==B})}function bR(A,B,Q){return tF(A,Xn(A,function(e){return zL(e,B,Q)}),B,!1,Q)}function zL(A,B,Q){return JR(A,Q)?!Q.options.lazyFetching||!A.fetchRange||A.isFetching||B.start<A.fetchRange.start||B.end>A.fetchRange.end:!A.latestFetchId}function tF(A,B,Q,e,t){var n={};for(var g in A){var E=A[g];B[g]?n[g]=PL(E,Q,e,t):n[g]=E}return n}function PL(A,B,Q,e){var t=e.options,n=e.calendarApi,g=e.pluginHooks.eventSourceDefs[A.sourceDefId],E=wE();return g.fetch({eventSource:A,range:B,isRefetch:Q,context:e},function(r){var C=r.rawEvents;t.eventSourceSuccess&&(C=t.eventSourceSuccess.call(n,C,r.xhr)||C),A.success&&(C=A.success.call(n,C,r.xhr)||C),e.dispatch({type:"RECEIVE_EVENTS",sourceId:A.sourceId,fetchId:E,fetchRange:B,rawEvents:C})},function(r){console.warn(r.message,r),t.eventSourceFailure&&t.eventSourceFailure.call(n,r),A.failure&&A.failure(r),e.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:A.sourceId,fetchId:E,fetchRange:B,error:r})}),m(m({},A),{isFetching:!0,latestFetchId:E})}function KL(A,B,Q,e){var t,n=A[B];return n&&Q===n.latestFetchId?m(m({},A),(t={},t[B]=m(m({},n),{isFetching:!1,fetchRange:e}),t)):A}function kR(A,B){return Xn(A,function(Q){return JR(Q,B)})}function jL(A,B){var Q=cR(B),e=[].concat(A.eventSources||[]),t=[];A.initialEvents&&e.unshift(A.initialEvents),A.events&&e.unshift(A.events);for(var n=0,g=e;n<g.length;n++){var E=g[n],r=lR(E,B,Q);r&&t.push(r)}return t}function JR(A,B){var Q=B.pluginHooks.eventSourceDefs;return!Q[A.sourceDefId].ignoreRange}function qL(A,B,Q,e,t){switch(B.type){case"RECEIVE_EVENTS":return _L(A,Q[B.sourceId],B.fetchId,B.fetchRange,B.rawEvents,t);case"ADD_EVENTS":return AX(A,B.eventStore,e?e.activeRange:null,t);case"RESET_EVENTS":return B.eventStore;case"MERGE_EVENTS":return PD(A,B.eventStore);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return e?QE(A,e.activeRange,t):A;case"REMOVE_EVENTS":return oZ(A,B.eventStore);case"REMOVE_EVENT_SOURCE":return SR(A,B.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return Ds(A,function(n){return!n.sourceId});case"REMOVE_ALL_EVENTS":return jQ();default:return A}}function _L(A,B,Q,e,t,n){if(B&&Q===B.latestFetchId){var g=zo($L(t,B,n),B,n);return e&&(g=QE(g,e,n)),PD(SR(A,B.sourceId),g)}return A}function $L(A,B,Q){var e=Q.options.eventDataTransform,t=B?B.eventDataTransform:null;return t&&(A=bU(A,t)),e&&(A=bU(A,e)),A}function bU(A,B){var Q;if(!B)Q=A;else{Q=[];for(var e=0,t=A;e<t.length;e++){var n=t[e],g=B(n);g?Q.push(g):g==null&&Q.push(n)}}return Q}function AX(A,B,Q,e){return Q&&(B=QE(B,Q,e)),PD(A,B)}function BX(A,B,Q){var e=A.defs,t=qn(A.instances,function(n){var g=e[n.defId];return g.allDay||g.recurringDef?n:m(m({},n),{range:{start:Q.createMarker(B.toDate(n.range.start,n.forcedStartTzo)),end:Q.createMarker(B.toDate(n.range.end,n.forcedEndTzo))},forcedStartTzo:Q.canComputeOffset?null:n.forcedStartTzo,forcedEndTzo:Q.canComputeOffset?null:n.forcedEndTzo})});return{defs:e,instances:t}}function SR(A,B){return Ds(A,function(Q){return Q.sourceId!==B})}function QX(A,B){return{defs:A.defs,instances:Xn(A.instances,function(Q){return!B[Q.instanceId]})}}function eX(A,B){switch(B.type){case"UNSELECT_DATES":return null;case"SELECT_DATES":return B.selection;default:return A}}function tX(A,B){switch(B.type){case"UNSELECT_EVENT":return"";case"SELECT_EVENT":return B.eventInstanceId;default:return A}}function nX(A,B){var Q;switch(B.type){case"UNSET_EVENT_DRAG":return null;case"SET_EVENT_DRAG":return Q=B.state,{affectedEvents:Q.affectedEvents,mutatedEvents:Q.mutatedEvents,isEvent:Q.isEvent};default:return A}}function gX(A,B){var Q;switch(B.type){case"UNSET_EVENT_RESIZE":return null;case"SET_EVENT_RESIZE":return Q=B.state,{affectedEvents:Q.affectedEvents,mutatedEvents:Q.mutatedEvents,isEvent:Q.isEvent};default:return A}}function EX(A,B,Q,e,t){var n=A.headerToolbar?kU(A.headerToolbar,A,B,Q,e,t):null,g=A.footerToolbar?kU(A.footerToolbar,A,B,Q,e,t):null;return{header:n,footer:g}}function kU(A,B,Q,e,t,n){var g={},E=[],r=!1;for(var C in A){var i=A[C],o=rX(i,B,Q,e,t,n);g[C]=o.widgets,E.push.apply(E,o.viewsWithButtons),r=r||o.hasTitle}return{sectionWidgets:g,viewsWithButtons:E,hasTitle:r}}function rX(A,B,Q,e,t,n){var g=B.direction==="rtl",E=B.customButtons||{},r=Q.buttonText||{},C=B.buttonText||{},i=Q.buttonHints||{},o=B.buttonHints||{},a=A?A.split(" "):[],s=[],I=!1,D=a.map(function(c){return c.split(",").map(function(l){if(l==="title")return I=!0,{buttonName:l};var w,u,f,M,p,h;if(w=E[l])f=function(k){w.click&&w.click.call(k.target,k,k.target)},(M=e.getCustomButtonIconClass(w))||(M=e.getIconClass(l,g))||(p=w.text),h=w.hint||w.text;else if(u=t[l]){s.push(l),f=function(){n.changeView(l)},(p=u.buttonTextOverride)||(M=e.getIconClass(l,g))||(p=u.buttonTextDefault);var G=u.buttonTextOverride||u.buttonTextDefault;h=Yr(u.buttonTitleOverride||u.buttonTitleDefault||B.viewHint,[G,l],G)}else if(n[l])if(f=function(){n[l]()},(p=r[l])||(M=e.getIconClass(l,g))||(p=C[l]),l==="prevYear"||l==="nextYear"){var J=l==="prevYear"?"prev":"next";h=Yr(i[J]||o[J],[C.year||"year","year"],C[l])}else h=function(k){return Yr(i[l]||o[l],[C[k]||k,k],C[l])};return{buttonName:l,buttonClick:f,buttonIcon:M,buttonText:p,buttonHint:h}})});return{widgets:D,viewsWithButtons:s,hasTitle:I}}var CX={ignoreRange:!0,parseMeta:function(A){return Array.isArray(A.events)?A.events:null},fetch:function(A,B){B({rawEvents:A.eventSource.meta})}},iX=jt({eventSourceDefs:[CX]}),oX={parseMeta:function(A){return typeof A.events=="function"?A.events:null},fetch:function(A,B,Q){var e=A.context.dateEnv,t=A.eventSource.meta;FL(t.bind(null,aR(A.range,e)),function(n){B({rawEvents:n})},Q)}},aX=jt({eventSourceDefs:[oX]});function sX(A,B,Q,e,t){A=A.toUpperCase();var n=null;A==="GET"?B=IX(B,Q):n=ZR(Q);var g=new XMLHttpRequest;g.open(A,B,!0),A!=="GET"&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g.onload=function(){if(g.status>=200&&g.status<400){var E=!1,r=void 0;try{r=JSON.parse(g.responseText),E=!0}catch{}E?e(r,g):t("Failure parsing JSON",g)}else t("Request failed",g)},g.onerror=function(){t("Request failed",g)},g.send(n)}function IX(A,B){return A+(A.indexOf("?")===-1?"?":"&")+ZR(B)}function ZR(A){var B=[];for(var Q in A)B.push(encodeURIComponent(Q)+"="+encodeURIComponent(A[Q]));return B.join("&")}var lX={method:String,extraParams:v,startParam:String,endParam:String,timeZoneParam:String},cX={parseMeta:function(A){return A.url&&(A.format==="json"||!A.format)?{url:A.url,format:"json",method:(A.method||"GET").toUpperCase(),extraParams:A.extraParams,startParam:A.startParam,endParam:A.endParam,timeZoneParam:A.timeZoneParam}:null},fetch:function(A,B,Q){var e=A.eventSource.meta,t=DX(e,A.range,A.context);sX(e.method,e.url,t,function(n,g){B({rawEvents:n,xhr:g})},function(n,g){Q({message:n,xhr:g})})}},wX=jt({eventSourceRefiners:lX,eventSourceDefs:[cX]});function DX(A,B,Q){var e=Q.dateEnv,t=Q.options,n,g,E,r,C={};return n=A.startParam,n==null&&(n=t.startParam),g=A.endParam,g==null&&(g=t.endParam),E=A.timeZoneParam,E==null&&(E=t.timeZoneParam),typeof A.extraParams=="function"?r=A.extraParams():r=A.extraParams||{},m(C,r),C[n]=e.formatIso(B.start),C[g]=e.formatIso(B.end),e.timeZone!=="local"&&(C[E]=e.timeZone),C}var FX={daysOfWeek:v,startTime:MA,endTime:MA,duration:MA,startRecur:v,endRecur:v},uX={parse:function(A,B){if(A.daysOfWeek||A.startTime||A.endTime||A.startRecur||A.endRecur){var Q={daysOfWeek:A.daysOfWeek||null,startTime:A.startTime||null,endTime:A.endTime||null,startRecur:A.startRecur?B.createMarker(A.startRecur):null,endRecur:A.endRecur?B.createMarker(A.endRecur):null},e=void 0;return A.duration&&(e=A.duration),!e&&A.startTime&&A.endTime&&(e=OS(A.endTime,A.startTime)),{allDayGuess:Boolean(!A.startTime&&!A.endTime),duration:e,typeData:Q}}return null},expand:function(A,B,Q){var e=CC(B,{start:A.startRecur,end:A.endRecur});return e?fX(A.daysOfWeek,A.startTime,e,Q):[]}},dX=jt({recurringTypes:[uX],eventRefiners:FX});function fX(A,B,Q,e){for(var t=A?QR(A):null,n=HA(Q.start),g=Q.end,E=[];n<g;){var r=void 0;(!t||t[n.getUTCDay()])&&(B?r=e.add(n,B):r=n,E.push(r)),n=KB(n,1)}return E}var UX=jt({optionChangeHandlers:{events:function(A,B){JU([A],B)},eventSources:JU}});function JU(A,B){for(var Q=OD(B.getCurrentData().eventSources),e=[],t=0,n=A;t<n.length;t++){for(var g=n[t],E=!1,r=0;r<Q.length;r+=1)if(Q[r]._raw===g){Q.splice(r,1),E=!0;break}E||e.push(g)}for(var C=0,i=Q;C<i.length;C++){var o=i[C];B.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:o.sourceId})}for(var a=0,s=e;a<s.length;a++){var I=s[a];B.calendarApi.addEventSource(I)}}function MX(A,B){B.emitter.trigger("datesSet",m(m({},aR(A.activeRange,B.dateEnv)),{view:B.viewApi}))}function hX(A,B){var Q=B.emitter;Q.hasHandlers("eventsSet")&&Q.trigger("eventsSet",mn(A,B))}var pX=[iX,aX,wX,dX,UX,jt({isLoadingFuncs:[function(A){return yR(A.eventSources)}],contentTypeHandlers:{html:GX,domNodes:RX},propSetHandlers:{dateProfile:MX,eventStore:hX}})];function GX(){var A=null,B="";function Q(t,n){(t!==A||n!==B)&&(t.innerHTML=n),A=t,B=n}function e(){A.innerHTML="",A=null,B=""}return{render:Q,destroy:e}}function RX(){var A=null,B=[];function Q(t,n){var g=Array.prototype.slice.call(n);if(t!==A||!rC(B,g)){for(var E=0,r=g;E<r.length;E++){var C=r[E];t.appendChild(C)}e()}A=t,B=g}function e(){B.forEach(LD),B=[],A=null}return{render:Q,destroy:e}}var LR=function(){function A(B){this.drainedOption=B,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}return A.prototype.request=function(B){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),B==null?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),B))},A.prototype.pause=function(B){B===void 0&&(B="");var Q=this.pauseDepths;Q[B]=(Q[B]||0)+1,this.clearTimeout()},A.prototype.resume=function(B,Q){B===void 0&&(B="");var e=this.pauseDepths;if(B in e){if(Q)delete e[B];else{e[B]-=1;var t=e[B];t<=0&&delete e[B]}this.tryDrain()}},A.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length},A.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained();this.isRunning=!1}},A.prototype.clear=function(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}},A.prototype.clearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)},A.prototype.drained=function(){this.drainedOption&&this.drainedOption()},A}(),mX=function(){function A(B,Q){this.runTaskOption=B,this.drainedOption=Q,this.queue=[],this.delayedRunner=new LR(this.drain.bind(this))}return A.prototype.request=function(B,Q){this.queue.push(B),this.delayedRunner.request(Q)},A.prototype.pause=function(B){this.delayedRunner.pause(B)},A.prototype.resume=function(B,Q){this.delayedRunner.resume(B,Q)},A.prototype.drain=function(){for(var B=this.queue;B.length;){for(var Q=[],e=void 0;e=B.shift();)this.runTask(e),Q.push(e);this.drained(Q)}},A.prototype.runTask=function(B){this.runTaskOption&&this.runTaskOption(B)},A.prototype.drained=function(B){this.drainedOption&&this.drainedOption(B)},A}();function YX(A,B,Q){var e;return/^(year|month)$/.test(A.currentRangeUnit)?e=A.currentRange:e=A.activeRange,Q.formatRange(e.start,e.end,MB(B.titleFormat||NX(A)),{isEndExclusive:A.isRangeAllDay,defaultSeparator:B.titleRangeSeparator})}function NX(A){var B=A.currentRangeUnit;if(B==="year")return{year:"numeric"};if(B==="month")return{year:"numeric",month:"long"};var Q=Wo(A.currentRange.start,A.currentRange.end);return Q!==null&&Q>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}var yX=function(){function A(B){var Q=this;this.computeOptionsData=dA(this._computeOptionsData),this.computeCurrentViewData=dA(this._computeCurrentViewData),this.organizeRawLocales=dA($Z),this.buildLocale=dA(dR),this.buildPluginHooks=mL(),this.buildDateEnv=dA(vX),this.buildTheme=dA(bX),this.parseToolbars=dA(EX),this.buildViewSpecs=dA(SL),this.buildDateProfileGenerator=Co(kX),this.buildViewApi=dA(JX),this.buildViewUiProps=Co(LX),this.buildEventUiBySource=dA(SX,Ke),this.buildEventUiBases=dA(ZX),this.parseContextBusinessHours=Co(XX),this.buildTitle=dA(YX),this.emitter=new us,this.actionRunner=new mX(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.getCurrentData=function(){return Q.data},this.dispatch=function(u){Q.actionRunner.request(u)},this.props=B,this.actionRunner.pause();var e={},t=this.computeOptionsData(B.optionOverrides,e,B.calendarApi),n=t.calendarOptions.initialView||t.pluginHooks.initialView,g=this.computeCurrentViewData(n,t,B.optionOverrides,e);B.calendarApi.currentDataManager=this,this.emitter.setThisContext(B.calendarApi),this.emitter.setOptions(g.options);var E=OZ(t.calendarOptions,t.dateEnv),r=g.dateProfileGenerator.build(E);Rn(r.activeRange,E)||(E=r.currentRange.start);for(var C={dateEnv:t.dateEnv,options:t.calendarOptions,pluginHooks:t.pluginHooks,calendarApi:B.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},i=0,o=t.pluginHooks.contextInit;i<o.length;i++){var a=o[i];a(C)}for(var s=WL(t.calendarOptions,r,C),I={dynamicOptionOverrides:e,currentViewType:n,currentDate:E,dateProfile:r,businessHours:this.parseContextBusinessHours(C),eventSources:s,eventUiBases:{},eventStore:jQ(),renderableEventStore:jQ(),dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(C).selectionConfig},D=m(m({},C),I),c=0,l=t.pluginHooks.reducers;c<l.length;c++){var w=l[c];m(I,w(null,null,D))}Ql(I,C)&&this.emitter.trigger("loading",!0),this.state=I,this.updateData(),this.actionRunner.resume()}return A.prototype.resetOptions=function(B,Q){var e=this.props;e.optionOverrides=Q?m(m({},e.optionOverrides),B):B,this.actionRunner.request({type:"NOTHING"})},A.prototype._handleAction=function(B){var Q=this,e=Q.props,t=Q.state,n=Q.emitter,g=HL(t.dynamicOptionOverrides,B),E=this.computeOptionsData(e.optionOverrides,g,e.calendarApi),r=XL(t.currentViewType,B),C=this.computeCurrentViewData(r,E,e.optionOverrides,g);e.calendarApi.currentDataManager=this,n.setThisContext(e.calendarApi),n.setOptions(C.options);var i={dateEnv:E.dateEnv,options:E.calendarOptions,pluginHooks:E.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:n,getCurrentData:this.getCurrentData},o=t.currentDate,a=t.dateProfile;this.data&&this.data.dateProfileGenerator!==C.dateProfileGenerator&&(a=C.dateProfileGenerator.build(o)),o=WZ(o,B),a=TL(a,B,o,C.dateProfileGenerator),(B.type==="PREV"||B.type==="NEXT"||!Rn(a.currentRange,o))&&(o=a.currentRange.start);for(var s=OL(t.eventSources,B,a,i),I=qL(t.eventStore,B,s,a,i),D=yR(s),c=D&&!C.options.progressiveEventRendering&&t.renderableEventStore||I,l=this.buildViewUiProps(i),w=l.eventUiSingleBase,u=l.selectionConfig,f=this.buildEventUiBySource(s),M=this.buildEventUiBases(c.defs,w,f),p={dynamicOptionOverrides:g,currentViewType:r,currentDate:o,dateProfile:a,eventSources:s,eventStore:I,renderableEventStore:c,selectionConfig:u,eventUiBases:M,businessHours:this.parseContextBusinessHours(i),dateSelection:eX(t.dateSelection,B),eventSelection:tX(t.eventSelection,B),eventDrag:nX(t.eventDrag,B),eventResize:gX(t.eventResize,B)},h=m(m({},i),p),G=0,J=E.pluginHooks.reducers;G<J.length;G++){var k=J[G];m(p,k(t,B,h))}var S=Ql(t,i),W=Ql(p,i);!S&&W?n.trigger("loading",!0):S&&!W&&n.trigger("loading",!1),this.state=p,e.onAction&&e.onAction(B)},A.prototype.updateData=function(){var B=this,Q=B.props,e=B.state,t=this.data,n=this.computeOptionsData(Q.optionOverrides,e.dynamicOptionOverrides,Q.calendarApi),g=this.computeCurrentViewData(e.currentViewType,n,Q.optionOverrides,e.dynamicOptionOverrides),E=this.data=m(m(m({viewTitle:this.buildTitle(e.dateProfile,g.options,n.dateEnv),calendarApi:Q.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},n),g),e),r=n.pluginHooks.optionChangeHandlers,C=t&&t.calendarOptions,i=n.calendarOptions;if(C&&C!==i){C.timeZone!==i.timeZone&&(e.eventSources=E.eventSources=VL(E.eventSources,e.dateProfile,E),e.eventStore=E.eventStore=BX(E.eventStore,t.dateEnv,E.dateEnv));for(var o in r)C[o]!==i[o]&&r[o](i[o],E)}Q.onData&&Q.onData(E)},A.prototype._computeOptionsData=function(B,Q,e){var t=this.processRawCalendarOptions(B,Q),n=t.refinedOptions,g=t.pluginHooks,E=t.localeDefaults,r=t.availableLocaleData,C=t.extra;SU(C);var i=this.buildDateEnv(n.timeZone,n.locale,n.weekNumberCalculation,n.firstDay,n.weekText,g,r,n.defaultRangeSeparator),o=this.buildViewSpecs(g.views,B,Q,E),a=this.buildTheme(n,g),s=this.parseToolbars(n,B,a,o,e);return{calendarOptions:n,pluginHooks:g,dateEnv:i,viewSpecs:o,theme:a,toolbarConfig:s,localeDefaults:E,availableRawLocales:r.map}},A.prototype.processRawCalendarOptions=function(B,Q){var e=_I([Nr,B,Q]),t=e.locales,n=e.locale,g=this.organizeRawLocales(t),E=g.map,r=this.buildLocale(n||g.defaultCode,E).options,C=this.buildPluginHooks(B.plugins||[],pX),i=this.currentCalendarOptionsRefiners=m(m(m(m(m({},MU),hU),pU),C.listenerRefiners),C.optionRefiners),o={},a=_I([Nr,r,B,Q]),s={},I=this.currentCalendarOptionsInput,D=this.currentCalendarOptionsRefined,c=!1;for(var l in a)l!=="plugins"&&(a[l]===I[l]||an[l]&&l in I&&an[l](I[l],a[l])?s[l]=D[l]:i[l]?(s[l]=i[l](a[l]),c=!0):o[l]=I[l]);return c&&(this.currentCalendarOptionsInput=a,this.currentCalendarOptionsRefined=s),{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:C,availableLocaleData:g,localeDefaults:r,extra:o}},A.prototype._computeCurrentViewData=function(B,Q,e,t){var n=Q.viewSpecs[B];if(!n)throw new Error('viewType "'+B+`" is not available. Please make sure you've loaded all neccessary plugins`);var g=this.processRawViewOptions(n,Q.pluginHooks,Q.localeDefaults,e,t),E=g.refinedOptions,r=g.extra;SU(r);var C=this.buildDateProfileGenerator({dateProfileGeneratorClass:n.optionDefaults.dateProfileGeneratorClass,duration:n.duration,durationUnit:n.durationUnit,usesMinMaxTime:n.optionDefaults.usesMinMaxTime,dateEnv:Q.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:E.slotMinTime,slotMaxTime:E.slotMaxTime,showNonCurrentDates:E.showNonCurrentDates,dayCount:E.dayCount,dateAlignment:E.dateAlignment,dateIncrement:E.dateIncrement,hiddenDays:E.hiddenDays,weekends:E.weekends,nowInput:E.now,validRangeInput:E.validRange,visibleRangeInput:E.visibleRange,monthMode:E.monthMode,fixedWeekCount:E.fixedWeekCount}),i=this.buildViewApi(B,this.getCurrentData,Q.dateEnv);return{viewSpec:n,options:E,dateProfileGenerator:C,viewApi:i}},A.prototype.processRawViewOptions=function(B,Q,e,t,n){var g=_I([Nr,B.optionDefaults,e,t,B.optionOverrides,n]),E=m(m(m(m(m(m({},MU),hU),pU),CZ),Q.listenerRefiners),Q.optionRefiners),r={},C=this.currentViewOptionsInput,i=this.currentViewOptionsRefined,o=!1,a={};for(var s in g)g[s]===C[s]||an[s]&&an[s](g[s],C[s])?r[s]=i[s]:(g[s]===this.currentCalendarOptionsInput[s]||an[s]&&an[s](g[s],this.currentCalendarOptionsInput[s])?s in this.currentCalendarOptionsRefined&&(r[s]=this.currentCalendarOptionsRefined[s]):E[s]?r[s]=E[s](g[s]):a[s]=g[s],o=!0);return o&&(this.currentViewOptionsInput=g,this.currentViewOptionsRefined=r),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:a}},A}();function vX(A,B,Q,e,t,n,g,E){var r=dR(B||g.defaultCode,g.map);return new qZ({calendarSystem:"gregory",timeZone:A,namedTimeZoneImpl:n.namedTimeZonedImpl,locale:r,weekNumberCalculation:Q,firstDay:e,weekText:t,cmdFormatter:n.cmdFormatter,defaultSeparator:E})}function bX(A,B){var Q=B.themeClasses[A.themeSystem]||qt;return new Q(A)}function kX(A){var B=A.dateProfileGeneratorClass||NR;return new B(A)}function JX(A,B,Q){return new XZ(A,B,Q)}function SX(A){return qn(A,function(B){return B.ui})}function ZX(A,B,Q){var e={"":B};for(var t in A){var n=A[t];n.sourceId&&Q[n.sourceId]&&(e[t]=Q[n.sourceId])}return e}function LX(A){var B=A.options;return{eventUiSingleBase:Ko({display:B.eventDisplay,editable:B.editable,startEditable:B.eventStartEditable,durationEditable:B.eventDurationEditable,constraint:B.eventConstraint,overlap:typeof B.eventOverlap=="boolean"?B.eventOverlap:void 0,allow:B.eventAllow,backgroundColor:B.eventBackgroundColor,borderColor:B.eventBorderColor,textColor:B.eventTextColor,color:B.eventColor},A),selectionConfig:Ko({constraint:B.selectConstraint,overlap:typeof B.selectOverlap=="boolean"?B.selectOverlap:void 0,allow:B.selectAllow},A)}}function Ql(A,B){for(var Q=0,e=B.pluginHooks.isLoadingFuncs;Q<e.length;Q++){var t=e[Q];if(t(A))return!0}return!1}function XX(A){return eL(A.options.businessHours,A)}function SU(A,B){for(var Q in A)console.warn("Unknown option '"+Q+"'"+(B?" for view '"+B+"'":""))}var HX=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;return e.handleData=function(t){e.dataManager?e.setState(t):e.state=t},e.dataManager=new yX({optionOverrides:Q.optionOverrides,calendarApi:Q.calendarApi,onData:e.handleData}),e}return B.prototype.render=function(){return this.props.children(this.state)},B.prototype.componentDidUpdate=function(Q){var e=this.props.optionOverrides;e!==Q.optionOverrides&&this.dataManager.resetOptions(e)},B}(ZD),TX=function(){function A(){this.strictOrder=!1,this.allowReslicing=!1,this.maxCoord=-1,this.maxStackCnt=-1,this.levelCoords=[],this.entriesByLevel=[],this.stackCnts={}}return A.prototype.addSegs=function(B){for(var Q=[],e=0,t=B;e<t.length;e++){var n=t[e];this.insertEntry(n,Q)}return Q},A.prototype.insertEntry=function(B,Q){var e=this.findInsertion(B);return this.isInsertionValid(e,B)?(this.insertEntryAt(B,e),1):this.handleInvalidInsertion(e,B,Q)},A.prototype.isInsertionValid=function(B,Q){return(this.maxCoord===-1||B.levelCoord+Q.thickness<=this.maxCoord)&&(this.maxStackCnt===-1||B.stackCnt<this.maxStackCnt)},A.prototype.handleInvalidInsertion=function(B,Q,e){return this.allowReslicing&&B.touchingEntry?this.splitEntry(Q,B.touchingEntry,e):(e.push(Q),0)},A.prototype.splitEntry=function(B,Q,e){var t=0,n=[],g=B.span,E=Q.span;return g.start<E.start&&(t+=this.insertEntry({index:B.index,thickness:B.thickness,span:{start:g.start,end:E.start}},n)),g.end>E.end&&(t+=this.insertEntry({index:B.index,thickness:B.thickness,span:{start:E.end,end:g.end}},n)),t?(e.push.apply(e,jA([{index:B.index,thickness:B.thickness,span:XR(E,g)}],n)),t):(e.push(B),0)},A.prototype.insertEntryAt=function(B,Q){var e=this,t=e.entriesByLevel,n=e.levelCoords;Q.lateral===-1?(el(n,Q.level,Q.levelCoord),el(t,Q.level,[B])):el(t[Q.level],Q.lateral,B),this.stackCnts[vr(B)]=Q.stackCnt},A.prototype.findInsertion=function(B){for(var Q=this,e=Q.levelCoords,t=Q.entriesByLevel,n=Q.strictOrder,g=Q.stackCnts,E=e.length,r=0,C=-1,i=-1,o=null,a=0,s=0;s<E;s+=1){var I=e[s];if(!n&&I>=r+B.thickness)break;for(var D=t[s],c=void 0,l=LU(D,B.span.start,ZU),w=l[0]+l[1];(c=D[w])&&c.span.start<B.span.end;){var u=I+c.thickness;u>r&&(r=u,o=c,C=s,i=w),u===r&&(a=Math.max(a,g[vr(c)]+1)),w+=1}}var f=0;if(o)for(f=C+1;f<E&&e[f]<r;)f+=1;var M=-1;return f<E&&e[f]===r&&(M=LU(t[f],B.span.end,ZU)[0]),{touchingLevel:C,touchingLateral:i,touchingEntry:o,stackCnt:a,levelCoord:r,level:f,lateral:M}},A.prototype.toRects=function(){for(var B=this,Q=B.entriesByLevel,e=B.levelCoords,t=Q.length,n=[],g=0;g<t;g+=1)for(var E=Q[g],r=e[g],C=0,i=E;C<i.length;C++){var o=i[C];n.push(m(m({},o),{levelCoord:r}))}return n},A}();function ZU(A){return A.span.end}function vr(A){return A.index+":"+A.span.start}function XR(A,B){var Q=Math.max(A.start,B.start),e=Math.min(A.end,B.end);return Q<e?{start:Q,end:e}:null}function el(A,B,Q){A.splice(B,0,Q)}function LU(A,B,Q){var e=0,t=A.length;if(!t||B<Q(A[e]))return[0,0];if(B>Q(A[t-1]))return[t,0];for(;e<t;){var n=Math.floor(e+(t-e)/2),g=Q(A[n]);if(B<g)t=n;else if(B>g)e=n+1;else return[n,1]}return[e,0]}var dE=function(){function A(B){this.component=B.component,this.isHitComboAllowed=B.isHitComboAllowed||null}return A.prototype.destroy=function(){},A}();function WX(A,B){return{component:A,el:B.el,useEventCenter:B.useEventCenter!=null?B.useEventCenter:!0,isHitComboAllowed:B.isHitComboAllowed||null}}function nF(A){var B;return B={},B[A.component.uid]=A,B}var Pc={},HR=function(){function A(B,Q){this.emitter=new us}return A.prototype.destroy=function(){},A.prototype.setMirrorIsVisible=function(B){},A.prototype.setMirrorNeedsRevert=function(B){},A.prototype.setAutoScrollEnabled=function(B){},A}(),gF={},OX=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this,e=this.props.widgetGroups.map(function(t){return Q.renderWidgetGroup(t)});return b.apply(void 0,jA(["div",{className:"fc-toolbar-chunk"}],e))},B.prototype.renderWidgetGroup=function(Q){for(var e=this.props,t=this.context.theme,n=[],g=!0,E=0,r=Q;E<r.length;E++){var C=r[E],i=C.buttonName,o=C.buttonClick,a=C.buttonText,s=C.buttonIcon,I=C.buttonHint;if(i==="title")g=!1,n.push(b("h2",{className:"fc-toolbar-title",id:e.titleId},e.title));else{var D=i===e.activeButton,c=!e.isTodayEnabled&&i==="today"||!e.isPrevEnabled&&i==="prev"||!e.isNextEnabled&&i==="next",l=["fc-"+i+"-button",t.getClass("button")];D&&l.push(t.getClass("buttonActive")),n.push(b("button",{type:"button",title:typeof I=="function"?I(e.navUnit):I,disabled:c,"aria-pressed":D,className:l.join(" "),onClick:o},a||(s?b("span",{className:s}):"")))}}if(n.length>1){var w=g&&t.getClass("buttonGroup")||"";return b.apply(void 0,jA(["div",{className:w}],n))}return n[0]},B}(TA),XU=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this.props,e=Q.model,t=Q.extraClassName,n=!1,g,E,r=e.sectionWidgets,C=r.center;r.left?(n=!0,g=r.left):g=r.start,r.right?(n=!0,E=r.right):E=r.end;var i=[t||"","fc-toolbar",n?"fc-toolbar-ltr":""];return b("div",{className:i.join(" ")},this.renderSection("start",g||[]),this.renderSection("center",C||[]),this.renderSection("end",E||[]))},B.prototype.renderSection=function(Q,e){var t=this.props;return b(OX,{key:Q,widgetGroups:e,title:t.title,navUnit:t.navUnit,activeButton:t.activeButton,isTodayEnabled:t.isTodayEnabled,isPrevEnabled:t.isPrevEnabled,isNextEnabled:t.isNextEnabled,titleId:t.titleId})},B}(TA),VX=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.state={availableWidth:null},Q.handleEl=function(e){Q.el=e,je(Q.props.elRef,e),Q.updateAvailableWidth()},Q.handleResize=function(){Q.updateAvailableWidth()},Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.state,n=e.aspectRatio,g=["fc-view-harness",n||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"],E="",r="";return n?t.availableWidth!==null?E=t.availableWidth/n:r=1/n*100+"%":E=e.height||"",b("div",{"aria-labelledby":e.labeledById,ref:this.handleEl,className:g.join(" "),style:{height:E,paddingBottom:r}},e.children)},B.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize)},B.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize)},B.prototype.updateAvailableWidth=function(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})},B}(TA),xX=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;return e.handleSegClick=function(t,n){var g=e.component,E=g.context,r=eE(n);if(r&&g.isValidSegDownEl(t.target)){var C=kB(t.target,".fc-event-forced-url"),i=C?C.querySelector("a[href]").href:"";E.emitter.trigger("eventClick",{el:n,event:new qA(g.context,r.eventRange.def,r.eventRange.instance),jsEvent:t,view:E.viewApi}),i&&!t.defaultPrevented&&(window.location.href=i)}},e.destroy=_G(Q.el,"click",".fc-event",e.handleSegClick),e}return B}(dE),zX=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;return e.handleEventElRemove=function(t){t===e.currentSegEl&&e.handleSegLeave(null,e.currentSegEl)},e.handleSegEnter=function(t,n){eE(n)&&(e.currentSegEl=n,e.triggerEvent("eventMouseEnter",t,n))},e.handleSegLeave=function(t,n){e.currentSegEl&&(e.currentSegEl=null,e.triggerEvent("eventMouseLeave",t,n))},e.removeHoverListeners=sS(Q.el,".fc-event",e.handleSegEnter,e.handleSegLeave),e}return B.prototype.destroy=function(){this.removeHoverListeners()},B.prototype.triggerEvent=function(Q,e,t){var n=this.component,g=n.context,E=eE(t);(!e||n.isValidSegDownEl(e.target))&&g.emitter.trigger(Q,{el:t,event:new qA(g,E.eventRange.def,E.eventRange.instance),jsEvent:e,view:g.viewApi})},B}(dE),PX=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.buildViewContext=dA(hL),Q.buildViewPropTransformers=dA(jX),Q.buildToolbarProps=dA(KX),Q.headerRef=JQ(),Q.footerRef=JQ(),Q.interactionsStore={},Q.state={viewLabelId:cs()},Q.registerInteractiveComponent=function(e,t){var n=WX(e,t),g=[xX,zX],E=g.concat(Q.props.pluginHooks.componentInteractions),r=E.map(function(C){return new C(n)});Q.interactionsStore[e.uid]=r,Pc[e.uid]=n},Q.unregisterInteractiveComponent=function(e){var t=Q.interactionsStore[e.uid];if(t){for(var n=0,g=t;n<g.length;n++){var E=g[n];E.destroy()}delete Q.interactionsStore[e.uid]}delete Pc[e.uid]},Q.resizeRunner=new LR(function(){Q.props.emitter.trigger("_resize",!0),Q.props.emitter.trigger("windowResize",{view:Q.props.viewApi})}),Q.handleWindowResize=function(e){var t=Q.props.options;t.handleWindowResize&&e.target===window&&Q.resizeRunner.request(t.windowResizeDelay)},Q}return B.prototype.render=function(){var Q=this.props,e=Q.toolbarConfig,t=Q.options,n=this.buildToolbarProps(Q.viewSpec,Q.dateProfile,Q.dateProfileGenerator,Q.currentDate,ZC(Q.options.now,Q.dateEnv),Q.viewTitle),g=!1,E="",r;Q.isHeightAuto||Q.forPrint?E="":t.height!=null?g=!0:t.contentHeight!=null?E=t.contentHeight:r=Math.max(t.aspectRatio,.5);var C=this.buildViewContext(Q.viewSpec,Q.viewApi,Q.options,Q.dateProfileGenerator,Q.dateEnv,Q.theme,Q.pluginHooks,Q.dispatch,Q.getCurrentData,Q.emitter,Q.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent),i=e.header&&e.header.hasTitle?this.state.viewLabelId:"";return b(_n.Provider,{value:C},e.header&&b(XU,m({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:e.header,titleId:i},n)),b(VX,{liquid:g,height:E,aspectRatio:r,labeledById:i},this.renderView(Q),this.buildAppendContent()),e.footer&&b(XU,m({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:e.footer,titleId:""},n)))},B.prototype.componentDidMount=function(){var Q=this.props;this.calendarInteractions=Q.pluginHooks.calendarInteractions.map(function(n){return new n(Q)}),window.addEventListener("resize",this.handleWindowResize);var e=Q.pluginHooks.propSetHandlers;for(var t in e)e[t](Q[t],Q)},B.prototype.componentDidUpdate=function(Q){var e=this.props,t=e.pluginHooks.propSetHandlers;for(var n in t)e[n]!==Q[n]&&t[n](e[n],e)},B.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear();for(var Q=0,e=this.calendarInteractions;Q<e.length;Q++){var t=e[Q];t.destroy()}this.props.emitter.trigger("_unmount")},B.prototype.buildAppendContent=function(){var Q=this.props,e=Q.pluginHooks.viewContainerAppends.map(function(t){return t(Q)});return b.apply(void 0,jA([tQ,{}],e))},B.prototype.renderView=function(Q){for(var e=Q.pluginHooks,t=Q.viewSpec,n={dateProfile:Q.dateProfile,businessHours:Q.businessHours,eventStore:Q.renderableEventStore,eventUiBases:Q.eventUiBases,dateSelection:Q.dateSelection,eventSelection:Q.eventSelection,eventDrag:Q.eventDrag,eventResize:Q.eventResize,isHeightAuto:Q.isHeightAuto,forPrint:Q.forPrint},g=this.buildViewPropTransformers(e.viewPropsTransformers),E=0,r=g;E<r.length;E++){var C=r[E];m(n,C.transform(n,Q))}var i=t.component;return b(i,m({},n))},B}(ds);function KX(A,B,Q,e,t,n){var g=Q.build(t,void 0,!1),E=Q.buildPrev(B,e,!1),r=Q.buildNext(B,e,!1);return{title:n,activeButton:A.type,navUnit:A.singleUnit,isTodayEnabled:g.isValid&&!Rn(B.currentRange,t),isPrevEnabled:E.isValid,isNextEnabled:r.isValid}}function jX(A){return A.map(function(B){return new B})}var qX=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.state={forPrint:!1},Q.handleBeforePrint=function(){Q.setState({forPrint:!0})},Q.handleAfterPrint=function(){Q.setState({forPrint:!1})},Q}return B.prototype.render=function(){var Q=this.props,e=Q.options,t=this.state.forPrint,n=t||e.height==="auto"||e.contentHeight==="auto",g=!n&&e.height!=null?e.height:"",E=["fc",t?"fc-media-print":"fc-media-screen","fc-direction-"+e.direction,Q.theme.getClass("root")];return MR()||E.push("fc-liquid-hack"),Q.children(E,g,n,t)},B.prototype.componentDidMount=function(){var Q=this.props.emitter;Q.on("_beforeprint",this.handleBeforePrint),Q.on("_afterprint",this.handleAfterPrint)},B.prototype.componentWillUnmount=function(){var Q=this.props.emitter;Q.off("_beforeprint",this.handleBeforePrint),Q.off("_afterprint",this.handleAfterPrint)},B}(TA);function _X(A,B){return!A||B>10?MB({weekday:"short"}):B>1?MB({weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}):MB({weekday:"long"})}var TR="fc-col-header-cell";function WR(A){return A.text}var $X=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this.context,e=Q.dateEnv,t=Q.options,n=Q.theme,g=Q.viewApi,E=this.props,r=E.date,C=E.dateProfile,i=hR(r,E.todayRange,null,C),o=[TR].concat($D(i,n)),a=e.format(r,E.dayHeaderFormat),s=!i.isDisabled&&E.colCnt>1?AF(this.context,r):{},I=m(m(m({date:e.toDate(r),view:g},E.extraHookProps),{text:a}),i);return b(uE,{hookProps:I,classNames:t.dayHeaderClassNames,content:t.dayHeaderContent,defaultContent:WR,didMount:t.dayHeaderDidMount,willUnmount:t.dayHeaderWillUnmount},function(D,c,l,w){return b("th",m({ref:D,role:"columnheader",className:o.concat(c).join(" "),"data-date":i.isDisabled?void 0:eR(r),colSpan:E.colSpan},E.extraDataAttrs),b("div",{className:"fc-scrollgrid-sync-inner"},!i.isDisabled&&b("a",m({ref:l,className:["fc-col-header-cell-cushion",E.isSticky?"fc-sticky":""].join(" ")},s),w)))})},B}(TA),AH=MB({weekday:"long"}),BH=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this.props,e=this.context,t=e.dateEnv,n=e.theme,g=e.viewApi,E=e.options,r=KB(new Date(2592e5),Q.dow),C={dow:Q.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},i=[TR].concat($D(C,n),Q.extraClassNames||[]),o=t.format(r,Q.dayHeaderFormat),a=m(m(m(m({date:r},C),{view:g}),Q.extraHookProps),{text:o});return b(uE,{hookProps:a,classNames:E.dayHeaderClassNames,content:E.dayHeaderContent,defaultContent:WR,didMount:E.dayHeaderDidMount,willUnmount:E.dayHeaderWillUnmount},function(s,I,D,c){return b("th",m({ref:s,role:"columnheader",className:i.concat(I).join(" "),colSpan:Q.colSpan},Q.extraDataAttrs),b("div",{className:"fc-scrollgrid-sync-inner"},b("a",{"aria-label":t.format(r,AH),className:["fc-col-header-cell-cushion",Q.isSticky?"fc-sticky":""].join(" "),ref:D},c)))})},B}(TA),OR=function(A){BA(B,A);function B(Q,e){var t=A.call(this,Q,e)||this;return t.initialNowDate=ZC(e.options.now,e.dateEnv),t.initialNowQueriedMs=new Date().valueOf(),t.state=t.computeTiming().currentState,t}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.state;return e.children(t.nowDate,t.todayRange)},B.prototype.componentDidMount=function(){this.setTimeout()},B.prototype.componentDidUpdate=function(Q){Q.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())},B.prototype.componentWillUnmount=function(){this.clearTimeout()},B.prototype.computeTiming=function(){var Q=this,e=Q.props,t=Q.context,n=Ln(this.initialNowDate,new Date().valueOf()-this.initialNowQueriedMs),g=t.dateEnv.startOf(n,e.unit),E=t.dateEnv.add(g,MA(1,e.unit)),r=E.valueOf()-n.valueOf();return r=Math.min(1e3*60*60*24,r),{currentState:{nowDate:g,todayRange:HU(g)},nextState:{nowDate:E,todayRange:HU(E)},waitMs:r}},B.prototype.setTimeout=function(){var Q=this,e=this.computeTiming(),t=e.nextState,n=e.waitMs;this.timeoutId=setTimeout(function(){Q.setState(t,function(){Q.setTimeout()})},n)},B.prototype.clearTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId)},B.contextType=_n,B}(ZD);function HU(A){var B=HA(A),Q=KB(B,1);return{start:B,end:Q}}var QH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.createDayHeaderFormatter=dA(eH),Q}return B.prototype.render=function(){var Q=this.context,e=this.props,t=e.dates,n=e.dateProfile,g=e.datesRepDistinctDays,E=e.renderIntro,r=this.createDayHeaderFormatter(Q.options.dayHeaderFormat,g,t.length);return b(OR,{unit:"day"},function(C,i){return b("tr",{role:"row"},E&&E("day"),t.map(function(o){return g?b($X,{key:o.toISOString(),date:o,dateProfile:n,todayRange:i,colCnt:t.length,dayHeaderFormat:r}):b(BH,{key:o.getUTCDay(),dow:o.getUTCDay(),dayHeaderFormat:r})}))})},B}(TA);function eH(A,B,Q){return A||_X(B,Q)}var tH=function(){function A(B,Q){for(var e=B.start,t=B.end,n=[],g=[],E=-1;e<t;)Q.isHiddenDay(e)?n.push(E+.5):(E+=1,n.push(E),g.push(e)),e=KB(e,1);this.dates=g,this.indices=n,this.cnt=g.length}return A.prototype.sliceRange=function(B){var Q=this.getDateDayIndex(B.start),e=this.getDateDayIndex(KB(B.end,-1)),t=Math.max(0,Q),n=Math.min(this.cnt-1,e);return t=Math.ceil(t),n=Math.floor(n),t<=n?{firstIndex:t,lastIndex:n,isStart:Q===t,isEnd:e===n}:null},A.prototype.getDateDayIndex=function(B){var Q=this.indices,e=Math.floor(DE(this.dates[0],B));return e<0?Q[0]-1:e>=Q.length?Q[Q.length-1]+1:Q[e]},A}(),nH=function(){function A(B,Q){var e=B.dates,t,n,g;if(Q){for(n=e[0].getUTCDay(),t=1;t<e.length&&e[t].getUTCDay()!==n;t+=1);g=Math.ceil(e.length/t)}else g=1,t=e.length;this.rowCnt=g,this.colCnt=t,this.daySeries=B,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return A.prototype.buildCells=function(){for(var B=[],Q=0;Q<this.rowCnt;Q+=1){for(var e=[],t=0;t<this.colCnt;t+=1)e.push(this.buildCell(Q,t));B.push(e)}return B},A.prototype.buildCell=function(B,Q){var e=this.daySeries.dates[B*this.colCnt+Q];return{key:e.toISOString(),date:e}},A.prototype.buildHeaderDates=function(){for(var B=[],Q=0;Q<this.colCnt;Q+=1)B.push(this.cells[0][Q].date);return B},A.prototype.sliceRange=function(B){var Q=this.colCnt,e=this.daySeries.sliceRange(B),t=[];if(e)for(var n=e.firstIndex,g=e.lastIndex,E=n;E<=g;){var r=Math.floor(E/Q),C=Math.min((r+1)*Q,g+1);t.push({row:r,firstCol:E%Q,lastCol:(C-1)%Q,isStart:e.isStart&&E===n,isEnd:e.isEnd&&C-1===g}),E=C}return t},A}(),gH=function(){function A(){this.sliceBusinessHours=dA(this._sliceBusinessHours),this.sliceDateSelection=dA(this._sliceDateSpan),this.sliceEventStore=dA(this._sliceEventStore),this.sliceEventDrag=dA(this._sliceInteraction),this.sliceEventResize=dA(this._sliceInteraction),this.forceDayIfListItem=!1}return A.prototype.sliceProps=function(B,Q,e,t){for(var n=[],g=4;g<arguments.length;g++)n[g-4]=arguments[g];var E=B.eventUiBases,r=this.sliceEventStore.apply(this,jA([B.eventStore,E,Q,e],n));return{dateSelectionSegs:this.sliceDateSelection.apply(this,jA([B.dateSelection,E,t],n)),businessHourSegs:this.sliceBusinessHours.apply(this,jA([B.businessHours,Q,e,t],n)),fgEventSegs:r.fg,bgEventSegs:r.bg,eventDrag:this.sliceEventDrag.apply(this,jA([B.eventDrag,E,Q,e],n)),eventResize:this.sliceEventResize.apply(this,jA([B.eventResize,E,Q,e],n)),eventSelection:B.eventSelection}},A.prototype.sliceNowDate=function(B,Q){for(var e=[],t=2;t<arguments.length;t++)e[t-2]=arguments[t];return this._sliceDateSpan.apply(this,jA([{range:{start:B,end:Ln(B,1)},allDay:!1},{},Q],e))},A.prototype._sliceBusinessHours=function(B,Q,e,t){for(var n=[],g=4;g<arguments.length;g++)n[g-4]=arguments[g];return B?this._sliceEventStore.apply(this,jA([QE(B,tl(Q,Boolean(e)),t),{},Q,e],n)).bg:[]},A.prototype._sliceEventStore=function(B,Q,e,t){for(var n=[],g=4;g<arguments.length;g++)n[g-4]=arguments[g];if(B){var E=RU(B,Q,tl(e,Boolean(t)),t);return{bg:this.sliceEventRanges(E.bg,n),fg:this.sliceEventRanges(E.fg,n)}}return{bg:[],fg:[]}},A.prototype._sliceInteraction=function(B,Q,e,t){for(var n=[],g=4;g<arguments.length;g++)n[g-4]=arguments[g];if(!B)return null;var E=RU(B.mutatedEvents,Q,tl(e,Boolean(t)),t);return{segs:this.sliceEventRanges(E.fg,n),affectedInstances:B.affectedEvents.instances,isEvent:B.isEvent}},A.prototype._sliceDateSpan=function(B,Q,e){for(var t=[],n=3;n<arguments.length;n++)t[n-3]=arguments[n];if(!B)return[];for(var g=JZ(B,Q,e),E=this.sliceRange.apply(this,jA([B.range],t)),r=0,C=E;r<C.length;r++){var i=C[r];i.eventRange=g}return E},A.prototype.sliceEventRanges=function(B,Q){for(var e=[],t=0,n=B;t<n.length;t++){var g=n[t];e.push.apply(e,this.sliceEventRange(g,Q))}return e},A.prototype.sliceEventRange=function(B,Q){var e=B.range;this.forceDayIfListItem&&B.ui.display==="list-item"&&(e={start:e.start,end:KB(e.start,1)});for(var t=this.sliceRange.apply(this,jA([e],Q)),n=0,g=t;n<g.length;n++){var E=g[n];E.eventRange=B,E.isStart=B.isStart&&E.isStart,E.isEnd=B.isEnd&&E.isEnd}return t},A}();function tl(A,B){var Q=A.activeRange;return B?Q:{start:Ln(Q.start,A.slotMinTime.milliseconds),end:Ln(Q.end,A.slotMaxTime.milliseconds-864e5)}}function VR(A,B,Q){var e=A.mutatedEvents.instances;for(var t in e)if(!Fs(B.validRange,e[t].range))return!1;return xR({eventDrag:A},Q)}function EH(A,B,Q){return Fs(B.validRange,A.range)?xR({dateSelection:A},Q):!1}function xR(A,B){var Q=B.getCurrentData(),e=m({businessHours:Q.businessHours,dateSelection:"",eventStore:Q.eventStore,eventUiBases:Q.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},A);return(B.pluginHooks.isPropsValid||rH)(e,B)}function rH(A,B,Q,e){return Q===void 0&&(Q={}),!(A.eventDrag&&!CH(A,B,Q,e)||A.dateSelection&&!iH(A,B,Q,e))}function CH(A,B,Q,e){var t=B.getCurrentData(),n=A.eventDrag,g=n.mutatedEvents,E=g.defs,r=g.instances,C=jo(E,n.isEvent?A.eventUiBases:{"":t.selectionConfig});e&&(C=qn(C,e));var i=QX(A.eventStore,n.affectedEvents.instances),o=i.defs,a=i.instances,s=jo(o,A.eventUiBases);for(var I in r){var D=r[I],c=D.range,l=C[D.defId],w=E[D.defId];if(!zR(l.constraints,c,i,A.businessHours,B))return!1;var u=B.options.eventOverlap,f=typeof u=="function"?u:null;for(var M in a){var p=a[M];if(jD(c,p.range)){var h=s[p.defId].overlap;if(h===!1&&n.isEvent||l.overlap===!1||f&&!f(new qA(B,o[p.defId],p),new qA(B,w,D)))return!1}}for(var G=t.eventStore,J=0,k=l.allows;J<k.length;J++){var S=k[J],W=m(m({},Q),{range:D.range,allDay:w.allDay}),x=G.defs[w.defId],tA=G.instances[I],P=void 0;if(x?P=new qA(B,x,tA):P=new qA(B,w),!S(qD(W,B),P))return!1}}return!0}function iH(A,B,Q,e){var t=A.eventStore,n=t.defs,g=t.instances,E=A.dateSelection,r=E.range,C=B.getCurrentData().selectionConfig;if(e&&(C=e(C)),!zR(C.constraints,r,t,A.businessHours,B))return!1;var i=B.options.selectOverlap,o=typeof i=="function"?i:null;for(var a in g){var s=g[a];if(jD(r,s.range)&&(C.overlap===!1||o&&!o(new qA(B,n[s.defId],s),null)))return!1}for(var I=0,D=C.allows;I<D.length;I++){var c=D[I],l=m(m({},Q),E);if(!c(qD(l,B),null))return!1}return!0}function zR(A,B,Q,e,t){for(var n=0,g=A;n<g.length;n++){var E=g[n];if(!aH(oH(E,B,Q,e,t),B))return!1}return!0}function oH(A,B,Q,e,t){return A==="businessHours"?nl(QE(e,B,t)):typeof A=="string"?nl(Ds(Q,function(n){return n.groupId===A})):typeof A=="object"&&A?nl(QE(A,B,t)):[]}function nl(A){var B=A.instances,Q=[];for(var e in B)Q.push(B[e].range);return Q}function aH(A,B){for(var Q=0,e=A;Q<e.length;Q++){var t=e[Q];if(Fs(t,B))return!0}return!1}var Xi=/^(visible|hidden)$/,sH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.handleEl=function(e){Q.el=e,je(Q.props.elRef,e)},Q}return B.prototype.render=function(){var Q=this.props,e=Q.liquid,t=Q.liquidIsAbsolute,n=e&&t,g=["fc-scroller"];return e&&(t?g.push("fc-scroller-liquid-absolute"):g.push("fc-scroller-liquid")),b("div",{ref:this.handleEl,className:g.join(" "),style:{overflowX:Q.overflowX,overflowY:Q.overflowY,left:n&&-(Q.overcomeLeft||0)||"",right:n&&-(Q.overcomeRight||0)||"",bottom:n&&-(Q.overcomeBottom||0)||"",marginLeft:!n&&-(Q.overcomeLeft||0)||"",marginRight:!n&&-(Q.overcomeRight||0)||"",marginBottom:!n&&-(Q.overcomeBottom||0)||"",maxHeight:Q.maxHeight||""}},Q.children)},B.prototype.needsXScrolling=function(){if(Xi.test(this.props.overflowX))return!1;for(var Q=this.el,e=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),t=Q.children,n=0;n<t.length;n+=1){var g=t[n];if(g.getBoundingClientRect().width>e)return!0}return!1},B.prototype.needsYScrolling=function(){if(Xi.test(this.props.overflowY))return!1;for(var Q=this.el,e=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),t=Q.children,n=0;n<t.length;n+=1){var g=t[n];if(g.getBoundingClientRect().height>e)return!0}return!1},B.prototype.getXScrollbarWidth=function(){return Xi.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight},B.prototype.getYScrollbarWidth=function(){return Xi.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth},B}(TA),un=function(){function A(B){var Q=this;this.masterCallback=B,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=function(e,t){var n=Q,g=n.depths,E=n.currentMap,r=!1,C=!1;e!==null?(r=t in E,E[t]=e,g[t]=(g[t]||0)+1,C=!0):(g[t]-=1,g[t]||(delete E[t],delete Q.callbackMap[t],r=!0)),Q.masterCallback&&(r&&Q.masterCallback(null,String(t)),C&&Q.masterCallback(e,String(t)))}}return A.prototype.createRef=function(B){var Q=this,e=this.callbackMap[B];return e||(e=this.callbackMap[B]=function(t){Q.handleValue(t,String(B))}),e},A.prototype.collect=function(B,Q,e){return ZS(this.currentMap,B,Q,e)},A.prototype.getAll=function(){return OD(this.currentMap)},A}();function IH(A){for(var B=CS(A,".fc-scrollgrid-shrink"),Q=0,e=0,t=B;e<t.length;e++){var n=t[e];Q=Math.max(Q,MS(n))}return Math.ceil(Q)}function PR(A,B){return A.liquid&&B.liquid}function lH(A,B){return B.maxHeight!=null||PR(A,B)}function cH(A,B,Q,e){var t=Q.expandRows,n=typeof B.content=="function"?B.content(Q):b("table",{role:"presentation",className:[B.tableClassName,A.syncRowHeights?"fc-scrollgrid-sync-table":""].join(" "),style:{minWidth:Q.tableMinWidth,width:Q.clientWidth,height:t?Q.clientHeight:""}},Q.tableColGroupNode,b(e?"thead":"tbody",{role:"presentation"},typeof B.rowContent=="function"?B.rowContent(Q):B.rowContent));return n}function wH(A,B){return rC(A,B,Ke)}function DH(A,B){for(var Q=[],e=0,t=A;e<t.length;e++)for(var n=t[e],g=n.span||1,E=0;E<g;E+=1)Q.push(b("col",{style:{width:n.width==="shrink"?FH(B):n.width||"",minWidth:n.minWidth||""}}));return b.apply(void 0,jA(["colgroup",{}],Q))}function FH(A){return A==null?4:A}function uH(A){for(var B=0,Q=A;B<Q.length;B++){var e=Q[B];if(e.width==="shrink")return!0}return!1}function dH(A,B){var Q=["fc-scrollgrid",B.theme.getClass("table")];return A&&Q.push("fc-scrollgrid-liquid"),Q}function fH(A,B){var Q=["fc-scrollgrid-section","fc-scrollgrid-section-"+A.type,A.className];return B&&A.liquid&&A.maxHeight==null&&Q.push("fc-scrollgrid-section-liquid"),A.isSticky&&Q.push("fc-scrollgrid-section-sticky"),Q}function UH(A){return b("div",{className:"fc-scrollgrid-sticky-shim",style:{width:A.clientWidth,minWidth:A.tableMinWidth}})}function TU(A){var B=A.stickyHeaderDates;return(B==null||B==="auto")&&(B=A.height==="auto"||A.viewHeight==="auto"),B}function MH(A){var B=A.stickyFooterScrollbar;return(B==null||B==="auto")&&(B=A.height==="auto"||A.viewHeight==="auto"),B}var KR=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.processCols=dA(function(e){return e},wH),Q.renderMicroColGroup=dA(DH),Q.scrollerRefs=new un,Q.scrollerElRefs=new un(Q._handleScrollerEl.bind(Q)),Q.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},Q.handleSizing=function(){Q.safeSetState(m({shrinkWidth:Q.computeShrinkWidth()},Q.computeScrollerDims()))},Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.state,n=Q.context,g=e.sections||[],E=this.processCols(e.cols),r=this.renderMicroColGroup(E,t.shrinkWidth),C=dH(e.liquid,n);e.collapsibleWidth&&C.push("fc-scrollgrid-collapsible");for(var i=g.length,o=0,a,s=[],I=[],D=[];o<i&&(a=g[o]).type==="header";)s.push(this.renderSection(a,r,!0)),o+=1;for(;o<i&&(a=g[o]).type==="body";)I.push(this.renderSection(a,r,!1)),o+=1;for(;o<i&&(a=g[o]).type==="footer";)D.push(this.renderSection(a,r,!0)),o+=1;var c=!MR(),l={role:"rowgroup"};return b("table",{role:"grid",className:C.join(" "),style:{height:e.height}},Boolean(!c&&s.length)&&b.apply(void 0,jA(["thead",l],s)),Boolean(!c&&I.length)&&b.apply(void 0,jA(["tbody",l],I)),Boolean(!c&&D.length)&&b.apply(void 0,jA(["tfoot",l],D)),c&&b.apply(void 0,jA(jA(jA(["tbody",l],s),I),D)))},B.prototype.renderSection=function(Q,e,t){return"outerContent"in Q?b(tQ,{key:Q.key},Q.outerContent):b("tr",{key:Q.key,role:"presentation",className:fH(Q,this.props.liquid).join(" ")},this.renderChunkTd(Q,e,Q.chunk,t))},B.prototype.renderChunkTd=function(Q,e,t,n){if("outerContent"in t)return t.outerContent;var g=this.props,E=this.state,r=E.forceYScrollbars,C=E.scrollerClientWidths,i=E.scrollerClientHeights,o=lH(g,Q),a=PR(g,Q),s=g.liquid?r?"scroll":o?"auto":"hidden":"visible",I=Q.key,D=cH(Q,t,{tableColGroupNode:e,tableMinWidth:"",clientWidth:!g.collapsibleWidth&&C[I]!==void 0?C[I]:null,clientHeight:i[I]!==void 0?i[I]:null,expandRows:Q.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:function(){}},n);return b(n?"th":"td",{ref:t.elRef,role:"presentation"},b("div",{className:"fc-scroller-harness"+(a?" fc-scroller-harness-liquid":"")},b(sH,{ref:this.scrollerRefs.createRef(I),elRef:this.scrollerElRefs.createRef(I),overflowY:s,overflowX:g.liquid?"hidden":"visible",maxHeight:Q.maxHeight,liquid:a,liquidIsAbsolute:!0},D)))},B.prototype._handleScrollerEl=function(Q,e){var t=hH(this.props.sections,e);t&&je(t.chunk.scrollerElRef,Q)},B.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},B.prototype.componentDidUpdate=function(){this.handleSizing()},B.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},B.prototype.computeShrinkWidth=function(){return uH(this.props.cols)?IH(this.scrollerElRefs.getAll()):0},B.prototype.computeScrollerDims=function(){var Q=IL(),e=this,t=e.scrollerRefs,n=e.scrollerElRefs,g=!1,E={},r={};for(var C in t.currentMap){var i=t.currentMap[C];if(i&&i.needsYScrolling()){g=!0;break}}for(var o=0,a=this.props.sections;o<a.length;o++){var s=a[o],C=s.key,I=n.currentMap[C];if(I){var D=I.parentNode;E[C]=Math.floor(D.getBoundingClientRect().width-(g?Q.y:0)),r[C]=Math.floor(D.getBoundingClientRect().height)}}return{forceYScrollbars:g,scrollerClientWidths:E,scrollerClientHeights:r}},B}(TA);KR.addStateEquality({scrollerClientWidths:Ke,scrollerClientHeights:Ke});function hH(A,B){for(var Q=0,e=A;Q<e.length;Q++){var t=e[Q];if(t.key===B)return t}return null}var EF=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.elRef=JQ(),Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=t.options,g=e.seg,E=g.eventRange,r=E.ui,C={event:new qA(t,E.def,E.instance),view:t.viewApi,timeText:e.timeText,textColor:r.textColor,backgroundColor:r.backgroundColor,borderColor:r.borderColor,isDraggable:!e.disableDragging&&hZ(g,t),isStartResizable:!e.disableResizing&&pZ(g,t),isEndResizable:!e.disableResizing&&GZ(g),isMirror:Boolean(e.isDragging||e.isResizing||e.isDateSelecting),isStart:Boolean(g.isStart),isEnd:Boolean(g.isEnd),isPast:Boolean(e.isPast),isFuture:Boolean(e.isFuture),isToday:Boolean(e.isToday),isSelected:Boolean(e.isSelected),isDragging:Boolean(e.isDragging),isResizing:Boolean(e.isResizing)},i=RZ(C).concat(r.classNames);return b(uE,{hookProps:C,classNames:n.eventClassNames,content:n.eventContent,defaultContent:e.defaultContent,didMount:n.eventDidMount,willUnmount:n.eventWillUnmount,elRef:this.elRef},function(o,a,s,I){return e.children(o,i.concat(a),s,I,C)})},B.prototype.componentDidMount=function(){mU(this.elRef.current,this.props.seg)},B.prototype.componentDidUpdate=function(Q){var e=this.props.seg;e!==Q.seg&&mU(this.elRef.current,e)},B}(TA),pH=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=e.seg,g=t.options.eventTimeFormat||e.defaultTimeFormat,E=iR(n,g,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd);return b(EF,{seg:n,timeText:E,disableDragging:e.disableDragging,disableResizing:e.disableResizing,defaultContent:e.defaultContent||GH,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},function(r,C,i,o,a){return b("a",m({className:e.extraClassNames.concat(C).join(" "),style:{borderColor:a.borderColor,backgroundColor:a.backgroundColor},ref:r},oR(n,t)),b("div",{className:"fc-event-main",ref:i,style:{color:a.textColor}},o),a.isStartResizable&&b("div",{className:"fc-event-resizer fc-event-resizer-start"}),a.isEndResizable&&b("div",{className:"fc-event-resizer fc-event-resizer-end"}))})},B}(TA);function GH(A){return b("div",{className:"fc-event-main-frame"},A.timeText&&b("div",{className:"fc-event-time"},A.timeText),b("div",{className:"fc-event-title-container"},b("div",{className:"fc-event-title fc-sticky"},A.event.title||b(tQ,null,"\xA0"))))}var RH=MB({day:"numeric"}),jR=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=t.options,g=qR({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv});return b(RR,{hookProps:g,content:n.dayCellContent,defaultContent:e.defaultContent},e.children)},B}(TA);function qR(A){var B=A.date,Q=A.dateEnv,e=hR(B,A.todayRange,null,A.dateProfile);return m(m(m({date:Q.toDate(B),view:A.viewApi},e),{dayNumberText:A.showDayNumber?Q.format(B,RH):""}),A.extraProps)}var _R=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.refineHookProps=Co(qR),Q.normalizeClassNames=mR(),Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=t.options,g=this.refineHookProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv}),E=$D(g,t.theme).concat(g.isDisabled?[]:this.normalizeClassNames(n.dayCellClassNames,g)),r=g.isDisabled?{}:{"data-date":eR(e.date)};return b(eF,{hookProps:g,didMount:n.dayCellDidMount,willUnmount:n.dayCellWillUnmount,elRef:e.elRef},function(C){return e.children(C,E,r,g.isDisabled)})},B}(TA);function mH(A){return b("div",{className:"fc-"+A})}var YH=function(A){return b(EF,{defaultContent:NH,seg:A.seg,timeText:"",disableDragging:!0,disableResizing:!0,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:A.isPast,isFuture:A.isFuture,isToday:A.isToday},function(B,Q,e,t,n){return b("div",{ref:B,className:["fc-bg-event"].concat(Q).join(" "),style:{backgroundColor:n.backgroundColor}},t)})};function NH(A){var B=A.event.title;return B&&b("div",{className:"fc-event-title"},A.event.title)}var yH=function(A){return b(_n.Consumer,null,function(B){var Q=B.dateEnv,e=B.options,t=A.date,n=e.weekNumberFormat||A.defaultFormat,g=Q.computeWeekNumber(t),E=Q.format(t,n),r={num:g,text:E,date:t};return b(uE,{hookProps:r,classNames:e.weekNumberClassNames,content:e.weekNumberContent,defaultContent:vH,didMount:e.weekNumberDidMount,willUnmount:e.weekNumberWillUnmount},A.children)})};function vH(A){return A.text}var gl=10,bH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.state={titleId:cs()},Q.handleRootEl=function(e){Q.rootEl=e,Q.props.elRef&&je(Q.props.elRef,e)},Q.handleDocumentMouseDown=function(e){var t=jG(e);Q.rootEl.contains(t)||Q.handleCloseClick()},Q.handleDocumentKeyDown=function(e){e.key==="Escape"&&Q.handleCloseClick()},Q.handleCloseClick=function(){var e=Q.props.onClose;e&&e()},Q}return B.prototype.render=function(){var Q=this.context,e=Q.theme,t=Q.options,n=this,g=n.props,E=n.state,r=["fc-popover",e.getClass("popover")].concat(g.extraClassNames||[]);return ES(b("div",m({id:g.id,className:r.join(" "),"aria-labelledby":E.titleId},g.extraAttrs,{ref:this.handleRootEl}),b("div",{className:"fc-popover-header "+e.getClass("popoverHeader")},b("span",{className:"fc-popover-title",id:E.titleId},g.title),b("span",{className:"fc-popover-close "+e.getIconClass("close"),title:t.closeHint,onClick:this.handleCloseClick})),b("div",{className:"fc-popover-body "+e.getClass("popoverContent")},g.children)),g.parentEl)},B.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleDocumentMouseDown),document.addEventListener("keydown",this.handleDocumentKeyDown),this.updateSize()},B.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleDocumentMouseDown),document.removeEventListener("keydown",this.handleDocumentKeyDown)},B.prototype.updateSize=function(){var Q=this.context.isRtl,e=this.props,t=e.alignmentEl,n=e.alignGridTop,g=this.rootEl,E=DL(t);if(E){var r=g.getBoundingClientRect(),C=n?kB(t,".fc-scrollgrid").getBoundingClientRect().top:E.top,i=Q?E.right-r.width:E.left;C=Math.max(C,gl),i=Math.min(i,document.documentElement.clientWidth-gl-r.width),i=Math.max(i,gl);var o=g.offsetParent.getBoundingClientRect();mr(g,{top:C-o.top,left:i-o.left})}},B}(TA),kH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.handleRootEl=function(e){Q.rootEl=e,e?Q.context.registerInteractiveComponent(Q,{el:e,useEventCenter:!1}):Q.context.unregisterInteractiveComponent(Q)},Q}return B.prototype.render=function(){var Q=this.context,e=Q.options,t=Q.dateEnv,n=this.props,g=n.startDate,E=n.todayRange,r=n.dateProfile,C=t.format(g,e.dayPopoverFormat);return b(_R,{date:g,dateProfile:r,todayRange:E,elRef:this.handleRootEl},function(i,o,a){return b(bH,{elRef:i,id:n.id,title:C,extraClassNames:["fc-more-popover"].concat(o),extraAttrs:a,parentEl:n.parentEl,alignmentEl:n.alignmentEl,alignGridTop:n.alignGridTop,onClose:n.onClose},b(jR,{date:g,dateProfile:r,todayRange:E},function(s,I){return I&&b("div",{className:"fc-more-popover-misc",ref:s},I)}),n.children)})},B.prototype.queryHit=function(Q,e,t,n){var g=this,E=g.rootEl,r=g.props;return Q>=0&&Q<t&&e>=0&&e<n?{dateProfile:r.dateProfile,dateSpan:m({allDay:!0,range:{start:r.startDate,end:r.endDate}},r.extraDateSpan),dayEl:E,rect:{left:0,top:0,right:t,bottom:n},layer:1}:null},B}(FE),JH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.linkElRef=JQ(),Q.state={isPopoverOpen:!1,popoverId:cs()},Q.handleClick=function(e){var t=Q,n=t.props,g=t.context,E=g.options.moreLinkClick,r=WU(n).start;function C(i){var o=i.eventRange,a=o.def,s=o.instance,I=o.range;return{event:new qA(g,a,s),start:g.dateEnv.toDate(I.start),end:g.dateEnv.toDate(I.end),isStart:i.isStart,isEnd:i.isEnd}}typeof E=="function"&&(E=E({date:r,allDay:Boolean(n.allDayDate),allSegs:n.allSegs.map(C),hiddenSegs:n.hiddenSegs.map(C),jsEvent:e,view:g.viewApi})),!E||E==="popover"?Q.setState({isPopoverOpen:!0}):typeof E=="string"&&g.calendarApi.zoomTo(r,E)},Q.handlePopoverClose=function(){Q.setState({isPopoverOpen:!1})},Q}return B.prototype.render=function(){var Q=this,e=this,t=e.props,n=e.state;return b(_n.Consumer,null,function(g){var E=g.viewApi,r=g.options,C=g.calendarApi,i=r.moreLinkText,o=t.moreCnt,a=WU(t),s=typeof i=="function"?i.call(C,o):"+"+o+" "+i,I=Yr(r.moreLinkHint,[o],s),D={num:o,shortText:"+"+o,text:s,view:E};return b(tQ,null,Boolean(t.moreCnt)&&b(uE,{elRef:Q.linkElRef,hookProps:D,classNames:r.moreLinkClassNames,content:r.moreLinkContent,defaultContent:t.defaultContent||SH,didMount:r.moreLinkDidMount,willUnmount:r.moreLinkWillUnmount},function(c,l,w,u){return t.children(c,["fc-more-link"].concat(l),w,u,Q.handleClick,I,n.isPopoverOpen,n.isPopoverOpen?n.popoverId:"")}),n.isPopoverOpen&&b(kH,{id:n.popoverId,startDate:a.start,endDate:a.end,dateProfile:t.dateProfile,todayRange:t.todayRange,extraDateSpan:t.extraDateSpan,parentEl:Q.parentEl,alignmentEl:t.alignmentElRef.current,alignGridTop:t.alignGridTop,onClose:Q.handlePopoverClose},t.popoverContent()))})},B.prototype.componentDidMount=function(){this.updateParentEl()},B.prototype.componentDidUpdate=function(){this.updateParentEl()},B.prototype.updateParentEl=function(){this.linkElRef.current&&(this.parentEl=kB(this.linkElRef.current,".fc-view-harness"))},B}(TA);function SH(A){return A.text}function WU(A){if(A.allDayDate)return{start:A.allDayDate,end:KB(A.allDayDate,1)};var B=A.hiddenSegs;return{start:ZH(B),end:XH(B)}}function ZH(A){return A.reduce(LH).eventRange.range.start}function LH(A,B){return A.eventRange.range.start<B.eventRange.range.start?A:B}function XH(A){return A.reduce(HH).eventRange.range.end}function HH(A,B){return A.eventRange.range.end>B.eventRange.range.end?A:B}var TH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q._calendarApi=new VZ,Q}return B.prototype.render=function(){return d.exports.createElement(HX,{optionOverrides:this.props,calendarApi:this._calendarApi},function(Q){return d.exports.createElement(qX,{options:Q.calendarOptions,theme:Q.theme,emitter:Q.emitter},function(e,t,n,g){return d.exports.createElement("div",{className:e.join(" "),style:{height:t}},d.exports.createElement(PX,m({isHeightAuto:n,forPrint:g},Q)))})})},B.prototype.getApi=function(){return this._calendarApi},B}(d.exports.Component);/*!
FullCalendar v5.11.2
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/var WH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.headerElRef=JQ(),Q}return B.prototype.renderSimpleLayout=function(Q,e){var t=this,n=t.props,g=t.context,E=[],r=TU(g.options);return Q&&E.push({type:"header",key:"header",isSticky:r,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:Q}}),E.push({type:"body",key:"body",liquid:!0,chunk:{content:e}}),b(zc,{viewSpec:g.viewSpec},function(C,i){return b("div",{ref:C,className:["fc-daygrid"].concat(i).join(" ")},b(KR,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:E}))})},B.prototype.renderHScrollLayout=function(Q,e,t,n){var g=this.context.pluginHooks.scrollGridImpl;if(!g)throw new Error("No ScrollGrid implementation");var E=this,r=E.props,C=E.context,i=!r.forPrint&&TU(C.options),o=!r.forPrint&&MH(C.options),a=[];return Q&&a.push({type:"header",key:"header",isSticky:i,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:Q}]}),a.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:e}]}),o&&a.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:UH}]}),b(zc,{viewSpec:C.viewSpec},function(s,I){return b("div",{ref:s,className:["fc-daygrid"].concat(I).join(" ")},b(g,{liquid:!r.isHeightAuto&&!r.forPrint,collapsibleWidth:r.forPrint,colGroups:[{cols:[{span:t,minWidth:n}]}],sections:a}))})},B}(FE);function Hi(A,B){for(var Q=[],e=0;e<B;e+=1)Q[e]=[];for(var t=0,n=A;t<n.length;t++){var g=n[t];Q[g.row].push(g)}return Q}function Ti(A,B){for(var Q=[],e=0;e<B;e+=1)Q[e]=[];for(var t=0,n=A;t<n.length;t++){var g=n[t];Q[g.firstCol].push(g)}return Q}function OU(A,B){var Q=[];if(A){for(var e=0;e<B;e+=1)Q[e]={affectedInstances:A.affectedInstances,isEvent:A.isEvent,segs:[]};for(var t=0,n=A.segs;t<n.length;t++){var g=n[t];Q[g.row].segs.push(g)}}else for(var e=0;e<B;e+=1)Q[e]=null;return Q}var OH=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this.props,e=AF(this.context,Q.date);return b(jR,{date:Q.date,dateProfile:Q.dateProfile,todayRange:Q.todayRange,showDayNumber:Q.showDayNumber,extraHookProps:Q.extraHookProps,defaultContent:VH},function(t,n){return(n||Q.forceDayTop)&&b("div",{className:"fc-daygrid-day-top",ref:t},b("a",m({id:Q.dayNumberId,className:"fc-daygrid-day-number"},e),n||b(tQ,null,"\xA0")))})},B}(TA);function VH(A){return A.dayNumberText}var $R=MB({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function Am(A){var B=A.eventRange.ui.display;return B==="list-item"||B==="auto"&&!A.eventRange.def.allDay&&A.firstCol===A.lastCol&&A.isStart&&A.isEnd}var Bm=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this.props;return b(pH,m({},Q,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:$R,defaultDisplayEventEnd:Q.defaultDisplayEventEnd,disableResizing:!Q.seg.eventRange.def.allDay}))},B}(TA),Qm=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context,n=t.options.eventTimeFormat||$R,g=iR(e.seg,n,t,!0,e.defaultDisplayEventEnd);return b(EF,{seg:e.seg,timeText:g,defaultContent:xH,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},function(E,r,C,i){return b("a",m({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(r).join(" "),ref:E},oR(e.seg,t)),i)})},B}(TA);function xH(A){return b(tQ,null,b("div",{className:"fc-daygrid-event-dot",style:{borderColor:A.borderColor||A.backgroundColor}}),A.timeText&&b("div",{className:"fc-event-time"},A.timeText),b("div",{className:"fc-event-title"},A.event.title||b(tQ,null,"\xA0")))}var zH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.compileSegs=dA(PH),Q}return B.prototype.render=function(){var Q=this.props,e=this.compileSegs(Q.singlePlacements),t=e.allSegs,n=e.invisibleSegs;return b(JH,{dateProfile:Q.dateProfile,todayRange:Q.todayRange,allDayDate:Q.allDayDate,moreCnt:Q.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:Q.alignmentElRef,alignGridTop:Q.alignGridTop,extraDateSpan:Q.extraDateSpan,popoverContent:function(){var g=(Q.eventDrag?Q.eventDrag.affectedInstances:null)||(Q.eventResize?Q.eventResize.affectedInstances:null)||{};return b(tQ,null,t.map(function(E){var r=E.eventRange.instance.instanceId;return b("div",{className:"fc-daygrid-event-harness",key:r,style:{visibility:g[r]?"hidden":""}},Am(E)?b(Qm,m({seg:E,isDragging:!1,isSelected:r===Q.eventSelection,defaultDisplayEventEnd:!1},yr(E,Q.todayRange))):b(Bm,m({seg:E,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:r===Q.eventSelection,defaultDisplayEventEnd:!1},yr(E,Q.todayRange))))}))}},function(g,E,r,C,i,o,a,s){return b("a",m({ref:g,className:["fc-daygrid-more-link"].concat(E).join(" "),title:o,"aria-expanded":a,"aria-controls":s},$G(i)),C)})},B}(TA);function PH(A){for(var B=[],Q=[],e=0,t=A;e<t.length;e++){var n=t[e];B.push(n.seg),n.isVisible||Q.push(n.seg)}return{allSegs:B,invisibleSegs:Q}}var KH=MB({week:"narrow"}),jH=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.rootElRef=JQ(),Q.state={dayNumberId:cs()},Q.handleRootEl=function(e){je(Q.rootElRef,e),je(Q.props.elRef,e)},Q}return B.prototype.render=function(){var Q=this,e=Q.context,t=Q.props,n=Q.state,g=Q.rootElRef,E=t.date,r=t.dateProfile,C=AF(e,E,"week");return b(_R,{date:E,dateProfile:r,todayRange:t.todayRange,showDayNumber:t.showDayNumber,extraHookProps:t.extraHookProps,elRef:this.handleRootEl},function(i,o,a,s){return b("td",m({ref:i,role:"gridcell",className:["fc-daygrid-day"].concat(o,t.extraClassNames||[]).join(" ")},a,t.extraDataAttrs,t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),b("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:t.innerElRef},t.showWeekNumber&&b(yH,{date:E,defaultFormat:KH},function(I,D,c,l){return b("a",m({ref:I,className:["fc-daygrid-week-number"].concat(D).join(" ")},C),l)}),!s&&b(OH,{date:E,dateProfile:r,showDayNumber:t.showDayNumber,dayNumberId:n.dayNumberId,forceDayTop:t.forceDayTop,todayRange:t.todayRange,extraHookProps:t.extraHookProps}),b("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,b("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},b(zH,{allDayDate:E,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:g,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),b("div",{className:"fc-daygrid-day-bg"},t.bgContent)))})},B}(FE);function qH(A,B,Q,e,t,n,g){var E=new A2;E.allowReslicing=!0,E.strictOrder=e,B===!0||Q===!0?(E.maxCoord=n,E.hiddenConsumes=!0):typeof B=="number"?E.maxStackCnt=B:typeof Q=="number"&&(E.maxStackCnt=Q,E.hiddenConsumes=!0);for(var r=[],C=[],i=0;i<A.length;i+=1){var o=A[i],a=o.eventRange.instance.instanceId,s=t[a];s!=null?r.push({index:i,thickness:s,span:{start:o.firstCol,end:o.lastCol+1}}):C.push(o)}for(var I=E.addSegs(r),D=E.toRects(),c=_H(D,A,g),l=c.singleColPlacements,w=c.multiColPlacements,u=c.leftoverMargins,f=[],M=[],p=0,h=C;p<h.length;p++){var o=h[p];w[o.firstCol].push({seg:o,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var G=o.firstCol;G<=o.lastCol;G+=1)l[G].push({seg:Tg(o,G,G+1,g),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(var G=0;G<g.length;G+=1)f.push(0);for(var J=0,k=I;J<k.length;J++){var S=k[J],o=A[S.index],W=S.span;w[W.start].push({seg:Tg(o,W.start,W.end,g),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(var G=W.start;G<W.end;G+=1)f[G]+=1,l[G].push({seg:Tg(o,G,G+1,g),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(var G=0;G<g.length;G+=1)M.push(u[G]);return{singleColPlacements:l,multiColPlacements:w,moreCnts:f,moreMarginTops:M}}function _H(A,B,Q){for(var e=$H(A,Q.length),t=[],n=[],g=[],E=0;E<Q.length;E+=1){for(var r=e[E],C=[],i=0,o=0,a=0,s=r;a<s.length;a++){var I=s[a],D=B[I.index];C.push({seg:Tg(D,E,E+1,Q),isVisible:!0,isAbsolute:!1,absoluteTop:I.levelCoord,marginTop:I.levelCoord-i}),i=I.levelCoord+I.thickness}var c=[];i=0,o=0;for(var l=0,w=r;l<w.length;l++){var I=w[l],D=B[I.index],u=I.span.end-I.span.start>1,f=I.span.start===E;o+=I.levelCoord-i,i=I.levelCoord+I.thickness,u?(o+=I.thickness,f&&c.push({seg:Tg(D,I.span.start,I.span.end,Q),isVisible:!0,isAbsolute:!0,absoluteTop:I.levelCoord,marginTop:0})):f&&(c.push({seg:Tg(D,I.span.start,I.span.end,Q),isVisible:!0,isAbsolute:!1,absoluteTop:I.levelCoord,marginTop:o}),o=0)}t.push(C),n.push(c),g.push(o)}return{singleColPlacements:t,multiColPlacements:n,leftoverMargins:g}}function $H(A,B){for(var Q=[],e=0;e<B;e+=1)Q.push([]);for(var t=0,n=A;t<n.length;t++)for(var g=n[t],e=g.span.start;e<g.span.end;e+=1)Q[e].push(g);return Q}function Tg(A,B,Q,e){if(A.firstCol===B&&A.lastCol===Q-1)return A;var t=A.eventRange,n=t.range,g=CC(n,{start:e[B].date,end:KB(e[Q-1].date,1)});return m(m({},A),{firstCol:B,lastCol:Q-1,eventRange:{def:t.def,ui:m(m({},t.ui),{durationEditable:!1}),instance:t.instance,range:g},isStart:A.isStart&&g.start.valueOf()===n.start.valueOf(),isEnd:A.isEnd&&g.end.valueOf()===n.end.valueOf()})}var A2=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.hiddenConsumes=!1,Q.forceHidden={},Q}return B.prototype.addSegs=function(Q){for(var e=this,t=A.prototype.addSegs.call(this,Q),n=this.entriesByLevel,g=function(r){return!e.forceHidden[vr(r)]},E=0;E<n.length;E+=1)n[E]=n[E].filter(g);return t},B.prototype.handleInvalidInsertion=function(Q,e,t){var n=this,g=n.entriesByLevel,E=n.forceHidden,r=Q.touchingEntry,C=Q.touchingLevel,i=Q.touchingLateral;if(this.hiddenConsumes&&r){var o=vr(r);if(!E[o])if(this.allowReslicing){var a=m(m({},r),{span:XR(r.span,e.span)}),s=vr(a);E[s]=!0,g[C][i]=a,this.splitEntry(r,e,t)}else E[o]=!0,t.push(r)}return A.prototype.handleInvalidInsertion.call(this,Q,e,t)},B}(TX),em=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.cellElRefs=new un,Q.frameElRefs=new un,Q.fgElRefs=new un,Q.segHarnessRefs=new un,Q.rootElRef=JQ(),Q.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},Q}return B.prototype.render=function(){var Q=this,e=this,t=e.props,n=e.state,g=e.context,E=g.options,r=t.cells.length,C=Ti(t.businessHourSegs,r),i=Ti(t.bgEventSegs,r),o=Ti(this.getHighlightSegs(),r),a=Ti(this.getMirrorSegs(),r),s=qH(UZ(t.fgEventSegs,E.eventOrder),t.dayMaxEvents,t.dayMaxEventRows,E.eventOrderStrict,n.eventInstanceHeights,n.maxContentHeight,t.cells),I=s.singleColPlacements,D=s.multiColPlacements,c=s.moreCnts,l=s.moreMarginTops,w=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{};return b("tr",{ref:this.rootElRef,role:"row"},t.renderIntro&&t.renderIntro(),t.cells.map(function(u,f){var M=Q.renderFgSegs(f,t.forPrint?I[f]:D[f],t.todayRange,w),p=Q.renderFgSegs(f,B2(a[f],D),t.todayRange,{},Boolean(t.eventDrag),Boolean(t.eventResize),!1);return b(jH,{key:u.key,elRef:Q.cellElRefs.createRef(u.key),innerElRef:Q.frameElRefs.createRef(u.key),dateProfile:t.dateProfile,date:u.date,showDayNumber:t.showDayNumbers,showWeekNumber:t.showWeekNumbers&&f===0,forceDayTop:t.showWeekNumbers,todayRange:t.todayRange,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,extraHookProps:u.extraHookProps,extraDataAttrs:u.extraDataAttrs,extraClassNames:u.extraClassNames,extraDateSpan:u.extraDateSpan,moreCnt:c[f],moreMarginTop:l[f],singlePlacements:I[f],fgContentElRef:Q.fgElRefs.createRef(u.key),fgContent:b(tQ,null,b(tQ,null,M),b(tQ,null,p)),bgContent:b(tQ,null,Q.renderFillSegs(o[f],"highlight"),Q.renderFillSegs(C[f],"non-business"),Q.renderFillSegs(i[f],"bg-event"))})}))},B.prototype.componentDidMount=function(){this.updateSizing(!0)},B.prototype.componentDidUpdate=function(Q,e){var t=this.props;this.updateSizing(!Ke(Q,t))},B.prototype.getHighlightSegs=function(){var Q=this.props;return Q.eventDrag&&Q.eventDrag.segs.length?Q.eventDrag.segs:Q.eventResize&&Q.eventResize.segs.length?Q.eventResize.segs:Q.dateSelectionSegs},B.prototype.getMirrorSegs=function(){var Q=this.props;return Q.eventResize&&Q.eventResize.segs.length?Q.eventResize.segs:[]},B.prototype.renderFgSegs=function(Q,e,t,n,g,E,r){var C=this.context,i=this.props.eventSelection,o=this.state.framePositions,a=this.props.cells.length===1,s=g||E||r,I=[];if(o)for(var D=0,c=e;D<c.length;D++){var l=c[D],w=l.seg,u=w.eventRange.instance.instanceId,f=u+":"+Q,M=l.isVisible&&!n[u],p=l.isAbsolute,h="",G="";p&&(C.isRtl?(G=0,h=o.lefts[w.lastCol]-o.lefts[w.firstCol]):(h=0,G=o.rights[w.firstCol]-o.rights[w.lastCol])),I.push(b("div",{className:"fc-daygrid-event-harness"+(p?" fc-daygrid-event-harness-abs":""),key:f,ref:s?null:this.segHarnessRefs.createRef(f),style:{visibility:M?"":"hidden",marginTop:p?"":l.marginTop,top:p?l.absoluteTop:"",left:h,right:G}},Am(w)?b(Qm,m({seg:w,isDragging:g,isSelected:u===i,defaultDisplayEventEnd:a},yr(w,t))):b(Bm,m({seg:w,isDragging:g,isResizing:E,isDateSelecting:r,isSelected:u===i,defaultDisplayEventEnd:a},yr(w,t)))))}return I},B.prototype.renderFillSegs=function(Q,e){var t=this.context.isRtl,n=this.props.todayRange,g=this.state.framePositions,E=[];if(g)for(var r=0,C=Q;r<C.length;r++){var i=C[r],o=t?{right:0,left:g.lefts[i.lastCol]-g.lefts[i.firstCol]}:{left:0,right:g.rights[i.firstCol]-g.rights[i.lastCol]};E.push(b("div",{key:mZ(i.eventRange),className:"fc-daygrid-bg-harness",style:o},e==="bg-event"?b(YH,m({seg:i},yr(i,n))):mH(e)))}return b.apply(void 0,jA([tQ,{}],E))},B.prototype.updateSizing=function(Q){var e=this,t=e.props,n=e.frameElRefs;if(!t.forPrint&&t.clientWidth!==null){if(Q){var g=t.cells.map(function(o){return n.currentMap[o.key]});if(g.length){var E=this.rootElRef.current;this.setState({framePositions:new Vc(E,g,!0,!1)})}}var r=this.state.eventInstanceHeights,C=this.queryEventInstanceHeights(),i=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({eventInstanceHeights:m(m({},r),C),maxContentHeight:i?this.computeMaxContentHeight():null})}},B.prototype.queryEventInstanceHeights=function(){var Q=this.segHarnessRefs.currentMap,e={};for(var t in Q){var n=Math.round(Q[t].getBoundingClientRect().height),g=t.split(":")[0];e[g]=Math.max(e[g]||0,n)}return e},B.prototype.computeMaxContentHeight=function(){var Q=this.props.cells[0].key,e=this.cellElRefs.currentMap[Q],t=this.fgElRefs.currentMap[Q];return e.getBoundingClientRect().bottom-t.getBoundingClientRect().top},B.prototype.getCellEls=function(){var Q=this.cellElRefs.currentMap;return this.props.cells.map(function(e){return Q[e.key]})},B}(FE);em.addStateEquality({eventInstanceHeights:Ke});function B2(A,B){if(!A.length)return[];var Q=Q2(B);return A.map(function(e){return{seg:e,isVisible:!0,isAbsolute:!0,absoluteTop:Q[e.eventRange.instance.instanceId],marginTop:0}})}function Q2(A){for(var B={},Q=0,e=A;Q<e.length;Q++)for(var t=e[Q],n=0,g=t;n<g.length;n++){var E=g[n];B[E.seg.eventRange.instance.instanceId]=E.absoluteTop}return B}var e2=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.splitBusinessHourSegs=dA(Hi),Q.splitBgEventSegs=dA(Hi),Q.splitFgEventSegs=dA(Hi),Q.splitDateSelectionSegs=dA(Hi),Q.splitEventDrag=dA(OU),Q.splitEventResize=dA(OU),Q.rowRefs=new un,Q.handleRootEl=function(e){Q.rootEl=e,e?Q.context.registerInteractiveComponent(Q,{el:e,isHitComboAllowed:Q.props.isHitComboAllowed}):Q.context.unregisterInteractiveComponent(Q)},Q}return B.prototype.render=function(){var Q=this,e=this.props,t=e.dateProfile,n=e.dayMaxEventRows,g=e.dayMaxEvents,E=e.expandRows,r=e.cells.length,C=this.splitBusinessHourSegs(e.businessHourSegs,r),i=this.splitBgEventSegs(e.bgEventSegs,r),o=this.splitFgEventSegs(e.fgEventSegs,r),a=this.splitDateSelectionSegs(e.dateSelectionSegs,r),s=this.splitEventDrag(e.eventDrag,r),I=this.splitEventResize(e.eventResize,r),D=g===!0||n===!0;D&&!E&&(D=!1,n=null,g=null);var c=["fc-daygrid-body",D?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",E?"":"fc-daygrid-body-natural"];return b("div",{className:c.join(" "),ref:this.handleRootEl,style:{width:e.clientWidth,minWidth:e.tableMinWidth}},b(OR,{unit:"day"},function(l,w){return b(tQ,null,b("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:E?e.clientHeight:""}},e.colGroupNode,b("tbody",{role:"presentation"},e.cells.map(function(u,f){return b(em,{ref:Q.rowRefs.createRef(f),key:u.length?u[0].date.toISOString():f,showDayNumbers:r>1,showWeekNumbers:e.showWeekNumbers,todayRange:w,dateProfile:t,cells:u,renderIntro:e.renderRowIntro,businessHourSegs:C[f],eventSelection:e.eventSelection,bgEventSegs:i[f].filter(t2),fgEventSegs:o[f],dateSelectionSegs:a[f],eventDrag:s[f],eventResize:I[f],dayMaxEvents:g,dayMaxEventRows:n,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint})}))))}))},B.prototype.prepareHits=function(){this.rowPositions=new Vc(this.rootEl,this.rowRefs.collect().map(function(Q){return Q.getCellEls()[0]}),!1,!0),this.colPositions=new Vc(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},B.prototype.queryHit=function(Q,e){var t=this,n=t.colPositions,g=t.rowPositions,E=n.leftToIndex(Q),r=g.topToIndex(e);if(r!=null&&E!=null){var C=this.props.cells[r][E];return{dateProfile:this.props.dateProfile,dateSpan:m({range:this.getCellRange(r,E),allDay:!0},C.extraDateSpan),dayEl:this.getCellEl(r,E),rect:{left:n.lefts[E],right:n.rights[E],top:g.tops[r],bottom:g.bottoms[r]},layer:0}}return null},B.prototype.getCellEl=function(Q,e){return this.rowRefs.currentMap[Q].getCellEls()[e]},B.prototype.getCellRange=function(Q,e){var t=this.props.cells[Q][e].date,n=KB(t,1);return{start:t,end:n}},B}(FE);function t2(A){return A.eventRange.def.allDay}var n2=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.forceDayIfListItem=!0,Q}return B.prototype.sliceRange=function(Q,e){return e.sliceRange(Q)},B}(gH),g2=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.slicer=new n2,Q.tableRef=JQ(),Q}return B.prototype.render=function(){var Q=this,e=Q.props,t=Q.context;return b(e2,m({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},B}(FE),E2=function(A){BA(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.buildDayTableModel=dA(r2),Q.headerRef=JQ(),Q.tableRef=JQ(),Q}return B.prototype.render=function(){var Q=this,e=this.context,t=e.options,n=e.dateProfileGenerator,g=this.props,E=this.buildDayTableModel(g.dateProfile,n),r=t.dayHeaders&&b(QH,{ref:this.headerRef,dateProfile:g.dateProfile,dates:E.headerDates,datesRepDistinctDays:E.rowCnt===1}),C=function(i){return b(g2,{ref:Q.tableRef,dateProfile:g.dateProfile,dayTableModel:E,businessHours:g.businessHours,dateSelection:g.dateSelection,eventStore:g.eventStore,eventUiBases:g.eventUiBases,eventSelection:g.eventSelection,eventDrag:g.eventDrag,eventResize:g.eventResize,nextDayThreshold:t.nextDayThreshold,colGroupNode:i.tableColGroupNode,tableMinWidth:i.tableMinWidth,dayMaxEvents:t.dayMaxEvents,dayMaxEventRows:t.dayMaxEventRows,showWeekNumbers:t.weekNumbers,expandRows:!g.isHeightAuto,headerAlignElRef:Q.headerElRef,clientWidth:i.clientWidth,clientHeight:i.clientHeight,forPrint:g.forPrint})};return t.dayMinWidth?this.renderHScrollLayout(r,C,E.colCnt,t.dayMinWidth):this.renderSimpleLayout(r,C)},B}(WH);function r2(A,B){var Q=new tH(A.renderRange,B);return new nH(Q,/year|month|week/.test(A.currentRangeUnit))}var C2=function(A){BA(B,A);function B(){return A!==null&&A.apply(this,arguments)||this}return B.prototype.buildRenderRange=function(Q,e,t){var n=this.props.dateEnv,g=A.prototype.buildRenderRange.call(this,Q,e,t),E=g.start,r=g.end,C;if(/^(year|month)$/.test(e)&&(E=n.startOfWeek(E),C=n.startOfWeek(r),C.valueOf()!==r.valueOf()&&(r=cU(C,1))),this.props.monthMode&&this.props.fixedWeekCount){var i=Math.ceil(pS(E,r));r=cU(r,6-i)}return{start:E,end:r}},B}(NR),i2=jt({initialView:"dayGridMonth",views:{dayGrid:{component:E2,dateProfileGeneratorClass:C2},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});/*!
FullCalendar v5.11.2
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/gF.touchMouseIgnoreWait=500;var Kc=0,qo=0,jc=!1,rF=function(){function A(B){var Q=this;this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!Q.shouldIgnoreMouse()&&o2(e)&&Q.tryStart(e)){var t=Q.createEventFromMouse(e,!0);Q.emitter.trigger("pointerdown",t),Q.initScrollWatch(t),Q.shouldIgnoreMove||document.addEventListener("mousemove",Q.handleMouseMove),document.addEventListener("mouseup",Q.handleMouseUp)}},this.handleMouseMove=function(e){var t=Q.createEventFromMouse(e);Q.recordCoords(t),Q.emitter.trigger("pointermove",t)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",Q.handleMouseMove),document.removeEventListener("mouseup",Q.handleMouseUp),Q.emitter.trigger("pointerup",Q.createEventFromMouse(e)),Q.cleanup()},this.handleTouchStart=function(e){if(Q.tryStart(e)){Q.isTouchDragging=!0;var t=Q.createEventFromTouch(e,!0);Q.emitter.trigger("pointerdown",t),Q.initScrollWatch(t);var n=e.target;Q.shouldIgnoreMove||n.addEventListener("touchmove",Q.handleTouchMove),n.addEventListener("touchend",Q.handleTouchEnd),n.addEventListener("touchcancel",Q.handleTouchEnd),window.addEventListener("scroll",Q.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var t=Q.createEventFromTouch(e);Q.recordCoords(t),Q.emitter.trigger("pointermove",t)},this.handleTouchEnd=function(e){if(Q.isDragging){var t=e.target;t.removeEventListener("touchmove",Q.handleTouchMove),t.removeEventListener("touchend",Q.handleTouchEnd),t.removeEventListener("touchcancel",Q.handleTouchEnd),window.removeEventListener("scroll",Q.handleTouchScroll,!0),Q.emitter.trigger("pointerup",Q.createEventFromTouch(e)),Q.cleanup(),Q.isTouchDragging=!1,a2()}},this.handleTouchScroll=function(){Q.wasTouchScroll=!0},this.handleScroll=function(e){if(!Q.shouldIgnoreMove){var t=window.pageXOffset-Q.prevScrollX+Q.prevPageX,n=window.pageYOffset-Q.prevScrollY+Q.prevPageY;Q.emitter.trigger("pointermove",{origEvent:e,isTouch:Q.isTouchDragging,subjectEl:Q.subjectEl,pageX:t,pageY:n,deltaX:t-Q.origPageX,deltaY:n-Q.origPageY})}},this.containerEl=B,this.emitter=new us,B.addEventListener("mousedown",this.handleMouseDown),B.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),s2()}return A.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),I2()},A.prototype.tryStart=function(B){var Q=this.querySubjectEl(B),e=B.target;return Q&&(!this.handleSelector||kB(e,this.handleSelector))?(this.subjectEl=Q,this.isDragging=!0,this.wasTouchScroll=!1,!0):!1},A.prototype.cleanup=function(){jc=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()},A.prototype.querySubjectEl=function(B){return this.selector?kB(B.target,this.selector):this.containerEl},A.prototype.shouldIgnoreMouse=function(){return Kc||this.isTouchDragging},A.prototype.cancelTouchScroll=function(){this.isDragging&&(jc=!0)},A.prototype.initScrollWatch=function(B){this.shouldWatchScroll&&(this.recordCoords(B),window.addEventListener("scroll",this.handleScroll,!0))},A.prototype.recordCoords=function(B){this.shouldWatchScroll&&(this.prevPageX=B.pageX,this.prevPageY=B.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},A.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},A.prototype.createEventFromMouse=function(B,Q){var e=0,t=0;return Q?(this.origPageX=B.pageX,this.origPageY=B.pageY):(e=B.pageX-this.origPageX,t=B.pageY-this.origPageY),{origEvent:B,isTouch:!1,subjectEl:this.subjectEl,pageX:B.pageX,pageY:B.pageY,deltaX:e,deltaY:t}},A.prototype.createEventFromTouch=function(B,Q){var e=B.touches,t,n,g=0,E=0;return e&&e.length?(t=e[0].pageX,n=e[0].pageY):(t=B.pageX,n=B.pageY),Q?(this.origPageX=t,this.origPageY=n):(g=t-this.origPageX,E=n-this.origPageY),{origEvent:B,isTouch:!0,subjectEl:this.subjectEl,pageX:t,pageY:n,deltaX:g,deltaY:E}},A}();function o2(A){return A.button===0&&!A.ctrlKey}function a2(){Kc+=1,setTimeout(function(){Kc-=1},gF.touchMouseIgnoreWait)}function s2(){qo+=1,qo===1&&window.addEventListener("touchmove",tm,{passive:!1})}function I2(){qo-=1,qo||window.removeEventListener("touchmove",tm,{passive:!1})}function tm(A){jc&&A.preventDefault()}var l2=function(){function A(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return A.prototype.start=function(B,Q,e){this.sourceEl=B,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=Q-window.pageXOffset,this.origScreenY=e-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},A.prototype.handleMove=function(B,Q){this.deltaX=B-window.pageXOffset-this.origScreenX,this.deltaY=Q-window.pageYOffset-this.origScreenY,this.updateElPosition()},A.prototype.setIsVisible=function(B){B?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=B,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=B)},A.prototype.stop=function(B,Q){var e=this,t=function(){e.cleanup(),Q()};B&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(t,this.revertDuration):setTimeout(t,0)},A.prototype.doRevertAnimation=function(B,Q){var e=this.mirrorEl,t=this.sourceEl.getBoundingClientRect();e.style.transition="top "+Q+"ms,left "+Q+"ms",mr(e,{left:t.left,top:t.top}),IS(e,function(){e.style.transition="",B()})},A.prototype.cleanup=function(){this.mirrorEl&&(LD(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},A.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&mr(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},A.prototype.getMirrorEl=function(){var B=this.sourceElRect,Q=this.mirrorEl;return Q||(Q=this.mirrorEl=this.sourceEl.cloneNode(!0),Q.classList.add("fc-unselectable"),Q.classList.add("fc-event-dragging"),mr(Q,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:B.right-B.left,height:B.bottom-B.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(Q)),Q},A}(),nm=function(A){BA(B,A);function B(Q,e){var t=A.call(this)||this;return t.handleScroll=function(){t.scrollTop=t.scrollController.getScrollTop(),t.scrollLeft=t.scrollController.getScrollLeft(),t.handleScrollChange()},t.scrollController=Q,t.doesListening=e,t.scrollTop=t.origScrollTop=Q.getScrollTop(),t.scrollLeft=t.origScrollLeft=Q.getScrollLeft(),t.scrollWidth=Q.getScrollWidth(),t.scrollHeight=Q.getScrollHeight(),t.clientWidth=Q.getClientWidth(),t.clientHeight=Q.getClientHeight(),t.clientRect=t.computeClientRect(),t.doesListening&&t.getEventTarget().addEventListener("scroll",t.handleScroll),t}return B.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},B.prototype.getScrollTop=function(){return this.scrollTop},B.prototype.getScrollLeft=function(){return this.scrollLeft},B.prototype.setScrollTop=function(Q){this.scrollController.setScrollTop(Q),this.doesListening||(this.scrollTop=Math.max(Math.min(Q,this.getMaxScrollTop()),0),this.handleScrollChange())},B.prototype.setScrollLeft=function(Q){this.scrollController.setScrollLeft(Q),this.doesListening||(this.scrollLeft=Math.max(Math.min(Q,this.getMaxScrollLeft()),0),this.handleScrollChange())},B.prototype.getClientWidth=function(){return this.clientWidth},B.prototype.getClientHeight=function(){return this.clientHeight},B.prototype.getScrollWidth=function(){return this.scrollWidth},B.prototype.getScrollHeight=function(){return this.scrollHeight},B.prototype.handleScrollChange=function(){},B}(QF),gm=function(A){BA(B,A);function B(Q,e){return A.call(this,new fL(Q),e)||this}return B.prototype.getEventTarget=function(){return this.scrollController.el},B.prototype.computeClientRect=function(){return wL(this.scrollController.el)},B}(nm),c2=function(A){BA(B,A);function B(Q){return A.call(this,new UL,Q)||this}return B.prototype.getEventTarget=function(){return window},B.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},B.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},B}(nm),VU=typeof performance=="function"?performance.now:Date.now,w2=function(){function A(){var B=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(B.isAnimating){var Q=B.computeBestEdge(B.pointerScreenX+window.pageXOffset,B.pointerScreenY+window.pageYOffset);if(Q){var e=VU();B.handleSide(Q,(e-B.msSinceRequest)/1e3),B.requestAnimation(e)}else B.isAnimating=!1}}}return A.prototype.start=function(B,Q,e){this.isEnabled&&(this.scrollCaches=this.buildCaches(e),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(B,Q))},A.prototype.handleMove=function(B,Q){if(this.isEnabled){var e=B-window.pageXOffset,t=Q-window.pageYOffset,n=this.pointerScreenY===null?0:t-this.pointerScreenY,g=this.pointerScreenX===null?0:e-this.pointerScreenX;n<0?this.everMovedUp=!0:n>0&&(this.everMovedDown=!0),g<0?this.everMovedLeft=!0:g>0&&(this.everMovedRight=!0),this.pointerScreenX=e,this.pointerScreenY=t,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(VU()))}},A.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var B=0,Q=this.scrollCaches;B<Q.length;B++){var e=Q[B];e.destroy()}this.scrollCaches=null}},A.prototype.requestAnimation=function(B){this.msSinceRequest=B,requestAnimationFrame(this.animate)},A.prototype.handleSide=function(B,Q){var e=B.scrollCache,t=this.edgeThreshold,n=t-B.distance,g=n*n/(t*t)*this.maxVelocity*Q,E=1;switch(B.name){case"left":E=-1;case"right":e.setScrollLeft(e.getScrollLeft()+g*E);break;case"top":E=-1;case"bottom":e.setScrollTop(e.getScrollTop()+g*E);break}},A.prototype.computeBestEdge=function(B,Q){for(var e=this.edgeThreshold,t=null,n=this.scrollCaches||[],g=0,E=n;g<E.length;g++){var r=E[g],C=r.clientRect,i=B-C.left,o=C.right-B,a=Q-C.top,s=C.bottom-Q;i>=0&&o>=0&&a>=0&&s>=0&&(a<=e&&this.everMovedUp&&r.canScrollUp()&&(!t||t.distance>a)&&(t={scrollCache:r,name:"top",distance:a}),s<=e&&this.everMovedDown&&r.canScrollDown()&&(!t||t.distance>s)&&(t={scrollCache:r,name:"bottom",distance:s}),i<=e&&this.everMovedLeft&&r.canScrollLeft()&&(!t||t.distance>i)&&(t={scrollCache:r,name:"left",distance:i}),o<=e&&this.everMovedRight&&r.canScrollRight()&&(!t||t.distance>o)&&(t={scrollCache:r,name:"right",distance:o}))}return t},A.prototype.buildCaches=function(B){return this.queryScrollEls(B).map(function(Q){return Q===window?new c2(!1):new gm(Q,!1)})},A.prototype.queryScrollEls=function(B){for(var Q=[],e=0,t=this.scrollQuery;e<t.length;e++){var n=t[e];typeof n=="object"?Q.push(n):Q.push.apply(Q,Array.prototype.slice.call(qG(B).querySelectorAll(n)))}return Q},A}(),XC=function(A){BA(B,A);function B(Q,e){var t=A.call(this,Q)||this;t.containerEl=Q,t.delay=null,t.minDistance=0,t.touchScrollAllowed=!0,t.mirrorNeedsRevert=!1,t.isInteracting=!1,t.isDragging=!1,t.isDelayEnded=!1,t.isDistanceSurpassed=!1,t.delayTimeoutId=null,t.onPointerDown=function(g){t.isDragging||(t.isInteracting=!0,t.isDelayEnded=!1,t.isDistanceSurpassed=!1,lS(document.body),wS(document.body),g.isTouch||g.origEvent.preventDefault(),t.emitter.trigger("pointerdown",g),t.isInteracting&&!t.pointer.shouldIgnoreMove&&(t.mirror.setIsVisible(!1),t.mirror.start(g.subjectEl,g.pageX,g.pageY),t.startDelay(g),t.minDistance||t.handleDistanceSurpassed(g)))},t.onPointerMove=function(g){if(t.isInteracting){if(t.emitter.trigger("pointermove",g),!t.isDistanceSurpassed){var E=t.minDistance,r=void 0,C=g.deltaX,i=g.deltaY;r=C*C+i*i,r>=E*E&&t.handleDistanceSurpassed(g)}t.isDragging&&(g.origEvent.type!=="scroll"&&(t.mirror.handleMove(g.pageX,g.pageY),t.autoScroller.handleMove(g.pageX,g.pageY)),t.emitter.trigger("dragmove",g))}},t.onPointerUp=function(g){t.isInteracting&&(t.isInteracting=!1,cS(document.body),DS(document.body),t.emitter.trigger("pointerup",g),t.isDragging&&(t.autoScroller.stop(),t.tryStopDrag(g)),t.delayTimeoutId&&(clearTimeout(t.delayTimeoutId),t.delayTimeoutId=null))};var n=t.pointer=new rF(Q);return n.emitter.on("pointerdown",t.onPointerDown),n.emitter.on("pointermove",t.onPointerMove),n.emitter.on("pointerup",t.onPointerUp),e&&(n.selector=e),t.mirror=new l2,t.autoScroller=new w2,t}return B.prototype.destroy=function(){this.pointer.destroy(),this.onPointerUp({})},B.prototype.startDelay=function(Q){var e=this;typeof this.delay=="number"?this.delayTimeoutId=setTimeout(function(){e.delayTimeoutId=null,e.handleDelayEnd(Q)},this.delay):this.handleDelayEnd(Q)},B.prototype.handleDelayEnd=function(Q){this.isDelayEnded=!0,this.tryStartDrag(Q)},B.prototype.handleDistanceSurpassed=function(Q){this.isDistanceSurpassed=!0,this.tryStartDrag(Q)},B.prototype.tryStartDrag=function(Q){this.isDelayEnded&&this.isDistanceSurpassed&&(!this.pointer.wasTouchScroll||this.touchScrollAllowed)&&(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(Q.pageX,Q.pageY,this.containerEl),this.emitter.trigger("dragstart",Q),this.touchScrollAllowed===!1&&this.pointer.cancelTouchScroll())},B.prototype.tryStopDrag=function(Q){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,Q))},B.prototype.stopDrag=function(Q){this.isDragging=!1,this.emitter.trigger("dragend",Q)},B.prototype.setIgnoreMove=function(Q){this.pointer.shouldIgnoreMove=Q},B.prototype.setMirrorIsVisible=function(Q){this.mirror.setIsVisible(Q)},B.prototype.setMirrorNeedsRevert=function(Q){this.mirrorNeedsRevert=Q},B.prototype.setAutoScrollEnabled=function(Q){this.autoScroller.isEnabled=Q},B}(HR),D2=function(){function A(B){this.origRect=BF(B),this.scrollCaches=GR(B).map(function(Q){return new gm(Q,!0)})}return A.prototype.destroy=function(){for(var B=0,Q=this.scrollCaches;B<Q.length;B++){var e=Q[B];e.destroy()}},A.prototype.computeLeft=function(){for(var B=this.origRect.left,Q=0,e=this.scrollCaches;Q<e.length;Q++){var t=e[Q];B+=t.origScrollLeft-t.getScrollLeft()}return B},A.prototype.computeTop=function(){for(var B=this.origRect.top,Q=0,e=this.scrollCaches;Q<e.length;Q++){var t=e[Q];B+=t.origScrollTop-t.getScrollTop()}return B},A.prototype.isWithinClipping=function(B,Q){for(var e={left:B,top:Q},t=0,n=this.scrollCaches;t<n.length;t++){var g=n[t];if(!F2(g.getEventTarget())&&!nL(e,g.clientRect))return!1}return!0},A}();function F2(A){var B=A.tagName;return B==="HTML"||B==="BODY"}var fs=function(){function A(B,Q){var e=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(t){var n=e.dragging;e.initialHit=null,e.movingHit=null,e.finalHit=null,e.prepareHits(),e.processFirstCoord(t),e.initialHit||!e.requireInitial?(n.setIgnoreMove(!1),e.emitter.trigger("pointerdown",t)):n.setIgnoreMove(!0)},this.handleDragStart=function(t){e.emitter.trigger("dragstart",t),e.handleMove(t,!0)},this.handleDragMove=function(t){e.emitter.trigger("dragmove",t),e.handleMove(t)},this.handlePointerUp=function(t){e.releaseHits(),e.emitter.trigger("pointerup",t)},this.handleDragEnd=function(t){e.movingHit&&e.emitter.trigger("hitupdate",null,!0,t),e.finalHit=e.movingHit,e.movingHit=null,e.emitter.trigger("dragend",t)},this.droppableStore=Q,B.emitter.on("pointerdown",this.handlePointerDown),B.emitter.on("dragstart",this.handleDragStart),B.emitter.on("dragmove",this.handleDragMove),B.emitter.on("pointerup",this.handlePointerUp),B.emitter.on("dragend",this.handleDragEnd),this.dragging=B,this.emitter=new us}return A.prototype.processFirstCoord=function(B){var Q={left:B.pageX,top:B.pageY},e=Q,t=B.subjectEl,n;t instanceof HTMLElement&&(n=BF(t),e=gL(e,n));var g=this.initialHit=this.queryHitForOffset(e.left,e.top);if(g){if(this.useSubjectCenter&&n){var E=UR(n,g.rect);E&&(e=EL(E))}this.coordAdjust=rL(e,Q)}else this.coordAdjust={left:0,top:0}},A.prototype.handleMove=function(B,Q){var e=this.queryHitForOffset(B.pageX+this.coordAdjust.left,B.pageY+this.coordAdjust.top);(Q||!Us(this.movingHit,e))&&(this.movingHit=e,this.emitter.trigger("hitupdate",e,!1,B))},A.prototype.prepareHits=function(){this.offsetTrackers=qn(this.droppableStore,function(B){return B.component.prepareHits(),new D2(B.el)})},A.prototype.releaseHits=function(){var B=this.offsetTrackers;for(var Q in B)B[Q].destroy();this.offsetTrackers={}},A.prototype.queryHitForOffset=function(B,Q){var e=this,t=e.droppableStore,n=e.offsetTrackers,g=null;for(var E in t){var r=t[E].component,C=n[E];if(C&&C.isWithinClipping(B,Q)){var i=C.computeLeft(),o=C.computeTop(),a=B-i,s=Q-o,I=C.origRect,D=I.right-I.left,c=I.bottom-I.top;if(a>=0&&a<D&&s>=0&&s<c){var l=r.queryHit(a,s,D,c);l&&Fs(l.dateProfile.activeRange,l.dateSpan.range)&&(!g||l.layer>g.layer)&&(l.componentId=E,l.context=r.context,l.rect.left+=i,l.rect.right+=i,l.rect.top+=o,l.rect.bottom+=o,g=l)}}}return g},A}();function Us(A,B){return!A&&!B?!0:Boolean(A)!==Boolean(B)?!1:vZ(A.dateSpan,B.dateSpan)}function Em(A,B){for(var Q={},e=0,t=B.pluginHooks.datePointTransforms;e<t.length;e++){var n=t[e];m(Q,n(A,B))}return m(Q,u2(A,B.dateEnv)),Q}function u2(A,B){return{date:B.toDate(A.range.start),dateStr:B.formatIso(A.range.start,{omitTime:A.allDay}),allDay:A.allDay}}var d2=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;e.handlePointerDown=function(n){var g=e.dragging,E=n.origEvent.target;g.setIgnoreMove(!e.component.isValidDateDownEl(E))},e.handleDragEnd=function(n){var g=e.component,E=e.dragging.pointer;if(!E.wasTouchScroll){var r=e.hitDragging,C=r.initialHit,i=r.finalHit;if(C&&i&&Us(C,i)){var o=g.context,a=m(m({},Em(C.dateSpan,o)),{dayEl:C.dayEl,jsEvent:n.origEvent,view:o.viewApi||o.calendarApi.view});o.emitter.trigger("dateClick",a)}}},e.dragging=new XC(Q.el),e.dragging.autoScroller.isEnabled=!1;var t=e.hitDragging=new fs(e.dragging,nF(Q));return t.emitter.on("pointerdown",e.handlePointerDown),t.emitter.on("dragend",e.handleDragEnd),e}return B.prototype.destroy=function(){this.dragging.destroy()},B}(dE),f2=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;e.dragSelection=null,e.handlePointerDown=function(r){var C=e,i=C.component,o=C.dragging,a=i.context.options,s=a.selectable&&i.isValidDateDownEl(r.origEvent.target);o.setIgnoreMove(!s),o.delay=r.isTouch?U2(i):null},e.handleDragStart=function(r){e.component.context.calendarApi.unselect(r)},e.handleHitUpdate=function(r,C){var i=e.component.context,o=null,a=!1;if(r){var s=e.hitDragging.initialHit,I=r.componentId===s.componentId&&e.isHitComboAllowed&&!e.isHitComboAllowed(s,r);I||(o=M2(s,r,i.pluginHooks.dateSelectionTransformers)),(!o||!EH(o,r.dateProfile,i))&&(a=!0,o=null)}o?i.dispatch({type:"SELECT_DATES",selection:o}):C||i.dispatch({type:"UNSELECT_DATES"}),a?XD():HD(),C||(e.dragSelection=o)},e.handlePointerUp=function(r){e.dragSelection&&(IR(e.dragSelection,r,e.component.context),e.dragSelection=null)};var t=Q.component,n=t.context.options,g=e.dragging=new XC(Q.el);g.touchScrollAllowed=!1,g.minDistance=n.selectMinDistance||0,g.autoScroller.isEnabled=n.dragScroll;var E=e.hitDragging=new fs(e.dragging,nF(Q));return E.emitter.on("pointerdown",e.handlePointerDown),E.emitter.on("dragstart",e.handleDragStart),E.emitter.on("hitupdate",e.handleHitUpdate),E.emitter.on("pointerup",e.handlePointerUp),e}return B.prototype.destroy=function(){this.dragging.destroy()},B}(dE);function U2(A){var B=A.context.options,Q=B.selectLongPressDelay;return Q==null&&(Q=B.longPressDelay),Q}function M2(A,B,Q){var e=A.dateSpan,t=B.dateSpan,n=[e.range.start,e.range.end,t.range.start,t.range.end];n.sort(US);for(var g={},E=0,r=Q;E<r.length;E++){var C=r[E],i=C(A,B);if(i===!1)return null;i&&m(g,i)}return g.range={start:n[0],end:n[3]},g.allDay=e.allDay,g}var rm=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;e.subjectEl=null,e.subjectSeg=null,e.isDragging=!1,e.eventRange=null,e.relevantEvents=null,e.receivingContext=null,e.validMutation=null,e.mutatedRelevantEvents=null,e.handlePointerDown=function(r){var C=r.origEvent.target,i=e,o=i.component,a=i.dragging,s=a.mirror,I=o.context.options,D=o.context;e.subjectEl=r.subjectEl;var c=e.subjectSeg=eE(r.subjectEl),l=e.eventRange=c.eventRange,w=l.instance.instanceId;e.relevantEvents=zD(D.getCurrentData().eventStore,w),a.minDistance=r.isTouch?0:I.eventDragMinDistance,a.delay=r.isTouch&&w!==o.props.eventSelection?p2(o):null,I.fixedMirrorParent?s.parentNode=I.fixedMirrorParent:s.parentNode=kB(C,".fc"),s.revertDuration=I.dragRevertDuration;var u=o.isValidSegDownEl(C)&&!kB(C,".fc-event-resizer");a.setIgnoreMove(!u),e.isDragging=u&&r.subjectEl.classList.contains("fc-event-draggable")},e.handleDragStart=function(r){var C=e.component.context,i=e.eventRange,o=i.instance.instanceId;r.isTouch?o!==e.component.props.eventSelection&&C.dispatch({type:"SELECT_EVENT",eventInstanceId:o}):C.dispatch({type:"UNSELECT_EVENT"}),e.isDragging&&(C.calendarApi.unselect(r),C.emitter.trigger("eventDragStart",{el:e.subjectEl,event:new qA(C,i.def,i.instance),jsEvent:r.origEvent,view:C.viewApi}))},e.handleHitUpdate=function(r,C){if(!!e.isDragging){var i=e.relevantEvents,o=e.hitDragging.initialHit,a=e.component.context,s=null,I=null,D=null,c=!1,l={affectedEvents:i,mutatedEvents:jQ(),isEvent:!0};if(r){s=r.context;var w=s.options;a===s||w.editable&&w.droppable?(I=h2(o,r,s.getCurrentData().pluginHooks.eventDragMutationMassagers),I&&(D=_D(i,s.getCurrentData().eventUiBases,I,s),l.mutatedEvents=D,VR(l,r.dateProfile,s)||(c=!0,I=null,D=null,l.mutatedEvents=jQ()))):s=null}e.displayDrag(s,l),c?XD():HD(),C||(a===s&&Us(o,r)&&(I=null),e.dragging.setMirrorNeedsRevert(!I),e.dragging.setMirrorIsVisible(!r||!qG(e.subjectEl).querySelector(".fc-event-mirror")),e.receivingContext=s,e.validMutation=I,e.mutatedRelevantEvents=D)}},e.handlePointerUp=function(){e.isDragging||e.cleanup()},e.handleDragEnd=function(r){if(e.isDragging){var C=e.component.context,i=C.viewApi,o=e,a=o.receivingContext,s=o.validMutation,I=e.eventRange.def,D=e.eventRange.instance,c=new qA(C,I,D),l=e.relevantEvents,w=e.mutatedRelevantEvents,u=e.hitDragging.finalHit;if(e.clearDrag(),C.emitter.trigger("eventDragStop",{el:e.subjectEl,event:c,jsEvent:r.origEvent,view:i}),s){if(a===C){var f=new qA(C,w.defs[I.defId],D?w.instances[D.instanceId]:null);C.dispatch({type:"MERGE_EVENTS",eventStore:w});for(var M={oldEvent:c,event:f,relatedEvents:mn(w,C,D),revert:function(){C.dispatch({type:"MERGE_EVENTS",eventStore:l})}},p={},h=0,G=C.getCurrentData().pluginHooks.eventDropTransformers;h<G.length;h++){var J=G[h];m(p,J(s,C))}C.emitter.trigger("eventDrop",m(m(m({},M),p),{el:r.subjectEl,delta:s.datesDelta,jsEvent:r.origEvent,view:i})),C.emitter.trigger("eventChange",M)}else if(a){var k={event:c,relatedEvents:mn(l,C,D),revert:function(){C.dispatch({type:"MERGE_EVENTS",eventStore:l})}};C.emitter.trigger("eventLeave",m(m({},k),{draggedEl:r.subjectEl,view:i})),C.dispatch({type:"REMOVE_EVENTS",eventStore:l}),C.emitter.trigger("eventRemove",k);var S=w.defs[I.defId],W=w.instances[D.instanceId],x=new qA(a,S,W);a.dispatch({type:"MERGE_EVENTS",eventStore:w});var tA={event:x,relatedEvents:mn(w,a,W),revert:function(){a.dispatch({type:"REMOVE_EVENTS",eventStore:w})}};a.emitter.trigger("eventAdd",tA),r.isTouch&&a.dispatch({type:"SELECT_EVENT",eventInstanceId:D.instanceId}),a.emitter.trigger("drop",m(m({},Em(u.dateSpan,a)),{draggedEl:r.subjectEl,jsEvent:r.origEvent,view:u.context.viewApi})),a.emitter.trigger("eventReceive",m(m({},tA),{draggedEl:r.subjectEl,view:u.context.viewApi}))}}else C.emitter.trigger("_noEventDrop")}e.cleanup()};var t=e.component,n=t.context.options,g=e.dragging=new XC(Q.el);g.pointer.selector=B.SELECTOR,g.touchScrollAllowed=!1,g.autoScroller.isEnabled=n.dragScroll;var E=e.hitDragging=new fs(e.dragging,Pc);return E.useSubjectCenter=Q.useEventCenter,E.emitter.on("pointerdown",e.handlePointerDown),E.emitter.on("dragstart",e.handleDragStart),E.emitter.on("hitupdate",e.handleHitUpdate),E.emitter.on("pointerup",e.handlePointerUp),E.emitter.on("dragend",e.handleDragEnd),e}return B.prototype.destroy=function(){this.dragging.destroy()},B.prototype.displayDrag=function(Q,e){var t=this.component.context,n=this.receivingContext;n&&n!==Q&&(n===t?n.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:e.affectedEvents,mutatedEvents:jQ(),isEvent:!0}}):n.dispatch({type:"UNSET_EVENT_DRAG"})),Q&&Q.dispatch({type:"SET_EVENT_DRAG",state:e})},B.prototype.clearDrag=function(){var Q=this.component.context,e=this.receivingContext;e&&e.dispatch({type:"UNSET_EVENT_DRAG"}),Q!==e&&Q.dispatch({type:"UNSET_EVENT_DRAG"})},B.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null},B.SELECTOR=".fc-event-draggable, .fc-event-resizable",B}(dE);function h2(A,B,Q){var e=A.dateSpan,t=B.dateSpan,n=e.range.start,g=t.range.start,E={};e.allDay!==t.allDay&&(E.allDay=t.allDay,E.hasEnd=B.context.options.allDayMaintainDuration,t.allDay&&(n=HA(n)));var r=Ng(n,g,A.context.dateEnv,A.componentId===B.componentId?A.largeUnit:null);r.milliseconds&&(E.allDay=!1);for(var C={datesDelta:r,standardProps:E},i=0,o=Q;i<o.length;i++){var a=o[i];a(C,A,B)}return C}function p2(A){var B=A.context.options,Q=B.eventLongPressDelay;return Q==null&&(Q=B.longPressDelay),Q}var G2=function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;e.draggingSegEl=null,e.draggingSeg=null,e.eventRange=null,e.relevantEvents=null,e.validMutation=null,e.mutatedRelevantEvents=null,e.handlePointerDown=function(E){var r=e.component,C=e.querySegEl(E),i=eE(C),o=e.eventRange=i.eventRange;e.dragging.minDistance=r.context.options.eventDragMinDistance,e.dragging.setIgnoreMove(!e.component.isValidSegDownEl(E.origEvent.target)||E.isTouch&&e.component.props.eventSelection!==o.instance.instanceId)},e.handleDragStart=function(E){var r=e.component.context,C=e.eventRange;e.relevantEvents=zD(r.getCurrentData().eventStore,e.eventRange.instance.instanceId);var i=e.querySegEl(E);e.draggingSegEl=i,e.draggingSeg=eE(i),r.calendarApi.unselect(),r.emitter.trigger("eventResizeStart",{el:i,event:new qA(r,C.def,C.instance),jsEvent:E.origEvent,view:r.viewApi})},e.handleHitUpdate=function(E,r,C){var i=e.component.context,o=e.relevantEvents,a=e.hitDragging.initialHit,s=e.eventRange.instance,I=null,D=null,c=!1,l={affectedEvents:o,mutatedEvents:jQ(),isEvent:!0};if(E){var w=E.componentId===a.componentId&&e.isHitComboAllowed&&!e.isHitComboAllowed(a,E);w||(I=R2(a,E,C.subjectEl.classList.contains("fc-event-resizer-start"),s.range))}I&&(D=_D(o,i.getCurrentData().eventUiBases,I,i),l.mutatedEvents=D,VR(l,E.dateProfile,i)||(c=!0,I=null,D=null,l.mutatedEvents=null)),D?i.dispatch({type:"SET_EVENT_RESIZE",state:l}):i.dispatch({type:"UNSET_EVENT_RESIZE"}),c?XD():HD(),r||(I&&Us(a,E)&&(I=null),e.validMutation=I,e.mutatedRelevantEvents=D)},e.handleDragEnd=function(E){var r=e.component.context,C=e.eventRange.def,i=e.eventRange.instance,o=new qA(r,C,i),a=e.relevantEvents,s=e.mutatedRelevantEvents;if(r.emitter.trigger("eventResizeStop",{el:e.draggingSegEl,event:o,jsEvent:E.origEvent,view:r.viewApi}),e.validMutation){var I=new qA(r,s.defs[C.defId],i?s.instances[i.instanceId]:null);r.dispatch({type:"MERGE_EVENTS",eventStore:s});var D={oldEvent:o,event:I,relatedEvents:mn(s,r,i),revert:function(){r.dispatch({type:"MERGE_EVENTS",eventStore:a})}};r.emitter.trigger("eventResize",m(m({},D),{el:e.draggingSegEl,startDelta:e.validMutation.startDelta||MA(0),endDelta:e.validMutation.endDelta||MA(0),jsEvent:E.origEvent,view:r.viewApi})),r.emitter.trigger("eventChange",D)}else r.emitter.trigger("_noEventResize");e.draggingSeg=null,e.relevantEvents=null,e.validMutation=null};var t=Q.component,n=e.dragging=new XC(Q.el);n.pointer.selector=".fc-event-resizer",n.touchScrollAllowed=!1,n.autoScroller.isEnabled=t.context.options.dragScroll;var g=e.hitDragging=new fs(e.dragging,nF(Q));return g.emitter.on("pointerdown",e.handlePointerDown),g.emitter.on("dragstart",e.handleDragStart),g.emitter.on("hitupdate",e.handleHitUpdate),g.emitter.on("dragend",e.handleDragEnd),e}return B.prototype.destroy=function(){this.dragging.destroy()},B.prototype.querySegEl=function(Q){return kB(Q.subjectEl,".fc-event")},B}(dE);function R2(A,B,Q,e){var t=A.context.dateEnv,n=A.dateSpan.range.start,g=B.dateSpan.range.start,E=Ng(n,g,t,A.largeUnit);if(Q){if(t.add(e.start,E)<e.end)return{startDelta:E}}else if(t.add(e.end,E)>e.start)return{endDelta:E};return null}var m2=function(){function A(B){var Q=this;this.context=B,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=function(t){t.jsEvent&&(Q.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=function(t){var n=Q.context.options.unselectCancel,g=jG(t.origEvent);Q.matchesCancel=!!kB(g,n),Q.matchesEvent=!!kB(g,rm.SELECTOR)},this.onDocumentPointerUp=function(t){var n=Q.context,g=Q.documentPointer,E=n.getCurrentData();if(!g.wasTouchScroll){if(E.dateSelection&&!Q.isRecentPointerDateSelect){var r=n.options.unselectAuto;r&&(!r||!Q.matchesCancel)&&n.calendarApi.unselect(t)}E.eventSelection&&!Q.matchesEvent&&n.dispatch({type:"UNSELECT_EVENT"})}Q.isRecentPointerDateSelect=!1};var e=this.documentPointer=new rF(document);e.shouldIgnoreMove=!0,e.shouldWatchScroll=!1,e.emitter.on("pointerdown",this.onDocumentPointerDown),e.emitter.on("pointerup",this.onDocumentPointerUp),B.emitter.on("select",this.onSelect)}return A.prototype.destroy=function(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()},A}(),Y2={fixedMirrorParent:v},N2={dateClick:v,eventDragStart:v,eventDragStop:v,eventDrop:v,eventResizeStart:v,eventResizeStop:v,eventResize:v,drop:v,eventReceive:v,eventLeave:v};gF.dataAttrPrefix="";(function(A){BA(B,A);function B(Q){var e=A.call(this,Q)||this;e.shouldIgnoreMove=!1,e.mirrorSelector="",e.currentMirrorEl=null,e.handlePointerDown=function(n){e.emitter.trigger("pointerdown",n),e.shouldIgnoreMove||e.emitter.trigger("dragstart",n)},e.handlePointerMove=function(n){e.shouldIgnoreMove||e.emitter.trigger("dragmove",n)},e.handlePointerUp=function(n){e.emitter.trigger("pointerup",n),e.shouldIgnoreMove||e.emitter.trigger("dragend",n)};var t=e.pointer=new rF(Q);return t.emitter.on("pointerdown",e.handlePointerDown),t.emitter.on("pointermove",e.handlePointerMove),t.emitter.on("pointerup",e.handlePointerUp),e}return B.prototype.destroy=function(){this.pointer.destroy()},B.prototype.setIgnoreMove=function(Q){this.shouldIgnoreMove=Q},B.prototype.setMirrorIsVisible=function(Q){if(Q)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var e=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;e&&(this.currentMirrorEl=e,e.style.visibility="hidden")}},B})(HR);var y2=jt({componentInteractions:[d2,f2,rm,G2],calendarInteractions:[m2],elementDraggingImpl:XC,optionRefiners:Y2,listenerRefiners:N2});function v2(){const A=TJ(e=>e.calendarTest.value);PG();function B(e){}function Q(){alert("Event clicked!")}return d.exports.createElement("div",{className:"Calendar w-100"},d.exports.createElement(TH,{headerToolbar:{start:"dayGridMonth,dayGridWeek,today",center:"title",end:"prev next"},plugins:[i2,y2],initialView:"dayGridMonth",height:"95%",events:A,dateClick:B,eventClick:Q}))}function zQ(A){for(var B=arguments.length,Q=Array(B>1?B-1:0),e=1;e<B;e++)Q[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+A+(Q.length?" "+Q.map(function(t){return"'"+t+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Vt(A){return!!A&&!!A[ZA]}function qe(A){return!!A&&(function(B){if(!B||typeof B!="object")return!1;var Q=Object.getPrototypeOf(B);if(Q===null)return!0;var e=Object.hasOwnProperty.call(Q,"constructor")&&Q.constructor;return e===Object||typeof e=="function"&&Function.toString.call(e)===T2}(A)||Array.isArray(A)||!!A[_U]||!!A.constructor[_U]||CF(A)||iF(A))}function Hn(A,B,Q){Q===void 0&&(Q=!1),fE(A)===0?(Q?Object.keys:Og)(A).forEach(function(e){Q&&typeof e=="symbol"||B(e,A[e],A)}):A.forEach(function(e,t){return B(t,e,A)})}function fE(A){var B=A[ZA];return B?B.i>3?B.i-4:B.i:Array.isArray(A)?1:CF(A)?2:iF(A)?3:0}function Wg(A,B){return fE(A)===2?A.has(B):Object.prototype.hasOwnProperty.call(A,B)}function b2(A,B){return fE(A)===2?A.get(B):A[B]}function Cm(A,B,Q){var e=fE(A);e===2?A.set(B,Q):e===3?(A.delete(B),A.add(Q)):A[B]=Q}function im(A,B){return A===B?A!==0||1/A==1/B:A!=A&&B!=B}function CF(A){return X2&&A instanceof Map}function iF(A){return H2&&A instanceof Set}function sn(A){return A.o||A.t}function oF(A){if(Array.isArray(A))return Array.prototype.slice.call(A);var B=am(A);delete B[ZA];for(var Q=Og(B),e=0;e<Q.length;e++){var t=Q[e],n=B[t];n.writable===!1&&(n.writable=!0,n.configurable=!0),(n.get||n.set)&&(B[t]={configurable:!0,writable:!0,enumerable:n.enumerable,value:A[t]})}return Object.create(Object.getPrototypeOf(A),B)}function aF(A,B){return B===void 0&&(B=!1),sF(A)||Vt(A)||!qe(A)||(fE(A)>1&&(A.set=A.add=A.clear=A.delete=k2),Object.freeze(A),B&&Hn(A,function(Q,e){return aF(e,!0)},!0)),A}function k2(){zQ(2)}function sF(A){return A==null||typeof A!="object"||Object.isFrozen(A)}function De(A){var B=Aw[A];return B||zQ(18,A),B}function J2(A,B){Aw[A]||(Aw[A]=B)}function qc(){return iC}function El(A,B){B&&(De("Patches"),A.u=[],A.s=[],A.v=B)}function _o(A){_c(A),A.p.forEach(S2),A.p=null}function _c(A){A===iC&&(iC=A.l)}function xU(A){return iC={p:[],l:iC,h:A,m:!0,_:0}}function S2(A){var B=A[ZA];B.i===0||B.i===1?B.j():B.O=!0}function rl(A,B){B._=B.p.length;var Q=B.p[0],e=A!==void 0&&A!==Q;return B.h.g||De("ES5").S(B,A,e),e?(Q[ZA].P&&(_o(B),zQ(4)),qe(A)&&(A=$o(B,A),B.l||Aa(B,A)),B.u&&De("Patches").M(Q[ZA].t,A,B.u,B.s)):A=$o(B,Q,[]),_o(B),B.u&&B.v(B.u,B.s),A!==om?A:void 0}function $o(A,B,Q){if(sF(B))return B;var e=B[ZA];if(!e)return Hn(B,function(n,g){return zU(A,e,B,n,g,Q)},!0),B;if(e.A!==A)return B;if(!e.P)return Aa(A,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var t=e.i===4||e.i===5?e.o=oF(e.k):e.o;Hn(e.i===3?new Set(t):t,function(n,g){return zU(A,e,t,n,g,Q)}),Aa(A,t,!1),Q&&A.u&&De("Patches").R(e,Q,A.u,A.s)}return e.o}function zU(A,B,Q,e,t,n){if(Vt(t)){var g=$o(A,t,n&&B&&B.i!==3&&!Wg(B.D,e)?n.concat(e):void 0);if(Cm(Q,e,g),!Vt(g))return;A.m=!1}if(qe(t)&&!sF(t)){if(!A.h.F&&A._<1)return;$o(A,t),B&&B.A.l||Aa(A,t)}}function Aa(A,B,Q){Q===void 0&&(Q=!1),A.h.F&&A.m&&aF(B,Q)}function Cl(A,B){var Q=A[ZA];return(Q?sn(Q):A)[B]}function PU(A,B){if(B in A)for(var Q=Object.getPrototypeOf(A);Q;){var e=Object.getOwnPropertyDescriptor(Q,B);if(e)return e;Q=Object.getPrototypeOf(Q)}}function Ft(A){A.P||(A.P=!0,A.l&&Ft(A.l))}function il(A){A.o||(A.o=oF(A.t))}function $c(A,B,Q){var e=CF(B)?De("MapSet").N(B,Q):iF(B)?De("MapSet").T(B,Q):A.g?function(t,n){var g=Array.isArray(t),E={i:g?1:0,A:n?n.A:qc(),P:!1,I:!1,D:{},l:n,t,k:null,o:null,j:null,C:!1},r=E,C=oC;g&&(r=[E],C=sr);var i=Proxy.revocable(r,C),o=i.revoke,a=i.proxy;return E.k=a,E.j=o,a}(B,Q):De("ES5").J(B,Q);return(Q?Q.A:qc()).p.push(e),e}function Z2(A){return Vt(A)||zQ(22,A),function B(Q){if(!qe(Q))return Q;var e,t=Q[ZA],n=fE(Q);if(t){if(!t.P&&(t.i<4||!De("ES5").K(t)))return t.t;t.I=!0,e=KU(Q,n),t.I=!1}else e=KU(Q,n);return Hn(e,function(g,E){t&&b2(t.t,g)===E||Cm(e,g,B(E))}),n===3?new Set(e):e}(A)}function KU(A,B){switch(B){case 2:return new Map(A);case 3:return Array.from(A)}return oF(A)}function L2(){function A(n,g){var E=t[n];return E?E.enumerable=g:t[n]=E={configurable:!0,enumerable:g,get:function(){var r=this[ZA];return oC.get(r,n)},set:function(r){var C=this[ZA];oC.set(C,n,r)}},E}function B(n){for(var g=n.length-1;g>=0;g--){var E=n[g][ZA];if(!E.P)switch(E.i){case 5:e(E)&&Ft(E);break;case 4:Q(E)&&Ft(E)}}}function Q(n){for(var g=n.t,E=n.k,r=Og(E),C=r.length-1;C>=0;C--){var i=r[C];if(i!==ZA){var o=g[i];if(o===void 0&&!Wg(g,i))return!0;var a=E[i],s=a&&a[ZA];if(s?s.t!==o:!im(a,o))return!0}}var I=!!g[ZA];return r.length!==Og(g).length+(I?0:1)}function e(n){var g=n.k;if(g.length!==n.t.length)return!0;var E=Object.getOwnPropertyDescriptor(g,g.length-1);if(E&&!E.get)return!0;for(var r=0;r<g.length;r++)if(!g.hasOwnProperty(r))return!0;return!1}var t={};J2("ES5",{J:function(n,g){var E=Array.isArray(n),r=function(i,o){if(i){for(var a=Array(o.length),s=0;s<o.length;s++)Object.defineProperty(a,""+s,A(s,!0));return a}var I=am(o);delete I[ZA];for(var D=Og(I),c=0;c<D.length;c++){var l=D[c];I[l]=A(l,i||!!I[l].enumerable)}return Object.create(Object.getPrototypeOf(o),I)}(E,n),C={i:E?5:4,A:g?g.A:qc(),P:!1,I:!1,D:{},l:g,t:n,k:r,o:null,O:!1,C:!1};return Object.defineProperty(r,ZA,{value:C,writable:!0}),r},S:function(n,g,E){E?Vt(g)&&g[ZA].A===n&&B(n.p):(n.u&&function r(C){if(C&&typeof C=="object"){var i=C[ZA];if(i){var o=i.t,a=i.k,s=i.D,I=i.i;if(I===4)Hn(a,function(u){u!==ZA&&(o[u]!==void 0||Wg(o,u)?s[u]||r(a[u]):(s[u]=!0,Ft(i)))}),Hn(o,function(u){a[u]!==void 0||Wg(a,u)||(s[u]=!1,Ft(i))});else if(I===5){if(e(i)&&(Ft(i),s.length=!0),a.length<o.length)for(var D=a.length;D<o.length;D++)s[D]=!1;else for(var c=o.length;c<a.length;c++)s[c]=!0;for(var l=Math.min(a.length,o.length),w=0;w<l;w++)a.hasOwnProperty(w)||(s[w]=!0),s[w]===void 0&&r(a[w])}}}}(n.p[0]),B(n.p))},K:function(n){return n.i===4?Q(n):e(n)}})}var jU,iC,IF=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",X2=typeof Map<"u",H2=typeof Set<"u",qU=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",om=IF?Symbol.for("immer-nothing"):((jU={})["immer-nothing"]=!0,jU),_U=IF?Symbol.for("immer-draftable"):"__$immer_draftable",ZA=IF?Symbol.for("immer-state"):"__$immer_state",T2=""+Object.prototype.constructor,Og=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(A){return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))}:Object.getOwnPropertyNames,am=Object.getOwnPropertyDescriptors||function(A){var B={};return Og(A).forEach(function(Q){B[Q]=Object.getOwnPropertyDescriptor(A,Q)}),B},Aw={},oC={get:function(A,B){if(B===ZA)return A;var Q=sn(A);if(!Wg(Q,B))return function(t,n,g){var E,r=PU(n,g);return r?"value"in r?r.value:(E=r.get)===null||E===void 0?void 0:E.call(t.k):void 0}(A,Q,B);var e=Q[B];return A.I||!qe(e)?e:e===Cl(A.t,B)?(il(A),A.o[B]=$c(A.A.h,e,A)):e},has:function(A,B){return B in sn(A)},ownKeys:function(A){return Reflect.ownKeys(sn(A))},set:function(A,B,Q){var e=PU(sn(A),B);if(e!=null&&e.set)return e.set.call(A.k,Q),!0;if(!A.P){var t=Cl(sn(A),B),n=t==null?void 0:t[ZA];if(n&&n.t===Q)return A.o[B]=Q,A.D[B]=!1,!0;if(im(Q,t)&&(Q!==void 0||Wg(A.t,B)))return!0;il(A),Ft(A)}return A.o[B]===Q&&typeof Q!="number"&&(Q!==void 0||B in A.o)||(A.o[B]=Q,A.D[B]=!0,!0)},deleteProperty:function(A,B){return Cl(A.t,B)!==void 0||B in A.t?(A.D[B]=!1,il(A),Ft(A)):delete A.D[B],A.o&&delete A.o[B],!0},getOwnPropertyDescriptor:function(A,B){var Q=sn(A),e=Reflect.getOwnPropertyDescriptor(Q,B);return e&&{writable:!0,configurable:A.i!==1||B!=="length",enumerable:e.enumerable,value:Q[B]}},defineProperty:function(){zQ(11)},getPrototypeOf:function(A){return Object.getPrototypeOf(A.t)},setPrototypeOf:function(){zQ(12)}},sr={};Hn(oC,function(A,B){sr[A]=function(){return arguments[0]=arguments[0][0],B.apply(this,arguments)}}),sr.deleteProperty=function(A,B){return sr.set.call(this,A,B,void 0)},sr.set=function(A,B,Q){return oC.set.call(this,A[0],B,Q,A[0])};var W2=function(){function A(Q){var e=this;this.g=qU,this.F=!0,this.produce=function(t,n,g){if(typeof t=="function"&&typeof n!="function"){var E=n;n=t;var r=e;return function(D){var c=this;D===void 0&&(D=E);for(var l=arguments.length,w=Array(l>1?l-1:0),u=1;u<l;u++)w[u-1]=arguments[u];return r.produce(D,function(f){var M;return(M=n).call.apply(M,[c,f].concat(w))})}}var C;if(typeof n!="function"&&zQ(6),g!==void 0&&typeof g!="function"&&zQ(7),qe(t)){var i=xU(e),o=$c(e,t,void 0),a=!0;try{C=n(o),a=!1}finally{a?_o(i):_c(i)}return typeof Promise<"u"&&C instanceof Promise?C.then(function(D){return El(i,g),rl(D,i)},function(D){throw _o(i),D}):(El(i,g),rl(C,i))}if(!t||typeof t!="object"){if((C=n(t))===void 0&&(C=t),C===om&&(C=void 0),e.F&&aF(C,!0),g){var s=[],I=[];De("Patches").M(t,C,s,I),g(s,I)}return C}zQ(21,t)},this.produceWithPatches=function(t,n){if(typeof t=="function")return function(C){for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return e.produceWithPatches(C,function(s){return t.apply(void 0,[s].concat(o))})};var g,E,r=e.produce(t,n,function(C,i){g=C,E=i});return typeof Promise<"u"&&r instanceof Promise?r.then(function(C){return[C,g,E]}):[r,g,E]},typeof(Q==null?void 0:Q.useProxies)=="boolean"&&this.setUseProxies(Q.useProxies),typeof(Q==null?void 0:Q.autoFreeze)=="boolean"&&this.setAutoFreeze(Q.autoFreeze)}var B=A.prototype;return B.createDraft=function(Q){qe(Q)||zQ(8),Vt(Q)&&(Q=Z2(Q));var e=xU(this),t=$c(this,Q,void 0);return t[ZA].C=!0,_c(e),t},B.finishDraft=function(Q,e){var t=Q&&Q[ZA],n=t.A;return El(n,e),rl(void 0,n)},B.setAutoFreeze=function(Q){this.F=Q},B.setUseProxies=function(Q){Q&&!qU&&zQ(20),this.g=Q},B.applyPatches=function(Q,e){var t;for(t=e.length-1;t>=0;t--){var n=e[t];if(n.path.length===0&&n.op==="replace"){Q=n.value;break}}t>-1&&(e=e.slice(t+1));var g=De("Patches").$;return Vt(Q)?g(Q,e):this.produce(Q,function(E){return g(E,e)})},A}(),fQ=new W2,sm=fQ.produce;fQ.produceWithPatches.bind(fQ);fQ.setAutoFreeze.bind(fQ);fQ.setUseProxies.bind(fQ);fQ.applyPatches.bind(fQ);fQ.createDraft.bind(fQ);fQ.finishDraft.bind(fQ);function O2(A,B,Q){return B in A?Object.defineProperty(A,B,{value:Q,enumerable:!0,configurable:!0,writable:!0}):A[B]=Q,A}function $U(A,B){var Q=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);B&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable})),Q.push.apply(Q,e)}return Q}function AM(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B]!=null?arguments[B]:{};B%2?$U(Object(Q),!0).forEach(function(e){O2(A,e,Q[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(Q)):$U(Object(Q)).forEach(function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(Q,e))})}return A}function vB(A){return"Minified Redux error #"+A+"; visit https://redux.js.org/Errors?code="+A+" for the full message or use the non-minified dev environment for full errors. "}var BM=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ol=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ba={INIT:"@@redux/INIT"+ol(),REPLACE:"@@redux/REPLACE"+ol(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ol()}};function V2(A){if(typeof A!="object"||A===null)return!1;for(var B=A;Object.getPrototypeOf(B)!==null;)B=Object.getPrototypeOf(B);return Object.getPrototypeOf(A)===B}function Im(A,B,Q){var e;if(typeof B=="function"&&typeof Q=="function"||typeof Q=="function"&&typeof arguments[3]=="function")throw new Error(vB(0));if(typeof B=="function"&&typeof Q>"u"&&(Q=B,B=void 0),typeof Q<"u"){if(typeof Q!="function")throw new Error(vB(1));return Q(Im)(A,B)}if(typeof A!="function")throw new Error(vB(2));var t=A,n=B,g=[],E=g,r=!1;function C(){E===g&&(E=g.slice())}function i(){if(r)throw new Error(vB(3));return n}function o(D){if(typeof D!="function")throw new Error(vB(4));if(r)throw new Error(vB(5));var c=!0;return C(),E.push(D),function(){if(!!c){if(r)throw new Error(vB(6));c=!1,C();var w=E.indexOf(D);E.splice(w,1),g=null}}}function a(D){if(!V2(D))throw new Error(vB(7));if(typeof D.type>"u")throw new Error(vB(8));if(r)throw new Error(vB(9));try{r=!0,n=t(n,D)}finally{r=!1}for(var c=g=E,l=0;l<c.length;l++){var w=c[l];w()}return D}function s(D){if(typeof D!="function")throw new Error(vB(10));t=D,a({type:Ba.REPLACE})}function I(){var D,c=o;return D={subscribe:function(w){if(typeof w!="object"||w===null)throw new Error(vB(11));function u(){w.next&&w.next(i())}u();var f=c(u);return{unsubscribe:f}}},D[BM]=function(){return this},D}return a({type:Ba.INIT}),e={dispatch:a,subscribe:o,getState:i,replaceReducer:s},e[BM]=I,e}function x2(A){Object.keys(A).forEach(function(B){var Q=A[B],e=Q(void 0,{type:Ba.INIT});if(typeof e>"u")throw new Error(vB(12));if(typeof Q(void 0,{type:Ba.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(vB(13))})}function z2(A){for(var B=Object.keys(A),Q={},e=0;e<B.length;e++){var t=B[e];typeof A[t]=="function"&&(Q[t]=A[t])}var n=Object.keys(Q),g;try{x2(Q)}catch(E){g=E}return function(r,C){if(r===void 0&&(r={}),g)throw g;for(var i=!1,o={},a=0;a<n.length;a++){var s=n[a],I=Q[s],D=r[s],c=I(D,C);if(typeof c>"u")throw C&&C.type,new Error(vB(14));o[s]=c,i=i||c!==D}return i=i||n.length!==Object.keys(r).length,i?o:r}}function Qa(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return B.length===0?function(e){return e}:B.length===1?B[0]:B.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function P2(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return function(e){return function(){var t=e.apply(void 0,arguments),n=function(){throw new Error(vB(15))},g={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},E=B.map(function(r){return r(g)});return n=Qa.apply(void 0,E)(t.dispatch),AM(AM({},t),{},{dispatch:n})}}}function lm(A){var B=function(e){var t=e.dispatch,n=e.getState;return function(g){return function(E){return typeof E=="function"?E(t,n,A):g(E)}}};return B}var cm=lm();cm.withExtraArgument=lm;const QM=cm;var K2=globalThis&&globalThis.__extends||function(){var A=function(B,Q){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},A(B,Q)};return function(B,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Class extends value "+String(Q)+" is not a constructor or null");A(B,Q);function e(){this.constructor=B}B.prototype=Q===null?Object.create(Q):(e.prototype=Q.prototype,new e)}}();globalThis&&globalThis.__generator;var ea=globalThis&&globalThis.__spreadArray||function(A,B){for(var Q=0,e=B.length,t=A.length;Q<e;Q++,t++)A[t]=B[Q];return A},j2=Object.defineProperty,eM=Object.getOwnPropertySymbols,q2=Object.prototype.hasOwnProperty,_2=Object.prototype.propertyIsEnumerable,tM=function(A,B,Q){return B in A?j2(A,B,{enumerable:!0,configurable:!0,writable:!0,value:Q}):A[B]=Q},aC=function(A,B){for(var Q in B||(B={}))q2.call(B,Q)&&tM(A,Q,B[Q]);if(eM)for(var e=0,t=eM(B);e<t.length;e++){var Q=t[e];_2.call(B,Q)&&tM(A,Q,B[Q])}return A},$2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Qa:Qa.apply(null,arguments)};function AT(A){if(typeof A!="object"||A===null)return!1;var B=Object.getPrototypeOf(A);if(B===null)return!0;for(var Q=B;Object.getPrototypeOf(Q)!==null;)Q=Object.getPrototypeOf(Q);return B===Q}var BT=function(A){K2(B,A);function B(){for(var Q=[],e=0;e<arguments.length;e++)Q[e]=arguments[e];var t=A.apply(this,Q)||this;return Object.setPrototypeOf(t,B.prototype),t}return Object.defineProperty(B,Symbol.species,{get:function(){return B},enumerable:!1,configurable:!0}),B.prototype.concat=function(){for(var Q=[],e=0;e<arguments.length;e++)Q[e]=arguments[e];return A.prototype.concat.apply(this,Q)},B.prototype.prepend=function(){for(var Q=[],e=0;e<arguments.length;e++)Q[e]=arguments[e];return Q.length===1&&Array.isArray(Q[0])?new(B.bind.apply(B,ea([void 0],Q[0].concat(this)))):new(B.bind.apply(B,ea([void 0],Q.concat(this))))},B}(Array);function Bw(A){return qe(A)?sm(A,function(){}):A}function QT(A){return typeof A=="boolean"}function eT(){return function(B){return tT(B)}}function tT(A){A===void 0&&(A={});var B=A.thunk,Q=B===void 0?!0:B;A.immutableCheck,A.serializableCheck;var e=new BT;return Q&&(QT(Q)?e.push(QM):e.push(QM.withExtraArgument(Q.extraArgument))),e}var nT=!0;function gT(A){var B=eT(),Q=A||{},e=Q.reducer,t=e===void 0?void 0:e,n=Q.middleware,g=n===void 0?B():n,E=Q.devTools,r=E===void 0?!0:E,C=Q.preloadedState,i=C===void 0?void 0:C,o=Q.enhancers,a=o===void 0?void 0:o,s;if(typeof t=="function")s=t;else if(AT(t))s=z2(t);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var I=g;typeof I=="function"&&(I=I(B));var D=P2.apply(void 0,I),c=Qa;r&&(c=$2(aC({trace:!nT},typeof r=="object"&&r)));var l=[D];Array.isArray(a)?l=ea([D],a):typeof a=="function"&&(l=a(l));var w=c.apply(void 0,l);return Im(s,i,w)}function sC(A,B){function Q(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(B){var n=B.apply(void 0,e);if(!n)throw new Error("prepareAction did not return an object");return aC(aC({type:A,payload:n.payload},"meta"in n&&{meta:n.meta}),"error"in n&&{error:n.error})}return{type:A,payload:e[0]}}return Q.toString=function(){return""+A},Q.type=A,Q.match=function(e){return e.type===A},Q}function wm(A){var B={},Q=[],e,t={addCase:function(n,g){var E=typeof n=="string"?n:n.type;if(E in B)throw new Error("addCase cannot be called with two reducers for the same action type");return B[E]=g,t},addMatcher:function(n,g){return Q.push({matcher:n,reducer:g}),t},addDefaultCase:function(n){return e=n,t}};return A(t),[B,Q,e]}function ET(A){return typeof A=="function"}function rT(A,B,Q,e){Q===void 0&&(Q=[]);var t=typeof B=="function"?wm(B):[B,Q,e],n=t[0],g=t[1],E=t[2],r;if(ET(A))r=function(){return Bw(A())};else{var C=Bw(A);r=function(){return C}}function i(o,a){o===void 0&&(o=r());var s=ea([n[a.type]],g.filter(function(I){var D=I.matcher;return D(a)}).map(function(I){var D=I.reducer;return D}));return s.filter(function(I){return!!I}).length===0&&(s=[E]),s.reduce(function(I,D){if(D)if(Vt(I)){var c=I,l=D(c,a);return typeof l>"u"?I:l}else{if(qe(I))return sm(I,function(w){return D(w,a)});var l=D(I,a);if(typeof l>"u"){if(I===null)return I;throw Error("A case reducer on a non-draftable value must not return undefined")}return l}return I},o)}return i.getInitialState=r,i}function CT(A,B){return A+"/"+B}function iT(A){var B=A.name;if(!B)throw new Error("`name` is a required option for createSlice");typeof process<"u";var Q=typeof A.initialState=="function"?A.initialState:Bw(A.initialState),e=A.reducers||{},t=Object.keys(e),n={},g={},E={};t.forEach(function(i){var o=e[i],a=CT(B,i),s,I;"reducer"in o?(s=o.reducer,I=o.prepare):s=o,n[i]=s,g[a]=s,E[i]=I?sC(a,I):sC(a)});function r(){var i=typeof A.extraReducers=="function"?wm(A.extraReducers):[A.extraReducers],o=i[0],a=o===void 0?{}:o,s=i[1],I=s===void 0?[]:s,D=i[2],c=D===void 0?void 0:D,l=aC(aC({},a),g);return rT(Q,l,I,c)}var C;return{name:B,reducer:function(i,o){return C||(C=r()),C(i,o)},actions:E,caseReducers:n,getInitialState:function(){return C||(C=r()),C.getInitialState()}}}var lF="listenerMiddleware";sC(lF+"/add");sC(lF+"/removeAll");sC(lF+"/remove");L2();const oT={value:[]},Dm=iT({name:"calendarSlice",initialState:oT,reducers:{addEvent:(A,B)=>{A.value.push(B.payload)}}}),aT=Dm.reducer,{addEvent:sT}=Dm.actions;var Fm={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(A){(function(){var B={}.hasOwnProperty;function Q(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(!!n){var g=typeof n;if(g==="string"||g==="number")e.push(n);else if(Array.isArray(n)){if(n.length){var E=Q.apply(null,n);E&&e.push(E)}}else if(g==="object")if(n.toString===Object.prototype.toString)for(var r in n)B.call(n,r)&&n[r]&&e.push(r);else e.push(n.toString())}}return e.join(" ")}A.exports?(Q.default=Q,A.exports=Q):window.classNames=Q})()})(Fm);const eA=Fm.exports;var X={exports:{}},Ms={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.