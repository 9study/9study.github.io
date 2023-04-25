"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[1921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,l=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=c,p=d["".concat(o,".").concat(m)]||d[m]||f[m]||l;return r?n.createElement(p,i(i({ref:t},s),{},{components:r})):n.createElement(p,i({ref:t},s))}));function p(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[d]="string"==typeof e?e:c,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),c=r(86010),l=r(78259),i=r(83699),a=r(2735),o=r(97325);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer)},r)}function d(e){let{href:t,icon:r,title:l,description:i}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u.cardTitle),title:l},r," ",l),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:i},i))}function f(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,l.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,l.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,l.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(p,{item:e})))))}},81824:(e,t,r)=>{r.d(t,{AA:()=>v,AB:()=>E,AC:()=>w,AD:()=>x,AE:()=>C,BU:()=>Z,CA:()=>A,CB:()=>D,CC:()=>T,CD:()=>j,CE:()=>S,CF:()=>N,DA:()=>I,FA:()=>h,FC:()=>b,HA:()=>d,HB:()=>f,HC:()=>m,HD:()=>p,HE:()=>y,Ha:()=>c,Hb:()=>l,Hc:()=>i,Hd:()=>a,He:()=>o,Hf:()=>u,Hg:()=>s,JZ:()=>_,O2:()=>M});var n=r(67294);const c=e=>{let{children:t}=e;return g(t,"#f00","#f8f739")},l=e=>{let{children:t}=e;return g(t,"#fff","#ee3311")},i=e=>{let{children:t}=e;return g(t,"#fff","#11cc55")},a=e=>{let{children:t}=e;return g(t,"#fff","#ff474c")},o=e=>{let{children:t}=e;return g(t,"#fff","#0000ff")},u=e=>{let{children:t}=e;return g(t,"#fff","#ee1166")},s=e=>{let{children:t}=e;return g(t,"#fff","#ff9f1a")},d=e=>{let{children:t}=e;return g(t,"#000","#f3ffbd")},f=e=>{let{children:t}=e;return g(t,"#000","#88ffcc")},m=e=>{let{children:t}=e;return g(t,"#000","#eddcc8")},p=e=>{let{children:t}=e;return g(t,"#000","#99eeff")},y=e=>{let{children:t}=e;return g(t,"#000","#f5e6de")},h=e=>{let{children:t}=e;return O(t,"large")},b=e=>{let{children:t}=e;return O(t,"xx-large")};function g(e,t,r){return n.createElement("span",{style:{backgroundColor:r,borderRadius:"5px",color:t,padding:"0.3rem"},class:"my_alert"},e)}function O(e,t){return n.createElement("span",{style:{fontSize:t}},e)}const v=e=>{let{children:t}=e;return k(t,"primary")},E=e=>{let{children:t}=e;return k(t,"secondary")},w=e=>{let{children:t}=e;return k(t,"success")},x=e=>{let{children:t}=e;return k(t,"info")},C=e=>{let{children:t}=e;return k(t,"warning")};function k(e,t){return n.createElement("div",{class:"alert alert--"+t,style:{padding:"10px",margin:"10px 0"},role:"alert"},e)}const A=e=>{let{children:t}=e;return P(t,"primary","")},D=e=>{let{children:t}=e;return P(t,"secondary","")},T=e=>{let{children:t}=e;return P(t,"success","")},j=e=>{let{children:t}=e;return P(t,"info","")},S=e=>{let{children:t}=e;return P(t,"warning","")},N=e=>{let{children:t}=e;return P(t,"danger","")};function P(e,t,r){return n.createElement("button",{class:"button "+r+"  button--"+t},e)}const I=e=>{let{children:t}=e;return H(t,"lw")};function H(e,t){return n.createElement("div",{class:"item shadow--"+t},e)}const Z=e=>{let{children:t}=e;return B(t,"var(--ifm-color-red-primary)")},_=e=>{let{children:t}=e;return B(t,"var(--ifm-color-blue-primary)")};function B(e,t){return n.createElement("font",{style:{color:t}},e)}const M=e=>{let{children:t}=e;return function(e,t){return n.createElement("div",{class:"my_card_"+t},e)}(t,"white")}},91752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var n=r(87462),c=(r(67294),r(3905)),l=r(81824),i=r(17661);const a={id:"7.\u652f\u6301",title:"7.\u652f\u6301",sidebar_label:"7.\u652f\u6301"},o=void 0,u={unversionedId:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/7.\u652f\u6301",id:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/7.\u652f\u6301",title:"7.\u652f\u6301",description:"\u4efb\u4f55\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5efa\u7acb\u3001\u5b9e\u65bd\u3001\u4fdd\u6301\u548c\u6301\u7eed\u6539\u8fdb\u90fd\u79bb\u4e0d\u5f00\u5404\u79cd\u5f62\u6b66\u7684",source:"@site/docs/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/index.mdx",sourceDirName:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301",slug:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/",draft:!1,tags:[],version:"current",frontMatter:{id:"7.\u652f\u6301",title:"7.\u652f\u6301",sidebar_label:"7.\u652f\u6301"},sidebar:"mySidebar",previous:{title:"6.3 \u53d8\u66f4\u7684\u7b56\u5212",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/6\u3001\u7b56\u5212/6.3 \u53d8\u66f4\u7684\u7b56\u5212"},next:{title:"7.1.1 \u603b\u5219",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/7\u3001\u652f\u6301/7.1\u3001\u8d44\u6e90/7.1.1 \u603b\u5219"}},s={},d=[],f={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(l.AA,{mdxType:"AA"},"\u4efb\u4f55\u7ec4\u7ec7",(0,c.kt)(l.CA,{mdxType:"CA"},"\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb"),"\u7684\u5efa\u7acb\u3001\u5b9e\u65bd\u3001\u4fdd\u6301\u548c\u6301\u7eed\u6539\u8fdb\u90fd\u79bb\u4e0d\u5f00\u5404\u79cd\u5f62\u6b66\u7684"),(0,c.kt)(l.AB,{mdxType:"AB"},"\u4efb\u4f55\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5efa\u7acb\u3001\u5b9e\u65bd\u3001\u4fdd\u6301\u548c\u6301\u7eed\u6539\u8fdb\u90fd\u79bb\u4e0d\u5f00\u5404\u79cd\u5f62\u6b66\u7684"),(0,c.kt)(l.AC,{mdxType:"AC"},"\u4efb\u4f55\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5efa\u7acb\u3001\u5b9e\u65bd\u3001\u4fdd\u6301\u548c\u6301\u7eed\u6539\u8fdb\u90fd\u79bb\u4e0d\u5f00\u5404\u79cd\u5f62\u6b66\u7684"),(0,c.kt)(l.DA,{mdxType:"DA"},"\u4efb\u4f55\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5efa\u7acb\u3001\u5b9e\u65bd\u3001\u4fdd\u6301\u548c\u6301\u7eed\u6539\u8fdb\u90fd\u79bb\u4e0d\u5f00\u5404\u79cd\u5f62\u6b66\u7684"),"\u652f\u6301\uff0c\u5305\u62ec\uff1a\u8d44\u6e90\u3001\u80fd\u529b\u3001\u610f\u8bc6\u548c\u6c9f\u901a\u3002",(0,c.kt)("p",null,"\u652f\u6301\u662f\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u53ca\u5176\u8fc7\u7a0b\u7684\u4e00\u4e2a\u91cd\u8981\n\u7ec4\u6210\u90e8\u5206\uff0c\u4e5f\u662f\u7ec4\u7ec7\u5b9e\u73b0\u8d28\u91cf\u65b9\u9488\u548c\u8d28\u91cf\u76ee\u6807\u7684\u5fc5\u8981\u6761\u4ef6\u3002\u540c\u65f6\uff0c\u589e\u503c\u521b\u9020\u8fc7\u7a0b\u662f\n\u9760\u652f\u6301\u6765\u5b9e\u73b0\u548c\u4fdd\u8bc1\u7684\u3002\u56e0\u6b64\uff0c\u652f\u6301\u8fc7\u7a0b\u7684\u6709\u6548\u6027\u548c\u6548\u7387\u662f\u8fc7\u7a0b\u4e1a\u7ee9\u7684\u57fa\u7840\u4fdd\u969c\uff01"),(0,c.kt)("p",null,"\u7ec4ISO 9001\uff1a2015 \u65b0\u7248\u6807\u51c6\uff0c\u5728\u4ee5\u5f80\u6807\u51c6\u5173\u4e8e\u4eba\u529b\u8d44\u6e90\u3001\u57fa\u7840\u8bbe\u65bd\u548c\u5de5\u4f5c\u73af\u5883\n\u57fa\u7840\u4e0a\uff0c\u589e\u52a0\u4e86\u201c\u8d44\u6e90\u83b7\u5f97\u201d\u5bb6\u201c\u7ec4\u7ec7\u77e5\u8bc6\u201d\u7b49\uff0c\u5e76\u5bf9\u652f\u6301\u7684\u8d44\u6e90\u8fdb\u884c\u4e86\u91cd\u65b0\u89c4\u5212\u548c\u8981\u6c42\u3002\n\u4e0e\u524d\u51e0\u7248\u76f8\u6bd4\uff0c\u5176\u8981\u6c42\u66f4\u5e7f\u6cdb\u3001\u6df1\u4eba\uff0c\u7cfb\u7edf\u548c\u4e0e\u65f6\u4ff1\u8fdb\u3002"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);