(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[194],{255:function(t,n,r){"use strict";r.r(n);var o=r(256),e=r.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){r.d(n,t,(function(){return o[t]}))}(a);n.default=e.a},256:function(r,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=c(e(400)),i=c(e(739)),s=c(e(211));function c(t){return t&&t.__esModule?t:{default:t}}var l={name:"SessionList",components:{Avatar:a.default,Popover:i.default},directives:{tooltip:s.default},props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{myName:""}},computed:{showAuthorAnnotations:{get:function(){return this.$store.state.showAuthorAnnotations},set:function(t){this.$store.commit("setShowAuthorAnnotations",t)}},editorsTooltip:function(){var r=t("text","Currently active users:")+" ";if(this.sessionPopoverList.length>0){var o=this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", "),e=this.activeSessions.slice(3).length;return r+o+" "+n("text","and %n other editor","and %n other editors",e)}return r+this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", ")},activeSessions:function(){return Object.values(this.sessions).filter((function(t){return t.lastContact>Date.now()/1e3-90&&!t.isCurrent&&(null!==t.userId||null!==t.guestName)})).sort((function(t,n){return t.lastContact<n.lastContact}))},currentSession:function(){return Object.values(this.sessions).find((function(t){return t.isCurrent}))},sessionStyle:function(){return function(t){return{"border-color":t.color,"background-color":t.color+" !important"}}},avatarStyle:function(){return function(t){return{opacity:t.lastContact>Date.now()/1e3-60?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionPopoverList:function(){return this.activeSessions.slice(3)}}};o.default=l},738:function(t,n,r){"use strict";r.r(n);var o=r(758),e=r(255);for(var a in e)["default"].indexOf(a)<0&&function(t){r.d(n,t,(function(){return e[t]}))}(a);r(759);var i=r(54),s=Object(i.a)(e.default,o.a,o.b,!1,null,"7f4151b8",null);n.default=s.exports},739:function(t,n,r){"use strict";(function(t){var o,e,a;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r,s){"object"==i(n)&&"object"==i(t)?t.exports=s():(e=[],void 0===(a="function"==typeof(o=s)?o.apply(n,e):o)||(t.exports=a))}(window,(function(){return function(t){var n={};function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=n,r.d=function(t,n,o){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==i(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(o,e,function(n){return t[n]}.bind(null,e));return o},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/dist/",r(r.s=38)}({0:function(t,n,r){function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],o=!0,e=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!n||r.length!==n);o=!0);}catch(t){e=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(e)throw a}}return r}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}t.exports=function(t){var n=o(t,4),r=n[1],e=n[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),s="/*# ".concat(i," */"),c=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[r].concat(c).concat([s]).join("\n")}return[r].join("\n")}},1:function(t,n,r){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=t(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(t,r,o){"string"==typeof t&&(t=[[null,t,""]]);var e={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(e[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&e[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},10:function(t,n){t.exports=r(212)},2:function(t,n,r){var o,e=function(){var t={};return function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[n]=r}return t[n]}}(),a=[];function i(t){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===t){n=r;break}return n}function s(t,n){for(var r={},o=[],e=0;e<t.length;e++){var s=t[e],c=n.base?s[0]+n.base:s[0],l=r[c]||0,p="".concat(c," ").concat(l);r[c]=l+1;var u=i(p),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:p,updater:C(d,n),references:1}),o.push(p)}return o}function c(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var a=r.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var i=e(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,p=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function u(t,n,r,o){var e=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=p(n,e);else{var a=document.createTextNode(e),i=t.childNodes;i[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a)}}function d(t,n,r){var o=r.css,e=r.media,a=r.sourceMap;if(e?t.setAttribute("media",e):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var A=null,f=0;function C(t,n){var r,o,e;if(n.singleton){var a=f++;r=A||(A=c(n)),o=u.bind(null,r,a,!1),e=u.bind(null,r,a,!0)}else r=c(n),o=d.bind(null,r,n),e=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else e()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=s(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<r.length;o++){var e=i(r[o]);a[e].references--}for(var c=s(t,n),l=0;l<r.length;l++){var p=i(r[l]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}r=c}}}},28:function(t,n,r){var o=r(0),e=r.n(o),a=r(1),i=r.n(a)()(e.a);i.push([t.i,".popover{z-index:100000;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.popover__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius);background:var(--color-main-background)}.popover__arrow{position:absolute;z-index:1;width:0;height:0;margin:10px;border-style:solid;border-color:var(--color-main-background)}.popover[x-placement^='top']{margin-bottom:10px}.popover[x-placement^='top'] .popover__arrow{bottom:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='bottom']{margin-top:10px}.popover[x-placement^='bottom'] .popover__arrow{top:-10px;left:calc(50% - $arrow-width);margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='right']{margin-left:10px}.popover[x-placement^='right'] .popover__arrow{top:calc(50% - $arrow-width);left:-10px;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent !important;border-bottom-color:transparent !important;border-left-color:transparent !important}.popover[x-placement^='left']{margin-right:10px}.popover[x-placement^='left'] .popover__arrow{top:calc(50% - $arrow-width);right:-10px;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent !important;border-right-color:transparent !important;border-bottom-color:transparent !important}.popover[aria-hidden='true']{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.popover[aria-hidden='false']{visibility:visible;transition:opacity var(--animation-quick);opacity:1}\n","",{version:3,sources:["webpack://./Popover.vue"],names:[],mappings:"AAmFA,SACC,cAAe,CACf,wBAAyB,CAEzB,sDAAuD,CAEvD,gBACC,SAAU,CACV,4BAA6B,CAC7B,kCAAmC,CACnC,uCAAwC,CACxC,gBAGA,iBAAkB,CAClB,SAAU,CACV,OAAQ,CACR,QAAS,CACT,WApBgB,CAqBhB,kBAAmB,CACnB,yCAA0C,CApB5C,6BAwBE,kBA1BgB,CAElB,6CA2BG,YA7Be,CA8Bf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAjCe,CAkCf,yCAA0C,CAC1C,0CAA2C,CAC3C,wCAAyC,CAlC5C,gCAuCE,eAzCgB,CAElB,gDA0CG,SA5Ce,CA6Cf,6BAA8B,CAC9B,YAAa,CACb,eAAgB,CAChB,6BAhDe,CAiDf,uCAAwC,CACxC,yCAA0C,CAC1C,wCAAyC,CAjD5C,+BAsDE,gBAxDgB,CAElB,+CAyDG,4BAA6B,CAC7B,UA5De,CA6Df,cAAe,CACf,aAAc,CACd,6BAAsD,CACtD,uCAAwC,CACxC,0CAA2C,CAC3C,wCAAyC,CAhE5C,8BAqEE,iBAvEgB,CAElB,8CAwEG,4BAA6B,CAC7B,WA3Ee,CA4Ef,cAAe,CACf,aAAc,CACd,6BA9Ee,CA+Ef,uCAAwC,CACxC,yCAA0C,CAC1C,0CAA2C,CA/E9C,6BAoFE,iBAAkB,CAClB,2EAA6E,CAC7E,SAAU,CAtFZ,8BA0FE,kBAAmB,CACnB,yCAA0C,CAC1C,SAAU",sourcesContent:["$scope_version:\"ed18ae7\"; @import 'variables';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$arrow-width: 10px;\n\n.popover {\n\tz-index: 100000;\n\tdisplay: block !important;\n\n\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t&__inner {\n\t\tpadding: 0;\n\t\tcolor: var(--color-main-text);\n\t\tborder-radius: var(--border-radius);\n\t\tbackground: var(--color-main-background);\n\t}\n\n\t&__arrow {\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tmargin: $arrow-width;\n\t\tborder-style: solid;\n\t\tborder-color: var(--color-main-background);\n\t}\n\n\t&[x-placement^='top'] {\n\t\tmargin-bottom: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\tbottom: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: $arrow-width $arrow-width 0 $arrow-width;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='bottom'] {\n\t\tmargin-top: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: -$arrow-width;\n\t\t\tleft: calc(50% - $arrow-width);\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t\tborder-width: 0 $arrow-width $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='right'] {\n\t\tmargin-left: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tleft: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width $arrow-width $arrow-width 0;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t\tborder-left-color: transparent !important;\n\t\t}\n\t}\n\n\t&[x-placement^='left'] {\n\t\tmargin-right: $arrow-width;\n\n\t\t.popover__arrow {\n\t\t\ttop: calc(50% - $arrow-width);\n\t\t\tright: -$arrow-width;\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 0;\n\t\t\tborder-width: $arrow-width 0 $arrow-width $arrow-width;\n\t\t\tborder-top-color: transparent !important;\n\t\t\tborder-right-color: transparent !important;\n\t\t\tborder-bottom-color: transparent !important;\n\t\t}\n\t}\n\n\t&[aria-hidden='true'] {\n\t\tvisibility: hidden;\n\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\topacity: 0;\n\t}\n\n\t&[aria-hidden='false'] {\n\t\tvisibility: visible;\n\t\ttransition: opacity var(--animation-quick);\n\t\topacity: 1;\n\t}\n}\n\n"],sourceRoot:""}]),n.a=i},29:function(t,n){},3:function(t,n,r){function o(t,n,r,o,e,a,i,s){var c,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):e&&(c=s?function(){e.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:e),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(t,n){return c.call(n),p(t,n)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}r.d(n,"a",(function(){return o}))},38:function(t,n,r){r.r(n);var o={name:"Popover",components:{VPopover:r(10).VPopover}},e=r(2),a=r.n(e),i=r(28),s=(a()(i.a,{insert:"head",singleton:!1}),i.a.locals,r(3)),c=r(29),l=r.n(c),p=Object(s.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("VPopover",this._g(this._b({attrs:{"popover-base-class":"popover","popover-wrapper-class":"popover__wrapper","popover-arrow-class":"popover__arrow","popover-inner-class":"popover__inner"}},"VPopover",this.$attrs,!1),this.$listeners),[this._t("trigger"),this._v(" "),n("template",{slot:"popover"},[this._t("default")],2)],2)}),[],!1,null,null,null);"function"==typeof l.a&&l()(p);var u=p.exports;
/**
       * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
       *
       * @author Marco Ambrosini <marcoambrosini@pm.me>
       *
       * @license GNU AGPL version 3 or any later version
       *
       * This program is free software: you can redistribute it and/or modify
       * it under the terms of the GNU Affero General Public License as
       * published by the Free Software Foundation, either version 3 of the
       * License, or (at your option) any later version.
       *
       * This program is distributed in the hope that it will be useful,
       * but WITHOUT ANY WARRANTY; without even the implied warranty of
       * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
       * GNU Affero General Public License for more details.
       *
       * You should have received a copy of the GNU Affero General Public License
       * along with this program. If not, see <http://www.gnu.org/licenses/>.
       *
       */n.default=u}})}))}).call(this,r(206)(t))},740:function(t,n,r){"use strict";var o=r(64),e=r.n(o),a=r(65),i=r.n(a)()(e.a);i.push([t.i,".avatar-list[data-v-7f4151b8]{border:none;background-color:var(--color-main-background);padding:0;margin:0;padding-left:6px;display:inline-flex;flex-direction:row-reverse}.avatar-list[data-v-7f4151b8]:focus{background-color:#eee}.avatar-list .avatar-wrapper[data-v-7f4151b8]{margin:6px;margin-right:-8px;margin-left:0}.avatar-list .icon-more[data-v-7f4151b8],.avatar-list .icon-settings-dark[data-v-7f4151b8]{background-color:var(--color-background-dark);width:36px;height:36px;margin:6px 6px 6px 0px}.avatar-wrapper[data-v-7f4151b8]{width:32px;height:32px;z-index:1;border-radius:50%;overflow:hidden;border:2px solid var(--color-main-background);box-sizing:content-box !important}.session-menu[data-v-7f4151b8]{max-width:280px;padding-bottom:6px}.session-menu ul li[data-v-7f4151b8]{align-items:center;display:flex;padding:6px}.session-menu ul li .avatar-wrapper[data-v-7f4151b8]{margin-right:6px}label[data-v-7f4151b8]{display:block;margin:8px}.hint[data-v-7f4151b8]{margin:8px;color:var(--color-text-maxcontrast)}\n","",{version:3,sources:["webpack://./src/components/SessionList.vue"],names:[],mappings:"AA4JA,8BACC,WAAY,CACZ,6CAA8C,CAC9C,SAAU,CACV,QAAS,CACT,gBAAiB,CACjB,mBAAoB,CACpB,0BAA2B,CAP5B,oCAUE,qBAAsB,CAVxB,8CAcE,UAAW,CACX,iBAAkB,CAClB,aAAc,CAhBhB,2FAoBE,6CAA8C,CAC9C,UAAW,CACX,WAAY,CACZ,sBAAuB,CACvB,iCAID,UAAW,CACX,WAAY,CACZ,SAAU,CACV,iBAAkB,CAClB,eAAgB,CAChB,6CAA8C,CAC9C,iCAAkC,CAClC,+BAGA,eAAgB,CAChB,kBAAmB,CAFpB,qCAKE,kBAAmB,CACnB,YAAa,CACb,WAAY,CAPd,qDAUG,gBAAiB,CACjB,uBAKF,aAAc,CACd,UAAW,CACX,uBAGA,UAAW,CACX,mCAAoC",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.avatar-list {\n\tborder: none;\n\tbackground-color: var(--color-main-background);\n\tpadding: 0;\n\tmargin: 0;\n\tpadding-left: 6px;\n\tdisplay: inline-flex;\n\tflex-direction: row-reverse;\n\n\t&:focus {\n\t\tbackground-color: #eee;\n\t}\n\n\t.avatar-wrapper {\n\t\tmargin: 6px;\n\t\tmargin-right: -8px;\n\t\tmargin-left: 0;\n\t}\n\n\t.icon-more, .icon-settings-dark {\n\t\tbackground-color: var(--color-background-dark);\n\t\twidth: 36px;\n\t\theight: 36px;\n\t\tmargin: 6px 6px 6px 0px;\n\t}\n}\n\n.avatar-wrapper {\n\twidth: 32px;\n\theight: 32px;\n\tz-index: 1;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder: 2px solid var(--color-main-background);\n\tbox-sizing: content-box !important;\n}\n\n.session-menu {\n\tmax-width: 280px;\n\tpadding-bottom: 6px;\n\n\tul li {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tpadding: 6px;\n\n\t\t.avatar-wrapper {\n\t\t\tmargin-right: 6px;\n\t\t}\n\t}\n}\n\nlabel {\n\tdisplay: block;\n\tmargin: 8px;\n}\n\n.hint {\n\tmargin: 8px;\n\tcolor: var(--color-text-maxcontrast);\n}\n"],sourceRoot:""}]),n.a=i},758:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return e}));var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Popover",{staticClass:"session-list",attrs:{placement:"top"}},[r("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.editorsTooltip,expression:"editorsTooltip",modifiers:{bottom:!0}}],staticClass:"avatar-list",attrs:{slot:"trigger"},slot:"trigger"},[r("div",{staticClass:"avatardiv",class:{"icon-more":t.sessionPopoverList.length>0,"icon-settings-dark":0===t.sessionPopoverList.length}}),t._v(" "),t._l(t.sessionsVisible,(function(n){return r("div",{key:n.id,staticClass:"avatar-wrapper",style:t.sessionStyle(n)},[r("Avatar",{style:t.avatarStyle(n),attrs:{user:n.userId?n.userId:n.guestName,"is-guest":null===n.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:32}})],1)}))],2),t._v(" "),[r("div",{staticClass:"session-menu"},[r("ul",[t._t("default"),t._v(" "),t._l(t.sessionPopoverList,(function(n){return r("li",{key:n.id,style:t.avatarStyle(n)},[r("div",{staticClass:"avatar-wrapper",style:t.sessionStyle(n)},[r("Avatar",{attrs:{user:n.userId?n.userId:n.guestName,"is-guest":null===n.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:32}})],1),t._v("\n\t\t\t\t\t"+t._s(n.guestName?n.guestName:n.displayName)+"\n\t\t\t\t")])}))],2),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.showAuthorAnnotations,expression:"showAuthorAnnotations"}],staticClass:"checkbox",attrs:{id:"toggle-color-annotations",type:"checkbox"},domProps:{checked:Array.isArray(t.showAuthorAnnotations)?t._i(t.showAuthorAnnotations,null)>-1:t.showAuthorAnnotations},on:{change:function(n){var r=t.showAuthorAnnotations,o=n.target,e=!!o.checked;if(Array.isArray(r)){var a=t._i(r,null);o.checked?a<0&&(t.showAuthorAnnotations=r.concat([null])):a>-1&&(t.showAuthorAnnotations=r.slice(0,a).concat(r.slice(a+1)))}else t.showAuthorAnnotations=e}}}),t._v(" "),r("label",{attrs:{for:"toggle-color-annotations"}},[t._v(t._s(t.t("text","Show color annotations")))]),t._v(" "),r("p",{staticClass:"hint"},[t._v("\n\t\t\t\t"+t._s(t.t("text","Color annotations will only show during editing sessions, they are not persisted after closing the document."))+"\n\t\t\t")])])]],2)},e=[]},759:function(t,n,r){"use strict";var o=r(63),e=r.n(o),a=r(740),i={insert:"head",singleton:!1};e()(a.a,i),a.a.locals}}]);
//# sourceMappingURL=editor-collab.js.map?v=7551c41db8929f16efae