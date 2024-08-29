"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[1570],{77306:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(74848),t=n(28453),a=(n(81386),n(79635),n(67194));const l={sidebar_position:11,sidebar_label:"I2C\u4f7f\u7528"},s="I2C\u4f7f\u7528",i={id:"ProductDoc/SBC/fly-pi/i2c",title:"I2C\u4f7f\u7528",description:"* \u4f7f\u7528\u4e0a\u4f4d\u673a40PIN\u7684I2C\u63a5\u53e3",source:"@site/docs/ProductDoc/SBC/fly-pi/i2c.mdx",sourceDirName:"ProductDoc/SBC/fly-pi",slug:"/ProductDoc/SBC/fly-pi/i2c",permalink:"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi/i2c",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi/i2c.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"I2C\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u677f\u8f7d40PIN\u811a\u56fe",permalink:"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi/pins"},next:{title:"FLY-Pi-V2",permalink:"/fly-docs-next/ja/docs/category/fly-pi-v2"}},c={},o=[{value:"\u901a\u8fc7FLY Tools\u6253\u5f00I2C",id:"\u901a\u8fc7fly-tools\u6253\u5f00i2c",level:2},{value:"\u63a5\u7ebf\u5e76\u4e14\u641c\u7d22",id:"\u63a5\u7ebf\u5e76\u4e14\u641c\u7d22",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}];function u(e){const A={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.header,{children:(0,r.jsx)(A.h1,{id:"i2c\u4f7f\u7528",children:"I2C\u4f7f\u7528"})}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"\u4f7f\u7528\u4e0a\u4f4d\u673a40PIN\u7684I2C\u63a5\u53e3"}),"\n",(0,r.jsx)(A.li,{children:"\u672c\u6b21\u6559\u7a0b\u4f7f\u7528FLY-PI V2LM75\u7684I2C\u4f20\u611f\u5668\u4e0eI2C2\u505a\u793a\u4f8b\uff01\uff01\uff01"}),"\n",(0,r.jsx)(A.li,{children:"\u8bf7\u6ce8\u610fI2C1\u88ab\u5176\u4ed6\u8bbe\u5907\u5df2\u7ecf\u5360\u7528\u662f\u65e0\u6cd5\u4f7f\u7528\uff01\uff01\uff01"}),"\n",(0,r.jsx)(A.li,{children:"\u8bf7\u786e\u4fdd\u63a5\u7ebf\u7262\u56fa\u7a33\u5b9a\uff01\uff01\uff01"}),"\n"]}),"\n",(0,r.jsx)(A.h2,{id:"\u901a\u8fc7fly-tools\u6253\u5f00i2c",children:"\u901a\u8fc7FLY Tools\u6253\u5f00I2C"}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"\u627e\u5230Overlays \u5e76\u4e14\u5728\u540e\u9762\u9009\u62e9i2c2\u4e0ei2c0"}),"\n",(0,r.jsx)(A.li,{children:"\u8bf7\u6ce8\u610fI2C1\u88ab\u5176\u4ed6\u8bbe\u5907\u5df2\u7ecf\u5360\u7528\u662f\u65e0\u6cd5\u4f7f\u7528!!!"}),"\n",(0,r.jsx)(A.li,{children:"\u4fdd\u5b58\u5e76\u4e14\u91cd\u542f"}),"\n"]}),"\n",(0,r.jsx)(a.A,{image:n(31905).A,size:"80%",align:"center"}),"\n",(0,r.jsx)(A.h2,{id:"\u63a5\u7ebf\u5e76\u4e14\u641c\u7d22",children:"\u63a5\u7ebf\u5e76\u4e14\u641c\u7d22"}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"\u672c\u6559\u7a0b\u4f7f\u7528PI V2\u505a\u53c2\u8003"}),"\n"]}),"\n",(0,r.jsx)(a.A,{image:n(58951).A,size:"80%",align:"center"}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"\u4f7f\u7528SSH\u8fde\u63a5FLY\u4e0a\u4f4d\u673a\u540e\u8f93\u5165\u4e0b\u65b9\u6307\u4ee4\u5c06\u8f93\u51fa\u4e0b\u9762\u5185\u5bb9"}),"\n",(0,r.jsxs)(A.li,{children:["\u5982\u679c\u4f7f\u7528",(0,r.jsx)(A.code,{children:"I2C0"}),"\u5219\u9700\u8981\u5c06\u4e0b\u65b9\u6307\u4ee4\u7684",(0,r.jsx)(A.code,{children:"2"}),"\u66ff\u6362\u6210",(0,r.jsx)(A.code,{children:"0"})]}),"\n"]}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-cfg",children:"sudo i2cdetect -y -r 2\n"})}),"\n",(0,r.jsx)(a.A,{image:n(90476).A,size:"80%",align:"center"}),"\n",(0,r.jsxs)(A.ul,{children:["\n",(0,r.jsx)(A.li,{children:"\u8bf7\u6ce8\u610f\u5982\u679c\u4e00\u5207\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u56de\u8f66\u540e\u662f\u7acb\u523b\u51fa\u73b0\u4e0a\u65b9\u7684\u5185\u5bb9\u4f1a\u9644\u5e26\u4e00\u4e2a\u5730\u5740"}),"\n",(0,r.jsx)(A.li,{children:"\u8bf7\u6ce8\u610f\u5730\u5740\u662f\u968f\u673a\u7684"}),"\n",(0,r.jsx)(A.li,{children:"\u8bf7\u6ce8\u610f\u5982\u679c\u7ebf\u6ca1\u63a5\u5bf9\uff0c\u7ebf\u63a5\u53cd\uff0c\u914d\u7f6e\u6ca1\u6253\u5f00\u4e0e\u6a21\u5757\u635f\u574f\u8fd9\u51e0\u79cd\u60c5\u51b5\u4e0b\u662f\u8f93\u51fa\u4e0d\u6b63\u5e38"}),"\n",(0,r.jsxs)(A.li,{children:["\u5730\u5740\u9700\u8981\u81ea\u5df1\u4ece\u5341\u516d\u8fdb\u5236\u6362\u7b97\u5230\u5341\u8fdb\u5236\u5728\u586b\u5199\u5230\u914d\u7f6e\u4e2d\u7684",(0,r.jsx)(A.code,{children:"i2c_address:"}),"\u540e\u9762"]}),"\n",(0,r.jsx)(A.li,{children:"\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u641c\u7d22\u5728\u7ebf\u8fdb\u5236\u8f6c\u6362\u5668\u6765\u8f6c\u6362"}),"\n"]}),"\n",(0,r.jsx)(A.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(A.pre,{children:(0,r.jsx)(A.code,{className:"language-cfg",children:"[mcu host]\nserial: /tmp/klipper_host_mcu\n\n[temperature_sensor my_sensor]\nsensor_type: LM75\ni2c_address:72\n# #   Default is 72 (0x48). Normal range is 72-79 (0x48-0x4F) and the 3\n# #   low bits of the address are configured via pins on the chip\n# #   (usually with jumpers or hard wired).\ni2c_mcu:host\ni2c_bus:i2c.2\n# i2c_software_scl\n\n"})})]})}function d(e={}){const{wrapper:A}={...(0,t.R)(),...e.components};return A?(0,r.jsx)(A,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79635:(e,A,n)=>{n.d(A,{A:()=>l});n(96540);var r=n(34164);const t={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:A,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:n,children:A})}},81386:(e,A,n)=>{n.d(A,{A:()=>D});var r=n(96540),t=n(34164),a=n(23104),l=n(56347),s=n(205),i=n(57485),c=n(31682),o=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:A}=e;return!!A&&"object"==typeof A&&"value"in A}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:A,children:n}=e;return(0,r.useMemo)((()=>{const e=A??function(e){return u(e).map((e=>{let{props:{value:A,label:n,attributes:r,default:t}}=e;return{value:A,label:n,attributes:r,default:t}}))}(n);return function(e){const A=(0,c.XI)(e,((e,A)=>e.value===A.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[A,n])}function g(e){let{value:A,tabValues:n}=e;return n.some((e=>e.value===A))}function h(e){let{queryString:A=!1,groupId:n}=e;const t=(0,l.W6)(),a=function(e){let{queryString:A=!1,groupId:n}=e;if("string"==typeof A)return A;if(!1===A)return null;if(!0===A&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:A,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const A=new URLSearchParams(t.location.search);A.set(a,e),t.replace({...t.location,search:A.toString()})}),[a,t])]}function I(e){const{defaultValue:A,queryString:n=!1,groupId:t}=e,a=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:A,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(A){if(!g({value:A,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return A}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:A,tabValues:a}))),[c,u]=h({queryString:n,groupId:t}),[I,B]=function(e){let{groupId:A}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(A),[t,a]=(0,o.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),f=(()=>{const e=c??I;return g({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),B(e)}),[u,B,a]),tabValues:a}}var B=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(74848);function b(e){let{className:A,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),o=e=>{const A=e.currentTarget,n=i.indexOf(A),t=s[n].value;t!==r&&(c(A),l(t))},u=e=>{let A=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;A=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;A=i[n]??i[i.length-1];break}}A?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},A),children:s.map((e=>{let{value:A,label:n,attributes:a}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:r===A?0:-1,"aria-selected":r===A,ref:e=>i.push(e),onKeyDown:u,onClick:o,...a,className:(0,t.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===A}),children:n??A},A)}))})}function E(e){let{lazy:A,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(A){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:l.map(((e,A)=>(0,r.cloneElement)(e,{key:A,hidden:e.props.value!==a})))})}function v(e){const A=I(e);return(0,p.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,p.jsx)(b,{...A,...e}),(0,p.jsx)(E,{...A,...e})]})}function D(e){const A=(0,B.A)();return(0,p.jsx)(v,{...e,children:u(e.children)},String(A))}},31905:(e,A,n)=>{n.d(A,{A:()=>r});const r=n.p+"assets/images/i2c-ed6c19f20d70422b1bdd554489e264d4.png"},90476:(e,A,n)=>{n.d(A,{A:()=>r});const r="data:image/png;base64,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"},58951:(e,A,n)=>{n.d(A,{A:()=>r});const r=n.p+"assets/images/i2c2-1469e330f17723a460ee06f871361ce4.png"}}]);