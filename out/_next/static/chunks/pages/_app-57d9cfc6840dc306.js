(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{9477:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(5893),o=r(7294);t.default=function({html:e,height:t=null,width:r=null,children:s,dataNtpc:i=""}){return(0,o.useEffect)((()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:`next-third-parties-${i}`}})}),[i]),(0,n.jsxs)(n.Fragment,{children:[s,e?(0,n.jsx)("div",{style:{height:null!=t?`${t}px`:"auto",width:null!=r?`${r}px`:"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:e}}):null]})}},7834:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;const o=r(5893),s=r(7294),i=n(r(4298));let a;t.GoogleAnalytics=function(e){const{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===a&&(a=r),(0,s.useEffect)((()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:`\n          window['${r}'] = window['${r}'] || [];\n          function gtag(){window['${r}'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '${t}');`}}),(0,o.jsx)(i.default,{id:"_next-ga",src:`https://www.googletagmanager.com/gtag/js?id=${t}`})]})},t.sendGAEvent=function(...e){void 0!==a?window[a]?window[a].push(arguments):console.warn(`@next/third-parties: GA dataLayer ${a} does not exist`):console.warn("@next/third-parties: GA has not been initialized")}},3632:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(5893),s=r(6257),i=n(r(9477));t.default=function(e){const{apiKey:t,...r}=e,n={...r,key:t},{html:a}=(0,s.GoogleMapsEmbed)(n);return(0,o.jsx)(i.default,{height:n.height||null,width:n.width||null,html:a,dataNtpc:"GoogleMapsEmbed"})}},674:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;const o=r(5893),s=r(7294),i=n(r(4298));let a;t.GoogleTagManager=function(e){const{gtmId:t,dataLayerName:r="dataLayer",auth:n,preview:l,dataLayer:c}=e;void 0===a&&(a=r);const u="dataLayer"!==r?`&l=${r}`:"",d=n?`&gtm_auth=${n}`:"",f=l?`&gtm_preview=${l}&gtm_cookies_win=x`:"";return(0,s.useEffect)((()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:`\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ${c?`w[l].push(${JSON.stringify(c)})`:""}\n      })(window,'${r}');`}}),(0,o.jsx)(i.default,{id:"_next-gtm","data-ntpc":"GTM",src:`https://www.googletagmanager.com/gtm.js?id=${t}${u}${d}${f}`})]})};t.sendGTMEvent=e=>{void 0!==a?window[a]?window[a].push(e):console.warn(`@next/third-parties: GTM dataLayer ${a} does not exist`):console.warn("@next/third-parties: GTM has not been initialized")}},9692:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=r(3632);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return n(o).default}});var s=r(1494);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return n(s).default}});var i=r(674);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var a=r(7834);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return a.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return a.sendGAEvent}})},1494:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(5893),s=n(r(4298)),i=r(6257),a=n(r(9477)),l={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){const{html:t,scripts:r,stylesheets:n}=(0,i.YouTubeEmbed)(e);return(0,o.jsx)(a.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null===r||void 0===r?void 0:r.map((e=>(0,o.jsx)(s.default,{src:e.url,strategy:l[e.strategy],stylesheets:n},e.url)))})}},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7067)}])},2455:function(e,t,r){"use strict";r.d(t,{gw:function(){return n},m7:function(){return o},mM:function(){return s}});var n=function(e,t){setTimeout((function(){}),e)},o=function(e){var t=[];if(!e.parentNode)return t;for(var r=e.parentNode.firstChild;r;)1===r.nodeType&&r!==e&&t.push(r),r=r.nextSibling;return t},s=function(e,t){e.style.left=t}},7067:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(6042),o=r(5893),s=r(7294),i=r(9008),a=r.n(i),l=r(4298),c=r.n(l),u=function(){var e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer");window.onmousemove=function(r){t.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",e.style.transform="translate("+r.clientX+"px, "+r.clientY+"px)",r.clientY,r.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(r){r.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},d=function(){return s.useEffect((function(){u()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"mouse-cursor cursor-outer"}),(0,o.jsx)("div",{className:"mouse-cursor cursor-inner"})]})},f=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,o=t-r*t/n;e.style.strokeDashoffset=o};r(),window.addEventListener("scroll",r);var n=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?n.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),n.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},m=function(){return s.useEffect((function(){f()}),[]),(0,o.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,o.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,o.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})},p=r(2455),g=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector(".hamenu")&&((0,p.gw)(300,(0,p.mM)(document.querySelector(".hamenu"),"-100%")),document.querySelector(".topnav .menu-icon").classList.remove("open")),document.querySelector("#preloader").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&document.querySelector("#preloader").classList.add("isdone"),document.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone")}))},y=r(2806),h=function(){return s.useEffect((function(){var e=document.querySelector("body");y.QP?(g(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")})),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"".concat(!0===y.QP?"showX":"hideX"),children:(0,o.jsx)("div",{id:"preloader"})}),y.QP?(0,o.jsx)(c(),{id:"pace",strategy:"beforeInteractive",src:"/js/pace.min.js"}):""]})},v=(r(472),{color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0}),b=s.createContext&&s.createContext(v),w=function(){return w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)},j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function _(e){return e&&e.map((function(e,t){return s.createElement(e.tag,w({key:t},e.attr),_(e.child))}))}function O(e){return function(t){return s.createElement(x,w({attr:w({},e.attr)},t),_(e.child))}}function x(e){var t=function(t){var r,n=e.attr,o=e.size,i=e.title,a=j(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",w({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:r,style:w(w({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&s.createElement("title",null,i),e.children)};return void 0!==b?s.createElement(b.Consumer,null,(function(e){return t(e)})):t(v)}function E(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}var M=function(){return(0,o.jsx)("div",{className:"floating-whatsapp-button",onClick:function(){var e="https://api.whatsapp.com/send?phone=".concat(923145154682,"&text=").concat(encodeURIComponent("MESSAGE"));window.open(e,"_blank")},children:(0,o.jsx)(E,{className:"whatsapp-icon"})})},P=r(9692);var L=function(e){var t=e.Component,r=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Aeon Marketing"}),(0,o.jsx)("link",{rel:"icon",href:"/img/aeon-marketing-icon.png"})]}),(0,o.jsx)(d,{}),(0,o.jsx)(h,{}),(0,o.jsx)(m,{}),(0,o.jsx)(M,{}),(0,o.jsx)(t,(0,n.Z)({},r)),(0,o.jsx)(P.GoogleTagManager,{gtmId:"AW-16571160044"}),(0,o.jsx)(c(),{strategy:"beforeInteractive",id:"wow",src:"/js/wow.min.js"}),(0,o.jsx)(c(),{strategy:"beforeInteractive",id:"splitting",src:"/js/splitting.min.js"}),(0,o.jsx)(c(),{id:"simpleParallax",src:"/js/simpleParallax.min.js"}),(0,o.jsx)(c(),{strategy:"beforeInteractive",id:"isotope",src:"/js/isotope.pkgd.min.js"}),(0,o.jsx)(c(),{strategy:"lazyOnload",id:"initWow",src:"/js/initWow.js"})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},4298:function(e,t,r){e.exports=r(699)},6257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var n=r(3494);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return n.GoogleAnalytics}});var o=r(4248);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var s=r(2239);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return s.YouTubeEmbed}})},3494:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;const s=o(r(9426)),i=r(7058);t.GoogleAnalytics=e=>{var t=n(e,[]);return(0,i.formatData)(s.default,t)}},4248:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;const s=o(r(7395)),i=r(7058);t.GoogleMapsEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(s.default,t)}},2239:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;const s=o(r(8420)),i=r(7058);t.YouTubeEmbed=e=>{var t=n(e,[]);return(0,i.formatData)(s.default,t)}},7058:function(e,t){"use strict";function r(e,t,r=!1){return t?Object.keys(e).filter((e=>r?!t.includes(e):t.includes(e))).reduce(((t,r)=>(t[r]=e[r],t)),{}):{}}function n(e,t,r,n){const o=n&&Object.keys(n).length>0?new URL(Object.values(n)[0],e):new URL(e);return t&&r&&t.forEach((e=>{r[e]&&o.searchParams.set(e,r[e])})),o.toString()}function o(e,t,r,o,s){var i;if(!t)return`<${e}></${e}>`;const a=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:n(t.src.url,t.src.params,o,s)}):t;return`<${e}${Object.keys(Object.assign(Object.assign({},a),r)).reduce(((e,t)=>{const n=null===r||void 0===r?void 0:r[t],o=a[t],s=null!==n&&void 0!==n?n:o;return s?e+` ${!0===s?t:`${t}="${s}"`}`:e}),"")}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=n,t.createHtml=o,t.formatData=function(e,t){var s,i,a,l,c;const u=r(t,null===(s=e.scripts)||void 0===s?void 0:s.reduce(((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]]),[])),d=r(t,null===(a=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===a?void 0:a.params),f=r(t,[null===(c=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===c?void 0:c.slugParam]),m=r(t,[...Object.keys(u),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,m,d,f):null,scripts:e.scripts?e.scripts.map((e=>Object.assign(Object.assign({},e),{url:n(e.url,e.params,u)}))):null})}},4924:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},6042:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4924);function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){(0,n.Z)(e,t,r[t])}))}return e}},9426:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},7395:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},8420:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')},2806:function(e){"use strict";e.exports=JSON.parse('{"E8":"/img/aeon-marketing-logo-light.png","Q1":"/img/aeon-marketing-logo-dark.png","QP":true}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(1118),t(387)}));var r=e.O();_N_E=r}]);