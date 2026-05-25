(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ld={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function iy(){if(qg)return Fo;qg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var Yg;function ay(){return Yg||(Yg=1,ld.exports=iy()),ld.exports}var U=ay(),cd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function sy(){if(Zg)return ft;Zg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(B,J,xe){this.props=B,this.context=J,this.refs=y,this.updater=xe||T}x.prototype.isReactComponent={},x.prototype.setState=function(B,J){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,J,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=x.prototype;function R(B,J,xe){this.props=B,this.context=J,this.refs=y,this.updater=xe||T}var D=R.prototype=new A;D.constructor=R,C(D,x.prototype),D.isPureReactComponent=!0;var F=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function P(B,J,xe){var Ce=xe.ref;return{$$typeof:o,type:B,key:J,ref:Ce!==void 0?Ce:null,props:xe}}function k(B,J){return P(B.type,J,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function q(B){var J={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xe){return J[xe]})}var le=/\/+/g;function te(B,J){return typeof B=="object"&&B!==null&&B.key!=null?q(""+B.key):J.toString(36)}function W(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(J){B.status==="pending"&&(B.status="fulfilled",B.value=J)},function(J){B.status==="pending"&&(B.status="rejected",B.reason=J)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,J,xe,Ce,Ne){var re=typeof B;(re==="undefined"||re==="boolean")&&(B=null);var be=!1;if(B===null)be=!0;else switch(re){case"bigint":case"string":case"number":be=!0;break;case"object":switch(B.$$typeof){case o:case e:be=!0;break;case S:return be=B._init,I(be(B._payload),J,xe,Ce,Ne)}}if(be)return Ne=Ne(B),be=Ce===""?"."+te(B,0):Ce,F(Ne)?(xe="",be!=null&&(xe=be.replace(le,"$&/")+"/"),I(Ne,J,xe,"",function(tt){return tt})):Ne!=null&&(G(Ne)&&(Ne=k(Ne,xe+(Ne.key==null||B&&B.key===Ne.key?"":(""+Ne.key).replace(le,"$&/")+"/")+be)),J.push(Ne)),1;be=0;var Ae=Ce===""?".":Ce+":";if(F(B))for(var Ge=0;Ge<B.length;Ge++)Ce=B[Ge],re=Ae+te(Ce,Ge),be+=I(Ce,J,xe,re,Ne);else if(Ge=M(B),typeof Ge=="function")for(B=Ge.call(B),Ge=0;!(Ce=B.next()).done;)Ce=Ce.value,re=Ae+te(Ce,Ge++),be+=I(Ce,J,xe,re,Ne);else if(re==="object"){if(typeof B.then=="function")return I(W(B),J,xe,Ce,Ne);throw J=String(B),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(B,J,xe){if(B==null)return B;var Ce=[],Ne=0;return I(B,Ce,"","",function(re){return J.call(xe,re,Ne++)}),Ce}function oe(B){if(B._status===-1){var J=B._result;J=J(),J.then(function(xe){(B._status===0||B._status===-1)&&(B._status=1,B._result=xe)},function(xe){(B._status===0||B._status===-1)&&(B._status=2,B._result=xe)}),B._status===-1&&(B._status=0,B._result=J)}if(B._status===1)return B._result.default;throw B._result}var _e=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Me={map:H,forEach:function(B,J,xe){H(B,function(){J.apply(this,arguments)},xe)},count:function(B){var J=0;return H(B,function(){J++}),J},toArray:function(B){return H(B,function(J){return J})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ft.Activity=v,ft.Children=Me,ft.Component=x,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=R,ft.StrictMode=s,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ft.__COMPILER_RUNTIME={__proto__:null,c:function(B){return z.H.useMemoCache(B)}},ft.cache=function(B){return function(){return B.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(B,J,xe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ce=C({},B.props),Ne=B.key;if(J!=null)for(re in J.key!==void 0&&(Ne=""+J.key),J)!b.call(J,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&J.ref===void 0||(Ce[re]=J[re]);var re=arguments.length-2;if(re===1)Ce.children=xe;else if(1<re){for(var be=Array(re),Ae=0;Ae<re;Ae++)be[Ae]=arguments[Ae+2];Ce.children=be}return P(B.type,Ne,Ce)},ft.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ft.createElement=function(B,J,xe){var Ce,Ne={},re=null;if(J!=null)for(Ce in J.key!==void 0&&(re=""+J.key),J)b.call(J,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ne[Ce]=J[Ce]);var be=arguments.length-2;if(be===1)Ne.children=xe;else if(1<be){for(var Ae=Array(be),Ge=0;Ge<be;Ge++)Ae[Ge]=arguments[Ge+2];Ne.children=Ae}if(B&&B.defaultProps)for(Ce in be=B.defaultProps,be)Ne[Ce]===void 0&&(Ne[Ce]=be[Ce]);return P(B,re,Ne)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(B){return{$$typeof:p,render:B}},ft.isValidElement=G,ft.lazy=function(B){return{$$typeof:S,_payload:{_status:-1,_result:B},_init:oe}},ft.memo=function(B,J){return{$$typeof:h,type:B,compare:J===void 0?null:J}},ft.startTransition=function(B){var J=z.T,xe={};z.T=xe;try{var Ce=B(),Ne=z.S;Ne!==null&&Ne(xe,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(L,_e)}catch(re){_e(re)}finally{J!==null&&xe.types!==null&&(J.types=xe.types),z.T=J}},ft.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ft.use=function(B){return z.H.use(B)},ft.useActionState=function(B,J,xe){return z.H.useActionState(B,J,xe)},ft.useCallback=function(B,J){return z.H.useCallback(B,J)},ft.useContext=function(B){return z.H.useContext(B)},ft.useDebugValue=function(){},ft.useDeferredValue=function(B,J){return z.H.useDeferredValue(B,J)},ft.useEffect=function(B,J){return z.H.useEffect(B,J)},ft.useEffectEvent=function(B){return z.H.useEffectEvent(B)},ft.useId=function(){return z.H.useId()},ft.useImperativeHandle=function(B,J,xe){return z.H.useImperativeHandle(B,J,xe)},ft.useInsertionEffect=function(B,J){return z.H.useInsertionEffect(B,J)},ft.useLayoutEffect=function(B,J){return z.H.useLayoutEffect(B,J)},ft.useMemo=function(B,J){return z.H.useMemo(B,J)},ft.useOptimistic=function(B,J){return z.H.useOptimistic(B,J)},ft.useReducer=function(B,J,xe){return z.H.useReducer(B,J,xe)},ft.useRef=function(B){return z.H.useRef(B)},ft.useState=function(B){return z.H.useState(B)},ft.useSyncExternalStore=function(B,J,xe){return z.H.useSyncExternalStore(B,J,xe)},ft.useTransition=function(){return z.H.useTransition()},ft.version="19.2.6",ft}var Kg;function kh(){return Kg||(Kg=1,cd.exports=sy()),cd.exports}var rt=kh(),ud={exports:{}},Bo={},fd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function ry(){return Qg||(Qg=1,(function(o){function e(I,H){var oe=I.length;I.push(H);e:for(;0<oe;){var _e=oe-1>>>1,Me=I[_e];if(0<l(Me,H))I[_e]=H,I[oe]=Me,oe=_e;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],oe=I.pop();if(oe!==H){I[0]=oe;e:for(var _e=0,Me=I.length,B=Me>>>1;_e<B;){var J=2*(_e+1)-1,xe=I[J],Ce=J+1,Ne=I[Ce];if(0>l(xe,oe))Ce<Me&&0>l(Ne,xe)?(I[_e]=Ne,I[Ce]=oe,_e=Ce):(I[_e]=xe,I[J]=oe,_e=J);else if(Ce<Me&&0>l(Ne,oe))I[_e]=Ne,I[Ce]=oe,_e=Ce;else break e}}return H}function l(I,H){var oe=I.sortIndex-H.sortIndex;return oe!==0?oe:I.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,v=null,g=3,M=!1,T=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var H=i(h);H!==null;){if(H.callback===null)s(h);else if(H.startTime<=I)s(h),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(h)}}function F(I){if(C=!1,D(I),!T)if(i(m)!==null)T=!0,L||(L=!0,q());else{var H=i(h);H!==null&&W(F,H.startTime-I)}}var L=!1,z=-1,b=5,P=-1;function k(){return y?!0:!(o.unstable_now()-P<b)}function G(){if(y=!1,L){var I=o.unstable_now();P=I;var H=!0;try{e:{T=!1,C&&(C=!1,A(z),z=-1),M=!0;var oe=g;try{t:{for(D(I),v=i(m);v!==null&&!(v.expirationTime>I&&k());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,g=v.priorityLevel;var Me=_e(v.expirationTime<=I);if(I=o.unstable_now(),typeof Me=="function"){v.callback=Me,D(I),H=!0;break t}v===i(m)&&s(m),D(I)}else s(m);v=i(m)}if(v!==null)H=!0;else{var B=i(h);B!==null&&W(F,B.startTime-I),H=!1}}break e}finally{v=null,g=oe,M=!1}H=void 0}}finally{H?q():L=!1}}}var q;if(typeof R=="function")q=function(){R(G)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,te=le.port2;le.port1.onmessage=G,q=function(){te.postMessage(null)}}else q=function(){x(G,0)};function W(I,H){z=x(function(){I(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var oe=g;g=H;try{return I()}finally{g=oe}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var oe=g;g=I;try{return H()}finally{g=oe}},o.unstable_scheduleCallback=function(I,H,oe){var _e=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?_e+oe:_e):oe=_e,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=oe+Me,I={id:S++,callback:H,priorityLevel:I,startTime:oe,expirationTime:Me,sortIndex:-1},oe>_e?(I.sortIndex=oe,e(h,I),i(m)===null&&I===i(h)&&(C?(A(z),z=-1):C=!0,W(F,oe-_e))):(I.sortIndex=Me,e(m,I),T||M||(T=!0,L||(L=!0,q()))),I},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(I){var H=g;return function(){var oe=g;g=H;try{return I.apply(this,arguments)}finally{g=oe}}}})(dd)),dd}var Jg;function oy(){return Jg||(Jg=1,fd.exports=ry()),fd.exports}var hd={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function ly(){if($g)return Hn;$g=1;var o=kh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Hn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,S)},Hn.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},Hn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Hn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Hn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Hn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Hn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Hn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Hn.requestFormReset=function(m){s.d.r(m)},Hn.unstable_batchedUpdates=function(m,h){return m(h)},Hn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Hn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Hn.version="19.2.6",Hn}var e_;function cy(){if(e_)return hd.exports;e_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=ly(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function uy(){if(t_)return Bo;t_=1;var o=oy(),e=kh(),i=cy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,N=u.child;N;){if(N===a){_=!0,a=u,r=f;break}if(N===r){_=!0,r=u,a=f;break}N=N.sibling}if(!_){for(N=f.child;N;){if(N===a){_=!0,a=f,r=u;break}if(N===r){_=!0,r=f,a=u;break}N=N.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case R:return t.displayName||"Context";case A:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var W=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},_e=[],Me=-1;function B(t){return{current:t}}function J(t){0>Me||(t.current=_e[Me],_e[Me]=null,Me--)}function xe(t,n){Me++,_e[Me]=t.current,t.current=n}var Ce=B(null),Ne=B(null),re=B(null),be=B(null);function Ae(t,n){switch(xe(re,n),xe(Ne,t),xe(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?gg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=gg(n),t=_g(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ce),xe(Ce,t)}function Ge(){J(Ce),J(Ne),J(re)}function tt(t){t.memoizedState!==null&&xe(be,t);var n=Ce.current,a=_g(n,t.type);n!==a&&(xe(Ne,t),xe(Ce,a))}function Je(t){Ne.current===t&&(J(Ce),J(Ne)),be.current===t&&(J(be),Oo._currentValue=oe)}var Dt,ct;function xt(t){if(Dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Dt=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+t+ct}var zt=!1;function ot(t,n){if(!t||zt)return"";zt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(fe){var ue=fe}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(fe){ue=fe}t.call(ye.prototype)}}else{try{throw Error()}catch(fe){ue=fe}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(fe){if(fe&&ue&&typeof fe.stack=="string")return[fe.stack,ue.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],N=f[1];if(_&&N){var V=_.split(`
`),ie=N.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ie.length&&!ie[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===ie.length)for(r=V.length-1,u=ie.length-1;1<=r&&0<=u&&V[r]!==ie[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==ie[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==ie[u]){var ge=`
`+V[r].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=r&&0<=u);break}}}finally{zt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function an(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return xt("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=an(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var mn=Object.prototype.hasOwnProperty,Y=o.unstable_scheduleCallback,en=o.unstable_cancelCallback,mt=o.unstable_shouldYield,bt=o.unstable_requestPaint,Re=o.unstable_now,Qt=o.unstable_getCurrentPriorityLevel,O=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,$=o.unstable_NormalPriority,ve=o.unstable_LowPriority,Te=o.unstable_IdlePriority,Le=o.log,Ie=o.unstable_setDisableYieldValue,de=null,he=null;function Oe(t){if(typeof Le=="function"&&Ie(t),he&&typeof he.setStrictMode=="function")try{he.setStrictMode(de,t)}catch{}}var Fe=Math.clz32?Math.clz32:it,Pe=Math.log,De=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Pe(t)/De|0)|0}var st=256,vt=262144,j=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var N=r&134217727;return N!==0?(r=N&~f,r!==0?u=we(r):(_&=N,_!==0?u=we(_):a||(a=N&~t,a!==0&&(u=we(a))))):(N=r&~f,N!==0?u=we(N):_!==0?u=we(_):a||(a=r&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ee(){var t=j;return j<<=1,(j&62914560)===0&&(j=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ee(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ue(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,V=t.expirationTimes,ie=t.hiddenUpdates;for(a=_&~a;0<a;){var ge=31-Fe(a),ye=1<<ge;N[ge]=0,V[ge]=-1;var ue=ie[ge];if(ue!==null)for(ie[ge]=null,ge=0;ge<ue.length;ge++){var fe=ue[ge];fe!==null&&(fe.lane&=-536870913)}a&=~ye}r!==0&&me(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function me(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Fe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ut(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function qt(t,n){var a=n&-n;return a=(a&42)!==0?1:Dn(a),(a&(t.suspendedLanes|n))!==0?0:a}function Dn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rn(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Hg(t.type))}function _i(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var wn=Math.random().toString(36).slice(2),dn="__reactFiber$"+wn,Un="__reactProps$"+wn,ea="__reactContainer$"+wn,wa="__reactEvents$"+wn,il="__reactListeners$"+wn,qs="__reactHandles$"+wn,Yr="__reactResources$"+wn,Ca="__reactMarker$"+wn;function Zr(t){delete t[dn],delete t[Un],delete t[wa],delete t[il],delete t[qs]}function Na(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ea]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Eg(t);t!==null;){if(a=t[dn])return a;t=Eg(t)}return n}t=a,a=t.parentNode}return null}function Da(t){if(t=t[dn]||t[ea]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ds(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ua(t){var n=t[Yr];return n||(n=t[Yr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ca]=!0}var al=new Set,w={};function Z(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(w[t]=n,t=0;t<n.length;t++)al.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Ve={};function Xe(t){return mn.call(Ve,t)?!0:mn.call(se,t)?!1:ae.test(t)?Ve[t]=!0:(se[t]=!0,!1)}function Be(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lt(t){if(!t._valueTracker){var n=ht(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=ht(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function Gt(t){return t.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(t,n,a,r,u,f,_,N){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?St(t,_,$e(n)):a!=null?St(t,_,$e(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+$e(N):t.removeAttribute("name")}function Bn(t,n,a,r,u,f,_,N){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Lt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=N?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Lt(t)}function St(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ci(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(W(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Lt(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Vt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ni(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&rn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(t){return La.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var au=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ys=null,Zs=null;function mp(t){var n=Da(t);if(n&&(t=n.stateNode)){var a=t[Un]||null;e:switch(t=n.stateNode,n.type){case"input":if(je(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Un]||null;if(!u)throw Error(s(90));je(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&sn(r)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var ru=!1;function gp(t,n,a){if(ru)return t(n,a);ru=!0;try{var r=t(n);return r}finally{if(ru=!1,(Ys!==null||Zs!==null)&&(Xl(),Ys&&(n=Ys,t=Zs,Zs=Ys=null,mp(n),t)))for(n=0;n<t.length;n++)mp(t[n])}}function Kr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Un]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(na)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ou=!1}var Oa=null,lu=null,sl=null;function _p(){if(sl)return sl;var t,n=lu,a=n.length,r,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return sl=u.slice(t,1<r?1-r:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function xp(){return!1}function Zn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(f):f[N]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:xp,this.isPropagationStopped=xp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Zn(ps),Jr=v({},ps,{view:0,detail:0}),tv=Zn(Jr),cu,uu,$r,cl=v({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(cu=t.screenX-$r.screenX,uu=t.screenY-$r.screenY):uu=cu=0,$r=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),vp=Zn(cl),nv=v({},cl,{dataTransfer:0}),iv=Zn(nv),av=v({},Jr,{relatedTarget:0}),fu=Zn(av),sv=v({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=Zn(sv),ov=v({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lv=Zn(ov),cv=v({},ps,{data:0}),Sp=Zn(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=dv[t])?!!n[t]:!1}function du(){return hv}var pv=v({},Jr,{key:function(t){if(t.key){var n=uv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mv=Zn(pv),gv=v({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Zn(gv),_v=v({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),xv=Zn(_v),vv=v({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Zn(vv),yv=v({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mv=Zn(yv),bv=v({},ps,{newState:0,oldState:0}),Ev=Zn(bv),Tv=[9,13,27,32],hu=na&&"CompositionEvent"in window,eo=null;na&&"documentMode"in document&&(eo=document.documentMode);var Av=na&&"TextEvent"in window&&!eo,Mp=na&&(!hu||eo&&8<eo&&11>=eo),bp=" ",Ep=!1;function Tp(t,n){switch(t){case"keyup":return Tv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function Rv(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,bp);case"textInput":return t=n.data,t===bp&&Ep?null:t;default:return null}}function wv(t,n){if(Ks)return t==="compositionend"||!hu&&Tp(t,n)?(t=_p(),sl=lu=Oa=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mp&&n.locale!=="ko"?null:n.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Cv[t.type]:n==="textarea"}function wp(t,n,a,r){Ys?Zs?Zs.push(r):Zs=[r]:Ys=r,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var to=null,no=null;function Nv(t){ug(t,0)}function ul(t){var n=ds(t);if(sn(n))return t}function Cp(t,n){if(t==="change")return n}var Np=!1;if(na){var pu;if(na){var mu="oninput"in document;if(!mu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),mu=typeof Dp.oninput=="function"}pu=mu}else pu=!1;Np=pu&&(!document.documentMode||9<document.documentMode)}function Up(){to&&(to.detachEvent("onpropertychange",Lp),no=to=null)}function Lp(t){if(t.propertyName==="value"&&ul(no)){var n=[];wp(n,no,t,su(t)),gp(Nv,n)}}function Dv(t,n,a){t==="focusin"?(Up(),to=n,no=a,to.attachEvent("onpropertychange",Lp)):t==="focusout"&&Up()}function Uv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(no)}function Lv(t,n){if(t==="click")return ul(n)}function Ov(t,n){if(t==="input"||t==="change")return ul(n)}function Pv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:Pv;function io(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!mn.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,n){var a=Op(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zv=na&&"documentMode"in document&&11>=document.documentMode,Qs=null,_u=null,ao=null,xu=!1;function Fp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Qs==null||Qs!==Jt(r)||(r=Qs,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&io(ao,r)||(ao=r,r=Jl(_u,"onSelect"),0<r.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Qs)))}function ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Js={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},vu={},Bp={};na&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function gs(t){if(vu[t])return vu[t];if(!Js[t])return t;var n=Js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bp)return vu[t]=n[a];return t}var Hp=gs("animationend"),Gp=gs("animationiteration"),Vp=gs("animationstart"),Iv=gs("transitionrun"),Fv=gs("transitionstart"),Bv=gs("transitioncancel"),kp=gs("transitionend"),jp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Di(t,n){jp.set(t,n),Z(n,[t])}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],$s=0,yu=0;function dl(){for(var t=$s,n=yu=$s=0;n<t;){var a=xi[n];xi[n++]=null;var r=xi[n];xi[n++]=null;var u=xi[n];xi[n++]=null;var f=xi[n];if(xi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Xp(a,u,f)}}function hl(t,n,a,r){xi[$s++]=t,xi[$s++]=n,xi[$s++]=a,xi[$s++]=r,yu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Mu(t,n,a,r){return hl(t,n,a,r),pl(t)}function _s(t,n){return hl(t,null,null,n),pl(t)}function Xp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function pl(t){if(50<Ro)throw Ro=0,Uf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var er={};function Hv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,r){return new Hv(t,n,a,r)}function bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")bu(t)&&(_=1);else if(typeof t=="string")_=XS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case P:return t=ri(31,a,n,u),t.elementType=P,t.lanes=f,t;case C:return xs(a.children,u,f,n);case y:_=8,u|=24;break;case x:return t=ri(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case F:return t=ri(13,a,n,u),t.elementType=F,t.lanes=f,t;case L:return t=ri(19,a,n,u),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:_=10;break e;case A:_=9;break e;case D:_=11;break e;case z:_=14;break e;case b:_=16,r=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ri(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function xs(t,n,a,r){return t=ri(7,t,r,n),t.lanes=a,t}function Eu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function qp(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Tu(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Yp=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Yp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var tr=[],nr=0,gl=null,so=0,Si=[],yi=0,Pa=null,Hi=1,Gi="";function aa(t,n){tr[nr++]=so,tr[nr++]=gl,gl=t,so=n}function Zp(t,n,a){Si[yi++]=Hi,Si[yi++]=Gi,Si[yi++]=Pa,Pa=t;var r=Hi;t=Gi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Hi=1<<32-Fe(n)+u|a<<u|r,Gi=f+t}else Hi=1<<f|a<<u|r,Gi=t}function Au(t){t.return!==null&&(aa(t,1),Zp(t,1,0))}function Ru(t){for(;t===gl;)gl=tr[--nr],tr[nr]=null,so=tr[--nr],tr[nr]=null;for(;t===Pa;)Pa=Si[--yi],Si[yi]=null,Gi=Si[--yi],Si[yi]=null,Hi=Si[--yi],Si[yi]=null}function Kp(t,n){Si[yi++]=Hi,Si[yi++]=Gi,Si[yi++]=Pa,Hi=n.id,Gi=n.overflow,Pa=t}var Ln=null,tn=null,Rt=!1,za=null,Mi=!1,wu=Error(s(519));function Ia(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(vi(n,t)),wu}function Qp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[dn]=t,n[Un]=r,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Mt(Co[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Bn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ci(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||pg(n.textContent,a)?(r.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),r.onScroll!=null&&Mt("scroll",n),r.onScrollEnd!=null&&Mt("scrollend",n),r.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ia(t,!0)}function Jp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function ir(t){if(t!==Ln)return!1;if(!Rt)return Jp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&tn&&Ia(t),Jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=bg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tn=bg(t)}else n===27?(n=tn,Qa(t.type)?(t=Jf,Jf=null,tn=t):tn=n):tn=Ln?Ei(t.stateNode.nextSibling):null;return!0}function vs(){tn=Ln=null,Rt=!1}function Cu(){var t=za;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),za=null),t}function ro(t){za===null?za=[t]:za.push(t)}var Nu=B(null),Ss=null,sa=null;function Fa(t,n,a){xe(Nu,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Nu.current,J(Nu)}function Du(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var N=f;f=u;for(var V=0;V<n.length;V++)if(N.context===n[V]){f.lanes|=a,N=f.alternate,N!==null&&(N.lanes|=a),Du(f.return,a,t),r||(_=null);break e}f=N.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Du(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var N=u.type;si(u.pendingProps.value,_.value)||(t!==null?t.push(N):t=[N])}}else if(u===be.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Uu(n,t,a,r),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ys(t){Ss=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function On(t){return $p(Ss,t)}function xl(t,n){return Ss===null&&ys(t),$p(t,n)}function $p(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(s(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var Gv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Vv=o.unstable_scheduleCallback,kv=o.unstable_NormalPriority,_n={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Gv,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&Vv(kv,function(){t.controller.abort()})}var lo=null,Ou=0,sr=0,rr=null;function jv(t,n){if(lo===null){var a=lo=[];Ou=0,sr=Ff(),rr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ou++,n.then(em,em),n}function em(){if(--Ou===0&&lo!==null){rr!==null&&(rr.status="fulfilled");var t=lo;lo=null,sr=0,rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Xv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var tm=I.S;I.S=function(t,n){F0=Re(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jv(t,n),tm!==null&&tm(t,n)};var Ms=B(null);function Pu(){var t=Ms.current;return t!==null?t:$t.pooledCache}function vl(t,n){n===null?xe(Ms,Ms.current):xe(Ms,n.pool)}function nm(){var t=Pu();return t===null?null:{parent:_n._currentValue,pool:t}}var or=Error(s(460)),zu=Error(s(474)),Sl=Error(s(542)),yl={then:function(){}};function im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function am(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rm(t),t}throw Es=n,or}}function bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,or):a}}var Es=null;function sm(){if(Es===null)throw Error(s(459));var t=Es;return Es=null,t}function rm(t){if(t===or||t===Sl)throw Error(s(483))}var lr=null,co=0;function Ml(t){var n=co;return co+=1,lr===null&&(lr=[]),am(lr,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function om(t){function n(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function r(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=ia(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=67108866,X):ne):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function N(Q,X,ne,Se){return X===null||X.tag!==6?(X=Eu(ne,Q.mode,Se),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function V(Q,X,ne,Se){var et=ne.type;return et===C?ge(Q,X,ne.props.children,Se,ne.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&bs(et)===X.type)?(X=u(X,ne.props),uo(X,ne),X.return=Q,X):(X=ml(ne.type,ne.key,ne.props,null,Q.mode,Se),uo(X,ne),X.return=Q,X)}function ie(Q,X,ne,Se){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Tu(ne,Q.mode,Se),X.return=Q,X):(X=u(X,ne.children||[]),X.return=Q,X)}function ge(Q,X,ne,Se,et){return X===null||X.tag!==7?(X=xs(ne,Q.mode,Se,et),X.return=Q,X):(X=u(X,ne),X.return=Q,X)}function ye(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Eu(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return ne=ml(X.type,X.key,X.props,null,Q.mode,ne),uo(ne,X),ne.return=Q,ne;case T:return X=Tu(X,Q.mode,ne),X.return=Q,X;case b:return X=bs(X),ye(Q,X,ne)}if(W(X)||q(X))return X=xs(X,Q.mode,ne,null),X.return=Q,X;if(typeof X.then=="function")return ye(Q,Ml(X),ne);if(X.$$typeof===R)return ye(Q,xl(Q,X),ne);bl(Q,X)}return null}function ue(Q,X,ne,Se){var et=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return et!==null?null:N(Q,X,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===et?V(Q,X,ne,Se):null;case T:return ne.key===et?ie(Q,X,ne,Se):null;case b:return ne=bs(ne),ue(Q,X,ne,Se)}if(W(ne)||q(ne))return et!==null?null:ge(Q,X,ne,Se,null);if(typeof ne.then=="function")return ue(Q,X,Ml(ne),Se);if(ne.$$typeof===R)return ue(Q,X,xl(Q,ne),Se);bl(Q,ne)}return null}function fe(Q,X,ne,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ne)||null,N(X,Q,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return Q=Q.get(Se.key===null?ne:Se.key)||null,V(X,Q,Se,et);case T:return Q=Q.get(Se.key===null?ne:Se.key)||null,ie(X,Q,Se,et);case b:return Se=bs(Se),fe(Q,X,ne,Se,et)}if(W(Se)||q(Se))return Q=Q.get(ne)||null,ge(X,Q,Se,et,null);if(typeof Se.then=="function")return fe(Q,X,ne,Ml(Se),et);if(Se.$$typeof===R)return fe(Q,X,ne,xl(X,Se),et);bl(X,Se)}return null}function Ze(Q,X,ne,Se){for(var et=null,Ot=null,Ke=X,gt=X=0,Tt=null;Ke!==null&&gt<ne.length;gt++){Ke.index>gt?(Tt=Ke,Ke=null):Tt=Ke.sibling;var Pt=ue(Q,Ke,ne[gt],Se);if(Pt===null){Ke===null&&(Ke=Tt);break}t&&Ke&&Pt.alternate===null&&n(Q,Ke),X=f(Pt,X,gt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt,Ke=Tt}if(gt===ne.length)return a(Q,Ke),Rt&&aa(Q,gt),et;if(Ke===null){for(;gt<ne.length;gt++)Ke=ye(Q,ne[gt],Se),Ke!==null&&(X=f(Ke,X,gt),Ot===null?et=Ke:Ot.sibling=Ke,Ot=Ke);return Rt&&aa(Q,gt),et}for(Ke=r(Ke);gt<ne.length;gt++)Tt=fe(Ke,Q,gt,ne[gt],Se),Tt!==null&&(t&&Tt.alternate!==null&&Ke.delete(Tt.key===null?gt:Tt.key),X=f(Tt,X,gt),Ot===null?et=Tt:Ot.sibling=Tt,Ot=Tt);return t&&Ke.forEach(function(ns){return n(Q,ns)}),Rt&&aa(Q,gt),et}function nt(Q,X,ne,Se){if(ne==null)throw Error(s(151));for(var et=null,Ot=null,Ke=X,gt=X=0,Tt=null,Pt=ne.next();Ke!==null&&!Pt.done;gt++,Pt=ne.next()){Ke.index>gt?(Tt=Ke,Ke=null):Tt=Ke.sibling;var ns=ue(Q,Ke,Pt.value,Se);if(ns===null){Ke===null&&(Ke=Tt);break}t&&Ke&&ns.alternate===null&&n(Q,Ke),X=f(ns,X,gt),Ot===null?et=ns:Ot.sibling=ns,Ot=ns,Ke=Tt}if(Pt.done)return a(Q,Ke),Rt&&aa(Q,gt),et;if(Ke===null){for(;!Pt.done;gt++,Pt=ne.next())Pt=ye(Q,Pt.value,Se),Pt!==null&&(X=f(Pt,X,gt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt);return Rt&&aa(Q,gt),et}for(Ke=r(Ke);!Pt.done;gt++,Pt=ne.next())Pt=fe(Ke,Q,gt,Pt.value,Se),Pt!==null&&(t&&Pt.alternate!==null&&Ke.delete(Pt.key===null?gt:Pt.key),X=f(Pt,X,gt),Ot===null?et=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Ke.forEach(function(ny){return n(Q,ny)}),Rt&&aa(Q,gt),et}function Kt(Q,X,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===C&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var et=ne.key;X!==null;){if(X.key===et){if(et=ne.type,et===C){if(X.tag===7){a(Q,X.sibling),Se=u(X,ne.props.children),Se.return=Q,Q=Se;break e}}else if(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&bs(et)===X.type){a(Q,X.sibling),Se=u(X,ne.props),uo(Se,ne),Se.return=Q,Q=Se;break e}a(Q,X);break}else n(Q,X);X=X.sibling}ne.type===C?(Se=xs(ne.props.children,Q.mode,Se,ne.key),Se.return=Q,Q=Se):(Se=ml(ne.type,ne.key,ne.props,null,Q.mode,Se),uo(Se,ne),Se.return=Q,Q=Se)}return _(Q);case T:e:{for(et=ne.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),Se=u(X,ne.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,X);break}else n(Q,X);X=X.sibling}Se=Tu(ne,Q.mode,Se),Se.return=Q,Q=Se}return _(Q);case b:return ne=bs(ne),Kt(Q,X,ne,Se)}if(W(ne))return Ze(Q,X,ne,Se);if(q(ne)){if(et=q(ne),typeof et!="function")throw Error(s(150));return ne=et.call(ne),nt(Q,X,ne,Se)}if(typeof ne.then=="function")return Kt(Q,X,Ml(ne),Se);if(ne.$$typeof===R)return Kt(Q,X,xl(Q,ne),Se);bl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),Se=u(X,ne),Se.return=Q,Q=Se):(a(Q,X),Se=Eu(ne,Q.mode,Se),Se.return=Q,Q=Se),_(Q)):a(Q,X)}return function(Q,X,ne,Se){try{co=0;var et=Kt(Q,X,ne,Se);return lr=null,et}catch(Ke){if(Ke===or||Ke===Sl)throw Ke;var Ot=ri(29,Ke,null,Q.mode);return Ot.lanes=Se,Ot.return=Q,Ot}finally{}}}var Ts=om(!0),lm=om(!1),Ba=!1;function Iu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ga(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(It&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=pl(t),Xp(t,null,a),n}return hl(t,r,n,a),pl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ut(t,a)}}function Bu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function ho(){if(Hu){var t=rr;if(t!==null)throw t}}function po(t,n,a,r){Hu=!1;var u=t.updateQueue;Ba=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var V=N,ie=V.next;V.next=null,_===null?f=ie:_.next=ie,_=V;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,N=ge.lastBaseUpdate,N!==_&&(N===null?ge.firstBaseUpdate=ie:N.next=ie,ge.lastBaseUpdate=V))}if(f!==null){var ye=u.baseState;_=0,ge=ie=V=null,N=f;do{var ue=N.lane&-536870913,fe=ue!==N.lane;if(fe?(Et&ue)===ue:(r&ue)===ue){ue!==0&&ue===sr&&(Hu=!0),ge!==null&&(ge=ge.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ze=t,nt=N;ue=n;var Kt=a;switch(nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){ye=Ze.call(Kt,ye,ue);break e}ye=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,ue=typeof Ze=="function"?Ze.call(Kt,ye,ue):Ze,ue==null)break e;ye=v({},ye,ue);break e;case 2:Ba=!0}}ue=N.callback,ue!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ue]:fe.push(ue))}else fe={lane:ue,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ge===null?(ie=ge=fe,V=ye):ge=ge.next=fe,_|=ue;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;fe=N,N=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);ge===null&&(V=ye),u.baseState=V,u.firstBaseUpdate=ie,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),Wa|=_,t.lanes=_,t.memoizedState=ye}}function cm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function um(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)cm(a[t],n)}var cr=B(null),El=B(0);function fm(t,n){t=ma,xe(El,t),xe(cr,n),ma=t|n.baseLanes}function Gu(){xe(El,ma),xe(cr,cr.current)}function Vu(){ma=El.current,J(cr),J(El)}var oi=B(null),bi=null;function Va(t){var n=t.alternate;xe(hn,hn.current&1),xe(oi,t),bi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(bi=t)}function ku(t){xe(hn,hn.current),xe(oi,t),bi===null&&(bi=t)}function dm(t){t.tag===22?(xe(hn,hn.current),xe(oi,t),bi===null&&(bi=t)):ka()}function ka(){xe(hn,hn.current),xe(oi,oi.current)}function li(t){J(oi),bi===t&&(bi=null),J(hn)}var hn=B(0);function Tl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,pt=null,Yt=null,xn=null,Al=!1,ur=!1,As=!1,Rl=0,mo=0,fr=null,Wv=0;function cn(){throw Error(s(321))}function ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Xu(t,n,a,r,u,f){return oa=f,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Zm:of,As=!1,f=a(r,u),As=!1,ur&&(f=pm(n,a,r,u)),hm(t),f}function hm(t){I.H=xo;var n=Yt!==null&&Yt.next!==null;if(oa=0,xn=Yt=pt=null,Al=!1,mo=0,fr=null,n)throw Error(s(300));t===null||vn||(t=t.dependencies,t!==null&&_l(t)&&(vn=!0))}function pm(t,n,a,r){pt=t;var u=0;do{if(ur&&(fr=null),mo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,xn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Km,f=n(a,r)}while(ur);return f}function qv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(pt.flags|=1024),n}function Wu(){var t=Rl!==0;return Rl=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(Al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Al=!1}oa=0,xn=Yt=pt=null,ur=!1,mo=Rl=0,fr=null}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?pt.memoizedState=xn=t:xn=xn.next=t,xn}function pn(){if(Yt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=xn===null?pt.memoizedState:xn.next;if(n!==null)xn=n,Yt=t;else{if(t===null)throw pt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},xn===null?pt.memoizedState=xn=t:xn=xn.next=t}return xn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,fr===null&&(fr=[]),t=am(fr,t,n),n=pt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Zm:of),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===R)return On(t)}throw Error(s(438,String(t)))}function Zu(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=k;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Nl(t){var n=pn();return Ku(n,Yt,t)}function Ku(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var N=_=null,V=null,ie=n,ge=!1;do{var ye=ie.lane&-536870913;if(ye!==ie.lane?(Et&ye)===ye:(oa&ye)===ye){var ue=ie.revertLane;if(ue===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),ye===sr&&(ge=!0);else if((oa&ue)===ue){ie=ie.next,ue===sr&&(ge=!0);continue}else ye={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(N=V=ye,_=f):V=V.next=ye,pt.lanes|=ue,Wa|=ue;ye=ie.action,As&&a(f,ye),f=ie.hasEagerState?ie.eagerState:a(f,ye)}else ue={lane:ye,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},V===null?(N=V=ue,_=f):V=V.next=ue,pt.lanes|=ye,Wa|=ye;ie=ie.next}while(ie!==null&&ie!==n);if(V===null?_=f:V.next=N,!si(f,t.memoizedState)&&(vn=!0,ge&&(a=rr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Qu(t){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);si(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function mm(t,n,a){var r=pt,u=pn(),f=Rt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!si((Yt||u).memoizedState,a);if(_&&(u.memoizedState=a,vn=!0),u=u.queue,ef(xm.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||xn!==null&&xn.memoizedState.tag&1){if(r.flags|=2048,dr(9,{destroy:void 0},_m.bind(null,r,u,a,n),null),$t===null)throw Error(s(349));f||(oa&127)!==0||gm(r,n,a)}return a}function gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=wl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _m(t,n,a,r){n.value=a,n.getSnapshot=r,vm(n)&&Sm(t)}function xm(t,n,a){return a(function(){vm(n)&&Sm(t)})}function vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function Sm(t){var n=_s(t,2);n!==null&&ei(n,t,2)}function Ju(t){var n=Wn();if(typeof t=="function"){var a=t;if(t=a(),As){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function ym(t,n,a,r){return t.baseState=a,Ku(t,Yt,typeof r=="function"?r:la)}function Yv(t,n,a,r,u){if(Ll(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Mm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Mm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=I.T,_={};I.T=_;try{var N=a(u,r),V=I.S;V!==null&&V(_,N),bm(t,n,N)}catch(ie){$u(t,n,ie)}finally{f!==null&&_.types!==null&&(f.types=_.types),I.T=f}}else try{f=a(u,r),bm(t,n,f)}catch(ie){$u(t,n,ie)}}function bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Em(t,n,r)},function(r){return $u(t,n,r)}):Em(t,n,a)}function Em(t,n,a){n.status="fulfilled",n.value=a,Tm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mm(t,a)))}function $u(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==r)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function Rm(t,n){if(Rt){var a=$t.formState;if(a!==null){e:{var r=pt;if(Rt){if(tn){t:{for(var u=tn,f=Mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ei(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){tn=Ei(u.nextSibling),r=u.data==="F!";break e}}Ia(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=r,a=Wm.bind(null,pt,r),r.dispatch=a,r=Ju(!1),f=rf.bind(null,pt,!1,r.queue),r=Wn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Yv.bind(null,pt,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function wm(t){var n=pn();return Cm(n,Yt,t)}function Cm(t,n,a){if(n=Ku(t,n,Am)[0],t=Nl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=go(n)}catch(_){throw _===or?Sl:_}else r=n;n=pn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,dr(9,{destroy:void 0},Zv.bind(null,u,a),null)),[r,f,t]}function Zv(t,n){t.action=n}function Nm(t){var n=pn(),a=Yt;if(a!==null)return Cm(n,a,t);pn(),n=n.memoizedState,a=pn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function dr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pt.updateQueue,n===null&&(n=wl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Dm(){return pn().memoizedState}function Dl(t,n,a,r){var u=Wn();pt.flags|=t,u.memoizedState=dr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ul(t,n,a,r){var u=pn();r=r===void 0?null:r;var f=u.memoizedState.inst;Yt!==null&&r!==null&&ju(r,Yt.memoizedState.deps)?u.memoizedState=dr(n,f,a,r):(pt.flags|=t,u.memoizedState=dr(1|n,f,a,r))}function Um(t,n){Dl(8390656,8,t,n)}function ef(t,n){Ul(2048,8,t,n)}function Kv(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=wl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Lm(t){var n=pn().memoizedState;return Kv({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Om(t,n){return Ul(4,2,t,n)}function Pm(t,n){return Ul(4,4,t,n)}function zm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,Ul(4,4,zm.bind(null,n,t),a)}function tf(){}function Fm(t,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ju(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Bm(t,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ju(n,r[1]))return r[0];if(r=t(),As){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function nf(t,n,a){return a===void 0||(oa&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=H0(),pt.lanes|=t,Wa|=t,a)}function Hm(t,n,a,r){return si(a,n)?a:cr.current!==null?(t=nf(t,a,r),si(t,n)||(vn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(Et&261930)===0?(vn=!0,t.memoizedState=a):(t=H0(),pt.lanes|=t,Wa|=t,n)}function Gm(t,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var _=I.T,N={};I.T=N,rf(t,!1,n,a);try{var V=u(),ie=I.S;if(ie!==null&&ie(N,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ge=Xv(V,r);_o(t,n,ge,fi(t))}else _o(t,n,r,fi(t))}catch(ye){_o(t,n,{then:function(){},status:"rejected",reason:ye},fi())}finally{H.p=f,_!==null&&N.types!==null&&(_.types=N.types),I.T=_}}function Qv(){}function af(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Vm(t).queue;Gm(t,u,n,oe,a===null?Qv:function(){return km(t),a(r)})}function Vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function km(t){var n=Vm(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},fi())}function sf(){return On(Oo)}function jm(){return pn().memoizedState}function Xm(){return pn().memoizedState}function Jv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Ha(a);var r=Ga(n,t,a);r!==null&&(ei(r,n,a),fo(r,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function $v(t,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(t)?qm(n,a):(a=Mu(t,n,a,r),a!==null&&(ei(a,t,r),Ym(a,n,r)))}function Wm(t,n,a){var r=fi();_o(t,n,a,r)}function _o(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(t))qm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,N=f(_,a);if(u.hasEagerState=!0,u.eagerState=N,si(N,_))return hl(t,n,u,0),$t===null&&dl(),!1}catch{}finally{}if(a=Mu(t,n,u,r),a!==null)return ei(a,t,r),Ym(a,n,r),!0}return!1}function rf(t,n,a,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ll(t)){if(n)throw Error(s(479))}else n=Mu(t,a,r,2),n!==null&&ei(n,t,2)}function Ll(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function qm(t,n){ur=Al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ym(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ut(t,a)}}var xo={readContext:On,use:Cl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};xo.useEffectEvent=cn;var Zm={readContext:On,use:Cl,useCallback:function(t,n){return Wn().memoizedState=[t,n===void 0?null:n],t},useContext:On,useEffect:Um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,zm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Wn();n=n===void 0?null:n;var r=t();if(As){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Wn();if(a!==void 0){var u=a(n);if(As){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=$v.bind(null,pt,t),[r.memoizedState,t]},useRef:function(t){var n=Wn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=Wm.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(t,n){var a=Wn();return nf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Gm.bind(null,pt,t.queue,!0,!1),Wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pt,u=Wn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$t===null)throw Error(s(349));(Et&127)!==0||gm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Um(xm.bind(null,r,f,t),[t]),r.flags|=2048,dr(9,{destroy:void 0},_m.bind(null,r,f,a,n),null),a},useId:function(){var t=Wn(),n=$t.identifierPrefix;if(Rt){var a=Gi,r=Hi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Wv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t){var n=Wn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return Wn().memoizedState=Jv.bind(null,pt)},useEffectEvent:function(t){var n=Wn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},of={readContext:On,use:Cl,useCallback:Fm,useContext:On,useEffect:ef,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:Nl,useRef:Dm,useState:function(){return Nl(la)},useDebugValue:tf,useDeferredValue:function(t,n){var a=pn();return Hm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Nl(la)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:mm,useId:jm,useHostTransitionStatus:sf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=pn();return ym(a,Yt,t,n)},useMemoCache:Zu,useCacheRefresh:Xm};of.useEffectEvent=Lm;var Km={readContext:On,use:Cl,useCallback:Fm,useContext:On,useEffect:ef,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:Qu,useRef:Dm,useState:function(){return Qu(la)},useDebugValue:tf,useDeferredValue:function(t,n){var a=pn();return Yt===null?nf(a,t,n):Hm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Qu(la)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:mm,useId:jm,useHostTransitionStatus:sf,useFormState:Nm,useActionState:Nm,useOptimistic:function(t,n){var a=pn();return Yt!==null?ym(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:Xm};Km.useEffectEvent=Lm;function lf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Ha(r);u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(ei(n,t,r),fo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Ha(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(t,u,r),n!==null&&(ei(n,t,r),fo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),r=Ha(a);r.tag=2,n!=null&&(r.callback=n),n=Ga(t,r,a),n!==null&&(ei(n,t,a),fo(n,t,a))}};function Qm(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!io(a,r)||!io(u,f):!0}function Jm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function Rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function $m(t){fl(t)}function e0(t){console.error(t)}function t0(t){fl(t)}function Ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function n0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(t,n)},a}function i0(t){return t=Ha(t),t.tag=3,t}function a0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){n0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){n0(n,a,r),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})})}function eS(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return bi===null?Wl():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Pf(t,r,u)),!1;case 22:return a.flags|=65536,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Pf(t,r,u)),!1}throw Error(s(435,a.tag))}return Pf(t,r,u),Wl(),!1}if(Rt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==wu&&(t=Error(s(422),{cause:r}),ro(vi(t,a)))):(r!==wu&&(n=Error(s(423),{cause:r}),ro(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=vi(r,a),u=uf(t.stateNode,r,u),Bu(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),Ao===null?Ao=[f]:Ao.push(f),un!==4&&(un=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,r,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=i0(u),a0(u,t,a,r),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(s(461)),vn=!1;function Pn(t,n,a,r){n.child=t===null?lm(n,null,a,r):Ts(n,t.child,a,r)}function s0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var N in r)N!=="ref"&&(_[N]=r[N])}else _=r;return ys(n),r=Xu(t,n,a,_,f,u),N=Wu(),t!==null&&!vn?(qu(t,n,u),ca(t,n,u)):(Rt&&N&&Au(n),n.flags|=1,Pn(t,n,r,u),n.child)}function r0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,o0(t,n,f,r,u)):(t=ml(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(_,r)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(f,r),t.ref=n.ref,t.return=n,n.child=t}function o0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(io(f,r)&&t.ref===n.ref)if(vn=!1,n.pendingProps=r=f,vf(t,u))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return df(t,n,a,r,u)}function l0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return c0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?fm(n,f):Gu(),dm(n);else return r=n.lanes=536870912,c0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(vl(n,f.cachePool),fm(n,f),ka(),n.memoizedState=null):(t!==null&&vl(n,null),Gu(),ka());return Pn(t,n,u,a),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(t,n,a,r,u){var f=Pu();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Gu(),dm(n),t!==null&&ar(t,n,r,!0),n.childLanes=u,null}function Pl(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function u0(t,n,a){return Ts(n,t.child,null,a),t=Pl(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function tS(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(r.mode==="hidden")return t=Pl(n,r),n.lanes=536870912,vo(null,t);if(ku(n),(t=tn)?(t=Mg(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Ln=n,tn=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return Pl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(ku(n),u)if(n.flags&256)n.flags&=-257,n=u0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||ar(t,n,a,!1),u=(a&t.childLanes)!==0,vn||u){if(r=$t,r!==null&&(_=qt(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,_s(t,_),ei(r,t,_),ff;Wl(),n=u0(t,n,a)}else t=f.treeContext,tn=Ei(_.nextSibling),Ln=n,Rt=!0,za=null,Mi=!1,t!==null&&Kp(n,t),n=Pl(n,r),n.flags|=4096;return n}return t=ia(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,r,u){return ys(n),a=Xu(t,n,a,r,void 0,u),r=Wu(),t!==null&&!vn?(qu(t,n,u),ca(t,n,u)):(Rt&&r&&Au(n),n.flags|=1,Pn(t,n,a,u),n.child)}function f0(t,n,a,r,u,f){return ys(n),n.updateQueue=null,a=pm(n,r,a,u),hm(t),r=Wu(),t!==null&&!vn?(qu(t,n,f),ca(t,n,f)):(Rt&&r&&Au(n),n.flags|=1,Pn(t,n,a,f),n.child)}function d0(t,n,a,r,u){if(ys(n),n.stateNode===null){var f=er,_=a.contextType;typeof _=="object"&&_!==null&&(f=On(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Iu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?On(_):er,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(lf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&cf.enqueueReplaceState(f,f.state,null),po(n,r,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var N=n.memoizedProps,V=Rs(a,N);f.props=V;var ie=f.context,ge=a.contextType;_=er,typeof ge=="object"&&ge!==null&&(_=On(ge));var ye=a.getDerivedStateFromProps;ge=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(N||ie!==_)&&Jm(n,f,r,_),Ba=!1;var ue=n.memoizedState;f.state=ue,po(n,r,f,u),ho(),ie=n.memoizedState,N||ue!==ie||Ba?(typeof ye=="function"&&(lf(n,a,ye,r),ie=n.memoizedState),(V=Ba||Qm(n,a,V,r,ue,ie,_))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ie),f.props=r,f.state=ie,f.context=_,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Fu(t,n),_=n.memoizedProps,ge=Rs(a,_),f.props=ge,ye=n.pendingProps,ue=f.context,ie=a.contextType,V=er,typeof ie=="object"&&ie!==null&&(V=On(ie)),N=a.getDerivedStateFromProps,(ie=typeof N=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ye||ue!==V)&&Jm(n,f,r,V),Ba=!1,ue=n.memoizedState,f.state=ue,po(n,r,f,u),ho();var fe=n.memoizedState;_!==ye||ue!==fe||Ba||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof N=="function"&&(lf(n,a,N,r),fe=n.memoizedState),(ge=Ba||Qm(n,a,ge,r,ue,fe,V)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(ie||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,fe,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,fe,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=fe),f.props=r,f.state=fe,f.context=V,r=ge):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ts(n,t.child,null,u),n.child=Ts(n,null,a,u)):Pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ca(t,n,u),t}function h0(t,n,a,r){return vs(),n.flags|=256,Pn(t,n,a,r),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:nm()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function p0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Va(n):ka(),(t=tn)?(t=Mg(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Ln=n,tn=null)):t=null,t===null)throw Ia(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var N=r.children;return r=r.fallback,u?(ka(),u=n.mode,N=Il({mode:"hidden",children:N},u),r=xs(r,u,a,null),N.return=n,r.return=n,N.sibling=r,n.child=N,r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,_,a),n.memoizedState=hf,vo(null,r)):(Va(n),gf(n,N))}var V=t.memoizedState;if(V!==null&&(N=V.dehydrated,N!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(ka(),n.child=t.child,n.flags|=128,n=null):(ka(),N=r.fallback,u=n.mode,r=Il({mode:"visible",children:r.children},u),N=xs(N,u,a,null),N.flags|=2,r.return=n,N.return=n,r.sibling=N,n.child=r,Ts(n,t.child,null,a),r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,_,a),n.memoizedState=hf,n=vo(null,r));else if(Va(n),Qf(N)){if(_=N.nextSibling&&N.nextSibling.dataset,_)var ie=_.dgst;_=ie,r=Error(s(419)),r.stack="",r.digest=_,ro({value:r,source:null,stack:null}),n=_f(t,n,a)}else if(vn||ar(t,n,a,!1),_=(a&t.childLanes)!==0,vn||_){if(_=$t,_!==null&&(r=qt(_,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,_s(t,r),ei(_,t,r),ff;Kf(N)||Wl(),n=_f(t,n,a)}else Kf(N)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,tn=Ei(N.nextSibling),Ln=n,Rt=!0,za=null,Mi=!1,t!==null&&Kp(n,t),n=gf(n,r.children),n.flags|=4096);return n}return u?(ka(),N=r.fallback,u=n.mode,V=t.child,ie=V.sibling,r=ia(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,ie!==null?N=ia(ie,N):(N=xs(N,u,a,null),N.flags|=2),N.return=n,r.return=n,r.sibling=N,n.child=r,vo(null,r),r=n.child,N=t.child.memoizedState,N===null?N=pf(a):(u=N.cachePool,u!==null?(V=_n._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=nm(),N={baseLanes:N.baseLanes|a,cachePool:u}),r.memoizedState=N,r.childLanes=mf(t,_,a),n.memoizedState=hf,vo(t.child,r)):(Va(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return Ts(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function m0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Du(t.return,n,a)}function xf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function g0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=hn.current,N=(_&2)!==0;if(N?(_=_&1|2,n.flags|=128):_&=1,xe(hn,_),Pn(t,n,r,a),r=Rt?so:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m0(t,a,n);else if(t.tag===19)m0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Tl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Tl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,r);break;case"together":xf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function nS(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Fa(n,_n,t.memoizedState.cache),vs();break;case 27:case 5:tt(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ku(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?p0(t,n,a):(Va(n),t=ca(t,n,a),t!==null?t.sibling:null);Va(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ar(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return g0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(hn,hn.current),r)break;return null;case 22:return n.lanes=0,l0(t,n,a,n.pendingProps);case 24:Fa(n,_n,t.memoizedState.cache)}return ca(t,n,a)}function _0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return vn=!1,nS(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,Rt&&(n.flags&1048576)!==0&&Zp(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=bs(n.elementType),n.type=t,typeof t=="function")bu(t)?(r=Rs(t,r),n.tag=1,n=d0(null,n,t,r,a)):(n.tag=0,n=df(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=s0(null,n,t,r,a);break e}else if(u===z){n.tag=14,n=r0(null,n,t,r,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Rs(r,n.pendingProps),d0(t,n,r,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),po(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Fa(n,_n,r),r!==f.cache&&Uu(n,[_n],a,!0),ho(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=h0(t,n,r,a);break e}else if(r!==u){u=vi(Error(s(424)),n),ro(u),n=h0(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=Ei(t.firstChild),Ln=n,Rt=!0,za=null,Mi=!0,a=lm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),r===u){n=ca(t,n,a);break e}Pn(t,n,r,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,r=$l(re.current).createElement(a),r[dn]=n,r[Un]=t,zn(r,a,t),gn(r),n.stateNode=r):n.memoizedState=wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Rt&&(r=n.stateNode=Tg(n.type,n.pendingProps,re.current),Ln=n,Mi=!0,u=tn,Qa(n.type)?(Jf=u,tn=Ei(r.firstChild)):tn=u),Pn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=r=tn)&&(r=US(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,Ln=n,tn=Ei(r.firstChild),Mi=!1,u=!0):u=!1),u||Ia(n)),tt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,qf(u,f)?r=null:_!==null&&qf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(t,n,qv,null,null,a),Oo._currentValue=u),zl(t,n),Pn(t,n,r,a),n.child;case 6:return t===null&&Rt&&((t=a=tn)&&(a=LS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,tn=null,t=!0):t=!1),t||Ia(n)),null;case 13:return p0(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ts(n,null,r,a):Pn(t,n,r,a),n.child;case 11:return s0(t,n,n.type,n.pendingProps,a);case 7:return Pn(t,n,n.pendingProps,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Fa(n,n.type,r.value),Pn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ys(n),u=On(u),r=r(u),n.flags|=1,Pn(t,n,r,a),n.child;case 14:return r0(t,n,n.type,n.pendingProps,a);case 15:return o0(t,n,n.type,n.pendingProps,a);case 19:return g0(t,n,a);case 31:return tS(t,n,a);case 22:return l0(t,n,a,n.pendingProps);case 24:return ys(n),r=On(_n),t===null?(u=Pu(),u===null&&(u=$t,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Iu(n),Fa(n,_n,u)):((t.lanes&a)!==0&&(Fu(t,n),po(n,null,null,a),ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,_n,r)):(r=f.cache,Fa(n,_n,r),r!==u.cache&&Uu(n,[_n],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(t){t.flags|=4}function Sf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(j0())t.flags|=8192;else throw Es=yl,zu}else t.flags&=-16777217}function x0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Lg(n))if(j0())t.flags|=8192;else throw Es=yl,zu}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ee():536870912,t.lanes|=n,gr|=n)}function So(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function iS(t,n,a){var r=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ra(_n),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ir(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),nn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ua(n),f!==null?(nn(n),x0(n,f)):(nn(n),Sf(n,u,null,r,a))):f?f!==t.memoizedState?(ua(n),nn(n),x0(n,f)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ua(n),nn(n),Sf(n,u,t,r,a)),null;case 27:if(Je(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),null}t=Ce.current,ir(n)?Qp(n):(t=Tg(u,r,a),n.stateNode=t,ua(n))}return nn(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),null}if(f=Ce.current,ir(n))Qp(n);else{var _=$l(re.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[dn]=n,f[Un]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(zn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ua(n)}}return nn(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,ir(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Ln,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||pg(t.nodeValue,a)),t||Ia(n,!0)}else t=$l(t).createTextNode(r),t[dn]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ir(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[dn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ir(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),u=!1}else u=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),nn(n),null);case 4:return Ge(),t===null&&Vf(n.stateNode.containerInfo),nn(n),null;case 10:return ra(n.type),nn(n),null;case 19:if(J(hn),r=n.memoizedState,r===null)return nn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)So(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Tl(t),f!==null){for(n.flags|=128,So(r,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Wp(a,t),a=a.sibling;return xe(hn,hn.current&1|2),Rt&&aa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Re()>kl&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304)}else{if(!u)if(t=Tl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),So(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Rt)return nn(n),null}else 2*Re()-r.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,So(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Re(),t.sibling=null,a=hn.current,xe(hn,u?a&1|2:a&1),Rt&&aa(n,r.treeForkCount),t):(nn(n),null);case 22:case 23:return li(n),Vu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&J(Ms),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(_n),nn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function aS(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(_n),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(hn),null;case 4:return Ge(),null;case 10:return ra(n.type),null;case 22:case 23:return li(n),Vu(),t!==null&&J(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(_n),null;case 25:return null;default:return null}}function v0(t,n){switch(Ru(n),n.tag){case 3:ra(_n),Ge();break;case 26:case 27:case 5:Je(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:J(hn);break;case 10:ra(n.type);break;case 22:case 23:li(n),Vu(),t!==null&&J(Ms);break;case 24:ra(_n)}}function yo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(N){jt(n,n.return,N)}}function ja(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,N=_.destroy;if(N!==void 0){_.destroy=void 0,u=n;var V=a,ie=N;try{ie()}catch(ge){jt(u,V,ge)}}}r=r.next}while(r!==f)}}catch(ge){jt(n,n.return,ge)}}function S0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{um(n,a)}catch(r){jt(t,t.return,r)}}}function y0(t,n,a){a.props=Rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){jt(t,n,r)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){jt(t,n,u)}}function Vi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){jt(t,n,u)}else a.current=null}function M0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){jt(t,t.return,u)}}function yf(t,n,a){try{var r=t.stateNode;AS(r,t.type,a,n),r[Un]=n}catch(u){jt(t,t.return,u)}}function b0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(r!==4&&(r===27&&Qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(bf(t,n,a),t=t.sibling;t!==null;)bf(t,n,a),t=t.sibling}function Bl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function E0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,r,a),n[dn]=t,n[Un]=a}catch(f){jt(t,t.return,f)}}var fa=!1,Sn=!1,Ef=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function sS(t,n){if(t=t.containerInfo,Xf=rc,t=Ip(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,N=-1,V=-1,ie=0,ge=0,ye=t,ue=null;t:for(;;){for(var fe;ye!==a||u!==0&&ye.nodeType!==3||(N=_+u),ye!==f||r!==0&&ye.nodeType!==3||(V=_+r),ye.nodeType===3&&(_+=ye.nodeValue.length),(fe=ye.firstChild)!==null;)ue=ye,ye=fe;for(;;){if(ye===t)break t;if(ue===a&&++ie===u&&(N=_),ue===f&&++ge===r&&(V=_),(fe=ye.nextSibling)!==null)break;ye=ue,ue=ye.parentNode}ye=fe}a=N===-1||V===-1?null:{start:N,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},rc=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ze=Rs(a.type,u);t=r.getSnapshotBeforeUpdate(Ze,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(nt){jt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function A0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),r&4&&yo(5,a);break;case 1:if(ha(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){jt(a,a.return,_)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){jt(a,a.return,_)}}r&64&&S0(a),r&512&&Mo(a,a.return);break;case 3:if(ha(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{um(t,n)}catch(_){jt(a,a.return,_)}}break;case 27:n===null&&r&4&&E0(a);case 26:case 5:ha(t,a),n===null&&r&4&&M0(a),r&512&&Mo(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),r&4&&C0(t,a);break;case 13:ha(t,a),r&4&&N0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=pS.bind(null,a),OS(t,a))));break;case 22:if(r=a.memoizedState!==null||fa,!r){n=n!==null&&n.memoizedState!==null||Sn,u=fa;var f=Sn;fa=r,(Sn=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),fa=u,Sn=f}break;case 30:break;default:ha(t,a)}}function R0(t){var n=t.alternate;n!==null&&(t.alternate=null,R0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Kn=!1;function da(t,n,a){for(a=a.child;a!==null;)w0(t,n,a),a=a.sibling}function w0(t,n,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:Sn||Vi(a,n),da(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Vi(a,n);var r=on,u=Kn;Qa(a.type)&&(on=a.stateNode,Kn=!1),da(t,n,a),Do(a.stateNode),on=r,Kn=u;break;case 5:Sn||Vi(a,n);case 6:if(r=on,u=Kn,on=null,da(t,n,a),on=r,Kn=u,on!==null)if(Kn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){jt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){jt(a,n,f)}break;case 18:on!==null&&(Kn?(t=on,Sg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Er(t)):Sg(on,a.stateNode));break;case 4:r=on,u=Kn,on=a.stateNode.containerInfo,Kn=!0,da(t,n,a),on=r,Kn=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Sn||ja(4,a,n),da(t,n,a);break;case 1:Sn||(Vi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&y0(a,n,r)),da(t,n,a);break;case 21:da(t,n,a);break;case 22:Sn=(r=Sn)||a.memoizedState!==null,da(t,n,a),Sn=r;break;default:da(t,n,a)}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Er(t)}catch(a){jt(n,n.return,a)}}}function N0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Er(t)}catch(a){jt(n,n.return,a)}}function rS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new T0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new T0),n;default:throw Error(s(435,t.tag))}}function Hl(t,n){var a=rS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=mS.bind(null,t,r);r.then(u,u)}})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,N=_;e:for(;N!==null;){switch(N.tag){case 27:if(Qa(N.type)){on=N.stateNode,Kn=!1;break e}break;case 5:on=N.stateNode,Kn=!1;break e;case 3:case 4:on=N.stateNode.containerInfo,Kn=!0;break e}N=N.return}if(on===null)throw Error(s(160));w0(f,_,u),on=null,Kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)D0(n,t),n=n.sibling}var Ui=null;function D0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),r&4&&(ja(3,t,t.return),yo(3,t),ja(5,t,t.return));break;case 1:Qn(n,t),Jn(t),r&512&&(Sn||a===null||Vi(a,a.return)),r&64&&fa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ui;if(Qn(n,t),Jn(t),r&512&&(Sn||a===null||Vi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ca]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),zn(f,r,a),f[dn]=t,gn(f),r=f;break e;case"link":var _=Dg("link","href",u).get(r+(a.href||""));if(_){for(var N=0;N<_.length;N++)if(f=_[N],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(N,1);break t}}f=u.createElement(r),zn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Dg("meta","content",u).get(r+(a.content||""))){for(N=0;N<_.length;N++)if(f=_[N],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(N,1);break t}}f=u.createElement(r),zn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[dn]=t,gn(f),r=f}t.stateNode=r}else Ug(u,t.type,t.stateNode);else t.stateNode=Ng(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Ug(u,t.type,t.stateNode):Ng(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,t),Jn(t),r&512&&(Sn||a===null||Vi(a,a.return)),a!==null&&r&4&&yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),r&512&&(Sn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Ze){jt(t,t.return,Ze)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,yf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Ef=!0);break;case 6:if(Qn(n,t),Jn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ze){jt(t,t.return,Ze)}}break;case 3:if(nc=null,u=Ui,Ui=ec(n.containerInfo),Qn(n,t),Ui=u,Jn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Ze){jt(t,t.return,Ze)}Ef&&(Ef=!1,U0(t));break;case 4:r=Ui,Ui=ec(t.stateNode.containerInfo),Qn(n,t),Jn(t),Ui=r;break;case 12:Qn(n,t),Jn(t);break;case 31:Qn(n,t),Jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Hl(t,r)));break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=Re()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Hl(t,r)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ie=fa,ge=Sn;if(fa=ie||u,Sn=ge||V,Qn(n,t),Sn=ge,fa=ie,Jn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||fa||Sn||ws(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{N=V.stateNode;var ye=V.memoizedProps.style,ue=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;N.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Ze){jt(V,V.return,Ze)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Ze){jt(V,V.return,Ze)}}}else if(n.tag===18){if(a===null){V=n;try{var fe=V.stateNode;u?yg(fe,!0):yg(V.stateNode,!1)}catch(Ze){jt(V,V.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Hl(t,a))));break;case 19:Qn(n,t),Jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Hl(t,r)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(b0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Bl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ai(_,""),a.flags&=-33);var N=Mf(t);Bl(t,N,_);break;case 3:case 4:var V=a.stateNode.containerInfo,ie=Mf(t);bf(t,ie,V);break;default:throw Error(s(161))}}catch(ge){jt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function U0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;U0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(t,n.alternate,n),n=n.sibling}function ws(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ja(4,n,n.return),ws(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&y0(n,n.return,a),ws(n);break;case 27:Do(n.stateNode);case 26:case 5:Vi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),yo(4,f);break;case 1:if(pa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ie){jt(r,r.return,ie)}if(r=f,u=r.updateQueue,u!==null){var N=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)cm(V[u],N)}catch(ie){jt(r,r.return,ie)}}a&&_&64&&S0(f),Mo(f,f.return);break;case 27:E0(f);case 26:case 5:pa(u,f,a),a&&r===null&&_&4&&M0(f),Mo(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&_&4&&C0(u,f);break;case 13:pa(u,f,a),a&&_&4&&N0(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),Mo(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Li(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L0(t,n,a,r),n=n.sibling}function L0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,r),u&2048&&yo(9,n);break;case 1:Li(t,n,a,r);break;case 3:Li(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Li(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,N=f.onPostCommit;typeof N=="function"&&N(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){jt(n,n.return,V)}}else Li(t,n,a,r);break;case 31:Li(t,n,a,r);break;case 13:Li(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Li(t,n,a,r):bo(t,n):f._visibility&2?Li(t,n,a,r):(f._visibility|=2,hr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Tf(_,n);break;case 24:Li(t,n,a,r),u&2048&&Af(n.alternate,n);break;default:Li(t,n,a,r)}}function hr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,N=a,V=r,ie=_.flags;switch(_.tag){case 0:case 11:case 15:hr(f,_,N,V,u),yo(8,_);break;case 23:break;case 22:var ge=_.stateNode;_.memoizedState!==null?ge._visibility&2?hr(f,_,N,V,u):bo(f,_):(ge._visibility|=2,hr(f,_,N,V,u)),u&&ie&2048&&Tf(_.alternate,_);break;case 24:hr(f,_,N,V,u),u&&ie&2048&&Af(_.alternate,_);break;default:hr(f,_,N,V,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:bo(a,r),u&2048&&Tf(r.alternate,r);break;case 24:bo(a,r),u&2048&&Af(r.alternate,r);break;default:bo(a,r)}n=n.sibling}}var Eo=8192;function pr(t,n,a){if(t.subtreeFlags&Eo)for(t=t.child;t!==null;)O0(t,n,a),t=t.sibling}function O0(t,n,a){switch(t.tag){case 26:pr(t,n,a),t.flags&Eo&&t.memoizedState!==null&&WS(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:pr(t,n,a);break;case 3:case 4:var r=Ui;Ui=ec(t.stateNode.containerInfo),pr(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Eo,Eo=16777216,pr(t,n,a),Eo=r):pr(t,n,a));break;default:pr(t,n,a)}}function P0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,I0(r,t)}P0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&ja(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):To(t);break;default:To(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,I0(r,t)}P0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function I0(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else e:for(a=t;Cn!==null;){r=Cn;var u=r.sibling,f=r.return;if(R0(r),r===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var oS={getCacheForType:function(t){var n=On(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return On(_n).controller.signal}},lS=typeof WeakMap=="function"?WeakMap:Map,It=0,$t=null,yt=null,Et=0,kt=0,ci=null,Xa=!1,mr=!1,Rf=!1,ma=0,un=0,Wa=0,Cs=0,wf=0,ui=0,gr=0,Ao=null,$n=null,Cf=!1,Vl=0,F0=0,kl=1/0,jl=null,qa=null,bn=0,Ya=null,_r=null,ga=0,Nf=0,Df=null,B0=null,Ro=0,Uf=null;function fi(){return(It&2)!==0&&Et!==0?Et&-Et:I.T!==null?Ff():Rn()}function H0(){if(ui===0)if((Et&536870912)===0||Rt){var t=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function ei(t,n,a){(t===$t&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(xr(t,0),Za(t,Et,ui,!1)),ee(t,a),((It&2)===0||t!==$t)&&(t===$t&&((It&2)===0&&(Cs|=a),un===4&&Za(t,Et,ui,!1)),ki(t))}function G0(t,n,a){if((It&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=r?fS(t,n):Of(t,n,!0),f=r;do{if(u===0){mr&&!r&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!cS(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var N=t;u=Ao;var V=N.current.memoizedState.isDehydrated;if(V&&(xr(N,_).flags|=256),_=Of(N,_,!1),_!==2){if(Rf&&!V){N.errorRecoveryDisabledLanes|=f,Cs|=f,u=4;break e}f=$n,$n=u,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){xr(t,0),Za(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(r,n,ui,!Xa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vl+300-Re(),10<u)){if(Za(r,n,ui,!Xa),pe(r,0,!0)!==0)break e;ga=n,r.timeoutHandle=xg(V0.bind(null,r,a,$n,jl,Cf,n,ui,Cs,gr,Xa,f,"Throttled",-0,0),u);break e}V0(r,a,$n,jl,Cf,n,ui,Cs,gr,Xa,f,null,-0,0)}}break}while(!0);ki(t)}function V0(t,n,a,r,u,f,_,N,V,ie,ge,ye,ue,fe){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},O0(n,f,ye);var Ze=(f&62914560)===f?Vl-Re():(f&4194048)===f?F0-Re():0;if(Ze=qS(ye,Ze),Ze!==null){ga=f,t.cancelPendingCommit=Ze(K0.bind(null,t,n,f,a,r,u,_,N,V,ge,ye,null,ue,fe)),Za(t,f,_,!ie);return}}K0(t,n,f,a,r,u,_,N,V)}function cS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,r){n&=~wf,n&=~Cs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&me(t,a,n)}function Xl(){return(It&6)===0?(wo(0),!1):!0}function Lf(){if(yt!==null){if(kt===0)var t=yt.return;else t=yt,sa=Ss=null,Yu(t),lr=null,co=0,t=yt;for(;t!==null;)v0(t.alternate,t),t=t.return;yt=null}}function xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,CS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,Lf(),$t=t,yt=a=ia(t.current,null),Et=n,kt=0,ci=null,Xa=!1,mr=He(t,n),Rf=!1,gr=ui=wf=Cs=Wa=un=0,$n=Ao=null,Cf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=t[u],r&=~f}return ma=n,dl(),a}function k0(t,n){pt=null,I.H=xo,n===or||n===Sl?(n=sm(),kt=3):n===zu?(n=sm(),kt=4):kt=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,yt===null&&(un=1,Ol(t,vi(n,t.current)))}function j0(){var t=oi.current;return t===null?!0:(Et&4194048)===Et?bi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===bi:!1}function X0(){var t=I.H;return I.H=xo,t===null?xo:t}function W0(){var t=I.A;return I.A=oS,t}function Wl(){un=4,Xa||(Et&4194048)!==Et&&oi.current!==null||(mr=!0),(Wa&134217727)===0&&(Cs&134217727)===0||$t===null||Za($t,Et,ui,!1)}function Of(t,n,a){var r=It;It|=2;var u=X0(),f=W0();($t!==t||Et!==n)&&(jl=null,xr(t,n)),n=!1;var _=un;e:do try{if(kt!==0&&yt!==null){var N=yt,V=ci;switch(kt){case 8:Lf(),_=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var ie=kt;if(kt=0,ci=null,vr(t,N,V,ie),a&&mr){_=0;break e}break;default:ie=kt,kt=0,ci=null,vr(t,N,V,ie)}}uS(),_=un;break}catch(ge){k0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,sa=Ss=null,It=r,I.H=u,I.A=f,yt===null&&($t=null,Et=0,dl()),_}function uS(){for(;yt!==null;)q0(yt)}function fS(t,n){var a=It;It|=2;var r=X0(),u=W0();$t!==t||Et!==n?(jl=null,kl=Re()+500,xr(t,n)):mr=He(t,n);e:do try{if(kt!==0&&yt!==null){n=yt;var f=ci;t:switch(kt){case 1:kt=0,ci=null,vr(t,n,f,1);break;case 2:case 9:if(im(f)){kt=0,ci=null,Y0(n);break}n=function(){kt!==2&&kt!==9||$t!==t||(kt=7),ki(t)},f.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:im(f)?(kt=0,ci=null,Y0(n)):(kt=0,ci=null,vr(t,n,f,7));break;case 5:var _=null;switch(yt.tag){case 26:_=yt.memoizedState;case 5:case 27:var N=yt;if(_?Lg(_):N.stateNode.complete){kt=0,ci=null;var V=N.sibling;if(V!==null)yt=V;else{var ie=N.return;ie!==null?(yt=ie,ql(ie)):yt=null}break t}}kt=0,ci=null,vr(t,n,f,5);break;case 6:kt=0,ci=null,vr(t,n,f,6);break;case 8:Lf(),un=6;break e;default:throw Error(s(462))}}dS();break}catch(ge){k0(t,ge)}while(!0);return sa=Ss=null,I.H=r,I.A=u,It=a,yt!==null?0:($t=null,Et=0,dl(),un)}function dS(){for(;yt!==null&&!mt();)q0(yt)}function q0(t){var n=_0(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?ql(t):yt=n}function Y0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=f0(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=f0(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Yu(n);default:v0(a,n),n=yt=Wp(n,ma),n=_0(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?ql(t):yt=n}function vr(t,n,a,r){sa=Ss=null,Yu(n),lr=null,co=0;var u=n.return;try{if(eS(t,u,n,a,Et)){un=1,Ol(t,vi(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;un=1,Ol(t,vi(a,t.current)),yt=null;return}n.flags&32768?(Rt||r===1?t=!0:mr||(Et&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=oi.current,r!==null&&r.tag===13&&(r.flags|=16384))),Z0(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Z0(n,Xa);return}t=n.return;var a=iS(n.alternate,n,ma);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);un===0&&(un=5)}function Z0(t,n){do{var a=aS(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);un=6,yt=null}function K0(t,n,a,r,u,f,_,N,V){t.cancelPendingCommit=null;do Yl();while(bn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=yu,Ue(t,a,f,_,N,V),t===$t&&(yt=$t=null,Et=0),_r=n,Ya=t,ga=a,Nf=f,Df=u,B0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gS($,function(){return tg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,u=H.p,H.p=2,_=It,It|=4;try{sS(t,n,a)}finally{It=_,H.p=u,I.T=r}}bn=1,Q0(),J0(),$0()}}function Q0(){if(bn===1){bn=0;var t=Ya,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=It;It|=4;try{D0(n,t);var f=Wf,_=Ip(t.containerInfo),N=f.focusedElem,V=f.selectionRange;if(_!==N&&N&&N.ownerDocument&&zp(N.ownerDocument.documentElement,N)){if(V!==null&&gu(N)){var ie=V.start,ge=V.end;if(ge===void 0&&(ge=ie),"selectionStart"in N)N.selectionStart=ie,N.selectionEnd=Math.min(ge,N.value.length);else{var ye=N.ownerDocument||document,ue=ye&&ye.defaultView||window;if(ue.getSelection){var fe=ue.getSelection(),Ze=N.textContent.length,nt=Math.min(V.start,Ze),Kt=V.end===void 0?nt:Math.min(V.end,Ze);!fe.extend&&nt>Kt&&(_=Kt,Kt=nt,nt=_);var Q=Pp(N,nt),X=Pp(N,Kt);if(Q&&X&&(fe.rangeCount!==1||fe.anchorNode!==Q.node||fe.anchorOffset!==Q.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var ne=ye.createRange();ne.setStart(Q.node,Q.offset),fe.removeAllRanges(),nt>Kt?(fe.addRange(ne),fe.extend(X.node,X.offset)):(ne.setEnd(X.node,X.offset),fe.addRange(ne))}}}}for(ye=[],fe=N;fe=fe.parentNode;)fe.nodeType===1&&ye.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<ye.length;N++){var Se=ye[N];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}rc=!!Xf,Wf=Xf=null}finally{It=u,H.p=r,I.T=a}}t.current=n,bn=2}}function J0(){if(bn===2){bn=0;var t=Ya,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=It;It|=4;try{A0(t,n.alternate,n)}finally{It=u,H.p=r,I.T=a}}bn=3}}function $0(){if(bn===4||bn===3){bn=0,bt();var t=Ya,n=_r,a=ga,r=B0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,_r=Ya=null,eg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),lt(a),n=n.stateNode,he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var N=r[_];f(N.value,{componentStack:N.stack})}}finally{I.T=n,H.p=u}}(ga&3)!==0&&Yl(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Uf?Ro++:(Ro=0,Uf=t):Ro=0,wo(0)}}function eg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function Yl(){return Q0(),J0(),$0(),tg()}function tg(){if(bn!==5)return!1;var t=Ya,n=Nf;Nf=0;var a=lt(ga),r=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Df,Df=null;var f=Ya,_=ga;if(bn=0,_r=Ya=null,ga=0,(It&6)!==0)throw Error(s(331));var N=It;if(It|=4,z0(f.current),L0(f,f.current,_,a),It=N,wo(0,!1),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{H.p=u,I.T=r,eg(t,n)}}function ng(t,n,a){n=vi(a,n),n=uf(t.stateNode,n,2),t=Ga(t,n,2),t!==null&&(ee(t,2),ki(t))}function jt(t,n,a){if(t.tag===3)ng(t,t,a);else for(;n!==null;){if(n.tag===3){ng(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=vi(a,t),a=i0(2),r=Ga(n,a,2),r!==null&&(a0(a,r,n,t),ee(r,2),ki(r));break}}n=n.return}}function Pf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new lS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=hS.bind(null,t,n,a),n.then(t,t))}function hS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$t===t&&(Et&a)===a&&(un===4||un===3&&(Et&62914560)===Et&&300>Re()-Vl?(It&2)===0&&xr(t,0):wf|=a,gr===Et&&(gr=0)),ki(t)}function ig(t,n){n===0&&(n=Ee()),t=_s(t,n),t!==null&&(ee(t,n),ki(t))}function pS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ig(t,a)}function mS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),ig(t,a)}function gS(t,n){return Y(t,n)}var Zl=null,Sr=null,zf=!1,Kl=!1,If=!1,Ka=0;function ki(t){t!==Sr&&t.next===null&&(Sr===null?Zl=Sr=t:Sr=Sr.next=t),Kl=!0,zf||(zf=!0,xS())}function wo(t,n){if(!If&&Kl){If=!0;do for(var a=!1,r=Zl;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,N=r.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~N),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,og(r,f))}else f=Et,f=pe(r,r===$t?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||He(r,f)||(a=!0,og(r,f));r=r.next}while(a);If=!1}}function _S(){ag()}function ag(){Kl=zf=!1;var t=0;Ka!==0&&wS()&&(t=Ka);for(var n=Re(),a=null,r=Zl;r!==null;){var u=r.next,f=sg(r,n);f===0?(r.next=null,a===null?Zl=u:a.next=u,u===null&&(Sr=a)):(a=r,(t!==0||(f&3)!==0)&&(Kl=!0)),r=u}bn!==0&&bn!==5||wo(t),Ka!==0&&(Ka=0)}function sg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),N=1<<_,V=u[_];V===-1?((N&a)===0||(N&r)!==0)&&(u[_]=ze(N,n)):V<=n&&(t.expiredLanes|=N),f&=~N}if(n=$t,a=Et,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&en(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&en(r),lt(a)){case 2:case 8:a=E;break;case 32:a=$;break;case 268435456:a=Te;break;default:a=$}return r=rg.bind(null,t),a=Y(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&en(r),t.callbackPriority=2,t.callbackNode=null,2}function rg(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var r=Et;return r=pe(t,t===$t?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(G0(t,r,n),sg(t,Re()),t.callbackNode!=null&&t.callbackNode===a?rg.bind(null,t):null)}function og(t,n){if(Yl())return null;G0(t,n,!0)}function xS(){NS(function(){(It&6)!==0?Y(O,_S):ag()})}function Ff(){if(Ka===0){var t=sr;t===0&&(t=st,st<<=1,(st&261888)===0&&(st=256)),Ka=t}return Ka}function lg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hs(""+t)}function cg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function vS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=lg((u[Un]||null).action),_=r.submitter;_&&(n=(n=_[Un]||null)?lg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var N=new ll("action","action",null,r,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ka!==0){var V=_?cg(u,_):new FormData(u);af(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(N.preventDefault(),V=_?cg(u,_):new FormData(u),af(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Bf=0;Bf<Su.length;Bf++){var Hf=Su[Bf],SS=Hf.toLowerCase(),yS=Hf[0].toUpperCase()+Hf.slice(1);Di(SS,"on"+yS)}Di(Hp,"onAnimationEnd"),Di(Gp,"onAnimationIteration"),Di(Vp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Iv,"onTransitionRun"),Di(Fv,"onTransitionStart"),Di(Bv,"onTransitionCancel"),Di(kp,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function ug(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var N=r[_],V=N.instance,ie=N.currentTarget;if(N=N.listener,V!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=ie;try{f(u)}catch(ge){fl(ge)}u.currentTarget=null,f=V}else for(_=0;_<r.length;_++){if(N=r[_],V=N.instance,ie=N.currentTarget,N=N.listener,V!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=ie;try{f(u)}catch(ge){fl(ge)}u.currentTarget=null,f=V}}}}function Mt(t,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var r=t+"__bubble";a.has(r)||(fg(n,t,2,!1),a.add(r))}function Gf(t,n,a){var r=0;n&&(r|=4),fg(a,t,r,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Ql]){t[Ql]=!0,al.forEach(function(a){a!=="selectionchange"&&(MS.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Gf("selectionchange",!1,n))}}function fg(t,n,a,r){switch(Hg(n)){case 2:var u=KS;break;case 8:u=QS;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function kf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var N=r.stateNode.containerInfo;if(N===u)break;if(_===4)for(_=r.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;N!==null;){if(_=Na(N),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){r=f=_;continue e}N=N.parentNode}}r=r.return}gp(function(){var ie=f,ge=su(a),ye=[];e:{var ue=jp.get(t);if(ue!==void 0){var fe=ll,Ze=t;switch(t){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":fe=mv;break;case"focusin":Ze="focus",fe=fu;break;case"focusout":Ze="blur",fe=fu;break;case"beforeblur":case"afterblur":fe=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=xv;break;case Hp:case Gp:case Vp:fe=rv;break;case kp:fe=Sv;break;case"scroll":case"scrollend":fe=tv;break;case"wheel":fe=Mv;break;case"copy":case"cut":case"paste":fe=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=yp;break;case"toggle":case"beforetoggle":fe=Ev}var nt=(n&4)!==0,Kt=!nt&&(t==="scroll"||t==="scrollend"),Q=nt?ue!==null?ue+"Capture":null:ue;nt=[];for(var X=ie,ne;X!==null;){var Se=X;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||Q===null||(Se=Kr(X,Q),Se!=null&&nt.push(No(X,Se,ne))),Kt)break;X=X.return}0<nt.length&&(ue=new fe(ue,Ze,null,a,ge),ye.push({event:ue,listeners:nt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ue&&a!==au&&(Ze=a.relatedTarget||a.fromElement)&&(Na(Ze)||Ze[ea]))break e;if((fe||ue)&&(ue=ge.window===ge?ge:(ue=ge.ownerDocument)?ue.defaultView||ue.parentWindow:window,fe?(Ze=a.relatedTarget||a.toElement,fe=ie,Ze=Ze?Na(Ze):null,Ze!==null&&(Kt=c(Ze),nt=Ze.tag,Ze!==Kt||nt!==5&&nt!==27&&nt!==6)&&(Ze=null)):(fe=null,Ze=ie),fe!==Ze)){if(nt=vp,Se="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(nt=yp,Se="onPointerLeave",Q="onPointerEnter",X="pointer"),Kt=fe==null?ue:ds(fe),ne=Ze==null?ue:ds(Ze),ue=new nt(Se,X+"leave",fe,a,ge),ue.target=Kt,ue.relatedTarget=ne,Se=null,Na(ge)===ie&&(nt=new nt(Q,X+"enter",Ze,a,ge),nt.target=ne,nt.relatedTarget=Kt,Se=nt),Kt=Se,fe&&Ze)t:{for(nt=bS,Q=fe,X=Ze,ne=0,Se=Q;Se;Se=nt(Se))ne++;Se=0;for(var et=X;et;et=nt(et))Se++;for(;0<ne-Se;)Q=nt(Q),ne--;for(;0<Se-ne;)X=nt(X),Se--;for(;ne--;){if(Q===X||X!==null&&Q===X.alternate){nt=Q;break t}Q=nt(Q),X=nt(X)}nt=null}else nt=null;fe!==null&&dg(ye,ue,fe,nt,!1),Ze!==null&&Kt!==null&&dg(ye,Kt,Ze,nt,!0)}}e:{if(ue=ie?ds(ie):window,fe=ue.nodeName&&ue.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ue.type==="file")var Ot=Cp;else if(Rp(ue))if(Np)Ot=Ov;else{Ot=Uv;var Ke=Dv}else fe=ue.nodeName,!fe||fe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ie&&Bt(ie.elementType)&&(Ot=Cp):Ot=Lv;if(Ot&&(Ot=Ot(t,ie))){wp(ye,Ot,a,ge);break e}Ke&&Ke(t,ue,ie),t==="focusout"&&ie&&ue.type==="number"&&ie.memoizedProps.value!=null&&St(ue,"number",ue.value)}switch(Ke=ie?ds(ie):window,t){case"focusin":(Rp(Ke)||Ke.contentEditable==="true")&&(Qs=Ke,_u=ie,ao=null);break;case"focusout":ao=_u=Qs=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Fp(ye,a,ge);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Fp(ye,a,ge)}var gt;if(hu)e:{switch(t){case"compositionstart":var Tt="onCompositionStart";break e;case"compositionend":Tt="onCompositionEnd";break e;case"compositionupdate":Tt="onCompositionUpdate";break e}Tt=void 0}else Ks?Tp(t,a)&&(Tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Tt="onCompositionStart");Tt&&(Mp&&a.locale!=="ko"&&(Ks||Tt!=="onCompositionStart"?Tt==="onCompositionEnd"&&Ks&&(gt=_p()):(Oa=ge,lu="value"in Oa?Oa.value:Oa.textContent,Ks=!0)),Ke=Jl(ie,Tt),0<Ke.length&&(Tt=new Sp(Tt,t,null,a,ge),ye.push({event:Tt,listeners:Ke}),gt?Tt.data=gt:(gt=Ap(a),gt!==null&&(Tt.data=gt)))),(gt=Av?Rv(t,a):wv(t,a))&&(Tt=Jl(ie,"onBeforeInput"),0<Tt.length&&(Ke=new Sp("onBeforeInput","beforeinput",null,a,ge),ye.push({event:Ke,listeners:Tt}),Ke.data=gt)),vS(ye,t,ie,a,ge)}ug(ye,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Jl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Kr(t,a),u!=null&&r.unshift(No(t,u,f)),u=Kr(t,n),u!=null&&r.push(No(t,u,f))),t.tag===3)return r;t=t.return}return[]}function bS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dg(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var N=a,V=N.alternate,ie=N.stateNode;if(N=N.tag,V!==null&&V===r)break;N!==5&&N!==26&&N!==27||ie===null||(V=ie,u?(ie=Kr(a,f),ie!=null&&_.unshift(No(a,ie,V))):u||(ie=Kr(a,f),ie!=null&&_.push(No(a,ie,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function pg(t,n){return n=hg(n),hg(t)===n}function Zt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ai(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ai(t,""+r);break;case"className":Ye(t,"class",r);break;case"tabIndex":Ye(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,r);break;case"style":Ni(t,r,f);break;case"data":if(n!=="object"){Ye(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=hs(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=hs(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ta);break;case"onScroll":r!=null&&Mt("scroll",t);break;case"onScrollEnd":r!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=hs(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),Be(t,"popover",r);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Be(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Be(t,a,r))}}function jf(t,n,a,r,u,f){switch(a){case"style":Ni(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ai(t,r):(typeof r=="number"||typeof r=="bigint")&&ai(t,""+r);break;case"onScroll":r!=null&&Mt("scroll",t);break;case"onScrollEnd":r!=null&&Mt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Un]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Be(t,a,r)}}}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),r&&Zt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var N=f=_=u=null,V=null,ie=null;for(r in a)if(a.hasOwnProperty(r)){var ge=a[r];if(ge!=null)switch(r){case"name":u=ge;break;case"type":_=ge;break;case"checked":V=ge;break;case"defaultChecked":ie=ge;break;case"value":f=ge;break;case"defaultValue":N=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Zt(t,n,r,ge,a,null)}}Bn(t,f,N,V,ie,_,u,!1);return;case"select":Mt("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":f=N;break;case"defaultValue":_=N;break;case"multiple":r=N;default:Zt(t,n,u,N,a,null)}n=f,a=_,t.multiple=!!r,n!=null?Mn(t,!!r,n,!1):a!=null&&Mn(t,!!r,a,!0);return;case"textarea":Mt("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(N=a[_],N!=null))switch(_){case"value":r=N;break;case"defaultValue":u=N;break;case"children":f=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Zt(t,n,_,N,a,null)}Ci(t,r,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Zt(t,n,V,r,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(r=0;r<Co.length;r++)Mt(Co[r],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in a)if(a.hasOwnProperty(ie)&&(r=a[ie],r!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,ie,r,a,null)}return;default:if(Bt(n)){for(ge in a)a.hasOwnProperty(ge)&&(r=a[ge],r!==void 0&&jf(t,n,ge,r,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(r=a[N],r!=null&&Zt(t,n,N,r,a,null))}function AS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,N=null,V=null,ie=null,ge=null;for(fe in a){var ye=a[fe];if(a.hasOwnProperty(fe)&&ye!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=ye;default:r.hasOwnProperty(fe)||Zt(t,n,fe,null,r,ye)}}for(var ue in r){var fe=r[ue];if(ye=a[ue],r.hasOwnProperty(ue)&&(fe!=null||ye!=null))switch(ue){case"type":f=fe;break;case"name":u=fe;break;case"checked":ie=fe;break;case"defaultChecked":ge=fe;break;case"value":_=fe;break;case"defaultValue":N=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==ye&&Zt(t,n,ue,fe,r,ye)}}je(t,_,N,V,ie,ge,f,u);return;case"select":fe=_=N=ue=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":fe=V;default:r.hasOwnProperty(f)||Zt(t,n,f,null,r,V)}for(u in r)if(f=r[u],V=a[u],r.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ue=f;break;case"defaultValue":N=f;break;case"multiple":_=f;default:f!==V&&Zt(t,n,u,f,r,V)}n=N,a=_,r=fe,ue!=null?Mn(t,!!a,ue,!1):!!r!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":fe=ue=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!r.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Zt(t,n,N,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ue=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,_,u,r,f)}ii(t,ue,fe);return;case"option":for(var Ze in a)if(ue=a[Ze],a.hasOwnProperty(Ze)&&ue!=null&&!r.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Zt(t,n,Ze,null,r,ue)}for(V in r)if(ue=r[V],fe=a[V],r.hasOwnProperty(V)&&ue!==fe&&(ue!=null||fe!=null))switch(V){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Zt(t,n,V,ue,r,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ue=a[nt],a.hasOwnProperty(nt)&&ue!=null&&!r.hasOwnProperty(nt)&&Zt(t,n,nt,null,r,ue);for(ie in r)if(ue=r[ie],fe=a[ie],r.hasOwnProperty(ie)&&ue!==fe&&(ue!=null||fe!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Zt(t,n,ie,ue,r,fe)}return;default:if(Bt(n)){for(var Kt in a)ue=a[Kt],a.hasOwnProperty(Kt)&&ue!==void 0&&!r.hasOwnProperty(Kt)&&jf(t,n,Kt,void 0,r,ue);for(ge in r)ue=r[ge],fe=a[ge],!r.hasOwnProperty(ge)||ue===fe||ue===void 0&&fe===void 0||jf(t,n,ge,ue,r,fe);return}}for(var Q in a)ue=a[Q],a.hasOwnProperty(Q)&&ue!=null&&!r.hasOwnProperty(Q)&&Zt(t,n,Q,null,r,ue);for(ye in r)ue=r[ye],fe=a[ye],!r.hasOwnProperty(ye)||ue===fe||ue==null&&fe==null||Zt(t,n,ye,ue,r,fe)}function mg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,N=u.duration;if(f&&N&&mg(_)){for(_=0,N=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],ie=V.startTime;if(ie>N)break;var ge=V.transferSize,ye=V.initiatorType;ge&&mg(ye)&&(V=V.responseEnd,_+=ge*(V<N?1:(N-ie)/(V-ie)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xf=null,Wf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function gg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function wS(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,vg=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof vg<"u"?function(t){return vg.resolve(null).then(t).catch(DS)}:xg;function DS(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Sg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,N=f.nodeName;f[Ca]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);Er(n)}function yg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),Zr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function US(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ca])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function LS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function Mg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function OS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function bg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Eg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Tg(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zr(t)}var Ti=new Map,Ag=new Set;function ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=H.d;H.d={f:PS,r:zS,D:IS,C:FS,L:BS,m:HS,X:VS,S:GS,M:kS};function PS(){var t=_a.f(),n=Xl();return t||n}function zS(t){var n=Da(t);n!==null&&n.tag===5&&n.type==="form"?km(n):_a.r(t)}var yr=typeof document>"u"?null:document;function Rg(t,n,a){var r=yr;if(r&&typeof n=="string"&&n){var u=Gt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ag.has(u)||(Ag.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),zn(n,"link",t),gn(n),r.head.appendChild(n)))}}function IS(t){_a.D(t),Rg("dns-prefetch",t,null)}function FS(t,n){_a.C(t,n),Rg("preconnect",t,n)}function BS(t,n,a){_a.L(t,n,a);var r=yr;if(r&&t&&n){var u='link[rel="preload"][as="'+Gt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Gt(a.imageSizes)+'"]')):u+='[href="'+Gt(t)+'"]';var f=u;switch(n){case"style":f=Mr(t);break;case"script":f=br(t)}Ti.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Uo(f))||n==="script"&&r.querySelector(Lo(f))||(n=r.createElement("link"),zn(n,"link",t),gn(n),r.head.appendChild(n)))}}function HS(t,n){_a.m(t,n);var a=yr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Gt(r)+'"][href="'+Gt(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=br(t)}if(!Ti.has(f)&&(t=v({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}r=a.createElement("link"),zn(r,"link",t),gn(r),a.head.appendChild(r)}}}function GS(t,n,a){_a.S(t,n,a);var r=yr;if(r&&t){var u=Ua(r).hoistableStyles,f=Mr(t);n=n||"default";var _=u.get(f);if(!_){var N={loading:0,preload:null};if(_=r.querySelector(Uo(f)))N.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&$f(t,a);var V=_=r.createElement("link");gn(V),zn(V,"link",t),V._p=new Promise(function(ie,ge){V.onload=ie,V.onerror=ge}),V.addEventListener("load",function(){N.loading|=1}),V.addEventListener("error",function(){N.loading|=2}),N.loading|=4,tc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:N},u.set(f,_)}}}function VS(t,n){_a.X(t,n);var a=yr;if(a&&t){var r=Ua(a).hoistableScripts,u=br(t),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(t=v({src:t,async:!0},n),(n=Ti.get(u))&&ed(t,n),f=a.createElement("script"),gn(f),zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function kS(t,n){_a.M(t,n);var a=yr;if(a&&t){var r=Ua(a).hoistableScripts,u=br(t),f=r.get(u);f||(f=a.querySelector(Lo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&ed(t,n),f=a.createElement("script"),gn(f),zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function wg(t,n,a,r){var u=(u=re.current)?ec(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=Ua(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Mr(a.href);var f=Ua(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Uo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),f||jS(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=Ua(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Mr(t){return'href="'+Gt(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function Cg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function jS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),zn(n,"link",a),gn(n),t.head.appendChild(n))}function br(t){return'[src="'+Gt(t)+'"]'}function Lo(t){return"script[async]"+t}function Ng(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(r)return n.instance=r,gn(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),gn(r),zn(r,"style",u),tc(r,a.precedence,t),n.instance=r;case"stylesheet":u=Mr(a.href);var f=t.querySelector(Uo(u));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;r=Cg(a),(u=Ti.get(u))&&$f(r,u),f=(t.ownerDocument||t).createElement("link"),gn(f);var _=f;return _._p=new Promise(function(N,V){_.onload=N,_.onerror=V}),zn(f,"link",r),n.state.loading|=4,tc(f,a.precedence,t),n.instance=f;case"script":return f=br(a.src),(u=t.querySelector(Lo(f)))?(n.instance=u,gn(u),u):(r=a,(u=Ti.get(f))&&(r=v({},a),ed(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),zn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,tc(r,a.precedence,t));return n.instance}function tc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var N=r[_];if(N.dataset.precedence===n)f=N;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function Dg(t,n,a){if(nc===null){var r=new Map,u=nc=new Map;u.set(a,r)}else u=nc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ca]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var N=r.get(_);N?N.push(f):r.set(_,[f])}}return r}function Ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function XS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function WS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(r.href),f=n.querySelector(Uo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ic.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,r=Cg(r),(u=Ti.get(u))&&$f(r,u),f=f.createElement("link"),gn(f);var _=f;_._p=new Promise(function(N,V){_.onload=N,_.onerror=V}),zn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ic.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var td=0;function qS(t,n){return t.stylesheets&&t.count===0&&sc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&td===0&&(td=62500*RS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&sc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>td?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function sc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(YS,t),ac=null,ic.call(t))}function YS(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var r=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ic.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:R,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function ZS(t,n,a,r,u,f,_,N,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Og(t,n,a,r,u,f,_,N,V,ie,ge,ye){return t=new ZS(t,n,a,_,V,ie,ge,ye,N),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Iu(f),t}function Pg(t){return t?(t=er,t):er}function zg(t,n,a,r,u,f){u=Pg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ha(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ga(t,r,n),a!==null&&(ei(a,t,n),fo(a,t,n))}function Ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){Ig(t,n),(t=t.alternate)&&Ig(t,n)}function Fg(t){if(t.tag===13||t.tag===31){var n=_s(t,67108864);n!==null&&ei(n,t,67108864),nd(t,67108864)}}function Bg(t){if(t.tag===13||t.tag===31){var n=fi();n=Dn(n);var a=_s(t,n);a!==null&&ei(a,t,n),nd(t,n)}}var rc=!0;function KS(t,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=2,id(t,n,a,r)}finally{H.p=f,I.T=u}}function QS(t,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=8,id(t,n,a,r)}finally{H.p=f,I.T=u}}function id(t,n,a,r){if(rc){var u=ad(r);if(u===null)kf(t,n,r,oc,a),Gg(t,r);else if($S(u,t,n,a,r))r.stopPropagation();else if(Gg(t,r),n&4&&-1<JS.indexOf(t)){for(;u!==null;){var f=Da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=we(f.pendingLanes);if(_!==0){var N=f;for(N.pendingLanes|=2,N.entangledLanes|=2;_;){var V=1<<31-Fe(_);N.entanglements[1]|=V,_&=~V}ki(f),(It&6)===0&&(kl=Re()+500,wo(0))}}break;case 31:case 13:N=_s(f,2),N!==null&&ei(N,f,2),Xl(),nd(f,2)}if(f=ad(r),f===null&&kf(t,n,r,oc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else kf(t,n,r,null,a)}}function ad(t){return t=su(t),sd(t)}var oc=null;function sd(t){if(oc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return oc=t,null}function Hg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qt()){case O:return 2;case E:return 8;case $:case ve:return 32;case Te:return 268435456;default:return 32}default:return 32}}var rd=!1,Ja=null,$a=null,es=null,Po=new Map,zo=new Map,ts=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Io(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&Fg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $S(t,n,a,r,u){switch(n){case"focusin":return Ja=Io(Ja,t,n,a,r,u),!0;case"dragenter":return $a=Io($a,t,n,a,r,u),!0;case"mouseover":return es=Io(es,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,Io(Po.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Io(zo.get(f)||null,t,n,a,r,u)),!0}return!1}function Vg(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,_i(t.priority,function(){Bg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,_i(t.priority,function(){Bg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);au=r,a.target.dispatchEvent(r),au=null}else return n=Da(a),n!==null&&Fg(n),t.blockedOn=a,!1;n.shift()}return!0}function kg(t,n,a){lc(t)&&a.delete(n)}function ey(){rd=!1,Ja!==null&&lc(Ja)&&(Ja=null),$a!==null&&lc($a)&&($a=null),es!==null&&lc(es)&&(es=null),Po.forEach(kg),zo.forEach(kg)}function cc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ey)))}var uc=null;function jg(t){uc!==t&&(uc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===t&&(uc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(sd(r||a)===null)continue;break}var f=Da(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Er(t){function n(V){return cc(V,t)}Ja!==null&&cc(Ja,t),$a!==null&&cc($a,t),es!==null&&cc(es,t),Po.forEach(n),zo.forEach(n);for(var a=0;a<ts.length;a++){var r=ts[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)Vg(a),a.blockedOn===null&&ts.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[Un]||null;if(typeof f=="function")_||jg(a);else if(_){var N=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Un]||null)N=_.formAction;else if(sd(u)!==null)continue}else N=_.action;typeof N=="function"?a[r+1]=N:(a.splice(r,3),r-=3),jg(a)}}}function Xg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function od(t){this._internalRoot=t}fc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();zg(a,r,t,n,null,null)},fc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;zg(t.current,2,null,t,null,null),Xl(),n[ea]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,t),a===0&&Vg(t)}};var Wg=e.version;if(Wg!=="19.2.6")throw Error(s(527,Wg,"19.2.6"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{de=dc.inject(ty),he=dc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=$m,f=e0,_=t0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Og(t,1,!1,null,null,a,r,null,u,f,_,Xg),t[ea]=n.current,Vf(t),new od(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=$m,_=e0,N=t0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Og(t,1,!0,n,a??null,r,u,V,f,_,N,Xg),n.context=Pg(null),a=n.current,r=fi(),r=Dn(r),u=Ha(r),u.callback=null,Ga(a,u,r),a=r,n.current.lanes=a,ee(n,a),ki(n),t[ea]=n.current,Vf(t),new fc(n)},Bo.version="19.2.6",Bo}var n_;function fy(){if(n_)return ud.exports;n_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=uy(),ud.exports}var dy=fy();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),py=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),i_=o=>{const e=py(o);return e.charAt(0).toUpperCase()+e.slice(1)},gx=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),my=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=rt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>rt.createElement("svg",{ref:m,...gy,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:gx("lucide",l),...!c&&!my(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>rt.createElement(h,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=(o,e)=>{const i=rt.forwardRef(({className:s,...l},c)=>rt.createElement(_y,{ref:c,iconNode:e,className:gx(`lucide-${hy(i_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=i_(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],a_=gi("chevron-right",xy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],s_=gi("circle-check",vy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],pd=gi("message-square",Sy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],My=gi("mic-off",yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Ey=gi("mic",by);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],Ay=gi("octagon-alert",Ty);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],r_=gi("refresh-cw",Ry);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Cy=gi("send",wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Dy=gi("shield-alert",Ny);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Ly=gi("tag",Uy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],o_=gi("video-off",Oy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],l_=gi("video",Py);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ho=gi("x",zy);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="184",Iy=0,c_=1,Fy=2,Bc=1,By=2,Zo=3,fs=0,ni=1,qi=2,Ea=0,Br=1,u_=2,f_=3,d_=4,Hy=5,zs=100,Gy=101,Vy=102,ky=103,jy=104,Xy=200,Wy=201,qy=202,Yy=203,Kd=204,Qd=205,Zy=206,Ky=207,Qy=208,Jy=209,$y=210,eM=211,tM=212,nM=213,iM=214,Jd=0,$d=1,eh=2,Gr=3,th=4,nh=5,ih=6,ah=7,_x=0,aM=1,sM=2,Ki=0,xx=1,vx=2,Sx=3,yx=4,Mx=5,bx=6,Ex=7,Tx=300,Vs=301,Vr=302,md=303,gd=304,$c=306,sh=1e3,ba=1001,rh=1002,Fn=1003,rM=1004,hc=1005,jn=1006,_d=1007,Bs=1008,mi=1009,Ax=1010,Rx=1011,Qo=1012,Xh=1013,Ji=1014,Yi=1015,Aa=1016,Wh=1017,qh=1018,Jo=1020,wx=35902,Cx=35899,Nx=1021,Dx=1022,Fi=1023,Ra=1026,Hs=1027,Ux=1028,Yh=1029,ks=1030,Zh=1031,Kh=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,oh=35840,lh=35841,ch=35842,uh=35843,fh=36196,dh=37492,hh=37496,ph=37488,mh=37489,Xc=37490,gh=37491,_h=37808,xh=37809,vh=37810,Sh=37811,yh=37812,Mh=37813,bh=37814,Eh=37815,Th=37816,Ah=37817,Rh=37818,wh=37819,Ch=37820,Nh=37821,Dh=36492,Uh=36494,Lh=36495,Oh=36283,Ph=36284,Wc=36285,zh=36286,oM=3200,Ih=0,lM=1,cs="",Ri="srgb",qc="srgb-linear",Yc="linear",Xt="srgb",Tr=7680,h_=519,cM=512,uM=513,fM=514,Qh=515,dM=516,hM=517,Jh=518,pM=519,p_=35044,m_="300 es",Zi=2e3,$o=2001;function mM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gM(){const o=Zc("canvas");return o.style.display="block",o}const g_={};function __(...o){const e="THREE."+o.shift();console.log(e,...o)}function Lx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function at(...o){o=Lx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ut(...o){o=Lx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Fh(...o){const e=o.join(" ");e in g_||(g_[e]=!0,at(...o))}function _M(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const xM={[Jd]:$d,[eh]:ih,[th]:ah,[Gr]:nh,[$d]:Jd,[ih]:eh,[ah]:th,[nh]:Gr};class Xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,Bh=180/Math.PI;function el(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ct(o,e,i){return Math.max(e,Math.min(i,o))}function vM(o,e){return(o%e+e)%e}function vd(o,e,i){return(1-i)*o+i*e}function Go(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const up=class up{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let At=up;class Xr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],v=s[l+3],g=c[d+0],M=c[d+1],T=c[d+2],C=c[d+3];if(v!==C||m!==g||h!==M||S!==T){let y=m*g+h*M+S*T+v*C;y<0&&(g=-g,M=-M,T=-T,C=-C,y=-y);let x=1-p;if(y<.9995){const A=Math.acos(y),R=Math.sin(A);x=Math.sin(x*A)/R,p=Math.sin(p*A)/R,m=m*x+g*p,h=h*x+M*p,S=S*x+T*p,v=v*x+C*p}else{m=m*x+g*p,h=h*x+M*p,S=S*x+T*p,v=v*x+C*p;const A=1/Math.sqrt(m*m+h*h+S*S+v*v);m*=A,h*=A,S*=A,v*=A}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],v=c[d],g=c[d+1],M=c[d+2],T=c[d+3];return e[i]=p*T+S*v+m*M-h*g,e[i+1]=m*T+S*g+h*v-p*M,e[i+2]=h*T+S*M+p*g-m*v,e[i+3]=S*T-p*v-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),v=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*S*v+h*M*T,this._y=h*M*v-g*S*T,this._z=h*S*T+g*M*v,this._w=h*S*v-g*M*T;break;case"YXZ":this._x=g*S*v+h*M*T,this._y=h*M*v-g*S*T,this._z=h*S*T-g*M*v,this._w=h*S*v+g*M*T;break;case"ZXY":this._x=g*S*v-h*M*T,this._y=h*M*v+g*S*T,this._z=h*S*T+g*M*v,this._w=h*S*v-g*M*T;break;case"ZYX":this._x=g*S*v-h*M*T,this._y=h*M*v+g*S*T,this._z=h*S*T-g*M*v,this._w=h*S*v+g*M*T;break;case"YZX":this._x=g*S*v+h*M*T,this._y=h*M*v+g*S*T,this._z=h*S*T-g*M*v,this._w=h*S*v-g*M*T;break;case"XZY":this._x=g*S*v-h*M*T,this._y=h*M*v-g*S*T,this._z=h*S*T+g*M*v,this._w=h*S*v+g*M*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],v=i[10],g=s+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>v){const M=2*Math.sqrt(1+s-p-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-s-v);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-c*m,this._y=l*S+d*m+c*p-s*h,this._z=c*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),S=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+m*h+d*v-p*S,this.y=s+m*S+p*h-c*v,this.z=l+m*v+c*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let K=fp;const Sd=new K,x_=new Xr,dp=class dp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],v=s[7],g=s[2],M=s[5],T=s[8],C=l[0],y=l[3],x=l[6],A=l[1],R=l[4],D=l[7],F=l[2],L=l[5],z=l[8];return c[0]=d*C+p*A+m*F,c[3]=d*y+p*R+m*L,c[6]=d*x+p*D+m*z,c[1]=h*C+S*A+v*F,c[4]=h*y+S*R+v*L,c[7]=h*x+S*D+v*z,c[2]=g*C+M*A+T*F,c[5]=g*y+M*R+T*L,c[8]=g*x+M*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-s*c*S+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],v=S*d-p*h,g=p*m-S*c,M=h*c-d*m,T=i*v+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*h-S*s)*C,e[2]=(p*s-l*d)*C,e[3]=g*C,e[4]=(S*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-h*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(yd.makeScale(e,i)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let dt=dp;const yd=new dt,v_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SM(){const o={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qc]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:v_,fromXYZ:S_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:v_,fromXYZ:S_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),o}const wt=SM();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ar;class yM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ar===void 0&&(Ar=Zc("canvas")),Ar.width=e.width,Ar.height=e.height;const l=Ar.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ta(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Md(l[d].image)):c.push(Md(l[d]))}else c=Md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let bM=0;const bd=new K;class Yn extends Xs{constructor(e=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=ba,l=ba,c=jn,d=Bs,p=Fi,m=mi,h=Yn.DEFAULT_ANISOTROPY,S=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=el(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sh:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sh:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Tx;Yn.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],S=m[4],v=m[8],g=m[1],M=m[5],T=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(v-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(v+C)<.1&&Math.abs(T+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(h+1)/2,D=(M+1)/2,F=(x+1)/2,L=(S+g)/4,z=(v+C)/4,b=(T+y)/4;return R>D&&R>F?R<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(R),l=L/s,c=z/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=L/l,c=b/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=z/c,l=b/c),this.set(s,l,c,i),this}let A=Math.sqrt((y-T)*(y-T)+(v-C)*(v-C)+(g-S)*(g-S));return Math.abs(A)<.001&&(A=1),this.x=(y-T)/A,this.y=(v-C)/A,this.z=(g-S)/A,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let fn=hp;class EM extends Xs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Yn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new $h(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends EM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ox extends Yn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Yn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,i,s,l,c,d,p,m,h,S,v,g,M,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,S,v,g,M,T,C,y)}set(e,i,s,l,c,d,p,m,h,S,v,g,M,T,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=S,x[10]=v,x[14]=g,x[3]=M,x[7]=T,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*S,M=d*v,T=p*S,C=p*v;i[0]=m*S,i[4]=-m*v,i[8]=h,i[1]=M+T*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=T+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*S,M=m*v,T=h*S,C=h*v;i[0]=g+C*p,i[4]=T*p-M,i[8]=d*h,i[1]=d*v,i[5]=d*S,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*S,M=m*v,T=h*S,C=h*v;i[0]=g-C*p,i[4]=-d*v,i[8]=T+M*p,i[1]=M+T*p,i[5]=d*S,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*S,M=d*v,T=p*S,C=p*v;i[0]=m*S,i[4]=T*h-M,i[8]=g*h+C,i[1]=m*v,i[5]=C*h+g,i[9]=M*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*S,i[4]=C-g*v,i[8]=T*v+M,i[1]=v,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=M*v+T,i[10]=g-C*v}else if(e.order==="XZY"){const g=d*m,M=d*h,T=p*m,C=p*h;i[0]=m*S,i[4]=-v,i[8]=h*S,i[1]=g*v+C,i[5]=d*S,i[9]=M*v-T,i[2]=T*v-M,i[6]=p*S,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AM,e,RM)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),is.crossVectors(s,di),is.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),is.crossVectors(s,di)),is.normalize(),pc.crossVectors(di,is),l[0]=is.x,l[4]=pc.x,l[8]=di.x,l[1]=is.y,l[5]=pc.y,l[9]=di.y,l[2]=is.z,l[6]=pc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],v=s[5],g=s[9],M=s[13],T=s[2],C=s[6],y=s[10],x=s[14],A=s[3],R=s[7],D=s[11],F=s[15],L=l[0],z=l[4],b=l[8],P=l[12],k=l[1],G=l[5],q=l[9],le=l[13],te=l[2],W=l[6],I=l[10],H=l[14],oe=l[3],_e=l[7],Me=l[11],B=l[15];return c[0]=d*L+p*k+m*te+h*oe,c[4]=d*z+p*G+m*W+h*_e,c[8]=d*b+p*q+m*I+h*Me,c[12]=d*P+p*le+m*H+h*B,c[1]=S*L+v*k+g*te+M*oe,c[5]=S*z+v*G+g*W+M*_e,c[9]=S*b+v*q+g*I+M*Me,c[13]=S*P+v*le+g*H+M*B,c[2]=T*L+C*k+y*te+x*oe,c[6]=T*z+C*G+y*W+x*_e,c[10]=T*b+C*q+y*I+x*Me,c[14]=T*P+C*le+y*H+x*B,c[3]=A*L+R*k+D*te+F*oe,c[7]=A*z+R*G+D*W+F*_e,c[11]=A*b+R*q+D*I+F*Me,c[15]=A*P+R*le+D*H+F*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],v=e[6],g=e[10],M=e[14],T=e[3],C=e[7],y=e[11],x=e[15],A=m*M-h*g,R=p*M-h*v,D=p*g-m*v,F=d*M-h*S,L=d*g-m*S,z=d*v-p*S;return i*(C*A-y*R+x*D)-s*(T*A-y*F+x*L)+l*(T*R-C*F+x*z)-c*(T*D-C*L+y*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],v=e[9],g=e[10],M=e[11],T=e[12],C=e[13],y=e[14],x=e[15],A=i*p-s*d,R=i*m-l*d,D=i*h-c*d,F=s*m-l*p,L=s*h-c*p,z=l*h-c*m,b=S*C-v*T,P=S*y-g*T,k=S*x-M*T,G=v*y-g*C,q=v*x-M*C,le=g*x-M*y,te=A*le-R*q+D*G+F*k-L*P+z*b;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/te;return e[0]=(p*le-m*q+h*G)*W,e[1]=(l*q-s*le-c*G)*W,e[2]=(C*z-y*L+x*F)*W,e[3]=(g*L-v*z-M*F)*W,e[4]=(m*k-d*le-h*P)*W,e[5]=(i*le-l*k+c*P)*W,e[6]=(y*D-T*z-x*R)*W,e[7]=(S*z-g*D+M*R)*W,e[8]=(d*q-p*k+h*b)*W,e[9]=(s*k-i*q-c*b)*W,e[10]=(T*L-C*D+x*A)*W,e[11]=(v*D-S*L-M*A)*W,e[12]=(p*P-d*G-m*b)*W,e[13]=(i*G-s*P+l*b)*W,e[14]=(C*R-T*F-y*A)*W,e[15]=(S*F-v*R+g*A)*W,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,S=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,S=d+d,v=p+p,g=c*h,M=c*S,T=c*v,C=d*S,y=d*v,x=p*v,A=m*h,R=m*S,D=m*v,F=s.x,L=s.y,z=s.z;return l[0]=(1-(C+x))*F,l[1]=(M+D)*F,l[2]=(T-R)*F,l[3]=0,l[4]=(M-D)*L,l[5]=(1-(g+x))*L,l[6]=(y+A)*L,l[7]=0,l[8]=(T+R)*z,l[9]=(y-A)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Oi.copy(this);const h=1/d,S=1/p,v=1/m;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=S,Oi.elements[5]*=S,Oi.elements[6]*=S,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,i.setFromRotationMatrix(Oi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Zi,m=!1){const h=this.elements,S=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(p===Zi)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===$o)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Zi,m=!1){const h=this.elements,S=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(p===Zi)T=-2/(d-c),C=-(d+c)/(d-c);else if(p===$o)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Jc.prototype.isMatrix4=!0;let ln=Jc;const Rr=new K,Oi=new ln,AM=new K(0,0,0),RM=new K(1,1,1),is=new K,pc=new K,di=new K,y_=new ln,M_=new Xr;class js{constructor(e=0,i=0,s=0,l=js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return M_.setFromEuler(this),this.setFromQuaternion(M_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class Px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wM=0;const b_=new K,wr=new Xr,xa=new ln,mc=new K,Vo=new K,CM=new K,NM=new Xr,E_=new K(1,0,0),T_=new K(0,1,0),A_=new K(0,0,1),R_={type:"added"},DM={type:"removed"},Cr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Xn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new K,i=new js,s=new Xr,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new dt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(A_,e)}translateOnAxis(e,i){return b_.copy(e).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(A_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?mc.copy(e):mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(Vo,mc,this.up):xa.lookAt(mc,Vo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(xa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DM),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R_),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,CM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,NM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),v=d(e.shapes),g=d(e.skeletons),M=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new K(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gs extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=S.position.distanceTo(v.position),M=.02,T=.005;h.inputState.pinching&&g>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Gs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Ad(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Nt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=wt.workingColorSpace){return this.r=e,this.g=i,this.b=s,wt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=wt.workingColorSpace){if(e=vM(e,1),i=Ct(i,0,1),s=Ct(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ad(d,c,e+1/3),this.g=Ad(d,c,e),this.b=Ad(d,c,e-1/3)}return wt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const s=zx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return wt.workingToColorSpace(Vn.copy(this),e),Math.round(Ct(Vn.r*255,0,255))*65536+Math.round(Ct(Vn.g*255,0,255))*256+Math.round(Ct(Vn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=S<=.5?v/(d+p):v/(2-d-p),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ri){wt.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,s=Vn.g,l=Vn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(gc);const s=vd(as.h,gc.h,i),l=vd(as.s,gc.s,i),c=vd(as.l,gc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Nt;Nt.NAMES=zx;class ep{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(e),this.density=i}clone(){return new ep(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class LM extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new K,va=new K,Rd=new K,Sa=new K,Nr=new K,Dr=new K,w_=new K,wd=new K,Cd=new K,Nd=new K,Dd=new fn,Ud=new fn,Ld=new fn;class Ii{constructor(e=new K,i=new K,s=new K){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Pi.subVectors(e,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Pi.subVectors(l,i),va.subVectors(s,i),Rd.subVectors(e,i);const d=Pi.dot(Pi),p=Pi.dot(va),m=Pi.dot(Rd),h=va.dot(va),S=va.dot(Rd),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(h*m-p*S)*g,T=(d*S-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(d,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Dd.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Dd,c.x),d.addScaledVector(Ud,c.y),d.addScaledVector(Ld,c.z),d}static isFrontFacing(e,i,s,l){return Pi.subVectors(s,i),va.subVectors(e,i),Pi.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Pi.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Nr.subVectors(l,s),Dr.subVectors(c,s),wd.subVectors(e,s);const m=Nr.dot(wd),h=Dr.dot(wd);if(m<=0&&h<=0)return i.copy(s);Cd.subVectors(e,l);const S=Nr.dot(Cd),v=Dr.dot(Cd);if(S>=0&&v<=S)return i.copy(l);const g=m*v-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Nr,d);Nd.subVectors(e,c);const M=Nr.dot(Nd),T=Dr.dot(Nd);if(T>=0&&M<=T)return i.copy(c);const C=M*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Dr,p);const y=S*T-M*v;if(y<=0&&v-S>=0&&M-T>=0)return w_.subVectors(c,l),p=(v-S)/(v-S+(M-T)),i.copy(l).addScaledVector(w_,p);const x=1/(y+C+g);return d=C*x,p=g*x,i.copy(s).addScaledVector(Nr,d).addScaledVector(Dr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tl{constructor(e=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,zi):zi.fromBufferAttribute(c,d),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),xc.subVectors(this.max,ko),Ur.subVectors(e.a,ko),Lr.subVectors(e.b,ko),Or.subVectors(e.c,ko),ss.subVectors(Lr,Ur),rs.subVectors(Or,Lr),Ns.subVectors(Ur,Or);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!Od(i,Ur,Lr,Or,xc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,Ur,Lr,Or,xc))?!1:(vc.crossVectors(ss,rs),i=[vc.x,vc.y,vc.z],Od(i,Ur,Lr,Or,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new K,new K,new K,new K,new K,new K,new K,new K],zi=new K,_c=new tl,Ur=new K,Lr=new K,Or=new K,ss=new K,rs=new K,Ns=new K,ko=new K,xc=new K,vc=new K,Ds=new K;function Od(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Ds.fromArray(o,c);const p=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=e.dot(Ds),h=i.dot(Ds),S=s.dot(Ds);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const yn=new K,Sc=new At;let OM=0;class wi extends Xs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=p_,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(e),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Go(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ix extends wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Fx extends wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ft extends wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const PM=new tl,jo=new K,Pd=new K;class nl{constructor(e=new K,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):PM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Pd)),this.expandByPoint(jo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zM=0;const Ai=new ln,zd=new Xn,Pr=new K,hi=new tl,Xo=new tl,Nn=new K;class An extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mM(e)?Fx:Ix)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ft(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Xo.setFromBufferAttribute(p),this.morphTargetsRelative?(Nn.addVectors(hi.min,Xo.min),hi.expandByPoint(Nn),Nn.addVectors(hi.max,Xo.max),hi.expandByPoint(Nn)):(hi.expandByPoint(Xo.min),hi.expandByPoint(Xo.max))}hi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Nn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Nn.fromBufferAttribute(p,h),m&&(Pr.fromBufferAttribute(e,h),Nn.add(Pr)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new K,m[b]=new K;const h=new K,S=new K,v=new K,g=new At,M=new At,T=new At,C=new K,y=new K;function x(b,P,k){h.fromBufferAttribute(s,b),S.fromBufferAttribute(s,P),v.fromBufferAttribute(s,k),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,P),T.fromBufferAttribute(c,k),S.sub(h),v.sub(h),M.sub(g),T.sub(g);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(C.copy(S).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(G),p[b].add(C),p[P].add(C),p[k].add(C),m[b].add(y),m[P].add(y),m[k].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let b=0,P=A.length;b<P;++b){const k=A[b],G=k.start,q=k.count;for(let le=G,te=G+q;le<te;le+=3)x(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const R=new K,D=new K,F=new K,L=new K;function z(b){F.fromBufferAttribute(l,b),L.copy(F);const P=p[b];R.copy(P),R.sub(F.multiplyScalar(F.dot(P))).normalize(),D.crossVectors(L,P);const G=D.dot(m[b])<0?-1:1;d.setXYZW(b,R.x,R.y,R.z,G)}for(let b=0,P=A.length;b<P;++b){const k=A[b],G=k.start,q=k.count;for(let le=G,te=G+q;le<te;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,d=new K,p=new K,m=new K,h=new K,S=new K,v=new K;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),S.subVectors(d,c),v.subVectors(l,c),S.cross(v),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,y),p.add(S),m.add(S),h.add(S),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,c),v.subVectors(l,c),S.cross(v),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Nn.fromBufferAttribute(e,i),Nn.normalize(),e.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,v=p.normalized,g=new h.constructor(m.length*S);let M=0,T=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*S;for(let x=0;x<S;x++)g[T++]=h[M++]}return new wi(g,S,v)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new An,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,v=h.length;S<v;S++){const g=h[S],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let v=0,g=h.length;v<g;v++){const M=h[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=e.morphAttributes;for(const h in c){const S=[],v=c[h];for(let g=0,M=v.length;g<M;g++)S.push(v[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let IM=0;class Ws extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Br,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==h_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ma=new K,Id=new K,yc=new K,os=new K,Fd=new K,Mc=new K,Bd=new K;class tp{constructor(e=new K,i=new K(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Id.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(Id);const c=e.distanceTo(i)*.5,d=-this.direction.dot(yc),p=os.dot(this.direction),m=-os.dot(yc),h=os.lengthSq(),S=Math.abs(1-d*d);let v,g,M,T;if(S>0)if(v=d*m-p,g=d*p-m,T=c*S,v>=0)if(g>=-T)if(g<=T){const C=1/S;v*=C,g*=C,M=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g<=-T?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Id).addScaledVector(yc,g),M}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),S>=0?(c=(e.min.y-g.y)*S,d=(e.max.y-g.y)*S):(c=(e.max.y-g.y)*S,d=(e.min.y-g.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,s,l,c){Fd.subVectors(i,e),Mc.subVectors(s,e),Bd.crossVectors(Fd,Mc);let d=this.direction.dot(Bd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;os.subVectors(this.origin,e);const m=p*this.direction.dot(Mc.crossVectors(os,Mc));if(m<0)return null;const h=p*this.direction.dot(Fd.cross(os));if(h<0||m+h>d)return null;const S=-p*os.dot(Bd);return S<0?null:this.at(S/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Is extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=_x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const C_=new ln,Us=new tp,bc=new nl,N_=new K,Ec=new K,Tc=new K,Ac=new K,Hd=new K,Rc=new K,D_=new K,wc=new K;class In extends Xn{constructor(e=new An,i=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Rc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],v=c[m];S!==0&&(Hd.fromBufferAttribute(v,e),d?Rc.addScaledVector(Hd,S):Rc.addScaledVector(Hd.sub(i),S))}i.add(Rc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),Us.copy(e.ray).recast(e.near),!(bc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(bc,N_)===null||Us.origin.distanceToSquared(N_)>(e.far-e.near)**2))&&(C_.copy(c).invert(),Us.copy(e.ray).applyMatrix4(C_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Us)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const y=g[T],x=d[y.materialIndex],A=Math.max(y.start,M.start),R=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=A,F=R;D<F;D+=3){const L=p.getX(D),z=p.getX(D+1),b=p.getX(D+2);l=Cc(this,x,e,s,h,S,v,L,z,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=T,x=C;y<x;y+=3){const A=p.getX(y),R=p.getX(y+1),D=p.getX(y+2);l=Cc(this,d,e,s,h,S,v,A,R,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=g.length;T<C;T++){const y=g[T],x=d[y.materialIndex],A=Math.max(y.start,M.start),R=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=A,F=R;D<F;D+=3){const L=D,z=D+1,b=D+2;l=Cc(this,x,e,s,h,S,v,L,z,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=T,x=C;y<x;y+=3){const A=y,R=y+1,D=y+2;l=Cc(this,d,e,s,h,S,v,A,R,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function FM(o,e,i,s,l,c,d,p){let m;if(e.side===ni?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===fs,p),m===null)return null;wc.copy(p),wc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(wc);return h<i.near||h>i.far?null:{distance:h,point:wc.clone(),object:o}}function Cc(o,e,i,s,l,c,d,p,m,h){o.getVertexPosition(p,Ec),o.getVertexPosition(m,Tc),o.getVertexPosition(h,Ac);const S=FM(o,e,i,s,Ec,Tc,Ac,D_);if(S){const v=new K;Ii.getBarycoord(D_,Ec,Tc,Ac,v),l&&(S.uv=Ii.getInterpolatedAttribute(l,p,m,h,v,new At)),c&&(S.uv1=Ii.getInterpolatedAttribute(c,p,m,h,v,new At)),d&&(S.normal=Ii.getInterpolatedAttribute(d,p,m,h,v,new K),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new K,materialIndex:0};Ii.getNormal(Ec,Tc,Ac,g.normal),S.face=g,S.barycoord=v}return S}class BM extends Yn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Fn,S=Fn,v,g){super(null,d,p,m,h,S,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new K,HM=new K,GM=new dt;class Ps{constructor(e=new K(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Gd.subVectors(s,i).cross(HM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Gd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||GM.getNormalMatrix(e),l=this.coplanarPoint(Gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new nl,VM=new At(.5,.5),Nc=new K;class np{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,d=new Ps){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Zi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],S=c[4],v=c[5],g=c[6],M=c[7],T=c[8],C=c[9],y=c[10],x=c[11],A=c[12],R=c[13],D=c[14],F=c[15];if(l[0].setComponents(h-d,M-S,x-T,F-A).normalize(),l[1].setComponents(h+d,M+S,x+T,F+A).normalize(),l[2].setComponents(h+p,M+v,x+C,F+R).normalize(),l[3].setComponents(h-p,M-v,x-C,F-R).normalize(),s)l[4].setComponents(m,g,y,D).normalize(),l[5].setComponents(h-m,M-g,x-y,F-D).normalize();else if(l[4].setComponents(h-m,M-g,x-y,F-D).normalize(),i===Zi)l[5].setComponents(h+m,M+g,x+y,F+D).normalize();else if(i===$o)l[5].setComponents(m,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const i=VM.distanceTo(e.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bx extends Ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new K,Qc=new K,U_=new ln,Wo=new tp,Dc=new nl,Vd=new K,L_=new K;class kM extends Xn{constructor(e=new An,i=new Bx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Kc.distanceTo(Qc);e.setAttribute("lineDistance",new Ft(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,e.ray.intersectsSphere(Dc)===!1)return;U_.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(U_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,S=s.index,g=s.attributes.position;if(S!==null){const M=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=h){const x=S.getX(C),A=S.getX(C+1),R=Uc(this,e,Wo,m,x,A,C);R&&i.push(R)}if(this.isLineLoop){const C=S.getX(T-1),y=S.getX(M),x=Uc(this,e,Wo,m,C,y,T-1);x&&i.push(x)}}else{const M=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let C=M,y=T-1;C<y;C+=h){const x=Uc(this,e,Wo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Uc(this,e,Wo,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Uc(o,e,i,s,l,c,d){const p=o.geometry.attributes.position;if(Kc.fromBufferAttribute(p,l),Qc.fromBufferAttribute(p,c),i.distanceSqToSegment(Kc,Qc,Vd,L_)>s)return;Vd.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Vd);if(!(h<e.near||h>e.far))return{distance:h,point:L_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const O_=new K,P_=new K;class jM extends kM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)O_.fromBufferAttribute(i,l),P_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+O_.distanceTo(P_);e.setAttribute("lineDistance",new Ft(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hx extends Ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z_=new ln,Hh=new tp,Lc=new nl,Oc=new K;class XM extends Xn{constructor(e=new An,i=new Hx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;z_.copy(l).invert(),Hh.copy(e.ray).applyMatrix4(z_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,v=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let T=g,C=M;T<C;T++){const y=h.getX(T);Oc.fromBufferAttribute(v,y),I_(Oc,y,m,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let T=g,C=M;T<C;T++)Oc.fromBufferAttribute(v,T),I_(Oc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function I_(o,e,i,s,l,c,d){const p=Hh.distanceSqToPoint(o);if(p<i){const m=new K;Hh.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Gx extends Yn{constructor(e=[],i=Vs,s,l,c,d,p,m,h,S){super(e,i,s,l,c,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kr extends Yn{constructor(e,i,s=Ji,l,c,d,p=Fn,m=Fn,h,S=Ra,v=1){if(S!==Ra&&S!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class WM extends kr{constructor(e,i=Ji,s=Vs,l,c,d=Fn,p=Fn,m,h=Ra){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,l,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vx extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wr extends An{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],S=[],v=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(S,3)),this.setAttribute("uv",new Ft(v,2));function T(C,y,x,A,R,D,F,L,z,b,P){const k=D/z,G=F/b,q=D/2,le=F/2,te=L/2,W=z+1,I=b+1;let H=0,oe=0;const _e=new K;for(let Me=0;Me<I;Me++){const B=Me*G-le;for(let J=0;J<W;J++){const xe=J*k-q;_e[C]=xe*A,_e[y]=B*R,_e[x]=te,h.push(_e.x,_e.y,_e.z),_e[C]=0,_e[y]=0,_e[x]=L>0?1:-1,S.push(_e.x,_e.y,_e.z),v.push(J/z),v.push(1-Me/b),H+=1}}for(let Me=0;Me<b;Me++)for(let B=0;B<z;B++){const J=g+B+W*Me,xe=g+B+W*(Me+1),Ce=g+(B+1)+W*(Me+1),Ne=g+(B+1)+W*Me;m.push(J,xe,Ne),m.push(xe,Ce,Ne),oe+=6}p.addGroup(M,oe,P),M+=oe,g+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ip extends An{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const S=[],v=[],g=[],M=[];let T=0;const C=[],y=s/2;let x=0;A(),d===!1&&(e>0&&R(!0),i>0&&R(!1)),this.setIndex(S),this.setAttribute("position",new Ft(v,3)),this.setAttribute("normal",new Ft(g,3)),this.setAttribute("uv",new Ft(M,2));function A(){const D=new K,F=new K;let L=0;const z=(i-e)/s;for(let b=0;b<=c;b++){const P=[],k=b/c,G=k*(i-e)+e;for(let q=0;q<=l;q++){const le=q/l,te=le*m+p,W=Math.sin(te),I=Math.cos(te);F.x=G*W,F.y=-k*s+y,F.z=G*I,v.push(F.x,F.y,F.z),D.set(W,z,I).normalize(),g.push(D.x,D.y,D.z),M.push(le,1-k),P.push(T++)}C.push(P)}for(let b=0;b<l;b++)for(let P=0;P<c;P++){const k=C[P][b],G=C[P+1][b],q=C[P+1][b+1],le=C[P][b+1];(e>0||P!==0)&&(S.push(k,G,le),L+=3),(i>0||P!==c-1)&&(S.push(G,q,le),L+=3)}h.addGroup(x,L,0),x+=L}function R(D){const F=T,L=new At,z=new K;let b=0;const P=D===!0?e:i,k=D===!0?1:-1;for(let q=1;q<=l;q++)v.push(0,y*k,0),g.push(0,k,0),M.push(.5,.5),T++;const G=T;for(let q=0;q<=l;q++){const te=q/l*m+p,W=Math.cos(te),I=Math.sin(te);z.x=P*I,z.y=y*k,z.z=P*W,v.push(z.x,z.y,z.z),g.push(0,k,0),L.x=W*.5+.5,L.y=I*.5*k+.5,M.push(L.x,L.y),T++}for(let q=0;q<l;q++){const le=F+q,te=G+q;D===!0?S.push(te,te+1,le):S.push(te+1,te,le),b+=3}h.addGroup(x,b,D===!0?1:2),x+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eu extends An{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];p(l),h(s),S(),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(c.slice(),3)),this.setAttribute("uv",new Ft(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(A){const R=new K,D=new K,F=new K;for(let L=0;L<i.length;L+=3)M(i[L+0],R),M(i[L+1],D),M(i[L+2],F),m(R,D,F,A)}function m(A,R,D,F){const L=F+1,z=[];for(let b=0;b<=L;b++){z[b]=[];const P=A.clone().lerp(D,b/L),k=R.clone().lerp(D,b/L),G=L-b;for(let q=0;q<=G;q++)q===0&&b===L?z[b][q]=P:z[b][q]=P.clone().lerp(k,q/G)}for(let b=0;b<L;b++)for(let P=0;P<2*(L-b)-1;P++){const k=Math.floor(P/2);P%2===0?(g(z[b][k+1]),g(z[b+1][k]),g(z[b][k])):(g(z[b][k+1]),g(z[b+1][k+1]),g(z[b+1][k]))}}function h(A){const R=new K;for(let D=0;D<c.length;D+=3)R.x=c[D+0],R.y=c[D+1],R.z=c[D+2],R.normalize().multiplyScalar(A),c[D+0]=R.x,c[D+1]=R.y,c[D+2]=R.z}function S(){const A=new K;for(let R=0;R<c.length;R+=3){A.x=c[R+0],A.y=c[R+1],A.z=c[R+2];const D=y(A)/2/Math.PI+.5,F=x(A)/Math.PI+.5;d.push(D,1-F)}T(),v()}function v(){for(let A=0;A<d.length;A+=6){const R=d[A+0],D=d[A+2],F=d[A+4],L=Math.max(R,D,F),z=Math.min(R,D,F);L>.9&&z<.1&&(R<.2&&(d[A+0]+=1),D<.2&&(d[A+2]+=1),F<.2&&(d[A+4]+=1))}}function g(A){c.push(A.x,A.y,A.z)}function M(A,R){const D=A*3;R.x=e[D+0],R.y=e[D+1],R.z=e[D+2]}function T(){const A=new K,R=new K,D=new K,F=new K,L=new At,z=new At,b=new At;for(let P=0,k=0;P<c.length;P+=9,k+=6){A.set(c[P+0],c[P+1],c[P+2]),R.set(c[P+3],c[P+4],c[P+5]),D.set(c[P+6],c[P+7],c[P+8]),L.set(d[k+0],d[k+1]),z.set(d[k+2],d[k+3]),b.set(d[k+4],d[k+5]),F.copy(A).add(R).add(D).divideScalar(3);const G=y(F);C(L,k+0,A,G),C(z,k+2,R,G),C(b,k+4,D,G)}}function C(A,R,D,F){F<0&&A.x===1&&(d[R]=A.x-1),D.x===0&&D.z===0&&(d[R]=F/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.vertices,e.indices,e.radius,e.detail)}}class ap extends eu{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ap(e.radius,e.detail)}}class sp extends eu{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new sp(e.radius,e.detail)}}class tu extends An{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,v=e/p,g=i/m,M=[],T=[],C=[],y=[];for(let x=0;x<S;x++){const A=x*g-d;for(let R=0;R<h;R++){const D=R*v-c;T.push(D,-A,0),C.push(0,0,1),y.push(R/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<p;A++){const R=A+h*x,D=A+h*(x+1),F=A+1+h*(x+1),L=A+1+h*x;M.push(R,D,L),M.push(D,F,L)}this.setIndex(M),this.setAttribute("position",new Ft(T,3)),this.setAttribute("normal",new Ft(C,3)),this.setAttribute("uv",new Ft(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class rp extends An{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],S=[];let v=e;const g=(i-e)/l,M=new K,T=new At;for(let C=0;C<=l;C++){for(let y=0;y<=s;y++){const x=c+y/s*d;M.x=v*Math.cos(x),M.y=v*Math.sin(x),m.push(M.x,M.y,M.z),h.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,S.push(T.x,T.y)}v+=g}for(let C=0;C<l;C++){const y=C*(s+1);for(let x=0;x<s;x++){const A=x+y,R=A,D=A+s+1,F=A+s+2,L=A+1;p.push(R,D,L),p.push(D,F,L)}}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class op extends An{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],v=new K,g=new K,M=[],T=[],C=[],y=[];for(let x=0;x<=s;x++){const A=[],R=x/s;let D=0;x===0&&d===0?D=.5/i:x===s&&m===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const L=F/i;v.x=-e*Math.cos(l+L*c)*Math.sin(d+R*p),v.y=e*Math.cos(d+R*p),v.z=e*Math.sin(l+L*c)*Math.sin(d+R*p),T.push(v.x,v.y,v.z),g.copy(v).normalize(),C.push(g.x,g.y,g.z),y.push(L+D,1-R),A.push(h++)}S.push(A)}for(let x=0;x<s;x++)for(let A=0;A<i;A++){const R=S[x][A+1],D=S[x][A],F=S[x+1][A],L=S[x+1][A+1];(x!==0||d>0)&&M.push(R,D,L),(x!==s-1||m<Math.PI)&&M.push(D,F,L)}this.setIndex(M),this.setAttribute("position",new Ft(T,3)),this.setAttribute("normal",new Ft(C,3)),this.setAttribute("uv",new Ft(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lp extends An{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],S=[],v=[],g=new K,M=new K,T=new K;for(let C=0;C<=s;C++){const y=d+C/s*p;for(let x=0;x<=l;x++){const A=x/l*c;M.x=(e+i*Math.cos(y))*Math.cos(A),M.y=(e+i*Math.cos(y))*Math.sin(A),M.z=i*Math.sin(y),h.push(M.x,M.y,M.z),g.x=e*Math.cos(A),g.y=e*Math.sin(A),T.subVectors(M,g).normalize(),S.push(T.x,T.y,T.z),v.push(x/l),v.push(C/s)}}for(let C=1;C<=s;C++)for(let y=1;y<=l;y++){const x=(l+1)*C+y-1,A=(l+1)*(C-1)+y-1,R=(l+1)*(C-1)+y,D=(l+1)*C+y;m.push(x,A,D),m.push(A,R,D)}this.setIndex(m),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(S,3)),this.setAttribute("uv",new Ft(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class cp extends An{constructor(e=1,i=.4,s=64,l=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:s,radialSegments:l,p:c,q:d},s=Math.floor(s),l=Math.floor(l);const p=[],m=[],h=[],S=[],v=new K,g=new K,M=new K,T=new K,C=new K,y=new K,x=new K;for(let R=0;R<=s;++R){const D=R/s*c*Math.PI*2;A(D,c,d,e,M),A(D+.01,c,d,e,T),y.subVectors(T,M),x.addVectors(T,M),C.crossVectors(y,x),x.crossVectors(C,y),C.normalize(),x.normalize();for(let F=0;F<=l;++F){const L=F/l*Math.PI*2,z=-i*Math.cos(L),b=i*Math.sin(L);v.x=M.x+(z*x.x+b*C.x),v.y=M.y+(z*x.y+b*C.y),v.z=M.z+(z*x.z+b*C.z),m.push(v.x,v.y,v.z),g.subVectors(v,M).normalize(),h.push(g.x,g.y,g.z),S.push(R/s),S.push(F/l)}}for(let R=1;R<=s;R++)for(let D=1;D<=l;D++){const F=(l+1)*(R-1)+(D-1),L=(l+1)*R+(D-1),z=(l+1)*R+D,b=(l+1)*(R-1)+D;p.push(F,L,b),p.push(L,z,b)}this.setIndex(p),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(S,2));function A(R,D,F,L,z){const b=Math.cos(R),P=Math.sin(R),k=F/D*R,G=Math.cos(k);z.x=L*(2+G)*.5*b,z.y=L*(2+G)*P*.5,z.z=L*Math.sin(k)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function jr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(F_(l))l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(F_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const s=jr(o[i]);for(const l in s)e[l]=s[l]}return e}function F_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function qM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const YM={clone:jr,merge:qn};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class QM extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JM extends Ws{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class $M extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jx extends Xn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const kd=new ln,B_=new K,H_=new K;class tb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;B_.setFromMatrixPosition(e.matrixWorld),i.position.copy(B_),H_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(H_),i.updateMatrixWorld(),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===$o||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pc=new K,zc=new Xr,ji=new K;class Xx extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,zc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Pc,zc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new K,G_=new At,V_=new At;class pi extends Xx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,i){return this.getViewBounds(e,G_,V_),i.subVectors(V_,G_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class nb extends tb{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class k_ extends jx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Wx extends Xx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ib extends jx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,Ir=1;class ab extends Xn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(zr,Ir,e,i);l.layers=this.layers,this.add(l);const c=new pi(zr,Ir,e,i);c.layers=this.layers,this.add(c);const d=new pi(zr,Ir,e,i);d.layers=this.layers,this.add(d);const p=new pi(zr,Ir,e,i);p.layers=this.layers,this.add(p);const m=new pi(zr,Ir,e,i);m.layers=this.layers,this.add(m);const h=new pi(zr,Ir,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===$o)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,S]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class sb extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pp=class pp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};pp.prototype.isMatrix2=!0;let j_=pp;class X_ extends jM{constructor(e=10,i=10,s=4473924,l=8947848){s=new Nt(s),l=new Nt(l);const c=i/2,d=e/i,p=e/2,m=[],h=[];for(let g=0,M=0,T=-p;g<=i;g++,T+=d){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const C=g===c?s:l;C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3}const S=new An;S.setAttribute("position",new Ft(m,3)),S.setAttribute("color",new Ft(h,3));const v=new Bx({vertexColors:!0,toneMapped:!1});super(S,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function W_(o,e,i,s){const l=rb(s);switch(i){case Nx:return o*e;case Ux:return o*e/l.components*l.byteLength;case Yh:return o*e/l.components*l.byteLength;case ks:return o*e*2/l.components*l.byteLength;case Zh:return o*e*2/l.components*l.byteLength;case Dx:return o*e*3/l.components*l.byteLength;case Fi:return o*e*4/l.components*l.byteLength;case Kh:return o*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(o,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(o,8)*Math.max(e,8)/2;case fh:case dh:case ph:case mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hh:case Xc:case gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Uh:case Lh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Oh:case Ph:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wc:case zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rb(o){switch(o){case mi:case Ax:return{byteLength:1,components:1};case Qo:case Rx:case Aa:return{byteLength:2,components:1};case Wh:case qh:return{byteLength:2,components:4};case Ji:case Xh:case Yi:return{byteLength:4,components:1};case wx:case Cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ob(o){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,v=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,S),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const S=m.array,v=m.updateRanges;if(o.bindBuffer(h,p),v.length===0)o.bufferSubData(h,0,S);else{v.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<v.length;M++){const T=v[g],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,v[g]=C)}v.length=g+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];o.bufferSubData(h,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,f1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:db,alphatest_pars_fragment:hb,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:xb,beginnormal_vertex:vb,bsdfs:Sb,iridescence_fragment:yb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:wb,color_pars_vertex:Cb,color_vertex:Nb,common:Db,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Ob,displacementmap_vertex:Pb,emissivemap_fragment:zb,emissivemap_pars_fragment:Ib,colorspace_fragment:Fb,colorspace_pars_fragment:Bb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:e1,envmap_vertex:jb,fog_vertex:Xb,fog_pars_vertex:Wb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:t1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:a1,lights_physical_fragment:s1,lights_physical_pars_fragment:r1,lights_fragment_begin:o1,lights_fragment_maps:l1,lights_fragment_end:c1,lightprobes_pars_fragment:u1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:_1,map_particle_pars_fragment:x1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:S1,morphinstance_vertex:y1,morphcolor_vertex:M1,morphnormal_vertex:b1,morphtarget_pars_vertex:E1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:R1,normal_pars_fragment:w1,normal_pars_vertex:C1,normal_vertex:N1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:P1,opaque_fragment:z1,packing:I1,premultiplied_alpha_fragment:F1,project_vertex:B1,dithering_fragment:H1,dithering_pars_fragment:G1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:j1,shadowmap_pars_vertex:X1,shadowmap_vertex:W1,shadowmask_pars_fragment:q1,skinbase_vertex:Y1,skinning_pars_vertex:Z1,skinning_vertex:K1,skinnormal_vertex:Q1,specularmap_fragment:J1,specularmap_pars_fragment:$1,tonemapping_fragment:eE,tonemapping_pars_fragment:tE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:aE,uv_pars_vertex:sE,uv_vertex:rE,worldpos_vertex:oE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:fE,cube_vert:dE,cube_frag:hE,depth_vert:pE,depth_frag:mE,distance_vert:gE,distance_frag:_E,equirect_vert:xE,equirect_frag:vE,linedashed_vert:SE,linedashed_frag:yE,meshbasic_vert:ME,meshbasic_frag:bE,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:AE,meshmatcap_frag:RE,meshnormal_vert:wE,meshnormal_frag:CE,meshphong_vert:NE,meshphong_frag:DE,meshphysical_vert:UE,meshphysical_frag:LE,meshtoon_vert:OE,meshtoon_frag:PE,points_vert:zE,points_frag:IE,shadow_vert:FE,shadow_frag:BE,sprite_vert:HE,sprite_frag:GE},ke={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Wi={basic:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:qn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:qn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Nt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:qn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:qn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:qn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:qn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:qn([ke.common,ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:qn([ke.lights,ke.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Wi.physical={uniforms:qn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Ic={r:0,b:0,g:0},VE=new ln,Yx=new dt;Yx.set(-1,0,0,0,1,0,0,0,1);function kE(o,e,i,s,l,c){const d=new Nt(0);let p=l===!0?0:1,m,h,S=null,v=0,g=null;function M(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){const D=A.backgroundBlurriness>0;R=e.get(R,D)}return R}function T(A){let R=!1;const D=M(A);D===null?y(d,p):D&&D.isColor&&(y(D,1),R=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(A,R){const D=M(R);D&&(D.isCubeTexture||D.mapping===$c)?(h===void 0&&(h=new In(new Wr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:jr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(R.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Yx),h.material.toneMapped=wt.getTransfer(D.colorSpace)!==Xt,(S!==D||v!==D.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,S=D,v=D.version,g=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new In(new tu(2,2),new $i({name:"BackgroundMaterial",uniforms:jr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=wt.getTransfer(D.colorSpace)!==Xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||v!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,v=D.version,g=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function y(A,R){A.getRGB(Ic,kx(o)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,R,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,R=1){d.set(A),p=R,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,y(d,p)},render:T,addToRenderList:C,dispose:x}}function jE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,q,le,te,W){let I=!1;const H=v(G,te,le,q);c!==H&&(c=H,h(c.object)),I=M(G,te,le,W),I&&T(G,te,le,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,D(G,q,le,te),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return o.createVertexArray()}function h(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function v(G,q,le,te){const W=te.wireframe===!0;let I=s[q.id];I===void 0&&(I={},s[q.id]=I);const H=G.isInstancedMesh===!0?G.id:0;let oe=I[H];oe===void 0&&(oe={},I[H]=oe);let _e=oe[le.id];_e===void 0&&(_e={},oe[le.id]=_e);let Me=_e[W];return Me===void 0&&(Me=g(m()),_e[W]=Me),Me}function g(G){const q=[],le=[],te=[];for(let W=0;W<i;W++)q[W]=0,le[W]=0,te[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:te,object:G,attributes:{},index:null}}function M(G,q,le,te){const W=c.attributes,I=q.attributes;let H=0;const oe=le.getAttributes();for(const _e in oe)if(oe[_e].location>=0){const B=W[_e];let J=I[_e];if(J===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),B===void 0||B.attribute!==J||J&&B.data!==J.data)return!0;H++}return c.attributesNum!==H||c.index!==te}function T(G,q,le,te){const W={},I=q.attributes;let H=0;const oe=le.getAttributes();for(const _e in oe)if(oe[_e].location>=0){let B=I[_e];B===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const J={};J.attribute=B,B&&B.data&&(J.data=B.data),W[_e]=J,H++}c.attributes=W,c.attributesNum=H,c.index=te}function C(){const G=c.newAttributes;for(let q=0,le=G.length;q<le;q++)G[q]=0}function y(G){x(G,0)}function x(G,q){const le=c.newAttributes,te=c.enabledAttributes,W=c.attributeDivisors;le[G]=1,te[G]===0&&(o.enableVertexAttribArray(G),te[G]=1),W[G]!==q&&(o.vertexAttribDivisor(G,q),W[G]=q)}function A(){const G=c.newAttributes,q=c.enabledAttributes;for(let le=0,te=q.length;le<te;le++)q[le]!==G[le]&&(o.disableVertexAttribArray(le),q[le]=0)}function R(G,q,le,te,W,I,H){H===!0?o.vertexAttribIPointer(G,q,le,W,I):o.vertexAttribPointer(G,q,le,te,W,I)}function D(G,q,le,te){C();const W=te.attributes,I=le.getAttributes(),H=q.defaultAttributeValues;for(const oe in I){const _e=I[oe];if(_e.location>=0){let Me=W[oe];if(Me===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(Me=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(Me=G.instanceColor)),Me!==void 0){const B=Me.normalized,J=Me.itemSize,xe=e.get(Me);if(xe===void 0)continue;const Ce=xe.buffer,Ne=xe.type,re=xe.bytesPerElement,be=Ne===o.INT||Ne===o.UNSIGNED_INT||Me.gpuType===Xh;if(Me.isInterleavedBufferAttribute){const Ae=Me.data,Ge=Ae.stride,tt=Me.offset;if(Ae.isInstancedInterleavedBuffer){for(let Je=0;Je<_e.locationSize;Je++)x(_e.location+Je,Ae.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Je=0;Je<_e.locationSize;Je++)y(_e.location+Je);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let Je=0;Je<_e.locationSize;Je++)R(_e.location+Je,J/_e.locationSize,Ne,B,Ge*re,(tt+J/_e.locationSize*Je)*re,be)}else{if(Me.isInstancedBufferAttribute){for(let Ae=0;Ae<_e.locationSize;Ae++)x(_e.location+Ae,Me.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ae=0;Ae<_e.locationSize;Ae++)y(_e.location+Ae);o.bindBuffer(o.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<_e.locationSize;Ae++)R(_e.location+Ae,J/_e.locationSize,Ne,B,J*re,J/_e.locationSize*Ae*re,be)}}else if(H!==void 0){const B=H[oe];if(B!==void 0)switch(B.length){case 2:o.vertexAttrib2fv(_e.location,B);break;case 3:o.vertexAttrib3fv(_e.location,B);break;case 4:o.vertexAttrib4fv(_e.location,B);break;default:o.vertexAttrib1fv(_e.location,B)}}}}A()}function F(){P();for(const G in s){const q=s[G];for(const le in q){const te=q[le];for(const W in te){const I=te[W];for(const H in I)S(I[H].object),delete I[H];delete te[W]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const le in q){const te=q[le];for(const W in te){const I=te[W];for(const H in I)S(I[H].object),delete I[H];delete te[W]}}delete s[G.id]}function z(G){for(const q in s){const le=s[q];for(const te in le){const W=le[te];if(W[G.id]===void 0)continue;const I=W[G.id];for(const H in I)S(I[H].object),delete I[H];delete W[G.id]}}}function b(G){for(const q in s){const le=s[q],te=G.isInstancedMesh===!0?G.id:0,W=le[te];if(W!==void 0){for(const I in W){const H=W[I];for(const oe in H)S(H[oe].object),delete H[oe];delete W[I]}delete le[te],Object.keys(le).length===0&&delete s[q]}}}function P(){k(),d=!0,c!==l&&(c=l,h(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:P,resetDefaultState:k,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:A}}function XE(o,e,i){let s;function l(m){s=m}function c(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(o.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let g=0;for(let M=0;M<S;M++)g+=h[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function WE(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Fi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const b=z===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==mi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Yi&&!b)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(at("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:D,maxSamples:F,samples:L}}function qE(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Ps,p=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=S(v,g,0)},this.setState=function(v,g,M){const T=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||T===null||T.length===0||c&&!y)c?S(null):h();else{const A=c?0:s,R=A*4;let D=x.clippingState||null;m.value=D,D=S(T,g,R,M);for(let F=0;F!==R;++F)D[F]=i[F];x.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,g,M,T){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const x=M+C*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,D=M;R!==C;++R,D+=4)d.copy(v[R]).applyMatrix4(A,p),d.normal.toArray(y,D),y[D+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const us=4,q_=[.125,.215,.35,.446,.526,.582],Fs=20,YE=256,qo=new Wx,Y_=new Nt;let jd=null,Xd=0,Wd=0,qd=!1;const ZE=new K;class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=ZE}=c;jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,Wd),this._renderer.xr.enabled=qd,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vs||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Aa,format:Fi,colorSpace:qc,depthBuffer:!1},l=K_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KE(c)),this._blurMaterial=JE(c,e,i),this._ggxMaterial=QE(c,e,i)}return l}_compileMaterial(e){const i=new In(new An,e);this._renderer.compile(i,qo)}_sceneToCubeUV(e,i,s,l,c){const m=new pi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(Y_),v.toneMapping=Ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new Wr,new Is({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,x=!0):(y.color.copy(Y_),x=!0);for(let R=0;R<6;R++){const D=R%3;D===0?(m.up.set(0,h[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[R],c.y,c.z)):D===1?(m.up.set(0,0,h[R]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[R],c.z)):(m.up.set(0,h[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[R]));const F=this._cubeSize;Fr(l,D*F,R>2?F:0,F,F),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=A}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Vs||e.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,qo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-S*S),g=0+h*1.25,M=v*g,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-us?s-T+us:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Fr(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(p,qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Fr(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(p,qo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const S=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Fs-1),C=c/T,y=isFinite(c)?1+Math.floor(S*C):Fs;y>Fs&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fs}`);const x=[];let A=0;for(let z=0;z<Fs;++z){const b=z/C,P=Math.exp(-b*b/2);x.push(P),z===0?A+=P:z<y&&(A+=2*P)}for(let z=0;z<x.length;z++)x[z]=x[z]/A;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:R}=this;g.dTheta.value=T,g.mipInt.value=R-s;const D=this._sizeLods[l],F=3*D*(l>R-us?l-R+us:0),L=4*(this._cubeSize-D);Fr(i,F,L,3*D,2*D),m.setRenderTarget(i),m.render(v,qo)}}function KE(o){const e=[],i=[],s=[];let l=o;const c=o-us+1+q_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-us?m=q_[d-o+us-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,v=1+h,g=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,T=6,C=3,y=2,x=1,A=new Float32Array(C*T*M),R=new Float32Array(y*T*M),D=new Float32Array(x*T*M);for(let L=0;L<M;L++){const z=L%3*2/3-1,b=L>2?0:-1,P=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];A.set(P,C*T*L),R.set(g,y*T*L);const k=[L,L,L,L,L,L];D.set(k,x*T*L)}const F=new An;F.setAttribute("position",new wi(A,C)),F.setAttribute("uv",new wi(R,y)),F.setAttribute("faceIndex",new wi(D,x)),s.push(new In(F,null)),l>us&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function K_(o,e,i){const s=new Qi(o,e,i);return s.texture.mapping=$c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function QE(o,e,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function JE(o,e,i){const s=new Float32Array(Fs),l=new K(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Q_(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function J_(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zx extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Gx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wr(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Ea});c.uniforms.tEquirect.value=i;const d=new In(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=jn),new ab(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function $E(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===md||M===gd)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Zx(T.height);return C.fromEquirectangularTexture(o,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,T=M===md||M===gd,C=M===Vs||M===Vr;if(T||C){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new Z_(o)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const A=g.image;return T&&A&&A.height>0||C&&A&&m(A)?(s===null&&(s=new Z_(o)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function p(g,M){return M===md?g.mapping=Vs:M===gd&&(g.mapping=Vr),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function h(g){const M=g.target;M.removeEventListener("dispose",h);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function S(g){const M=g.target;M.removeEventListener("dispose",S);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function eT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fh("WebGLRenderer: "+s+" extension not supported."),l}}}function tT(o,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],o.ARRAY_BUFFER)}function h(v){const g=[],M=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const A=M.array;C=M.version;for(let R=0,D=A.length;R<D;R+=3){const F=A[R+0],L=A[R+1],z=A[R+2];g.push(F,L,L,z,z,F)}}else{const A=T.array;C=T.version;for(let R=0,D=A.length/3-1;R<D;R+=3){const F=R+0,L=R+1,z=R+2;g.push(F,L,L,z,z,F)}}const y=new(T.count>=65535?Fx:Ix)(g,1);y.version=C;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function S(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:S}}function nT(o,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*d),i.update(g,s,1)}function h(v,g,M){M!==0&&(o.drawElementsInstanced(s,g,c,v*d,M),i.update(g,s,M))}function S(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function iT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function aT(o,e,i){const s=new WeakMap,l=new fn;function c(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let k=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",k)};var M=k;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],R=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let F=p.attributes.position.count*D,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*L*4*v),b=new Ox(z,F,L,v);b.type=Yi,b.needsUpdate=!0;const P=D*4;for(let G=0;G<v;G++){const q=x[G],le=A[G],te=R[G],W=F*L*4*G;for(let I=0;I<q.count;I++){const H=I*P;T===!0&&(l.fromBufferAttribute(q,I),z[W+H+0]=l.x,z[W+H+1]=l.y,z[W+H+2]=l.z,z[W+H+3]=0),C===!0&&(l.fromBufferAttribute(le,I),z[W+H+4]=l.x,z[W+H+5]=l.y,z[W+H+6]=l.z,z[W+H+7]=0),y===!0&&(l.fromBufferAttribute(te,I),z[W+H+8]=l.x,z[W+H+9]=l.y,z[W+H+10]=l.z,z[W+H+11]=te.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new At(F,L)},s.set(p,g),p.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function sT(o,e,i,s,l){let c=new WeakMap;function d(h){const S=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==S&&(e.update(g),c.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==S&&(M.update(),c.set(M,S))}return g}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const rT={[xx]:"LINEAR_TONE_MAPPING",[vx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[yx]:"ACES_FILMIC_TONE_MAPPING",[bx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[Mx]:"CUSTOM_TONE_MAPPING"};function oT(o,e,i,s,l){const c=new Qi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new kr(e,i):void 0}),d=new Qi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new An;p.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const m=new QM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new In(p,m),S=new Wx(-1,1,1,-1,0,1);let v=null,g=null,M=!1,T,C=null,y=[],x=!1;this.setSize=function(A,R){c.setSize(A,R),d.setSize(A,R);for(let D=0;D<y.length;D++){const F=y[D];F.setSize&&F.setSize(A,R)}},this.setEffects=function(A){y=A,x=y.length>0&&y[0].isRenderPass===!0;const R=c.width,D=c.height;for(let F=0;F<y.length;F++){const L=y[F];L.setSize&&L.setSize(R,D)}},this.begin=function(A,R){if(M||A.toneMapping===Ki&&y.length===0)return!1;if(C=R,R!==null){const D=R.width,F=R.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return x===!1&&A.setRenderTarget(c),T=A.toneMapping,A.toneMapping=Ki,!0},this.hasRenderPass=function(){return x},this.end=function(A,R){A.toneMapping=T,M=!0;let D=c,F=d;for(let L=0;L<y.length;L++){const z=y[L];if(z.enabled!==!1&&(z.render(A,F,D,R),z.needsSwap!==!1)){const b=D;D=F,F=b}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,m.defines={},wt.getTransfer(v)===Xt&&(m.defines.SRGB_TRANSFER="");const L=rT[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(C),A.render(h,S),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Kx=new Yn,Gh=new kr(1,1),Qx=new Ox,Jx=new TM,$x=new Gx,$_=[],ex=[],tx=new Float32Array(16),nx=new Float32Array(9),ix=new Float32Array(4);function qr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=$_[l];if(c===void 0&&(c=new Float32Array(l),$_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function iu(o,e){let i=ex[e];i===void 0&&(i=new Int32Array(e),ex[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function lT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function fT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function dT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;ix.set(s),o.uniformMatrix2fv(this.addr,!1,ix),Tn(i,s)}}function hT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;nx.set(s),o.uniformMatrix3fv(this.addr,!1,nx),Tn(i,s)}}function pT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;tx.set(s),o.uniformMatrix4fv(this.addr,!1,tx),Tn(i,s)}}function mT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function _T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function vT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function bT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?Jh:Qh,c=Gh):c=Kx,i.setTexture2D(e||c,l)}function ET(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Jx,l)}function TT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||$x,l)}function AT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Qx,l)}function RT(o){switch(o){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return xT;case 5125:return vT;case 36294:return ST;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function wT(o,e){o.uniform1fv(this.addr,e)}function CT(o,e){const i=qr(e,this.size,2);o.uniform2fv(this.addr,i)}function NT(o,e){const i=qr(e,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,e){const i=qr(e,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,e){const i=qr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function LT(o,e){const i=qr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function OT(o,e){const i=qr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function PT(o,e){o.uniform1iv(this.addr,e)}function zT(o,e){o.uniform2iv(this.addr,e)}function IT(o,e){o.uniform3iv(this.addr,e)}function FT(o,e){o.uniform4iv(this.addr,e)}function BT(o,e){o.uniform1uiv(this.addr,e)}function HT(o,e){o.uniform2uiv(this.addr,e)}function GT(o,e){o.uniform3uiv(this.addr,e)}function VT(o,e){o.uniform4uiv(this.addr,e)}function kT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);En(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Gh:d=Kx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function jT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);En(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Jx,c[d])}function XT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);En(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||$x,c[d])}function WT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);En(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Qx,c[d])}function qT(o){switch(o){case 5126:return wT;case 35664:return CT;case 35665:return NT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return BT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=RT(i.type)}}class ZT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function ax(o,e){o.seq.push(e),o.map[e.id]=e}function QT(o,e,i){const s=o.name,l=s.length;for(Yd.lastIndex=0;;){const c=Yd.exec(s),d=Yd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){ax(i,h===void 0?new YT(p,o,e):new ZT(p,o,e));break}else{let v=i.map[p];v===void 0&&(v=new KT(p),ax(i,v)),i=v}}}class jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);QT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function sx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const JT=37297;let $T=0;function eA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const rx=new dt;function tA(o){wt._getMatrix(rx,wt.workingColorSpace,o);const e=`mat3( ${rx.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(o)){case Yc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function ox(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+eA(o.getShaderSource(e),p)}else return c}function nA(o,e){const i=tA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const iA={[xx]:"Linear",[vx]:"Reinhard",[Sx]:"Cineon",[yx]:"ACESFilmic",[bx]:"AgX",[Ex]:"Neutral",[Mx]:"Custom"};function aA(o,e){const i=iA[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new K;function sA(){wt.getLuminanceCoefficients(Fc);const o=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function oA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function lA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Ko(o){return o!==""}function lx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(o){return o.replace(cA,fA)}const uA=new Map;function fA(o,e){let i=_t[e];if(i===void 0){const s=uA.get(e);if(s!==void 0)i=_t[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Vh(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ux(o){return o.replace(dA,hA)}function hA(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function fx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pA={[Bc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function mA(o){return pA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gA={[Vs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function _A(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":gA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[Vr]:"ENVMAP_MODE_REFRACTION"};function vA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SA={[_x]:"ENVMAP_BLENDING_MULTIPLY",[aM]:"ENVMAP_BLENDING_MIX",[sM]:"ENVMAP_BLENDING_ADD"};function yA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":SA[o.combine]||"ENVMAP_BLENDING_NONE"}function MA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bA(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=mA(i),h=_A(i),S=vA(i),v=yA(i),g=MA(i),M=rA(i),T=oA(c),C=l.createProgram();let y,x,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Ko).join(`
`),x.length>0&&(x+=`
`)):(y=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),x=[fx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?_t.tonemapping_pars_fragment:"",i.toneMapping!==Ki?aA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,nA("linearToOutputTexel",i.outputColorSpace),sA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ko).join(`
`)),d=Vh(d),d=lx(d,i),d=cx(d,i),p=Vh(p),p=lx(p,i),p=cx(p,i),d=ux(d),p=ux(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=A+y+d,D=A+x+p,F=sx(l,l.VERTEX_SHADER,R),L=sx(l,l.FRAGMENT_SHADER,D);l.attachShader(C,F),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(G){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(F)||"",te=l.getShaderInfoLog(L)||"",W=q.trim(),I=le.trim(),H=te.trim();let oe=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,L);else{const Me=ox(l,F,"vertex"),B=ox(l,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+Me+`
`+B)}else W!==""?at("WebGLProgram: Program Info Log:",W):(I===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:oe,programLog:W,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(L),b=new jc(l,C),P=lA(l,C)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(C,JT)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=L,this}let EA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new AA(e),i.set(e,s)),s}}class AA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function RA(o){return o===ks||o===Xc||o===Wc}function wA(o,e,i,s,l,c){const d=new Px,p=new TA,m=new Set,h=[],S=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,P,k,G,q,le){const te=G.fog,W=q.geometry,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,oe=e.get(b.envMap||I,H),_e=oe&&oe.mapping===$c?oe.image.height:null,Me=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&at("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const B=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=B!==void 0?B.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let Ce,Ne,re,be;if(Me){const ee=Wi[Me];Ce=ee.vertexShader,Ne=ee.fragmentShader}else Ce=b.vertexShader,Ne=b.fragmentShader,p.update(b),re=p.getVertexShaderID(b),be=p.getFragmentShaderID(b);const Ae=o.getRenderTarget(),Ge=o.state.buffers.depth.getReversed(),tt=q.isInstancedMesh===!0,Je=q.isBatchedMesh===!0,Dt=!!b.map,ct=!!b.matcap,xt=!!oe,zt=!!b.aoMap,ot=!!b.lightMap,an=!!b.bumpMap,Wt=!!b.normalMap,mn=!!b.displacementMap,Y=!!b.emissiveMap,en=!!b.metalnessMap,mt=!!b.roughnessMap,bt=b.anisotropy>0,Re=b.clearcoat>0,Qt=b.dispersion>0,O=b.iridescence>0,E=b.sheen>0,$=b.transmission>0,ve=bt&&!!b.anisotropyMap,Te=Re&&!!b.clearcoatMap,Le=Re&&!!b.clearcoatNormalMap,Ie=Re&&!!b.clearcoatRoughnessMap,de=O&&!!b.iridescenceMap,he=O&&!!b.iridescenceThicknessMap,Oe=E&&!!b.sheenColorMap,Fe=E&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,De=!!b.specularColorMap,it=!!b.specularIntensityMap,st=$&&!!b.transmissionMap,vt=$&&!!b.thicknessMap,j=!!b.gradientMap,we=!!b.alphaMap,pe=b.alphaTest>0,He=!!b.alphaHash,ze=!!b.extensions;let Ee=Ki;b.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ee=o.toneMapping);const We={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Ne,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Je,batchingColor:Je&&q._colorsTexture!==null,instancing:tt,instancingColor:tt&&q.instanceColor!==null,instancingMorph:tt&&q.morphTexture!==null,outputColorSpace:Ae===null?o.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:ct,envMap:xt,envMapMode:xt&&oe.mapping,envMapCubeUVHeight:_e,aoMap:zt,lightMap:ot,bumpMap:an,normalMap:Wt,displacementMap:mn,emissiveMap:Y,normalMapObjectSpace:Wt&&b.normalMapType===lM,normalMapTangentSpace:Wt&&b.normalMapType===Ih,packedNormalMap:Wt&&b.normalMapType===Ih&&RA(b.normalMap.format),metalnessMap:en,roughnessMap:mt,anisotropy:bt,anisotropyMap:ve,clearcoat:Re,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ie,dispersion:Qt,iridescence:O,iridescenceMap:de,iridescenceThicknessMap:he,sheen:E,sheenColorMap:Oe,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:De,specularIntensityMap:it,transmission:$,transmissionMap:st,thicknessMap:vt,gradientMap:j,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:we,alphaTest:pe,alphaHash:He,combine:b.combine,mapUv:Dt&&T(b.map.channel),aoMapUv:zt&&T(b.aoMap.channel),lightMapUv:ot&&T(b.lightMap.channel),bumpMapUv:an&&T(b.bumpMap.channel),normalMapUv:Wt&&T(b.normalMap.channel),displacementMapUv:mn&&T(b.displacementMap.channel),emissiveMapUv:Y&&T(b.emissiveMap.channel),metalnessMapUv:en&&T(b.metalnessMap.channel),roughnessMapUv:mt&&T(b.roughnessMap.channel),anisotropyMapUv:ve&&T(b.anisotropyMap.channel),clearcoatMapUv:Te&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(b.sheenRoughnessMap.channel),specularMapUv:Pe&&T(b.specularMap.channel),specularColorMapUv:De&&T(b.specularColorMap.channel),specularIntensityMapUv:it&&T(b.specularIntensityMap.channel),transmissionMapUv:st&&T(b.transmissionMap.channel),thicknessMapUv:vt&&T(b.thicknessMap.channel),alphaMapUv:we&&T(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Wt||bt),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(Dt||we),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&Wt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ge,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:Y&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qi,flipSided:b.side===ni,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function y(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)P.push(k),P.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(x(P,b),A(P,b),P.push(o.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function x(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function A(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),b.push(d.mask)}function R(b){const P=M[b.type];let k;if(P){const G=Wi[P];k=YM.clone(G.uniforms)}else k=b.uniforms;return k}function D(b,P){let k=S.get(P);return k!==void 0?++k.usedTimes:(k=new bA(o,P,b,l),h.push(k),S.set(P,k)),k}function F(b){if(--b.usedTimes===0){const P=h.indexOf(b);h[P]=h[h.length-1],h.pop(),S.delete(b.cacheKey),b.destroy()}}function L(b){p.remove(b)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:R,acquireProgram:D,releaseProgram:F,releaseShaderCache:L,programs:h,dispose:z}}function CA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function NA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function dx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function hx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,y,x){let A=o[e];return A===void 0?(A={id:g.id,object:g,geometry:M,material:T,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:x},o[e]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=T,A.materialVariant=d(g),A.groupOrder=C,A.renderOrder=g.renderOrder,A.z=y,A.group=x),e++,A}function m(g,M,T,C,y,x){const A=p(g,M,T,C,y,x);T.transmission>0?s.push(A):T.transparent===!0?l.push(A):i.push(A)}function h(g,M,T,C,y,x){const A=p(g,M,T,C,y,x);T.transmission>0?s.unshift(A):T.transparent===!0?l.unshift(A):i.unshift(A)}function S(g,M){i.length>1&&i.sort(g||NA),s.length>1&&s.sort(M||dx),l.length>1&&l.sort(M||dx)}function v(){for(let g=e,M=o.length;g<M;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:S}}function DA(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new hx,o.set(s,[d])):l>=c.length?(d=new hx,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function UA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new K,color:new Nt};break;case"SpotLight":i={position:new K,direction:new K,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new K,halfWidth:new K,halfHeight:new K};break}return o[e.id]=i,i}}}function LA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let OA=0;function PA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function zA(o){const e=new UA,i=LA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new K);const l=new K,c=new ln,d=new ln;function p(h){let S=0,v=0,g=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let M=0,T=0,C=0,y=0,x=0,A=0,R=0,D=0,F=0,L=0,z=0;h.sort(PA);for(let P=0,k=h.length;P<k;P++){const G=h[P],q=G.color,le=G.intensity,te=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ks?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=q.r*le,v+=q.g*le,g+=q.b*le;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],le);z++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,oe=i.get(G);oe.shadowIntensity=H.intensity,oe.shadowBias=H.bias,oe.shadowNormalBias=H.normalBias,oe.shadowRadius=H.radius,oe.shadowMapSize=H.mapSize,s.directionalShadow[M]=oe,s.directionalShadowMap[M]=W,s.directionalShadowMatrix[M]=G.shadow.matrix,A++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(q).multiplyScalar(le),I.distance=te,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[C]=I;const H=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[C]=H.matrix,G.castShadow){const oe=i.get(G);oe.shadowIntensity=H.intensity,oe.shadowBias=H.bias,oe.shadowNormalBias=H.normalBias,oe.shadowRadius=H.radius,oe.shadowMapSize=H.mapSize,s.spotShadow[C]=oe,s.spotShadowMap[C]=W,D++}C++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(q).multiplyScalar(le),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=I,y++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,oe=i.get(G);oe.shadowIntensity=H.intensity,oe.shadowBias=H.bias,oe.shadowNormalBias=H.normalBias,oe.shadowRadius=H.radius,oe.shadowMapSize=H.mapSize,oe.shadowCameraNear=H.camera.near,oe.shadowCameraFar=H.camera.far,s.pointShadow[T]=oe,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=G.shadow.matrix,R++}s.point[T]=I,T++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(le),I.groundColor.copy(G.groundColor).multiplyScalar(le),s.hemi[x]=I,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ke.LTC_FLOAT_1,s.rectAreaLTC2=ke.LTC_FLOAT_2):(s.rectAreaLTC1=ke.LTC_HALF_1,s.rectAreaLTC2=ke.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==A||b.numPointShadows!==R||b.numSpotShadows!==D||b.numSpotMaps!==F||b.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=D+F-L,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=A,b.numPointShadows=R,b.numSpotShadows=D,b.numSpotMaps=F,b.numLightProbes=z,s.version=OA++)}function m(h,S){let v=0,g=0,M=0,T=0,C=0;const y=S.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){const R=h[x];if(R.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(R.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(y),d.identity(),c.copy(R.matrixWorld),c.premultiply(y),d.extractRotation(c),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(R.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(y),g++}else if(R.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function px(o){const e=new zA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function S(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function IA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new px(o),e.set(l,[p])):c>=d.length?(p=new px(o),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,HA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],GA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],mx=new ln,Yo=new K,Zd=new K;function VA(o,e,i){let s=new np;const l=new At,c=new At,d=new fn,p=new $M,m=new eb,h={},S=i.maxTextureSize,v={[fs]:ni,[ni]:fs,[qi]:qi},g=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:FA,fragmentShader:BA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new An;T.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new In(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(L,z,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===By&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const P=o.getRenderTarget(),k=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),q=o.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=x!==this.type;le&&z.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(W=>W.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,W=L.length;te<W;te++){const I=L[te],H=I.shadow;if(H===void 0){at("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const oe=H.getFrameExtents();l.multiply(oe),c.copy(H.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/oe.x),l.x=c.x*oe.x,H.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/oe.y),l.y=c.y*oe.y,H.mapSize.y=c.y));const _e=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||le===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Zo){if(I.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(l.x,l.y,{format:ks,type:Aa,minFilter:jn,magFilter:jn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new kr(l.x,l.y,Yi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn}else I.isPointLight?(H.map=new Zx(l.x),H.map.depthTexture=new WM(l.x,Ji)):(H.map=new Qi(l.x,l.y),H.map.depthTexture=new kr(l.x,l.y,Ji)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Ra,this.type===Bc?(H.map.depthTexture.compareFunction=_e?Jh:Qh,H.map.depthTexture.minFilter=jn,H.map.depthTexture.magFilter=jn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn);H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<Me;B++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,B),o.clear();else{B===0&&(o.setRenderTarget(H.map),o.clear());const J=H.getViewport(B);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),q.viewport(d)}if(I.isPointLight){const J=H.camera,xe=H.matrix,Ce=I.distance||J.far;Ce!==J.far&&(J.far=Ce,J.updateProjectionMatrix()),Yo.setFromMatrixPosition(I.matrixWorld),J.position.copy(Yo),Zd.copy(J.position),Zd.add(HA[B]),J.up.copy(GA[B]),J.lookAt(Zd),J.updateMatrixWorld(),xe.makeTranslation(-Yo.x,-Yo.y,-Yo.z),mx.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(mx,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),D(z,b,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Zo&&A(H,b),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(P,k,G)};function A(L,z){const b=e.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qi(l.x,l.y,{format:ks,type:Aa})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(z,null,b,g,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(z,null,b,M,C,null)}function R(L,z,b,P){let k=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)k=G;else if(k=b.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=k.uuid,le=z.uuid;let te=h[q];te===void 0&&(te={},h[q]=te);let W=te[le];W===void 0&&(W=k.clone(),te[le]=W,z.addEventListener("dispose",F)),k=W}if(k.visible=z.visible,k.wireframe=z.wireframe,P===Zo?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:v[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,b.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const q=o.properties.get(k);q.light=b}return k}function D(L,z,b,P,k){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===Zo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const le=e.update(L),te=L.material;if(Array.isArray(te)){const W=le.groups;for(let I=0,H=W.length;I<H;I++){const oe=W[I],_e=te[oe.materialIndex];if(_e&&_e.visible){const Me=R(L,_e,P,k);L.onBeforeShadow(o,L,z,b,le,Me,oe),o.renderBufferDirect(b,null,le,Me,L,oe),L.onAfterShadow(o,L,z,b,le,Me,oe)}}}else if(te.visible){const W=R(L,te,P,k);L.onBeforeShadow(o,L,z,b,le,W,null),o.renderBufferDirect(b,null,le,W,L,null),L.onAfterShadow(o,L,z,b,le,W,null)}}const q=L.children;for(let le=0,te=q.length;le<te;le++)D(q[le],z,b,P,k)}function F(L){L.target.removeEventListener("dispose",F);for(const b in h){const P=h[b],k=L.target.uuid;k in P&&(P[k].dispose(),delete P[k])}}}function kA(o,e){function i(){let j=!1;const we=new fn;let pe=null;const He=new fn(0,0,0,0);return{setMask:function(ze){pe!==ze&&!j&&(o.colorMask(ze,ze,ze,ze),pe=ze)},setLocked:function(ze){j=ze},setClear:function(ze,Ee,We,ee,Ue){Ue===!0&&(ze*=ee,Ee*=ee,We*=ee),we.set(ze,Ee,We,ee),He.equals(we)===!1&&(o.clearColor(ze,Ee,We,ee),He.copy(we))},reset:function(){j=!1,pe=null,He.set(-1,0,0,0)}}}function s(){let j=!1,we=!1,pe=null,He=null,ze=null;return{setReversed:function(Ee){if(we!==Ee){const We=e.get("EXT_clip_control");Ee?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),we=Ee;const ee=ze;ze=null,this.setClear(ee)}},getReversed:function(){return we},setTest:function(Ee){Ee?Ae(o.DEPTH_TEST):Ge(o.DEPTH_TEST)},setMask:function(Ee){pe!==Ee&&!j&&(o.depthMask(Ee),pe=Ee)},setFunc:function(Ee){if(we&&(Ee=xM[Ee]),He!==Ee){switch(Ee){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case eh:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case th:o.depthFunc(o.EQUAL);break;case nh:o.depthFunc(o.GEQUAL);break;case ih:o.depthFunc(o.GREATER);break;case ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}He=Ee}},setLocked:function(Ee){j=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,we&&(Ee=1-Ee),o.clearDepth(Ee))},reset:function(){j=!1,pe=null,He=null,ze=null,we=!1}}}function l(){let j=!1,we=null,pe=null,He=null,ze=null,Ee=null,We=null,ee=null,Ue=null;return{setTest:function(me){j||(me?Ae(o.STENCIL_TEST):Ge(o.STENCIL_TEST))},setMask:function(me){we!==me&&!j&&(o.stencilMask(me),we=me)},setFunc:function(me,ut,qt){(pe!==me||He!==ut||ze!==qt)&&(o.stencilFunc(me,ut,qt),pe=me,He=ut,ze=qt)},setOp:function(me,ut,qt){(Ee!==me||We!==ut||ee!==qt)&&(o.stencilOp(me,ut,qt),Ee=me,We=ut,ee=qt)},setLocked:function(me){j=me},setClear:function(me){Ue!==me&&(o.clearStencil(me),Ue=me)},reset:function(){j=!1,we=null,pe=null,He=null,ze=null,Ee=null,We=null,ee=null,Ue=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},v={},g={},M=new WeakMap,T=[],C=null,y=!1,x=null,A=null,R=null,D=null,F=null,L=null,z=null,b=new Nt(0,0,0),P=0,k=!1,G=null,q=null,le=null,te=null,W=null;const I=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,oe=0;const _e=o.getParameter(o.VERSION);_e.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=oe>=1):_e.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=oe>=2);let Me=null,B={};const J=o.getParameter(o.SCISSOR_BOX),xe=o.getParameter(o.VIEWPORT),Ce=new fn().fromArray(J),Ne=new fn().fromArray(xe);function re(j,we,pe,He){const ze=new Uint8Array(4),Ee=o.createTexture();o.bindTexture(j,Ee),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<pe;We++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,He,0,o.RGBA,o.UNSIGNED_BYTE,ze):o.texImage2D(we+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ze);return Ee}const be={};be[o.TEXTURE_2D]=re(o.TEXTURE_2D,o.TEXTURE_2D,1),be[o.TEXTURE_CUBE_MAP]=re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[o.TEXTURE_2D_ARRAY]=re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),be[o.TEXTURE_3D]=re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ae(o.DEPTH_TEST),d.setFunc(Gr),an(!1),Wt(c_),Ae(o.CULL_FACE),zt(Ea);function Ae(j){S[j]!==!0&&(o.enable(j),S[j]=!0)}function Ge(j){S[j]!==!1&&(o.disable(j),S[j]=!1)}function tt(j,we){return g[j]!==we?(o.bindFramebuffer(j,we),g[j]=we,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Je(j,we){let pe=T,He=!1;if(j){pe=M.get(we),pe===void 0&&(pe=[],M.set(we,pe));const ze=j.textures;if(pe.length!==ze.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Ee=0,We=ze.length;Ee<We;Ee++)pe[Ee]=o.COLOR_ATTACHMENT0+Ee;pe.length=ze.length,He=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,He=!0);He&&o.drawBuffers(pe)}function Dt(j){return C!==j?(o.useProgram(j),C=j,!0):!1}const ct={[zs]:o.FUNC_ADD,[Gy]:o.FUNC_SUBTRACT,[Vy]:o.FUNC_REVERSE_SUBTRACT};ct[ky]=o.MIN,ct[jy]=o.MAX;const xt={[Xy]:o.ZERO,[Wy]:o.ONE,[qy]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[$y]:o.SRC_ALPHA_SATURATE,[Qy]:o.DST_COLOR,[Zy]:o.DST_ALPHA,[Yy]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[Jy]:o.ONE_MINUS_DST_COLOR,[Ky]:o.ONE_MINUS_DST_ALPHA,[eM]:o.CONSTANT_COLOR,[tM]:o.ONE_MINUS_CONSTANT_COLOR,[nM]:o.CONSTANT_ALPHA,[iM]:o.ONE_MINUS_CONSTANT_ALPHA};function zt(j,we,pe,He,ze,Ee,We,ee,Ue,me){if(j===Ea){y===!0&&(Ge(o.BLEND),y=!1);return}if(y===!1&&(Ae(o.BLEND),y=!0),j!==Hy){if(j!==x||me!==k){if((A!==zs||F!==zs)&&(o.blendEquation(o.FUNC_ADD),A=zs,F=zs),me)switch(j){case Br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case d_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ut("WebGLState: Invalid blending: ",j);break}else switch(j){case Br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case f_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",j);break}R=null,D=null,L=null,z=null,b.set(0,0,0),P=0,x=j,k=me}return}ze=ze||we,Ee=Ee||pe,We=We||He,(we!==A||ze!==F)&&(o.blendEquationSeparate(ct[we],ct[ze]),A=we,F=ze),(pe!==R||He!==D||Ee!==L||We!==z)&&(o.blendFuncSeparate(xt[pe],xt[He],xt[Ee],xt[We]),R=pe,D=He,L=Ee,z=We),(ee.equals(b)===!1||Ue!==P)&&(o.blendColor(ee.r,ee.g,ee.b,Ue),b.copy(ee),P=Ue),x=j,k=!1}function ot(j,we){j.side===qi?Ge(o.CULL_FACE):Ae(o.CULL_FACE);let pe=j.side===ni;we&&(pe=!pe),an(pe),j.blending===Br&&j.transparent===!1?zt(Ea):zt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),d.setFunc(j.depthFunc),d.setTest(j.depthTest),d.setMask(j.depthWrite),c.setMask(j.colorWrite);const He=j.stencilWrite;p.setTest(He),He&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Y(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Ae(o.SAMPLE_ALPHA_TO_COVERAGE):Ge(o.SAMPLE_ALPHA_TO_COVERAGE)}function an(j){G!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),G=j)}function Wt(j){j!==Iy?(Ae(o.CULL_FACE),j!==q&&(j===c_?o.cullFace(o.BACK):j===Fy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ge(o.CULL_FACE),q=j}function mn(j){j!==le&&(H&&o.lineWidth(j),le=j)}function Y(j,we,pe){j?(Ae(o.POLYGON_OFFSET_FILL),(te!==we||W!==pe)&&(te=we,W=pe,d.getReversed()&&(we=-we),o.polygonOffset(we,pe))):Ge(o.POLYGON_OFFSET_FILL)}function en(j){j?Ae(o.SCISSOR_TEST):Ge(o.SCISSOR_TEST)}function mt(j){j===void 0&&(j=o.TEXTURE0+I-1),Me!==j&&(o.activeTexture(j),Me=j)}function bt(j,we,pe){pe===void 0&&(Me===null?pe=o.TEXTURE0+I-1:pe=Me);let He=B[pe];He===void 0&&(He={type:void 0,texture:void 0},B[pe]=He),(He.type!==j||He.texture!==we)&&(Me!==pe&&(o.activeTexture(pe),Me=pe),o.bindTexture(j,we||be[j]),He.type=j,He.texture=we)}function Re(){const j=B[Me];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Qt(){try{o.compressedTexImage2D(...arguments)}catch(j){Ut("WebGLState:",j)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(j){Ut("WebGLState:",j)}}function E(){try{o.texSubImage2D(...arguments)}catch(j){Ut("WebGLState:",j)}}function $(){try{o.texSubImage3D(...arguments)}catch(j){Ut("WebGLState:",j)}}function ve(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Ut("WebGLState:",j)}}function Te(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Ut("WebGLState:",j)}}function Le(){try{o.texStorage2D(...arguments)}catch(j){Ut("WebGLState:",j)}}function Ie(){try{o.texStorage3D(...arguments)}catch(j){Ut("WebGLState:",j)}}function de(){try{o.texImage2D(...arguments)}catch(j){Ut("WebGLState:",j)}}function he(){try{o.texImage3D(...arguments)}catch(j){Ut("WebGLState:",j)}}function Oe(j){return v[j]!==void 0?v[j]:o.getParameter(j)}function Fe(j,we){v[j]!==we&&(o.pixelStorei(j,we),v[j]=we)}function Pe(j){Ce.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Ce.copy(j))}function De(j){Ne.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),Ne.copy(j))}function it(j,we){let pe=h.get(we);pe===void 0&&(pe=new WeakMap,h.set(we,pe));let He=pe.get(j);He===void 0&&(He=o.getUniformBlockIndex(we,j.name),pe.set(j,He))}function st(j,we){const He=h.get(we).get(j);m.get(we)!==He&&(o.uniformBlockBinding(we,He,j.__bindingPointIndex),m.set(we,He))}function vt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},Me=null,B={},g={},M=new WeakMap,T=[],C=null,y=!1,x=null,A=null,R=null,D=null,F=null,L=null,z=null,b=new Nt(0,0,0),P=0,k=!1,G=null,q=null,le=null,te=null,W=null,Ce.set(0,0,o.canvas.width,o.canvas.height),Ne.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ae,disable:Ge,bindFramebuffer:tt,drawBuffers:Je,useProgram:Dt,setBlending:zt,setMaterial:ot,setFlipSided:an,setCullFace:Wt,setLineWidth:mn,setPolygonOffset:Y,setScissorTest:en,activeTexture:mt,bindTexture:bt,unbindTexture:Re,compressedTexImage2D:Qt,compressedTexImage3D:O,texImage2D:de,texImage3D:he,pixelStorei:Fe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Le,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:ve,compressedTexSubImage3D:Te,scissor:Pe,viewport:De,reset:vt}}function jA(o,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,S=new WeakMap,v=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,E){return T?new OffscreenCanvas(O,E):Zc("canvas")}function y(O,E,$){let ve=1;const Te=Qt(O);if((Te.width>$||Te.height>$)&&(ve=$/Math.max(Te.width,Te.height)),ve<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Le=Math.floor(ve*Te.width),Ie=Math.floor(ve*Te.height);g===void 0&&(g=C(Le,Ie));const de=E?C(Le,Ie):g;return de.width=Le,de.height=Ie,de.getContext("2d").drawImage(O,0,0,Le,Ie),at("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Le+"x"+Ie+")."),de}else return"data"in O&&at("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),O;return O}function x(O){return O.generateMipmaps}function A(O){o.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,E,$,ve,Te,Le=!1){if(O!==null){if(o[O]!==void 0)return o[O];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ie;ve&&(Ie=e.get("EXT_texture_norm16"),Ie||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=E;if(E===o.RED&&($===o.FLOAT&&(de=o.R32F),$===o.HALF_FLOAT&&(de=o.R16F),$===o.UNSIGNED_BYTE&&(de=o.R8),$===o.UNSIGNED_SHORT&&Ie&&(de=Ie.R16_EXT),$===o.SHORT&&Ie&&(de=Ie.R16_SNORM_EXT)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.R8UI),$===o.UNSIGNED_SHORT&&(de=o.R16UI),$===o.UNSIGNED_INT&&(de=o.R32UI),$===o.BYTE&&(de=o.R8I),$===o.SHORT&&(de=o.R16I),$===o.INT&&(de=o.R32I)),E===o.RG&&($===o.FLOAT&&(de=o.RG32F),$===o.HALF_FLOAT&&(de=o.RG16F),$===o.UNSIGNED_BYTE&&(de=o.RG8),$===o.UNSIGNED_SHORT&&Ie&&(de=Ie.RG16_EXT),$===o.SHORT&&Ie&&(de=Ie.RG16_SNORM_EXT)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RG8UI),$===o.UNSIGNED_SHORT&&(de=o.RG16UI),$===o.UNSIGNED_INT&&(de=o.RG32UI),$===o.BYTE&&(de=o.RG8I),$===o.SHORT&&(de=o.RG16I),$===o.INT&&(de=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGB8UI),$===o.UNSIGNED_SHORT&&(de=o.RGB16UI),$===o.UNSIGNED_INT&&(de=o.RGB32UI),$===o.BYTE&&(de=o.RGB8I),$===o.SHORT&&(de=o.RGB16I),$===o.INT&&(de=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),$===o.UNSIGNED_INT&&(de=o.RGBA32UI),$===o.BYTE&&(de=o.RGBA8I),$===o.SHORT&&(de=o.RGBA16I),$===o.INT&&(de=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_SHORT&&Ie&&(de=Ie.RGB16_EXT),$===o.SHORT&&Ie&&(de=Ie.RGB16_SNORM_EXT),$===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),E===o.RGBA){const he=Le?Yc:wt.getTransfer(Te);$===o.FLOAT&&(de=o.RGBA32F),$===o.HALF_FLOAT&&(de=o.RGBA16F),$===o.UNSIGNED_BYTE&&(de=he===Xt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT&&Ie&&(de=Ie.RGBA16_EXT),$===o.SHORT&&Ie&&(de=Ie.RGBA16_SNORM_EXT),$===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function F(O,E){let $;return O?E===null||E===Ji||E===Jo?$=o.DEPTH24_STENCIL8:E===Yi?$=o.DEPTH32F_STENCIL8:E===Qo&&($=o.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===Jo?$=o.DEPTH_COMPONENT24:E===Yi?$=o.DEPTH_COMPONENT32F:E===Qo&&($=o.DEPTH_COMPONENT16),$}function L(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Fn&&O.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function z(O){const E=O.target;E.removeEventListener("dispose",z),P(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function b(O){const E=O.target;E.removeEventListener("dispose",b),G(E)}function P(O){const E=s.get(O);if(E.__webglInit===void 0)return;const $=O.source,ve=M.get($);if(ve){const Te=ve[E.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&k(O),Object.keys(ve).length===0&&M.delete($)}s.remove(O)}function k(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const $=O.source,ve=M.get($);delete ve[E.__cacheKey],d.memory.textures--}function G(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Te=0;Te<E.__webglFramebuffer[ve].length;Te++)o.deleteFramebuffer(E.__webglFramebuffer[ve][Te]);else o.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)o.deleteFramebuffer(E.__webglFramebuffer[ve]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=O.textures;for(let ve=0,Te=$.length;ve<Te;ve++){const Le=s.get($[ve]);Le.__webglTexture&&(o.deleteTexture(Le.__webglTexture),d.memory.textures--),s.remove($[ve])}s.remove(O)}let q=0;function le(){q=0}function te(){return q}function W(O){q=O}function I(){const O=q;return O>=l.maxTextures&&at("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),q+=1,O}function H(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function oe(O,E){const $=s.get(O);if(O.isVideoTexture&&bt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&$.__version!==O.version){const ve=O.image;if(ve===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge($,O,E);return}}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function _e(O,E){const $=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){Ge($,O,E);return}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Me(O,E){const $=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){Ge($,O,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function B(O,E){const $=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&$.__version!==O.version){tt($,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const J={[sh]:o.REPEAT,[ba]:o.CLAMP_TO_EDGE,[rh]:o.MIRRORED_REPEAT},xe={[Fn]:o.NEAREST,[rM]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[jn]:o.LINEAR,[_d]:o.LINEAR_MIPMAP_NEAREST,[Bs]:o.LINEAR_MIPMAP_LINEAR},Ce={[cM]:o.NEVER,[pM]:o.ALWAYS,[uM]:o.LESS,[Qh]:o.LEQUAL,[fM]:o.EQUAL,[Jh]:o.GEQUAL,[dM]:o.GREATER,[hM]:o.NOTEQUAL};function Ne(O,E){if(E.type===Yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===_d||E.magFilter===hc||E.magFilter===Bs||E.minFilter===jn||E.minFilter===_d||E.minFilter===hc||E.minFilter===Bs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,J[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,J[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,J[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,xe[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==hc&&E.minFilter!==Bs||E.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function re(O,E){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",z));const ve=E.source;let Te=M.get(ve);Te===void 0&&(Te={},M.set(ve,Te));const Le=H(E);if(Le!==O.__cacheKey){Te[Le]===void 0&&(Te[Le]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),Te[Le].usedTimes++;const Ie=Te[O.__cacheKey];Ie!==void 0&&(Te[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&k(E)),O.__cacheKey=Le,O.__webglTexture=Te[Le].texture}return $}function be(O,E,$){return Math.floor(Math.floor(O/$)/E)}function Ae(O,E,$,ve){const Le=O.updateRanges;if(Le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ve,E.data);else{Le.sort((Fe,Pe)=>Fe.start-Pe.start);let Ie=0;for(let Fe=1;Fe<Le.length;Fe++){const Pe=Le[Ie],De=Le[Fe],it=Pe.start+Pe.count,st=be(De.start,E.width,4),vt=be(Pe.start,E.width,4);De.start<=it+1&&st===vt&&be(De.start+De.count-1,E.width,4)===st?Pe.count=Math.max(Pe.count,De.start+De.count-Pe.start):(++Ie,Le[Ie]=De)}Le.length=Ie+1;const de=i.getParameter(o.UNPACK_ROW_LENGTH),he=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Pe=Le.length;Fe<Pe;Fe++){const De=Le[Fe],it=Math.floor(De.start/4),st=Math.ceil(De.count/4),vt=it%E.width,j=Math.floor(it/E.width),we=st,pe=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,vt,j,we,pe,$,ve,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,de),i.pixelStorei(o.UNPACK_SKIP_PIXELS,he),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function Ge(O,E,$){let ve=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=o.TEXTURE_3D);const Te=re(O,E),Le=E.source;i.bindTexture(ve,O.__webglTexture,o.TEXTURE0+$);const Ie=s.get(Le);if(Le.version!==Ie.__version||Te===!0){if(i.activeTexture(o.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pe=wt.getPrimaries(wt.workingColorSpace),He=E.colorSpace===cs?null:wt.getPrimaries(E.colorSpace),ze=E.colorSpace===cs||pe===He?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let he=y(E.image,!1,l.maxTextureSize);he=Re(E,he);const Oe=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type);let Pe=D(E.internalFormat,Oe,Fe,E.normalized,E.colorSpace,E.isVideoTexture);Ne(ve,E);let De;const it=E.mipmaps,st=E.isVideoTexture!==!0,vt=Ie.__version===void 0||Te===!0,j=Le.dataReady,we=L(E,he);if(E.isDepthTexture)Pe=F(E.format===Hs,E.type),vt&&(st?i.texStorage2D(o.TEXTURE_2D,1,Pe,he.width,he.height):i.texImage2D(o.TEXTURE_2D,0,Pe,he.width,he.height,0,Oe,Fe,null));else if(E.isDataTexture)if(it.length>0){st&&vt&&i.texStorage2D(o.TEXTURE_2D,we,Pe,it[0].width,it[0].height);for(let pe=0,He=it.length;pe<He;pe++)De=it[pe],st?j&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,Fe,De.data):i.texImage2D(o.TEXTURE_2D,pe,Pe,De.width,De.height,0,Oe,Fe,De.data);E.generateMipmaps=!1}else st?(vt&&i.texStorage2D(o.TEXTURE_2D,we,Pe,he.width,he.height),j&&Ae(E,he,Oe,Fe)):i.texImage2D(o.TEXTURE_2D,0,Pe,he.width,he.height,0,Oe,Fe,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Pe,it[0].width,it[0].height,he.depth);for(let pe=0,He=it.length;pe<He;pe++)if(De=it[pe],E.format!==Fi)if(Oe!==null)if(st){if(j)if(E.layerUpdates.size>0){const ze=W_(De.width,De.height,E.format,E.type);for(const Ee of E.layerUpdates){const We=De.data.subarray(Ee*ze/De.data.BYTES_PER_ELEMENT,(Ee+1)*ze/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Ee,De.width,De.height,1,Oe,We)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,he.depth,Oe,De.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,Pe,De.width,De.height,he.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?j&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,De.width,De.height,he.depth,Oe,Fe,De.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pe,Pe,De.width,De.height,he.depth,0,Oe,Fe,De.data)}else{st&&vt&&i.texStorage2D(o.TEXTURE_2D,we,Pe,it[0].width,it[0].height);for(let pe=0,He=it.length;pe<He;pe++)De=it[pe],E.format!==Fi?Oe!==null?st?j&&i.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,De.data):i.compressedTexImage2D(o.TEXTURE_2D,pe,Pe,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?j&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,De.width,De.height,Oe,Fe,De.data):i.texImage2D(o.TEXTURE_2D,pe,Pe,De.width,De.height,0,Oe,Fe,De.data)}else if(E.isDataArrayTexture)if(st){if(vt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Pe,he.width,he.height,he.depth),j)if(E.layerUpdates.size>0){const pe=W_(he.width,he.height,E.format,E.type);for(const He of E.layerUpdates){const ze=he.data.subarray(He*pe/he.data.BYTES_PER_ELEMENT,(He+1)*pe/he.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,He,he.width,he.height,1,Oe,Fe,ze)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Oe,Fe,he.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pe,he.width,he.height,he.depth,0,Oe,Fe,he.data);else if(E.isData3DTexture)st?(vt&&i.texStorage3D(o.TEXTURE_3D,we,Pe,he.width,he.height,he.depth),j&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Oe,Fe,he.data)):i.texImage3D(o.TEXTURE_3D,0,Pe,he.width,he.height,he.depth,0,Oe,Fe,he.data);else if(E.isFramebufferTexture){if(vt)if(st)i.texStorage2D(o.TEXTURE_2D,we,Pe,he.width,he.height);else{let pe=he.width,He=he.height;for(let ze=0;ze<we;ze++)i.texImage2D(o.TEXTURE_2D,ze,Pe,pe,He,0,Oe,Fe,null),pe>>=1,He>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const pe=o.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),he.parentNode!==pe){pe.appendChild(he),v.add(E),pe.onpaint=ee=>{const Ue=ee.changedElements;for(const me of v)Ue.includes(me.image)&&(me.needsUpdate=!0)},pe.requestPaint();return}const He=0,ze=o.RGBA,Ee=o.RGBA,We=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,He,ze,Ee,We,he),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(it.length>0){if(st&&vt){const pe=Qt(it[0]);i.texStorage2D(o.TEXTURE_2D,we,Pe,pe.width,pe.height)}for(let pe=0,He=it.length;pe<He;pe++)De=it[pe],st?j&&i.texSubImage2D(o.TEXTURE_2D,pe,0,0,Oe,Fe,De):i.texImage2D(o.TEXTURE_2D,pe,Pe,Oe,Fe,De);E.generateMipmaps=!1}else if(st){if(vt){const pe=Qt(he);i.texStorage2D(o.TEXTURE_2D,we,Pe,pe.width,pe.height)}j&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,Fe,he)}else i.texImage2D(o.TEXTURE_2D,0,Pe,Oe,Fe,he);x(E)&&A(ve),Ie.__version=Le.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function tt(O,E,$){if(E.image.length!==6)return;const ve=re(O,E),Te=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+$);const Le=s.get(Te);if(Te.version!==Le.__version||ve===!0){i.activeTexture(o.TEXTURE0+$);const Ie=wt.getPrimaries(wt.workingColorSpace),de=E.colorSpace===cs?null:wt.getPrimaries(E.colorSpace),he=E.colorSpace===cs||Ie===de?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let Ee=0;Ee<6;Ee++)!Oe&&!Fe?Pe[Ee]=y(E.image[Ee],!0,l.maxCubemapSize):Pe[Ee]=Fe?E.image[Ee].image:E.image[Ee],Pe[Ee]=Re(E,Pe[Ee]);const De=Pe[0],it=c.convert(E.format,E.colorSpace),st=c.convert(E.type),vt=D(E.internalFormat,it,st,E.normalized,E.colorSpace),j=E.isVideoTexture!==!0,we=Le.__version===void 0||ve===!0,pe=Te.dataReady;let He=L(E,De);Ne(o.TEXTURE_CUBE_MAP,E);let ze;if(Oe){j&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,He,vt,De.width,De.height);for(let Ee=0;Ee<6;Ee++){ze=Pe[Ee].mipmaps;for(let We=0;We<ze.length;We++){const ee=ze[We];E.format!==Fi?it!==null?j?pe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,0,0,ee.width,ee.height,it,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,vt,ee.width,ee.height,0,ee.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,0,0,ee.width,ee.height,it,st,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We,vt,ee.width,ee.height,0,it,st,ee.data)}}}else{if(ze=E.mipmaps,j&&we){ze.length>0&&He++;const Ee=Qt(Pe[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,He,vt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Fe){j?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe[Ee].width,Pe[Ee].height,it,st,Pe[Ee].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,vt,Pe[Ee].width,Pe[Ee].height,0,it,st,Pe[Ee].data);for(let We=0;We<ze.length;We++){const Ue=ze[We].image[Ee].image;j?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,0,0,Ue.width,Ue.height,it,st,Ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,vt,Ue.width,Ue.height,0,it,st,Ue.data)}}else{j?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,it,st,Pe[Ee]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,vt,it,st,Pe[Ee]);for(let We=0;We<ze.length;We++){const ee=ze[We];j?pe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,0,0,it,st,ee.image[Ee]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,We+1,vt,it,st,ee.image[Ee])}}}x(E)&&A(o.TEXTURE_CUBE_MAP),Le.__version=Te.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Je(O,E,$,ve,Te,Le){const Ie=c.convert($.format,$.colorSpace),de=c.convert($.type),he=D($.internalFormat,Ie,de,$.normalized,$.colorSpace),Oe=s.get(E),Fe=s.get($);if(Fe.__renderTarget=E,!Oe.__hasExternalTextures){const Pe=Math.max(1,E.width>>Le),De=Math.max(1,E.height>>Le);Te===o.TEXTURE_3D||Te===o.TEXTURE_2D_ARRAY?i.texImage3D(Te,Le,he,Pe,De,E.depth,0,Ie,de,null):i.texImage2D(Te,Le,he,Pe,De,0,Ie,de,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),mt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,Te,Fe.__webglTexture,0,en(E)):(Te===o.TEXTURE_2D||Te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ve,Te,Fe.__webglTexture,Le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(O,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ve=E.depthTexture,Te=ve&&ve.isDepthTexture?ve.type:null,Le=F(E.stencilBuffer,Te),Ie=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;mt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,en(E),Le,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,en(E),Le,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Le,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,O)}else{const ve=E.textures;for(let Te=0;Te<ve.length;Te++){const Le=ve[Te],Ie=c.convert(Le.format,Le.colorSpace),de=c.convert(Le.type),he=D(Le.internalFormat,Ie,de,Le.normalized,Le.colorSpace);mt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,en(E),he,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,en(E),he,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,he,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ct(O,E,$){const ve=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(E.depthTexture);if(Te.__renderTarget=E,(!Te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ve){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),Te.__webglTexture===void 0){Te.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Te.__webglTexture),Ne(o.TEXTURE_CUBE_MAP,E.depthTexture);const Oe=c.convert(E.depthTexture.format),Fe=c.convert(E.depthTexture.type);let Pe;E.depthTexture.format===Ra?Pe=o.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(Pe=o.DEPTH24_STENCIL8);for(let De=0;De<6;De++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Pe,E.width,E.height,0,Oe,Fe,null)}}else oe(E.depthTexture,0);const Le=Te.__webglTexture,Ie=en(E),de=ve?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,he=E.depthTexture.format===Hs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ra)mt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,de,Le,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,he,de,Le,0);else if(E.depthTexture.format===Hs)mt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,de,Le,0,Ie):o.framebufferTexture2D(o.FRAMEBUFFER,he,de,Le,0);else throw new Error("Unknown depthTexture format")}function xt(O){const E=s.get(O),$=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ve=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Te)};ve.addEventListener("dispose",Te),E.__depthDisposeCallback=Te}E.__boundDepthTexture=ve}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let ve=0;ve<6;ve++)ct(E.__webglFramebuffer[ve],O,ve);else{const ve=O.texture.mipmaps;ve&&ve.length>0?ct(E.__webglFramebuffer[0],O,0):ct(E.__webglFramebuffer,O,0)}else if($){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=o.createRenderbuffer(),Dt(E.__webglDepthbuffer[ve],O,!1);else{const Te=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer[ve];o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Le)}}else{const ve=O.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Dt(E.__webglDepthbuffer,O,!1);else{const Te=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Le),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,Le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(O,E,$){const ve=s.get(O);E!==void 0&&Je(ve.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&xt(O)}function ot(O){const E=O.texture,$=s.get(O),ve=s.get(E);O.addEventListener("dispose",b);const Te=O.textures,Le=O.isWebGLCubeRenderTarget===!0,Ie=Te.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture()),ve.__version=E.version,d.memory.textures++),Le){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let he=0;he<E.mipmaps.length;he++)$.__webglFramebuffer[de][he]=o.createFramebuffer()}else $.__webglFramebuffer[de]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)$.__webglFramebuffer[de]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let de=0,he=Te.length;de<he;de++){const Oe=s.get(Te[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&mt(O)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<Te.length;de++){const he=Te[de];$.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const Oe=c.convert(he.format,he.colorSpace),Fe=c.convert(he.type),Pe=D(he.internalFormat,Oe,Fe,he.normalized,he.colorSpace,O.isXRRenderTarget===!0),De=en(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,De,Pe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+de,o.RENDERBUFFER,$.__webglColorRenderbuffer[de])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt($.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Le){i.bindTexture(o.TEXTURE_CUBE_MAP,ve.__webglTexture),Ne(o.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Je($.__webglFramebuffer[de][he],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,he);else Je($.__webglFramebuffer[de],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E)&&A(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let de=0,he=Te.length;de<he;de++){const Oe=Te[de],Fe=s.get(Oe);let Pe=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pe=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Fe.__webglTexture),Ne(Pe,Oe),Je($.__webglFramebuffer,O,Oe,o.COLOR_ATTACHMENT0+de,Pe,0),x(Oe)&&A(Pe)}i.unbindTexture()}else{let de=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(de=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(de,ve.__webglTexture),Ne(de,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Je($.__webglFramebuffer[he],O,E,o.COLOR_ATTACHMENT0,de,he);else Je($.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,de,0);x(E)&&A(de),i.unbindTexture()}O.depthBuffer&&xt(O)}function an(O){const E=O.textures;for(let $=0,ve=E.length;$<ve;$++){const Te=E[$];if(x(Te)){const Le=R(O),Ie=s.get(Te).__webglTexture;i.bindTexture(Le,Ie),A(Le),i.unbindTexture()}}}const Wt=[],mn=[];function Y(O){if(O.samples>0){if(mt(O)===!1){const E=O.textures,$=O.width,ve=O.height;let Te=o.COLOR_BUFFER_BIT;const Le=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=s.get(O),de=E.length>1;if(de)for(let Oe=0;Oe<E.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const he=O.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Oe=0;Oe<E.length;Oe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Te|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Te|=o.STENCIL_BUFFER_BIT)),de){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);const Fe=s.get(E[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Fe,0)}o.blitFramebuffer(0,0,$,ve,0,0,$,ve,Te,o.NEAREST),m===!0&&(Wt.length=0,mn.length=0,Wt.push(o.COLOR_ATTACHMENT0+Oe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Wt.push(Le),mn.push(Le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,mn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),de)for(let Oe=0;Oe<E.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);const Fe=s.get(E[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,Fe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function en(O){return Math.min(l.maxSamples,O.samples)}function mt(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function bt(O){const E=d.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function Re(O,E){const $=O.colorSpace,ve=O.format,Te=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||$!==qc&&$!==cs&&(wt.getTransfer($)===Xt?(ve!==Fi||Te!==mi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",$)),E}function Qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=le,this.getTextureUnits=te,this.setTextureUnits=W,this.setTexture2D=oe,this.setTexture2DArray=_e,this.setTexture3D=Me,this.setTextureCube=B,this.rebindTextures=zt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function XA(o,e){function i(s,l=cs){let c;const d=wt.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Wh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===qh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===wx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ax)return o.BYTE;if(s===Rx)return o.SHORT;if(s===Qo)return o.UNSIGNED_SHORT;if(s===Xh)return o.INT;if(s===Ji)return o.UNSIGNED_INT;if(s===Yi)return o.FLOAT;if(s===Aa)return o.HALF_FLOAT;if(s===Nx)return o.ALPHA;if(s===Dx)return o.RGB;if(s===Fi)return o.RGBA;if(s===Ra)return o.DEPTH_COMPONENT;if(s===Hs)return o.DEPTH_STENCIL;if(s===Ux)return o.RED;if(s===Yh)return o.RED_INTEGER;if(s===ks)return o.RG;if(s===Zh)return o.RG_INTEGER;if(s===Kh)return o.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(d===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oh||s===lh||s===ch||s===uh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fh||s===dh||s===hh||s===ph||s===mh||s===Xc||s===gh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fh||s===dh)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===hh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ph)return c.COMPRESSED_R11_EAC;if(s===mh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xc)return c.COMPRESSED_RG11_EAC;if(s===gh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===_h||s===xh||s===vh||s===Sh||s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Nh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_h)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Th)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ah)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dh||s===Uh||s===Lh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Dh)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Oh||s===Ph||s===Wc||s===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Oh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ph)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Vx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new $i({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new In(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends Xs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,S=null,v=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",y=new YA,x={},A=i.getContextAttributes();let R=null,D=null;const F=[],L=[],z=new At;let b=null;const P=new pi;P.viewport=new fn;const k=new pi;k.viewport=new fn;const G=[P,k],q=new sb;let le=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let be=F[re];return be===void 0&&(be=new Td,F[re]=be),be.getTargetRaySpace()},this.getControllerGrip=function(re){let be=F[re];return be===void 0&&(be=new Td,F[re]=be),be.getGripSpace()},this.getHand=function(re){let be=F[re];return be===void 0&&(be=new Td,F[re]=be),be.getHandSpace()};function W(re){const be=L.indexOf(re.inputSource);if(be===-1)return;const Ae=F[be];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,h||d),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function I(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let re=0;re<F.length;re++){const be=L[re];be!==null&&(L[re]=null,F[re].disconnect(be))}le=null,te=null,y.reset();for(const re in x)delete x[re];e.setRenderTarget(R),M=null,g=null,v=null,l=null,D=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){p=re,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(R=e.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Ge=null,tt=null;A.depth&&(tt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=A.stencil?Hs:Ra,Ge=A.stencil?Jo:Ji);const Je={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Qi(g.textureWidth,g.textureHeight,{format:Fi,type:mi,depthTexture:new kr(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ae={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Qi(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ne.setContext(l),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(re){for(let be=0;be<re.removed.length;be++){const Ae=re.removed[be],Ge=L.indexOf(Ae);Ge>=0&&(L[Ge]=null,F[Ge].disconnect(Ae))}for(let be=0;be<re.added.length;be++){const Ae=re.added[be];let Ge=L.indexOf(Ae);if(Ge===-1){for(let Je=0;Je<F.length;Je++)if(Je>=L.length){L.push(Ae),Ge=Je;break}else if(L[Je]===null){L[Je]=Ae,Ge=Je;break}if(Ge===-1)break}const tt=F[Ge];tt&&tt.connect(Ae)}}const oe=new K,_e=new K;function Me(re,be,Ae){oe.setFromMatrixPosition(be.matrixWorld),_e.setFromMatrixPosition(Ae.matrixWorld);const Ge=oe.distanceTo(_e),tt=be.projectionMatrix.elements,Je=Ae.projectionMatrix.elements,Dt=tt[14]/(tt[10]-1),ct=tt[14]/(tt[10]+1),xt=(tt[9]+1)/tt[5],zt=(tt[9]-1)/tt[5],ot=(tt[8]-1)/tt[0],an=(Je[8]+1)/Je[0],Wt=Dt*ot,mn=Dt*an,Y=Ge/(-ot+an),en=Y*-ot;if(be.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(en),re.translateZ(Y),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),tt[10]===-1)re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const mt=Dt+Y,bt=ct+Y,Re=Wt-en,Qt=mn+(Ge-en),O=xt*ct/bt*mt,E=zt*ct/bt*mt;re.projectionMatrix.makePerspective(Re,Qt,O,E,mt,bt),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function B(re,be){be===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(be.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let be=re.near,Ae=re.far;y.texture!==null&&(y.depthNear>0&&(be=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),q.near=k.near=P.near=be,q.far=k.far=P.far=Ae,(le!==q.near||te!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),le=q.near,te=q.far),q.layers.mask=re.layers.mask|6,P.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;const Ge=re.parent,tt=q.cameras;B(q,Ge);for(let Je=0;Je<tt.length;Je++)B(tt[Je],Ge);tt.length===2?Me(q,P,k):q.projectionMatrix.copy(P.projectionMatrix),J(re,q,Ge)};function J(re,be,Ae){Ae===null?re.matrix.copy(be.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(be.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(be.projectionMatrix),re.projectionMatrixInverse.copy(be.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Bh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(re){m=re,g!==null&&(g.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(re){return x[re]};let xe=null;function Ce(re,be){if(S=be.getViewerPose(h||d),T=be,S!==null){const Ae=S.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Ge=!1;Ae.length!==q.cameras.length&&(q.cameras.length=0,Ge=!0);for(let ct=0;ct<Ae.length;ct++){const xt=Ae[ct];let zt=null;if(M!==null)zt=M.getViewport(xt);else{const an=v.getViewSubImage(g,xt);zt=an.viewport,ct===0&&(e.setRenderTargetTextures(D,an.colorTexture,an.depthStencilTexture),e.setRenderTarget(D))}let ot=G[ct];ot===void 0&&(ot=new pi,ot.layers.enable(ct),ot.viewport=new fn,G[ct]=ot),ot.matrix.fromArray(xt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(xt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(zt.x,zt.y,zt.width,zt.height),ct===0&&(q.matrix.copy(ot.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ge===!0&&q.cameras.push(ot)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const ct=v.getDepthInformation(Ae[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,l.renderState)}if(tt&&tt.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let ct=0;ct<Ae.length;ct++){const xt=Ae[ct].camera;if(xt){let zt=x[xt];zt||(zt=new Vx,x[xt]=zt);const ot=v.getCameraImage(xt);zt.sourceTexture=ot}}}}for(let Ae=0;Ae<F.length;Ae++){const Ge=L[Ae],tt=F[Ae];Ge!==null&&tt!==void 0&&tt.update(Ge,be,h||d)}xe&&xe(re,be),be.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:be}),T=null}const Ne=new qx;Ne.setAnimationLoop(Ce),this.setAnimationLoop=function(re){xe=re},this.dispose=function(){}}}const KA=new ln,ev=new dt;ev.set(-1,0,0,0,1,0,0,0,1);function QA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,kx(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,A,R,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,D)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,A,R):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ni&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ni&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=e.get(x),R=A.envMap,D=A.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(KA.makeRotationFromEuler(D)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(ev),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,A,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=R*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const A=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function JA(o,e,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,R){const D=R.program;s.uniformBlockBinding(A,D)}function h(A,R){let D=l[A.id];D===void 0&&(T(A),D=S(A),l[A.id]=D,A.addEventListener("dispose",y));const F=R.program;s.updateUBOMapping(A,F);const L=e.render.frame;c[A.id]!==L&&(g(A),c[A.id]=L)}function S(A){const R=v();A.__bindingPointIndex=R;const D=o.createBuffer(),F=A.__size,L=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,F,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,D),D}function v(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const R=l[A.id],D=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let L=0,z=D.length;L<z;L++){const b=Array.isArray(D[L])?D[L]:[D[L]];for(let P=0,k=b.length;P<k;P++){const G=b[P];if(M(G,L,P,F)===!0){const q=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let te=0;for(let W=0;W<le.length;W++){const I=le[W],H=C(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,q+te,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):ArrayBuffer.isView(I)?G.__data.set(new I.constructor(I.buffer,I.byteOffset,G.__data.length)):(I.toArray(G.__data,te),te+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(A,R,D,F){const L=A.value,z=R+"_"+D;if(F[z]===void 0)return typeof L=="number"||typeof L=="boolean"?F[z]=L:ArrayBuffer.isView(L)?F[z]=L.slice():F[z]=L.clone(),!0;{const b=F[z];if(typeof L=="number"||typeof L=="boolean"){if(b!==L)return F[z]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(b.equals(L)===!1)return b.copy(L),!0}}return!1}function T(A){const R=A.uniforms;let D=0;const F=16;for(let z=0,b=R.length;z<b;z++){const P=Array.isArray(R[z])?R[z]:[R[z]];for(let k=0,G=P.length;k<G;k++){const q=P[k],le=Array.isArray(q.value)?q.value:[q.value];for(let te=0,W=le.length;te<W;te++){const I=le[te],H=C(I),oe=D%F,_e=oe%H.boundary,Me=oe+_e;D+=_e,Me!==0&&F-Me<H.storage&&(D+=F-Me),q.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=H.storage}}}const L=D%F;return L>0&&(D+=F-L),A.__size=D,A.__cache={},this}function C(A){const R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=48,R.storage=48):A.isMatrix4?(R.boundary=64,R.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),R}function y(A){const R=A.target;R.removeEventListener("dispose",y);const D=d.indexOf(R.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function x(){for(const A in l)o.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const $A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function e2(){return Xi===null&&(Xi=new BM($A,16,16,ks,Aa),Xi.name="DFG_LUT",Xi.minFilter=jn,Xi.magFilter=jn,Xi.wrapS=ba,Xi.wrapT=ba,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class t2{constructor(e={}){const{canvas:i=gM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=mi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const C=M,y=new Set([Kh,Zh,Yh]),x=new Set([mi,Ji,Qo,Jo,Wh,qh]),A=new Uint32Array(4),R=new Int32Array(4),D=new K;let F=null,L=null;const z=[],b=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,q=null;this._outputColorSpace=Ri;let le=0,te=0,W=null,I=-1,H=null;const oe=new fn,_e=new fn;let Me=null;const B=new Nt(0);let J=0,xe=i.width,Ce=i.height,Ne=1,re=null,be=null;const Ae=new fn(0,0,xe,Ce),Ge=new fn(0,0,xe,Ce);let tt=!1;const Je=new np;let Dt=!1,ct=!1;const xt=new ln,zt=new K,ot=new fn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function mn(){return W===null?Ne:1}let Y=s;function en(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jh}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",ee,!1),Y===null){const Z="webgl2";if(Y=en(Z,w),Y===null)throw en(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let mt,bt,Re,Qt,O,E,$,ve,Te,Le,Ie,de,he,Oe,Fe,Pe,De,it,st,vt,j,we,pe;function He(){mt=new eT(Y),mt.init(),j=new XA(Y,mt),bt=new WE(Y,mt,e,j),Re=new kA(Y,mt),bt.reversedDepthBuffer&&g&&Re.buffers.depth.setReversed(!0),Qt=new iT(Y),O=new CA,E=new jA(Y,mt,Re,O,bt,j,Qt),$=new $E(k),ve=new ob(Y),we=new jE(Y,ve),Te=new tT(Y,ve,Qt,we),Le=new sT(Y,Te,ve,we,Qt),it=new aT(Y,bt,E),Fe=new qE(O),Ie=new wA(k,$,mt,bt,we,Fe),de=new QA(k,O),he=new DA,Oe=new IA(mt),De=new kE(k,$,Re,Le,T,m),Pe=new VA(k,Le,bt),pe=new JA(Y,Qt,bt,Re),st=new XE(Y,mt,Qt),vt=new nT(Y,mt,Qt),Qt.programs=Ie.programs,k.capabilities=bt,k.extensions=mt,k.properties=O,k.renderLists=he,k.shadowMap=Pe,k.state=Re,k.info=Qt}He(),C!==mi&&(P=new oT(C,i.width,i.height,l,c));const ze=new ZA(k,Y);this.xr=ze,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(w){w!==void 0&&(Ne=w,this.setSize(xe,Ce,!1))},this.getSize=function(w){return w.set(xe,Ce)},this.setSize=function(w,Z,ce=!0){if(ze.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=w,Ce=Z,i.width=Math.floor(w*Ne),i.height=Math.floor(Z*Ne),ce===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(xe*Ne,Ce*Ne).floor()},this.setDrawingBufferSize=function(w,Z,ce){xe=w,Ce=Z,Ne=ce,i.width=Math.floor(w*ce),i.height=Math.floor(Z*ce),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(C===mi){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(oe)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,Z,ce,ae){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,Z,ce,ae),Re.viewport(oe.copy(Ae).multiplyScalar(Ne).round())},this.getScissor=function(w){return w.copy(Ge)},this.setScissor=function(w,Z,ce,ae){w.isVector4?Ge.set(w.x,w.y,w.z,w.w):Ge.set(w,Z,ce,ae),Re.scissor(_e.copy(Ge).multiplyScalar(Ne).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){Re.setScissorTest(tt=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){be=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ce=!0){let ae=0;if(w){let se=!1;if(W!==null){const Ve=W.texture.format;se=y.has(Ve)}if(se){const Ve=W.texture.type,Xe=x.has(Ve),Be=De.getClearColor(),Ye=De.getClearAlpha(),qe=Be.r,$e=Be.g,ht=Be.b;Xe?(A[0]=qe,A[1]=$e,A[2]=ht,A[3]=Ye,Y.clearBufferuiv(Y.COLOR,0,A)):(R[0]=qe,R[1]=$e,R[2]=ht,R[3]=Ye,Y.clearBufferiv(Y.COLOR,0,R))}else ae|=Y.COLOR_BUFFER_BIT}Z&&(ae|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Y.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),q=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",ee,!1),De.dispose(),he.dispose(),Oe.dispose(),O.dispose(),$.dispose(),Le.dispose(),we.dispose(),pe.dispose(),Ie.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Rn),ze.removeEventListener("sessionend",_i),wn.stop()};function Ee(w){w.preventDefault(),__("WebGLRenderer: Context Lost."),G=!0}function We(){__("WebGLRenderer: Context Restored."),G=!1;const w=Qt.autoReset,Z=Pe.enabled,ce=Pe.autoUpdate,ae=Pe.needsUpdate,se=Pe.type;He(),Qt.autoReset=w,Pe.enabled=Z,Pe.autoUpdate=ce,Pe.needsUpdate=ae,Pe.type=se}function ee(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const Z=w.target;Z.removeEventListener("dispose",Ue),me(Z)}function me(w){ut(w),O.remove(w)}function ut(w){const Z=O.get(w).programs;Z!==void 0&&(Z.forEach(function(ce){Ie.releaseProgram(ce)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ce,ae,se,Ve){Z===null&&(Z=an);const Xe=se.isMesh&&se.matrixWorld.determinant()<0,Be=Na(w,Z,ce,ae,se);Re.setMaterial(ae,Xe);let Ye=ce.index,qe=1;if(ae.wireframe===!0){if(Ye=Te.getWireframeAttribute(ce),Ye===void 0)return;qe=2}const $e=ce.drawRange,ht=ce.attributes.position;let Qe=$e.start*qe,Lt=($e.start+$e.count)*qe;Ve!==null&&(Qe=Math.max(Qe,Ve.start*qe),Lt=Math.min(Lt,(Ve.start+Ve.count)*qe)),Ye!==null?(Qe=Math.max(Qe,0),Lt=Math.min(Lt,Ye.count)):ht!=null&&(Qe=Math.max(Qe,0),Lt=Math.min(Lt,ht.count));const sn=Lt-Qe;if(sn<0||sn===1/0)return;we.setup(se,ae,Be,ce,Ye);let Jt,Ht=st;if(Ye!==null&&(Jt=ve.get(Ye),Ht=vt,Ht.setIndex(Jt)),se.isMesh)ae.wireframe===!0?(Re.setLineWidth(ae.wireframeLinewidth*mn()),Ht.setMode(Y.LINES)):Ht.setMode(Y.TRIANGLES);else if(se.isLine){let Gt=ae.linewidth;Gt===void 0&&(Gt=1),Re.setLineWidth(Gt*mn()),se.isLineSegments?Ht.setMode(Y.LINES):se.isLineLoop?Ht.setMode(Y.LINE_LOOP):Ht.setMode(Y.LINE_STRIP)}else se.isPoints?Ht.setMode(Y.POINTS):se.isSprite&&Ht.setMode(Y.TRIANGLES);if(se.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Gt=se._multiDrawStarts,je=se._multiDrawCounts,Bn=se._multiDrawCount,St=Ye?ve.get(Ye).bytesPerElement:1,Mn=O.get(ae).currentProgram.getUniforms();for(let ii=0;ii<Bn;ii++)Mn.setValue(Y,"_gl_DrawID",ii),Ht.render(Gt[ii]/St,je[ii])}else if(se.isInstancedMesh)Ht.renderInstances(Qe,sn,se.count);else if(ce.isInstancedBufferGeometry){const Gt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,je=Math.min(ce.instanceCount,Gt);Ht.renderInstances(Qe,sn,je)}else Ht.render(Qe,sn)};function qt(w,Z,ce){w.transparent===!0&&w.side===qi&&w.forceSinglePass===!1?(w.side=ni,w.needsUpdate=!0,qs(w,Z,ce),w.side=fs,w.needsUpdate=!0,qs(w,Z,ce),w.side=qi):qs(w,Z,ce)}this.compile=function(w,Z,ce=null){ce===null&&(ce=w),L=Oe.get(ce),L.init(Z),b.push(L),ce.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),w!==ce&&w.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights();const ae=new Set;return w.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let Xe=0;Xe<Ve.length;Xe++){const Be=Ve[Xe];qt(Be,ce,se),ae.add(Be)}else qt(Ve,ce,se),ae.add(Ve)}),L=b.pop(),ae},this.compileAsync=function(w,Z,ce=null){const ae=this.compile(w,Z,ce);return new Promise(se=>{function Ve(){if(ae.forEach(function(Xe){O.get(Xe).currentProgram.isReady()&&ae.delete(Xe)}),ae.size===0){se(w);return}setTimeout(Ve,10)}mt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Dn=null;function lt(w){Dn&&Dn(w)}function Rn(){wn.stop()}function _i(){wn.start()}const wn=new qx;wn.setAnimationLoop(lt),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(w){Dn=w,ze.setAnimationLoop(w),w===null?wn.stop():wn.start()},ze.addEventListener("sessionstart",Rn),ze.addEventListener("sessionend",_i),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;q!==null&&q.renderStart(w,Z);const ce=ze.enabled===!0&&ze.isPresenting===!0,ae=P!==null&&(W===null||ce)&&P.begin(k,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Z),Z=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,Z,W),L=Oe.get(w,b.length),L.init(Z),L.state.textureUnits=E.getTextureUnits(),b.push(L),xt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Je.setFromProjectionMatrix(xt,Zi,Z.reversedDepth),ct=this.localClippingEnabled,Dt=Fe.init(this.clippingPlanes,ct),F=he.get(w,z.length),F.init(),z.push(F),ze.enabled===!0&&ze.isPresenting===!0){const Xe=k.xr.getDepthSensingMesh();Xe!==null&&dn(Xe,Z,-1/0,k.sortObjects)}dn(w,Z,0,k.sortObjects),F.finish(),k.sortObjects===!0&&F.sort(re,be),Wt=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Wt&&De.addToRenderList(F,w),this.info.render.frame++,Dt===!0&&Fe.beginShadows();const se=L.state.shadowsArray;if(Pe.render(se,w,Z),Dt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&P.hasRenderPass())===!1){const Xe=F.opaque,Be=F.transmissive;if(L.setupLights(),Z.isArrayCamera){const Ye=Z.cameras;if(Be.length>0)for(let qe=0,$e=Ye.length;qe<$e;qe++){const ht=Ye[qe];ea(Xe,Be,w,ht)}Wt&&De.render(w);for(let qe=0,$e=Ye.length;qe<$e;qe++){const ht=Ye[qe];Un(F,w,ht,ht.viewport)}}else Be.length>0&&ea(Xe,Be,w,Z),Wt&&De.render(w),Un(F,w,Z)}W!==null&&te===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),ae&&P.end(k),w.isScene===!0&&w.onAfterRender(k,w,Z),we.resetDefaultState(),I=-1,H=null,b.pop(),b.length>0?(L=b[b.length-1],E.setTextureUnits(L.state.textureUnits),Dt===!0&&Fe.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?F=z[z.length-1]:F=null,q!==null&&q.renderEnd()};function dn(w,Z,ce,ae){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){ae&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const Xe=Le.update(w),Be=w.material;Be.visible&&F.push(w,Xe,Be,ce,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const Xe=Le.update(w),Be=w.material;if(ae&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ot.copy(Xe.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(Be)){const Ye=Xe.groups;for(let qe=0,$e=Ye.length;qe<$e;qe++){const ht=Ye[qe],Qe=Be[ht.materialIndex];Qe&&Qe.visible&&F.push(w,Xe,Qe,ce,ot.z,ht)}}else Be.visible&&F.push(w,Xe,Be,ce,ot.z,null)}}const Ve=w.children;for(let Xe=0,Be=Ve.length;Xe<Be;Xe++)dn(Ve[Xe],Z,ce,ae)}function Un(w,Z,ce,ae){const{opaque:se,transmissive:Ve,transparent:Xe}=w;L.setupLightsView(ce),Dt===!0&&Fe.setGlobalState(k.clippingPlanes,ce),ae&&Re.viewport(oe.copy(ae)),se.length>0&&wa(se,Z,ce),Ve.length>0&&wa(Ve,Z,ce),Xe.length>0&&wa(Xe,Z,ce),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function ea(w,Z,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Qe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Qi(1,1,{generateMipmaps:!0,type:Qe?Aa:mi,minFilter:Bs,samples:Math.max(4,bt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[ae.id],Xe=ae.viewport||oe;Ve.setSize(Xe.z*k.transmissionResolutionScale,Xe.w*k.transmissionResolutionScale);const Be=k.getRenderTarget(),Ye=k.getActiveCubeFace(),qe=k.getActiveMipmapLevel();k.setRenderTarget(Ve),k.getClearColor(B),J=k.getClearAlpha(),J<1&&k.setClearColor(16777215,.5),k.clear(),Wt&&De.render(ce);const $e=k.toneMapping;k.toneMapping=Ki;const ht=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),Dt===!0&&Fe.setGlobalState(k.clippingPlanes,ae),wa(w,ce,ae),E.updateMultisampleRenderTarget(Ve),E.updateRenderTargetMipmap(Ve),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Lt=0,sn=Z.length;Lt<sn;Lt++){const Jt=Z[Lt],{object:Ht,geometry:Gt,material:je,group:Bn}=Jt;if(je.side===qi&&Ht.layers.test(ae.layers)){const St=je.side;je.side=ni,je.needsUpdate=!0,il(Ht,ce,ae,Gt,je,Bn),je.side=St,je.needsUpdate=!0,Qe=!0}}Qe===!0&&(E.updateMultisampleRenderTarget(Ve),E.updateRenderTargetMipmap(Ve))}k.setRenderTarget(Be,Ye,qe),k.setClearColor(B,J),ht!==void 0&&(ae.viewport=ht),k.toneMapping=$e}function wa(w,Z,ce){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ve=w.length;se<Ve;se++){const Xe=w[se],{object:Be,geometry:Ye,group:qe}=Xe;let $e=Xe.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Be.layers.test(ce.layers)&&il(Be,Z,ce,Ye,$e,qe)}}function il(w,Z,ce,ae,se,Ve){w.onBeforeRender(k,Z,ce,ae,se,Ve),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),se.onBeforeRender(k,Z,ce,ae,w,Ve),se.transparent===!0&&se.side===qi&&se.forceSinglePass===!1?(se.side=ni,se.needsUpdate=!0,k.renderBufferDirect(ce,Z,ae,se,w,Ve),se.side=fs,se.needsUpdate=!0,k.renderBufferDirect(ce,Z,ae,se,w,Ve),se.side=qi):k.renderBufferDirect(ce,Z,ae,se,w,Ve),w.onAfterRender(k,Z,ce,ae,se,Ve)}function qs(w,Z,ce){Z.isScene!==!0&&(Z=an);const ae=O.get(w),se=L.state.lights,Ve=L.state.shadowsArray,Xe=se.state.version,Be=Ie.getParameters(w,se.state,Ve,Z,ce,L.state.lightProbeGridArray),Ye=Ie.getProgramCacheKey(Be);let qe=ae.programs;ae.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ae.envMap=$.get(w.envMap||ae.environment,$e),ae.envMapRotation=ae.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",Ue),qe=new Map,ae.programs=qe);let ht=qe.get(Ye);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Xe)return Ca(w,Be),ht}else Be.uniforms=Ie.getUniforms(w),q!==null&&w.isNodeMaterial&&q.build(w,ce,Be),w.onBeforeCompile(Be,k),ht=Ie.acquireProgram(Be,Ye),qe.set(Ye,ht),ae.uniforms=Be.uniforms;const Qe=ae.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Fe.uniform),Ca(w,Be),ae.needsLights=ds(w),ae.lightsStateVersion=Xe,ae.needsLights&&(Qe.ambientLightColor.value=se.state.ambient,Qe.lightProbe.value=se.state.probe,Qe.directionalLights.value=se.state.directional,Qe.directionalLightShadows.value=se.state.directionalShadow,Qe.spotLights.value=se.state.spot,Qe.spotLightShadows.value=se.state.spotShadow,Qe.rectAreaLights.value=se.state.rectArea,Qe.ltc_1.value=se.state.rectAreaLTC1,Qe.ltc_2.value=se.state.rectAreaLTC2,Qe.pointLights.value=se.state.point,Qe.pointLightShadows.value=se.state.pointShadow,Qe.hemisphereLights.value=se.state.hemi,Qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Qe.spotLightMatrix.value=se.state.spotLightMatrix,Qe.spotLightMap.value=se.state.spotLightMap,Qe.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=ht,ae.uniformsList=null,ht}function Yr(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=jc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Ca(w,Z){const ce=O.get(w);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function Zr(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;D.setFromMatrixPosition(Z.matrixWorld);for(let ce=0,ae=w.length;ce<ae;ce++){const se=w[ce];if(se.texture!==null&&se.boundingBox.containsPoint(D))return se}return null}function Na(w,Z,ce,ae,se){Z.isScene!==!0&&(Z=an),E.resetTextureUnits();const Ve=Z.fog,Xe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Be=W===null?k.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:wt.workingColorSpace,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,qe=$.get(ae.envMap||Xe,Ye),$e=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Qe=!!ce.morphAttributes.position,Lt=!!ce.morphAttributes.normal,sn=!!ce.morphAttributes.color;let Jt=Ki;ae.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Jt=k.toneMapping);const Ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Gt=Ht!==void 0?Ht.length:0,je=O.get(ae),Bn=L.state.lights;if(Dt===!0&&(ct===!0||w!==H)){const Bt=w===H&&ae.id===I;Fe.setState(ae,w,Bt)}let St=!1;ae.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bn.state.version||je.outputColorSpace!==Be||se.isBatchedMesh&&je.batching===!1||!se.isBatchedMesh&&je.batching===!0||se.isBatchedMesh&&je.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&je.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&je.instancing===!1||!se.isInstancedMesh&&je.instancing===!0||se.isSkinnedMesh&&je.skinning===!1||!se.isSkinnedMesh&&je.skinning===!0||se.isInstancedMesh&&je.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&je.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&je.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&je.instancingMorph===!1&&se.morphTexture!==null||je.envMap!==qe||ae.fog===!0&&je.fog!==Ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Fe.numPlanes||je.numIntersection!==Fe.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==ht||je.morphTargets!==Qe||je.morphNormals!==Lt||je.morphColors!==sn||je.toneMapping!==Jt||je.morphTargetsCount!==Gt||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,je.__version=ae.version);let Mn=je.currentProgram;St===!0&&(Mn=qs(ae,Z,se),q&&ae.isNodeMaterial&&q.onUpdateProgram(ae,Mn,je));let ii=!1,Ci=!1,ai=!1;const Vt=Mn.getUniforms(),rn=je.uniforms;if(Re.useProgram(Mn.program)&&(ii=!0,Ci=!0,ai=!0),ae.id!==I&&(I=ae.id,Ci=!0),je.needsLights){const Bt=Zr(L.state.lightProbeGridArray,se);je.lightProbeGrid!==Bt&&(je.lightProbeGrid=Bt,Ci=!0)}if(ii||H!==w){Re.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Vt.setValue(Y,"projectionMatrix",w.projectionMatrix),Vt.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Bi=Vt.map.cameraPosition;Bi!==void 0&&Bi.setValue(Y,zt.setFromMatrixPosition(w.matrixWorld)),bt.logarithmicDepthBuffer&&Vt.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Vt.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,Ci=!0,ai=!0)}if(je.needsLights&&(Bn.state.directionalShadowMap.length>0&&Vt.setValue(Y,"directionalShadowMap",Bn.state.directionalShadowMap,E),Bn.state.spotShadowMap.length>0&&Vt.setValue(Y,"spotShadowMap",Bn.state.spotShadowMap,E),Bn.state.pointShadowMap.length>0&&Vt.setValue(Y,"pointShadowMap",Bn.state.pointShadowMap,E)),se.isSkinnedMesh){Vt.setOptional(Y,se,"bindMatrix"),Vt.setOptional(Y,se,"bindMatrixInverse");const Bt=se.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Vt.setValue(Y,"boneTexture",Bt.boneTexture,E))}se.isBatchedMesh&&(Vt.setOptional(Y,se,"batchingTexture"),Vt.setValue(Y,"batchingTexture",se._matricesTexture,E),Vt.setOptional(Y,se,"batchingIdTexture"),Vt.setValue(Y,"batchingIdTexture",se._indirectTexture,E),Vt.setOptional(Y,se,"batchingColorTexture"),se._colorsTexture!==null&&Vt.setValue(Y,"batchingColorTexture",se._colorsTexture,E));const Ni=ce.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&it.update(se,ce,Mn),(Ci||je.receiveShadow!==se.receiveShadow)&&(je.receiveShadow=se.receiveShadow,Vt.setValue(Y,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(rn.envMapIntensity.value=Z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=e2()),Ci){if(Vt.setValue(Y,"toneMappingExposure",k.toneMappingExposure),je.needsLights&&Da(rn,ai),Ve&&ae.fog===!0&&de.refreshFogUniforms(rn,Ve),de.refreshMaterialUniforms(rn,ae,Ne,Ce,L.state.transmissionRenderTarget[w.id]),je.needsLights&&je.lightProbeGrid){const Bt=je.lightProbeGrid;rn.probesSH.value=Bt.texture,rn.probesMin.value.copy(Bt.boundingBox.min),rn.probesMax.value.copy(Bt.boundingBox.max),rn.probesResolution.value.copy(Bt.resolution)}jc.upload(Y,Yr(je),rn,E)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(jc.upload(Y,Yr(je),rn,E),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Vt.setValue(Y,"center",se.center),Vt.setValue(Y,"modelViewMatrix",se.modelViewMatrix),Vt.setValue(Y,"normalMatrix",se.normalMatrix),Vt.setValue(Y,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Bt=ae.uniformsGroups;for(let Bi=0,La=Bt.length;Bi<La;Bi++){const hs=Bt[Bi];pe.update(hs,Mn),pe.bind(hs,Mn)}}return Mn}function Da(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function ds(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,Z,ce){const ae=O.get(w);ae.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),O.get(w.texture).__webglTexture=Z,O.get(w.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ce=O.get(w);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const Ua=Y.createFramebuffer();this.setRenderTarget=function(w,Z=0,ce=0){W=w,le=Z,te=ce;let ae=null,se=!1,Ve=!1;if(w){const Be=O.get(w);if(Be.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(Y.FRAMEBUFFER,Be.__webglFramebuffer),oe.copy(w.viewport),_e.copy(w.scissor),Me=w.scissorTest,Re.viewport(oe),Re.scissor(_e),Re.setScissorTest(Me),I=-1;return}else if(Be.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Be.__hasExternalTextures)E.rebindTextures(w,O.get(w.texture).__webglTexture,O.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&O.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ve=!0);const qe=O.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[Z])?ae=qe[Z][ce]:ae=qe[Z],se=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?ae=O.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[ce]:ae=qe,oe.copy(w.viewport),_e.copy(w.scissor),Me=w.scissorTest}else oe.copy(Ae).multiplyScalar(Ne).floor(),_e.copy(Ge).multiplyScalar(Ne).floor(),Me=tt;if(ce!==0&&(ae=Ua),Re.bindFramebuffer(Y.FRAMEBUFFER,ae)&&Re.drawBuffers(w,ae),Re.viewport(oe),Re.scissor(_e),Re.setScissorTest(Me),se){const Be=O.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,ce)}else if(Ve){const Be=Z;for(let Ye=0;Ye<w.textures.length;Ye++){const qe=O.get(w.textures[Ye]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,ce,Be)}}else if(w!==null&&ce!==0){const Be=O.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Be.__webglTexture,ce)}I=-1},this.readRenderTargetPixels=function(w,Z,ce,ae,se,Ve,Xe,Be=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=O.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye){Re.bindFramebuffer(Y.FRAMEBUFFER,Ye);try{const qe=w.textures[Be],$e=qe.format,ht=qe.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Be),!bt.textureFormatReadable($e)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(ht)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ae&&ce>=0&&ce<=w.height-se&&Y.readPixels(Z,ce,ae,se,j.convert($e),j.convert(ht),Ve)}finally{const qe=W!==null?O.get(W).__webglFramebuffer:null;Re.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ce,ae,se,Ve,Xe,Be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=O.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye)if(Z>=0&&Z<=w.width-ae&&ce>=0&&ce<=w.height-se){Re.bindFramebuffer(Y.FRAMEBUFFER,Ye);const qe=w.textures[Be],$e=qe.format,ht=qe.type;if(w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Be),!bt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ve.byteLength,Y.STREAM_READ),Y.readPixels(Z,ce,ae,se,j.convert($e),j.convert(ht),0);const Lt=W!==null?O.get(W).__webglFramebuffer:null;Re.bindFramebuffer(Y.FRAMEBUFFER,Lt);const sn=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await _M(Y,sn,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ve),Y.deleteBuffer(Qe),Y.deleteSync(sn),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ce=0){const ae=Math.pow(2,-ce),se=Math.floor(w.image.width*ae),Ve=Math.floor(w.image.height*ae),Xe=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;E.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,Xe,Be,se,Ve),Re.unbindTexture()};const gn=Y.createFramebuffer(),al=Y.createFramebuffer();this.copyTextureToTexture=function(w,Z,ce=null,ae=null,se=0,Ve=0){let Xe,Be,Ye,qe,$e,ht,Qe,Lt,sn;const Jt=w.isCompressedTexture?w.mipmaps[Ve]:w.image;if(ce!==null)Xe=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Ye=ce.isBox3?ce.max.z-ce.min.z:1,qe=ce.min.x,$e=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const rn=Math.pow(2,-se);Xe=Math.floor(Jt.width*rn),Be=Math.floor(Jt.height*rn),w.isDataArrayTexture?Ye=Jt.depth:w.isData3DTexture?Ye=Math.floor(Jt.depth*rn):Ye=1,qe=0,$e=0,ht=0}ae!==null?(Qe=ae.x,Lt=ae.y,sn=ae.z):(Qe=0,Lt=0,sn=0);const Ht=j.convert(Z.format),Gt=j.convert(Z.type);let je;Z.isData3DTexture?(E.setTexture3D(Z,0),je=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(E.setTexture2DArray(Z,0),je=Y.TEXTURE_2D_ARRAY):(E.setTexture2D(Z,0),je=Y.TEXTURE_2D),Re.activeTexture(Y.TEXTURE0),Re.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Re.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Re.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const Bn=Re.getParameter(Y.UNPACK_ROW_LENGTH),St=Re.getParameter(Y.UNPACK_IMAGE_HEIGHT),Mn=Re.getParameter(Y.UNPACK_SKIP_PIXELS),ii=Re.getParameter(Y.UNPACK_SKIP_ROWS),Ci=Re.getParameter(Y.UNPACK_SKIP_IMAGES);Re.pixelStorei(Y.UNPACK_ROW_LENGTH,Jt.width),Re.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Jt.height),Re.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),Re.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),Re.pixelStorei(Y.UNPACK_SKIP_IMAGES,ht);const ai=w.isDataArrayTexture||w.isData3DTexture,Vt=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const rn=O.get(w),Ni=O.get(Z),Bt=O.get(rn.__renderTarget),Bi=O.get(Ni.__renderTarget);Re.bindFramebuffer(Y.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Re.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let La=0;La<Ye;La++)ai&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,O.get(w).__webglTexture,se,ht+La),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,O.get(Z).__webglTexture,Ve,sn+La)),Y.blitFramebuffer(qe,$e,Xe,Be,Qe,Lt,Xe,Be,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Re.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Re.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(se!==0||w.isRenderTargetTexture||O.has(w)){const rn=O.get(w),Ni=O.get(Z);Re.bindFramebuffer(Y.READ_FRAMEBUFFER,gn),Re.bindFramebuffer(Y.DRAW_FRAMEBUFFER,al);for(let Bt=0;Bt<Ye;Bt++)ai?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rn.__webglTexture,se,ht+Bt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,rn.__webglTexture,se),Vt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ni.__webglTexture,Ve,sn+Bt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ni.__webglTexture,Ve),se!==0?Y.blitFramebuffer(qe,$e,Xe,Be,Qe,Lt,Xe,Be,Y.COLOR_BUFFER_BIT,Y.NEAREST):Vt?Y.copyTexSubImage3D(je,Ve,Qe,Lt,sn+Bt,qe,$e,Xe,Be):Y.copyTexSubImage2D(je,Ve,Qe,Lt,qe,$e,Xe,Be);Re.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Re.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Vt?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(je,Ve,Qe,Lt,sn,Xe,Be,Ye,Ht,Gt,Jt.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,Ve,Qe,Lt,sn,Xe,Be,Ye,Ht,Jt.data):Y.texSubImage3D(je,Ve,Qe,Lt,sn,Xe,Be,Ye,Ht,Gt,Jt):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ve,Qe,Lt,Xe,Be,Ht,Gt,Jt.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ve,Qe,Lt,Jt.width,Jt.height,Ht,Jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ve,Qe,Lt,Xe,Be,Ht,Gt,Jt);Re.pixelStorei(Y.UNPACK_ROW_LENGTH,Bn),Re.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St),Re.pixelStorei(Y.UNPACK_SKIP_PIXELS,Mn),Re.pixelStorei(Y.UNPACK_SKIP_ROWS,ii),Re.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ci),Ve===0&&Z.generateMipmaps&&Y.generateMipmap(je),Re.unbindTexture()},this.initRenderTarget=function(w){O.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Re.unbindTexture()},this.resetState=function(){le=0,te=0,W=null,Re.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}typeof window<"u"&&(window.addEventListener("unhandledrejection",o=>{const e=o.reason;e&&(String(e).includes("WebSocket")||String(e.message||e).includes("websocket")||String(e.message||e).includes("vite")||String(e.message||e).includes("websocket connection"))&&(o.preventDefault(),o.stopPropagation())}),window.addEventListener("error",o=>{o.message&&(o.message.includes("WebSocket")||o.message.includes("websocket")||o.message.includes("vite"))&&(o.preventDefault(),o.stopPropagation())}));const kn=(o,e)=>window.fetch(o,e);function n2({theme:o}){const e=rt.useRef(null);return rt.useEffect(()=>{if(!e.current)return;const i=e.current.clientWidth,s=e.current.clientHeight,l=new LM;l.fog=new ep(o==="neon"?16007006:131589,.015);const c=new pi(60,i/s,.1,1e3);c.position.set(0,0,32);const d=new t2({antialias:!0,alpha:!0});d.setSize(i,s),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.innerHTML="",e.current.appendChild(d.domElement);const p=new Gs;l.add(p);let m=0,h=0;const S=A=>{m=(A.clientX-window.innerWidth/2)/180,h=(A.clientY-window.innerHeight/2)/180};window.addEventListener("mousemove",S);let v;const g=performance.now();if(o==="cosmic"){const A=new An,R=2e3,D=new Float32Array(R*3),F=new Float32Array(R*3);for(let te=0;te<R*3;te+=3)D[te]=(Math.random()-.5)*150,D[te+1]=(Math.random()-.5)*150,D[te+2]=(Math.random()-.5)*150,Math.random()>.5?(F[te]=0,F[te+1]=.9,F[te+2]=1):(F[te]=1,F[te+1]=.1,F[te+2]=.8);A.setAttribute("position",new wi(D,3)),A.setAttribute("color",new wi(F,3));const L=new Hx({size:.22,vertexColors:!0,transparent:!0,opacity:.95}),z=new XM(A,L);p.add(z);const b=new op(6,40,40),P=new Is({color:6514417,wireframe:!0,transparent:!0,opacity:.25}),k=new In(b,P);p.add(k);const G=new rp(8,10,64),q=new Is({color:440020,side:qi,wireframe:!0,transparent:!0,opacity:.35}),le=new In(G,q);le.rotation.x=Math.PI/2.3,p.add(le);for(let te=0;te<4;te++){const W=new ap(.5,1),I=new Is({color:64716,wireframe:!0}),H=new In(W,I);H.orbitRadius=11+te*2.5,H.orbitSpeed=.02+te*.01,p.add(H)}}else if(o==="neon"){const A=new X_(160,45,65484,16007006);A.position.y=-12,p.add(A);for(let R=0;R<24;R++){const D=Math.random();let F;D>.6?F=new ip(.1,1.8,6,4):D>.3?F=new sp(2):F=new lp(1.5,.4,6,12);const L=new Is({color:R%2===0?16007006:65484,wireframe:!0,transparent:!0,opacity:.8}),z=new In(F,L);z.position.set((Math.random()-.5)*90,Math.random()*25-5,(Math.random()-.5)*60),p.add(z)}}else if(o==="matrix")for(let R=0;R<75;R++){const D=Math.floor(Math.random()*6)+3,F=new Gs;for(let L=0;L<D;L++){const z=new Wr(.25,.25,.25),b=new Is({color:1096065,wireframe:!0,transparent:!0,opacity:1-L/D}),P=new In(z,b);P.position.y=L*.9,F.add(P)}F.position.set((Math.random()-.5)*85,Math.random()*50-25,(Math.random()-.5)*45),F.fallSpeed=.12+Math.random()*.18,p.add(F)}else for(let R=0;R<18;R++){const D=new cp(2.2,.61,64,8),F=new JM({wireframe:!0,transparent:!0,opacity:.6}),L=new In(D,F);L.position.set((Math.random()-.5)*75,(Math.random()-.5)*45,(Math.random()-.5)*40),p.add(L)}const M=new ib(16777215,.35);l.add(M);const T=new k_(16007006,2,80);T.position.set(20,15,10),l.add(T);const C=new k_(65484,2,80);C.position.set(-20,-15,10),l.add(C);const y=()=>{const A=(performance.now()-g)/1e3;c.position.x+=(m-c.position.x)*.05,c.position.y+=(-h-c.position.y)*.05,c.lookAt(l.position),T&&C&&(T.position.x=Math.sin(A*.8)*30,T.position.y=Math.cos(A*.6)*20,C.position.x=-Math.sin(A*.7)*30,C.position.y=-Math.cos(A*.9)*20),o==="cosmic"?(p.rotation.y=A*.05,p.rotation.x=A*.012,p.children.forEach(R=>{if(R.orbitRadius){const D=R.orbitRadius,F=R.orbitSpeed;R.position.x=Math.sin(A*F*10)*D,R.position.z=Math.cos(A*F*10)*D,R.rotation.y+=.02}})):o==="neon"?p.children.forEach((R,D)=>{R instanceof X_?R.position.z=A*15%40-20:R instanceof In&&(R.rotation.y+=.015,R.rotation.x+=.006,R.position.y+=Math.sin(A*1.5+D)*.022)}):o==="matrix"?p.children.forEach(R=>{if(R instanceof Gs){const D=R;D.position.y-=D.fallSpeed,D.position.y<-30&&(D.position.y=30,D.position.x=(Math.random()-.5)*85),D.rotation.y+=.005}}):p.children.forEach((R,D)=>{R instanceof In&&(R.rotation.x+=.015,R.rotation.y+=.012,R.position.y+=Math.sin(A*.8+D)*.028,R.position.x+=Math.cos(A*.4+D)*.012)}),d.render(l,c),v=requestAnimationFrame(y)};y();const x=()=>{if(!e.current)return;const A=e.current.clientWidth,R=e.current.clientHeight;c.aspect=A/R,c.updateProjectionMatrix(),d.setSize(A,R)};return window.addEventListener("resize",x),()=>{cancelAnimationFrame(v),window.removeEventListener("resize",x),window.removeEventListener("mousemove",S),d.dispose()}},[o]),U.jsx("div",{ref:e,className:"absolute inset-0 w-full h-full -z-20 overflow-hidden opacity-90 pointer-events-none"})}function Os({children:o,className:e="",id:i}){const s=rt.useRef(null),l=d=>{if(!s.current)return;const p=s.current,m=p.getBoundingClientRect(),h=d.clientX-m.left,S=d.clientY-m.top,v=m.width/2,g=m.height/2,M=-(S-g)/(m.height/15),T=(h-v)/(m.width/15);p.style.transform=`perspective(1000px) rotateX(${M}deg) rotateY(${T}deg) scale3d(1.02, 1.02, 1.02)`,p.style.borderColor="rgba(255, 255, 255, 0.25)",p.style.boxShadow="0 35px 65px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.15)"},c=()=>{if(!s.current)return;const d=s.current;d.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",d.style.borderColor="rgba(255, 255, 255, 0.08)",d.style.boxShadow="none"};return U.jsx("div",{ref:s,id:i,onMouseMove:l,onMouseLeave:c,className:`transition-all duration-300 ease-out border border-white/8 rounded-2xl bg-zinc-950/75 backdrop-blur-xl ${e}`,style:{transformStyle:"preserve-3d",transition:"transform 0.2s ease-out, border-color 0.3s, box-shadow 0.3s"},children:U.jsx("div",{style:{transform:"translateZ(18px)"},className:"w-full h-full",children:o})})}function i2(){const[o]=rt.useState(()=>{const ee=sessionStorage.getItem("justchat_user_id");if(ee)return ee;const Ue="u_"+Math.random().toString(36).substr(2,9);return sessionStorage.setItem("justchat_user_id",Ue),Ue}),[e,i]=rt.useState(()=>localStorage.getItem("justchat_age_verified")==="true"),[s,l]=rt.useState(!1),[c,d]=rt.useState(()=>localStorage.getItem("justchat_username")||"Anonymous Human"),[p,m]=rt.useState(!1),[h,S]=rt.useState(null),[v,g]=rt.useState(!1),[M,T]=rt.useState(!1),[C,y]=rt.useState(["gaming","music","coding"]),[x,A]=rt.useState(""),[R,D]=rt.useState("cosmic"),[F,L]=rt.useState(!1),[z,b]=rt.useState("idle"),[P,k]=rt.useState("✌️ Peace Sign"),[G,q]=rt.useState(null),[le,te]=rt.useState("idle"),[W,I]=rt.useState(4),[H,oe]=rt.useState(null),[_e,Me]=rt.useState(null),[B,J]=rt.useState(!1),[xe,Ce]=rt.useState(null),[Ne,re]=rt.useState(null),[be,Ae]=rt.useState(!0),[Ge,tt]=rt.useState(!0),[Je,Dt]=rt.useState([]),[ct,xt]=rt.useState(""),[zt,ot]=rt.useState(!1),[an,Wt]=rt.useState("Harassment"),[mn,Y]=rt.useState(""),[en,mt]=rt.useState(!1),bt=rt.useRef(null),Re=rt.useRef(null),Qt=rt.useRef(null),O=rt.useRef(null),E=ee=>{d(ee),localStorage.setItem("justchat_username",ee)},$=async()=>{try{const ee=await navigator.mediaDevices.getUserMedia({video:{width:480,height:360,facingMode:"user"},audio:!0});Ce(ee),bt.current&&(bt.current.srcObject=ee)}catch(ee){console.warn("Camera/Mic not permitted. Generating virtual camera overlay.",ee),ve()}},ve=()=>{const ee=document.createElement("canvas");ee.width=300,ee.height=200;const Ue=ee.getContext("2d");if(Ue){let ut=0;setInterval(()=>{Ue.fillStyle="#0a0a0a",Ue.fillRect(0,0,300,200),Ue.fillStyle="#10b981";for(let qt=0;qt<15;qt++){const Dn=Math.sin(ut+qt)*100+150,lt=Math.cos(ut*.5+qt*2)*60+100;Ue.beginPath(),Ue.arc(Dn,lt,3,0,Math.PI*2),Ue.fill()}Ue.strokeStyle="#27272a",Ue.lineWidth=1,Ue.strokeRect(10,10,280,180),Ue.fillStyle="#e4e4e7",Ue.font="10px monospace",Ue.fillText("Secure Handshake Cam [Active]",20,30),Ue.fillText("Verified Human User",20,180),Ue.fillText(new Date().toLocaleTimeString(),190,180),ut+=.03},50)}const me=ee.captureStream(30);Ce(me),bt.current&&(bt.current.srcObject=me)},Te=ee=>{window._remoteSimIntervalId&&clearInterval(window._remoteSimIntervalId);const Ue=document.createElement("canvas");Ue.width=480,Ue.height=365;const me=Ue.getContext("2d");if(!me)return null;let ut=0;const qt=setInterval(()=>{if(me.fillStyle="#050508",me.fillRect(0,0,480,365),ee==="sim_sam"){me.strokeStyle="#06b6d4",me.lineWidth=1,me.beginPath();for(let lt=0;lt<480;lt+=30)me.moveTo(lt,0),me.lineTo(lt+Math.sin(ut)*10,365);me.stroke(),me.fillStyle="#10b981",me.font="12px monospace",me.fillText("⚡ CyberSam PEER FEED",20,40),me.fillText("STATUS: STREAM SYNCHRONIZED",20,60),me.fillText("LATENCY: 8ms CONNECTED",20,80),me.strokeStyle="#10b981",me.lineWidth=2,me.beginPath();for(let lt=0;lt<480;lt++){const Rn=180+Math.sin(lt*.05+ut)*20;lt===0?me.moveTo(lt,Rn):me.lineTo(lt,Rn)}me.stroke()}else if(ee==="sim_luna"){me.fillStyle="#030712",me.fillRect(0,0,480,365),me.fillStyle="#ffffff";for(let lt=0;lt<20;lt++){const Rn=Math.sin(lt*99+ut*.2)*240+240,_i=Math.cos(lt*45+ut*.1)*180+180,wn=Math.abs(Math.sin(ut+lt))*3;me.beginPath(),me.arc(Rn,_i,wn,0,Math.PI*2),me.fill()}me.fillStyle="#c084fc",me.font="12px monospace",me.fillText("🌌 LunaGamer Cosmic Feed",20,40),me.fillText("VIBE STATUS: ROTATING IN ORBIT",20,60),me.strokeStyle="#818cf8",me.lineWidth=3,me.beginPath();for(let lt=0;lt<480;lt++){const Rn=220+Math.cos(lt*.02-ut)*30+Math.sin(lt*.07+ut)*10;lt===0?me.moveTo(lt,Rn):me.lineTo(lt,Rn)}me.stroke()}else if(ee==="sim_matrix"){me.fillStyle="#000000",me.fillRect(0,0,480,365),me.fillStyle="#10b981",me.font="12px monospace",me.fillText("🕶️ NEOPIONEER STREAM FEED",20,40),me.fillText("SECURE SIGNAL: DECRYPTED",20,60);for(let lt=0;lt<20;lt++){const Rn=lt*24+10,_i=(lt*77+ut*250)%400-30;me.fillStyle="rgba(16, 185, 129, 0.9)",me.fillText(Math.random()>.5?"1":"0",Rn,_i),me.fillStyle="rgba(16, 185, 129, 0.3)",me.fillText(Math.random()>.5?"1":"0",Rn,_i-15)}}else{me.fillStyle="#110505",me.fillRect(0,0,480,365),me.fillStyle="#f43f5e",me.font="12px monospace",me.fillText("🍷 SOPHIEVIBE LOUNGE FEED",20,40),me.fillText("STATUS: CHAMPAGNE & JAZZ",20,60);for(let lt=0;lt<8;lt++){const Rn=(lt*65+Math.sin(ut+lt)*30)%480,_i=365-(ut*40+lt*80)%400;me.fillStyle="rgba(244, 63, 94, 0.2)",me.beginPath(),me.arc(Rn,_i,20+lt,0,Math.PI*2),me.fill()}}me.strokeStyle="rgba(255, 255, 255, 0.1)",me.lineWidth=1,me.strokeRect(10,10,460,345),ut+=.06},50);window._remoteSimIntervalId=qt;const Dn=Ue.captureStream(30);return re(Dn),Re.current&&(Re.current.srcObject=Dn),qt};rt.useEffect(()=>{bt.current&&xe&&(bt.current.srcObject=xe)},[xe,le,G]),rt.useEffect(()=>{Re.current&&Ne&&(Re.current.srcObject=Ne)},[Ne,le,G]);const Le=()=>{xe&&(xe.getVideoTracks().forEach(ee=>{ee.enabled=!ee.enabled}),Ae(!be))},Ie=()=>{xe&&(xe.getAudioTracks().forEach(ee=>{ee.enabled=!ee.enabled}),tt(!Ge))};rt.useEffect(()=>{if(!e)return;const ee=setInterval(async()=>{try{const Ue=await kn("/api/status",{headers:{"x-user-id":o}});if(Ue.status===403){J(!0),te("idle");return}const me=await Ue.json();I(me.onlineCount||1),Ue.ok&&(me.status==="active"&&me.room?(Me(me.room.id),oe(me.partner),te("active"),Fe(),G==="video"&&(me.partner&&me.partner.id.startsWith("sim_")?!Ne&&!window._remoteSimIntervalId&&Te(me.partner.id):O.current||de(me.room.role))):me.status==="matching"?(le==="active"&&(We("Partner skipped or disconnected. Finding a new partner..."),Oe()),te("matching"),Me(null),oe(null),re(null)):le==="active"?(We("Peer terminated conversation session."),Oe(),te("idle"),Me(null),oe(null),re(null)):le!=="matching"&&(te("idle"),Me(null),oe(null),re(null)))}catch(Ue){console.error("Poller status failure:",Ue)}},1500);return()=>clearInterval(ee)},[e,le,o,G,xe,Ne]),rt.useEffect(()=>{if(le!=="matching"||!G)return;const ee=setInterval(async()=>{try{console.log(`[Queue] Checking matchmaking candidates for mode: ${G}`);const me=await(await kn("/api/match",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({interests:C,chatMode:G})})).json();me.state==="matched"&&me.room&&(Me(me.room.id),te("active"),We("Secure match established successfully!"))}catch(Ue){console.warn("Queue loop scan fail:",Ue)}},3e3);return()=>clearInterval(ee)},[le,o,C,G]);const de=async ee=>{try{console.log(`[WebRTC] Set up signaling peer as ${ee}`);const Ue={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},me=new RTCPeerConnection(Ue);if(O.current=me,xe&&xe.getTracks().forEach(ut=>{me.addTrack(ut,xe)}),me.ontrack=ut=>{ut.streams&&ut.streams[0]&&(console.log("[WebRTC] Got Remote stream tracks."),re(ut.streams[0]),Re.current&&(Re.current.srcObject=ut.streams[0]))},me.onicecandidate=async ut=>{ut.candidate&&await kn("/api/signal/send",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({ice:ut.candidate,role:ee})})},ee==="host"){const ut=await me.createOffer();await me.setLocalDescription(ut),await kn("/api/signal/send",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({sdp:ut,role:ee})})}he(ee)}catch(Ue){console.error("[WebRTC] WebRTC startup error:",Ue)}},he=ee=>{const Ue=setInterval(async()=>{const me=O.current;if(!me||le!=="active"){clearInterval(Ue);return}try{const qt=await(await kn(`/api/signal/poll?role=${ee}`,{headers:{"x-user-id":o}})).json();if(qt.sdp)if(ee==="guest"&&!me.remoteDescription){await me.setRemoteDescription(new RTCSessionDescription(qt.sdp));const Dn=await me.createAnswer();await me.setLocalDescription(Dn),await kn("/api/signal/send",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({sdp:Dn,role:ee})})}else ee==="host"&&!me.remoteDescription&&await me.setRemoteDescription(new RTCSessionDescription(qt.sdp));if(qt.ice&&qt.ice.length>0)for(const Dn of qt.ice)try{await me.addIceCandidate(new RTCIceCandidate(Dn))}catch{}}catch(ut){console.warn("Signaling poll failed:",ut)}},1500)},Oe=()=>{O.current&&(O.current.close(),O.current=null),window._remoteSimIntervalId&&(clearInterval(window._remoteSimIntervalId),window._remoteSimIntervalId=null),re(null)},Fe=async()=>{try{const Ue=await(await kn("/api/chat/messages",{headers:{"x-user-id":o}})).json();Ue.messages&&(Dt(Ue.messages),Ee())}catch(ee){console.warn("Message sync fail:",ee)}},Pe=async ee=>{if(!B){if(!e){S(ee),m(!0);return}try{q(ee),te("matching"),Dt([]),oe(null),Me(null),Oe(),ee==="video"&&await $(),await kn("/api/match",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({interests:C,chatMode:ee})})}catch(Ue){console.error("Match init failure:",Ue),te("idle"),q(null)}}},De=async()=>{try{te("matching"),oe(null),Me(null),Dt([]),Oe(),await kn("/api/skip",{method:"POST",headers:{"x-user-id":o}}),await kn("/api/match",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({interests:C,chatMode:G})}),We("Skipped partner. Finding a new partner...")}catch(ee){console.warn("Skip room action fail:",ee)}},it=async()=>{try{te("idle"),q(null),Me(null),oe(null),Dt([]),Oe(),await kn("/api/end",{method:"POST",headers:{"x-user-id":o}})}catch(ee){console.warn("End action request failing:",ee)}},st=async()=>{try{te("idle"),q(null),Me(null),oe(null),Oe(),await kn("/api/disconnect",{method:"POST",headers:{"x-user-id":o}})}catch(ee){console.warn("Cancel fail:",ee)}},vt=async ee=>{if(ee.preventDefault(),!(!ct.trim()||!_e))try{const Ue=ct;xt(""),(await kn("/api/chat/send",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({text:Ue})})).ok&&Fe()}catch(Ue){console.warn("Message send error:",Ue)}},j=async()=>{if(H)try{(await kn("/api/report",{method:"POST",headers:{"Content-Type":"application/json","x-user-id":o},body:JSON.stringify({reportedUserId:H.id,reason:an,details:mn})})).ok&&(mt(!0),setTimeout(()=>{mt(!1),ot(!1),De()},2200))}catch(ee){console.error("Report process failed:",ee)}},we=async()=>{if(!s){alert("You must agree to the community guidelines and terms.");return}const ee=c.trim()||"Anonymous Human";try{const Ue=await kn("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,name:ee,ageVerified:!0,verified:F,interests:C})});Ue.ok?(localStorage.setItem("justchat_age_verified","true"),i(!0),m(!1),h&&(Pe(h),S(null))):(await Ue.json()).error==="BANNED"&&J(!0)}catch(Ue){console.error("Gateway registration error:",Ue)}},pe=()=>{b("scanning"),setTimeout(()=>{b("verified"),L(!0),kn("/api/verify",{method:"POST",headers:{"x-user-id":o}}).catch(ee=>console.warn(ee))},2500)},He=ee=>{ee.preventDefault();const Ue=x.trim().toLowerCase();Ue&&!C.includes(Ue)&&(y([...C,Ue]),A(""))},ze=ee=>{y(C.filter(Ue=>Ue!==ee))},Ee=()=>{setTimeout(()=>{var ee;(ee=Qt.current)==null||ee.scrollIntoView({behavior:"smooth"})},50)},We=ee=>{Dt(Ue=>[...Ue,{id:`sys_${Date.now()}`,sender:"system",text:ee,time:Date.now()}]),Ee()};return U.jsxs("div",{className:"relative min-h-screen flex flex-col justify-between text-zinc-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#09091b] via-[#020206] to-[#000000] font-sans antialiased overflow-x-hidden select-none",children:[U.jsx(n2,{theme:R}),B&&U.jsx("div",{className:"fixed inset-0 bg-[#020206]/95 flex flex-col items-center justify-center p-4 z-50 text-center",children:U.jsxs(Os,{className:"max-w-md bg-zinc-950/80 border border-red-500/20 p-6 rounded-2xl shadow-2xl",children:[U.jsx(Ay,{className:"w-12 h-12 text-red-500 mx-auto mb-3 animate-pulse"}),U.jsx("h1",{className:"text-lg font-mono font-bold text-red-400 uppercase tracking-widest mb-2",children:"Access Suspended"}),U.jsx("p",{className:"text-zinc-405 text-xs mb-4 leading-relaxed",children:"Your session has been terminated by our moderation patrol system due to behavior report validation."}),U.jsxs("div",{className:"text-[9px] text-zinc-400 bg-black/60 p-2.5 rounded border border-white/10 font-mono",children:["SESSION PIN: ",o]})]})}),p&&!B&&U.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-40 animate-fade-in",children:U.jsxs(Os,{className:"w-full max-w-md p-6 relative bg-zinc-950/80 border border-white/10 shadow-2xl rounded-2xl",children:[U.jsx("div",{className:"absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-500"}),U.jsxs("div",{className:"text-center mb-5",children:[U.jsx("span",{className:"px-2.5 py-0.5 bg-white/5 text-zinc-300 border border-white/10 text-[9px] font-bold rounded uppercase tracking-wider font-mono",children:"Security Shield Active"}),U.jsx("h1",{className:"text-xl font-bold font-mono tracking-tight mt-3 text-zinc-100",children:"Age Verification Gate"}),U.jsxs("p",{className:"text-[10px] text-zinc-400 mt-1",children:["Please confirm you meet the age requirements to enter ",h==="video"?"Video Call":"Text Chat","."]})]}),U.jsxs("div",{className:"space-y-4",children:[U.jsxs("div",{className:"space-y-1",children:[U.jsx("label",{className:"text-[9px] font-bold uppercase tracking-wider text-zinc-400 block font-mono",children:"Confirm Alias / Nickname"}),U.jsx("input",{type:"text",placeholder:"Anonymous User",value:c,onChange:ee=>E(ee.target.value),className:"w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-xs font-mono text-zinc-200"})]}),U.jsxs("div",{className:"space-y-3 p-3.5 bg-black/40 border border-white/5 rounded-xl",children:[U.jsx("span",{className:"text-[9px] font-bold text-zinc-400 uppercase tracking-widest block font-mono",children:"Age & policy agreement"}),U.jsxs("label",{className:"flex items-start gap-2.5 cursor-pointer select-none",children:[U.jsx("input",{type:"checkbox",checked:s,onChange:ee=>l(ee.target.checked),className:"mt-1 accent-teal-400 cursor-pointer h-4 w-4"}),U.jsxs("span",{className:"text-[11px] text-zinc-300 leading-relaxed font-sans",children:["I verify that ",U.jsx("strong",{className:"text-teal-400",children:"I am at least 18 years of age"})," and I legally consent and agree to the ",U.jsx("button",{onClick:ee=>{ee.preventDefault(),T(!0)},className:"text-teal-400 underline hover:text-teal-300",children:"Terms & Conditions"})," and community safety protocols."]})]}),U.jsx("p",{className:"text-[10px] text-zinc-500 font-serif leading-relaxed italic border-t border-white/5 pt-2",children:"JustChat requires all participants to be 18+. Any explicit, harassing, or synthetic activities will result in immediate state bans."})]}),U.jsxs("div",{className:"flex gap-4 justify-center text-[11px] font-mono py-1",children:[U.jsx("button",{onClick:()=>g(!0),className:"text-zinc-400 hover:text-white underline",children:"About Us →"}),U.jsx("button",{onClick:()=>T(!0),className:"text-zinc-400 hover:text-white underline",children:"Terms & Conditions →"})]}),U.jsxs("div",{className:"flex gap-2",children:[U.jsx("button",{onClick:()=>{m(!1),S(null)},className:"flex-1 px-4 py-2.5 bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-semibold rounded-lg font-mono transition tracking-wider cursor-pointer hover:bg-zinc-800",children:"Cancel"}),U.jsx("button",{onClick:we,className:"flex-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-500 hover:brightness-110 text-black font-bold py-2.5 rounded-lg text-xs transition tracking-wider cursor-pointer font-mono",children:"Confirm & Match →"})]})]}),U.jsxs("div",{className:"mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[9px] text-zinc-500 font-mono",children:[U.jsx("span",{children:"HOST: SECURE PORT 3000"}),U.jsx("span",{children:"STANDARDS COMPLIANT"})]})]})}),!B&&G===null&&U.jsxs("div",{className:"flex-1 w-full max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center items-center gap-8 min-h-[calc(100vh-120px)] animate-fade-in",id:"homepage_container",children:[U.jsxs("div",{className:"text-center space-y-2 max-w-lg",children:[U.jsx("span",{className:"px-2.5 py-1 bg-white/5 border border-white/10 text-teal-400 font-bold text-[9px] rounded-full uppercase tracking-widest font-mono shadow-sm shadow-teal-500/10",children:"⚡ WebRTC Hyper-Space Active"}),U.jsx("h1",{className:"text-5xl sm:text-6xl font-bold tracking-tight text-white font-mono bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-250 to-zinc-400",children:"JustChat"}),U.jsx("p",{className:"text-xs sm:text-sm text-zinc-400 font-light max-w-md mx-auto",children:"Dynamic matching on encrypted streams. Pick a connection protocol and align tag parameters to peer with the space."})]}),U.jsxs(Os,{className:"w-full max-w-2xl p-5 sm:p-6 shadow-2xl space-y-6 bg-zinc-950/80 border border-white/8 backdrop-blur-xl relative overflow-hidden rounded-2xl",children:[U.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"}),U.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl",children:[U.jsxs("div",{className:"space-y-0.5",children:[U.jsx("span",{className:"text-[9px] font-bold text-zinc-500 uppercase font-mono",children:"Your Alias Profile"}),U.jsxs("p",{className:"text-sm font-semibold font-mono text-zinc-100 flex items-center gap-1.5",children:[U.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-400 animate-ping absolute"}),U.jsx("span",{className:"h-2 w-2 rounded-full bg-emerald-500 relative"}),c||"Anonymous Participant"]})]}),U.jsx("div",{className:"flex items-center gap-2",children:U.jsx("input",{type:"text",placeholder:"Set Nickname...",value:c,onChange:ee=>E(ee.target.value),className:"px-3 py-1.5 bg-black/60 border border-white/10 rounded-lg text-xs font-mono text-zinc-200 focus:outline-none focus:border-white/30"})})]}),U.jsxs("div",{className:"space-y-3",children:[U.jsxs("div",{className:"flex items-center justify-between",children:[U.jsxs("span",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 font-mono",children:[U.jsx(Ly,{className:"w-3.5 h-3.5 text-teal-400"})," Match Interests & Tags"]}),U.jsx("span",{className:"text-[9px] text-zinc-500 font-mono",children:"Shared intersections prioritized"})]}),U.jsxs("div",{className:"flex flex-wrap gap-1.5 min-h-[40px] p-2.5 bg-black/40 border border-white/5 rounded-xl",children:[C.map(ee=>U.jsxs("span",{className:"inline-flex items-center bg-white/5 border border-white/10 rounded-lg px-2.5 py-0.5 text-xs text-zinc-205 font-mono gap-1 hover:border-white/20 transition-all shadow-sm",children:[U.jsx("span",{className:"text-teal-400",children:"#"}),U.jsx("span",{children:ee}),U.jsx("button",{onClick:()=>ze(ee),className:"p-0.5 hover:bg-white/10 rounded text-zinc-500 hover:text-red-400 cursor-pointer",children:U.jsx(Ho,{className:"w-2.5 h-2.5"})})]},ee)),C.length===0&&U.jsx("span",{className:"text-[10px] text-zinc-500 italic font-mono p-1",children:"No interest tags configured. Swiping global pools."})]}),U.jsxs("form",{onSubmit:He,className:"flex gap-2",children:[U.jsx("input",{type:"text",placeholder:"Enter tags (e.g., coding, lofi, gaming, travel, music)...",value:x,onChange:ee=>A(ee.target.value),className:"flex-1 px-3 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-xs font-mono text-zinc-200",id:"tag_creator_input"}),U.jsx("button",{type:"submit",className:"px-4 bg-white/10 border border-white/10 font-bold hover:bg-white/20 text-zinc-100 text-xs rounded-lg transition font-mono cursor-pointer",children:"Add Tag"})]})]}),U.jsxs("div",{className:"space-y-3 pt-2",children:[U.jsx("span",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono",children:"Choose Matching Protocol"}),U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[U.jsxs("div",{onClick:()=>Pe("video"),className:"p-5 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 hover:border-teal-400/40 hover:from-white/10 transition-all duration-300 text-left relative cursor-pointer group shadow-lg",children:[U.jsxs("div",{className:"flex items-center justify-between mb-3",children:[U.jsx("div",{className:"w-9 h-9 bg-white/10 flex items-center justify-center rounded-lg text-teal-400 border border-white/10 group-hover:bg-teal-400 group-hover:text-black transition",children:U.jsx(l_,{className:"w-4.5 h-4.5"})}),U.jsx("span",{className:"text-[8px] border border-white/10 text-teal-400 bg-black/60 px-2 py-0.5 rounded-full uppercase font-bold font-mono group-hover:border-teal-400/30 transition",children:"WebRTC cam"})]}),U.jsx("h3",{className:"text-sm font-bold font-mono text-white mb-1",children:"Start Video Chat"}),U.jsx("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:"Match with human peers over an interactive encrypted streaming video channel feed."})]}),U.jsxs("div",{onClick:()=>Pe("text"),className:"p-5 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.01] border border-white/10 hover:border-indigo-400/40 hover:from-white/10 transition-all duration-300 text-left relative cursor-pointer group shadow-lg",children:[U.jsxs("div",{className:"flex items-center justify-between mb-3",children:[U.jsx("div",{className:"w-9 h-9 bg-white/10 flex items-center justify-center rounded-lg text-indigo-400 border border-white/10 group-hover:bg-indigo-400 group-hover:text-black transition",children:U.jsx(pd,{className:"w-4.5 h-4.5"})}),U.jsx("span",{className:"text-[8px] border border-white/10 text-indigo-400 bg-black/60 px-2 py-0.5 rounded-full uppercase font-bold font-mono group-hover:border-indigo-400/30 transition",children:"No Webcam"})]}),U.jsx("h3",{className:"text-sm font-bold font-mono text-white mb-1",children:"Start Text Chat"}),U.jsx("p",{className:"text-[10px] text-zinc-400 leading-normal font-sans",children:"Plain, elegant messaging chat space. Communicate safely using text log transmissions."})]})]})]}),U.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pt-4 border-t border-white/5",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("span",{className:"text-[9px] text-zinc-405 font-mono font-bold uppercase tracking-wider",children:"3D Hologram:"}),U.jsx("div",{className:"flex gap-1.5",children:["cosmic","neon","matrix","lounge"].map(ee=>U.jsx("button",{onClick:()=>D(ee),className:`px-3 py-1 text-[9px] font-bold rounded-full uppercase tracking-wider transition-all font-mono border cursor-pointer ${R===ee?"bg-white text-black border-white shadow-md":"bg-black/50 border-white/15 text-zinc-400 hover:text-white hover:border-white/30"}`,children:ee},ee))})]}),U.jsxs("button",{onClick:()=>b(F?"verified":"pose_prompt"),className:`py-1.5 px-3 border rounded-lg text-[10px] font-bold font-mono flex items-center justify-center gap-1.5 transition cursor-pointer ${F?"bg-emerald-950/20 border-emerald-500/30 text-emerald-400 shadow-md shadow-emerald-500/10":"bg-white/5 hover:bg-white/10 border-white/10 text-zinc-350"}`,children:[U.jsx(s_,{className:`w-3.5 h-3.5 ${F?"text-emerald-400":"text-zinc-500"}`}),U.jsx("span",{children:F?"VERIFIED HUMAN":"PROOF HUMAN POSE"})]})]})]}),U.jsxs("div",{className:"flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-mono select-none shadow-sm backdrop-blur-md",children:[U.jsxs("span",{className:"relative flex h-2 w-2",children:[U.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),U.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),U.jsxs("span",{className:"text-zinc-350 font-semibold",children:[W," users online roomed"]})]})]}),e&&!B&&G!==null&&U.jsxs("header",{className:"bg-[#0F0F0F] border-b border-[#1F1F1F] px-4 py-2.5 flex items-center justify-between sticky top-0 z-30 shadow-sm animate-fade-in",children:[U.jsxs("div",{className:"flex items-center gap-2.5",children:[U.jsx("div",{className:"w-7 h-7 bg-zinc-200 flex items-center justify-center rounded",children:U.jsx(pd,{className:"w-3.5 h-3.5 text-zinc-950"})}),U.jsx("div",{children:U.jsxs("div",{className:"flex items-center gap-1.5",children:[U.jsx("span",{className:"font-bold text-sm tracking-tight text-zinc-150 font-mono",children:"JustChat"}),U.jsxs("span",{className:"text-[8px] bg-zinc-805 border border-zinc-750 text-zinc-400 font-bold px-1.5 py-0.2 rounded uppercase font-mono",children:[G," chat"]})]})})]}),U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-1 bg-[#141414] border border-[#1F1F1F] rounded text-[10px] font-medium font-mono",children:[U.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-emerald-500"}),U.jsx("span",{className:"text-zinc-300 font-bold",children:W}),U.jsx("span",{className:"text-zinc-550",children:"users online"})]}),F&&U.jsx("span",{className:"px-2 py-1 bg-emerald-955/25 border border-emerald-900/30 text-emerald-400 text-[9px] font-bold font-mono rounded",children:"VERIFIED HUMAN"})]})]}),e&&!B&&G!==null&&U.jsxs("main",{className:"flex-1 w-full max-w-7xl mx-auto p-3 grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch relative min-h-[calc(100vh-140px)] animate-fade-in",children:[le==="matching"&&U.jsxs("div",{className:"lg:col-span-12 flex flex-col items-center justify-center gap-6 my-16 text-center animate-fade-in",id:"queue_loading_viewport",children:[U.jsxs("div",{className:"relative",children:[U.jsx("div",{className:"absolute inset-x-0 -top-4 -bottom-4 bg-teal-500/10 blur-xl rounded-full scale-125 animate-pulse"}),U.jsx("div",{className:"relative flex items-center justify-center w-24 h-24 bg-zinc-950/80 border border-teal-500/25 rounded-full shadow-2xl",children:U.jsx(r_,{className:"w-10 h-10 text-teal-400 animate-spin",style:{animationDuration:"3s"}})})]}),U.jsxs("div",{className:"space-y-2 max-w-md",children:[U.jsx("h3",{className:"text-lg font-bold font-mono tracking-tight text-teal-400 animate-pulse",children:"Connecting to partner..."}),U.jsxs("p",{className:"text-xs text-zinc-300 font-medium",children:["Searching for available matching peers for ",G==="video"?"Video Call":"Text Chat","..."]}),U.jsx("p",{className:"text-[10px] text-zinc-500 uppercase tracking-widest font-mono",children:"Running secure tag overlap scanners"}),C.length>0&&U.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center mt-3",children:C.map(ee=>U.jsxs("span",{className:"text-[9px] bg-black/40 border border-white/5 text-zinc-400 px-2 py-0.5 rounded-full font-mono font-medium",children:["#",ee]},ee))})]}),U.jsxs("div",{className:"flex flex-col gap-2 items-center",children:[U.jsx("p",{className:"text-[10px] text-zinc-450 font-mono",children:"Instant mock matches will activate if queue is quiet."}),U.jsx("button",{onClick:st,className:"px-5 py-2.5 bg-red-955/20 hover:bg-red-955/40 border border-red-900/30 text-red-400 text-xs font-bold rounded-lg font-mono transition tracking-wider cursor-pointer shadow-lg hover:shadow-red-950/20",children:"Cancel Matching Session →"})]})]}),le==="active"&&U.jsxs(U.Fragment,{children:[G==="video"&&U.jsxs("section",{className:"lg:col-span-7 flex flex-col gap-3",children:[U.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 min-h-[280px]",children:[U.jsxs(Os,{className:"bg-zinc-950/80 border border-white/10 p-3 relative flex flex-col items-center justify-between shadow-2xl overflow-hidden min-h-[220px] rounded-xl",children:[U.jsxs("div",{className:"absolute top-2.5 left-2.5 z-10 flex items-center gap-1",children:[U.jsx("span",{className:"px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-350 text-[8px] font-bold font-mono rounded uppercase",children:"You"}),F&&U.jsx("span",{className:"bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono px-1 py-0.5 rounded",children:"VERIFIED"})]}),U.jsx("div",{className:"absolute top-2.5 right-2.5 z-10",children:U.jsxs("span",{className:"px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-500 text-[8px] font-bold font-mono rounded uppercase",children:["Theme: ",R]})}),U.jsxs("div",{className:"w-full h-full flex items-center justify-center bg-black/40 rounded overflow-hidden relative border border-white/5",children:[U.jsx("video",{ref:bt,autoPlay:!0,playsInline:!0,muted:!0,className:`w-full h-full object-cover ${be?"scale-x-[-1]":"hidden"}`}),(!be||!xe)&&U.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-zinc-650 text-[10px] font-mono",children:[U.jsx(o_,{className:"w-6 h-6 mb-1 text-zinc-600"}),U.jsx("span",{children:"Your camera feeds offline"})]})]}),U.jsxs("div",{className:"w-full flex items-center justify-between mt-2.5 text-[9px] font-mono text-zinc-500",children:[U.jsx("span",{children:"Handshake cam: secure"}),U.jsxs("div",{className:"flex gap-1",children:[U.jsx("button",{onClick:Ie,className:`p-1 rounded border transition cursor-pointer ${Ge?"bg-black/60 hover:bg-white/10 border-white/15 text-zinc-300":"bg-red-950/30 border-red-900/40 text-red-400"}`,title:Ge?"Mute Microphone":"Unmute Microphone",children:Ge?U.jsx(Ey,{className:"w-3.5 h-3.5"}):U.jsx(My,{className:"w-3.5 h-3.5"})}),U.jsx("button",{onClick:Le,className:`p-1 rounded border transition cursor-pointer ${be?"bg-black/60 hover:bg-white/10 border-white/15 text-zinc-300":"bg-red-950/30 border-red-900/40 text-red-400"}`,title:be?"Mute Video":"Unmute Video",children:be?U.jsx(l_,{className:"w-3.5 h-3.5"}):U.jsx(o_,{className:"w-3.5 h-3.5"})})]})]})]}),U.jsxs(Os,{className:"bg-zinc-950/80 border border-white/10 p-3 relative flex flex-col items-center justify-between shadow-2xl overflow-hidden min-h-[220px] rounded-xl",children:[U.jsxs("div",{className:"absolute top-2.5 left-2.5 z-10 flex items-center gap-1",children:[U.jsx("span",{className:"px-1.5 py-0.5 bg-black/60 border border-white/10 text-zinc-350 text-[8px] font-bold font-mono rounded uppercase",children:"Partner"}),(H==null?void 0:H.verified)&&U.jsx("span",{className:"inline-flex items-center gap-1 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono px-1.5 py-0.5 rounded",children:"VERIFIED HUMAN"})]}),H&&U.jsx("div",{className:"absolute top-2.5 right-2.5 z-10",children:U.jsx("div",{className:"flex gap-1.5",children:H.interests.slice(0,2).map((ee,Ue)=>U.jsxs("span",{className:"bg-black/60 border border-white/10 text-zinc-400 text-[8px] px-1.5 py-0.5 font-bold font-mono rounded",children:["#",ee]},Ue))})}),U.jsx("div",{className:"w-full h-full flex items-center justify-center bg-black/40 rounded overflow-hidden relative border border-white/5",children:Ne?U.jsx("video",{ref:Re,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover"}):U.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-zinc-650 text-[10px] font-mono text-center p-4",children:[U.jsx("span",{className:"animate-pulse flex h-2 w-2 rounded-full bg-orange-400 mb-2"}),U.jsx("p",{className:"font-semibold text-zinc-400",children:"Negotiating WebRTC links..."}),U.jsx("p",{className:"text-[8px] text-zinc-550 leading-relaxed mt-1 font-sans",children:"Wait for peer's audio & video stream signal matching."})]})}),U.jsxs("div",{className:"w-full flex items-center justify-between mt-2.5 text-[9px] font-mono text-zinc-500",children:[U.jsx("span",{children:H?`Connecting: ${H.name}`:"Establishing Handshake..."}),H&&U.jsxs("button",{onClick:()=>ot(!0),className:"flex items-center gap-1 px-2 py-0.5 bg-red-950/20 hover:bg-red-950/40 border border-red-900/35 rounded text-red-400 transition font-mono tracking-wide cursor-pointer text-[9px] font-bold",children:[U.jsx(Dy,{className:"w-3 h-3"}),U.jsx("span",{children:"Report violation"})]})]})]})]}),U.jsxs("div",{className:"bg-[#141414] border border-[#1F1F1F] p-3 rounded flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",children:[U.jsxs("div",{className:"flex gap-2",children:[U.jsxs("button",{onClick:it,className:"px-4 py-2 bg-red-950/45 hover:bg-red-955/65 border border-red-900/40 text-red-400 font-bold rounded text-xs font-mono transition inline-flex items-center gap-1 animate-fade-in cursor-pointer",children:[U.jsx(Ho,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"End Session"})]}),U.jsxs("button",{onClick:De,className:"px-5 py-2 bg-zinc-200 hover:bg-white text-zinc-950 font-bold rounded text-xs font-mono transition inline-flex items-center gap-1 animate-fade-in cursor-pointer",children:[U.jsx(a_,{className:"w-3.5 h-3.5"}),U.jsx("span",{children:"Skip Partner"})]})]}),U.jsxs("div",{className:"flex items-center gap-1.5 bg-[#0A0A0A] p-1.5 rounded border border-[#1F1F1F]",children:[U.jsx("span",{className:"text-zinc-500 font-semibold text-[9px] uppercase tracking-wider px-1 font-mono",children:"Theme:"}),U.jsx("div",{className:"flex gap-1",children:["cosmic","neon","matrix","lounge"].map(ee=>U.jsx("button",{onClick:()=>D(ee),className:`px-2 py-0.5 capitalize text-[10px] font-bold rounded transition cursor-pointer ${R===ee?"bg-zinc-800 text-zinc-100":"text-zinc-500 hover:text-zinc-350"}`,children:ee},ee))})]})]})]}),U.jsx("section",{className:`${G==="video"?"lg:col-span-5":"lg:col-span-12 max-w-2xl mx-auto w-full"} flex flex-col h-[520px] transition`,children:U.jsxs("div",{className:"bg-[#141414] border border-[#1F1F1F] rounded flex-1 flex flex-col overflow-hidden shadow-sm",children:[U.jsxs("div",{className:"bg-[#0F0F0F] border-b border-[#1F1F1F] p-3 flex items-center justify-between",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:"w-6 h-6 rounded bg-[#1A1A1A] border border-[#27272a] flex items-center justify-center font-bold text-zinc-300 font-mono text-[9px]",children:H?H.name.slice(0,1).toUpperCase():"?"}),U.jsxs("div",{children:[U.jsx("h4",{className:"font-bold text-xs font-mono text-zinc-200",children:H?H.name:"Matched Peer"}),U.jsx("p",{className:"text-[8px] text-zinc-500 font-mono tracking-wider uppercase",children:"Peer: Handshake Encrypted"})]})]}),U.jsxs("div",{className:"flex items-center gap-1.5",children:[H==null?void 0:H.interests.map(ee=>U.jsxs("span",{className:"text-[9px] bg-[#0A0A0A] border border-[#1F1F1F] text-zinc-400 px-1.5 py-0.2 rounded font-mono",children:["#",ee]},ee)),U.jsxs("div",{className:"flex items-center gap-1.5 ml-3 border-l border-[#1F1F1F] pl-3",children:[U.jsxs("button",{onClick:De,className:"px-2.5 py-1 bg-zinc-200 hover:bg-white text-zinc-950 font-bold text-[10px] font-mono rounded-md transition cursor-pointer flex items-center gap-1 shadow-md",title:"Skip to next partner",children:[U.jsx(a_,{className:"w-3 h-3"}),U.jsx("span",{children:"Skip"})]}),U.jsxs("button",{onClick:it,className:"px-2.5 py-1 bg-red-950/40 hover:bg-red-500 hover:text-white border border-red-500/20 text-red-400 font-bold text-[10px] font-mono rounded-md transition cursor-pointer flex items-center gap-1 shadow-md",title:"End active session",children:[U.jsx(Ho,{className:"w-3 h-3"}),U.jsx("span",{children:"End"})]})]})]})]}),U.jsxs("div",{className:"flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0D0D0D]",children:[Je.length===0&&U.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-5 text-zinc-650 space-y-1.5",children:[U.jsx(pd,{className:"w-7 h-7 text-zinc-800"}),U.jsxs("div",{className:"space-y-0.5 max-w-xs",children:[U.jsx("p",{className:"font-bold text-[10px] font-mono text-zinc-500 uppercase",children:"Handshake Channel active"}),U.jsx("p",{className:"text-[9px] text-zinc-650 leading-normal font-sans",children:"Session text transmissions are anonymous, and strictly subject to local community trust controls. Say hello!"})]})]}),Je.map(ee=>{if(ee.sender==="system")return U.jsx("div",{className:"flex justify-center",children:U.jsx("span",{className:"bg-[#0A0A0A] border border-[#1F1F1F] text-[8px] font-mono py-0.5 px-2.5 text-zinc-500 rounded uppercase",children:ee.text})},ee.id);const Ue=ee.sender===o;return U.jsxs("div",{className:`flex flex-col max-w-[85%] ${Ue?"ml-auto items-end":"mr-auto items-start animate-fade-in"}`,children:[U.jsxs("div",{className:"text-[8px] text-zinc-600 font-mono mb-0.5 px-0.5",children:[Ue?"You":(H==null?void 0:H.name)||"Partner"," • ",new Date(ee.time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}),U.jsx("div",{className:`px-2.5 py-1.5 rounded text-xs leading-relaxed font-mono ${Ue?"bg-zinc-200 text-zinc-950 font-medium":"bg-[#141414] border border-[#1F1F1F] text-zinc-200"}`,children:ee.text})]},ee.id)}),U.jsx("div",{ref:Qt})]}),U.jsxs("form",{onSubmit:vt,className:"bg-[#0F0F0F] border-t border-[#1F1F1F] p-2 flex gap-1.5",children:[U.jsx("input",{type:"text",placeholder:"Enter transmission message...",value:ct,onChange:ee=>xt(ee.target.value),className:"flex-1 px-3 py-1.5 bg-[#0a0a0a] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-250 placeholder-zinc-700"}),U.jsx("button",{type:"submit",disabled:!ct.trim(),className:"px-3 bg-zinc-200 text-[#0f0f0f] font-bold rounded hover:bg-white disabled:opacity-25 transition text-xs font-mono flex items-center justify-center cursor-pointer",children:U.jsx(Cy,{className:"w-3.5 h-3.5"})})]})]})})]})]}),z!=="idle"&&z!=="verified"&&U.jsx("div",{className:"fixed inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 z-40",children:U.jsxs("div",{className:"w-full max-w-sm bg-[#141414] border border-[#1F1F1F] rounded p-5 relative",children:[U.jsx("button",{onClick:()=>b("idle"),className:"absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer",children:U.jsx(Ho,{className:"w-3.5 h-3.5"})}),U.jsxs("div",{className:"text-center mb-4 space-y-1",children:[U.jsx("span",{className:"px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[8px] font-bold tracking-widest uppercase rounded inline-block font-mono",children:"Mandatory Pose Guard"}),U.jsx("h2",{className:"text-sm font-bold font-mono text-zinc-100",children:"Prove Human Presence"}),U.jsx("p",{className:"text-[10px] text-zinc-400",children:"Perform this random hand gesture clearly in front of your camera."})]}),z==="pose_prompt"&&U.jsxs("div",{className:"space-y-3 font-sans",children:[U.jsxs("div",{className:"p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded text-center space-y-2",children:[U.jsx("p",{className:"text-[8px] text-zinc-500 uppercase tracking-widest font-mono",children:"Perform Gesture:"}),U.jsx("p",{className:"text-2xl font-bold font-mono text-emerald-400",children:P})]}),U.jsxs("div",{className:"flex gap-2",children:[U.jsx("button",{onClick:()=>b("idle"),className:"flex-1 py-1.5 bg-zinc-900 hover:bg-zinc-850 text-[10px] font-bold rounded text-zinc-400 transition font-mono border border-[#1F1F1F] cursor-pointer",children:"Cancel"}),U.jsx("button",{onClick:pe,className:"flex-1 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 text-[10px] font-bold rounded transition font-mono cursor-pointer",children:"Submit Pose Verification"})]})]}),z==="scanning"&&U.jsxs("div",{className:"p-4 text-center space-y-3",children:[U.jsx(r_,{className:"w-6 h-6 text-emerald-450 animate-spin mx-auto"}),U.jsxs("div",{className:"space-y-0.5",children:[U.jsx("p",{className:"font-bold text-xs font-mono text-zinc-200",children:"Analyzing Face & Hand Gesture Pose..."}),U.jsx("p",{className:"text-[8px] text-zinc-500 font-mono uppercase tracking-wider",children:"Neural pose checking"})]})]})]})}),zt&&H&&U.jsx("div",{className:"fixed inset-0 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4 z-40",children:U.jsxs("div",{className:"w-full max-w-md bg-[#141414] border border-[#1F1F1F] rounded p-5 relative",children:[U.jsx("button",{onClick:()=>ot(!1),className:"absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer",children:U.jsx(Ho,{className:"w-3.5 h-3.5"})}),U.jsxs("div",{className:"text-center mb-4 space-y-1",children:[U.jsx("span",{className:"px-2 py-0.5 bg-red-950/25 border border-red-900/30 text-red-400 text-[8px] font-bold tracking-widest uppercase rounded inline-block font-mono",children:"Sentinel moderations"}),U.jsx("h2",{className:"text-sm font-bold font-mono text-zinc-100",children:"Send Trust violation"}),U.jsx("p",{className:"text-[10px] text-zinc-450",children:"Please report harassment or inappropriate actions."})]}),en?U.jsxs("div",{className:"p-3 text-center space-y-2 animate-fade-in",children:[U.jsx(s_,{className:"w-8 h-8 text-emerald-450 mx-auto"}),U.jsx("h4",{className:"text-xs font-bold text-emerald-400 font-mono",children:"Report Filed Securely"}),U.jsx("p",{className:"text-[10px] text-zinc-400 font-sans",children:"Checking session conversation logs manually. Resetting peer room..."})]}):U.jsxs("div",{className:"space-y-4 font-sans",children:[U.jsxs("div",{className:"bg-[#0A0A0A] p-2.5 rounded border border-[#1F1F1F] space-y-0.5",children:[U.jsx("span",{className:"text-[8px] text-zinc-520 uppercase font-mono block",children:"Suspect Session key:"}),U.jsx("span",{className:"text-[10px] text-zinc-350 font-mono block break-all font-semibold select-all",children:H.id})]}),U.jsxs("div",{className:"space-y-1",children:[U.jsx("label",{className:"text-[9px] font-bold text-zinc-450 font-mono uppercase block",children:"Violation Reason"}),U.jsxs("select",{value:an,onChange:ee=>Wt(ee.target.value),className:"w-full px-2.5 py-1.5 bg-[#0A0A0A] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-300",children:[U.jsx("option",{value:"Inappropriate stream",children:"Inappropriate stream feed or action"}),U.jsx("option",{value:"Harassment",children:"Harassment or abusive speech"}),U.jsx("option",{value:"Bot/Spam",children:"Synthetic Bot / advertising links"}),U.jsx("option",{value:"Minor profile",children:"Suspected under-aged account"})]})]}),U.jsxs("div",{className:"space-y-1",children:[U.jsx("label",{className:"text-[9px] font-bold text-zinc-455 font-mono uppercase block",children:"Extra description"}),U.jsx("textarea",{rows:3,placeholder:"Provide specific dialogue statements or action descriptions...",value:mn,onChange:ee=>Y(ee.target.value),className:"w-full px-2.5 py-1.5 bg-[#0A0A0A] border border-[#1F1F1F] rounded focus:outline-none focus:border-zinc-500 text-xs font-mono text-zinc-300 resize-none font-sans"})]}),U.jsxs("div",{className:"flex gap-2",children:[U.jsx("button",{onClick:()=>ot(!1),className:"flex-1 py-1.5 bg-zinc-900 text-[10px] font-bold rounded text-zinc-400 border border-[#1F1F1F] transition font-mono cursor-pointer",children:"Close"}),U.jsx("button",{onClick:j,className:"flex-1 py-1.5 bg-red-950/40 hover:bg-red-950/60 border border-red-900/40 text-red-400 text-[10px] font-bold rounded transition font-mono cursor-pointer",children:"Submit Report ⇒"})]})]})]})}),U.jsxs("footer",{className:"bg-[#0F0F0F] border-t border-[#1F1F1F] px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-400 font-mono",children:[U.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[U.jsx("span",{children:"SECURE ENCRYPTED HANDSHAKE ACTIVE"}),U.jsx("span",{children:"STATE: PROTOCOLS BOUNDED"}),U.jsx("button",{onClick:()=>g(!0),className:"text-teal-400 hover:text-teal-300 underline cursor-pointer",children:"About Us"}),U.jsx("button",{onClick:()=>T(!0),className:"text-teal-400 hover:text-teal-300 underline cursor-pointer",children:"Terms & Conditions"})]}),U.jsx("div",{children:U.jsxs("span",{children:["© ",new Date().getFullYear()," JustChat Space • Preserving Authentic Connection."]})})]}),v&&U.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in",id:"about_us_modal",children:U.jsxs(Os,{className:"w-full max-w-lg p-6 relative bg-zinc-950/95 border border-zinc-800 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto",children:[U.jsx("div",{className:"absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 via-emerald-500 to-indigo-500"}),U.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-white/5",children:[U.jsxs("h3",{className:"text-base font-bold font-mono text-zinc-100 tracking-tight flex items-center gap-2",children:[U.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-teal-500 shadow shadow-teal-500/50 animate-pulse"}),"About JustChat"]}),U.jsx("button",{onClick:()=>g(!1),className:"text-zinc-500 hover:text-white transition text-xs font-mono px-2 py-1 bg-white/5 rounded",children:"Close ESC"})]}),U.jsxs("div",{className:"space-y-4 text-xs text-zinc-300 leading-relaxed font-sans",children:[U.jsxs("p",{children:[U.jsx("strong",{children:"JustChat"})," is a next-generation real-time peering lounge built to safely match passionate coders, musicians, artists, and creators globally."]}),U.jsxs("div",{className:"p-3 bg-white/5 border border-white/10 rounded-xl space-y-1.5 font-mono text-[11px]",children:[U.jsx("h4",{className:"font-bold text-teal-400 uppercase",children:"Core Architecture details"}),U.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-zinc-400",children:[U.jsxs("li",{children:[U.jsx("strong",{children:"Instant Match Engine:"})," Algorithmic pairing based on tag intersects."]}),U.jsxs("li",{children:[U.jsx("strong",{children:"Simulated Fallbacks:"})," Integrated interactive chat AI agents when volume is low."]}),U.jsxs("li",{children:[U.jsx("strong",{children:"Custom Holographic Vibe Scenes:"})," 3D canvas rendering supporting Cosmic, Neon, Lounge, and Matrix environments."]}),U.jsxs("li",{children:[U.jsx("strong",{children:"P2P Media Protocols:"})," Encrypted WebRTC streams."]})]})]}),U.jsx("p",{children:"Our mission is to help restore genuine, instant, friction-free social micro-conversations without the bloat, ads, trackers, or endless algorithms of typical platforms."}),U.jsx("div",{className:"border-t border-white/5 pt-3 flex justify-end font-mono",children:U.jsx("button",{onClick:()=>g(!1),className:"px-4 py-2 bg-zinc-900 border border-white/10 text-zinc-300 rounded-lg hover:bg-zinc-800 transition text-[11px] font-bold cursor-pointer",children:"Close Panel"})})]})]})}),M&&U.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in",id:"terms_conditions_modal",children:U.jsxs(Os,{className:"w-full max-w-lg p-6 relative bg-zinc-950/95 border border-zinc-800 shadow-2xl rounded-2xl max-h-[90vh] overflow-y-auto",children:[U.jsx("div",{className:"absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-400 via-orange-500 to-indigo-500"}),U.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-white/5",children:[U.jsxs("h3",{className:"text-base font-bold font-mono text-zinc-100 tracking-tight flex items-center gap-2",children:[U.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 shadow shadow-red-500/50 animate-pulse"}),"Terms & Conditions"]}),U.jsx("button",{onClick:()=>T(!1),className:"text-zinc-500 hover:text-white transition text-xs font-mono px-2 py-1 bg-white/5 rounded",children:"Close ESC"})]}),U.jsxs("div",{className:"space-y-4 text-xs text-zinc-300 leading-relaxed font-sans",children:[U.jsx("p",{className:"font-semibold text-zinc-200",children:"Welcome to JustChat. By using this platform, you commit to respecting the community standard rules, terms, and guidelines:"}),U.jsxs("ol",{className:"list-decimal pl-4 space-y-3 text-zinc-400 font-mono text-[11px]",children:[U.jsxs("li",{children:[U.jsx("strong",{className:"text-zinc-205",children:"Age Check requirements:"}),U.jsx("br",{}),"You must be at least 18 years of age. Underaged users are strictly prohibited and will be reported to moderation authorities."]}),U.jsxs("li",{children:[U.jsx("strong",{className:"text-zinc-205",children:"Respectful peer interaction:"}),U.jsx("br",{}),"Harassment, bullying, toxic speeches, vulgar displays, or non-consensual multimedia broadcasts are forbidden."]}),U.jsxs("li",{children:[U.jsx("strong",{className:"text-zinc-205",children:"Service Suspension:"}),U.jsx("br",{}),"Our system automatically flags high-frequency skips or reports. Valid violation reports trigger immediate hardware IP bans."]}),U.jsxs("li",{children:[U.jsx("strong",{className:"text-zinc-205",children:"P2P Security responsibility:"}),U.jsx("br",{}),"Stream data is encrypted and negotiated peer-to-peer. JustChat does not cache transmission streams or logs. You are solely responsible for interactions you initiate."]})]}),U.jsx("div",{className:"p-3 bg-red-950/20 border border-red-900/40 rounded-xl leading-relaxed text-red-300 text-[10px] font-mono",children:"SAFETY PROTOCOL: Violating the terms will terminate your session and black-list your session signatures from joining again."}),U.jsxs("div",{className:"border-t border-white/5 pt-3 flex gap-2 justify-end font-mono",children:[U.jsx("button",{onClick:()=>{l(!0),T(!1)},className:"px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400 transition text-[11px] font-bold cursor-pointer font-sans",children:"I Agree & Accept Checklist"}),U.jsx("button",{onClick:()=>T(!1),className:"px-4 py-2 bg-zinc-900 border border-white/10 text-zinc-300 rounded-lg hover:bg-zinc-800 transition text-[11px] font-bold cursor-pointer",children:"Dismiss"})]})]})]})})]})}dy.createRoot(document.getElementById("root")).render(U.jsx(rt.StrictMode,{children:U.jsx(i2,{})}));
