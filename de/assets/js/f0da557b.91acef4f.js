"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[85],{54410:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var n=l(74848),r=l(28453),s=l(67194);const d={sidebar_position:1,sidebar_label:"\u7b80\u4ecb"},t="\u7b80\u4ecb",c={id:"ProductDoc/SBC/fly-pi/index",title:"\u7b80\u4ecb",description:"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u5168\u65b0\u7684FLY-\u03c0\u4e3b\u677f\u3002\u6b64\u677f\u53ef\u66ff\u4ee3\u6811\u8393\u6d3e\u4f5c\u4e3a\u4e0a\u4f4d\u673a\u8fd0\u884c\uff0c\u5b83\u62e5\u6709\u67091GB\u7684\u677f\u8f7dDDR3\u5185\u5b58\uff0c\u5141\u8bb8\u8fd0\u884c\u5b8c\u6574\u7684LINUX\u684c\u9762\uff08\u57fa\u4e8e Armbian\u5b9a\u5236\u4f18\u5316\uff09\u3002\u8be5\u677f\u53ef\u4e0eKlipper\u548cRRF\u56fa\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u4f7f\u7528SHT\u5de5\u5177\u677f\u65f6\u8fd0\u884cKlipper\u5c4f\u5e55\u3002",source:"@site/docs/ProductDoc/SBC/fly-pi/index.mdx",sourceDirName:"ProductDoc/SBC/fly-pi",slug:"/ProductDoc/SBC/fly-pi/",permalink:"/fly-docs-next/de/docs/ProductDoc/SBC/fly-pi/",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi/index.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:172198062e4,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u7b80\u4ecb"},sidebar:"tutorialSidebar",previous:{title:"FLY-Pi",permalink:"/fly-docs-next/de/docs/category/fly-pi"},next:{title:"\u7cfb\u7edf\u70e7\u5f55",permalink:"/fly-docs-next/de/docs/ProductDoc/SBC/fly-pi/fly-os"}},o={},p=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",id:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",level:2}];function a(e){const i={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,n.jsx)(i.p,{children:"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u5168\u65b0\u7684FLY-\u03c0\u4e3b\u677f\u3002\u6b64\u677f\u53ef\u66ff\u4ee3\u6811\u8393\u6d3e\u4f5c\u4e3a\u4e0a\u4f4d\u673a\u8fd0\u884c\uff0c\u5b83\u62e5\u6709\u67091GB\u7684\u677f\u8f7dDDR3\u5185\u5b58\uff0c\u5141\u8bb8\u8fd0\u884c\u5b8c\u6574\u7684LINUX\u684c\u9762\uff08\u57fa\u4e8e Armbian\u5b9a\u5236\u4f18\u5316\uff09\u3002\u8be5\u677f\u53ef\u4e0eKlipper\u548cRRF\u56fa\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u4f7f\u7528SHT\u5de5\u5177\u677f\u65f6\u8fd0\u884cKlipper\u5c4f\u5e55\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u8bbe\u8ba1\u8fd9\u6b3e\u4e0a\u4f4d\u673a\u7684\u76ee\u7684\u662f\u8ba9\u5ba2\u6237\u66f4\u5bb9\u6613\u4f7f\u7528Klipper\u56fa\u4ef6\u6216RRF\u56fa\u4ef6\u3002\u6211\u4eec\u5bf9LINUX\u7cfb\u7edf\u955c\u50cf\u8fdb\u884c\u4f18\u5316\uff0c\u66f4\u9002\u54083D\u6253\u5370\u673a\u4f7f\u7528\uff0c\u64cd\u4f5c\u5b89\u88c5\u4e5f\u66f4\u7b80\u5355\uff0c\u5c0f\u767d\u7a0d\u6709\u57fa\u7840\u4e5f\u80fd\u5f88\u5feb\u7684\u5b66\u4e60\u4f7f\u7528\u3002\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e0a\u4f4d\u673a\u677f\u5b50\u8282\u7701\u4e86\u5b66\u4e60\u6210\u672c\uff0c\u8ba9\u4f60\u53ef\u4ee5\u66f4\u4e13\u6ce8\u4e8e\u4eab\u53d73D\u6253\u5370\u5e26\u6765\u7684\u5feb\u4e50(\u8d2d\u4e70\u5e26SD\u5361\u7684\u5957\u9910\u9884\u88c5Klipper\u56fa\u4ef6\uff0c\u4e0a\u7535\u5c31\u80fd\u7528\u7701\u65f6\u53c8\u7701\u4e8b)\u3002\u5b89\u88c5\u4e5f\u66f4\u7b80\u5355\uff0c\u5c0f\u767d\u7a0d\u6709\u57fa\u7840\u4e5f\u80fd\u5f88\u5feb\u7684\u5b66\u4e60\u4f7f\u7528\u3002\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e0a\u4f4d\u673a\u677f\u5b50\u8282\u7701\u4e86\u5b66\u4e60\u6210\u672c\uff0c\u8ba9\u4f60\u53ef\u4ee5\u66f4\u4e13\u6ce8\u4e8e\u4eab\u53d73D\u6253\u5370\u5e26\u6765\u7684\u5feb\u4e50(\u8d2d\u4e70\u5e26SD\u5361\u7684\u5957\u9910\u9884\u88c5Klipper\u56fa\u4ef6\uff0c\u4e0a\u7535\u5c31\u80fd\u7528\u7701\u65f6\u53c8\u7701\u4e8b)\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"CPU\uff1a\u9ad8\u6027\u80fd\u5168\u5fd7H5\u82af\u7247\uff0c4\u683864\u4f4dCortex-A53"}),"\n",(0,n.jsx)(i.li,{children:"GPU\uff1a\u9ad8\u6027\u80fd6\u6838Mali 450\uff0c\u50cf\u7d20\u586b\u5145\u7387\u5927\u4e8e2.7gpixel/s"}),"\n",(0,n.jsx)(i.li,{children:"RAM\uff1a1GB DDR3\uff08\u4e0eGPU\u5171\u4eab\uff09(512+512)"}),"\n",(0,n.jsx)(i.li,{children:"ROM\uff1a\u652f\u6301\u6700\u5927128GB SDCARD"}),"\n",(0,n.jsx)(i.li,{children:"\u5916\u8bbe\uff1aSpi x2\uff0cUART x2\uff0cUSB x4\uff08USB 2.0 x3\uff0cOTG x1\uff09\uff0cMicro HDMI x1\uff0cEth x1\uff08100M\uff09\uff0cCAN x1\uff08\u9700\u5355\u72ec\u8d2d\u4e70CAN\u6a21\u5757\uff09"}),"\n",(0,n.jsx)(i.li,{children:"\u63a5\u53e3\uff1a\u677f\u8f7dM.2\u63a5\u53e3\uff0c\u53ef\u6269\u5c55WIFI\uff0ceMMC\u7b49\u3002\uff08\u79c1\u6709\u534f\u8bae\uff0c\u5207\u52ff\u8fde\u63a5\u975eFLY \u03c0\u4e13\u7528\u7684M.2\u8bbe\u5907\uff09"}),"\n",(0,n.jsx)(i.li,{children:"40Pin\u63a5\u53e3\uff0c\u517c\u5bb9\u6811\u8393\u6d3e"}),"\n",(0,n.jsx)(i.li,{children:"\u652f\u630112-24V\u76f4\u6d41\u4f9b\u7535\uff0c\u4f9b\u7535\u66f4\u7a33\u5b9a"}),"\n",(0,n.jsx)(i.li,{children:"\u9884\u7559\u4e86\u4e00\u4e2a5V\u53ef\u63a7\u98ce\u6247\u63a5\u53e3\uff0c\u53ef\u7528\u4e8e\u4e0a\u4f4d\u673a\u6563\u70ed"}),"\n",(0,n.jsx)(i.li,{children:"\u9884\u7559CAN\u6269\u5c55\u63a5\u53e3"}),"\n",(0,n.jsx)(i.li,{children:"\u4e3aKlipper\u5b9a\u5236\u7684\u7cfb\u7edf\uff0c\u65e0\u9700\u5b89\u88c5\u7cfb\u7edf\u7b49\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u5c0f\u767d\u66f4\u5bb9\u6613\u4e0a\u624b"}),"\n",(0,n.jsx)(i.li,{children:"\u7cfb\u7edf\u4e0eFLY-Gemini\u4e92\u76f8\u517c\u5bb9"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",children:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,n.jsx)(s.A,{image:l(44205).A,size:"80%",align:"center"}),"\n",(0,n.jsx)(i.hr,{})]})}function x(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},44205:(e,i,l)=>{l.d(i,{A:()=>n});const n=l.p+"assets/images/interface-d5d4e1c38aa3db4e094bc5f1663974bb.png"}}]);