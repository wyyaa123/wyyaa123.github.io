const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YunGallery.DhhY0CAd.js","assets/framework.BTpy-Ipz.js","assets/app.Z02Hy1x7.js","assets/chunks/vue-router.Bvpo9AbM.js","assets/chunks/@vueuse/motion.C4pV2ndL.js","assets/chunks/dayjs.DWFjVSJ6.js","assets/chunks/vue-i18n.BTQOV8gZ.js","assets/chunks/nprogress.D9INLUwV.js","assets/chunks/pinia.DTry7a2H.js","assets/app.Da3gAlNg.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CZraTNbS.js"])))=>i.map(i=>d[i]);
import{F as w,a8 as C,a9 as u,aa as v,C as g,ab as h,ad as s,am as D,av as E,ai as V,aB as $,Z as p,B as K,aw as S,ak as f,at as G,x as a,ae as O,I as T,a1 as Y}from"./framework.BTpy-Ipz.js";import{l as F,u as R,a as j,b as I,d as L,m as M,n as U,c as N,e as z,f as H}from"./app.Z02Hy1x7.js";import"./chunks/@vueuse/motion.C4pV2ndL.js";import"./chunks/dayjs.DWFjVSJ6.js";import{_ as W}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.CZraTNbS.js";import{u as J}from"./chunks/vue-router.Bvpo9AbM.js";import{u as Z}from"./chunks/vue-i18n.BTQOV8gZ.js";function q(r){const t=new TextEncoder;return window.crypto.subtle.importKey("raw",t.encode(r),"PBKDF2",!1,["deriveBits","deriveKey"])}function Q(r,t){return window.crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:1e5,hash:"SHA-256"},r,{name:"AES-CBC",length:256},!0,["encrypt","decrypt"])}function X(){const r=F(),{encrypt:t}=r.value,o=Uint8Array.from(Object.values(t.iv)),e=Uint8Array.from(Object.values(t.salt));return{decrypt:async(l,d)=>{if(!l)return;const y=await q(l),_=await Q(y,e),c=Uint8Array.from(d,i=>i.charCodeAt(0)),n=await window.crypto.subtle.decrypt({name:"AES-CBC",iv:o},_,c);return new TextDecoder().decode(n)}}}const ee=w({__name:"YunGallery",props:{photos:{}},setup(r){return(t,o)=>{const e=C("VAGallery");return u(),v(e,{photos:t.photos},null,8,["photos"])}}}),te={key:0,"w-full":"","pt-14":"","pb-10":""},oe={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},ne={key:1},ae=w({__name:"ValaxyGalleryDecrypt",props:{encryptedPhotos:{}},setup(r){const t=r,o=g(""),e=g(""),l=g(!1),{decrypt:d}=X();async function y(){const c=t.encryptedPhotos;if(c)try{const n=await d(o.value,c);e.value=n||""}catch(n){l.value=!0,console.error(n)}}function _(){e.value="",o.value=""}return(c,n)=>{const i=ee;return u(),h("div",null,[e.value?(u(),h("div",ne,[p(i,{photos:JSON.parse(e.value)},null,8,["photos"]),s("div",{"w-full":"","text-center":"","mt-8":""},[s("button",{"m-auto":"",class:"btn","font-bold":"",onClick:_}," Encrypt Again ")])])):(u(),h("div",te,[s("div",oe,[D(s("input",{"onUpdate:modelValue":n[0]||(n[0]=m=>o.value=m),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:V(l.value&&"border-red"),onInput:n[1]||(n[1]=m=>l.value=!1),onKeyup:$(y,["enter"])},null,34),[[E,o.value]]),s("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:y})])]))])}}}),re={text:"center",class:"yun-text-light",p:"2"},se={class:"page-action",text:"center"},le=["title"],ce=w({__name:"gallery",setup(r){const t=J(),{t:o}=Z(),e=R(),l=j(e);I([L({"@type":"CollectionPage"})]);const d=K(()=>e.value.photos||[]),_=M().value.addons["valaxy-addon-lightgallery"]?S(()=>Y(()=>import("./YunGallery.DhhY0CAd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))):()=>null,c=U();return(n,i)=>{const m=N,x=W,k=ae,b=C("RouterView"),A=z,P=H;return u(),h(T,null,[p(A,null,{default:f(()=>[p(m),p(b,null,{default:f(({Component:B})=>[(u(),v(G(B),null,{"main-header":f(()=>[p(x,{title:a(l)||a(o)("title.gallery"),icon:a(e).icon||"i-ri-gallery-line",color:a(e).color,"page-title-class":a(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":f(()=>[s("div",re,O(a(o)("counter.photos",d.value.length)),1),s("div",se,[s("a",{class:"yun-icon-btn",title:a(o)("accessibility.back"),onClick:i[0]||(i[0]=()=>a(t).back())},i[1]||(i[1]=[s("div",{"i-ri-arrow-go-back-line":""},null,-1)]),8,le)]),a(c)?(u(),v(k,{key:0,"encrypted-photos":a(c)},null,8,["encrypted-photos"])):(u(),v(a(_),{key:1,photos:d.value},null,8,["photos"])),p(b)]),_:2},1024))]),_:1})]),_:1}),p(P)],64)}}}),fe=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{ee as _,fe as g};