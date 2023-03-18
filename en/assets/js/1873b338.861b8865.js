"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77738:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,color:n}=e;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.2rem"}},t)}},68839:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(2728);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return r.createElement("div",{className:l.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},2728:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),l=n(20107);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const p=a.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const g=(0,l.L)(),b=u??g.tableOfContents.minHeadingLevel,h=d??g.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:b,maxHeadingLevel:h});return m((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:h}}),[s,c,b,h])),a.createElement(p,(0,r.Z)({toc:y,className:n,linkClassName:s},f))}},69475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(77738),o=n(68839);const i={id:"Home",title:"Power's Wiki",sidebar_label:"Home",slug:"/"},s=void 0,c={unversionedId:"Home",id:"Home",title:"Power's Wiki",description:"Docusaurus \u7eff",source:"@site/docs/Home.md",sourceDirName:".",slug:"/",permalink:"/en/",draft:!1,tags:[],version:"current",frontMatter:{id:"Home",title:"Power's Wiki",sidebar_label:"Home",slug:"/"},sidebar:"mySidebar",next:{title:"xuexi_index",permalink:"/en/xuexi_index"}},u={},m=[],d={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus \u7eff"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u4e0a\u4f20\u6548\u679c\u600e\u6837"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/linyuxuanlin"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/dynamic/json?label=GitHub&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dlinyuxuanlin&labelColor=555555&color=282c34&longCache=true?&style=for-the-badge",alt:"badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.zhihu.com/people/linyuxuanlin"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/dynamic/json?color=282c34&labelColor=0084ff&label=ZHIHU&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dlinyuxuanlin&longCache=true?&style=for-the-badge",alt:"badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://sspai.com/u/power/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/dynamic/json?label=SSPAI&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dsspai%26queryKey%3Dpower&color=282c34&labelColor=d71a1b&longCache=true?&style=for-the-badge",alt:"badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://space.bilibili.com/349536948"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/dynamic/json?labelColor=FE7398&label=BILIBILI&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dbilibili%26queryKey%3D349536948&color=282c34&longCache=true?&style=for-the-badge",alt:"badge"}))),(0,a.kt)("p",null,"Hi there~",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u662f\u6211\u7684\u77e5\u8bc6\u5e93\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u9057\u5fd8\u3001\u4fbf\u4e8e\u5206\u4eab\uff0c\u6211\u5728\u8fd9\u91cc\u6536\u5f55\u77e5\u8bc6\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8bf7\u968f\u610f\u6d4f\u89c8\uff5e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/linyuxuanlin/wiki-docusaurus/deployments"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/deployments/linyuxuanlin/Wiki_Docusaurus/Production?label=Build&style=flat-square",alt:"badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/linyuxuanlin/Wiki_Docusaurus/commits/main"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/linyuxuanlin/Wiki_Docusaurus?color=FCD734&label=Last%20commit&style=flat-square",alt:"badge"})),"\n",(0,a.kt)("a",{parentName:"p",href:"ContactMe"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Contact%20me-here-34ABE0?&style=flat-square",alt:"badge"}))),(0,a.kt)("h6",null,"Power Lin |  ",(0,a.kt)("a",{href:"https://beian.miit.gov.cn"}," \u7ca4 ICP \u5907 20014898 \u53f7 ")," | Built with Docusaurus"),(0,a.kt)(o.Z,{toc:m,mdxType:"TOCInline"}),";")}f.isMDXComponent=!0}}]);