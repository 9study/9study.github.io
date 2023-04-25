"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[7402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=l,s=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81824:(e,t,n)=>{n.d(t,{AA:()=>N,AB:()=>g,AC:()=>O,AD:()=>w,AE:()=>C,BU:()=>M,CA:()=>x,CB:()=>j,CC:()=>H,CD:()=>S,CE:()=>I,CF:()=>P,DA:()=>D,FA:()=>h,FC:()=>v,HA:()=>d,HB:()=>m,HC:()=>f,HD:()=>s,HE:()=>k,Ha:()=>l,Hb:()=>a,Hc:()=>i,Hd:()=>o,He:()=>c,Hf:()=>u,Hg:()=>p,JZ:()=>B,O2:()=>F});var r=n(67294);const l=e=>{let{children:t}=e;return y(t,"#f00","#f8f739")},a=e=>{let{children:t}=e;return y(t,"#fff","#ee3311")},i=e=>{let{children:t}=e;return y(t,"#fff","#11cc55")},o=e=>{let{children:t}=e;return y(t,"#fff","#ff474c")},c=e=>{let{children:t}=e;return y(t,"#fff","#0000ff")},u=e=>{let{children:t}=e;return y(t,"#fff","#ee1166")},p=e=>{let{children:t}=e;return y(t,"#fff","#ff9f1a")},d=e=>{let{children:t}=e;return y(t,"#000","#f3ffbd")},m=e=>{let{children:t}=e;return y(t,"#000","#88ffcc")},f=e=>{let{children:t}=e;return y(t,"#000","#eddcc8")},s=e=>{let{children:t}=e;return y(t,"#000","#99eeff")},k=e=>{let{children:t}=e;return y(t,"#000","#f5e6de")},h=e=>{let{children:t}=e;return b(t,"large")},v=e=>{let{children:t}=e;return b(t,"xx-large")};function y(e,t,n){return r.createElement("span",{style:{backgroundColor:n,borderRadius:"5px",color:t,padding:"0.3rem"},class:"my_alert"},e)}function b(e,t){return r.createElement("span",{style:{fontSize:t}},e)}const N=e=>{let{children:t}=e;return E(t,"primary")},g=e=>{let{children:t}=e;return E(t,"secondary")},O=e=>{let{children:t}=e;return E(t,"success")},w=e=>{let{children:t}=e;return E(t,"info")},C=e=>{let{children:t}=e;return E(t,"warning")};function E(e,t){return r.createElement("div",{class:"alert alert--"+t,style:{padding:"10px",margin:"10px 0"},role:"alert"},e)}const x=e=>{let{children:t}=e;return A(t,"primary","")},j=e=>{let{children:t}=e;return A(t,"secondary","")},H=e=>{let{children:t}=e;return A(t,"success","")},S=e=>{let{children:t}=e;return A(t,"info","")},I=e=>{let{children:t}=e;return A(t,"warning","")},P=e=>{let{children:t}=e;return A(t,"danger","")};function A(e,t,n){return r.createElement("button",{class:"button "+n+"  button--"+t},e)}const D=e=>{let{children:t}=e;return T(t,"lw")};function T(e,t){return r.createElement("div",{class:"item shadow--"+t},e)}const M=e=>{let{children:t}=e;return _(t,"var(--ifm-color-red-primary)")},B=e=>{let{children:t}=e;return _(t,"var(--ifm-color-blue-primary)")};function _(e,t){return r.createElement("font",{style:{color:t}},e)}const F=e=>{let{children:t}=e;return function(e,t){return r.createElement("div",{class:"my_card_"+t},e)}(t,"white")}},59375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>b,frontMatter:()=>m,metadata:()=>s,toc:()=>h});var r,l,a=n(87462),i=n(67294),o=n(3905);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"})),l||(l=i.createElement("path",{d:"M14 2v6h6M16 13H8M16 17H8M10 9H8"})))};function p(e){let{children:t,url:n}=e;return i.createElement("a",{href:n,className:"content-ref-card"},i.createElement(u,{title:"File Icon",className:"file-icon"}),t)}function d(e){let{src:t,...n}=e;return i.createElement("img",(0,a.Z)({src:t},n,{className:"image-narrow"}))}n(81824);const m={id:"9.2 \u5185\u90e8\u5ba1\u6838",title:"9.2 \u5185\u90e8\u5ba1\u6838",sidebar_label:"9.2 \u5185\u90e8\u5ba1\u6838"},f=void 0,s={unversionedId:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.2 \u5185\u90e8\u5ba1\u6838",id:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.2 \u5185\u90e8\u5ba1\u6838",title:"9.2 \u5185\u90e8\u5ba1\u6838",description:"9.2 \u5185\u90e8\u5ba1\u6838",source:"@site/docs/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.2.mdx",sourceDirName:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7",slug:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.2 \u5185\u90e8\u5ba1\u6838",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.2 \u5185\u90e8\u5ba1\u6838",draft:!1,tags:[],version:"current",frontMatter:{id:"9.2 \u5185\u90e8\u5ba1\u6838",title:"9.2 \u5185\u90e8\u5ba1\u6838",sidebar_label:"9.2 \u5185\u90e8\u5ba1\u6838"},sidebar:"mySidebar",previous:{title:"9.1 \u76d1\u89c6\u3001\u6d4b\u91cf\u3001\u5206\u6790\u548c\u8bc4\u4ef7",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.1 \u76d1\u89c6\u3001\u6d4b\u91cf\u3001\u5206\u6790\u548c\u8bc4\u4ef7"},next:{title:"9.3 \u7ba1\u7406\u8bc4\u5ba1",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/9\u3001\u7ee9\u6548\u8bc4\u4ef7/9.3 \u7ba1\u7406\u8bc4\u5ba1"}},k={},h=[{value:"9.2 \u5185\u90e8\u5ba1\u6838",id:"92-\u5185\u90e8\u5ba1\u6838",level:2},{value:"\u5185\u90e8\u5ba1\u6838\u7684\u6982\u5ff5",id:"\u5185\u90e8\u5ba1\u6838\u7684\u6982\u5ff5",level:3},{value:"\u5185\u90e8\u5ba1\u6838\u7684\u76ee\u7684",id:"\u5185\u90e8\u5ba1\u6838\u7684\u76ee\u7684",level:3},{value:"\u5185\u90e8\u5ba1\u6838\u7684\u7b56\u5212\u4e0e\u5b9e\u65bd",id:"\u5185\u90e8\u5ba1\u6838\u7684\u7b56\u5212\u4e0e\u5b9e\u65bd",level:3},{value:"(1\uff09\u5ba1\u6838\u65b9\u6848\u7684\u7b56\u5212",id:"1\u5ba1\u6838\u65b9\u6848\u7684\u7b56\u5212",level:4},{value:"(2\uff09\u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u5ba1\u6838\u51c6\u5219\u548c\u8303\u56f4",id:"2\u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u5ba1\u6838\u51c6\u5219\u548c\u8303\u56f4",level:4},{value:"(3\uff09 \u786e\u4fdd\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027",id:"3-\u786e\u4fdd\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027",level:4},{value:"(4\uff09\u5ba1\u6838\u7684\u5b9e\u65bd\u4e0e\u62a5\u544a\u5ba1\u6838\u7ed3\u679c",id:"4\u5ba1\u6838\u7684\u5b9e\u65bd\u4e0e\u62a5\u544a\u5ba1\u6838\u7ed3\u679c",level:4},{value:"(5\uff09\u8fdb\u884c\u7ea0\u6b63\u548c\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd",id:"5\u8fdb\u884c\u7ea0\u6b63\u548c\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd",level:4},{value:"(6\uff09\u4fdd\u7559\u5f62\u6210\u6587\u4ef6\u7684\u4fe1\u606f",id:"6\u4fdd\u7559\u5f62\u6210\u6587\u4ef6\u7684\u4fe1\u606f",level:4}],v={toc:h},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"92-\u5185\u90e8\u5ba1\u6838"},"9.2 \u5185\u90e8\u5ba1\u6838"),(0,o.kt)(p,{url:"#",mdxType:"ContentRef"},"Adding a Build Profile"),(0,o.kt)(d,{src:"/images/9.1.2-1\u987e\u5ba2\u6ee1\u610f\u5ea6\u6d4b\u91cf\u8fc7\u7a0b.png",mdxType:"NarrowImage"}),(0,o.kt)("admonition",{title:"9.2 \u5185\u90e8\u5ba1\u6838",type:"tip"},(0,o.kt)("hr",{parentName:"admonition"}),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"9.2.1")),(0,o.kt)("p",{parentName:"admonition"},"\u7ec4\u7ec7\u5e94\u6309\u7167\u7b56\u5212\u7684\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u5185\u90e8\u5ba1\u6838\uff0c\u4ee5\u63d0\u4f9b\u6709\u5173\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u4e0b\u5217\u4fe1\u606f\uff1a"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"a) \u662f\u5426\u7b26\u5408\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u7ec7\u81ea\u8eab\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8981\u6c42\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u672c\u6807\u51c6\u7684\u8981\u6c42\u3002"))),(0,o.kt)("li",{parentName:"ul"},"b) \u662f\u5426\u5f97\u5230\u6709\u6548\u7684\u5b9e\u65bd\u548c\u4fdd\u6301\u3002")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"9.2.2")),(0,o.kt)("p",{parentName:"admonition"},"\u7ec4\u7ec7\u5e94\uff1a"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"a) \u4f9d\u636e\u6709\u5173\u8fc7\u7a0b\u7684\u91cd\u8981\u6027\u3001\u5bf9\u7ec4\u7ec7\u4ea7\u751f\u5f71\u54cd\u7684\u53d8\u5316\u548c\u4ee5\u5f80\u7684\u5ba1\u6838\u7ed3\u679c\uff0c\u7b56\u5212\u3001\u5236\u5b9a\u3001\u5b9e\u65bd\u548c\u4fdd\u6301\u5ba1\u6838\u65b9\u6848\uff0c\u5ba1\u6838\u65b9\u6848\u5305\u62ec\u9891\u6b21\u3001\u65b9\u6cd5\u3001\u804c\u8d23\u3001\u7b56\u5212\u8981\u6c42\u548c\u62a5\u544a\uff1b"),(0,o.kt)("li",{parentName:"ul"},"b) \u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u5ba1\u6838\u51c6\u5219\u548c\u8303\u56f4\uff1b"),(0,o.kt)("li",{parentName:"ul"},"c) \u9009\u62e9\u5ba1\u6838\u5458\u5e76\u5b9e\u65bd\u5ba1\u6838\uff0c\u4ee5\u786e\u4fdd\u5ba1\u6838\u8fc7\u7a0b\u5ba2\u89c2\u516c\u6b63\uff1b"),(0,o.kt)("li",{parentName:"ul"},"d) \u786e\u4fdd\u5c06\u5ba1\u6838\u7ed3\u679c\u62a5\u544a\u7ed9\u76f8\u5173\u7ba1\u7406\u8005\uff1b"),(0,o.kt)("li",{parentName:"ul"},"e) \u53ca\u65f6\u91c7\u53d6\u9002\u5f53\u7684\u7ea0\u6b63\u548c\u7ea0\u6b63\u63aa\u65bd\uff1b"),(0,o.kt)("li",{parentName:"ul"},"f) \u4fdd\u7559\u6210\u6587\u4fe1\u606f\uff0c\u4f5c\u4e3a\u5b9e\u65bd\u5ba1\u6838\u65b9\u6848\u4ee5\u53ca\u5ba1\u6838\u7ed3\u679c\u7684\u8bc1\u636e\u3002")),(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\uff1a\u76f8\u5173\u6307\u5357\u53c2\u89c1 GB/T 19011\u3002")),(0,o.kt)("h3",{id:"\u5185\u90e8\u5ba1\u6838\u7684\u6982\u5ff5"},"\u5185\u90e8\u5ba1\u6838\u7684\u6982\u5ff5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5ba1\u6838\u662f\u4e3a\u83b7\u5f97\u5ba1\u6838\u8bc1\u636e\u5e76\u5bf9\u5176\u8fdb\u884c\u5ba2\u89c2\u7684\u8bc4\u4ef7\uff0c\u4ee5\u786e\u5b9a\u6ee1\u8db3\u5ba1\u6838\u51c6\u5219\u7684\u7a0b\u5ea6\u6240\u8fdb\u884c\u7684\u7cfb\u7edf\u7684\u3001\u72ec\u7acb\u7684\u5e76\u5f62\u6210\u6587\u4ef6\u7684\u8fc7\u7a0b\u3002\n")),(0,o.kt)("p",null,"\u5ba1\u6838\u53ef\u4ee5\u5305\u62ec\u4f53\u7cfb\u5ba1\u6838\u3001\u4ea7\u54c1\u5ba1\u6838\n\u548c\u8fc7\u7a0b\u5ba1\u6838\u7b49\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\u5185\u90e8\u5ba1\u6838\u4e3b\u8981\u6307\u7684\u662f\u7ec4\u7ec7\u5185\u90e8\u5fc5\u987b\u6309\u7b56\u5212\u7684\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u7684\u8d28\u91cf\n\u4f53\u7cfb\u5ba1\u6838"),"\u3002\u5b83\u6240\u4f9d\u636e\u7684\u51c6\u5219\u662f ISO 9001 \u6807\u51c6\u53ca\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u6709\u5173\u5185\u90e8\u5ba1\u6838\n\u7684\u7b56\u5212\u8f93\u51fa\u6587\u4ef6\u8981\u6c42\u7b49\u3002"),(0,o.kt)("h3",{id:"\u5185\u90e8\u5ba1\u6838\u7684\u76ee\u7684"},"\u5185\u90e8\u5ba1\u6838\u7684\u76ee\u7684"),(0,o.kt)("p",null,"\u5185\u90e8\u5ba1\u6838\u5e94\u786e\u5b9a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u4e24\u4e2a\u65b9\u9762\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1\uff09\u7b26\u5408\u6027"),"\uff0c\u5373\u662f\u5426\u7b26\u5408\u7ec4\u7ec7\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u7b56\u5212\u8981\u6c42\u548c ISO 9001 \u6807\u51c6\u7684\n\u8981\u6c42\uff1b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2\uff09\u6709\u6548\u6027"),"\uff0c\u5373\u662f\u5426\u5f97\u5230\u6709\u6548\u7684\u5b9e\u65bd\u4e0e\u4fdd\u6301\uff0c\u5e76\u8fbe\u5230\u9884\u671f\u76ee\u6807\u3002")),(0,o.kt)("p",null,"\u603b\u4e4b\uff0c\u5f00\u5c55\u5185\u90e8\u5ba1\u6838\u662f\u4e3a\u4e86\u67e5\u660e\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5b9e\u65bd\u6548\u679c\uff0c\u662f\u5426\u8fbe\u5230\u4e86\u6309\u7ec4\n\u7ec7\u7684\u76ee\u6807\u6240\u5efa\u7acb\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u8981\u6c42\uff0c\u53ca\u65f6\u53d1\u73b0\u5b58\u5728\u95ee\u9898\uff0c\u4ee5\u4fbf\u901a\u8fc7\u91c7\u53d6\u7ea0\u6b63\n\u548c\u7ea0\u6b63\u63aa\u65bd\uff0c\u6765\u8fdb\u4e00\u6b65\u63d0\u9ad8\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u7b26\u5408\u6027\u548c\u6709\u6548\u6027\u3002"),(0,o.kt)("admonition",{title:"\u5185\u90e8\u5ba1\u6838\u4e0e\u8d28\u91cf\u76d1\u7763\u548c\u8d28\u91cf\u68c0\u9a8c",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8d28\u91cf\u76d1\u7763\u662f\u6307\u4e3a\u4e86\u786e\u4fdd\u6ee1\u8db3\u89c4\u5b9a\u7684\u8981\u6c42\uff0c\u5bf9\u8fd0\u884c\u72b6\u51b5\u8fdb\u884c\u8fde\u7eed\u7684\u76d1\u89c6\u548c\u9a8c\u8bc1\uff0c\n\u5982\u7ec4\u7ec7\u7ecf\u5e38\u5f00\u5c55\u7684\u4ea7\u54c1\u8d28\u91cf\u76d1\u7763\u3001\u5de5\u827a\u7eaa\u5f8b\u548c\u6587\u660e\u751f\u4ea7\u68c0\u67e5\u7b49\uff1b\u8d28\u91cf\u68c0\u9a8c\u662f\u6307\u5bf9\n\u4ea7\u54c1\u67d0\u4e2a\u7279\u6027\u8fdb\u884c\u7684\u68c0\u9a8c\u548c\u6d4b\u91cf\u3002\u56e0\u6b64\uff0c\u4e0d\u80fd\u628a\u5185\u90e8\u5ba1\u6838\u4e0e\u8d28\u91cf\u76d1\u7763\u3001\u8d28\u91cf\u68c0\u9a8c\n\u76f8\u6df7\u6dc6\u3002\u663e\u7136\uff0c\u5185\u90e8\u5ba1\u6838\u53ef\u4ee5\u5305\u62ec\u8bc4\u5b9a\u8d28\u91cf\u76d1\u7763\u548c\u8d28\u91cf\u68c0\u9a8c\u7684\u6709\u6548\u6027\u3002")),(0,o.kt)("h3",{id:"\u5185\u90e8\u5ba1\u6838\u7684\u7b56\u5212\u4e0e\u5b9e\u65bd"},"\u5185\u90e8\u5ba1\u6838\u7684\u7b56\u5212\u4e0e\u5b9e\u65bd"),(0,o.kt)("h4",{id:"1\u5ba1\u6838\u65b9\u6848\u7684\u7b56\u5212"},"(1\uff09\u5ba1\u6838\u65b9\u6848\u7684\u7b56\u5212"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u5ba1\u6838\u65b9\u6848\u662f\u6307\u9488\u5bf9\u7279\u5b9a\u65f6\u95f4\u6bb5\u6240\u7b56\u5212\uff0c\u5e76\u5177\u6709\u7279\u5b9a\u76ee\u7684\u7684\u4e00\u7ec4\uff08\u4e00\u6b21\u6216\u591a\u6b21\uff09\n\u5ba1\u6838\u3002"),"\u5b83\u5e94\u89c4\u5b9a\u5ba1\u6838\u7684\u9891\u6b21\u3001\u65b9\u6cd5\u3001\u804c\u8d23\u3001\u7b56\u5212\u5ba1\u6838\u7684\u8981\u6c42\u548c\u5ba1\u6838\u62a5\u544a\u7f16\u5236\u3002\u5ba1\n\u6838\u65b9\u6848\u8fd8\u5e94\u8003\u8651\u8d28\u91cf\u76ee\u6807\u3001\u76f8\u5173\u8fc7\u7a0b\u7684\u91cd\u8981\u6027\u3001\u987e\u5ba2\u53cd\u9988\u3001\u5f71\u54cd\u7ec4\u7ec7\u7684\u53d8\u66f4\u548c\u4ee5\n\u5f80\u5ba1\u6838\u7684\u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u7ec4\u7ec7\u5728\u7b56\u5212\u5ba1\u6838\u65b9\u6848\u65f6\uff0c\u5e94\u8003\u8651\u62df\u5ba1\u6838\u7684\u8fc7\u7a0b\u548c\u533a\u57df\u7684\u72b6\u51b5\uff08\u5de5\u4f5c\u590d\u6742\u7a0b\u5ea6\u3001\n\u6d89\u53ca\u8fc7\u7a0b\u53ca\u53ef\u80fd\u5b58\u5728\u95ee\u9898\u7684\u591a\u5c11\u7b49\uff09\u3001\u91cd\u8981\u6027\uff08\u8be5\u90e8\u95e8\u6216\u8fc7\u7a0b\u548c\u6d3b\u52a8\u6240\u6d89\u53ca\u4ea7\u54c1\u8d28\n\u91cf\u7279\u6027\u7684\u7b49\u7ea7\u6216\u81ea\u6211\u5b8c\u5584\u673a\u5236\u662f\u5426\u5efa\u7acb\u7b49\uff09\u53ca\u4ee5\u5f80\u5ba1\u6838\u7684\u7ed3\u679c\uff0c\u5fc5\u8981\u65f6\u53ef\u80fd\u5305\u62ec\n\u5bf9\u5916\u90e8\u4f9b\u65b9\u73b0\u573a\u7684\u5ba1\u6838\uff08\u5e94\u5f53\u4f5c\u4e3a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u4e00\u90e8\u5206\uff09\u3002\u7b56\u5212\u5305\u62ec\u5236\u5b9a\u5e74\u5ea6\u7684\n\u603b\u4f53\u5ba1\u6838\u65b9\u6848\u548c\u6bcf\u6b21\u5ba1\u6838\u7684\u5177\u4f53\u65b9\u6848\uff08\u5305\u62ec\u65e5\u7a0b\u5b89\u6392\uff09\u3002"),(0,o.kt)("p",null,"\u901a\u5e38",(0,o.kt)("inlineCode",{parentName:"p"},"\u6bcf\u5e74\u81f3\u5c11\u8981\u8fdb\u884c\u4e00\u6b21"),"\u5b8c\u6574\u7684\u5185\u5ba1\u3002\u5185\u5ba1\u53ef\u96c6\u4e2d\u8fdb\u884c\u4e00\u6b21\uff0c\u4f8b\u5982\u5728\u7ba1\u7406\u8bc4\n\u5ba1\u4e4b\u524d\uff0c\u4e3a\u7ba1\u7406\u8bc4\u5ba1\u63d0\u4f9b\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8fd0\u884c\u8f83\u5168\u9762\u7684\u4fe1\u606f\u3002\u540c\u65f6\uff0c\u53ef\u6eda\u52a8\u5f0f\u5730\u7ecf\n\u5e38\u8fdb\u884c\uff0c\u4f8b\u5982\u6bcf\u4e2a\u6708\u5b89\u6392\u82e5\u5e72\u4e2a\u90e8\u95e8\u7684\u5185\u5ba1\u3002\u7279\u522b\u662f\u5728\u4f53\u7cfb\u5efa\u7acb\u521d\u671f\u3001\u4f53\u7cfb\u53d1\u751f\n\u91cd\u8981\u53d8\u5316\u6216\u51fa\u73b0\u91cd\u5927\u4e0d\u5408\u683c\u65f6\uff0c\u5e94\u6ce8\u610f\u9002\u5f53\u589e\u52a0\u5185\u5ba1\u9891\u6b21\u3002"),(0,o.kt)("h4",{id:"2\u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u5ba1\u6838\u51c6\u5219\u548c\u8303\u56f4"},"(2\uff09\u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u5ba1\u6838\u51c6\u5219\u548c\u8303\u56f4"),(0,o.kt)("p",null,"\u7ec4\u7ec7\u5728\u7b56\u5212\u5e74\u5ea6\u5ba1\u6838\u8ba1\u5212\u65f6\uff0c\u5b9c\u6839\u636e\u76ee\u7684\u3001\u804c\u80fd\u548c\u533a\u57df\u91cd\u8981\u6027\u5b89\u6392\u8fdb\u884c\u591a\u6b21\n\u5ba1\u6838\u3002\u6240\u4ee5\uff0c\u8981\u89c4\u5b9a\u6bcf\u6b21\u5ba1\u6838\u7684\u51c6\u5219\u548c\u8303\u56f4\u3002\u5982\u67d0\u6708\u53ea\u5bf9\u67d0\u51e0\u4e2a\u90e8\u95e8\u6216\u804c\u80fd\u8fdb\u884c\n\u5185\u5ba1\uff0c\u90a3\u4e48\u5ba1\u6838\u7684\u51c6\u5219\u548c\u8303\u56f4\u5c31\u4e0e\u5b8c\u6574\u7684\u5185\u5ba1\u6709\u6240\u533a\u522b\u3002"),(0,o.kt)("h4",{id:"3-\u786e\u4fdd\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027"},"(3\uff09 \u786e\u4fdd\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027"),(0,o.kt)("p",null,"\u5ba1\u6838\u5458\u662f\u6307\u6709\u80fd\u529b\u5b9e\u65bd\u5ba1\u6838\u7684\u4eba\u5458\u3002\u5ba1\u6838\u5458\u7684\u9009\u62e9\u548c\u5ba1\u6838\u7684\u5b9e\u65bd\uff0c\u662f\u786e\u4fdd\u5ba1\n\u6838\u8fc7\u7a0b\u7684\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027\u7684\u5173\u952e\u3002\u56e0\u6b64\uff0c\u9009\u62e9\u5185\u90e8\u5ba1\u6838\u5458\u65f6\u5e94\u9075\u5faa",(0,o.kt)("inlineCode",{parentName:"p"},"\u201c\u4f9d\u636e\u7edf\u4e00\uff0c\n\u6807\u51c6\u4e00\u81f4\uff0c\u5c3d\u91cf\u56de\u907f\u201d"),"\u539f\u5219\uff0c2015 \u7248\u6807\u51c6\u53d6\u6d88\u4e86 2008 \u7248\u4e2d\u201c\u5ba1\u6838\u5458\u4e0d\u5e94\u5ba1\u6838\u81ea\u5df1\n\u7684\u5de5\u4f5c\u201d\u7684\u8981\u6c42\u3002\u8fd9\u4e00\u53d8\u5316\u5e94\u4e3b\u8981\u662f\u9488\u5bf9\u548c\u4fbf\u4e8e\u5c0f\u89c4\u6a21\u7ec4\u7ec7\u7684\u5b9e\u65bd\u3002\u53e6\u5916\uff0c\u7ec4\u7ec7\n\u5e94\u8be5\u5236\u5b9a\u5185\u90e8\u5ba1\u6838\u7684\u7ba1\u7406\u89c4\u8303\u6587\u4ef6\uff0c\u5305\u62ec\u5bf9\u5ba1\u6838\u5458\u80fd\u529b\u7684\u8981\u6c42\u548c\u9009\u62e9\uff0c\u4ee5\u53ca\u5ba1\u6838\n\u8fc7\u7a0b\u5b9e\u65bd\u5ba2\u89c2\u6027\u548c\u516c\u6b63\u6027\u7684\u4fdd\u8bc1\u63aa\u65bd\u7b49\u3002\u53ea\u6709\u8fd9\u6837\uff0c\u624d\u80fd\u4fdd\u8bc1\u5ba1\u6838\u7684\u5ba2\u89c2\u6027\u3001\u72ec\n\u7acb\u6027\u548c\u516c\u6b63\u6027\u3002"),(0,o.kt)("h4",{id:"4\u5ba1\u6838\u7684\u5b9e\u65bd\u4e0e\u62a5\u544a\u5ba1\u6838\u7ed3\u679c"},"(4\uff09\u5ba1\u6838\u7684\u5b9e\u65bd\u4e0e\u62a5\u544a\u5ba1\u6838\u7ed3\u679c"),(0,o.kt)("p",null,"\u7ec4\u7ec7\u5e94\u5bf9\u5185\u5ba1\u7684\u7ba1\u7406\u4eba\u5458\uff08\u5982\u7ba1\u7406\u8005\u4ee3\u8868\uff08\u5982\u4efb\u547d\uff09\u3001\u8d28\u91cf\u90e8\u95e8\u8d1f\u8d23\u4eba\u7b49\uff09\u3001\n\u5ba1\u6838\u7ec4\u957f\u3001\u5ba1\u6838\u5458\u7b49\u4e0e\u5ba1\u6838\u6709\u5173\u4eba\u5458\uff0c\u5728\u7b56\u5212\u3001\u5b9e\u65bd\u5ba1\u6838\u4ee5\u53ca\u62a5\u544a\u7ed3\u679c\u548c\u4fdd\u6301\u8bb0\n\u5f55\u7b49\u65b9\u9762\u7684\u804c\u8d23\u548c\u8981\u6c42\u505a\u51fa\u89c4\u5b9a\u3002"),(0,o.kt)("p",null,"\u5ba1\u6838\u7684\u5b9e\u65bd\u8fc7\u7a0b\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5ba1\u6838\u51c6\u5907\uff08\u5305\u62ec\u7ec4\u6210\u5ba1\u6838\u7ec4\u3001\u7f16\u5236\u5ba1\u6838\u8ba1\u5212\u3001\u62df\u5b9a\u68c0\u67e5\n\u8868\u7b49)\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u73b0\u573a\u5ba1\u6838\uff0c\u8bb0\u5f55\u5ba1\u6838\u7ed3\u679c\uff08\u5728\u68c0\u67e5\u8868\u4e2d\u8bb0\u5f55\u7684\u5ba1\u6838\u8bc1\u636e\u3001\u4e0d\u7b26\u5408\u62a5\u544a\u3001\u5185\u90e8\n\u5ba1\u6838\u62a5\u544a\u7b49)\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u7ea0\u6b63\u63aa\u65bd\u7684\u8ddf\u8e2a\u9a8c\u8bc1\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5e74\u5ea6\u5185\u5ba1\u60c5\u51b5\u6c47\u603b\u5206\u6790\u548c\u5ba1\u6838\u62a5\u544a\u7f16\u5199\u7b49\u3002")),(0,o.kt)("p",null,"\u5ba1\u6838\u5b9e\u65bd\u540e\uff0c\u5ba1\u6838\u7ec4\u5e94\u786e\u4fdd\u5411\u6709\u5173\u7ba1\u7406\u8005\u62a5\u544a\u5ba1\u6838\u7ed3\u679c\uff0c\u4e3b\u8981\u76ee\u7684\u662f\u8ba9\u66f4\u9ad8\n\u5c42\u7684\u4e3b\u7ba1\u9886\u5bfc\u4e86\u89e3\u5ba1\u6838\u5b9e\u65bd\u7684\u72b6\u51b5\u548c\u6548\u679c\uff0c\u66f4\u52a0\u6e05\u695a\u76ee\u524d\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u5b9e\u9645\u72b6\n\u51b5\u548c\u6548\u679c\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u6539\u8fdb\u548c\u63a8\u52a8\u7684\u91cd\u89c6\u7a0b\u5ea6\u3002"),(0,o.kt)("h4",{id:"5\u8fdb\u884c\u7ea0\u6b63\u548c\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd"},"(5\uff09\u8fdb\u884c\u7ea0\u6b63\u548c\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd"),(0,o.kt)("p",null,"\u8d1f\u8d23\u53d7\u5ba1\u533a\u57df\u6216\u90e8\u95e8\u7684\u7ba1\u7406\u8005\u5e94\u786e\u4fdd",(0,o.kt)("inlineCode",{parentName:"p"},"\u9488\u5bf9\u6240\u53d1\u73b0\u4e0d\u7b26\u5408\uff0c\u53ca\u65f6\u5f97\u5230\u7ea0\u6b63\u548c\u91c7\n\u53d6\u7ea0\u6b63\u63aa\u65bd"),"\uff0c\u4ee5\u907f\u514d\u518d\u51fa\u73b0\u540c\u7c7b\u7684\u4e0d\u7b26\u5408\u3002\u7ea0\u6b63\u63aa\u65bd\u4e2d\u4e0d\u5b9c\u89c4\u5b9a\u8f83\u7b3c\u7edf\u7684\uff0c\u5982\n\u201c\u52a0\u5f3a\u804c\u5de5\u6559\u80b2\u201d\u4e4b\u7c7b\u7684\u4e00\u822c\u5316\u3001\u7f3a\u4e4f\u9488\u5bf9\u6027\u7684\u63aa\u65bd\u3002"),(0,o.kt)("p",null,"\u7ec4\u7ec7\u7684\u5185\u90e8\u5ba1\u6838\u7ec4\u5e94",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bf9\u4e0d\u7b26\u5408\u9879\u7684\u7ea0\u6b63\u63aa\u65bd\u5b9e\u65bd\u60c5\u51b5\u548c\u6548\u679c\u8fdb\u884c\u8ddf\u8e2a\u9a8c\u8bc1"),"\uff0c\n\u4ee5\u786e\u4fdd\u6709\u6548\u5b9e\u65bd\u5e76\u80fd\u4fdd\u6301\u3002\u8003\u8651\n\u5230\u7ec4\u7ec7\u548c\u4eba\u5458\u7684\u79ef\u4e60\u96be\u4ee5\u5728\u77ed\u671f\u5185\u5f7b\u5e95\u6539\u6b63\uff0c\u5f80\u5f80\u8981\u8fdb\u884c\u4e0d\u6b62\u4e00\u6b21\u5730\u8fdb\u884c\u8ddf\u8e2a\u9a8c\n\u8bc1\u3002\u5e94\u8bb0\u5f55\u9a8c\u8bc1\u7ed3\u679c\uff0c\u5e76\u5411\u6709\u5173\u7ba1\u7406\u8005\u62a5\u544a\u7ed3\u679c\u3002"),(0,o.kt)("h4",{id:"6\u4fdd\u7559\u5f62\u6210\u6587\u4ef6\u7684\u4fe1\u606f"},"(6\uff09\u4fdd\u7559\u5f62\u6210\u6587\u4ef6\u7684\u4fe1\u606f"),(0,o.kt)("p",null,"\u7ec4\u7ec7\u5e94\u4fdd\u7559\u5f62\u6210\u6587\u4ef6\u7684\u4fe1\u606f\u4f5c\u4e3a\u5ba1\u6838\u65b9\u6848\u5b9e\u65bd\u548c\u5ba1\u6838\u7ed3\u679c\u7684\u8bc1\u636e\u3002\n\u5ba1\u6838\u65b9\u6848\u5b9e\u65bd\u7684\u8bc1\u636e\u4e00\u822c\u5305\u62ec\uff1a\u5ba1\u6838\u8ba1\u5212\u3001\u5ba1\u6838\u53d1\u73b0\u8bb0\u5f55\u3001\u4e0d\u7b26\u5408\u9879\u62a5\u544a\u53ca\n\u9a8c\u8bc1\u8bb0\u5f55\u7b49\uff1b\u5ba1\u6838\u7ed3\u679c\u7684\u8bc1\u636e\u4e00\u822c\u5305\u62ec\uff1a\u5185\u90e8\u5ba1\u6838\u62a5\u544a\u7b49\u3002"))}b.isMDXComponent=!0}}]);