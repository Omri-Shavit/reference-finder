if(!self.define){let e,r={};const n=(n,i)=>(n=new URL(n+".js",i).href,r[n]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=r,document.head.appendChild(e)}else e=n,importScripts(n),r()})).then((()=>{let e=r[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let f={};const l=e=>n(e,t),c={module:{uri:t},exports:f,require:l};r[t]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(s(...e),f)))}}define(["./workbox-29b0ed90"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/reference-finder/index.html",revision:"232295f0b66314bb741f2bc90446e422"},{url:"/reference-finder/static/css/index.53f27faa.css",revision:null},{url:"/reference-finder/static/font/fa-solid-900.49cd2373.ttf",revision:null},{url:"/reference-finder/static/font/fa-solid-900.6691c62b.woff2",revision:null},{url:"/reference-finder/static/font/twemoji.88c656d7.woff2",revision:null},{url:"/reference-finder/static/js/async/259.d054f5a2.js",revision:null},{url:"/reference-finder/static/js/async/634.86753119.js",revision:null},{url:"/reference-finder/static/js/async/793.250c81fd.js",revision:null},{url:"/reference-finder/static/js/async/ref.1ecbd51b.js",revision:null},{url:"/reference-finder/static/js/index.1f69377a.js",revision:null},{url:"/reference-finder/static/js/rabbit-ear.cee198ed.js",revision:null},{url:"/reference-finder/static/js/react.37377712.js",revision:null},{url:"/reference-finder/static/js/vendor.8f6bc5de.js",revision:null},{url:"/reference-finder/static/wasm/395eb14082da1100.module.wasm",revision:null}],{})}));
