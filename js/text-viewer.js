/*! For license information please see text-viewer.js.LICENSE.txt */
(()=>{var e,t,i,n,r={48583:(e,t,i)=>{"use strict";var n=i(27418);function r(e,t){if(e===t)return 0;for(var i=e.length,n=t.length,r=0,a=Math.min(i,n);r<a;++r)if(e[r]!==t[r]){i=e[r],n=t[r];break}return i<n?-1:n<i?1:0}function a(e){return i.g.Buffer&&"function"==typeof i.g.Buffer.isBuffer?i.g.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var o=i(89539),c=Object.prototype.hasOwnProperty,l=Array.prototype.slice,h="foo"===function(){}.name;function f(e){return Object.prototype.toString.call(e)}function u(e){return!a(e)&&("function"==typeof i.g.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var s=e.exports=y,g=/\s*function\s+([^\(\s]*)\s*/;function d(e){if(o.isFunction(e)){if(h)return e.name;var t=e.toString().match(g);return t&&t[1]}}function p(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function b(e){if(h||!o.isFunction(e))return o.inspect(e);var t=d(e);return"[Function"+(t?": "+t:"")+"]"}function m(e,t,i,n,r){throw new s.AssertionError({message:i,actual:e,expected:t,operator:n,stackStartFunction:r})}function y(e,t){e||m(e,!0,t,"==",s.ok)}function v(e,t,i,n){if(e===t)return!0;if(a(e)&&a(t))return 0===r(e,t);if(o.isDate(e)&&o.isDate(t))return e.getTime()===t.getTime();if(o.isRegExp(e)&&o.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(u(e)&&u(t)&&f(e)===f(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(a(e)!==a(t))return!1;var c=(n=n||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===n.expected.indexOf(t)||(n.actual.push(e),n.expected.push(t),function(e,t,i,n){if(null==e||null==t)return!1;if(o.isPrimitive(e)||o.isPrimitive(t))return e===t;if(i&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var r=w(e),a=w(t);if(r&&!a||!r&&a)return!1;if(r)return v(e=l.call(e),t=l.call(t),i);var c,h,f=E(e),u=E(t);if(f.length!==u.length)return!1;for(f.sort(),u.sort(),h=f.length-1;h>=0;h--)if(f[h]!==u[h])return!1;for(h=f.length-1;h>=0;h--)if(!v(e[c=f[h]],t[c],i,n))return!1;return!0}(e,t,i,n))}return i?e===t:e==t}function w(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function x(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,i,n){var r;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof i&&(n=i,i=null),r=function(e){var t;try{e()}catch(e){t=e}return t}(t),n=(i&&i.name?" ("+i.name+").":".")+(n?" "+n:"."),e&&!r&&m(r,i,"Missing expected exception"+n);var a="string"==typeof n,c=!e&&r&&!i;if((!e&&o.isError(r)&&a&&x(r,i)||c)&&m(r,i,"Got unwanted exception"+n),e&&r&&i&&!x(r,i)||!e&&r)throw r}s.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=function(e){return p(b(e.actual),128)+" "+e.operator+" "+p(b(e.expected),128)}(this),this.generatedMessage=!0);var t=e.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var i=new Error;if(i.stack){var n=i.stack,r=d(t),a=n.indexOf("\n"+r);if(a>=0){var o=n.indexOf("\n",a+1);n=n.substring(o+1)}this.stack=n}}},o.inherits(s.AssertionError,Error),s.fail=m,s.ok=y,s.equal=function(e,t,i){e!=t&&m(e,t,i,"==",s.equal)},s.notEqual=function(e,t,i){e==t&&m(e,t,i,"!=",s.notEqual)},s.deepEqual=function(e,t,i){v(e,t,!1)||m(e,t,i,"deepEqual",s.deepEqual)},s.deepStrictEqual=function(e,t,i){v(e,t,!0)||m(e,t,i,"deepStrictEqual",s.deepStrictEqual)},s.notDeepEqual=function(e,t,i){v(e,t,!1)&&m(e,t,i,"notDeepEqual",s.notDeepEqual)},s.notDeepStrictEqual=function e(t,i,n){v(t,i,!0)&&m(t,i,n,"notDeepStrictEqual",e)},s.strictEqual=function(e,t,i){e!==t&&m(e,t,i,"===",s.strictEqual)},s.notStrictEqual=function(e,t,i){e===t&&m(e,t,i,"!==",s.notStrictEqual)},s.throws=function(e,t,i){j(!0,e,t,i)},s.doesNotThrow=function(e,t,i){j(!1,e,t,i)},s.ifError=function(e){if(e)throw e},s.strict=n((function e(t,i){t||m(t,!0,i,"==",e)}),s,{equal:s.strictEqual,deepEqual:s.deepStrictEqual,notEqual:s.notStrictEqual,notDeepEqual:s.notDeepStrictEqual}),s.strict.strict=s.strict;var E=Object.keys||function(e){var t=[];for(var i in e)c.call(e,i)&&t.push(i);return t}},74411:(e,t,i)=>{"use strict";i.d(t,{lF:()=>n,w_:()=>r});var n=["text/markdown"],r=["text/plain","application/cmd","application/x-empty","application/x-msdos-program","application/javascript","application/json","application/x-perl","application/x-php","application/x-tex","application/xml","application/yaml","text/css","text/csv","text/html","text/org","text/x-c","text/x-c++src","text/x-h","text/x-java-source","text/x-ldif","text/x-python","text/x-shellscript"];[].concat(n,r)},25108:(e,t,i)=>{var n=i(89539),r=i(48583);function a(){return(new Date).getTime()}var o,c=Array.prototype.slice,l={};o=void 0!==i.g&&i.g.console?i.g.console:"undefined"!=typeof window&&window.console?window.console:{};for(var h=[[function(){},"log"],[function(){o.log.apply(o,arguments)},"info"],[function(){o.log.apply(o,arguments)},"warn"],[function(){o.warn.apply(o,arguments)},"error"],[function(e){l[e]=a()},"time"],[function(e){var t=l[e];if(!t)throw new Error("No such label: "+e);delete l[e];var i=a()-t;o.log(e+": "+i+"ms")},"timeEnd"],[function(){var e=new Error;e.name="Trace",e.message=n.format.apply(null,arguments),o.error(e.stack)},"trace"],[function(e){o.log(n.inspect(e)+"\n")},"dir"],[function(e){if(!e){var t=c.call(arguments,1);r.ok(!1,n.format.apply(null,t))}},"assert"]],f=0;f<h.length;f++){var u=h[f],s=u[0],g=u[1];o[g]||(o[g]=s)}e.exports=o},96197:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var n=i(23645),r=i.n(n)()(!0);r.push([e.id,"\n#editor-container {\n\theight: calc(100% - 50px);\n\ttop: 50px;\n}\n","",{version:3,sources:["webpack://src/components/ViewerComponent.vue"],names:[],mappings:";AAwEA;CACA,yBAAA;CACA,SAAA;AACA",sourcesContent:['\x3c!--\n  - @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>\n  -\n  - @author Julius Härtl <jus@bitgrid.net>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program. If not, see <http://www.gnu.org/licenses/>.\n  -\n  --\x3e\n\n<template>\n\t<EditorWrapper :file-id="fileid"\n\t\t:relative-path="filename"\n\t\t:active="active"\n\t\t:autofocus="autofocus"\n\t\t:share-token="shareToken"\n\t\t:mime="mime" />\n</template>\n\n<script>\nexport default {\n\tname: \'ViewerComponent\',\n\tcomponents: {\n\t\tEditorWrapper: () => import(/* webpackChunkName: "editor" */\'./EditorWrapper\'),\n\t},\n\tprops: {\n\t\tfilename: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t\tfileid: {\n\t\t\ttype: Number,\n\t\t\tdefault: null,\n\t\t},\n\t\tactive: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tautofocus: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: true,\n\t\t},\n\t\tshareToken: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t\tmime: {\n\t\t\ttype: String,\n\t\t\tdefault: null,\n\t\t},\n\t},\n\tbeforeMount() {\n\t\t// FIXME Dirty fix to avoid recreating the component on stable16\n\t\tif (typeof this.$parent.$parent !== \'undefined\' && this.$parent.$parent.onResize) {\n\t\t\twindow.removeEventListener(\'resize\', this.$parent.$parent.onResize)\n\t\t}\n\t},\n}\n<\/script>\n<style>\n#editor-container {\n\theight: calc(100% - 50px);\n\ttop: 50px;\n}\n</style>\n'],sourceRoot:""}]);const a=r},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var r=(o=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([r]).join("\n")}var o,c,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&r[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},35717:e=>{"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}},27418:e=>{"use strict";var t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var o,c,l=r(e),h=1;h<arguments.length;h++){for(var f in o=Object(arguments[h]))i.call(o,f)&&(l[f]=o[f]);if(t){c=t(o);for(var u=0;u<c.length;u++)n.call(o,c[u])&&(l[c[u]]=o[c[u]])}}return l}},34155:e=>{var t,i,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,l=[],h=!1,f=-1;function u(){h&&c&&(h=!1,c.length?l=c.concat(l):f=-1,l.length&&s())}function s(){if(!h){var e=o(u);h=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,h=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new g(e,t)),1!==l.length||h||o(s)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},93379:(e,t,i)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),o=[];function c(e){for(var t=-1,i=0;i<o.length;i++)if(o[i].identifier===e){t=i;break}return t}function l(e,t){for(var i={},n=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],h=i[l]||0,f="".concat(l," ").concat(h);i[l]=h+1;var u=c(f),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(s)):o.push({identifier:f,updater:b(s,t),references:1}),n.push(f)}return n}function h(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var f,u=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function s(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function g(e,t,i){var n=i.css,r=i.media,a=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,p=0;function b(e,t){var i,n,r;if(t.singleton){var a=p++;i=d||(d=h(t)),n=s.bind(null,i,a,!1),r=s.bind(null,i,a,!0)}else i=h(t),n=g.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var i=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=c(i[n]);o[r].references--}for(var a=l(e,t),h=0;h<i.length;h++){var f=c(i[h]);0===o[f].references&&(o[f].updater(),o.splice(f,1))}i=a}}}},20384:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},89539:(e,t,i)=>{var n=i(34155),r=i(25108),a=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],i=0;i<arguments.length;i++)t.push(l(arguments[i]));return t.join(" ")}i=1;for(var n=arguments,r=n.length,o=String(e).replace(a,(function(e){if("%%"===e)return"%";if(i>=r)return e;switch(e){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch(e){return"[Circular]"}default:return e}})),c=n[i];i<r;c=n[++i])b(c)||!x(c)?o+=" "+c:o+=" "+l(c);return o},t.deprecate=function(e,a){if(v(i.g.process))return function(){return t.deprecate(e,a).apply(this,arguments)};if(!0===n.noDeprecation)return e;var o=!1;return function(){if(!o){if(n.throwDeprecation)throw new Error(a);n.traceDeprecation?r.trace(a):r.error(a),o=!0}return e.apply(this,arguments)}};var o,c={};function l(e,i){var n={seen:[],stylize:f};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),p(i)?n.showHidden=i:i&&t._extend(n,i),v(n.showHidden)&&(n.showHidden=!1),v(n.depth)&&(n.depth=2),v(n.colors)&&(n.colors=!1),v(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=h),u(n,e,n.depth)}function h(e,t){var i=l.styles[t];return i?"["+l.colors[i][0]+"m"+e+"["+l.colors[i][1]+"m":e}function f(e,t){return e}function u(e,i,n){if(e.customInspect&&i&&O(i.inspect)&&i.inspect!==t.inspect&&(!i.constructor||i.constructor.prototype!==i)){var r=i.inspect(n,e);return y(r)||(r=u(e,r,n)),r}var a=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(y(t)){var i="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(i,"string")}if(m(t))return e.stylize(""+t,"number");if(p(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(e,i);if(a)return a;var o=Object.keys(i),c=function(e){var t={};return e.forEach((function(e,i){t[e]=!0})),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(i)),E(i)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return s(i);if(0===o.length){if(O(i)){var l=i.name?": "+i.name:"";return e.stylize("[Function"+l+"]","special")}if(w(i))return e.stylize(RegExp.prototype.toString.call(i),"regexp");if(j(i))return e.stylize(Date.prototype.toString.call(i),"date");if(E(i))return s(i)}var h,f="",x=!1,S=["{","}"];(d(i)&&(x=!0,S=["[","]"]),O(i))&&(f=" [Function"+(i.name?": "+i.name:"")+"]");return w(i)&&(f=" "+RegExp.prototype.toString.call(i)),j(i)&&(f=" "+Date.prototype.toUTCString.call(i)),E(i)&&(f=" "+s(i)),0!==o.length||x&&0!=i.length?n<0?w(i)?e.stylize(RegExp.prototype.toString.call(i),"regexp"):e.stylize("[Object]","special"):(e.seen.push(i),h=x?function(e,t,i,n,r){for(var a=[],o=0,c=t.length;o<c;++o)C(t,String(o))?a.push(g(e,t,i,n,String(o),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(e,t,i,n,r,!0))})),a}(e,i,n,c,o):o.map((function(t){return g(e,i,n,c,t,x)})),e.seen.pop(),function(e,t,i){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return i[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+i[1];return i[0]+t+" "+e.join(", ")+" "+i[1]}(h,f,S)):S[0]+f+S[1]}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,i,n,r,a){var o,c,l;if((l=Object.getOwnPropertyDescriptor(t,r)||{value:t[r]}).get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),C(n,r)||(o="["+r+"]"),c||(e.seen.indexOf(l.value)<0?(c=b(i)?u(e,l.value,null):u(e,l.value,i-1)).indexOf("\n")>-1&&(c=a?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),v(o)){if(a&&r.match(/^\d+$/))return c;(o=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+c}function d(e){return Array.isArray(e)}function p(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function y(e){return"string"==typeof e}function v(e){return void 0===e}function w(e){return x(e)&&"[object RegExp]"===S(e)}function x(e){return"object"==typeof e&&null!==e}function j(e){return x(e)&&"[object Date]"===S(e)}function E(e){return x(e)&&("[object Error]"===S(e)||e instanceof Error)}function O(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(v(o)&&(o=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!c[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var i=n.pid;c[e]=function(){var n=t.format.apply(t,arguments);r.error("%s %d: %s",e,i,n)}}else c[e]=function(){};return c[e]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=p,t.isNull=b,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=y,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=w,t.isObject=x,t.isDate=j,t.isError=E,t.isFunction=O,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=i(20384);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[A(e.getHours()),A(e.getMinutes()),A(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}function C(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){r.log("%s - %s",k(),t.format.apply(t,arguments))},t.inherits=i(35717),t._extend=function(e,t){if(!t||!x(t))return e;for(var i=Object.keys(t),n=i.length;n--;)e[i[n]]=t[i[n]];return e}},51900:(e,t,i)=>{"use strict";function n(e,t,i,n,r,a,o,c){var l,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),a&&(h._scopeId="data-v-"+a),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},h._ssrRegister=l):r&&(l=c?function(){r.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(h.functional){h._injectStyles=l;var f=h.render;h.render=function(e,t){return l.call(t),f(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:h}}i.d(t,{Z:()=>n})}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var r=Object.create(null);o.r(r);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&i;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,o.d(r,a),r},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>e+".js?v="+{vendors:"b9fd0ec1227e7426eeab",editor:"53f87b6c354c53ba8f53","editor-rich":"86cdc28fefd539d7b1ea","editor-guest":"fe8028f6ea09f548befb","editor-collab":"4ba1149e3de38d36c241","highlight/1c":"22889936957e35ffea26","highlight/abnf":"1695818e118068c30cd9","highlight/accesslog":"4f45467903eeee5638c1","highlight/actionscript":"b72c6aeec8ffa90e899c","highlight/ada":"48cd52cf18b9697b2c00","highlight/angelscript":"3965e38d6ea169666b05","highlight/apache":"564ed7ae3263bc8c7539","highlight/applescript":"5e13d373cccb7117471a","highlight/arcade":"e9cc0f3e39412241a83a","highlight/arduino":"4c4a278b214caf4dbf50","highlight/armasm":"c6085ef2b448cd44c761","highlight/asciidoc":"f679f13a781e7a4f1347","highlight/aspectj":"c0d837bd3f93c4eb6d44","highlight/autohotkey":"86d4f45a9ed21a86e629","highlight/autoit":"78fb414a9ffd08023413","highlight/avrasm":"f5686362d2f0e672735b","highlight/awk":"4c7463378c04d3edaa14","highlight/axapta":"005ab10669478a486420","highlight/bash":"103363ec35a429ca3bc9","highlight/basic":"1dfe9e5babdd3b63ca81","highlight/bnf":"60be7561dab70549b835","highlight/brainfuck":"a203c6a271e0771d3071","highlight/c":"605c7b66a393fab0813c","highlight/c-like":"18a1d8ad3a8fb0d32993","highlight/cal":"b66862ce016e6f91ca9e","highlight/capnproto":"7296df6bb4fcae791234","highlight/ceylon":"e948a1599da0916a2992","highlight/clean":"b4627bc3738c93c277be","highlight/clojure":"b5ffbb68a7f12b574b5d","highlight/clojure-repl":"f36399505c115a16a0f6","highlight/cmake":"f81556d027f245d3bd4a","highlight/coffeescript":"bcff49d60e85d0d2e493","highlight/coq":"260b0da9019c602ad1ef","highlight/cos":"e4e201eb5e9a4462d5db","highlight/cpp":"b094891544aec66e3351","highlight/crmsh":"cdb2baec27ff052be204","highlight/crystal":"bc1b2ba36dcaf85a0708","highlight/csharp":"0063b7c5c01b0c3b8c5d","highlight/csp":"46c92a947440b121d900","highlight/css":"df3c89f1537b974f7714","highlight/d":"efffc154dd84b7c0464d","highlight/dart":"4ea538e15dfa1d061b74","highlight/delphi":"db1303ee681d5f511077","highlight/diff":"7e333043ed233dd95677","highlight/django":"bf37957d052e54cabf58","highlight/dns":"5c6c7a70be38b9657766","highlight/dockerfile":"32ef6b4594ebb935ffb6","highlight/dos":"684f010c5cce6323cb21","highlight/dsconfig":"31cb5c1ee4f0e39b6852","highlight/dts":"797fb03bd4fc0197600c","highlight/dust":"df9efe9e4acdeec046e8","highlight/ebnf":"f97b1744af1b4dc9e98f","highlight/elixir":"3f91bb98b5517aeb7304","highlight/elm":"8b695444b32b2c18fac2","highlight/erb":"f27c36005e384b957772","highlight/erlang":"136f109a03c6be34913a","highlight/erlang-repl":"5b79cdb8a29f69f31f6c","highlight/excel":"e2a535588e2436d2d223","highlight/fix":"a58bf72a76dd36096535","highlight/flix":"4e8e319f3cf77a282270","highlight/fortran":"60afd57aa2ac7df88183","highlight/fsharp":"2148a4447afb8f19db53","highlight/gams":"1d351a614253408a149e","highlight/gauss":"c71dac24ed16ccd88f0a","highlight/gcode":"8b07f1136b7f0f036a29","highlight/gherkin":"e38af5e245f90e6dc0bc","highlight/glsl":"6bbfd88a1f6edd9c988a","highlight/gml":"dffbe759c0fbc389287b","highlight/go":"8a4973693688c41155ba","highlight/golo":"491fdcdd5411fbe9530e","highlight/gradle":"2c33661d2c0193201d47","highlight/groovy":"d00af4acdb0d8c2b0bbc","highlight/haml":"0b756440beb1ab096165","highlight/handlebars":"6c4c0f483e4ae35fda41","highlight/haskell":"84c63265a1cdde1f0e5a","highlight/haxe":"20fa8dd4c059ec984838","highlight/hsp":"86549b19b4b7424fc4c0","highlight/htmlbars":"8295b6629d07b7347084","highlight/http":"e4b66c56db5a82e3689e","highlight/hy":"b7e6429c140444e29eea","highlight/inform7":"3c999fa105334139c3b5","highlight/ini":"a78fb7ef7f72dbd46645","highlight/irpf90":"3ea3730cea3b3a899ed9","highlight/isbl":"b550f22fdd18313b56f2","highlight/java":"d8f0beb9d24457702b90","highlight/javascript":"2a622996cef1e6709cdf","highlight/jboss-cli":"e8abe06353f360836014","highlight/json":"f9f5d2fccfb8094349c9","highlight/julia":"05e1376b6fdcb1043783","highlight/julia-repl":"1e83d5dca20657d35389","highlight/kotlin":"0904fedeaf24409e0c1e","highlight/lasso":"61d8987e0fd43d14e173","highlight/latex":"2cedfdc066f5634e3ab6","highlight/ldif":"c52a6c92ac78cda4630e","highlight/leaf":"0b83bf910b256dcaabf5","highlight/less":"293c04d44a21f599d4a7","highlight/lisp":"51b5777dbeb72ad5bb84","highlight/livecodeserver":"206bb085f42d8a2cceb1","highlight/livescript":"71a07ae91333a2535a53","highlight/llvm":"58b785c15e013a8c5011","highlight/lsl":"bbfa31bb5aab0453dae3","highlight/lua":"3481dd00b14f95abaaae","highlight/makefile":"3d6dcc38cffd46f68786","highlight/markdown":"d9f120b0d35a7b3cdeac","highlight/mathematica":"f8be4c73079b73633f01","highlight/matlab":"150cc525d6655c4cd4b5","highlight/maxima":"f1bfece07e7b3277af6a","highlight/mel":"b0e47db7983094a478b2","highlight/mercury":"40a5d5af1aae206d75a5","highlight/mipsasm":"b5a158f0d7678e318120","highlight/mizar":"1dcc83dde11f51b387bc","highlight/mojolicious":"4bf01d650669921516e4","highlight/monkey":"dccba8011220b2b785ec","highlight/moonscript":"0ccc6e77d885b4fb8211","highlight/n1ql":"d8db94cff97d58a7d979","highlight/nginx":"f582e5abd9aebf81e245","highlight/nim":"054c0c4bdcba80a07b80","highlight/nix":"35bb9d51dc0be8b0f8a1","highlight/node-repl":"0c3e792799f7ae02c87c","highlight/nsis":"21e0d2728e6213ff9ee1","highlight/objectivec":"da781f091bb8318a41c1","highlight/ocaml":"50bf3d91f71a494776b9","highlight/openscad":"56512a16bcdabf53c8b0","highlight/oxygene":"7e719a332a76bccd6d4c","highlight/parser3":"99a1c4f79e6829597689","highlight/perl":"285370b5f75c5d2ad484","highlight/pf":"d2c9ab04efea4d57b5ba","highlight/pgsql":"4e0e799163d8d9035345","highlight/php":"8e154d357b644c4045b0","highlight/php-template":"a490e770df4c90a596af","highlight/plaintext":"6105fbd096df916ddba8","highlight/pony":"ede10d276be6317d8673","highlight/powershell":"ffa64ea9aca6b9d362ac","highlight/processing":"d06c88cc78af97b5c5de","highlight/profile":"91ac49cc182ca1b66a97","highlight/prolog":"63abe17d37e19bb434be","highlight/properties":"b9216bd88a9a20e5e47b","highlight/protobuf":"65c0663b02b33553247f","highlight/puppet":"57788437af2860b1b251","highlight/purebasic":"d18616de05beb7ba40c7","highlight/python":"4e74477a40d0f1190890","highlight/python-repl":"90a5e88916e032e0bc29","highlight/q":"e2d4b11e4a9d29a452d1","highlight/qml":"4282ffa16a02600d1fd5","highlight/r":"3837f692daafbdacc5ae","highlight/reasonml":"744c4abe1444f5f2bfc6","highlight/rib":"e310f1e79c93e8513db9","highlight/roboconf":"bca7e4f5259523597047","highlight/routeros":"b3b440112ba738efe848","highlight/rsl":"ac28e6b0d15cd39a5e1b","highlight/ruby":"4da12e961a9f561c44b7","highlight/ruleslanguage":"ff0b1427c460bdc2da04","highlight/rust":"336c902bcde1d180fca0","highlight/sas":"be8038a1c2904bc7327d","highlight/scala":"fdd1fe35adb5b385d99f","highlight/scheme":"646f68927271a4f70ac5","highlight/scilab":"494f3481656e4cf1eab9","highlight/scss":"543e949af25ca86e2099","highlight/shell":"20350b489d682717ec37","highlight/smali":"d38835b75199b052bac3","highlight/smalltalk":"810f578c4eadab7c8349","highlight/sml":"7225c0ba571d39d9fcee","highlight/sqf":"d64c5bb873f584379de2","highlight/sql":"007679bd2d47099d92f4","highlight/sql_more":"fcdd5bdabc8a3c2776fd","highlight/stan":"cfecb0c978efe468ac73","highlight/stata":"4686b0f5296108cb24ff","highlight/step21":"f78afd01c2fb45ea4b55","highlight/stylus":"671e271fa6f13dd5f66e","highlight/subunit":"1c91062ed95108be43ce","highlight/swift":"369721213b205d3e29f7","highlight/taggerscript":"2550e1cd88751298d5e5","highlight/tap":"863ed554fdd43bb97a8b","highlight/tcl":"d4c1f5b58ded85f1375d","highlight/thrift":"bb758db3c15f50f18861","highlight/tp":"52db0cef11fbe4738e45","highlight/twig":"3c2d1055d31a3d60a436","highlight/typescript":"35294930f7b7f1129b99","highlight/vala":"275fadb39b111379785b","highlight/vbnet":"6ab5078ffb6e0612b492","highlight/vbscript":"a057a7373ac7e55ac261","highlight/vbscript-html":"8947b810e913fa6a35ef","highlight/verilog":"2310a83b5302851b3575","highlight/vhdl":"ee94bca9163f12c9af8e","highlight/vim":"c3637a49f110db3182d0","highlight/x86asm":"6476bf38a0b7eb46ecf1","highlight/xl":"774a3a8f82454ce61039","highlight/xml":"72709434b59a317fdb1a","highlight/xquery":"54c245e703ead55b2795","highlight/yaml":"d1f8f0af5a8be23353b7","highlight/zephir":"406b5d375c5d723f4bc0","files-modal":"c35b0f449c1853966f35"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},n="text:",o.l=(e,t,r,a)=>{if(i[e])i[e].push(t);else{var c,l;if(void 0!==r)for(var h=document.getElementsByTagName("script"),f=0;f<h.length;f++){var u=h[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){c=u;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+r),c.src=e),i[e]=[t];var s=(t,n)=>{c.onerror=c.onload=null,clearTimeout(g);var r=i[e];if(delete i[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(n))),t)return t(n)},g=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.j="viewer",o.p="/apps/text/js/",(()=>{var e={viewer:0};o.f.j=(t,i)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise(((i,r)=>n=e[t]=[i,r]));i.push(n[2]=r);var a=o.p+o.u(t),c=new Error;o.l(a,(i=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}}),"chunk-"+t,t)}};var t=(t,i)=>{var n,r,[a,c,l]=i,h=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(l)l(o);for(t&&t(i);h<a.length;h++)r=a[h],o.o(e,r)&&e[r]&&e[r][0](),e[a[h]]=0},i=self.webpackChunktext=self.webpackChunktext||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),(()=>{"use strict";const e={name:"ViewerComponent",components:{EditorWrapper:function(){return Promise.all([o.e("vendors"),o.e("editor")]).then(o.bind(o,94745))}},props:{filename:{type:String,default:null},fileid:{type:Number,default:null},active:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!0},shareToken:{type:String,default:null},mime:{type:String,default:null}},beforeMount:function(){void 0!==this.$parent.$parent&&this.$parent.$parent.onResize&&window.removeEventListener("resize",this.$parent.$parent.onResize)}};var t=o(93379),i=o.n(t),n=o(96197),r={insert:"head",singleton:!1};i()(n.Z,r);n.Z.locals;const a=(0,o(51900).Z)(e,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("EditorWrapper",{attrs:{"file-id":e.fileid,"relative-path":e.filename,active:e.active,autofocus:e.autofocus,"share-token":e.shareToken,mime:e.mime}})}),[],!1,null,null,null).exports;var c=o(74411),l=o(25108);function h(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}o.nc=btoa(OC.requestToken),o.p=OC.linkTo("text","js/"),document.addEventListener("DOMContentLoaded",(function(){void 0!==OCA.Viewer?OCA.Viewer.registerHandler({id:"text",mimes:[].concat(h(c.lF),h(c.w_)),component:a,group:null}):l.error("Viewer app is not installed")}))})()})();
//# sourceMappingURL=text-viewer.js.map?v=f22f8131f45b259fca21