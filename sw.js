if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.64972a4e.css",revision:null},{url:"assets/index.d2679f65.js",revision:null},{url:"assets/virtual_pwa-register.ef8630d0.js",revision:null},{url:"index.html",revision:"3976fdbc8e0f6a2d290f88437c536817"},{url:"favicon.svg",revision:"d4bc03e2017da139e2a4603eaf8195a1"},{url:"favicon.ico",revision:"6ce0e5a8d9a0d3c0c9ace2f223b7068a"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"3fdcc5ed80fe9e1281bb37e8f09d7dfe"},{url:"pwa-192x192.png",revision:"2db5793b9be971d50e1a2076028daa6a"},{url:"pwa-512x512.png",revision:"cab59206261b6d26308ef3dcfa06c135"},{url:"manifest.webmanifest",revision:"dc6fe59e472af0f31ee12401319ad4d3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
