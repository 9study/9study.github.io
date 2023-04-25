"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[6871],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),s=l,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},81824:(e,n,t)=>{t.d(n,{AA:()=>v,AB:()=>N,AC:()=>g,AD:()=>E,AE:()=>w,BU:()=>B,CA:()=>C,CB:()=>x,CC:()=>T,CD:()=>j,CE:()=>P,CF:()=>A,DA:()=>H,FA:()=>y,FC:()=>h,HA:()=>d,HB:()=>f,HC:()=>s,HD:()=>m,HE:()=>k,Ha:()=>l,Hb:()=>a,Hc:()=>i,Hd:()=>o,He:()=>c,Hf:()=>p,Hg:()=>u,JZ:()=>_,O2:()=>M});var r=t(67294);const l=e=>{let{children:n}=e;return b(n,"#f00","#f8f739")},a=e=>{let{children:n}=e;return b(n,"#fff","#ee3311")},i=e=>{let{children:n}=e;return b(n,"#fff","#11cc55")},o=e=>{let{children:n}=e;return b(n,"#fff","#ff474c")},c=e=>{let{children:n}=e;return b(n,"#fff","#0000ff")},p=e=>{let{children:n}=e;return b(n,"#fff","#ee1166")},u=e=>{let{children:n}=e;return b(n,"#fff","#ff9f1a")},d=e=>{let{children:n}=e;return b(n,"#000","#f3ffbd")},f=e=>{let{children:n}=e;return b(n,"#000","#88ffcc")},s=e=>{let{children:n}=e;return b(n,"#000","#eddcc8")},m=e=>{let{children:n}=e;return b(n,"#000","#99eeff")},k=e=>{let{children:n}=e;return b(n,"#000","#f5e6de")},y=e=>{let{children:n}=e;return O(n,"large")},h=e=>{let{children:n}=e;return O(n,"xx-large")};function b(e,n,t){return r.createElement("span",{style:{backgroundColor:t,borderRadius:"5px",color:n,padding:"0.3rem"},class:"my_alert"},e)}function O(e,n){return r.createElement("span",{style:{fontSize:n}},e)}const v=e=>{let{children:n}=e;return S(n,"primary")},N=e=>{let{children:n}=e;return S(n,"secondary")},g=e=>{let{children:n}=e;return S(n,"success")},E=e=>{let{children:n}=e;return S(n,"info")},w=e=>{let{children:n}=e;return S(n,"warning")};function S(e,n){return r.createElement("div",{class:"alert alert--"+n,style:{padding:"10px",margin:"10px 0"},role:"alert"},e)}const C=e=>{let{children:n}=e;return D(n,"primary","")},x=e=>{let{children:n}=e;return D(n,"secondary","")},T=e=>{let{children:n}=e;return D(n,"success","")},j=e=>{let{children:n}=e;return D(n,"info","")},P=e=>{let{children:n}=e;return D(n,"warning","")},A=e=>{let{children:n}=e;return D(n,"danger","")};function D(e,n,t){return r.createElement("button",{class:"button "+t+"  button--"+n},e)}const H=e=>{let{children:n}=e;return I(n,"lw")};function I(e,n){return r.createElement("div",{class:"item shadow--"+n},e)}const B=e=>{let{children:n}=e;return G(n,"var(--ifm-color-red-primary)")},_=e=>{let{children:n}=e;return G(n,"var(--ifm-color-blue-primary)")};function G(e,n){return r.createElement("font",{style:{color:n}},e)}const M=e=>{let{children:n}=e;return function(e,n){return r.createElement("div",{class:"my_card_"+n},e)}(n,"white")}},376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),l=(t(67294),t(3905)),a=t(81824);const i={id:"5\u3001\u6539\u8fdb",sidebar_position:5,sidebar_label:"5\u3001\u6539\u8fdb",description:"\u6210\u529f\u7684\u7ec4\u7ec7\u6301\u7eed\u5173\u6ce8\u6539\u8fdb\u3002"},o=void 0,c={unversionedId:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/5\u3001\u6539\u8fdb",id:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/5\u3001\u6539\u8fdb",title:"5\u3001\u6539\u8fdb",description:"\u6210\u529f\u7684\u7ec4\u7ec7\u6301\u7eed\u5173\u6ce8\u6539\u8fdb\u3002",source:"@site/docs/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/5.mdx",sourceDirName:"\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219",slug:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/5\u3001\u6539\u8fdb",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/5\u3001\u6539\u8fdb",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"5\u3001\u6539\u8fdb",sidebar_position:5,sidebar_label:"5\u3001\u6539\u8fdb",description:"\u6210\u529f\u7684\u7ec4\u7ec7\u6301\u7eed\u5173\u6ce8\u6539\u8fdb\u3002"},sidebar:"mySidebar",previous:{title:"4\u3001\u8fc7\u7a0b\u65b9\u6cd5",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/4\u3001\u8fc7\u7a0b\u65b9\u6cd5"},next:{title:"6\u3001\u5faa\u8bc1\u51b3\u7b56",permalink:"/\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u57fa\u7840/ISO9001/0\u3001\u8d28\u91cf\u7ba1\u7406\u539f\u5219/6\u3001\u5faa\u8bc1\u51b3\u7b56"}},p={},u=[{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:3},{value:"\u4e8c\u3001\u4f9d\u636e",id:"\u4e8c\u4f9d\u636e",level:3},{value:"\u4e09\u3001\u4e3b\u8981\u6536\u76ca",id:"\u4e09\u4e3b\u8981\u6536\u76ca",level:3},{value:"\u56db\u3001\u53ef\u5f00\u5c55\u7684\u6d3b\u52a8",id:"\u56db\u53ef\u5f00\u5c55\u7684\u6d3b\u52a8",level:3}],d={toc:u},f="wrapper";function s(e){let{components:n,...t}=e;return(0,l.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(a.AE,{mdxType:"AE"},"\u6210\u529f\u7684\u7ec4\u7ec7\u6301\u7eed\u5173\u6ce8\u6539\u8fdb\u3002"),(0,l.kt)("h3",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,l.kt)("p",null,"\u6539\u8fdb\u662f\u63d0\u9ad8\u7ee9\u6548\u7684\u6d3b\u52a8\uff0c\u800c\u6301\u7eed\u6539\u8fdb\u662f\u63d0\u9ad8\u7ee9\u6548\u7684\u5faa\u73af\u6d3b\u52a8\u3002\u6301\u7eed\u6539\u8fdb\u5176\u6574\u4f53\u7ee9\u6548\u5e94\u5f53\n\u662f\u6bcf\u4e00\u4e2a\u7ec4\u7ec7\u7684\u6c38\u6052\u4e3b\u9898\u3002\u968f\u7740\u793e\u4f1a\u53d1\u5c55\u548c\u79d1\u6280\u8fdb\u6b65\uff0c\u5e02\u573a\u548c\u987e\u5ba2\u5bf9\u7ec4\u7ec7\u548c\u7ec4\u7ec7\u6240\u63d0\u4f9b\u7684\u4ea7\n\u54c1\u548c\u670d\u52a1\u7684\u9700\u6c42\u548c\u671f\u671b\u8d8a\u6765\u8d8a\u82db\u523b\uff0c\u4e2a\u6027\u5316\u9700\u6c42\u4e5f\u8d8a\u6765\u8d8a\u5f3a\u70c8\uff0c\u5982\u679c\u7ec4\u7ec7\u505c\u6ede\u4e0d\u524d\uff0c\u52bf\u5fc5\u88ab\u7ade\n\u4e89\u73af\u5883\u6240\u6dd8\u6c70\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64,\u7ec4\u7ec7\u5fc5\u987b\u4e13\u6ce8\u4e8e\u6539\u8fdb\uff0c\u4e13\u6ce8\u4e8e\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u521b\u65b0\uff0c\u7ba1\u7406\u548c\u5236\u5ea6\u7684\u521b\u65b0\u3001\u8425\n\u9500\u6a21\u5f0f\u7684\u521b\u65b0\u7b49\uff0c\u624d\u6709\u53ef\u80fd\u5b58\u6d3b\u4e0b\u6765\u548c\u6301\u7eed\u53d1\u5c55\u3002\u7ec4\u7ec7\u5e94\u5efa\u7acb\u4e00\u79cd\u9002\u5e94\u673a\u5236\uff0c\u4f7f\u7ec4\u7ec7\u80fd\u9002\u5e94\u73af\n\u5883\u7684\u8fd9\u79cd\u53d8\u5316\u8981\u6c42\uff0c\u589e\u5f3a\u9002\u5e94\u5c31\u662f\u6539\u8fdb\u3002"),(0,l.kt)("p",null,"\u5728\u8bf8\u591a\u7ec4\u7ec7\u91cc\uff0c\u51e0\u4e4e\u6bcf\u4e00\u4f4d\u7ba1\u7406\u8005\u90fd\u5728\u601d\u8003\u7740\u5982\u4f55\u6539\u8fdb\u5176\u6574\u4f53\u7ba1\u7406\u6c34\u5e73\u548c\u7ecf\u8425\u4e1a\u7ee9\uff0c\u4f46\u666e\n\u904d\u7f3a\u4e4f\u5177\u4f53\u7684\u3001\u9002\u5b9c\u7684\u65b9\u6cd5\uff0c\u4e0d\u77e5\u9053\u4ece\u4f55\u5904\u7740\u624b\u5b9e\u65bd\u6539\u8fdb\uff0c\u4f3c\u4e4e\u505a\u7684\u90fd\u8fd8\u53ef\u4ee5\uff0c\u4f3c\u4e4e\u53c8\u89c9\u5f97\u5b58\u5728\n\u67d0\u79cd\u9690\u60a3\uff0c\u6216\u7ba1\u7406\u65b9\u6cd5\u6ede\u540e,\u627e\u4e0d\u5230\u5408\u9002\u7684\u6539\u8fdb\u5207\u4eba\u70b9\u3002"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u6539\u8fdb\u7684\u5bf9\u8c61\u53ef\u4ee5\u662f\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u3001\u8fc7\u7a0b\u3001\u4ea7\u54c1\u6216\u670d\u52a1\u7b49\u3002\u6539\u8fdb\u53ef\u4f5c\u4e3a\u8fc7\u7a0b\u8fdb\u884c\u7ba1\u7406\u3002\n\u5728\u5bf9\u8be5\u8fc7\u7a0b\u7684\u7ba1\u7406\u6d3b\u52a8\u4e2d\u5e94\u91cd\u70b9\u5173\u6ce8\u6539\u8fdb\u7684\u76ee\u6807\u53ca\u6539\u8fdb\u7684\u6709\u6548\u6027\u548c\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u5f53\u7ec4\u7ec7\u4ece\u6218\u7565\u548c\u53d1\u5c55\u7684\u89d2\u5ea6,\u5728\u6240\u6709\u5c42\u6b21\u5b9e\u73b0\u6539\u8fdb,\u5c31\u80fd\u589e\u5f3a\u7ec4\u7ec7\u5bf9\u6539\u8fdb\u673a\u4f1a\u7684\u5feb\u901f\u53cd\n\u5e94\uff0c\u63d0\u9ad8\u7ec4\u7ec7\u7684\u4e1a\u7ee9\uff0c\u589e\u5f3a\u7ade\u4e89\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u5728\u4e00\u4e2a\u5145\u6ee1\u6d3b\u529b\u7684\u7ec4\u7ec7\u73af\u5883\u4e2d\uff0c\u603b\u4f1a\u6709\u4eba\u8bbe\u6cd5\u5bfb\u627e\u66f4\u597d\u7684\u65b9\u6cd5\u6765\u8fbe\u5230\u4ed6\u4eec\u9884\u671f\u7684\u76ee\u6807\uff0c\u5982\n\u679c\u8fd9\u4e9b\u4eba\u4e0d\u662f\u4f60\uff0c\u5c31\u53ef\u80fd\u662f\u4f60\u540c\u884c\u4e2d\u7684\u7ade\u4e89\u5bf9\u624b\u3002\u56e0\u6b64,\u7ec4\u7ec7\u8981\u6811\u7acb\u96c4\u5fc3\u58ee\u5fd7,\u4e0d\u65ad\u5730\u6539\u53d8\u81ea\n\u5df1\u5934\u8111\u4e2d\u9648\u65e7\u7684\u8d28\u91cf\u89c2\u5ff5\uff0c\u540c\u65f6\u5c3d\u6700\u5927\u52aa\u529b\u51cf\u5c11\u5404\u79cd\u9519\u8bef\u53d1\u751f\u7684\u6982\u7387\u3002"),(0,l.kt)("h3",{id:"\u4e8c\u4f9d\u636e"},"\u4e8c\u3001\u4f9d\u636e"),(0,l.kt)("p",null,"\u6539\u8fdb\u5bf9\u4e8e\u7ec4\u7ec7\u4fdd\u6301\u5f53\u524d\u7684\u7ee9\u6548\u6c34\u5e73\uff0c\u5bf9\u5176\u5185\u3001\u5916\u90e8\u6761\u4ef6\u7684\u53d8\u5316\u505a\u51fa\u53cd\u5e94\uff0c\u5e76\u521b\u9020\u65b0\u7684\u673a\u4f1a\uff0c\n\u90fd\u662f\u975e\u5e38\u5fc5\u8981\u7684\u3002"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u6240\u5904\u7684\u73af\u5883\u662f\u52a8\u6001\u7684,\u5305\u62ec\u5916\u90e8\u73af\u5883\u548c\u5185\u90e8\u73af\u5883\u4e2d\u8bf8\u591a\u5f71\u54cd\u80fd\u529b\u7684\u56e0\u7d20\u3002\u7ec4\u7ec7\u7684\u7ba1\n\u7406\u8005\u5e94\u5bf9\u5176\u6240\u5904\u7684\u73af\u5883\u56e0\u7d20\u7684\u53d8\u5316\u4fdd\u6301\u654f\u611f,\u9884\u6d4b\u73af\u5883\u4e2d\u5404\u79cd\u5f71\u54cd\u56e0\u7d20\u7684\u53ef\u80fd\u53d8\u5316,\u5e94\u5bf9\u53d8\u5316\n\u53ca\u65f6\u4f5c\u51fa\u53cd\u5e94,\u53d8\u4e0d\u5229\u56e0\u7d20\u4e3a\u6709\u5229\u56e0\u7d20\uff0c\u53ca\u65f6\u5b9e\u65bd\u6539\u8fdb\uff0c\u63d0\u5347\u7ec4\u7ec7\u7684\u6838\u5fc3\u7ade\u4e89\u529b\u3002"),(0,l.kt)("h3",{id:"\u4e09\u4e3b\u8981\u6536\u76ca"},"\u4e09\u3001\u4e3b\u8981\u6536\u76ca"),(0,l.kt)("p",null,"\u8d2f\u5f7b\u6539\u8fdb\u7684\u57fa\u672c\u539f\u5219,\u7ec4\u7ec7\u53ef\u80fd\u83b7\u5f97\u7684\u4e3b\u8981\u76ca\u5904\u6709\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u8fc7\u7a0b\u7ee9\u6548\u3001\u7ec4\u7ec7\u80fd\u529b\u548c\u987e\u5ba2\u6ee1\u610f\n\u7ec4\u7ec7\u53ef\u4ee5\u4ece\u6539\u8fdb\u4e2d\u83b7\u5f97\u6536\u76ca\u3002\u82e5\u6539\u8fdb\u8fc7\u7a0b\u7ee9\u6548\u548c\u7ec4\u7ec7\u80fd\u529b\uff0c\u5219\u9700\u8981\u5148\u63d0\u5347\u6240\u6709\u4eba\u5458\u7684\u80fd\n\u529b\u3002\u7ec4\u7ec7\u53ef\u901a\u8fc7\u77e5\u8bc6\u7ba1\u7406\uff0c\u786e\u4fdd\u76f8\u5173\u4eba\u5458\u53ca\u65f6\u83b7\u5f97\u548c\u66f4\u65b0\u77e5\u8bc6\uff0c\u901a\u8fc7\u57f9\u8bad\u5c06\u77e5\u8bc6\u8f6c\u5316\u4e3a\u4eba\u5458\u7684\n\u667a\u6167\uff0c\u786e\u5b9a\u5b9e\u65bd\u6539\u8fdb\u7684\u91cd\u70b9\u548c\u533a\u57ce,\u901a\u8fc7\u5b9e\u65bd\u521b\u65b0\uff0c\u63d0\u5347\u7ec4\u7ec7\u80fd\u529b\uff0c\u8fdb\u800c\u901a\u8fc7\u6539\u8fdb\u4e0d\u65ad\u63d0\u5347\u8fc7\u7a0b\n\u7ee9\u6548\uff0c\u4ee5\u53ca\u4ea7\u54c1\u548c\u670d\u52a1\u7ee9\u6548,\u589e\u5f3a\u987e\u5ba2\u6ee1\u610f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u5f3a\u5bf9\u8c03\u67e5\u548c\u786e\u5b9a\u57fa\u672c\u539f\u56e0\u53ca\u540e\u7eed\u7684\u9884\u9632\u548c\u7ea0\u6b63\u63aa\u65bd\u7684\u5173\u6ce8\n\u7ec4\u7ec7\u5e94\u6ce8\u91cd\u57f9\u517b\u4eba\u5458\u7684\u95ee\u9898\u610f\u8bc6\u548c\u89e3\u51b3\u95ee\u9898\u7684\u610f\u8bc6\u548c\u80fd\u529b\u3002\u9488\u5bf9\u5df2\u7ecf\u53d1\u751f\u6216\u53ef\u80fd\u53d1\u751f\u7684\n\u5f71\u54cd\u7ec4\u7ec7\u5b9e\u73b0\u9884\u671f\u8f93\u51fa\uff0c\u6216\u5f71\u54cd\u987e\u5ba2\u6ee1\u610f\u7684\u4e0d\u5408\u683c\u95ee\u9898\uff0c\u4e00\u5b9a\u8981\u5c3d\u53ef\u80fd\u8fdb\u884c\u8c03\u67e5\uff0c\u67e5\u627e\u6839\u672c\u539f\n\u56e0,\u5e76\u9488\u5bf9\u5176\u539f\u56e0\u6216\u6f5c\u5728\u539f\u56e0\u5b9e\u65bd\u7ea0\u6b63\u63aa\u65bd\u6216\u9884\u9632\u63aa\u65bd\u3002\u7ec4\u7ec7\u5e94\u5173\u6ce8\u7ea0\u6b63\u6216\u7ea0\u6b63\u63aa\u65bd\u7684\u5b9e\u65bd\n\u6548\u679c\uff0c\u5efa\u7acb\u8ddf\u8e2a\u673a\u5236\uff0c\u9488\u5bf9\u5df2\u7ecf\u5b9e\u65bd\u7684\u7ea0\u6b63\u6216\u7ea0\u6b63\u63aa\u65bd\u7684\u975e\u9884\u671f\u7684\u6548\u679c\uff0c\u9700\u518d\u6b21\u8fdb\u884c\u539f\u56e0\u5206\u6790\uff0c\n\u5236\u5b9a\u548c\u5b9e\u65bd\u66f4\u65b0\u6216\u65b0\u7684\u7ea0\u6b63\u6216\u7ea0\u6b63\u63aa\u65bd\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u5bf9\u5185\u5916\u90e8\u98ce\u9669\u548c\u673a\u9047\u7684\u9884\u6e2c\u548c\u53cd\u5e94\u80fd\u529b\n\u7ec4\u7ec7\u5728\u4fdd\u6301\u5bf9\u5185\u3001\u5916\u90e8\u73af\u5883\u53d8\u5316\u7684\u654f\u611f\u6027\u7684\u540c\u65f6\uff0c\u5e94\u79ef\u6781\u6536\u96c6\u5e02\u573a\u4fe1\u606f,\u9002\u65f6\u505a\u51fa\u9884\u6d4b\uff0c\u6839\n\u636e\u9884\u6d4b\u8c03\u6574\u7ec4\u7ec7\u7684\u53d1\u5c55\u6218\u7565\u3002\u4e00\u4e9b\u7ec4\u7ec7\u7ec4\u5efa\u79d1\u6280\u60c5\u62a5\u529e\u516c\u5ba4\u5c31\u662f\u4e3a\u4e86\u589e\u5f3a\u7ec4\u7ec7\u5bf9\u5185\u5916\u90e8\u98ce\u9669\n\u548c\u673a\u4f1a\u7684\u9884\u6d4b\u80fd\u529b\uff0c\u5e76\u5bf9\u53d8\u5316\u4fdd\u6301\u9ad8\u5ea6\u7684\u654f\u611f\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5bf9\u6e10\u8fdb\u6027\u548c\u7a81\u7834\u6027\u6539\u8fdb\u7684\u8003\u8651\n\u7ec4\u7ec7\u5728\u5b9e\u65bd\u6539\u8fdb\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u4ec5\u9700\u8981\u6ce8\u91cd\u5f62\u5f0f\u7684\u91cf\u53d8\u578b\u6539\u8fdb\uff0c\u8bf8\u5982\u6d41\u7a0b\u7684\u6574\u5408\uff0c\u6d3b\u52a8\u7684\u51cf\u5c11\uff0c\n\u4e5f\u5e94\u6ce8\u91cd\u8d28\u53d8\u578b\u7684\u6539\u8fdb,\u8bf8\u5982\u521b\u65b0\u4ea7\u54c1\u548c\u670d\u52a1\u7ed3\u6784\uff0c\u5f00\u53d1\u9002\u5e94\u65b0\u7684\u5ba2\u6237\u7fa4\u7684\u65b0\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u9879\n\u76ee\u7b49\u3002\u7ec4\u7ec7\u4e5f\u53ef\u901a\u8fc7\u53d8\u9769\u5e26\u52a8\u6216\u589e\u52a0\u5176\u5185\u90e8\u6d3b\u529b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u66f4\u597d\u5730\u5229\u7528\u5b66\u4e60\u6765\u6539\u8fdb\n\u77e5\u8bc6\u53ef\u4ee5\u6539\u53d8\u547d\u8fd0\u3002\u4f46\u5bf9\u4e00\u4e2a\u7ec4\u7ec7\u800c\u8a00\uff0c\u53ea\u6709\u4e0e\u7ec4\u7ec7\u7684\u4ea7\u54c1\u548c\u670d\u52a1\uff0c\u6216\u4e0e\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u548c\n\u8fc7\u7a0b\u8fd0\u884c\u6709\u5173\u7684\u77e5\u8bc6\u88ab\u5458\u5de5\u638c\u63e1\u540e\u624d\u80fd\u5f62\u6210\u5458\u5de5\u7684\u521b\u9020\u529b\uff0c\u624d\u80fd\u4e0d\u65ad\u5730\u63a8\u9648\u51fa\u65b0\u5730\u5f00\u53d1\u51fa\u66f4\n\u591a\u9002\u7528\u4e8e\u987e\u5ba2\u9700\u6c42\u548c\u671f\u671b\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u3002\u7ec4\u7ec7\u5e94\u5c06\u57f9\u8bad\u89c6\u4e3a\u4e00\u9879\u91cd\u8981\u7684\u6d3b\u52a8\u3002\u79ef\u6781\u8425\u9020\u4eba\u5458\n\u5b66\u4e60\u7684\u6c1b\u56f4\uff0c\u6fc0\u52b1\u4eba\u5458\u5b66\u4e60\u77e5\u8bc6,\u5e76\u5c06\u6240\u5b66\u5230\u7684\u77e5\u8bc6\u7528\u4e8e\u521b\u65b0\u548c\u6539\u8fdb\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u589e\u5f3a\u521b\u65b0\u7684\u52a8\u529b\n\u521b\u65b0\u662f\u5728\u539f\u6709\u8d44\u6e90(\u5de5\u5e8f\u3001\u6d41\u7a0b\u3001\u4f53\u7cfb\u5355\u5143\u7b49\uff09\u7684\u57fa\u7840\u4e0a\uff0c,\u901a\u8fc7\u8d44\u6e90\u7684\u518d\u914d\u7f6e\uff0c\u518d\u6574\u5408(\u6539\n\u8fdb\uff09,\u8fdb\u800c\u63d0\u9ad8\uff08\u589e\u52a0\uff09\u73b0\u6709\u4ef7\u503c\u7684\u4e00\u79cd\u624b\u6bb5\u3002\u521b\u65b0\u662f\u5b9e\u73b0\u6216\u91cd\u65b0\u5206\u914d\u4ef7\u503c\u7684\uff0c\u65b0\u7684\u6216\u53d8\u5316\u7684\u5ba2\n\u4f53\u3002\u521b\u65b0\u662f\u4ee5\u65b0\u601d\u7ef4\u3001\u65b0\u53d1\u660e\u548c\u65b0\u63cf\u8ff0\u4e3a\u7279\u5f81\u7684\u4e00\u79cd\u6982\u5ff5\u5316\u8fc7\u7a0b\u3002\u7ec4\u7ec7\u53ea\u6709\u901a\u8fc7\u8f6c\u53d8\u89c2\u5ff5\uff0c\u6811\n\u7acb\u5168\u5458\u521b\u65b0\u610f\u8bc6,\u91cd\u89c6\u521b\u65b0\u4eba\u624d\u961f\u4f0d\u5efa\u8bbe\uff0c\u6784\u5efa\u521b\u65b0\u673a\u5236\u548c\u521b\u65b0\u7684\u6fc0\u52b1\u673a\u5236\uff0c\u589e\u5f3a\u521b\u65b0\u7684\u9a71\u52a8\uff0c\n\u624d\u53ef\u80fd\u6fc0\u53d1\u66f4\u591a\u7684\u4eba\u5458\u6295\u4eba\u5230\u521b\u65b0\u6d3b\u52a8\u4e4b\u4e2d\u3002")),(0,l.kt)("h3",{id:"\u56db\u53ef\u5f00\u5c55\u7684\u6d3b\u52a8"},"\u56db\u3001\u53ef\u5f00\u5c55\u7684\u6d3b\u52a8"),(0,l.kt)("p",null,"\u7ec4\u7ec7\u8d2f\u5f7b\u6539\u8fdb\u539f\u5219\uff0c\u53ef\u5f00\u5c55\u7684\u6d3b\u52a8\u5305\u62ec\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fc3\u8fdb\u5728\u7ec4\u7ec7\u7684\u6240\u6709\u5c42\u7ea7\u5efa\u7acb\u6539\u8fdb\u76ee\u6807"),(0,l.kt)("p",{parentName:"li"},"\u6539\u8fdb\u662f\u4e3a\u4e86\u7ec4\u7ec7\u53d1\u5c55\u7684\u9700\u8981\u3002\u9700\u8981\u5168\u5458\u7684\u53c2\u4e0e,\u5728\u4e0d\u540c\u7684\u5c97\u4f4d\u4e0a\u5206\u522b\u5f00\u5c55\u7ba1\u7406\u521b\u65b0\u3001\u5236\u5ea6\n\u521b\u65b0\u548c\u6280\u672f\u521b\u65b0\u7b49\u6d3b\u52a8\uff0c\u76ee\u6807\u7684\u7275\u5f15\u662f\u4fc3\u8fdb\u5458\u5de5\u79ef\u6781\u53c2\u4e0e\u521b\u65b0\u5e76\u83b7\u5f97\u521b\u65b0\u6210\u679c\u7684\u4e00\u79cd\u624b\u6bb5\u3002\n\u56e0\u6b64,\u8981\u5b9e\u65bd\u5168\u9762\u7cfb\u7edf\u7684\u6539\u8fdb,\u5c31\u5fc5\u987b\u5728\u7ec4\u7ec7\u7684\u6240\u6709\u5c42\u6b21\u8bbe\u5b9a\u6216\u5efa\u7acb\u5305\u62ec\u6539\u8fdb\u9879\u76ee\u7684\u8d28\u91cf\n\u76ee\u6807\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/ISO 9001:2015 \u6807\u51c6\u8981\u6c42\u786e\u4fdd\u5236\u5b9a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u8d28\u91cf\u65b9\u9488\u548c\u8d28\u91cf\u76ee\n\u6807,\u5e76\u4e0e\u7ec4\u7ec7\u73af\u5883\u76f8\u9002\u5e94\uff0c\u4e0e\u6218\u7565\u65b9\u5411\u76f8\u4e00\u81f4(5.1.1);\u7ec4\u7ec7\u5e94\u786e\u5b9a\u548c\u5e94\u7528\u6240\u9700\u7684\u51c6\u5219\u548c\u65b9\u6cd5\n\uff08\u5305\u62ec\u76d1\u89c6\u3001\u6d4b\u91cf\u548c\u76f8\u5173\u7ee9\u6548\u6307\u6807\uff09\uff0c\u4ee5\u786e\u4fdd\u8fd9\u4e9b\u8fc7\u7a0b\u7684\u6709\u6548\u8fd0\u884c\u548c\u63a7\u5236(4.4.1);\u7ec4\u7ec7\u5e94\u9488\u5bf9\n\u76f8\u5173\u804c\u80fd\u3001\u5c42\u6b21\u548c\u8d28\u6700\u7ba1\u7406\u4f53\u7cfb\u6240\u9700\u7684\u8fc7\u7a0b\u5efa\u7acb\u8d28\u91cf\u76ee\u6807(6.2.1);\u8d28\u91cf\u76ee\u6807\u5e94\u8003\u8651\u9002\u7528\u7684\u8981\n\u6c42,\u4e0e\u4ea7\u54c1\u548c\u670d\u52a1\u5408\u683c\u4ee5\u53ca\u589e\u5f3a\u987e\u5ba2\u6ee1\u610f\u76f8\u5173(6.2.1\uff09,\u7b56\u5212\u548c\u5b9e\u65bd\u7ba1\u7406\u8bc4\u5ba1\u65f6\u5e94\u8003\u8651\u8d28\u91cf\u76ee\n\u6807\u7684\u5b9e\u73b0\u7a0b\u5ea6(9.3.2)\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u5404\u5c42\u7ea7\u4eba\u5458\u8fdb\u884c\u6559\u80b2\u548c\u57f9\u8bad,\u4f7f\u5176\u61c2\u5f97\u5982\u4f55\u5e94\u7528\u57fa\u672c\u5de5\u5177\u548c\u65b9\u6cd5\u5b9e\u73b0\u6539\u8fdb\u76ee\u6807"),(0,l.kt)("p",{parentName:"li"},"\u4e0d\u7ba1\u662f\u5b9e\u65bd\u6280\u672f\u521b\u65b0\u3001\u7ba1\u7406\u521b\u65b0,\u8fd8\u662f\u5236\u5ea6\u521b\u65b0,\u90fd\u5fc5\u987b\u7531\u5177\u5907\u77e5\u8bc6\u548c\u6280\u80fd\u7684\u5458\u5de5\u6765\u5b8c\u6210\u3002\n\u56e0\u6b64,\u7ec4\u7ec7\u5e94\u5f3a\u5316\u5bf9\u5458\u5de5\u7684\u6559\u80b2\u548c\u57f9\u8bad,\u901a\u8fc7\u57f9\u8bad\u4f7f\u5458\u5de5\u719f\u7ec3\u638c\u63e1\u5404\u79cd\u6539\u8fdb\uff0c\u5305\u62ec\u521b\u65b0\u7684\u5de5\u5177\n\u548c\u65b9\u6cd5\uff0c\u4ee5\u5b9e\u73b0\u7ec4\u7ec7\u7684\u76ee\u6807\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/1S0 9001:2015 \u6807\u51c6\u8981\u6c42\u4fc3\u4f7f\u4eba\u5458\u79ef\u6781\u53c2\u4e0e\uff0c\u6307\u5bfc\u548c\u652f\u6301\u4ed6\u4eec\u4e3a\u8d28\uff01\n\u7ba1\u7406\u4f53\u7cfb\u7684\u6709\u6548\u6027\u4f5c\u51fa\u8d21\u732e(5.1.1)\u3001\u63a8\u52a8\u6539\u8fdb(5.1.1);\u8fd9\u4e9b\u77e5\u8bc6\u5e94\u5b50\u4ee5\u4fdd\u6301\uff0c\u5e76\u80fd\u5728\u6240\u9700\u7684\n\u8303\u56f4\u5185\u5f97\u5230(7.1.6);\u57fa\u4e8e\u9002\u5f53\u7684\u6559\u80b2\u3001\u57f9\u8bad\u6216\u7ecf\u9a8c\uff0c\u786e\u4fdd\u8fd9\u4e9b\u4eba\u5458\u662f\u80dc\u4efb\u7684(7.2);\u9002\u7528\u65f6\uff0c\u91c7\n\u53d6\u63aa\u65bd(\u5bf9\u5728\u804c\u4eba\u5458\u8fdb\u884c\u57f9\u8bad\uff09\u4ee5\u83b7\u5f97\u6240\u9700\u7684\u80fd\u529b\uff0c\u5e76\u8bc4\u4ef7\u63aa\u65bd\u7684\u6709\u6548\u6027(7.2);\u7ec4\u7ec7\u5e94\u786e\u4fdd\u5728\n\u5176\u63a7\u5236\u4e0b\u5de5\u4f5c\u7684\u4eba\u5458\u77e5\u6653\u4ed6\u4eec\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u6709\u6548\u6027\u7684\u8d21\u732e\uff0c\u5305\u62ec\u6539\u8fdb\u7ee9\u6548\u7684\u76ca\u5904(7.3)\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u786e\u4fdd\u5458\u5de5\u6709\u80fd\u529b\u6210\u529f\u7684\u4fc3\u8fdb\u548c\u5b8c\u6210\u6539\u8fdb\u9879\u76ee"),(0,l.kt)("p",{parentName:"li"},"\u5458\u5de5\u6240\u5177\u6709\u7684\u6539\u8fdb\u548c\u521b\u65b0\u7684\u80fd\u529b\u51b3\u5b9a\u4e86\u7ec4\u7ec7\u6539\u8fdb\u9879\u76ee\u7684\u6548\u7387\u548c\u6548\u679c\u3002\u80fd\u529b\u662f\u6307\u8fd0\u7528\u77e5\u8bc6\n\u548c\u6280\u80fd\u8fbe\u5230\u9884\u671f\u7ed3\u679c\u7684\u672c\u9886\u3002\u56e0\u6b64,\u7ec4\u7ec7\u5e94\u901a\u8fc7\u91c7\u53d6\u5fc5\u8981\u7684\u63aa\u65bd\uff0c\u786e\u4fdd\u5458\u5de5\u83b7\u5f97\u8fd9\u79cd\u80fd\u529b\uff0c\u4ee5\n\u4fbf\u6210\u529f\u63a8\u8fdb\u548c\u5b8c\u6210\u6539\u8fdb\u9879\u76ee\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/1S0 9001:2015 \u6807\u51c6\u8981\u6c42\u7ec4\u7ec7\u5e94\u786e\u5b9a\u5728\u5176\u63a7\u5236\u4e0b\u5de5\u4f5c\u7684\u4eba\u5458\u6240\u9700\u5177\u5907\n\u7684\u80fd\u529b,\u8fd9\u4e9b\u4eba\u5458\u4ece\u4e8b\u7684\u5de5\u4f5c\u5f71\u54cd\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7ee9\u6548\u548c\u6709\u6548\u6027\uff087.2);\u57fa\u4e8e\u9002\u5f53\u7684\u6559\u80b2\u3001\u57f9\u8bad\n\u6216\u7ecf\u9a8c,\u786e\u4fdd\u8fd9\u4e9b\u4eba\u5458\u662f\u80dc\u4efb\u7684(7.2);\u9002\u7528\u65f6\uff0c\u91c7\u53d6\u63aa\u65bd(\u5bf9\u5728\u804c\u4eba\u5458\u8fdb\u884c\u57f9\u8bad\uff09\u83b7\u5f97\u6240\u9700\u7684\n\u80fd\u529b\uff0c\u5e76\u8bc4\u4ef7\u63aa\u65bd\u7684\u6709\u6548\u6027(7.2\uff09\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u53d1\u548c\u5c55\u5f00\u8fc7\u7a0b\uff0c\u4ee5\u5728\u6574\u4e2a\u7ec4\u7ec7\u5185\u5b9e\u65bd\u6539\u8fdb\u9879\u76ee"),(0,l.kt)("p",{parentName:"li"},"\u7ec4\u7ec7\u5e94\u63a8\u52a8\u5168\u5458\u53c2\u4e0e\u6539\u8fdb\u548c\u521b\u65b0\u6d3b\u52a8\u3002\u901a\u8fc7\u8bc6\u522b\u6539\u8fdb\u548c\u521b\u65b0\u9700\u6c42\uff0c\u7ec4\u5efa\u6539\u8fdb\u6216\u521b\u65b0\u5c0f\u7ec4\u3001\n\u786e\u5b9a\u6539\u8fdb\u548c\u521b\u65b0\u8bfe\u9898\uff0c\u5efa\u7acb\u548c\u4fdd\u6301\u6539\u8fdb\u548c\u521b\u65b0\u673a\u5236\u548c\u5236\u5ea6\uff0c\u8425\u9020\u6539\u8fdb\u548c\u521b\u65b0\u6c1b\u56f4\uff0c\u79ef\u6781\u5f15\u5bfc\u5168\n\u5458\u53c2\u4e0e\u5b9e\u65bd\u6539\u8fdb\u5229\u521b\u65b0\u9879\u76ee\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/1SO 9001:2015 \u6807\u51c6\u8981\u6c42\u7ec4\u7ec7\u5e94\u786e\u5b9a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u6240\u9700\u7684\u8fc7\u7a0b\u53ca\u5176\u5728\n\u6574\u4e2a\u7ec4\u7ec7\u4e2d\u7684\u5e94\u7528(4.4.1)\u3001\u63a8\u52a8\u6539\u8fdb(5.1.1);\u7b56\u5212\u548c\u5b9e\u65bd\u7ba1\u7406\u8bc4\u5ba1\u65f6\u5e94\u8003\u8651\u6539\u8fdb\u7684\u673a\u4f1a\n(9.3.2)\u3001\u7ba1\u7406\u8bc4\u5ba1\u7684\u8f93\u51fa\u5e94\u5305\u62ec\u4e0e\u6539\u8fdb\u7684\u673a\u4f1a\u7684\u76f8\u5173\u7684\u51b3\u5b9a\u548c\u63aa\u65bd(9.3.3);\u7ec4\u7ec7\u5e94\u786e\u5b9a\u548c\n\u9009\u62e9\u6539\u8fdb\u673a\u4f1a,\u5e76\u91c7\u53d6\u5fc5\u8981\u63aa\u65bd\uff0c\u4ee5\u6ee1\u8db3\u987e\u5ba2\u8981\u6c42\u548c\u589e\u5f3a\u987e\u5ba2\u6ee1\u610f(10.1);\u7ec4\u7ec7\u5e94\u8003\u8651\u5206\u6790\u548c\n\u8bc4\u4ef7\u7684\u7ed3\u679c\u4ee5\u53ca\u7ba1\u7406\u8bc4\u5ba1\u7684\u8f93\u51fa\uff0c\u4ee5\u786e\u5b9a\u662f\u5426\u5b58\u5728\u9700\u6c42\u6216\u673a\u9031\uff0c\u8fd9\u4e9b\u9700\u6c42\u6216\u673a\u9047\u5e94\u4f5c\u4e3a\u6301\u7eed\u6539\n\u8fdb\u7684\u4e00\u90e8\u5206\u52a0\u4ee5\u5e94\u5bf9(10.3)\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8ddf\u8e2a\u3001\u8bc4\u5ba1\u548c\u5ba1\u6838\u6539\u8fdb\u9879\u76ee\u7684\u7b56\u5212\u3001\u5b9e\u65bd\u3001\u5b8c\u6210\u548c\u7ed3\u679c\n\u4e3a\u4e86\u786e\u4fdd\u6539\u8fdb\u9879\u76ee\u7684\u6548\u7387\u548c\u6548\u679c\uff0c\u7ec4\u7ec7\u5e94\u5efa\u7acb\u548c\u4fdd\u6301\u8ddf\u8e2a\u3001\u8bc4\u5ba1\u548c\u5ba1\u6838\u6539\u8fdb\u9879\u76ee\u7684\u7b56\u5212\u3001\n\u5b9e\u65bd\u3001\u5b8c\u6210\u60c5\u51b5\u548c\u7ed3\u679c\u7684\u6d41\u7a0b\u548c\u673a\u5236\u3002\nGB/T 19001-2016/ISO 9001:2015 \u6807\u51c6\u8981\u6c42\u7ec4\u7ec7\u5e94\u6539\u8fdb\u8fc7\u7a0b\u548c\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb(4.4.1)\u3002\n\u6700\u9ad8\u7ba1\u7406\u8005\u5e94\u5206\u914d\u804c\u8d23\u548c\u6743\u9650\uff0c\u4ee5\u62a5\u544a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u7ee9\u6548\u53ca\u5176\u6539\u8fdb\u673a\u4f1a(5.3)\u3002\u7ec4\u7ec7\u5e94\u7b56\n\u5212\u5982\u4f55\u8bc4\u4ef7\u8fd9\u4e9b\u63aa\u65bd\u7684\u6709\u6548\u6027(6.1.2)\u3002\u7b56\u5212\u5982\u4f55\u5b9e\u73b0\u8d28\u91cf\u76ee\u6807\u65f6\uff0c\u7ec4\u7ec7\u5e94\u786e\u5b9a\u5982\u4f55\u8bc4\u4ef7\u7ed3\n\u679c(6.2.2)\u3002\u5f53\u7ec4\u7ec7\u786e\u5b9a\u9700\u8981\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8fdb\u884c\u53d8\u66f4\u65f6\uff0c\u53d8\u66f4\u5e94\u6309\u6240\u7b56\u5212\u7684\u65b9\u5f0f\u5b9e\u65bd\n(6.3)\u3002\u7ec4\u7ec7\u5e94\u63a7\u5236\u7b56\u5212\u7684\u53d8\u66f4,\u8bc4\u5ba1\u975e\u9884\u671f\u53d8\u66f4\u7684\u540e\u679c,\u5fc5\u8981\u65f6,\u91c7\u53d6\u63aa\u65bd\u51cf\u8f7b\u4e0d\u5229\u5f71\u54cd\n(8.1)\u3002\u7ec4\u7ec7\u5e94\u5bf9\u4ea7\u54c1\u548c\u670d\u52a1\u5728\u8bbe\u8ba1\u548c\u5f00\u53d1\u671f\u95f4\u4ee5\u53ca\u540e\u7eed\u6240\u505a\u7684\u66f4\u6539\u8fdb\u884c\u9002\u5f53\u7684\u8bc6\u522b\u3001\u8bc4\u5ba1\n\u548c\u63a7\u5236\uff0c\u4ee5\u786e\u4fdd\u8fd9\u4e9b\u66f4\u6539\u5bf9\u6ee1\u8db3\u8981\u6c42\u4e0d\u4f1a\u4ea7\u751f\u4e0d\u5229\u5f71\u54cd\uff088.3.6)\u3002\u7ec4\u7ec7\u5e94\u5bf9\u751f\u4ea7\u548c\u670d\u52a1\u63d0\u4f9b\n\u7684\u66f4\u6539\u8fdb\u884c\u5fc5\u8981\u7684\u8bc4\u5ba1\u548c\u63a7\u5236\uff0c\u4ee5\u786e\u4fdd\u6301\u7eed\u5730\u7b26\u5408\u8981\u6c42\uff088.5.6)\u3002\u7ec4\u7ec7\u5e94\u786e\u5b9a\uff1aa\uff09\u9700\u8981\u76d1\u89c6\u548c\n\u6d4b\u91cf\u4ec0\u4e48;b\uff09\u9700\u8981\u7528\u4ec0\u4e48\u65b9\u6cd5\u8fdb\u884c\u76d1\u89c6\u3001\u6d4b\u91cf\u3001\u5206\u6790\u548c\u8bc4\u4ef7\uff0c\u4ee5\u786e\u4fdd\u7ed3\u679c\u6709\u6548\uff1b\u22ef\uff089.1.1)\u3002\u7ec4\n\u7ec7\u5e94\u8bc4\u4ef7\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u7ee9\u6548\u548c\u6709\u6548\u6027(9.1.1)\u3002\u7ec4\u7ec7\u5e94\u5206\u6790\u548c\u8bc4\u4ef7\u901a\u8fc7\u76d1\u89c6\u548c\u6d4b\u6700\u83b7\u5f97\u7684\n\u9002\u5f53\u7684\u6570\u636e\u548c\u4fe1\u606f(9.1.3\uff09\u3002\u6700\u9ad8\u7ba1\u7406\u8005\u5e94\u6309\u7b56\u5212\u7684\u65f6\u95f4\u95f4\u9694\u5bf9\u7ec4\u7ec7\u7684\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8fdb\u884c\u8bc4\n\u5ba1\uff0c\u4ee5\u786e\u4fdd\u5176\u6301\u7eed\u7684\u9002\u5b9c\u6027\u3001\u5145\u5206\u6027\u548c\u6709\u6548\u6027,\u5e76\u4e0e\u7ec4\u7ec7\u7684\u6218\u7565\u65b9\u5411\u4fdd\u6301\u4e00\u81f4(9.3.1\uff09\u3002\u8bc4\u5ba1\n\u6240\u91c7\u53d6\u7684\u7ea0\u6b63\u63aa\u65bd\u7684\u6709\u6548\u6027(10.2.1)\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u6539\u8fdb\u4e0e\u65b0\u7684\u6216\u53d8\u66f4\u7684\u4ea7\u54c1\u3001\u670d\u52a1\u548c\u8fc7\u7a0b\u7684\u5f00\u53d1\u7ed3\u5408\u5728\u4e00\u8d77\u5b50\u4ee5\u8003\u8651"),(0,l.kt)("p",{parentName:"li"},"\u5728\u5b9e\u65bd\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u6539\u8fdb\u6216\u521b\u65b0\u8fc7\u7a0b\u4e2d\uff0c\u6216\u8fdb\u884c\u65b0\u7684\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u8bbe\u8ba1\u548c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u5e94\n\u5145\u5206\u8003\u8651\u6765\u81ea\u5404\u65b9\u9762\u7684\u5efa\u8bae\u6216\u610f\u89c1\uff0c\u5305\u62ec\u6765\u81ea\u987e\u5ba2\u548c\u6709\u5173\u76f8\u5173\u65b9\u7684\u5efa\u8bae\u6216\u610f\u89c1\uff0c\u4f5c\u4e3a\u5b9e\u65bd\u4ea7\u54c1\n\u548c\u670d\u52a1\u7684\u6539\u8fdb\u548c\u521b\u65b0\u7684\u91cd\u8981\u8f93\u4eba\uff0c\u540c\u65f6\uff0c\u5728\u8fdb\u884c\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u6539\u8fdb\u3001\u521b\u65b0\u6216\u53d8\u66f4\u8fc7\u7a0b\u4e2d\uff0c\u5e94\u79ef\u6781\n\u5229\u7528\u5e76\u884c\u5de5\u7a0b\uff0c\u5c06\u8fc7\u7a0b\u7684\u8bbe\u8ba1 \u548c\u6539\u8fdb\u4e0e\u4ea7\u54c1\u548c\u670d\u52a1\u7684\u521b\u65b0\u4e0e\u6539\u8fdb\u4e00\u5e76\u8003\u8651\uff0c\u53ef\u6709\u6548\u7f29\u77ed\u6539\u8fdb\u6216\n\u521b\u65b0\u7684\u5468\u671f\uff0c\u63d0\u9ad8\u6548\u7387,\u8fd9\u6837\u624d\u80fd\u786e\u4fdd\u5176\u4ea7\u54c1\u548c\u670d\u52a1\u6539\u8fdb\u6216\u521b\u65b0\u7684\u7ed3\u679c\u8d62\u5f97\u987e\u5ba2\u6ee1\u610f\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/1SO 9001:2015 \u6807\u51c6\u8981\u6c42\u7ec4\u7ec7\u5e94\u9488\u5bf9\u6240\u8bbe\u8ba1\u548c\u5f00\u53d1\u7684\u5177\u4f53\u7c7b\u578b\u7684\u4ea7\u54c1\n\u548c\u670d\u52a1\uff0c\u786e\u5b9a\u5fc5\u987b\u7684\u8981\u6c42(8.3.3\uff09;\u5bf9\u540e\u7eed\u4ea7\u54c1\u548c\u670d\u52a1\u63d0\u4f9b\u7684\u8981\u6c42(8.3.2);\u6ee1\u8db3\u540e\u7eed\u4ea7\u54c1\u548c\u670d\n\u52a1\u63d0\u4f9b\u8fc7\u7a0b\u7684\u9700\u8981(8.3.5);\u7ec4\u7ec7\u5e94\u5bf9\u4ea7\u54c1\u548c\u670d\u52a1\u5728\u8bbe\u8ba1\u548c\u5f00\u53d1\u671f\u95f4\u4ee5\u53ca\u540e\u7eed\u6240\u505a\u7684\u66f4\u6539\u8fdb\n\u884c\u9002\u5f53\u7684\u8bc6\u522b\u3001\u8bc4\u5ba1\u548c\u63a7\u5236\uff0c\u4ee5\u786e\u4fdd\u8fd9\u4e9b\u66f4\u6539\u5bf9\u6ee1\u8db3\u8981\u6c42\u4e0d\u4f1a\u4ea7\u751f\u4e0d\u5229\u5f71\u54cd(8.3.6)\uff1b\u7ec4\u7ec7\u5e94\n\u786e\u5b9a\u548c\u9009\u62e9\u6539\u8fdb\u673a\u4f1a,\u5e76\u91c7\u53d6\u5fc5\u8981\u63aa\u65bd\uff0c\u4ee5\u6ee1\u8db3\u987e\u5ba2\u8981\u6c42\u548c\u589e\u5f3a\u987e\u5ba2\u6ee1\u610f\uff0810.1\uff09\u3001\u6539\u8fdb\u4ea7\u54c1\u548c\n\u670d\u52a1\uff0c\u4ee5\u6ee1\u8db3\u8981\u6c42\u548c\u5e94\u5bf9\u672a\u6765\u7684\u9700\u6c42\u548c\u671f\u671b(10.1)\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8d5e\u8d4f\u548c\u8868\u5f70\u6539\u8fdb"),(0,l.kt)("p",{parentName:"li"},"\u7ec4\u7ec7\u5e94\u53ca\u65f6\u5bf9\u6539\u8fdb\u6216\u521b\u65b0\u6d3b\u52a8\u4ee5\u53ca\u6539\u8fdb\u6216\u521b\u65b0\u6210\u679c\u5b50\u4ee5\u8ba4\u53ef\uff0c\u4ee5\u5229\u4e8e\u66f4\u597d\u5730\u6fc0\u53d1\u5458\u5de5\u53c2\n\u4e0e\u6539\u8fdb\u548c\u521b\u65b0\u7684\u6fc0\u60c5\u548c\u70ed\u60c5\u3002"),(0,l.kt)("p",{parentName:"li"},"GB/T 19001-2016/1SO 9001:2015 \u6807\u51c6\u8981\u6c42\u6c9f\u901a\u6709\u6548\u7684\u8d28\u91cf\u7ba1\u7406\u548c\u7b26\u5408\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u8981\n\u6c42\u7684\u91cd\u8981\u6027(5.1.1);\u4fc3\u4f7f\u4eba\u5458\u79ef\u6781\u53c2\u4e0e,\u6307\u5bfc\u548c\u652f\u6301\u4ed6\u4eec\u4e3a\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u7684\u6709\u6548\u6027\u4f5c\u51fa\u8d21\u732e\n(5.1.1);\u7ec4\u7ec7\u5e94\u786e\u4fdd\u5176\u63a7\u5236\u4e0b\u5de5\u4f5c\u7684\u4eba\u5458\u77e5\u6653\u4ed6\u4eec\u5bf9\u8d28\u91cf\u7ba1\u7406\u4f53\u7cfb\u6709\u6548\u6027\u7684\u8d21\u732e\uff0c\u5305\u62ec\u6539\u8fdb\n\u7ee9\u6548\u7684\u76ca\u5904(7.3);\u7ec4\u7ec7\u5e94\u786e\u5b9a\u4e0e\u8d28\u91cf\u7ba1\u7406\u76f8\u5173\u7684\u5185\u90e8\u548c\u5916\u90e8\u6c9f\u901a(7.4)\u3002"))))}s.isMDXComponent=!0}}]);