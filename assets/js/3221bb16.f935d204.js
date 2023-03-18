"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[512],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=l,c=d["".concat(s,".").concat(b)]||d[b]||m[b]||r;return t?n.createElement(c,o(o({ref:a},p),{},{components:t})):n.createElement(c,o({ref:a},p))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=b;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},18679:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(67294),l=t(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:t},a)}},73992:(e,a,t)=>{t.d(a,{Z:()=>f});var n=t(87462),l=t(67294),r=t(86010),o=t(72957),i=t(16550),s=t(75238),u=t(33609),p=t(92560);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function m(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function b(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,u]=c({queryString:t,groupId:n}),[d,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,p.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),g=(()=>{const e=s??d;return b({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var g=t(51048);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==i&&(d(a),s(n))},b=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:b,onClick:m},o,{className:(0,r.Z)("tabs__item",T.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function y(e){let{lazy:a,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",T.tabList)},l.createElement(k,(0,n.Z)({},e,a)),l.createElement(y,(0,n.Z)({},e,a)))}function f(e){const a=(0,g.Z)();return l.createElement(v,(0,n.Z)({key:String(a)},e))}},20192:(e,a,t)=>{t.r(a),t.d(a,{Highlight:()=>m,assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>b});var n=t(87462),l=(t(67294),t(3905)),r=t(73992),o=t(18679);const i={red:"red_CNC4",orange:"orange_FjDY",yellow:"yellow_VhEq"},s={},u=void 0,p={unversionedId:"\u5b66\u4e60\u8d44\u6599/Highlight",id:"\u5b66\u4e60\u8d44\u6599/Highlight",title:"Highlight",description:"Docusaurus \u7eff \u548c Facebook \u84dd \u662f\u6211\u6700\u559c\u6b22\u7684\u989c\u8272\u3002",source:"@site/docs/\u5b66\u4e60\u8d44\u6599/Highlight.md",sourceDirName:"\u5b66\u4e60\u8d44\u6599",slug:"/\u5b66\u4e60\u8d44\u6599/Highlight",permalink:"/\u5b66\u4e60\u8d44\u6599/Highlight",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"xuexi_index",permalink:"/xuexi_index"},next:{title:"WeChat",permalink:"/\u5b66\u4e60\u8d44\u6599/WeChat"}},d={},m=e=>{let{children:a,color:t}=e;return(0,l.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},b=[{value:"slug: /markdown-features/tabs",id:"slug-markdown-featurestabs",level:2},{value:"Displaying a default tab",id:"displaying-a-default-tab",level:2},{value:"Syncing tab choices",id:"syncing-tab-choices",level:2},{value:"Customizing tabs",id:"customizing-tabs",level:2},{value:"Customizing tab headings",id:"customizing-tab-headings",level:3},{value:"Query string",id:"query-string",level:2}],c=(h="BrowserWindow",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var h;const g={Highlight:m,toc:b},T="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(T,(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(m,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus \u7eff")," \u548c ",(0,l.kt)(m,{color:"#1877F2",mdxType:"Highlight"},"Facebook \u84dd")," \u662f\u6211\u6700\u559c\u6b22\u7684\u989c\u8272\u3002",(0,l.kt)("p",null,"\u6211\u53ef\u4ee5\u628a\u6211\u7684 ",(0,l.kt)("em",{parentName:"p"},"JSX")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"Markdown")," \u5199\u5728\u4e00\u8d77\uff01"),(0,l.kt)("p",null,"/",(0,l.kt)("em",{parentName:"p"}," \u4e0d\u8981\u8fd9\u4e48\u5199\uff1a "),"/"),(0,l.kt)("p",null,"/",(0,l.kt)("em",{parentName:"p"}," \u8981\u8fd9\u4e48\u5199\uff1a "),"/"),(0,l.kt)("span",{style:{backgroundColor:"red"}},"Foo"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"id: tabs\ndescription: Using tabs inside Docusaurus Markdown"),(0,l.kt)("h2",{id:"slug-markdown-featurestabs"},"slug: /markdown-features/tabs"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"dsadfsdf sdf")),(0,l.kt)("h1",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"Docusaurus provides the ",(0,l.kt)("inlineCode",{parentName:"p"},"<Tabs>")," component that you can use in Markdown thanks to [MDX./markdown-features-react.mdx):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(o.Z,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(o.Z,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"It is also possible to provide ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," props to ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(o.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(o.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"Tabs")," props take precedence over the ",(0,l.kt)("code",null,"TabItem")," props:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  defaultValue="apple"\n  values={[\n    {label: \'Apple 1\', value: \'apple\'},\n    {label: \'Orange 1\', value: \'orange\'},\n    {label: \'Banana 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="Apple 2">\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange 2">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana 2" default>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{defaultValue:"apple",values:[{label:"Apple 1",value:"apple"},{label:"Orange 1",value:"orange"},{label:"Banana 1",value:"banana"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"apple",label:"Apple 2",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(o.Z,{value:"orange",label:"Orange 2",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(o.Z,{value:"banana",label:"Banana 2",default:!0,mdxType:"TabItem"},"This is a banana \ud83c\udf4c")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"By default, all tabs are rendered eagerly during the build process, and search engines can index hidden tabs."),(0,l.kt)("p",{parentName:"admonition"},"It is possible to only render the default tab with ",(0,l.kt)("inlineCode",{parentName:"p"},"<Tabs lazy />"),".")),(0,l.kt)("h2",{id:"displaying-a-default-tab"},"Displaying a default tab"),(0,l.kt)("p",null,"The first tab is displayed by default, and to override this behavior, you can specify a default tab by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," to one of the tab items. You can also set the ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," component to the label value of your choice. For example, in the example above, either setting ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," for the ",(0,l.kt)("inlineCode",{parentName:"p"},'value="apple"')," tab or setting ",(0,l.kt)("inlineCode",{parentName:"p"},'defaultValue="apple"'),' for the tabs forces the "Apple" tab to be open by default.'),(0,l.kt)("p",null,"Docusaurus will throw an error if a ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue")," is provided for the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," but it refers to a non-existing value. If you want none of the tabs to be shown by default, use ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultValue={null}"),"."),(0,l.kt)("h2",{id:"syncing-tab-choices"},"Syncing tab choices"),(0,l.kt)("p",null,"You may want choices of the same kind of tabs to sync with each other. For example, you might want to provide different instructions for users on Windows vs users on macOS, and you want to change all OS-specific instructions tabs in one click. To achieve that, you can give all related tabs the same ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," prop. Note that doing this will persist the choice in ",(0,l.kt)("inlineCode",{parentName:"p"},"localStorage")," and all ",(0,l.kt)("inlineCode",{parentName:"p"},"<Tab>")," instances with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," will update automatically when the value of one of them is changed. Note that group IDs are globally namespaced."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,l.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,l.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,l.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste."))),(0,l.kt)("p",null,"For all tab groups that have the same ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId"),", the possible values do not need to be the same. If one tab group is chosen a value that does not exist in another tab group with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId"),", the tab group with the missing value won't change its tab. You can see that from the following example. Try to select Linux, and the above tab groups don't change."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\n    I am Windows.\n  </TabItem>\n  <TabItem value="mac" label="macOS">\n    I am macOS.\n  </TabItem>\n  <TabItem value="linux" label="Linux">\n    I am Linux.\n  </TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,l.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,l.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux."))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Tab choices with different group IDs will not interfere with each other:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Windows in windows.</TabItem>\n  <TabItem value="mac" label="macOS">macOS is macOS.</TabItem>\n</Tabs>\n\n// highlight-next-line\n<Tabs groupId="non-mac-operating-systems">\n  <TabItem value="win" label="Windows">Windows is windows.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows in windows."),(0,l.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"macOS is macOS.")),(0,l.kt)(r.Z,{groupId:"non-mac-operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Windows is windows."),(0,l.kt)(o.Z,{value:"unix",label:"Unix",mdxType:"TabItem"},"Unix is unix."))),(0,l.kt)("h2",{id:"customizing-tabs"},"Customizing tabs"),(0,l.kt)("p",null,"You might want to customize the appearance of a certain set of tabs. You can pass the string in ",(0,l.kt)("inlineCode",{parentName:"p"},"className")," prop, and the specified CSS class will be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," component:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// highlight-next-line\n<Tabs className="unique-tabs">\n  <TabItem value="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(o.Z,{value:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(o.Z,{value:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,l.kt)("h3",{id:"customizing-tab-headings"},"Customizing tab headings"),(0,l.kt)("p",null,"You can also customize each tab heading independently by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"attributes")," field. The extra props can be passed to the headings either through the ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," prop in ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs"),", or props of each ",(0,l.kt)("inlineCode",{parentName:"p"},"TabItem"),"\u2014in the same way as you declare ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="some-doc.mdx"',title:'"some-doc.mdx"'},'import styles from \'./styles.module.css\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" attributes={{className: styles.red}}>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange" attributes={{className: styles.orange}}>\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana" attributes={{className: styles.yellow}}>\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},".red {\n  color: red;\n}\n.red[aria-selected='true'] {\n  border-bottom-color: red;\n}\n\n.orange {\n  color: orange;\n}\n.orange[aria-selected='true'] {\n  border-bottom-color: orange;\n}\n\n.yellow {\n  color: yellow;\n}\n.yellow[aria-selected='true'] {\n  border-bottom-color: yellow;\n}\n")),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"apple",label:"Apple",attributes:{className:i.red},mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(o.Z,{value:"orange",label:"Orange",attributes:{className:i.orange},mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,l.kt)(o.Z,{value:"banana",label:"Banana",attributes:{className:i.yellow},mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"className")," would be merged with other default class names. You may also use a custom ",(0,l.kt)("inlineCode",{parentName:"p"},"data-value")," field (",(0,l.kt)("inlineCode",{parentName:"p"},"{'data-value': 'apple'}"),") paired with CSS attribute selectors:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="styles.module.css"',title:'"styles.module.css"'},"li[role='tab'][data-value='apple'] {\n  color: red;\n}\n"))),(0,l.kt)("h2",{id:"query-string"},"Query string"),(0,l.kt)("p",null,"It is possible to persist the selected tab into the url search parameters. This enables you to share a link to a page which pre-selects the tab - linking from your Android app to documentation with the Android tabs pre-selected. This feature does not provide an anchor link - the browser will not scroll to the tab."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"queryString")," prop to enable this feature and define the search param name to use."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\n<Tabs queryString="current-os">\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{queryString:"current-os",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},"Android"),(0,l.kt)(o.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"iOS"))),(0,l.kt)("p",null,"As soon as a tab is clicked, a search parameter is added at the end of the url: ",(0,l.kt)("inlineCode",{parentName:"p"},"?current-os=android")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"?current-os=ios"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"queryString")," can be used together with ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId"),"."),(0,l.kt)("p",{parentName:"admonition"},"For convenience, when the ",(0,l.kt)("inlineCode",{parentName:"p"},"queryString")," prop is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," value will be used as a fallback."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\n<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n')),(0,l.kt)(c,{mdxType:"BrowserWindow"},(0,l.kt)(r.Z,{queryString:!0,groupId:"current-os",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"android",label:"Android",mdxType:"TabItem"},"Android"),(0,l.kt)(o.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},"iOS"))),(0,l.kt)("p",{parentName:"admonition"},"When the page loads, the tab query string choice will be restored in priority over the ",(0,l.kt)("inlineCode",{parentName:"p"},"groupId")," choice (using ",(0,l.kt)("inlineCode",{parentName:"p"},"localStorage"),").")))}k.isMDXComponent=!0}}]);