(function(n){function e(e){for(var t,u,o=e[0],d=e[1],h=e[2],f=0,i=[];f<o.length;f++)u=o[f],a[u]&&i.push(a[u][0]),a[u]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);l&&l(e);while(i.length)i.shift()();return r.push.apply(r,h||[]),c()}function c(){for(var n,e=0;e<r.length;e++){for(var c=r[e],t=!0,u=1;u<c.length;u++){var o=c[u];0!==a[o]&&(t=!1)}t&&(r.splice(e--,1),n=d(d.s=c[0]))}return n}var t={},u={app:0},a={app:0},r=[];function o(n){return d.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[n]||n)+"."+{"chunk-40f4cc33":"0b22fbad","chunk-21c61d39":"f038d6b5","chunk-2e670296":"f00f97e1","chunk-0105293d":"7b5e5980","chunk-19052d85":"fd357aeb","chunk-bf781f18":"10440c10","chunk-54123552":"e9efd0fd","chunk-1bc25989":"d8e1c37f","chunk-35cfadc4":"a6c19839","chunk-3d6c6a00":"b2091423","chunk-44212ff9":"134049af","chunk-5f864e8c":"ee230afd","chunk-66a1f2ec":"c86dfbb8","chunk-5df06d0d":"4757569a","chunk-c5034d40":"8941ccd8","chunk-f7ab6d8e":"afcfaa81","chunk-81d98f62":"15c39716","chunk-63baaadd":"6ea223ef","chunk-2505b5b7":"4f9a6f83","chunk-535abe6a":"c1a96032","chunk-a2b40a3e":"0e729534","chunk-fb246a6e":"e3fd70e4","chunk-5324621b":"040a9d09","chunk-5454782f":"74f7eed4","chunk-5572c6ca":"e2777df2","chunk-68808c8e":"aa2a376a","chunk-70704eed":"9a1d30e7",pdfjsWorker:"781657d3"}[n]+".js"}function d(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,d),c.l=!0,c.exports}d.e=function(n){var e=[],c={"chunk-21c61d39":1,"chunk-0105293d":1,"chunk-19052d85":1,"chunk-bf781f18":1,"chunk-54123552":1,"chunk-1bc25989":1,"chunk-35cfadc4":1,"chunk-3d6c6a00":1,"chunk-44212ff9":1,"chunk-5f864e8c":1,"chunk-66a1f2ec":1,"chunk-5df06d0d":1,"chunk-c5034d40":1,"chunk-f7ab6d8e":1,"chunk-81d98f62":1,"chunk-63baaadd":1,"chunk-2505b5b7":1,"chunk-535abe6a":1,"chunk-a2b40a3e":1,"chunk-fb246a6e":1,"chunk-5324621b":1,"chunk-5454782f":1,"chunk-5572c6ca":1,"chunk-68808c8e":1,"chunk-70704eed":1};u[n]?e.push(u[n]):0!==u[n]&&c[n]&&e.push(u[n]=new Promise(function(e,c){for(var t="css/"+({pdfjsWorker:"pdfjsWorker"}[n]||n)+"."+{"chunk-40f4cc33":"31d6cfe0","chunk-21c61d39":"5abbaebf","chunk-2e670296":"31d6cfe0","chunk-0105293d":"85ca614a","chunk-19052d85":"a993fdf9","chunk-bf781f18":"03555d72","chunk-54123552":"7de6502f","chunk-1bc25989":"1e81115a","chunk-35cfadc4":"7d797ad0","chunk-3d6c6a00":"23864591","chunk-44212ff9":"85ca614a","chunk-5f864e8c":"5cb69b04","chunk-66a1f2ec":"6408e359","chunk-5df06d0d":"94517ea8","chunk-c5034d40":"3a75ef6d","chunk-f7ab6d8e":"85ca614a","chunk-81d98f62":"d3c598e1","chunk-63baaadd":"e935173d","chunk-2505b5b7":"166b7368","chunk-535abe6a":"090562ce","chunk-a2b40a3e":"dc6fa0e5","chunk-fb246a6e":"602d88cf","chunk-5324621b":"90c6dbc6","chunk-5454782f":"58ed0014","chunk-5572c6ca":"ebf9be52","chunk-68808c8e":"d4457709","chunk-70704eed":"17b05fd0",pdfjsWorker:"31d6cfe0"}[n]+".css",a=d.p+t,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],f=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(f===t||f===a))return e()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){h=i[o],f=h.getAttribute("data-href");if(f===t||f===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var t=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+n+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=t,delete u[n],l.parentNode.removeChild(l),c(r)},l.href=a;var k=document.getElementsByTagName("head")[0];k.appendChild(l)}).then(function(){u[n]=0}));var t=a[n];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise(function(e,c){t=a[n]=[e,c]});e.push(t[2]=r);var h,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=o(n),h=function(e){f.onerror=f.onload=null,clearTimeout(i);var c=a[n];if(0!==c){if(c){var t=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+t+": "+u+")");r.type=t,r.request=u,c[1](r)}a[n]=void 0}};var i=setTimeout(function(){h({type:"timeout",target:f})},12e4);f.onerror=f.onload=h,document.head.appendChild(f)}return Promise.all(e)},d.m=n,d.c=t,d.d=function(n,e,c){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)d.d(c,t,function(e){return n[e]}.bind(null,t));return c},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var i=0;i<h.length;i++)e(h[i]);var l=f;r.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("56d7")},"56d7":function(n,e,c){"use strict";c.r(e);c("cadf"),c("551c"),c("f751"),c("097d"),c("bea1"),c("f7db"),c("579f"),c("7507"),c("a8ab"),c("6b42"),c("587a"),c("f466");(function(){if("function"===typeof window.CustomEvent)return!1;function n(n,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(n,e.bubbles,e.cancelable,e.detail),c}n.prototype=window.Event.prototype,window.CustomEvent=n})();var t=c("a026"),u=c("5f5b"),a=function(){var n=this,e=n.$createElement,c=n._self._c||e;return c("router-view")},r=[],o={name:"app"},d=o,h=(c("5c0b"),c("2877")),f=Object(h["a"])(d,a,r,!1,null,null,null),i=f.exports,l=c("8c4f"),k=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-f7ab6d8e"),c.e("chunk-2e670296"),c.e("chunk-81d98f62")]).then(c.bind(null,"b2a9"))},p=function(){return c.e("chunk-5454782f").then(c.bind(null,"4e2d"))},b=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-21c61d39")]).then(c.bind(null,"fda5"))},s=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-f7ab6d8e"),c.e("chunk-63baaadd"),c.e("chunk-a2b40a3e")]).then(c.bind(null,"9199"))},m=function(){return c.e("chunk-68808c8e").then(c.bind(null,"3c77"))},g=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-3d6c6a00")]).then(c.bind(null,"7788"))},v=function(){return Promise.all([c.e("chunk-54123552"),c.e("chunk-5324621b")]).then(c.bind(null,"b521"))},y=function(){return c.e("chunk-70704eed").then(c.bind(null,"3e33"))},P=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-44212ff9"),c.e("chunk-5f864e8c")]).then(c.bind(null,"6b4e"))},w=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-44212ff9"),c.e("chunk-66a1f2ec")]).then(c.bind(null,"41b6"))},j=function(){return c.e("chunk-5572c6ca").then(c.bind(null,"10ff"))},S=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-2e670296"),c.e("chunk-0105293d"),c.e("chunk-bf781f18")]).then(c.bind(null,"5729"))},C=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-2e670296"),c.e("chunk-0105293d"),c.e("chunk-19052d85")]).then(c.bind(null,"42f5"))},E=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-2e670296"),c.e("chunk-54123552"),c.e("chunk-1bc25989")]).then(c.bind(null,"9576"))},A=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-54123552"),c.e("chunk-5df06d0d")]).then(c.bind(null,"9544"))},O=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-c5034d40")]).then(c.bind(null,"0990"))},_=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-35cfadc4")]).then(c.bind(null,"c3ab"))},T=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-f7ab6d8e"),c.e("chunk-63baaadd"),c.e("chunk-535abe6a")]).then(c.bind(null,"419e"))},x=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-f7ab6d8e"),c.e("chunk-63baaadd"),c.e("chunk-fb246a6e")]).then(c.bind(null,"f3aa"))},L=function(){return Promise.all([c.e("chunk-40f4cc33"),c.e("chunk-f7ab6d8e"),c.e("chunk-63baaadd"),c.e("chunk-2505b5b7")]).then(c.bind(null,"e16e"))};t["default"].use(l["a"]);var N=new l["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/docu-sign",redirect:"/docu-sign/add-document",name:"Documents",component:k,children:[{path:"add-document",name:"AddDocument",component:p},{path:"add-recipients",name:"AddRecipients",component:b},{path:"prepare",name:"Prepare",component:s},{path:"review",name:"Review",component:m}]},{path:"/profile",redirect:"/profile/account",name:"Profile",component:g,children:[{path:"account",name:"Account",component:E},{path:"custom-branding",name:"CustomBranding",component:A}]},{path:"/signature",redirect:"/signature/signature-stamp",name:"Signature",component:g,children:[{path:"signature-stamp",name:"SignatureStamp",component:O}]},{path:"/sign",redirect:"/sign/check",name:"Sign",component:_,children:[{path:"check",name:"SignCheck",component:T},{path:"signing",name:"Signing",component:x},{path:"complition",name:"Complition",component:L}]},{path:"/",redirect:"/landing",name:"LandingPage",component:g,children:[{path:"/landing",name:"NormalSign",component:v},{path:"/camera",name:"Camera",component:y}]},{path:"/payment",redirect:"/payment/document-list",name:"Payment",component:g,children:[{path:"document-list",name:"DocumentList",component:P},{path:"template-list",name:"TemplateList",component:w},{path:"upgrade-plan",name:"UpgradeYourPlan",component:j},{path:"pricing-plan",name:"PricingPlan",component:S},{path:"upgrade-to-plan",name:"UpgradeToPlan",component:C}]}]});t["default"].use(u["a"]),new t["default"]({el:"#app",router:N,template:"<App/>",components:{App:i}})},"5c0b":function(n,e,c){"use strict";var t=c("5e27"),u=c.n(t);u.a},"5e27":function(n,e,c){}});
//# sourceMappingURL=app.d266e856.js.map