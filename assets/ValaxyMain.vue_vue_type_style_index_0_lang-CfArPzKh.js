import{I as ae,k as Oe,ah as Te,D as he,a1 as ne,ai as Vt,aj as De,ak as Xt,al as Gt,am as Ge,an as We,ao as de,ap as Wt,A as at,p as T,y as Zt,aq as rt,ar as Ze,d as re,r as Kt,o as S,c as W,a as w,e as b,f as te,w as pe,t as q,g as x,u as He,C as st,as as it,at as ue,au as Jt,Q as C,L as Ae,aa as Qt,av as en,S as tn,l as nn,h as on,aw as an,b as Q,U as rn,G as sn,ax as ln}from"./app-JdPCXcGL.js";import{_ as cn}from"./YunComment.vue_vue_type_style_index_0_lang-DGAK45VT.js";import{_ as dn}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-DM1dgSJP.js";import{u as un}from"./post-nlPjHlQ1.js";function mn(){const e=ae(),t=Oe();Te&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),he(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let s;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;s=o}else s=a;for(const l of Array.from(n))l.scrollHeight>s&&l.classList.add("folded")})}function fn(){if(Te){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,s=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!s)return;const l=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let i="";s.querySelectorAll("span.line:not(.diff.remove)").forEach(m=>i+=`${m.textContent||""}
`),i=i.slice(0,-1),l&&(i=i.replace(/^ *(\$|>) /gm,"").trim()),gn(i).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const m=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,m)})}})}}async function gn(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},me=function(t){return t.tagName==="IMG"},pn=function(t){return NodeList.prototype.isPrototypeOf(t)},fe=function(t){return t&&t.nodeType===1},Ke=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Je=function(t){try{return Array.isArray(t)?t.filter(me):pn(t)?[].slice.call(t).filter(me):fe(t)?[t].filter(me):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(me):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},vn=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},hn=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,s=n.width,l=n.height,i=t.cloneNode(),m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,v=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return i.removeAttribute("id"),i.style.position="absolute",i.style.top=o+m+"px",i.style.left=a+v+"px",i.style.width=s+"px",i.style.height=l+"px",i.style.transform="",i},G=function(t,n){var o=j({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},_n=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(c){function d(){}c(d,d)},a=function(c){var d=c.target;if(d===le){h();return}$.indexOf(d)!==-1&&H({target:d})},s=function(){if(!(V||!r.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ve-c)>g.scrollOffset&&setTimeout(h,150)}},l=function(c){var d=c.key||c.keyCode;(d==="Escape"||d==="Esc"||d===27)&&h()},i=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c;if(c.background&&(le.style.background=c.background),c.container&&c.container instanceof Object&&(d.container=j({},g.container,c.container)),c.template){var p=fe(c.template)?c.template:document.querySelector(c.template);d.template=p}return g=j({},g,d),$.forEach(function(_){_.dispatchEvent(G("medium-zoom:update",{detail:{zoom:y}}))}),y},m=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(j({},g,c))},v=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];var _=d.reduce(function(u,L){return[].concat(u,Je(L))},[]);return _.filter(function(u){return $.indexOf(u)===-1}).forEach(function(u){$.push(u),u.classList.add("medium-zoom-image")}),F.forEach(function(u){var L=u.type,I=u.listener,X=u.options;_.forEach(function(N){N.addEventListener(L,I,X)})}),y},M=function(){for(var c=arguments.length,d=Array(c),p=0;p<c;p++)d[p]=arguments[p];r.zoomed&&h();var _=d.length>0?d.reduce(function(u,L){return[].concat(u,Je(L))},[]):$;return _.forEach(function(u){u.classList.remove("medium-zoom-image"),u.dispatchEvent(G("medium-zoom:detach",{detail:{zoom:y}}))}),$=$.filter(function(u){return _.indexOf(u)===-1}),y},f=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return $.forEach(function(_){_.addEventListener("medium-zoom:"+c,d,p)}),F.push({type:"medium-zoom:"+c,listener:d,options:p}),y},E=function(c,d){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return $.forEach(function(_){_.removeEventListener("medium-zoom:"+c,d,p)}),F=F.filter(function(_){return!(_.type==="medium-zoom:"+c&&_.listener.toString()===d.toString())}),y},A=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target,p=function(){var u={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},L=void 0,I=void 0;if(g.container)if(g.container instanceof Object)u=j({},u,g.container),L=u.width-u.left-u.right-g.margin*2,I=u.height-u.top-u.bottom-g.margin*2;else{var X=fe(g.container)?g.container:document.querySelector(g.container),N=X.getBoundingClientRect(),Le=N.width,Dt=N.height,Ht=N.left,Nt=N.top;u=j({},u,{width:Le,height:Dt,left:Ht,top:Nt})}L=L||u.width-g.margin*2,I=I||u.height-g.margin*2;var J=r.zoomedHd||r.original,Rt=Ke(J)?L:J.naturalWidth||L,Yt=Ke(J)?I:J.naturalHeight||I,ce=J.getBoundingClientRect(),Pt=ce.top,jt=ce.left,Ce=ce.width,ke=ce.height,qt=Math.min(Math.max(Ce,Rt),L)/Ce,Bt=Math.min(Math.max(ke,Yt),I)/ke,xe=Math.min(qt,Bt),Ut=(-jt+(L-Ce)/2+g.margin+u.left)/xe,Ft=(-Pt+(I-ke)/2+g.margin+u.top)/xe,Xe="scale("+xe+") translate3d("+Ut+"px, "+Ft+"px, 0)";r.zoomed.style.transform=Xe,r.zoomedHd&&(r.zoomedHd.style.transform=Xe)};return new o(function(_){if(d&&$.indexOf(d)===-1){_(y);return}var u=function Le(){V=!1,r.zoomed.removeEventListener("transitionend",Le),r.original.dispatchEvent(G("medium-zoom:opened",{detail:{zoom:y}})),_(y)};if(r.zoomed){_(y);return}if(d)r.original=d;else if($.length>0){var L=$;r.original=L[0]}else{_(y);return}if(r.original.dispatchEvent(G("medium-zoom:open",{detail:{zoom:y}})),Ve=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,V=!0,r.zoomed=hn(r.original),document.body.appendChild(le),g.template){var I=fe(g.template)?g.template:document.querySelector(g.template);r.template=document.createElement("div"),r.template.appendChild(I.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",h),r.zoomed.addEventListener("transitionend",u),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(X),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,p()};var X=setInterval(function(){r.zoomedHd.complete&&(clearInterval(X),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",h),document.body.appendChild(r.zoomedHd),p())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var N=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",N),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",h),document.body.appendChild(r.zoomedHd),p()})}else p()})},h=function(){return new o(function(c){if(V||!r.original){c(y);return}var d=function p(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(le),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),V=!1,r.zoomed.removeEventListener("transitionend",p),r.original.dispatchEvent(G("medium-zoom:closed",{detail:{zoom:y}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,c(y)};V=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(G("medium-zoom:close",{detail:{zoom:y}})),r.zoomed.addEventListener("transitionend",d)})},H=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=c.target;return r.original?h():A({target:d})},Ee=function(){return g},$e=function(){return $},ze=function(){return r.original},$=[],F=[],V=!1,Ve=0,g=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?g=t:(t||typeof t=="string")&&v(t),g=j({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},g);var le=vn(g.background);document.addEventListener("click",a),document.addEventListener("keyup",l),document.addEventListener("scroll",s),window.addEventListener("resize",h);var y={open:A,close:h,toggle:H,update:i,clone:m,attach:v,detach:M,on:f,off:E,getOptions:Ee,getImages:$e,getZoomedImage:ze};return y};function bn(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var yn=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";bn(yn);function wn(){const t=ae().value.mediumZoom;he(()=>{t.enable&&_n(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function ge(e,t){const n=+ne(e)-+ne(t);return n<0?-1:n>0?1:n}function En(e){return Vt(e,Date.now())}function $n(e,t,n){const[o,a]=De(n==null?void 0:n.in,e,t),s=o.getFullYear()-a.getFullYear(),l=o.getMonth()-a.getMonth();return s*12+l}function zn(e,t){const n=ne(e,t==null?void 0:t.in);return n.setHours(23,59,59,999),n}function Ln(e,t){const n=ne(e,t==null?void 0:t.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}function Cn(e,t){const n=ne(e,t==null?void 0:t.in);return+zn(n,t)==+Ln(n,t)}function kn(e,t,n){const[o,a,s]=De(n==null?void 0:n.in,e,e,t),l=ge(a,s),i=Math.abs($n(a,s));if(i<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-l*i);let m=ge(a,s)===-l;Cn(o)&&i===1&&ge(o,s)===1&&(m=!1);const v=l*(i-+m);return v===0?0:v}function xn(e,t,n){const o=Wt(),a=(n==null?void 0:n.locale)??o.locale??Xt,s=2520,l=ge(e,t);if(isNaN(l))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:l}),[m,v]=De(n==null?void 0:n.in,...l>0?[t,e]:[e,t]),M=Gt(v,m),f=(Ge(v)-Ge(m))/1e3,E=Math.round((M-f)/60);let A;if(E<2)return n!=null&&n.includeSeconds?M<5?a.formatDistance("lessThanXSeconds",5,i):M<10?a.formatDistance("lessThanXSeconds",10,i):M<20?a.formatDistance("lessThanXSeconds",20,i):M<40?a.formatDistance("halfAMinute",0,i):M<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):E===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",E,i);if(E<45)return a.formatDistance("xMinutes",E,i);if(E<90)return a.formatDistance("aboutXHours",1,i);if(E<We){const h=Math.round(E/60);return a.formatDistance("aboutXHours",h,i)}else{if(E<s)return a.formatDistance("xDays",1,i);if(E<de){const h=Math.round(E/We);return a.formatDistance("xDays",h,i)}else if(E<de*2)return A=Math.round(E/de),a.formatDistance("aboutXMonths",A,i)}if(A=kn(v,m),A<12){const h=Math.round(E/de);return a.formatDistance("xMonths",h,i)}else{const h=A%12,H=Math.trunc(A/12);return h<3?a.formatDistance("aboutXYears",H,i):h<9?a.formatDistance("overXYears",H,i):a.formatDistance("almostXYears",H+1,i)}}function An(e,t){return xn(e,En(e),t)}function lt(e,t,n={smooth:!0,targetPadding:-64}){let o=null;try{o=e.classList.contains("header-anchor")?e:decodeURIComponent(t)&&document.querySelector(decodeURIComponent(t))||null}catch(a){console.warn(a)}if(o){const a=(n==null?void 0:n.targetPadding)||-64,s=window.scrollY+o.getBoundingClientRect().top+a;!n.smooth||Math.abs(s-window.scrollY)>window.innerHeight?window.scrollTo(0,s):window.scrollTo({top:s,behavior:"smooth"})}}function In(e){window.addEventListener("click",async t=>{const n=t.target.closest("a");if(n){const{protocol:o,hostname:a,pathname:s,hash:l,target:i}=n,m=window.location,v=s.match(/\.\w+$/);!t.ctrlKey&&!t.shiftKey&&!t.altKey&&!t.metaKey&&i!=="_blank"&&o===m.protocol&&a===m.hostname&&!(v&&v[0]!==".html")&&s===m.pathname&&(t.preventDefault(),l&&l!==m.hash&&(await e.push({hash:decodeURIComponent(l)}),lt(n,l,{smooth:n.classList.contains("header-anchor")})))}},{capture:!0})}function Sn(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Mn(e=document){e.querySelectorAll("table").forEach(t=>{var o;if((o=t.parentElement)!=null&&o.classList.contains("table-container"))return;const n=document.createElement("div");n.className="table-container",Sn(t,"table-container")})}function On(e){const t=at(),n=T(()=>t.path),o=Zt(),a=T(()=>{let i=-1;return o.postList.find((m,v)=>m.path===n.value?(i=v,!0):!1),i}),s=T(()=>a.value-1>=0?o.postList[a.value-1]:null),l=T(()=>a.value+1<o.postList.length?o.postList[a.value+1]:null);return[s,l]}function Tn(){const e=ae(),t=T(()=>e.value.cdn.prefix);rt({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Ze(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Ze(`${t.value}meting@2/dist/Meting.min.js`)})}function Dn(){rt({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const Hn={class:"post-nav"},Nn={class:"post-nav-item"},Rn={class:"title truncate",text:"sm"},Yn={class:"post-nav-item"},Pn={class:"title truncate",text:"sm"},jn=re({__name:"YunPostNav",setup(e){const[t,n]=On();return(o,a)=>{const s=Kt("RouterLink");return S(),W("div",Hn,[w("div",Nn,[b(t)?(S(),te(s,{key:0,class:"post-nav-prev",to:b(t).path||"",title:b(t).title},{default:pe(()=>[a[0]||(a[0]=w("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1)),w("span",Rn,q(b(t).title),1)]),_:1},8,["to","title"])):x("v-if",!0)]),w("div",Yn,[b(n)?(S(),te(s,{key:0,to:b(n).path||"",title:b(n).title,class:"post-nav-next"},{default:pe(()=>[w("span",Pn,q(b(n).title),1),a[1]||(a[1]=w("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1))]),_:1},8,["to","title"])):x("v-if",!0)])])}}});function qn(){Te&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const s=o.querySelector(".blocks");if(!s)return;const l=Array.from(s.children).find(v=>v.classList.contains("active"));if(!l)return;const i=s.children[a];if(!i||l===i)return;l.classList.remove("active"),i.classList.add("active");const m=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);m==null||m.scrollIntoView({block:"nearest"})}})}const Y=typeof window<"u",ct=Y&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),dt=Y&&window.devicePixelRatio>1,Bn={elements_selector:".lazy",container:ct||Y?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},ut=e=>Object.assign({},Bn,e),Qe=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},Un=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)Qe(e,n);else Qe(e,t)},D="src",Ne="srcset",Re="sizes",mt="poster",se="llOriginalAttrs",ft="data",Ye="loading",gt="loaded",pt="applied",Fn="entered",Pe="error",vt="native",ht="data-",_t="ll-status",k=(e,t)=>e.getAttribute(ht+t),Vn=(e,t,n)=>{const o=ht+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},ie=e=>k(e,_t),U=(e,t)=>Vn(e,_t,t),_e=e=>U(e,null),je=e=>ie(e)===null,Xn=e=>ie(e)===Ye,Gn=e=>ie(e)===Pe,qe=e=>ie(e)===vt,Wn=[Ye,gt,pt,Pe],Zn=e=>Wn.indexOf(ie(e))>=0,P=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},K=(e,t)=>{Y&&t!==""&&e.classList.add(t)},O=(e,t)=>{Y&&t!==""&&e.classList.remove(t)},Kn=e=>{e.llTempImage=document.createElement("IMG")},Jn=e=>{delete e.llTempImage},bt=e=>e.llTempImage,be=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},Qn=e=>{e.disconnect()},eo=(e,t,n)=>{t.unobserve_entered&&be(e,n)},Be=(e,t)=>{e&&(e.loadingCount+=t)},to=e=>{e&&(e.toLoadCount-=1)},yt=(e,t)=>{e&&(e.toLoadCount=t)},no=e=>e.loadingCount>0,oo=e=>e.toLoadCount>0,wt=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},Ue=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&wt(n).forEach(t)},Et=(e,t)=>{wt(e).forEach(t)},ye=[D],$t=[D,mt],oe=[D,Ne,Re],zt=[ft],we=e=>!!e[se],Lt=e=>e[se],Ct=e=>delete e[se],Z=(e,t)=>{if(we(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[se]=n},ao=e=>{we(e)||(e[se]={backgroundImage:e.style.backgroundImage})},B=(e,t)=>{if(!we(e))return;const n=Lt(e);t.forEach(o=>{((a,s,l)=>{l?a.setAttribute(s,l):a.removeAttribute(s)})(e,o,n[o])})},ro=e=>{if(!we(e))return;const t=Lt(e);e.style.backgroundImage=t.backgroundImage},kt=(e,t,n)=>{K(e,t.class_applied),U(e,pt),n&&(t.unobserve_completed&&be(e,t),P(t.callback_applied,e,n))},xt=(e,t,n)=>{K(e,t.class_loading),U(e,Ye),n&&(Be(n,1),P(t.callback_loading,e,n))},R=(e,t,n)=>{n&&e.setAttribute(t,n)},et=(e,t)=>{R(e,Re,k(e,t.data_sizes)),R(e,Ne,k(e,t.data_srcset)),R(e,D,k(e,t.data_src))},so=(e,t)=>{Ue(e,n=>{Z(n,oe),et(n,t)}),Z(e,oe),et(e,t)},io=(e,t)=>{Z(e,ye),R(e,D,k(e,t.data_src))},lo=(e,t)=>{Et(e,n=>{Z(n,ye),R(n,D,k(n,t.data_src))}),Z(e,$t),R(e,mt,k(e,t.data_poster)),R(e,D,k(e,t.data_src)),e.load()},co=(e,t)=>{Z(e,zt),R(e,ft,k(e,t.data_src))},uo=(e,t,n)=>{const o=k(e,t.data_bg),a=k(e,t.data_bg_hidpi),s=dt&&a?a:o;s&&(e.style.backgroundImage=`url("${s}")`,bt(e).setAttribute(D,s),xt(e,t,n))},mo=(e,t,n)=>{const o=k(e,t.data_bg_multi),a=k(e,t.data_bg_multi_hidpi),s=dt&&a?a:o;s&&(e.style.backgroundImage=s,kt(e,t,n))},fo=(e,t,n)=>{const o=k(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(s=>`image-set(${s})`);e.style.backgroundImage=a.join(),kt(e,t,n)},At={IMG:so,IFRAME:io,VIDEO:lo,OBJECT:co},go=(e,t)=>{const n=At[e.tagName];n&&n(e,t)},po=(e,t,n)=>{const o=At[e.tagName];o&&(o(e,t),xt(e,t,n))},vo=["IMG","IFRAME","VIDEO","OBJECT"],ho=e=>vo.indexOf(e.tagName)>-1,It=(e,t)=>{!t||no(t)||oo(t)||P(e.callback_finish,t)},tt=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},_o=(e,t,n)=>{e.removeEventListener(t,n)},Fe=e=>!!e.llEvLisnrs,bo=(e,t,n)=>{Fe(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";tt(e,o,t),tt(e,"error",n)},Ie=e=>{if(!Fe(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];_o(e,n,o)}delete e.llEvLisnrs},St=(e,t,n)=>{Jn(e),Be(n,-1),to(n),O(e,t.class_loading),t.unobserve_completed&&be(e,n)},yo=(e,t,n,o)=>{const a=qe(t);St(t,n,o),K(t,n.class_loaded),U(t,gt),P(n.callback_loaded,t,o),a||It(n,o)},wo=(e,t,n,o)=>{const a=qe(t);St(t,n,o),K(t,n.class_error),U(t,Pe),P(n.callback_error,t,o),n.restore_on_error&&B(t,oe),a||It(n,o)},Se=(e,t,n)=>{const o=bt(e)||e;Fe(o)||bo(o,a=>{yo(0,e,t,n),Ie(o)},a=>{wo(0,e,t,n),Ie(o)})},Me=(e,t,n)=>{ho(e)?((o,a,s)=>{Se(o,a,s),po(o,a,s)})(e,t,n):((o,a,s)=>{Kn(o),Se(o,a,s),ao(o),uo(o,a,s),mo(o,a,s),fo(o,a,s)})(e,t,n)},Eo=(e,t,n)=>{e.setAttribute("loading","lazy"),Se(e,t,n),go(e,t),U(e,vt)},nt=e=>{e.removeAttribute(D),e.removeAttribute(Ne),e.removeAttribute(Re)},$o=e=>{Ue(e,t=>{nt(t)}),nt(e)},Mt=e=>{Ue(e,t=>{B(t,oe)}),B(e,oe)},zo=e=>{Et(e,t=>{B(t,ye)}),B(e,$t),e.load()},Lo=e=>{B(e,ye)},Co=e=>{B(e,zt)},ko={IMG:Mt,IFRAME:Lo,VIDEO:zo,OBJECT:Co},xo=(e,t)=>{(n=>{const o=ko[n.tagName];o?o(n):ro(n)})(e),((n,o)=>{je(n)||qe(n)||(O(n,o.class_entered),O(n,o.class_exited),O(n,o.class_applied),O(n,o.class_loading),O(n,o.class_loaded),O(n,o.class_error))})(e,t),_e(e),Ct(e)},Ao=(e,t,n,o)=>{n.cancel_on_exit&&Xn(e)&&e.tagName==="IMG"&&(Ie(e),$o(e),Mt(e),O(e,n.class_loading),Be(o,-1),_e(e),P(n.callback_cancel,e,t,o))},Io=(e,t,n,o)=>{const a=Zn(e);U(e,Fn),K(e,n.class_entered),O(e,n.class_exited),eo(e,n,o),P(n.callback_enter,e,t,o),a||Me(e,n,o)},So=(e,t,n,o)=>{je(e)||(K(e,n.class_exited),Ao(e,t,n,o),P(n.callback_exit,e,t,o))},Mo=["IMG","IFRAME","VIDEO"],Ot=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Oo=(e,t,n)=>{e.forEach(o=>{Mo.indexOf(o.tagName)!==-1&&Eo(o,t,n)}),yt(n,0)},To=e=>e.isIntersecting||e.intersectionRatio>0,Do=(e,t)=>{t.forEach(n=>{e.observe(n)})},Ho=(e,t)=>{Qn(e),Do(e,t)},No=(e,t)=>{Ot(e)||(t._observer=new IntersectionObserver(n=>{((o,a,s)=>{o.forEach(l=>To(l)?Io(l.target,l,a,s):So(l.target,l,a,s))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},Tt=e=>Array.prototype.slice.call(e),ve=e=>e.container.querySelectorAll(e.elements_selector),Ro=e=>Tt(e).filter(je),Yo=e=>Gn(e),Po=e=>Tt(e).filter(Yo),ot=(e,t)=>Ro(e||ve(t)),jo=(e,t)=>{Po(ve(e)).forEach(n=>{O(n,e.class_error),_e(n)}),t.update()},qo=(e,t)=>{Y&&(t._onlineHandler=()=>{jo(e,t)},window.addEventListener("online",t._onlineHandler))},Bo=e=>{Y&&window.removeEventListener("online",e._onlineHandler)},ee=function(e,t){const n=ut(e);this._settings=n,this.loadingCount=0,No(n,this),qo(n,this),this.update(t)};ee.prototype={update:function(e){const t=this._settings,n=ot(e,t);yt(this,n.length),ct?this.loadAll(n):Ot(t)?Oo(n,t,this):Ho(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),Bo(this),ve(this._settings).forEach(e=>{Ct(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;ot(e,t).forEach(n=>{be(n,this),Me(n,t,this)})},restoreAll:function(){const e=this._settings;ve(e).forEach(t=>{xo(t,e)})}},ee.load=(e,t)=>{const n=ut(t);Me(e,n)},ee.resetStatus=e=>{_e(e)},Y&&Un(ee,window.lazyLoadOptions);function Uo(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new ee({elements_selector:".lazy",...e})}function Fo(){const e=ae();e.value.vanillaLazyload.enable&&he(()=>{Uo(e.value.vanillaLazyload)})}const Vo={key:0,text:"center"},Xo=["href"],Go={m:"y-4",class:"end flex justify-center items-center"},Wo={p:"x-4",font:"bold",class:"whitespace-nowrap"},Zo=re({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=He(),o=st();return it(()=>{Mn(o.value)}),he(()=>{ue()}),Jt(()=>{ue()}),t.frontmatter.aplayer&&Tn(),t.frontmatter.codepen&&Dn(),fn(),qn(),mn(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&wn(),Fo(),(a,s)=>a.$slots.default?(S(),W("article",{key:0,class:Ae(a.frontmatter.markdownClass||"markdown-body")},[C(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:s[0]||(s[0]=(...l)=>b(ue)&&b(ue)(...l))}),a.frontmatter.url?(S(),W("div",Vo,[w("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},q(b(n)("post.view_link")),9,Xo)])):x("v-if",!0),a.frontmatter.end!==void 0?C(a.$slots,"end",{key:1},()=>[w("div",Go,[s[1]||(s[1]=w("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1)),w("span",Wo,q(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),s[2]||(s[2]=w("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1))])]):x("v-if",!0)],2)):x("v-if",!0)}}),Ko={key:0,class:"yun-time-warning",op:"80"},Jo=re({__name:"YunMdTimeWarning",setup(e){const t=Oe(),{t:n,locale:o}=He(),a=T(()=>t.value.updated||t.value.date||new Date),s=st("");Qt(o,()=>{const i=An(a.value,{addSuffix:!0});s.value=/^\d/.test(i)?` ${i}`:i},{immediate:!0});const l=T(()=>{const i=en(new Date,a.value);return typeof t.value.time_warning=="number"?i>t.value.time_warning:t.value.time_warning});return(i,m)=>l.value?(S(),W("blockquote",Ko,q(b(n)("post.time_warning",{ago:s.value})),1)):x("v-if",!0)}}),Qo={class:"ai-generated-excerpt rounded-lg bg-$va-c-bg-alt p-4"},ea={font:"black",flex:"","items-center":""},ta={op:"90","mt-1":""},na=re({__name:"YunAiExcerpt",setup(e){const t=Oe(),{t:n}=He();return(o,a)=>(S(),W("div",Qo,[w("div",ea,[a[0]||(a[0]=w("div",{"mr-1":"","i-ri-robot-2-line":""},null,-1)),w("div",null,q(b(n)("excerpt.ai")),1)]),w("div",ta,q(b(t).excerpt),1)]))}}),oa={class:"yun-main lt-md:w-full",flex:"~ center"},aa={class:"mt-8 mb-4"},ra={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},da=re({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=e,n=tn(),o=ae(),{styles:a,icon:s,color:l}=un(t.frontmatter.type),i=nn(T(()=>t.frontmatter)),m=T(()=>t.frontmatter.aside!==!1),v=at(),M=on();return an(()=>{v.hash&&setTimeout(()=>{lt(document.body,v.hash,{smooth:!0})},0)}),it(()=>{In(M)}),(f,E)=>{const A=dn,h=na,H=Jo,Ee=Zo,$e=sn,ze=jn,$=cn,F=ln;return S(),W("main",oa,[C(f.$slots,"main",{},()=>[w("div",{class:Ae(["content w-full md:w-3xl lg:w-2xl xl:w-2xl 2xl:w-4xl",{"no-aside":!m.value}]),flex:"~ col grow",p:"lt-md:0"},[Q($e,{cover:f.frontmatter.cover,m:"0",class:"relative",style:rn(b(a))},{default:pe(()=>[w("div",aa,[C(f.$slots,"main-header",{},()=>[Q(A,{title:b(i),icon:f.frontmatter.icon||b(s),color:f.frontmatter.color||b(l),cover:f.frontmatter.cover,"page-title-class":f.frontmatter.pageTitleClass},null,8,["title","icon","color","cover","page-title-class"])])]),C(f.$slots,"main-header-after"),w("div",ra,[C(f.$slots,"main-content",{},()=>[x(" <Transition appear> "),Q(Ee,{frontmatter:f.frontmatter},{default:pe(()=>[f.frontmatter.excerpt_type==="ai"&&f.frontmatter.excerpt?(S(),te(h,{key:0})):x("v-if",!0),Q(H),C(f.$slots,"main-content-md"),C(f.$slots,"default")]),_:3},8,["frontmatter"]),x(" </Transition> ")]),C(f.$slots,"main-content-after")])]),_:3},8,["cover","style"]),C(f.$slots,"main-nav-before"),C(f.$slots,"main-nav",{},()=>[f.frontmatter.nav!==!1?(S(),te(ze,{key:0})):x("v-if",!0)]),C(f.$slots,"main-nav-after"),b(o).comment.enable&&f.frontmatter.comment!==!1?C(f.$slots,"comment",{key:0},()=>[Q($,{class:Ae(f.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):x("v-if",!0),b(n).size.isLg?x("v-if",!0):(S(),te(F,{key:1,class:"mt-4"})),C(f.$slots,"main-footer-before"),C(f.$slots,"main-footer-after")],2)])])}}});export{da as _};