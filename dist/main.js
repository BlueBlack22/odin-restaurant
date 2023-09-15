(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Mooli&display=swap);"]),o.push([n.id,":root {\n    --china-rose: #B15E6C;\n    --puce: #CF8BA9;\n    --pink-lavender: #DCB6D5;\n    --periwinkle-blue: #B3B3F1;\n    --periwinkle-violet: #CEC2FF;\n}\n\nhtml, \nbody {\n    height: 100%;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    font-family: Mooli, sans-serif;\n    background-color: var(--periwinkle-violet);\n}\n\n#content {\n    border: 1px solid green;\n    height: 100%;\n    display: grid;\n    grid-template-rows: 10vh auto;\n}\n\n#nav-bar {\n    border: 1px solid yellow;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.nav-tab {\n    border: 1px solid black;\n    width: 15vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    height: 100%;\n}\n\n#container {\n    border: 1px solid blue;\n    grid-row: 2 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.home {\n    border: 1px solid red;\n    padding: 2vw;\n    text-align: center;\n}\n\n.para-main {\n    font-size: 6rem;\n    color: var(--china-rose);\n}\n\n.para-secondary {\n    font-size: 2rem;\n}\n\n.para-desc {\n    font-size: 1.5rem;\n}\n\n#menu {\n    border: 1px solid red;\n    padding: 3vh 1vh;\n    min-width: 80vw;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n.menu-header {\n    text-align: center;\n    font-size: 3rem;\n    grid-row: 1 / 2;\n}\n\n#menu-content {\n    grid-row: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 2vh;\n}\n\n.menu-card {\n    border: 1px solid black;\n    padding: 2vh;\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-template-rows: auto 1fr;\n    height: 200px;\n}\n\n.card-img {\n    height: 15vh;\n    width: auto;\n    grid-column: 1 / 3;\n    justify-self: center;\n}\n\n.card-title {\n    padding: 0;\n    margin: 2vh 0;\n    font-size: 1.5rem;\n    justify-self: center;\n    align-self: flex-end;\n}\n\n.card-price {\n    padding: 0;\n    margin: 2vh 0;\n    font-size: 1.8rem;\n    font-weight: 600;\n    justify-self: center;\n    align-self: flex-end;\n}\n\n#contact {\n    border: 1px solid black;\n    padding: 2vh;\n}\n\n.contact-header {\n    font-size: 3rem;\n    text-align: center;\n}\n\n.contact-section-header {\n    font-size: 2rem;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    list-style: none;\n    font-size: 1.3rem;\n}\n\n.contact-location > img {\n    padding: 0 2vh;\n}\n",""]);const c=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var c=t(i[o]);e[c].references--}for(var d=r(n,a),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};function f(n){const e=document.createElement("p");return e.classList.add("para"),e.textContent=n,e}function g(n,e){const t=document.createElement("div");return t.classList.add("nav-tab"),t.setAttribute("id",e),t.textContent=n,t}h.styleTagTransform=u(),h.setAttributes=d(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const v=t.p+"6516b26eec0ce360cb7b.png",y=t.p+"ed383590179e2926a351.png",b=t.p+"e47dbebdc95ec8a955b0.png",C=t.p+"6c05076f7b7d0391e280.png",x=t.p+"55c2c851b41ec6e604a4.png",w=t.p+"eec8b6d59bc160013d41.png";function E(n,e,t){const r=document.createElement("div");r.classList.add("menu-card");const a=document.createElement("img");a.classList.add("card-img"),a.src=n,a.alt="sushi picture",r.appendChild(a);const i=document.createElement("p");i.classList.add("card-title"),i.innerText=e,r.appendChild(i);const o=document.createElement("p");return o.classList.add("card-price"),o.innerText=t,r.appendChild(o),r}const L=t.p+"fb062852576e3e625edb.png";function k(n,e){const t=document.createElement("p");return t.classList.add("para"),void 0!==e&&t.classList.add(e),t.innerText=n,t}function T(n){const e=document.createElement("li");return e.textContent=n,e}function M(n,e){const t=document.createElement("div");return void 0!==n&&t.setAttribute("id",n),void 0!==e&&t.classList.add(e),t}const S=document.getElementById("content");S.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","nav-bar"),n.appendChild(g("Menu","menu-tab")),n.appendChild(g("Home","home-tab")),n.appendChild(g("Contact","contact-tab")),n}());const A=document.createElement("div");function j(n){switch(A.innerText="",n){case"home":A.appendChild(function(){const n=document.createElement("div");n.classList.add("home");const e=f("Pink Shrimp Sushi");e.classList.add("para-main"),n.appendChild(e);const t=f("Best sushi restaurant in your city since 1998!");t.classList.add("para-secondary"),n.appendChild(t);const r=f("Proudly making the best sushi in your city using only the freshest, locally caught fish and locally grown ingredients.");return r.classList.add("para-desc"),n.appendChild(r),n}());break;case"menu":A.appendChild(function(){const n=document.createElement("div");n.setAttribute("id","menu");const e=document.createElement("p");e.classList.add("menu-header"),e.textContent="Menu",n.appendChild(e);const t=document.createElement("div");return t.setAttribute("id","menu-content"),t.appendChild(E(v,"Nigiri","$3")),t.appendChild(E(y,"Maki","$2")),t.appendChild(E(b,"Uramaki","$4")),t.appendChild(E(C,"Gunkan Maki","$5")),t.appendChild(E(x,"Inari","$3")),t.appendChild(E(w,"Temari","$4")),n.appendChild(t),n}());break;case"contact":A.appendChild(function(){const n=M("contact");n.appendChild(k("Contact","contact-header"));const e=M(void 0,"contact-hours");e.appendChild(k("Opening hours","contact-section-header"));const t=document.createElement("ul");t.appendChild(T("Monday: closed")),t.appendChild(T("Tuesday - Friday: 1pm - 9pm")),t.appendChild(T("Saturday - Sunday: 2pm - 10pm")),e.appendChild(t),n.appendChild(e);const r=M(void 0,"contact-location");r.appendChild(k("Location","contact-section-header"));const a=document.createElement("img");return a.src=L,a.alt="map picture",r.appendChild(a),n.appendChild(r),n}())}}A.setAttribute("id","container"),S.appendChild(A),document.getElementById("menu-tab").addEventListener("click",(n=>j("menu"))),document.getElementById("home-tab").addEventListener("click",(n=>j("home"))),document.getElementById("contact-tab").addEventListener("click",(n=>j("contact"))),j("home")})()})();