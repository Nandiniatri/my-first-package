import{useState as r}from"react";var t=function(r){var t=r.message;return React.createElement("div",null,t)};function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=Array(t);n<t;n++)e[n]=r[n];return e}function e(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,u,a,i=[],l=!0,c=!1;try{if(u=(n=n.call(r)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(e=u.call(n)).done)&&(i.push(e.value),i.length!==t);l=!0);}catch(r){c=!0,o=r}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(r,t)||function(r,t){if(r){if("string"==typeof r)return n(r,t);var e={}.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(){var t=e(r(0),2),n=t[0],o=t[1];return{count:n,increment:function(){return o(n+1)},decrement:function(){return o(n-1)}}};export{t as MyComponent,o as useCounter};
//# sourceMappingURL=react-package.esm.js.map
