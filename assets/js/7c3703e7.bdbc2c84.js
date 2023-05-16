"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[1042],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(r),f=l,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:l,i[1]=c;for(var o=2;o<a;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81824:(e,t,r)=>{r.d(t,{AA:()=>g,AB:()=>O,AC:()=>N,AD:()=>w,AE:()=>E,BU:()=>_,CA:()=>x,CB:()=>S,CC:()=>j,CD:()=>P,CE:()=>H,CF:()=>D,DA:()=>A,FA:()=>h,FC:()=>y,HA:()=>d,HB:()=>s,HC:()=>f,HD:()=>m,HE:()=>k,Ha:()=>l,Hb:()=>a,Hc:()=>i,Hd:()=>c,He:()=>u,Hf:()=>o,Hg:()=>p,JZ:()=>Z,O2:()=>B});var n=r(67294);const l=e=>{let{children:t}=e;return b(t,"#f00","#f8f739")},a=e=>{let{children:t}=e;return b(t,"#fff","#ee3311")},i=e=>{let{children:t}=e;return b(t,"#fff","#11cc55")},c=e=>{let{children:t}=e;return b(t,"#fff","#ff474c")},u=e=>{let{children:t}=e;return b(t,"#fff","#0000ff")},o=e=>{let{children:t}=e;return b(t,"#fff","#ee1166")},p=e=>{let{children:t}=e;return b(t,"#fff","#ff9f1a")},d=e=>{let{children:t}=e;return b(t,"#000","#f3ffbd")},s=e=>{let{children:t}=e;return b(t,"#000","#88ffcc")},f=e=>{let{children:t}=e;return b(t,"#000","#eddcc8")},m=e=>{let{children:t}=e;return b(t,"#000","#99eeff")},k=e=>{let{children:t}=e;return b(t,"#000","#f5e6de")},h=e=>{let{children:t}=e;return v(t,"large")},y=e=>{let{children:t}=e;return v(t,"xx-large")};function b(e,t,r){return n.createElement("span",{style:{backgroundColor:r,borderRadius:"5px",color:t,padding:"0.3rem"},class:"my_alert"},e)}function v(e,t){return n.createElement("span",{style:{fontSize:t}},e)}const g=e=>{let{children:t}=e;return C(t,"primary")},O=e=>{let{children:t}=e;return C(t,"secondary")},N=e=>{let{children:t}=e;return C(t,"success")},w=e=>{let{children:t}=e;return C(t,"info")},E=e=>{let{children:t}=e;return C(t,"warning")};function C(e,t){return n.createElement("div",{class:"alert alert--"+t,style:{padding:"10px",margin:"10px 0"},role:"alert"},e)}const x=e=>{let{children:t}=e;return T(t,"primary","")},S=e=>{let{children:t}=e;return T(t,"secondary","")},j=e=>{let{children:t}=e;return T(t,"success","")},P=e=>{let{children:t}=e;return T(t,"info","")},H=e=>{let{children:t}=e;return T(t,"warning","")},D=e=>{let{children:t}=e;return T(t,"danger","")};function T(e,t,r){return n.createElement("button",{class:"button "+r+"  button--"+t},e)}const A=e=>{let{children:t}=e;return I(t,"lw")};function I(e,t){return n.createElement("div",{class:"item shadow--"+t},e)}const _=e=>{let{children:t}=e;return M(t,"var(--ifm-color-red-primary)")},Z=e=>{let{children:t}=e;return M(t,"var(--ifm-color-blue-primary)")};function M(e,t){return n.createElement("font",{style:{color:t}},e)}const B=e=>{let{children:t}=e;return function(e,t){return n.createElement("div",{class:"my_card_"+t},e)}(t,"white")}},33964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),l=(r(67294),r(3905)),a=r(81824);const i={id:"4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",sidebar_position:5,sidebar_label:"4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",description:"\u5728\u8fd9\u91cc\uff0c\u5bf9\u7ec4\u7ec7\u7684\u73af\u5883\u56e0\u7d20\u5e94\u7740\u773c\u4e8e\u5b8f\u89c2\u7684\u8003\u8651\uff0c\u800c\u4e0d\u662f\u6307\u4f17\u6240\u719f\u77e5\u7684\u5177\u4f53\u7684\u201c\u5de5\u4f5c\u73af\u5883\u201d\u3002\u8003\u8651\u8fd9\u4e9b\u95ee\u9898\u662f\u4e3a\u786e\u5b9a\u9002\u5408\u7ec4\u7ec7\u7684\u6218\u7565\uff0c\u4ea7\u54c1\u548c\u670d\u52a1\u65b9\u5411\u7684\u5b9a\u4f4d\uff0c\u7ba1\u7406\u4f53\u7cfb\u7684\u8303\u56f4\u7b49\u670d\u52a1"},c=void 0,u={unversionedId:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",id:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",title:"4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",description:"\u5728\u8fd9\u91cc\uff0c\u5bf9\u7ec4\u7ec7\u7684\u73af\u5883\u56e0\u7d20\u5e94\u7740\u773c\u4e8e\u5b8f\u89c2\u7684\u8003\u8651\uff0c\u800c\u4e0d\u662f\u6307\u4f17\u6240\u719f\u77e5\u7684\u5177\u4f53\u7684\u201c\u5de5\u4f5c\u73af\u5883\u201d\u3002\u8003\u8651\u8fd9\u4e9b\u95ee\u9898\u662f\u4e3a\u786e\u5b9a\u9002\u5408\u7ec4\u7ec7\u7684\u6218\u7565\uff0c\u4ea7\u54c1\u548c\u670d\u52a1\u65b9\u5411\u7684\u5b9a\u4f4d\uff0c\u7ba1\u7406\u4f53\u7cfb\u7684\u8303\u56f4\u7b49\u670d\u52a1",source:"@site/docs/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.1.mdx",sourceDirName:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883",slug:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",sidebar_position:5,sidebar_label:"4.1 \u7406\u89e3\u7ec4\u7ec7\u53ca\u5176\u73af\u5883",description:"\u5728\u8fd9\u91cc\uff0c\u5bf9\u7ec4\u7ec7\u7684\u73af\u5883\u56e0\u7d20\u5e94\u7740\u773c\u4e8e\u5b8f\u89c2\u7684\u8003\u8651\uff0c\u800c\u4e0d\u662f\u6307\u4f17\u6240\u719f\u77e5\u7684\u5177\u4f53\u7684\u201c\u5de5\u4f5c\u73af\u5883\u201d\u3002\u8003\u8651\u8fd9\u4e9b\u95ee\u9898\u662f\u4e3a\u786e\u5b9a\u9002\u5408\u7ec4\u7ec7\u7684\u6218\u7565\uff0c\u4ea7\u54c1\u548c\u670d\u52a1\u65b9\u5411\u7684\u5b9a\u4f4d\uff0c\u7ba1\u7406\u4f53\u7cfb\u7684\u8303\u56f4\u7b49\u670d\u52a1"},sidebar:"mySidebar",previous:{title:"4\u3001\u7ec4\u7ec7\u73af\u5883",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/"},next:{title:"4.2 \u7406\u89e3\u76f8\u5173\u65b9\u7684\u9700\u6c42\u548c\u671f\u671b",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/4\u3001\u7ec4\u7ec7\u73af\u5883/4.2 \u7406\u89e3\u76f8\u5173\u65b9\u7684\u9700\u6c42\u548c\u671f\u671b"}},o={},p=[{value:"\u5916\u90e8\u73af\u5883\u53ca\u5185\u90e8\u73af\u5883\u7684\u7406\u89e3",id:"\u5916\u90e8\u73af\u5883\u53ca\u5185\u90e8\u73af\u5883\u7684\u7406\u89e3",level:3},{value:"\u7ec4\u7ec7\u7684\u5916\u90e8\u73af\u5883",id:"\u7ec4\u7ec7\u7684\u5916\u90e8\u73af\u5883",level:3},{value:"\u7ec4\u7ec7\u7684\u5185\u90e8\u73af\u5883",id:"\u7ec4\u7ec7\u7684\u5185\u90e8\u73af\u5883",level:3},{value:"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684",id:"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684",level:3}],d={toc:p},s="wrapper";function f(e){let{components:t,...i}=e;return(0,l.kt)(s,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{title:"\u6807\u51c6\u539f\u6587",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7ec4\u7ec7\u5e94\u786e\u5b9a\u4e0e\u5176\u5b97\u65e8\u548c\u6218\u7565\u65b9\u5411\u76f8\u5173\u5e76\u5f71\u54cd\u5176\u5b9e\u73b0\u8d28\u6700\u7ba1\u7406\u4f53\u7cfb\u9884\u671f\u7ed3\u679c\u7684\u80fd\u529b\u7684\u5404\n\u79cd\u5916\u90e8\u548c\u5185\u90e8\u56e0\u7d20\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u7ec4\u7ec7\u5e94\u5bf9\u8fd9\u4e9b\u5185\u90e8\u548c\u5916\u90e8\u56e0\u7d20\u7684\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u76d1\u89c6\u548c\u8bc4\u5ba1\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6ce8 1:\u8fd9\u4e9b\u56e0\u7d20\u53ef\u80fd\u5305\u62ec\u9700\u8981\u8003\u8651\u7684\u6b63\u9762\u548c\u8d1f\u9762\u8981\u7d20\u6216\u6761\u4ef6\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6ce8 2\uff1a\u8003\u8651\u6765\u81ea\u4e8e\u56fd\u9645\u3001\u56fd\u5185\u3001\u5730\u533a\u6216\u5f53\u5730\u7684\u5404\u79cd\u6cd5\u5f8b\u6cd5\u89c4\u3001\u6280\u672f\u3001\u7ade\u4e89\u3001\u5e02\u573a\u3001\u6587\u5316\u3001\u793e\u4f1a\n\u548c\u7ecf\u6d4e\u73af\u5883\u7684\u56e0\u7d20\uff0c\u6709\u52a9\u4e8e\u7406\u89e3\u5916\u90e8\u73af\u5883\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u6ce8 3\uff1a\u8003\u8651\u4e0e\u7ec4\u7ec7\u7684\u4ef7\u503c\u89c2\u3001\u6587\u5316\u3001\u77e5\u8bc6\u548c\u7ee9\u6548\u7b49\u6709\u5173\u7684\u56e0\u7d20\uff0c\u6709\u52a9\u4e8e\u7406\u89e3\u5185\u90e8\u73af\u5883\u3002")),(0,l.kt)("p",null,"\u7ec4\u7ec7\u5728\u5efa\u7acb\u548c\u5b9e\u65bd\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u65f6\u5e94\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\uff09\u9996\u5148\uff0c\u8981\u5bf9\u7ec4\u7ec7\u6240\u5904\u7684\u5185\u90e8\u548c\u5916\u90e8\u73af\u5883\u8fdb\u884c\u5145\u5206\u5206\u6790\uff0c\u5e76\u8bc6\u522b\u548c\u786e\u5b9a\u8fd9\u4e9b\n\u73af\u5883\u56e0\u7d20\u54ea\u4e9b\u4e0e\u7ec4\u7ec7\u7684\u5b97\u65e8\u548c\u6218\u7565\u65b9\u5411\u6709\u5173\u7cfb\uff0c\u800c\u4e14\u5173\u7cfb\u7a0b\u5ea6\u5982\u4f55\uff1f"),(0,l.kt)("li",{parentName:"ul"},"2\uff09\u5176\u6b21\uff0c\u8fd9\u4e9b\u73af\u5883\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u9884\u671f\u7ed3\u679c\u80fd\u529b\u6765\u8bf4\u90fd\u6709\u54ea\u4e9b\u5f71\u54cd\u56e0\u7d20\uff0c\u7ec4\n\u7ec7\u8fd8\u8981\u5bf9\u8fd9\u4e9b\u5185\u3001\u5916\u73af\u5883\u5f71\u54cd\u56e0\u7d20\u7b49\u4fe1\u606f\u8981\u8fdb\u884c\u76d1\u89c6\u548c\u8bc4\u5ba1\u3002\u76d1\u89c6\u548c\u8bc4\u5ba1\u7684\u65b9\u6cd5\n\u548c\u9891\u6b21\u8981\u6839\u636e\u7ec4\u7ec7\u7684\u5b9e\u9645\u60c5\u51b5\u6765\u5236\u5b9a\uff0c\u4f46\u539f\u5219\u662f\u9002\u5b9c\u7684\u548c\u6709\u6548\u7684\u3002\u5982\uff1a\u67d0\u4e9b\u5927\u4f01\n\u4e1a\u8bbe\u7acb\u6218\u7565\u53d1\u5c55\u90e8\u3001\u4fe1\u606f\u5316\u90e8\u3001\u653f\u7b56\u7814\u7a76\u5ba4\u7b49\uff0c\u90fd\u662f\u6709\u8fd9\u65b9\u9762\u76d1\u89c6\u548c\u8bc4\u5ba1\u804c\u80fd\u7684\n\u8003\u8651\u7684\u3002")),(0,l.kt)("h3",{id:"\u5916\u90e8\u73af\u5883\u53ca\u5185\u90e8\u73af\u5883\u7684\u7406\u89e3"},"\u5916\u90e8\u73af\u5883\u53ca\u5185\u90e8\u73af\u5883\u7684\u7406\u89e3"),(0,l.kt)("p",null,"ISO 9001:2015 \u6807\u51c6 4.1 \u8282\u4e2d\u6709\u4e09\u4e2a\u6ce8\u89e3\u3002\u5206\u522b\u8bf4\u660e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\uff09\u73af\u5883\u5305\u62ec\u53ef\u80fd\u662f\u6b63\u9762\u6216\u8d1f\u9762\u7684\u56e0\u7d20\u6216\u8981\u8003\u8651\u7684\u72b6\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},"2\uff09\u5916\u90e8\u73af\u5883\uff0c\u53ef\u4ee5\u8003\u8651\u6cd5\u89c4\u3001\u6280\u672f\u3001\u7ade\u4e89\u3001\u5e02\u573a\u3001\u6587\u5316\u3001\u793e\u4f1a\u548c\u7ecf\u6d4e\u73af\u5883\u65b9\n\u9762\u7684\u95ee\u9898\uff0c\u65e0\u8bba\u662f\u56fd\u9645\u3001\u56fd\u5bb6\u3001\u5730\u533a\u6216\u5f53\u5730\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"3\uff09\u5185\u90e8\u73af\u5883\uff0c\u53ef\u4ee5\u8003\u8651\u4e0e\u7ec4\u7ec7\u4ef7\u503c\u89c2\u3001\u6587\u5316\u77e5\u8bc6\u548c\u7ee9\u6548\u6709\u5173\u7684\u95ee\u9898\u3002")),(0,l.kt)("p",null,"\u7ec4\u7ec7\u73af\u5883\u662f\u6307",(0,l.kt)(a.He,{mdxType:"He"},"\u5bf9\u7ec4\u7ec7\u5efa\u7acb\u548c\u5b9e\u73b0\u76ee\u6807\u7684\u65b9\u6cd5\u6709\u5f71\u54cd\u7684\u5185\u90e8\u548c\u5916\u90e8\u56e0\u7d20\u7684\u7ec4\u5408"),"\u3002\u7ec4\u7ec7\n\u73af\u5883\u53ef\u4ee5\u7406\u89e3\u4e3a\u7ec4\u7ec7\u6240\u5904\u7684\u4e00\u7ec4\u53ef\u80fd\u5f71\u54cd\u5176\u751f\u5b58\u548c\u53d1\u5c55\u7684\u5ba2\u89c2\u6761\u4ef6\uff0c\u8fd9\u7ec4\u5ba2\u89c2\u6761\u4ef6\u5305\u62ec\u5bf9\u7ec4\n\u7ec7\u5b9e\u73b0\u9884\u671f\u7ed3\u679c\u7684\u80fd\u529b\u53ef\u80fd\u4ea7\u751f\u6709\u5229\u548c\u4e0d\u5229\u5f71\u54cd\u7684\u5916\u90e8\u548c\u5185\u90e8\u73af\u5883\u4e2d\u7684\u76f8\u5173\u56e0\u7d20\u7684\u7ec4\u5408."),(0,l.kt)("p",null,"\u7406\u89e3\u7ec4\u7ec7\u73af\u5883\u662f\u4e00\u4e2a\u8fc7\u7a0b\u3002\u7ec4\u7ec7\u901a\u5e38\u4f1a\u5efa\u7acb\u548c\u4fdd\u6301\u7406\u89e3\u7ec4\u7ec7\u73af\u5883\u7684\u8fc7\u7a0b\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(1)\u754c\u5b9a\u5185\u3001\u5916\u90e8\u56e0\u7d20\u7684\u7c7b\u522b\u3002\u4e0d\u540c\u7ec4\u7ec7\u5bf9\u5916\u90e8\u73af\u5883\u4e2d\u7684\u76f8\u5173\u5f71\u54cd\u5176\u80fd\u529b\u7684\u56e0\u67f0\u7684\u654f\u611f\n\u5ea6\u662f\u4e0d\u5b8c\u5168\u4e00\u6837\u7684\uff0c\u4e3a\u4fbf\u4e8e\u540e\u671f\u7684\u5f52\u53e3\u7ba1\u7406\uff0c\u53ef\u5bf9\u5916\u90e8\u73af\u5883\u4e2d\u7684\u53ef\u80fd\u7684\u5f71\u54cd\u5176\u80fd\u529b\u7684\u56e0\u7d20\u8fdb\u884c\n\u9002\u5f53\u7684\u5206\u7c7b\u3002"),(0,l.kt)("li",{parentName:"ul"},"(2\uff09 \u786e\u5b9a\u4fe1\u606f\u6e90\u3002\u4fe1\u606f\u6e90\u4e0d\u540c\uff0c\u6240\u83b7\u53d6\u7684\u5916\u90e8\u73af\u5883\u4e2d\u7684\u5f71\u54cd\u5176\u80fd\u529b\u7684\u56e0\u7d20\u7684\u4fe1\u606f\u8d28\u91cf\u4e5f\n\u4e0d\u5c3d\u76f8\u540c.\u56e0\u6b64,\u9700\u8bc6\u522b\u8f83\u4e3a\u6743\u5a01\u6216\u8f83\u4e3a\u53ef\u4fe1\u7684\u4fe1\u606f\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"(3)\u83b7\u53d6\u4fe1\u606f\u3002\u7ec4\u7ec7\u9700\u5efa\u7acb\u83b7\u53d6\u6743\u5a01\u53ef\u4fe1\u4fe1\u606f\u7684\u6b63\u786e\u6e20\u9053\uff0c\u5e76\u4e3b\u52a8\u83b7\u53d6\u76f8\u5173\u5f71\u54cd\u5176\u80fd\u529b\n\u7684\u56e0\u7d20\u7684\u52a8\u6001\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"(4\uff09 \u4fe1\u606f\u5904\u7406\u3002\u9700\u5bf9\u6240\u83b7\u53d6\u7684\u4fe1\u606f\u8fdb\u884c\u5206\u7c7b\u548c\u5904\u7406\uff0c\u907f\u514d\u9057\u6f0f\u5173\u952e\u548c\u91cd\u8981\u7684\u4fe1\u606f\u3002"),(0,l.kt)("li",{parentName:"ul"},"(5)\u5bf9\u6240\u83b7\u5f97\u7684\u5185\u3001\u5916\u90e8\u4fe1\u606f\u8fdb\u884c\u8bc4\u5ba1\uff0c\u68b3\u7406\u51fa\u4e0e\u7ec4\u7ec7\u5b97\u65e8\u548c\u6218\u7565\u65b9\u5411\u6709\u5173\uff0c\u5e76\u5f71\u54cd\u5b9e\u73b0\n\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u9884\u671f\u7ed3\u679c\u7684\u80fd\u529b\u7684\u5185\u3001\u5916\u90e8\u56e0\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"(6)\u4f9d\u636e\u51c6\u5219\u5bf9\u6240\u8bc6\u522b\u7684\u5185\u3001\u5916\u90e8\u56e0\u7d20\u8fdb\u884c\u8bc4\u5ba1\uff0c\u786e\u5b9a\u5173\u952e\u56e0\u7d20\u548c\u5176\u4ed6\u9700\u8981\u5e94\u5bf9\u7684\u95ee\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},"(7\uff09\u5bf9\u5185\u3001\u5916\u90e8\u73af\u5883\u8fdb\u884c\u6301\u7eed\u7684\u76d1\u89c6\u548c\u8bc4\u5ba1\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:r(38173).Z,width:"764",height:"722"}),"\n",(0,l.kt)("img",{src:r(43567).Z,width:"697",height:"171"})),(0,l.kt)("h3",{id:"\u7ec4\u7ec7\u7684\u5916\u90e8\u73af\u5883"},"\u7ec4\u7ec7\u7684\u5916\u90e8\u73af\u5883"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7ec4\u7ec7\u9700\u6ee1\u8db3\u6216\u9002\u5e94\u5916\u90e8\u73af\u5883\u4e2d\u4e0e\u5176\u751f\u5b58\u548c\u53d1\u5c55\u7684\u80fd\u529b\u6709\u5173\u7684\u5404\u79cd\u56e0\u7d20\uff0c\n\u8bf8\u5982\u56fd\u9645\u3001\u56fd\u5bb6\u3001\u5730\u533a\u6216\u5f53\u5730\u7684\u6cd5\u5f8b\u6cd5\u89c4\u3001\u6280\u672f\u3001\u7ade\u4e89\u3001\u5e02\u573a\u3001\u6587\u5316\u3001\u793e\u4f1a\u548c\u7ecf\u6d4e\u73af\u5883\u7684\u56e0\u7d20\u7b49\uff0c\n\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(1\uff09\u7ecf\u6d4e\u56e0\u7d20\uff0c\u8bf8\u5982\u8d27\u5e01\u6c47\u7387\u3001\u7ecf\u6d4e\u5f62\u52bf\u3001\u901a\u8d27\u81a8\u80c0\u9884\u6d4b\u3001\u4fe1\u8d27\u53ef\u83b7\u5f97\u6027\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(2\uff09\u793e\u4f1a\u56e0\u7d20\uff0c\u8bf8\u5982\u5730\u65b9\u5931\u4e1a\u7387\u3001\u5b89\u5168\u611f\u3001\u6559\u80b2\u6c34\u5e73\u3001\u6cd5\u5b9a\u8282\u5047\u65e5\u548c\u5de5\u4f5c\u65f6\u95f4\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(3\uff09\u653f\u6cbb\u56e0\u7d20\uff0c\u8bf8\u5982\u653f\u6cbb\u7a33\u5b9a\u6027\u3001\u516c\u5171\u6295\u4eba\u3001\u5730\u65b9\u57fa\u7840\u8bbe\u65bd\u6c34\u5e73\u3001\u56fd\u9645\u8d38\u6613\u534f\u5b9a\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(4)\u6280\u672f\u56e0\u7d20\uff0c\u8bf8\u5982\u65b0\u7684\u884c\u4e1a\u6280\u672f\u3001\u6750\u6599\u548c\u8bbe\u5907\u3001\u4e13\u5229\u6709\u6548\u671f\u3001\u804c\u4e1a\u9053\u5fb7\u89c4\u8303\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(5)\u7ade\u4e89\u56e0\u7d20\uff0c\u5305\u62ec\u7ec4\u7ec7\u7684\u5e02\u573a\u4efd\u989d\u3001\u7c7b\u4f3c\u6216\u8005\u66ff\u4ee3\u4ea7\u54c1\u6216\u670d\u52a1\u3001\u5e02\u573a\u9886\u5bfc\u8005\u8d8b\u52bf\u3001\u987e\u5ba2\u589e\n\u957f\u8d85\u52bf\u3001\u5e02\u573a\u7a33\u5b9a\u6027\u3001\u4f9b\u5e94\u94fe\u5173\u7cfb\uff1a"),(0,l.kt)("li",{parentName:"ul"},"(6)\u5f71\u54cd\u5de5\u4f5c\u73af\u5883\u7684\u6cd5\u89c4\u56e0\u7d20,\u8bf8\u5982\u5de5\u4f1a\u89c4\u7ae0,\u6cd5\u5f8b\u6cd5\u89c4\u8981\u6c42\uff0c\u5305\u62ec\u73af\u5883\u6cd5\u89c4\u548c\u89c4\u8303\u3002")),(0,l.kt)("h3",{id:"\u7ec4\u7ec7\u7684\u5185\u90e8\u73af\u5883"},"\u7ec4\u7ec7\u7684\u5185\u90e8\u73af\u5883"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u5185\u90e8\u73af\u5883\u5bf9\u7ec4\u7ec7\u7684\u76ee\u6807\u548c\u53d1\u5c55\uff0c\u4ee5\u53ca\u5b9e\u73b0\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u9884\u671f\u7ed3\u679c\u7684\u80fd\u529b\u4ea6\u5177\u6709\u8f83\n\u5927\u5f71\u54cd\uff0c\u8bf8\u5982\u4ef7\u503c\u89c2\u3001\u6587\u5316\u3001\u77e5\u8bc6\u548c\u7ee9\u6548\u7b49\u6709\u5173\u7684\u7b49\u56e0\u7d20\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(1\uff09\u7ec4\u7ec7\u6574\u4e2a\u7ee9\u6548\uff0c\u5305\u62ec\u8d22\u52a1\u7ee9\u6548\uff1a"),(0,l.kt)("li",{parentName:"ul"},"(2\uff09\u8d44\u6e90\u56e0\u7d20\uff0c\u5305\u62ec\u57fa\u7840\u8bbe\u65bd\uff0c\u8fc7\u7a0b\u8fd0\u4f5c\u73af\u5883\uff0c\u7ec4\u7ec7\u7684\u77e5\u8bc6\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(3\uff09\u4eba\u4e3a\u56e0\u7d20\uff0c\u8bf8\u5982\u4eba\u5458\u80fd\u529b,\u7ec4\u7ec7\u7684\u6587\u5316\u4e0e\u4ef7\u503c\u89c2\uff0c\u4e0e\u5de5\u4f1a\u7684\u5173\u7cfb\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(4\uff09\u8fd0\u884c\u56e0\u7d20\uff0c\u8bf8\u5982\u8fc7\u7a0b\uff0c\u751f\u4ea7\u6216\u670d\u52a1\u63d0\u4f9b\u80fd\u529b\uff0c\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7ee9\u6548\uff0c\u987e\u5ba2\u8bc4\u4ef7\uff1b"),(0,l.kt)("li",{parentName:"ul"},"(5)\u7ec4\u7ec7\u6cbb\u7406\u56e0\u7d20\uff0c\u8bf8\u5982\u505a\u51fa\u51b3\u7b56\u7684\u89c4\u7ae0\u5236\u5ea6(\u89c4\u5219\uff09\u548c\u8fc7\u7a0b(\u6d41\u7a0b\uff09,\u7ec4\u7ec7\u67b6\u6784\u6216\u7ed3\u6784\u3002")),(0,l.kt)("h3",{id:"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684"},"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684\uff0c\u7ec4\u7ec7\u5fc5\u987b\u65f6\u523b\u5173\u6ce8\u90a3\u4e9b\u5f71\u54cd\u5176\u751f\u5b58\u548c\u53d1\u5c55\uff0c\u5e76\u5f71\u54cd\u5176\u5b9e\u73b0\n\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u9884\u671f\u7ed3\u679c\u7684\u5185\u3001\u5916\u90e8\u56e0\u7d20\u7684\u4fe1\u606f\u53d8\u5316\uff0c\u4ee5\u53ca\u4fe1\u606f\u53d8\u5316\u8d8b\u52bf\u3002\u7ec4\u7ec7\u53ef\u9009\u7528\u4f18\u52bf\u3001\u52a3\n\u52bf\u3001\u673a\u4f1a\u6216\u5a01\u80c1(SWOT)\u5206\u6790,\u6216\u8005\u9009\u7528\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u793e\u4f1a\u3001\u6280\u672f\u3001\u6cd5\u5f8b\u3001\u73af\u5883(PESTLE\uff09\u5206\u6790\u8fdb\u884c\n\u5176\u6218\u7565\u5c42\u9762\u7684\u73af\u5883\u5f71\u54cd\u5206\u6790\u3002\u7ec4\u7ec7\u4e5f\u53ef\u6839\u636e\u5176\u89c4\u6a21\u53ca\u5176\u8fd0\u884c\u7684\u590d\u6742\u7a0b\u5ea6\uff0c\u9009\u7528\u5934\u8111\u98ce\u66b4\u6cd5;\u6216\n\u63d0\u51fa\u201c\u5982\u679c\u2026\u22ef\u2026\u4f1a \u22ef\u22ef\u2026\u201d\u7684\u95ee\u9898\u7b49\u8f83\u4e3a\u7b80\u5355\u7684\u65b9\u6cd5\u8fdb\u884c\u73af\u5883\u5206\u6790\u3002"))}f.isMDXComponent=!0},38173:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4.1-1\u7ec4\u7ec7\u7684\u5185\u5916\u90e8\u73af\u5883-a9ef4137099d3c313518b2d2cfed8740.png"},43567:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4.1-2\u7406\u89e3\u7ec4\u7ec7\u73af\u5883-089acc39380d970b977379987c9a5bc8.png"}}]);