if(!self.define){let e,r={};const i=(i,n)=>(i=new URL(i+".js",n).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let c={};const f=e=>i(e,t),l={module:{uri:t},exports:c,require:f};r[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-cbbbbfe9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/reference-finder/index.html",revision:"de7509c8c9e37fe92f4dea5e74d89c76"},{url:"/reference-finder/static/bin/ref.8369a89a.wasm",revision:null},{url:"/reference-finder/static/css/main.102071ae.css",revision:null},{url:"/reference-finder/static/js/locale.16afa651.js",revision:null},{url:"/reference-finder/static/js/main.47a04e60.js",revision:null},{url:"/reference-finder/static/js/main.47a04e60.js.LICENSE.txt",revision:"e9321426f8f7d8502db744387a3eac34"},{url:"/reference-finder/static/js/rabbit-ear.5fe2350f.js",revision:null},{url:"/reference-finder/static/js/ref.103be60e.chunk.js",revision:null},{url:"/reference-finder/static/media/twemoji.4125b4ad8575aa931ecb.woff2",revision:null}],{})}));
