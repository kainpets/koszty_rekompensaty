(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* Box sizing */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n:root {\r\n  --background-dark: rgba(0, 0, 0, 0.9);\r\n  --light-color: hsla(82, 46%, 94%, 1);\r\n}\r\n\r\n/* Reset margins */\r\n\r\nbody, h1, h2, h3, h4, h5, p, figure, picture {\r\n  margin: 0;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6, p {\r\n  font-weight: 800;\r\n}\r\n\r\n/* Custom properties */\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4vh;\r\n}\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  background-color: var(--background-dark);\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  \r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\ntable {\r\n  width: 60%;\r\n  border: 1px solid;\r\n  border-collapse: collapse;\r\n  font-size: 2rem;\r\n}\r\n\r\ntable tr td:hover {background-color: #ddd;}\r\n\r\nth, td {\r\n  border: 1px solid;\r\n  height: 50px;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  color:var(--light-color);\r\n  text-decoration: none;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};function h(){return document.createElement("th")}function v(e,t,n){const r=document.createElement("a");return r.href=e,r.textContent=t,r.classList.add(n),r}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Kalkulator kosztów rekompensaty",e.appendChild(t),e}()),document.body.appendChild(function(){const e=document.createElement("h2");e.textContent="Termin wymagalności zobowiązania: ",document.body.appendChild(e);const t=document.createElement("form");t.id="form";const n=document.createElement("input");return n.id="year",n.setAttribute("type","date"),n.setAttribute("name","date"),n.setAttribute("required",""),t.appendChild(n),t}()),document.body.appendChild(function(){const e=document.createElement("table"),t=document.createElement("thead");e.appendChild(t);const n=document.createElement("tr");t.appendChild(n);const r=h();r.textContent="> 5000 zł",n.appendChild(r);const o=h();o.textContent="> 50.000 zł",n.appendChild(o);const a=h();a.textContent="< 50.000 zł",n.appendChild(a);const i=document.createElement("tbody");return i.id="result-list",e.appendChild(i),e}()),document.body.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer"),e.appendChild(v("mailto:pawelstepniak22@gmail.com","pawelstepniak22@gmail.com","footer__link"));const t=document.createElement("ul");t.classList.add("social-list"),e.appendChild(t);const n=document.createElement("li");n.classList.add("social-list__item"),t.appendChild(n),n.appendChild(v("https://twitter.com/kainpets","placeholder","social-list__link"));const r=document.createElement("i");r.classList.add("fab"),r.classList.add("fa-twitter"),n.appendChild(r);const o=document.createElement("li");o.classList.add("social-list__item"),t.appendChild(o),o.appendChild(v("https://github.com/kainpets","placeholder","social-list__link"));const a=document.createElement("i");return a.classList.add("fab"),a.classList.add("fa-github"),o.appendChild(a),e}()),document.getElementById("form").addEventListener("change",(e=>{e.preventDefault();const t=document.getElementById("year").value;return console.log(t),async function(e){const t=await fetch("http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json\n    ");return await t.json()}().then((e=>console.log("resolved:",e))),function(){const e=document.getElementById("result-list"),t=document.createElement("tr");t.innerHTML="\n  <td>hi</td>\n  <td>wtf</td>\n  <td>ffs</td>\n  ",e.appendChild(t)}(),t}))})()})();