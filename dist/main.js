!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=3)}([function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(r,o);r.locals&&(n.exports=r.locals)},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"}));return[e].concat(i).concat([o]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(n,t){return t?t.querySelector(n):document.querySelector(n)},c=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=a.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),f=null,u=0,l=[],A=e(5);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(v(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):e.push(r[s]={id:s,parts:[a]})}return e}function h(n,t){var e=c(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function E(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}))}function v(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var s=u++;e=f||(f=E(t)),r=B.bind(null,e,s,!1),o=B.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),r=w.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=E(t),r=C.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var s=e[o];(a=i[s.id]).refs--,r.push(a)}n&&p(d(n,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var m,y=(m=[],function(n,t){return m[n]=t,m.filter(Boolean).join("\n")});function B(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}function C(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function w(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=A(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(n,t,e){"use strict";e.r(t);e(0),e(6)},function(n,t,e){(n.exports=e(1)(!0)).push([n.i,"* {\n  font-family: sans-serif;\n  color: #FFFFFF; }\n\nbody {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(-45deg, #6be2b4, #19a3ed, #9864c9, #c95dcb);\n  background-size: 400% 400%;\n  animation: gradientBG 15s ease infinite; }\n\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\np {\n  font-weight: lighter;\n  margin-top: 5px; }\n\nh1 {\n  font-weight: 400;\n  margin-bottom: 0; }\n\nh2 {\n  color: #DDDDDD;\n  margin-top: 10px;\n  font-weight: 200; }\n\nh3 {\n  color: #DDDDDD;\n  font-weight: 100;\n  margin-bottom: 5px; }\n\na, a:hover {\n  text-decoration: none;\n  color: #DDDDDD; }\n\nimg.profile {\n  display: block !important;\n  margin: auto;\n  border-radius: 50%;\n  width: 25vh;\n  display: inline;\n  box-shadow: grey 0 0 10px; }\n\ndiv.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\nul.social-list {\n  list-style-type: none;\n  padding: 0 0 0 0; }\n  ul.social-list li {\n    display: inline;\n    padding-right: 10px; }\n\nimg.badge {\n  width: 10vh;\n  height: 10vh; }\n\ndiv.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  text-align: center; }\n","",{version:3,sources:["/Users/Sarah/GitHub/sksiyer.github.io/src/style/src/style/style.scss","/Users/Sarah/GitHub/sksiyer.github.io/src/style/src/style/_colours.scss"],names:[],mappings:"AAEA;EACE,wBAAuB;EACvB,eCFc,EDGf;;AAED;EACE,UAAS;EACT,aAAY;EACZ,cAAa;EACb,wEAAkE;EAClE,2BAA0B;EAC1B,wCAAuC,EACxC;;AAED;EACE;IACE,4BAA2B,EAAA;EAE7B;IACE,8BAA6B,EAAA;EAE/B;IACE,4BAA2B,EAAA,EAAA;;AAI/B;EACE,qBAAoB;EACpB,gBAAe,EAChB;;AAED;EACE,iBAAgB;EAChB,iBAAgB,EACjB;;AAED;EACE,eCtCgB;EDuChB,iBAAgB;EAChB,iBAAgB,EACjB;;AAED;EACE,eC5CgB;ED6ChB,iBAAgB;EAChB,mBAAkB,EACnB;;AAED;EACE,sBAAqB;EACrB,eCnDgB,EDoDjB;;AAED;EACE,0BAAyB;EACzB,aAAY;EACZ,mBAAkB;EAClB,YAAW;EACX,gBAAe;EACf,0BAAyB,EAC1B;;AAED;EACE,gBAAe;EACf,SAAQ;EACR,UAAS;EACT,iCAAgC,EACjC;;AAED;EACE,sBAAqB;EACrB,iBAAgB,EAMjB;EARD;IAKI,gBAAe;IACf,oBAAmB,EACpB;;AAGH;EACE,YAAW;EACX,aAAY,EACb;;AAED;EACE,gBAAe;EACf,QAAO;EACP,UAAS;EACT,aAAY;EACZ,mBAAkB,EACnB",file:"style.scss",sourcesContent:['@import "./colours";\n\n* {\n  font-family: sans-serif;\n  color: $bright;\n}\n\nbody {\n  margin: 0;\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(-45deg, $fresh, $sky, $plum, $fuchsia);\n  background-size: 400% 400%;\n  animation: gradientBG 15s ease infinite;\n}\n\n@keyframes gradientBG {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\np {\n  font-weight: lighter;\n  margin-top: 5px;\n}\n\nh1 {\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\nh2 {\n  color: $concrete;\n  margin-top: 10px;\n  font-weight: 200;\n}\n\nh3 {\n  color: $concrete;\n  font-weight: 100;\n  margin-bottom: 5px;\n}\n\na, a:hover {\n  text-decoration: none;\n  color: $concrete;\n}\n\nimg.profile {\n  display: block !important;\n  margin: auto;\n  border-radius: 50%;\n  width: 25vh;\n  display: inline;\n  box-shadow: grey 0 0 10px;\n}\n\ndiv.centered {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nul.social-list {\n  list-style-type: none;\n  padding: 0 0 0 0;\n\n  li {\n    display: inline;\n    padding-right: 10px;\n  }\n}\n\nimg.badge {\n  width: 10vh;\n  height: 10vh;\n}\n\ndiv.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  text-align: center;\n}\n',"$pitch: #0b0f16;\n$concrete: #DDDDDD;\n$bright: #FFFFFF;\n\n$fresh: #6be2b4;\n$sky: #19a3ed;\n$plum: #9864c9;\n$fuchsia: #c95dcb;\n"],sourceRoot:""}])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(n,t){return t})).replace(/^'(.*)'$/,(function(n,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(n,t,e){var r=e(7);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(1)(!0)).push([n.i,"","",{version:3,sources:[],names:[],mappings:"",file:"_colours.scss",sourceRoot:""}])}]);
//# sourceMappingURL=main.js.map