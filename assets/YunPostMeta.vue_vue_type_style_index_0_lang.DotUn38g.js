import"./chunks/@vueuse/motion.C4pV2ndL.js";import{F as m,a8 as h,a9 as t,ab as o,I as y,al as x,aa as k,ak as $,ad as e,ae as u,B as b,x as r,ag as l,ai as C,Z as v}from"./framework.BTpy-Ipz.js";import{m as Y,C as _,F as M,l as R}from"./app.jcDNkTXx.js";import{a as j}from"./chunks/vue-router.tIMb90In.js";import"./chunks/dayjs.DWFjVSJ6.js";import{u as c}from"./chunks/vue-i18n.BTQOV8gZ.js";import{f as g}from"./index.CFnLCBSQ.js";const A={class:"post-tags inline-flex",items:"center",gap:"1",flex:"wrap 1",justify:"end"},rt=m({__name:"YunPostTags",props:{tags:{}},setup(f){return(s,i)=>{const a=h("RouterLink");return t(),o("div",A,[(t(!0),o(y,null,x(s.tags,(n,d)=>(t(),k(a,{key:d,to:{path:"/tags/",query:{tag:n}},class:"transition post-tag inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7","rounded-full":"",border:"",hover:"bg-blue-500 text-white"},{default:$(()=>[e("span",null,u(n),1)]),_:2},1032,["to"]))),128))])}}}),lt=m({__name:"YunPostCategories",props:{categories:{}},setup(f){return(s,i)=>{const a=h("RouterLink");return t(),k(a,{to:{path:"/categories",query:{category:Array.isArray(s.categories)?s.categories.join("/"):s.categories}},class:"transition post-category inline-flex-center text-xs border-$va-c-divider","px-2":"",h:"7",border:"","rounded-full":"",hover:"bg-blue-500 text-white"},{default:$(()=>[i[0]||(i[0]=e("div",{m:"x-1","inline-flex":"","i-ri-folder-2-line":""},null,-1)),e("span",null,u(Array.isArray(s.categories)?s.categories.join(" / "):s.categories),1)]),_:1},8,["to"])}}}),B={key:0,class:"inline-flex gap-4",text:"sm",h:"5"},L=["title"],P=["data-path"],D=["title"],T=["data-path"],F=m({__name:"YunWalineMeta",setup(f){const s=j(),i=Y(),a=b(()=>i.value.addons["valaxy-addon-waline"]),{t:n}=c();return(d,p)=>a.value&&a.value.options?(t(),o("div",B,[a.value.options.pageview?(t(),o("div",{key:0,"inline-flex":"",justify:"center",items:"center",title:r(n)("post.pageview_count")},[p[0]||(p[0]=e("div",{"inline-flex":"","i-ri-eye-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count op-80","data-path":r(s).path},null,8,P)],8,L)):l("v-if",!0),a.value.options.comment?(t(),o("div",{key:1,"inline-flex":"",justify:"center",items:"center",title:r(n)("post.comment_count")},[p[1]||(p[1]=e("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1)),e("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count op-80","data-path":r(s).path},null,8,T)],8,D)):l("v-if",!0)])):l("v-if",!0)}}),N={key:0,class:"post-time flex items-center gap-4"},S=["title"],V={class:"op-80"},W=["title"],q={class:"op-80"},I=m({__name:"YunPostDateMeta",props:{frontmatter:{}},setup(f){const{t:s}=c();return(i,a)=>i.frontmatter.date?(t(),o("div",N,[e("span",{class:"posted-time inline-flex-center gap-1",title:r(s)("post.posted")+r(g)(i.frontmatter.date)},[a[0]||(a[0]=e("div",{class:"inline-block","i-ri-calendar-line":""},null,-1)),e("time",V,u(r(_)(i.frontmatter.date)),1)],8,S),i.frontmatter.updated&&i.frontmatter.updated!==i.frontmatter.date?(t(),o("span",{key:0,class:"edited-time inline-flex-center gap-1",title:r(s)("post.edited")+r(g)(i.frontmatter.updated)},[a[1]||(a[1]=e("div",{"i-ri-calendar-2-line":""},null,-1)),e("time",q,u(r(_)(i.frontmatter.updated)),1)],8,W)):l("v-if",!0)])):l("v-if",!0)}}),z={key:0,class:"post-draft-icon",title:"draft"},E=["title"],Z={key:0,"i-ri-eye-close-line":""},G={key:1,"i-ri-eye-off-line":""},H={key:2,class:"post-top-icon",color:"$va-c-warning"},J={class:"inline-flex-center gap-4"},K={key:0,class:"inline-flex-center post-counter gap-4"},O=["title"],Q={class:"op-80"},U=["title"],X={class:"op-80"},dt=m({__name:"YunPostMeta",props:{frontmatter:{}},setup(f){const s=M(),{t:i}=c(),a=R();return(n,d)=>{const p=I,w=F;return t(),o(y,null,[n.frontmatter.draft?(t(),o("div",z,d[0]||(d[0]=[e("div",{"i-ri-draft-line":""},null,-1)]))):l("v-if",!0),n.frontmatter.hide?(t(),o("div",{key:1,class:"post-top-icon",color:"$va-c-danger",title:`hide:${n.frontmatter.hide}`},[n.frontmatter.hide==="index"?(t(),o("div",Z)):(t(),o("div",G))],8,E)):l("v-if",!0),n.frontmatter.top?(t(),o("div",H,d[1]||(d[1]=[e("div",{"i-ri-pushpin-line":""},null,-1)]))):l("v-if",!0),n.frontmatter?(t(),o("div",{key:3,class:C(["post-meta gap-4",{"flex-col gap-2!":r(s).isMobile||n.frontmatter.updated}]),flex:"~ center",text:"sm"},[v(p,{frontmatter:n.frontmatter},null,8,["frontmatter"]),e("div",J,[r(a).statistics.enable?(t(),o("div",K,[n.frontmatter.wordCount?(t(),o("span",{key:0,class:"word-count inline-flex-center gap-1",title:r(i)("statistics.word")},[d[2]||(d[2]=e("div",{class:"inline-block","i-ri-file-word-line":""},null,-1)),e("span",Q,u(n.frontmatter.wordCount),1)],8,O)):l("v-if",!0),n.frontmatter.readingTime?(t(),o("span",{key:1,class:"reading-time inline-flex-center gap-1",title:r(i)("statistics.time")},[d[3]||(d[3]=e("div",{"i-ri-timer-line":""},null,-1)),e("time",X,u(n.frontmatter.readingTime)+"m",1)],8,U)):l("v-if",!0)])):l("v-if",!0),v(w)])],2)):l("v-if",!0)],64)}}});export{lt as _,rt as a,dt as b};