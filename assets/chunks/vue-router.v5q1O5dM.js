const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.rignxxPR.js","assets/YunPostList.vue_vue_type_script_setup_true_lang.DbtWR0TS.js","assets/chunks/@vueuse/motion.C4pV2ndL.js","assets/framework.BTpy-Ipz.js","assets/app.DucgLKvh.js","assets/chunks/dayjs.DWFjVSJ6.js","assets/chunks/vue-i18n.BTQOV8gZ.js","assets/chunks/nprogress.D9INLUwV.js","assets/chunks/pinia.DTry7a2H.js","assets/app.Da3gAlNg.css","assets/YunPostMeta.vue_vue_type_style_index_0_lang.BPravB0U.js","assets/index.D5MHQls2.js","assets/animation.9U_cvlZ8.js","assets/YunPostMeta.DCrVMfuT.css","assets/post.BA-pnR9I.js","assets/YunPostList.BfWGcc9d.css","assets/_...path_.D2iqkU9y.js","assets/404.DMLaINlz.js","assets/ValaxyMain.vue_vue_type_style_index_0_lang.CS_IWj_K.js","assets/YunComment.vue_vue_type_style_index_0_lang.CvEkLGVB.js","assets/index.C5okkQwF.js","assets/YunComment.C84b5VfP.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CZraTNbS.js","assets/ValaxyMain.BHXg_53O.css","assets/index.DUjuK-yb.js","assets/site.C79AV0MW.js","assets/index.DsCgtMo-.js","assets/index.CLokWyKr.js","assets/index.Bcf9ofYx.js","assets/index.DfXt1eUW.css","assets/_page_.D_L3931B.js","assets/index.7cDGagv5.js","assets/怎么样使用Valaxy框架部署博客.Dj_kTZ6T.js","assets/Ubuntu安装CUDA_ Cudnn以及TensorRT.Z7BlWJP5.js","assets/index.3EjzYrn2.js","assets/index.B2UXZDdk.js"])))=>i.map(i=>d[i]);
import{L as Z,Y as le,x as oe,$ as Tt,O as St,F as rt,J as bt,B as $,H as ot,a0 as Ee,C as Ct,A as Ot,T as Lt,a1 as j}from"../framework.BTpy-Ipz.js";import"./@vueuse/motion.C4pV2ndL.js";var Te=(e,t,n)=>typeof e=="function"?e(t,n):e;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const W=typeof document<"u";function at(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&at(e.default)}const S=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=N(o)?o.map(e):e(o)}return n}const ae=()=>{},N=Array.isArray,st=/#/g,xt=/&/g,It=/\//g,Dt=/=/g,jt=/\?/g,it=/\+/g,Nt=/%5B/g,Vt=/%5D/g,ct=/%5E/g,Mt=/%60/g,lt=/%7B/g,$t=/%7C/g,ut=/%7D/g,Bt=/%20/g;function Oe(e){return encodeURI(""+e).replace($t,"|").replace(Nt,"[").replace(Vt,"]")}function Ht(e){return Oe(e).replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Se(e){return Oe(e).replace(it,"%2B").replace(Bt,"+").replace(st,"%23").replace(xt,"%26").replace(Mt,"`").replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Ut(e){return Se(e).replace(Dt,"%3D")}function Kt(e){return Oe(e).replace(st,"%23").replace(jt,"%3F")}function Gt(e){return e==null?"":Kt(e).replace(It,"%2F")}function se(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const zt=/\/$/,Zt=e=>e.replace(zt,"");function we(e,t,n="/"){let r,o={},d="",h="";const p=t.indexOf("#");let a=t.indexOf("?");return p<a&&p>=0&&(a=-1),a>-1&&(r=t.slice(0,a),d=t.slice(a+1,p>-1?p:t.length),o=e(d)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=Ft(r??t,n),{fullPath:r+(d&&"?")+d+h,path:r,query:o,hash:se(h)}}function qt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ve(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Q(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yt(e[n],t[n]))return!1;return!0}function Yt(e,t){return N(e)?Me(e,t):N(t)?Me(t,e):e===t}function Me(e,t){return N(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let d=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")d>1&&d--;else break;return n.slice(0,d).join("/")+"/"+r.slice(h).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var z;(function(e){e.back="back",e.forward="forward",e.unknown=""})(z||(z={}));const Pe="";function dt(e){if(!e)if(W){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Zt(e)}const Qt=/^[^#]+#/;function ht(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const de=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const be=new Map;function en(e,t){be.set(e,t)}function tn(e){const t=be.get(e);return be.delete(e),t}let nn=()=>location.protocol+"//"+location.host;function pt(e,t){const{pathname:n,search:r,hash:o}=t,d=e.indexOf("#");if(d>-1){let p=o.includes(e.slice(d))?e.slice(d).length:1,a=o.slice(p);return a[0]!=="/"&&(a="/"+a),Ve(a,"")}return Ve(n,e)+r+o}function rn(e,t,n,r){let o=[],d=[],h=null;const p=({state:c})=>{const l=pt(e,location),g=n.value,y=t.value;let w=0;if(c){if(n.value=l,t.value=c,h&&h===g){h=null;return}w=y?c.position-y.position:0}else r(l);o.forEach(P=>{P(n.value,g,{delta:w,type:X.pop,direction:w?w>0?z.forward:z.back:z.unknown})})};function a(){h=n.value}function f(c){o.push(c);const l=()=>{const g=o.indexOf(c);g>-1&&o.splice(g,1)};return d.push(l),l}function u(){const{history:c}=window;c.state&&c.replaceState(S({},c.state,{scroll:de()}),"")}function s(){for(const c of d)c();d=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:f,destroy:s}}function Be(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?de():null}}function on(e){const{history:t,location:n}=window,r={value:pt(e,n)},o={value:t.state};o.value||d(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function d(a,f,u){const s=e.indexOf("#"),c=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+a:nn()+e+a;try{t[u?"replaceState":"pushState"](f,"",c),o.value=f}catch(l){console.error(l),n[u?"replace":"assign"](c)}}function h(a,f){const u=S({},t.state,Be(o.value.back,a,o.value.forward,!0),f,{position:o.value.position});d(a,u,!0),r.value=a}function p(a,f){const u=S({},o.value,t.state,{forward:a,scroll:de()});d(u.current,u,!0);const s=S({},Be(r.value,a,null),{position:u.position+1},f);d(a,s,!1),r.value=a}return{location:r,state:o,push:p,replace:h}}function $n(e){e=dt(e);const t=on(e),n=rn(e,t.state,t.location,t.replace);function r(d,h=!0){h||n.pauseListeners(),history.go(d)}const o=S({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Bn(e=""){let t=[],n=[Pe],r=0;e=dt(e);function o(p){r++,r!==n.length&&n.splice(r),n.push(p)}function d(p,a,{direction:f,delta:u}){const s={direction:f,delta:u,type:X.pop};for(const c of t)c(p,a,s)}const h={location:Pe,state:{},base:e,createHref:ht.bind(null,e),replace(p){n.splice(r--,1),o(p)},push(p,a){o(p)},listen(p){return t.push(p),()=>{const a=t.indexOf(p);a>-1&&t.splice(a,1)}},destroy(){t=[],n=[Pe],r=0},go(p,a=!0){const f=this.location,u=p<0?z.back:z.forward;r=Math.max(0,Math.min(r+p,n.length-1)),a&&d(this.location,f,{direction:u,delta:p})}};return Object.defineProperty(h,"location",{enumerable:!0,get:()=>n[r]}),h}function an(e){return typeof e=="string"||e&&typeof e=="object"}function mt(e){return typeof e=="string"||typeof e=="symbol"}const gt=Symbol("");var He;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(He||(He={}));function J(e,t){return S(new Error,{type:e,[gt]:!0},t)}function M(e,t){return e instanceof Error&&gt in e&&(t==null||!!(e.type&t))}const Ue="[^/]+?",sn={sensitive:!1,strict:!1,start:!0,end:!0},cn=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=S({},sn,t),r=[];let o=n.start?"^":"";const d=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let s=0;s<f.length;s++){const c=f[s];let l=40+(n.sensitive?.25:0);if(c.type===0)s||(o+="/"),o+=c.value.replace(cn,"\\$&"),l+=40;else if(c.type===1){const{value:g,repeatable:y,optional:w,regexp:P}=c;d.push({name:g,repeatable:y,optional:w});const _=P||Ue;if(_!==Ue){l+=10;try{new RegExp(`(${_})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+L.message)}}let R=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;s||(R=w&&f.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),o+=R,l+=20,w&&(l+=-8),y&&(l+=-20),_===".*"&&(l+=-50)}u.push(l)}r.push(u)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(f){const u=f.match(h),s={};if(!u)return null;for(let c=1;c<u.length;c++){const l=u[c]||"",g=d[c-1];s[g.name]=l&&g.repeatable?l.split("/"):l}return s}function a(f){let u="",s=!1;for(const c of e){(!s||!u.endsWith("/"))&&(u+="/"),s=!1;for(const l of c)if(l.type===0)u+=l.value;else if(l.type===1){const{value:g,repeatable:y,optional:w}=l,P=g in f?f[g]:"";if(N(P)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=N(P)?P.join("/"):P;if(!_)if(w)c.length<2&&(u.endsWith("/")?u=u.slice(0,-1):s=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:h,score:r,keys:d,parse:p,stringify:a}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const d=un(r[n],o[n]);if(d)return d;n++}if(Math.abs(o.length-r.length)===1){if(Ke(r))return 1;if(Ke(o))return-1}return o.length-r.length}function Ke(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fn={type:0,value:""},dn=/[a-zA-Z0-9_]/;function hn(e){if(!e)return[[]];if(e==="/")return[[fn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(l){throw new Error(`ERR (${n})/"${f}": ${l}`)}let n=0,r=n;const o=[];let d;function h(){d&&o.push(d),d=[]}let p=0,a,f="",u="";function s(){f&&(n===0?d.push({type:0,value:f}):n===1||n===2||n===3?(d.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),d.push({type:1,value:f,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function c(){f+=a}for(;p<e.length;){if(a=e[p++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&s(),h()):a===":"?(s(),n=1):c();break;case 4:c(),n=r;break;case 1:a==="("?n=2:dn.test(a)?c():(s(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&p--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:s(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&p--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),s(),h(),o}function pn(e,t,n){const r=ln(hn(e.path),n),o=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function mn(e,t){const n=[],r=new Map;t=qe({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function d(s,c,l){const g=!l,y=ze(s);y.aliasOf=l&&l.record;const w=qe(t,s),P=[y];if("alias"in s){const L=typeof s.alias=="string"?[s.alias]:s.alias;for(const k of L)P.push(ze(S({},y,{components:l?l.record.components:y.components,path:k,aliasOf:l?l.record:y})))}let _,R;for(const L of P){const{path:k}=L;if(c&&k[0]!=="/"){const I=c.record.path,x=I[I.length-1]==="/"?"":"/";L.path=c.record.path+(k&&x+k)}if(_=pn(L,c,w),l?l.alias.push(_):(R=R||_,R!==_&&R.alias.push(_),g&&s.name&&!Ze(_)&&h(s.name)),yt(_)&&a(_),y.children){const I=y.children;for(let x=0;x<I.length;x++)d(I[x],_,l&&l.children[x])}l=l||_}return R?()=>{h(R)}:ae}function h(s){if(mt(s)){const c=r.get(s);c&&(r.delete(s),n.splice(n.indexOf(c),1),c.children.forEach(h),c.alias.forEach(h))}else{const c=n.indexOf(s);c>-1&&(n.splice(c,1),s.record.name&&r.delete(s.record.name),s.children.forEach(h),s.alias.forEach(h))}}function p(){return n}function a(s){const c=yn(s,n);n.splice(c,0,s),s.record.name&&!Ze(s)&&r.set(s.record.name,s)}function f(s,c){let l,g={},y,w;if("name"in s&&s.name){if(l=r.get(s.name),!l)throw J(1,{location:s});w=l.record.name,g=S(Ge(c.params,l.keys.filter(R=>!R.optional).concat(l.parent?l.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),s.params&&Ge(s.params,l.keys.map(R=>R.name))),y=l.stringify(g)}else if(s.path!=null)y=s.path,l=n.find(R=>R.re.test(y)),l&&(g=l.parse(y),w=l.record.name);else{if(l=c.name?r.get(c.name):n.find(R=>R.re.test(c.path)),!l)throw J(1,{location:s,currentLocation:c});w=l.record.name,g=S({},c.params,s.params),y=l.stringify(g)}const P=[];let _=l;for(;_;)P.unshift(_.record),_=_.parent;return{name:w,path:y,params:g,matched:P,meta:vn(P)}}e.forEach(s=>d(s));function u(){n.length=0,r.clear()}return{addRoute:d,resolve:f,removeRoute:h,clearRoutes:u,getRoutes:p,getRecordMatcher:o}}function Ge(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ze(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ze(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>S(t,n.meta),{})}function qe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yn(e,t){let n=0,r=t.length;for(;n!==r;){const d=n+r>>1;vt(e,t[d])<0?r=d:n=d+1}const o=_n(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function _n(e){let t=e;for(;t=t.parent;)if(yt(t)&&vt(e,t)===0)return t}function yt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function En(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const d=r[o].replace(it," "),h=d.indexOf("="),p=se(h<0?d:d.slice(0,h)),a=h<0?null:se(d.slice(h+1));if(p in t){let f=t[p];N(f)||(f=t[p]=[f]),f.push(a)}else t[p]=a}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Ut(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(N(r)?r.map(d=>d&&Se(d)):[r&&Se(r)]).forEach(d=>{d!==void 0&&(t+=(t.length?"&":"")+n,d!=null&&(t+="="+d))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=N(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const wn=Symbol(""),Ye=Symbol(""),he=Symbol(""),Le=Symbol(""),Ce=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function K(e,t,n,r,o,d=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,a)=>{const f=c=>{c===!1?a(J(4,{from:n,to:t})):c instanceof Error?a(c):an(c)?a(J(2,{from:t,to:c})):(h&&r.enterCallbacks[o]===h&&typeof c=="function"&&h.push(c),p())},u=d(()=>e.call(r&&r.instances[o],t,n,f));let s=Promise.resolve(u);e.length<3&&(s=s.then(f)),s.catch(c=>a(c))})}function Ae(e,t,n,r,o=d=>d()){const d=[];for(const h of e)for(const p in h.components){let a=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(at(a)){const u=(a.__vccOpts||a)[t];u&&d.push(K(u,n,r,h,p,o))}else{let f=a();d.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${p}" at "${h.path}"`);const s=kt(u)?u.default:u;h.mods[p]=u,h.components[p]=s;const l=(s.__vccOpts||s)[t];return l&&K(l,n,r,h,p,o)()}))}}return d}function Fe(e){const t=Z(he),n=Z(Le),r=$(()=>{const a=oe(e.to);return t.resolve(a)}),o=$(()=>{const{matched:a}=r.value,{length:f}=a,u=a[f-1],s=n.matched;if(!u||!s.length)return-1;const c=s.findIndex(Q.bind(null,u));if(c>-1)return c;const l=Qe(a[f-2]);return f>1&&Qe(u)===l&&s[s.length-1].path!==l?s.findIndex(Q.bind(null,a[f-2])):c}),d=$(()=>o.value>-1&&bn(n.params,r.value.params)),h=$(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function p(a={}){if(Sn(a)){const f=t[oe(e.replace)?"replace":"push"](oe(e.to)).catch(ae);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:d,isExactActive:h,navigate:p}}function Pn(e){return e.length===1?e[0]:e}const An=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=bt(Fe(e)),{options:r}=Z(he),o=$(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const d=t.default&&Pn(t.default(n));return e.custom?d:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},d)}}}),Tn=An;function Sn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!N(o)||o.length!==r.length||r.some((d,h)=>d!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,Cn=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Z(Ce),o=$(()=>e.route||r.value),d=Z(Ye,0),h=$(()=>{let f=oe(d);const{matched:u}=o.value;let s;for(;(s=u[f])&&!s.components;)f++;return f}),p=$(()=>o.value.matched[h.value]);Ee(Ye,$(()=>h.value+1)),Ee(wn,p),Ee(Ce,o);const a=Ct();return Ot(()=>[a.value,p.value,e.name],([f,u,s],[c,l,g])=>{u&&(u.instances[s]=f,l&&l!==u&&f&&f===c&&(u.leaveGuards.size||(u.leaveGuards=l.leaveGuards),u.updateGuards.size||(u.updateGuards=l.updateGuards))),f&&u&&(!l||!Q(u,l)||!c)&&(u.enterCallbacks[s]||[]).forEach(y=>y(f))},{flush:"post"}),()=>{const f=o.value,u=e.name,s=p.value,c=s&&s.components[u];if(!c)return Je(n.default,{Component:c,route:f});const l=s.props[u],g=l?l===!0?f.params:typeof l=="function"?l(f):l:null,w=ot(c,S({},g,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(s.instances[u]=null)},ref:a}));return Je(n.default,{Component:w,route:f})||w}}});function Je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const On=Cn;function Hn(e){const t=mn(e.routes,e),n=e.parseQuery||En,r=e.stringifyQuery||We,o=e.history,d=ne(),h=ne(),p=ne(),a=le(H);let f=H;W&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Re.bind(null,i=>""+i),s=Re.bind(null,Gt),c=Re.bind(null,se);function l(i,v){let m,E;return mt(i)?(m=t.getRecordMatcher(i),E=v):E=i,t.addRoute(E,m)}function g(i){const v=t.getRecordMatcher(i);v&&t.removeRoute(v)}function y(){return t.getRoutes().map(i=>i.record)}function w(i){return!!t.getRecordMatcher(i)}function P(i,v){if(v=S({},v||a.value),typeof i=="string"){const A=we(n,i,v.path),O=t.resolve({path:A.path},v),te=o.createHref(A.fullPath);return S(A,O,{params:c(O.params),hash:se(A.hash),redirectedFrom:void 0,href:te})}let m;if(i.path!=null)m=S({},i,{path:we(n,i.path,v.path).path});else{const A=S({},i.params);for(const O in A)A[O]==null&&delete A[O];m=S({},i,{params:s(A)}),v.params=s(v.params)}const E=t.resolve(m,v),b=i.hash||"";E.params=u(c(E.params));const C=qt(r,S({},i,{hash:Ht(b),path:E.path})),T=o.createHref(C);return S({fullPath:C,hash:b,query:r===We?Rn(i.query):i.query||{}},E,{redirectedFrom:void 0,href:T})}function _(i){return typeof i=="string"?we(n,i,a.value.path):S({},i)}function R(i,v){if(f!==i)return J(8,{from:v,to:i})}function L(i){return x(i)}function k(i){return L(S(_(i),{replace:!0}))}function I(i){const v=i.matched[i.matched.length-1];if(v&&v.redirect){const{redirect:m}=v;let E=typeof m=="function"?m(i):m;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=_(E):{path:E},E.params={}),S({query:i.query,hash:i.hash,params:E.path!=null?{}:i.params},E)}}function x(i,v){const m=f=P(i),E=a.value,b=i.state,C=i.force,T=i.replace===!0,A=I(m);if(A)return x(S(_(A),{state:typeof A=="object"?S({},b,A.state):b,force:C,replace:T}),v||m);const O=m;O.redirectedFrom=v;let te;return!C&&Wt(r,E,m)&&(te=J(16,{to:O,from:E}),je(E,E,!0,!1)),(te?Promise.resolve(te):ke(O,E)).catch(D=>M(D)?M(D,2)?D:ve(D):ge(D,O,E)).then(D=>{if(D){if(M(D,2))return x(S({replace:T},_(D.to),{state:typeof D.to=="object"?S({},b,D.to.state):b,force:C}),v||O)}else D=Ie(O,E,!0,T,b);return xe(O,E,D),D})}function B(i,v){const m=R(i,v);return m?Promise.reject(m):Promise.resolve()}function pe(i){const v=ce.values().next().value;return v&&typeof v.runWithContext=="function"?v.runWithContext(i):i()}function ke(i,v){let m;const[E,b,C]=Ln(i,v);m=Ae(E.reverse(),"beforeRouteLeave",i,v);for(const A of E)A.leaveGuards.forEach(O=>{m.push(K(O,i,v))});const T=B.bind(null,i,v);return m.push(T),q(m).then(()=>{m=[];for(const A of d.list())m.push(K(A,i,v));return m.push(T),q(m)}).then(()=>{m=Ae(b,"beforeRouteUpdate",i,v);for(const A of b)A.updateGuards.forEach(O=>{m.push(K(O,i,v))});return m.push(T),q(m)}).then(()=>{m=[];for(const A of C)if(A.beforeEnter)if(N(A.beforeEnter))for(const O of A.beforeEnter)m.push(K(O,i,v));else m.push(K(A.beforeEnter,i,v));return m.push(T),q(m)}).then(()=>(i.matched.forEach(A=>A.enterCallbacks={}),m=Ae(C,"beforeRouteEnter",i,v,pe),m.push(T),q(m))).then(()=>{m=[];for(const A of h.list())m.push(K(A,i,v));return m.push(T),q(m)}).catch(A=>M(A,8)?A:Promise.reject(A))}function xe(i,v,m){p.list().forEach(E=>pe(()=>E(i,v,m)))}function Ie(i,v,m,E,b){const C=R(i,v);if(C)return C;const T=v===H,A=W?history.state:{};m&&(E||T?o.replace(i.fullPath,S({scroll:T&&A&&A.scroll},b)):o.push(i.fullPath,b)),a.value=i,je(i,v,m,T),ve()}let ee;function Pt(){ee||(ee=o.listen((i,v,m)=>{if(!Ne.listening)return;const E=P(i),b=I(E);if(b){x(S(b,{replace:!0,force:!0}),E).catch(ae);return}f=E;const C=a.value;W&&en($e(C.fullPath,m.delta),de()),ke(E,C).catch(T=>M(T,12)?T:M(T,2)?(x(S(_(T.to),{force:!0}),E).then(A=>{M(A,20)&&!m.delta&&m.type===X.pop&&o.go(-1,!1)}).catch(ae),Promise.reject()):(m.delta&&o.go(-m.delta,!1),ge(T,E,C))).then(T=>{T=T||Ie(E,C,!1),T&&(m.delta&&!M(T,8)?o.go(-m.delta,!1):m.type===X.pop&&M(T,20)&&o.go(-1,!1)),xe(E,C,T)}).catch(ae)}))}let me=ne(),De=ne(),ie;function ge(i,v,m){ve(i);const E=De.list();return E.length?E.forEach(b=>b(i,v,m)):console.error(i),Promise.reject(i)}function At(){return ie&&a.value!==H?Promise.resolve():new Promise((i,v)=>{me.add([i,v])})}function ve(i){return ie||(ie=!i,Pt(),me.list().forEach(([v,m])=>i?m(i):v()),me.reset()),i}function je(i,v,m,E){const{scrollBehavior:b}=e;if(!W||!b)return Promise.resolve();const C=!m&&tn($e(i.fullPath,0))||(E||!m)&&history.state&&history.state.scroll||null;return St().then(()=>b(i,v,C)).then(T=>T&&Jt(T)).catch(T=>ge(T,i,v))}const ye=i=>o.go(i);let _e;const ce=new Set,Ne={currentRoute:a,listening:!0,addRoute:l,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:y,resolve:P,options:e,push:L,replace:k,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:d.add,beforeResolve:h.add,afterEach:p.add,onError:De.add,isReady:At,install(i){const v=this;i.component("RouterLink",Tn),i.component("RouterView",On),i.config.globalProperties.$router=v,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>oe(a)}),W&&!_e&&a.value===H&&(_e=!0,L(o.location).catch(b=>{}));const m={};for(const b in H)Object.defineProperty(m,b,{get:()=>a.value[b],enumerable:!0});i.provide(he,v),i.provide(Le,Tt(m)),i.provide(Ce,a);const E=i.unmount;ce.add(i),i.unmount=function(){ce.delete(i),ce.size<1&&(f=H,ee&&ee(),ee=null,a.value=H,_e=!1,ie=!1),E()}}};function q(i){return i.reduce((v,m)=>v.then(()=>pe(m)),Promise.resolve())}return Ne}function Ln(e,t){const n=[],r=[],o=[],d=Math.max(t.matched.length,e.matched.length);for(let h=0;h<d;h++){const p=t.matched[h];p&&(e.matched.find(f=>Q(f,p))?r.push(p):n.push(p));const a=e.matched[h];a&&(t.matched.find(f=>Q(f,a))||o.push(a))}return[n,r,o]}function kn(){return Z(he)}function xn(e){return Z(Le)}var V=Symbol("loaders"),F=Symbol("loaderEntries"),_t=Symbol(),U=Symbol(),G=Symbol(),fe=Symbol(),re=Symbol(),ue=Symbol(),Et=Symbol();function et(e){return e&&e[_t]}var Rt;function tt(){return Rt||[]}function Y(e){Rt=e&&e.length?e:null}var In=Object.assign;function Dn({router:e,app:t,effect:n,isSSR:r,errors:o=[],selectNavigationResult:d=h=>h[0].value}){if(e[F]!=null)return()=>{};e[F]=new WeakMap,e[fe]=t,e[Et]=!!r;const h=e.beforeEach(u=>{var c;e[U]&&((c=e[U].meta[re])==null||c.abort()),e[U]=u,u.meta[V]=new Set,u.meta[re]=new AbortController,u.meta[ue]=[];const s=[];for(const l of u.matched)if(!l.meta[V]){l.meta[V]=new Set(l.meta.loaders||[]);for(const g in l.components){const y=l.components[g],w=(jn(y)?y():Promise.resolve(y)).then(P=>{if(typeof P!="function"){for(const _ in P){const R=P[_];et(R)&&l.meta[V].add(R)}if(Array.isArray(P.__loaders))for(const _ of P.__loaders)et(_)&&l.meta[V].add(_)}});s.push(w)}}return Promise.all(s).then(()=>{for(const l of u.matched)for(const g of l.meta[V])u.meta[V].add(g)})}),p=e.beforeResolve((u,s)=>{const c=Array.from(u.meta[V]);return Y([]),Promise.all(c.map(l=>{const{server:g,lazy:y,errors:w}=l._.options;if(!g&&r)return;const P=n.run(()=>t.runWithContext(()=>l._.load(u,e,s)));return!r&&Te(y,u,s)?void 0:P.catch(_=>{if(!w)throw _;if(w===!0){if(Array.isArray(o)?o.some(R=>_ instanceof R):o(_))return}else if(Array.isArray(w)?w.some(R=>_ instanceof R):w(_))return;throw _})})).then(()=>{if(u.meta[ue].length)return d(u.meta[ue])}).catch(l=>l instanceof wt?l.value:Promise.reject(l)).finally(()=>{Y([])})}),a=e.afterEach((u,s,c)=>{var l;if(c){if((l=u.meta[re])==null||l.abort(c),M(c,16))for(const g of u.meta[V])g._.getEntry(e).resetPending()}else for(const g of u.meta[V]){const{commit:y,lazy:w}=g._.options;if(y==="after-load"){const P=g._.getEntry(e);P&&(!Te(w,u,s)||!P.isLoading.value)&&P.commit(u)}}e[U]===u&&(e[U]=null)}),f=e.onError((u,s)=>{var c;(c=s.meta[re])==null||c.abort(u),e[U]===s&&(e[U]=null)});return()=>{delete e[F],delete e[fe],h(),p(),a(),f()}}function jn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var wt=class{constructor(e){this.value=e}};function Un(e,t){const n=Lt(!0),r=Dn(In({app:e,effect:n},t)),{unmount:o}=e;e.unmount=()=>{n.stop(),r(),o.call(e)}}const Kn=[{path:"/",name:"/",component:()=>j(()=>import("../index.rignxxPR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{layout:"home",frontmatter:{time_warning:15552e6}}},{path:"/:path(.*)",name:"/[...path]",component:()=>j(()=>import("../_...path_.D2iqkU9y.js"),__vite__mapDeps([16,2,3])),meta:{layout:404,frontmatter:{time_warning:15552e6}}},{path:"/404",name:"/404",component:()=>j(()=>import("../404.DMLaINlz.js"),__vite__mapDeps([17,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:404,date:"2024-12-18T15:15:55.316Z",updated:"2024-12-18T15:15:55.316Z",wordCount:"2",readingTime:1},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>j(()=>import("../index.DUjuK-yb.js"),__vite__mapDeps([24,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于我",date:"2024-12-18T15:15:55.316Z",updated:"2024-12-18T15:15:55.316Z",wordCount:"46",readingTime:1},excerpt:""}},{path:"site",name:"/about/site",component:()=>j(()=>import("../site.C79AV0MW.js"),__vite__mapDeps([25,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于站点",date:"2024-12-18T15:15:55.316Z",updated:"2024-12-18T15:15:55.316Z",wordCount:"302",readingTime:2},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>j(()=>import("../index.DsCgtMo-.js"),__vite__mapDeps([26,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"archives",nav:!1,comment:!1,date:"2024-12-18T15:15:55.317Z",updated:"2024-12-18T15:15:55.317Z",wordCount:"6",readingTime:1},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>j(()=>import("../index.CLokWyKr.js"),__vite__mapDeps([27,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",date:"2024-12-18T15:15:55.317Z",updated:"2024-12-18T15:15:55.317Z",wordCount:"25",readingTime:1},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/links",children:[{path:"",name:"/links/",component:()=>j(()=>import("../index.Bcf9ofYx.js"),__vite__mapDeps([28,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23,11,12,29])),meta:{frontmatter:{time_warning:15552e6,title:"ToDo",keywords:"链接",description:"云游的小伙伴们",random:!0,date:"2024-12-18T15:15:55.317Z",updated:"2024-12-18T15:15:55.317Z",wordCount:"30",readingTime:1},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>j(()=>import("../_page_.D_L3931B.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>j(()=>import("../index.7cDGagv5.js"),__vite__mapDeps([31,4,3,2,5,6,7,8,9,1,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"怎么样使用Valaxy框架部署博客",name:"/posts/怎么样使用Valaxy框架部署博客",component:()=>j(()=>import("../怎么样使用Valaxy框架部署博客.Dj_kTZ6T.js"),__vite__mapDeps([32,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"怎么样使用Valaxy框架部署博客",date:"2024-12-16",categories:"Valaxy 配置",tags:["Valaxy"],updated:"2024-12-18T15:15:55.317Z",wordCount:"1.3k",readingTime:9},layout:"post",excerpt:""}},{path:"Ubuntu安装CUDA, Cudnn以及TensorRT",name:"/posts/Ubuntu安装CUDA, Cudnn以及TensorRT",component:()=>j(()=>import("../Ubuntu安装CUDA_ Cudnn以及TensorRT.Z7BlWJP5.js"),__vite__mapDeps([33,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"Ubuntu安装CUDA, Cudnn以及TensorRT",date:"2024-12-17",categories:"环境配置",tags:["Ubuntu","软件开发"],updated:"2024-12-18T15:15:55.317Z",wordCount:"1.2k",readingTime:9},layout:"post",excerpt:""}}],meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"/projects",children:[{path:"",name:"/projects/",component:()=>j(()=>import("../index.3EjzYrn2.js"),__vite__mapDeps([34,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"我的小项目们",layout:"projects",comment:!1,projects:{interesting:{title:"整活",emoji:"🤣",collection:null},applets:{title:"应用",emoji:"📱",collection:null},tools:{title:"工具",emoji:"🔧",collection:null},design:{title:"设计",emoji:"🎨",collection:null},plugins:{title:"插件",emoji:"🔌",collection:null},lab:{title:"实验",emoji:"🧪",collection:null},open_source:{title:"参与",emoji:"👥",collection:null},other:{title:"其他",emoji:"📁",collection:[{name:"wyyaa123.github.io",emoji:"📖",desc:"我的博客",url:"https://wyyaa123.github.io/"},{name:"wyyaa123",emoji:"☀️",desc:"哼哼，还有很多下次再整理！<br/> <del>我已经一滴也没有了。</del>"}]}},date:"2024-12-18T15:15:55.317Z",updated:"2024-12-18T15:15:55.317Z",wordCount:"104",readingTime:1},excerpt:"",layout:"projects"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>j(()=>import("../index.B2UXZDdk.js"),__vite__mapDeps([35,18,4,3,2,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,date:"2024-12-18T15:15:55.317Z",updated:"2024-12-18T15:15:55.317Z",wordCount:"20",readingTime:1},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:15552e6}}}],Gn={};function zn(e,t,n){const r=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const o={...nt,...n,commit:(n==null?void 0:n.commit)||nt.commit};function d(a,f,u,s){var x;const c=f[F],l=f[Et];c.has(r)||c.set(r,{data:le(),isLoading:le(!1),error:le(),to:a,options:o,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:G,stagedError:null,commit:h});const g=c.get(r);if(g.pendingTo===a&&g.pendingLoad)return g.pendingLoad;const{error:y,isLoading:w,data:P}=g,_=f[Nn],R=o.key||"";let L=G;if(_&&R in _&&(L=_[R],delete _[R]),L!==G)return P.value=L,g.pendingLoad=Promise.resolve();g.pendingTo=a,w.value=!0;const k=tt();Y([g,f,a]),g.staged=G,g.stagedError=y.value;const I=Promise.resolve(r(a,{signal:(x=a.meta[re])==null?void 0:x.signal})).then(B=>{g.pendingLoad===I&&(B instanceof wt?a.meta[ue].push(B):(g.staged=B,g.stagedError=null))}).catch(B=>{if(g.pendingLoad===I&&(g.stagedError=B,!Te(o.lazy,a,u)||l))throw B}).finally(()=>{Y(k),g.pendingLoad===I&&(w.value=!1,(o.commit==="immediate"||!f[U])&&g.commit(a))});return Y(k),g.pendingLoad=I,I}function h(a){if(this.pendingTo===a){this.staged!==G&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=G,this.stagedError=this.error.value,this.pendingTo=null,this.to=a;for(const f of this.children)f.commit(a)}}const p=()=>{const a=tt(),[f,u,s]=a,c=u||kn(),l=s||xn(),g=c[F];let y=g.get(r);(!y||f&&y.pendingTo!==l||!y.pendingLoad)&&c[fe].runWithContext(()=>d(l,c,void 0)),y=g.get(r),f&&(f===y&&console.warn(`👶❌ "${o.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),f.children.add(y));const{data:w,error:P,isLoading:_}=y,R={data:w,error:P,isLoading:_,reload:(k=c.currentRoute.value)=>c[fe].runWithContext(()=>d(k,c)).then(()=>y.commit(k))},L=y.pendingLoad.then(()=>y.staged===G?w.value:y.staged).catch(k=>f?Promise.reject(k):null);return Y(a),Object.assign(L,R)};return p[_t]=!0,p._={load:d,options:o,getEntry(a){return a[F].get(r)}},p}var nt={lazy:!1,server:!0,commit:"after-load"},Nn=Symbol();export{Un as D,xn as a,$n as b,Hn as c,Bn as d,Gn as e,zn as f,Kn as r,kn as u};