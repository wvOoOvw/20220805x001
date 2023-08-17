!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"),require("MaterialUI"));else if("function"==typeof define&&define.amd)define(["React","MaterialUI"],t);else{var n="object"==typeof exports?t(require("React"),require("MaterialUI")):t(e.React,e.MaterialUI);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,((e,t)=>(()=>{"use strict";var n={864:e=>{e.exports=t},24:t=>{t.exports=e}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{a.r(o);var e=a(24),t=a.n(e),n=a(864);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e,t,n){return e>=t*(n-1)&&e<t*n};function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u,f={Render:function(e){var a=e.event,o=e.property,c=e.monitor,u=e.trigger,f=e.env,s=e.update;return t().useEffect((function(){if(c&&c.setBody){var e=c.setBody((function(e){o.body=e,s()}));return function(){e()}}}),[]),t().useEffect((function(){if(c&&c.setHead){var e=c.setHead((function(e){o.head=e,s()}));return function(){e()}}}),[]),t().useEffect((function(){if(c&&c.setPaginationSize){var e=c.setPaginationSize((function(e){o.paginationSize=e,s()}));return function(){e()}}}),[]),t().useEffect((function(){if(c&&c.setPaginationPage){var e=c.setPaginationPage((function(e){o.paginationPage=e,s()}));return function(){e()}}}),[]),t().useEffect((function(){if(c&&c.setSelectClear){var e=c.setSelectClear((function(e){o.selectChecked=[],s()}));return function(){e()}}}),[]),t().createElement(n.Box,r({},a,style,{component:o.componentPaper?n.Paper:null}),t().createElement(n.TableContainer,{style:{height:o.usePagination&&o.paginationComponent?"calc(100% - 50px)":"100%"}},t().createElement(n.Table,{size:o.size,stickyHeader:o.stickyHeader},t().createElement(n.TableHead,null,t().createElement(n.TableRow,null,o.useSelect&&o.selectMultiple?t().createElement(n.TableCell,null,t().createElement(n.Checkbox,{checked:function(){if(o.usePagination)var e=o.body.filter((function(e,t){return l(t,o.paginationSize,o.paginationPage)}));else e=o.body;return e.filter((function(e){return o.selectChecked.includes(e)})).length===e.length}(),onChange:function(e){if("dev"!==f){if(o.usePagination)var t=o.body.filter((function(e,t){return l(t,o.paginationSize,o.paginationPage)}));else t=o.body;t.filter((function(e){return o.selectChecked.includes(e)})).length===t.length?(o.selectChecked=[],s(),u&&u.onSelect&&u.onSelect(o.selectChecked,e)):(o.selectChecked=t,s(),u&&u.onSelect&&u.onSelect(o.selectChecked,e))}}})):null,o.head.map((function(e,r){return t().createElement(n.TableCell,{key:r},e.label)})),o.useAction?t().createElement(n.TableCell,null,o.actionTitle):null)),t().createElement(n.TableBody,null,o.body.map((function(e,r){return o.usePagination&&!l(r,o.paginationSize,o.paginationPage)?null:t().createElement(n.TableRow,{key:r},o.useSelect?t().createElement(n.TableCell,null,t().createElement(n.Checkbox,{checked:o.selectChecked.includes(e),onChange:function(t){return function(e,t){"dev"!==f&&(o.selectChecked=o.selectChecked.includes(t)?o.selectChecked.filter((function(e){return e!==t})):[].concat(function(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.selectChecked),[t]),s(),u&&u.onSelect&&u.onSelect(o.selectChecked,e))}(t,e)}})):null,o.head.map((function(r,a){return t().createElement(n.TableCell,{key:a},e[r.value])})),o.useAction?t().createElement(n.TableCell,null,t().createElement(n.Button,{variant:o.actionVariant,color:o.actionColor,onClick:function(t){return function(e,t){u&&u.onClick&&u.onClick(t,e)}(t,e)}},o.actionText)):null)}))))),o.usePagination&&o.paginationComponent?t().createElement("div",{style:{display:"flex",justifyContent:o.paginationJustifyContent,alignItems:"center",height:50}},t().createElement(n.Pagination,{count:Math.ceil(o.body.length/Number(o.paginationSize)),page:Number(o.paginationPage),onChange:function(e,t){"dev"!==f&&(o.selectChecked=[],o.paginationPage=t,s(),u&&u.onPaginationChange&&u.onPaginationChange(o.paginationPage,e))},size:o.size})):null)},license:{key:"Material-Table",dependencies:["MaterialUI"]}};window.graphElement=window.graphElement?[].concat(function(e){if(Array.isArray(e))return c(e)}(u=window.graphElement)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[f]):[f]})(),o})()));