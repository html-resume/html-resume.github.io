function a0_0x4510(t,e){const n=a0_0xa865();return a0_0x4510=function(e,r){let o=n[e-=457];if(void 0===a0_0x4510.ZVVcWr){a0_0x4510.njUXQM=function(t){let e="",n="";for(let n,r,o=0,a=0;r=t.charAt(a++);~r&&(n=o%4?64*n+r:r,o++%4)?e+=String.fromCharCode(255&n>>(-2*o&6)):0)r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(r);for(let t=0,r=e.length;t<r;t++)n+="%"+("00"+e.charCodeAt(t).toString(16)).slice(-2);return decodeURIComponent(n)},t=arguments,a0_0x4510.ZVVcWr=!0}const a=e+n[0],c=t[a];return c?o=c:(o=a0_0x4510.njUXQM(o),t[a]=o),o},a0_0x4510(t,e)}function a0_0xa865(){const t=["nti1otGYmu1pAejtAq","ig92zxi","y29UC3q","ywXSB3C","y3rVCIG","D2fYBG","BNrszwm","ChjVDg8","mtaZnZj4q2vczvO","CMv0Dxi","mtbev1PHzgS","DhLWzq","BIaOzNu","BgvUz3q","DY1MDwW","mtyWmde3m3D0AePdEG","y3vYCMu","ntaWndHeB0DruuK","B250ywK","u2vSzwm","Awv3","lxbYzxy","Dg9WigW","zw50","nJGYndK2ogDOtM5NzG","yxbWBhK","uhjLDMK","D3jPDgu","E30Uy28","BNreB2m","z0nSAwu","tMfTzq","Bg9N","AwrKzw4","y2XHC3m","nKnMqunSCW","DguGC2m","lMH0BwW","mZe3nwvgv0zbza","zxCGixC","Dg9Y","Aw5N","oda4nJa0yKvnCvDW","DevSzw0","ywXLpq","z2v0qM8","B3zLCMy","DgL0Bgu","mJGXnJm0CeXYD2vQ"];return(a0_0xa865=function(){return t})()}!function(){const t=a0_0x4510,e=a0_0xa865();for(;;)try{if(847383===-parseInt(t(470))/1+-parseInt(t(495))/2*(-parseInt(t(488))/3)+parseInt(t(461))/4*(-parseInt(t(491))/5)+-parseInt(t(501))/6+parseInt(t(502))/7+parseInt(t(477))/8+-parseInt(t(468))/9*(-parseInt(t(463))/10))break;e.push(e.shift())}catch(t){e.push(e.shift())}}();const a0_0x207194=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}}(),a0_0x348a56=a0_0x207194(this,(function(){const t=a0_0x4510;let e;try{e=Function(t(462)+t(465)+"nction() "+t(481)+"nstru"+t(457)+'"return this")( ));')()}catch(t){e=window}const n=e.console=e.console||{},r=[t(485),t(458),"info","error","exception","table","trace"];for(let e=0;e<r[t(466)+"h"];e++){const o=a0_0x207194[t(504)+"ructor"][t(460)+t(464)].bind(a0_0x207194),a=r[e],c=n[a]||o;o.__proto__=a0_0x207194.bind(a0_0x207194),o["toStr"+t(494)]=c.toString.bind(c),n[a]=o}}));a0_0x348a56();import a0_0x4497a6,{useEffect,useState,useRef,useLayoutEffect}from"react";import{useProxy}from"valtio/utils";export default function HtmlPreviewComponent(){const t=a0_0x4510;let e=useProxy(stateProxy);const n=useRef(null),[r,o]=useState(1);useLayoutEffect((()=>{const t=a0_0x4510,e=()=>{const t=a0_0x4510,e=document["querySelec"+t(493)](t(490)+"-prev"+t(473)),n=document.querySelector(".html"+t(474)+"iew-container");if(!e||!n)return;e[t(498)+"undingClie"+t(459)+"t"]().height;const r=n["getBoundin"+t(483)+t(459)+"t"]().width;let a=n.getBoundingClientRect().height;const c=r/(20160/25.4);o(c),e.style.height=a/c+"px"};e();const n=new ResizeObserver((t=>{e()})),r=document["query"+t(472)+"tor"](".html-preview-c"+t(471)+"ner")["paren"+t(496)+t(476)];return r&&n.observe(r),()=>{r&&n.disconnect()}}),[]),useEffect((()=>{const t=a0_0x4510;if(n.current){const r=n[t(469)+"nt"],o=r["conte"+t(482)+"ument"]||r.contentWindow.document;o.open(),o[t(480)](e.htmlContent),o.close()}}),[e.htmlContent]);const a={};a.className="html-preview-container h-full "+t(499)+"low-h"+t(486);const c={};c.className="html-previ"+t(492)+"-["+20160/25.4+"px] bg-whi"+t(489)+t(497)+r+t(503)+"flow-visible",c.style={},c.style.transform="scale("+r+")",c.style.transformOrigin=t(475)+"eft";const i={};return i.ref=n,i[t(500)]="HTML "+t(479)+"ew",i[t(487)+t(484)]=t(467)+"l h-full bg-white ",i.sandbox=t(505)+"-same-origin allow-scripts",a0_0x4497a6.createElement("div",a,a0_0x4497a6.createElement("div",c,a0_0x4497a6.createElement("iframe",i)))}