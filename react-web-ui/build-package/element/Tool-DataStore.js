!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r="object"==typeof exports?t(require("React")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={24:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(24),t=n.n(e);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a,i={Render:function(e){var r=e.property,n=e.monitor,o=e.trigger,a=e.env,i=function(){r.useWindow&&r.windowName&&(window[r.windowName]=r.value)};return t().useEffect((function(){if(n&&n.setValue){var e=n.setValue((function(e){r.value=e,i(),o&&o.onEffect&&o.onEffect(r.value)}));return function(){e()}}}),[]),t().useEffect((function(){if(n&&n.assignValue){var e=n.assignValue((function(e){Object.assign(r.value,e),i(),o&&o.onEffect&&o.onEffect(r.value)}));return function(){e()}}}),[]),"dev"===a||(t().useEffect((function(){r.immediate&&Promise.resolve().then((function(){i(),o&&o.onEffect&&o.onEffect(r.value)}))}),[]),t().useEffect((function(){i()}),[r.useWindow,r.windowName])),null},license:{key:"Tool-DataStore"}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return r(e)}(a=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[i]):[i]})(),o})()));