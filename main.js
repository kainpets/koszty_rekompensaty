(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,"",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),c=n.n(o),i=n(565),s=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),m=n(426),f={};function h(e,t,n){const r=document.createElement("a");return r.href=e,r.textContent=t,r.classList.add(n),r}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");t.textContent="Kalkulator kosztów rekompensaty",e.appendChild(t);const n=document.createElement("h2");return n.textContent="Termin wymagalności zobowiązania: ",e.appendChild(n),e}()),document.body.appendChild(function(){const e=document.createElement("form");e.id="form";const t=document.createElement("input");t.id="year",t.setAttribute("type","date"),t.setAttribute("name","date"),t.setAttribute("required",""),e.appendChild(t);const n=document.createElement("input");return n.id="submit-btn",n.setAttribute("type","submit"),e.appendChild(n),e}()),document.body.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer"),e.appendChild(h("mailto:pawelstepniak22@gmail.com","pawelstepniak22@gmail.com","footer__link"));const t=document.createElement("ul");t.classList.add("social-list"),e.appendChild(t);const n=document.createElement("li");n.classList.add("social-list__item"),t.appendChild(n),n.appendChild(h("https://twitter.com/kainpets","placeholder","social-list__link"));const r=document.createElement("i");r.classList.add("fab"),r.classList.add("fa-twitter"),n.appendChild(r);const a=document.createElement("li");a.classList.add("social-list__item"),t.appendChild(a),a.appendChild(h("https://github.com/kainpets","placeholder","social-list__link"));const o=document.createElement("i");return o.classList.add("fab"),o.classList.add("fa-github"),a.appendChild(o),e}()),document.getElementById("submit-btn").addEventListener("click",(e=>{e.preventDefault();const t=new Date(document.getElementById("year").value),n=t.toString().slice(4,7),r=`${t.toString().slice(11,15)}-${function(e){switch(e){case"Jan":return"01";case"Feb":return"02";case"Mar":return"03";case"Apr":return"04";case"May":return"05";case"Jun":return"06";case"Jul":return"07";case"Aug":return"08";case"Sep":return"09";case"Oct":return"10";case"Nov":return"11";case"Dec":return"12"}}(n)}`;return async function(e){const t=await fetch(`http://api.nbp.pl/api/exchangerates/rates/a/eur/${e}-04/?format=json`);return await t.json()}(r).then((e=>console.log("resolved:",e))),console.log(r),r}))})()})();