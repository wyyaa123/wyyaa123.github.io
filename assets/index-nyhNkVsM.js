import{_ as v}from"./ValaxyMain.vue_vue_type_style_index_0_lang-IsWg8Y1V.js";import{d as k,C as $,a3 as w,o as m,c as f,a as s,t as u,U as b,ae as j,F as D,j as I,e as y,f as _,w as t,A as B,ad as p,b as Y,Q as a}from"./app-C5hxwsTO.js";import{o as L}from"./index-zQLYYkIj.js";import"./YunComment.vue_vue_type_style_index_0_lang-BmF_UDzM.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DPS_F143.js";import"./post-BZ9yRj8N.js";import"./animation-bgq_moZP.js";const z=["href","title"],C={class:"yun-link-left"},R={class:"yun-link-avatar size-16 overflow-hidden flex-center"},S=["src","alt"],T={class:"yun-link-info",m:"l-2"},E={class:"yun-link-blog",font:"serif black"},N={class:"yun-link-desc"},U=k({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(d){const o=d;function r(n){L(n,o.errorImg)}const i=$();return w(i,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:o.i*50}}}),(n,l)=>(m(),f("li",{ref_key:"itemRef",ref:i,class:"yun-link-item inline-flex",style:b({"--primary-color":n.link.color})},[s("a",{class:"yun-link-url",p:"x-4 y-2",href:n.link.url,title:n.link.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",C,[s("div",R,[s("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:n.link.avatar,alt:n.link.name,onError:r},null,40,S)])]),s("div",T,[s("div",E,u(n.link.blog),1),s("div",N,u(n.link.desc),1)])],8,z)],4))}}),V={class:"yun-links"},F={class:"yun-link-items",flex:"center wrap"},M=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(d){const o=d,{data:r}=j(o.links,o.random);return(i,n)=>{const l=U;return m(),f("div",V,[s("ul",F,[(m(!0),f(D,null,I(y(r),(e,c)=>(m(),_(l,{key:c,i:c,link:e,"error-img":i.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),K={__name:"index",setup(d,{expose:o}){const r=JSON.parse('{"title":"ToDo","description":"云游的小伙伴们","frontmatter":{"title":"ToDo","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"C:/Users/86311/Desktop/wyyaa123-Blog/pages/links/index.md","lastUpdated":1734437656000}'),i=B(),n=r.frontmatter||{};i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},r.frontmatter||{}),p("pageData",r),p("valaxy:frontmatter",n),globalThis.$frontmatter=n;const l={title:"ToDo",keywords:"链接",description:"云游的小伙伴们",links:"https://www.yunyoujun.cn/friends/links.json",random:!0};return o({frontmatter:l}),(e,c)=>{const h=M,g=v;return m(),_(g,{frontmatter:y(n)},{"main-content-md":t(()=>[Y(h,{links:l.links,random:l.random},null,8,["links","random"])]),"main-header":t(()=>[a(e.$slots,"main-header")]),"main-header-after":t(()=>[a(e.$slots,"main-header-after")]),"main-nav":t(()=>[a(e.$slots,"main-nav")]),"main-content":t(()=>[a(e.$slots,"main-content")]),"main-content-after":t(()=>[a(e.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(e.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(e.$slots,"main-nav-after")]),comment:t(()=>[a(e.$slots,"comment")]),footer:t(()=>[a(e.$slots,"footer")]),aside:t(()=>[a(e.$slots,"aside")]),"aside-custom":t(()=>[a(e.$slots,"aside-custom")]),default:t(()=>[a(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{K as default};
