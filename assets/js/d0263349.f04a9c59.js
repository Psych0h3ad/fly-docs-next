"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[8972],{70229:(i,n,e)=>{e.d(n,{Ay:()=>a,RM:()=>c});var d=e(74848),s=e(28453),l=e(67194);const c=[{value:"\u641c\u7d22CAN ID",id:"\u641c\u7d22can-id",level:2}];function r(i){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u641c\u7d22can-id",children:"\u641c\u7d22CAN ID"}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsx)(n.p,{children:"\u67e5\u627eCANBus UUID\u9700\u8981\u505c\u6b62Klipper\u670d\u52a1\uff0c\u8bf7\u4e0d\u8981\u5728\u6253\u5370\u8fc7\u7a0b\u4e2d\u64cd\u4f5c\u3002"})}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u4e0a\u4f4d\u673a\u7684can\u7f51\u7edc\u3001\u6865\u63a5\u4e3b\u677f\u7684CAN\u901f\u7387\u3001CAN\u5de5\u5177\u677f\u7684\u901f\u7387\u5b8c\u5168\u4e00\u81f4"})}),"\n",(0,d.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,d.jsxs)(n.p,{children:["\u6709",(0,d.jsx)(n.code,{children:"1d50:606f"}),"\u65f6\u5019\u624d\u80fd\u4f7f\u7528\u4e0b\u65b9\u547d\u4ee4\u641c\u7d22CAN ID"]})}),"\n",(0,d.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,d.jsx)(n.p,{children:"\u5982\u679c\u662f\u5237\u4e86\u6865\u63a5\u56fa\u4ef6\u7684\u4e3b\u677f\u5efa\u8bae\u63a5\u4e0a\u4e3b\u677fPOWER\u7535\u6e90\u540e\u5728\u627eCANID"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u662f\u4e4b\u524d\u5728",(0,d.jsx)(n.code,{children:"printer.cfg"}),"\u914d\u7f6e\u8fc7\u5bf9\u5e94\u4e3b\u677f\u7684CAN UUID,\u9700\u8981\u5220\u9664\u6216\u8005\u5c4f\u853d\u540e\u4fdd\u5b58\u914d\u7f6e\u5e76\u4e14\u91cd\u542fKlipper"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u505c\u6b62Klipper\u670d\u52a1\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop klipper\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u8be2CANBus UUID\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4f1a\u8f93\u51fa\u7c7b\u4f3c\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"}),"\n",(0,d.jsx)(l.A,{image:e(72641).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u51fa\u73b0 ",(0,d.jsx)(n.code,{children:"Found canbus_uuid=b7c79ec3f948, Application: Klipper"})," \u5219\u67e5\u627e\u5230\u8bbe\u5907ID\uff0c\u5176\u4e2d ",(0,d.jsx)(n.code,{children:"b7c79ec3f948"})," \u4e3a\u8bbe\u5907UUID\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"Application: Klipper"}),", \u8868\u793a\u8fd9\u4e2aUUID\u5bf9\u5e94\u7684\u4e3b\u677f\u6b63\u5728\u8fd0\u884c\u7684\u56fa\u4ef6\u4e3aKlipper"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5982\u679cApplication:\u540e\u9762\u663e\u793a",(0,d.jsx)(n.code,{children:"CANBOOT"}),"\u6216\u8005",(0,d.jsx)(n.code,{children:"Katapult"}),"\u5219\u9700\u8981\u70e7\u5f55Kipper\u56fa\u4ef6\uff0c\u5426\u5219\u65e0\u6cd5\u6b63\u5e38\u8fde\u63a5"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsx)(n.p,{children:"\u5982\u679c\u662fUSB\u6865\u63a5CAN\u56fa\u4ef6\uff0c\u5219\u67e5\u8be2\u5230\u7684\u7b2c\u4e00\u4e2aUUID\u59cb\u7ec8\u4e3a\u6865\u63a5\u4e3b\u677f\u81ea\u8eab\u7684UUID\u3002\u5982\u679c\u8fd8\u8fde\u63a5\u4e86CAN\u5de5\u5177\u677f\uff0c\u5219\u81f3\u5c11\u67e5\u8be2\u5230\u4e24\u4e2aUUID\u624d\u5bf9\u3002"})}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u7684UUID\uff0c\u5219\u9700\u8981\u4ed4\u7ec6\u68c0\u67e5\u4e0b\u9762\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u6b63\u786e\u8fde\u63a5\u4e86\u4e3b\u677f\u6216CAN\u5de5\u5177\u677f"}),"\n",(0,d.jsx)(n.li,{children:"\u662f\u5426\u6b63\u786e\u4f9b\u7535"}),"\n",(0,d.jsx)(n.li,{children:"\u4e0a\u4f4d\u673a\u662f\u5426\u652f\u6301CAN\u7f51\u7edc"}),"\n",(0,d.jsx)(n.li,{children:"\u56fa\u4ef6\u7f16\u8bd1\u662f\u5426\u6b63\u786e"}),"\n",(0,d.jsxs)(n.li,{children:["\u5982\u679c\u8fd8\u662f\u65e0\u6cd5\u627e\u5230id\uff0c\u8bf7\u770b\u6b64\u5904\u6587\u6863:",(0,d.jsx)(n.a,{href:"/docs/DebugDoc/faq/klipper_can",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"CAN\u95ee\u9898\u5408\u96c6"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u542f\u52a8Klipper\u670d\u52a1\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start klipper\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6253\u5f00\u6253\u5370\u673a\u7f51\u9875\u754c\u9762\uff0c\u5728\u5de6\u4fa7\u8fb9\u680f\u7684\u914d\u7f6e\u9009\u9879\u91cc\u627e\u5230\uff1afluidd\u4e3a\uff1a",(0,d.jsx)(n.code,{children:"{\u2026}"})," \uff1bmainsail\u4e3a\uff1a",(0,d.jsx)(n.code,{children:"\u673a\u5668"}),"\uff0c\u70b9\u51fb\u8fdb\u53bb\uff0c\u5373\u53ef\u627e\u5230 ",(0,d.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,d.jsx)(l.A,{image:e(97488).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5c06\u67e5\u8be2\u5230\u7684UUID\u590d\u5236\uff0c\u586b\u5199\u5230 ",(0,d.jsx)(n.code,{children:"printer.cfg"})," \u914d\u7f6e\u91cc\u7684 ",(0,d.jsx)(n.code,{children:"[mcu]"})," \u8282\u70b9\u7684 ",(0,d.jsx)(n.code,{children:"canbus_uuid: "})," \u3002\u4fdd\u5b58\u91cd\u542f\u540e\u5373\u53ef\u8fde\u4e0a\u4e3b\u677f\u3002\u82e5Klipper\u63d0\u793a ",(0,d.jsx)(n.code,{children:"ADC out of range"}),"\u4e3a\u6b63\u5e38\u73b0\u8c61\uff0c\u5c06\u70ed\u5e8a\u548c\u70ed\u654f\u8fde\u63a5\u597d\uff0c\u914d\u7f6e\u597d\u55b7\u5934\u3001\u70ed\u5e8a\u7684\u70ed\u654f\u5f15\u811a\u548c\u8f93\u51fa\u5f15\u811a\uff0c\u518d\u4fdd\u5b58\u91cd\u542f\u5373\u53ef\u3002"]}),"\n",(0,d.jsx)(l.A,{image:e(36796).A,size:"50%",align:"left"}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6587\u6863\u4e2d\u6240\u51fa\u73b0\u7684\u6240\u6709ID\u5747\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u6bcf\u4e2a\u4e3b\u677f\u7684ID\u5747\u4e0d\u4e00\u81f4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u83b7\u53d6\u5230\u7684ID\u4fee\u6539\u586b\u5199\u3002"})}),"\n"]}),"\n"]})]})}function a(i={}){const{wrapper:n}={...(0,s.R)(),...i.components};return n?(0,d.jsx)(n,{...i,children:(0,d.jsx)(r,{...i})}):r(i)}},33515:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>A,toc:()=>t});var d=e(74848),s=e(28453),l=e(67194),c=e(70229);const r={sidebar_position:8,sidebar_label:"CAN\u6865\u63a5"},a="CAN\u6865\u63a5",A={id:"ProductDoc/MainBoard/fly-d/fly-d7/canbridge",title:"CAN\u6865\u63a5",description:"CAN\u603b\u7ebf\u662f\u4e00\u79cd\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7684\u4e32\u884c\u901a\u8baf\u534f\u8bae\u603b\u7ebf\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u53cc\u7ede\u7ebf\u6765\u4f20\u8f93\u4fe1\u53f7\uff0c\u662f\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u73b0\u573a\u603b\u7ebf\u4e4b\u4e00\u3002CAN\u534f\u8bae\u7528\u4e8e\u6c7d\u8f66\u4e2d\u5404\u79cd\u4e0d\u540c\u5143\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4ee5\u6b64\u53d6\u4ee3\u6602\u8d35\u800c\u7b28\u91cd\u7684\u914d\u7535\u7ebf\u675f\u3002\u8be5\u534f\u8bae\u7684\u5065\u58ee\u6027\u4f7f\u5176\u7528\u9014\u5ef6\u4f38\u5230\u5176\u4ed6\u81ea\u52a8\u5316\u548c\u5de5\u4e1a\u5e94\u7528\u3002CAN\u534f\u8bae\u7684\u7279\u6027\u5305\u62ec\u5b8c\u6574\u6027\u7684\u4e32\u884c\u6570\u636e\u901a\u8baf\u3001\u63d0\u4f9b\u5b9e\u65f6\u652f\u6301\u3001\u4f20\u8f93\u901f\u7387\u9ad8\u8fbe1Mb/s\u3001\u540c\u65f6\u5177\u670911\u4f4d\u7684\u5bfb\u5740\u4ee5\u53ca\u68c0\u9519\u80fd\u529b\u3002",source:"@site/docs/ProductDoc/MainBoard/fly-d/fly-d7/canbridge.mdx",sourceDirName:"ProductDoc/MainBoard/fly-d/fly-d7",slug:"/ProductDoc/MainBoard/fly-d/fly-d7/canbridge",permalink:"/fly-docs-next/docs/ProductDoc/MainBoard/fly-d/fly-d7/canbridge",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d7/canbridge.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"CAN\u6865\u63a5"},sidebar:"tutorialSidebar",previous:{title:"Klipper\u53c2\u8003\u914d\u7f6e",permalink:"/fly-docs-next/docs/ProductDoc/MainBoard/fly-d/fly-d7/cfg"},next:{title:"BL\u70e7\u5f55",permalink:"/fly-docs-next/docs/ProductDoc/MainBoard/fly-d/fly-d7/bl"}},o={},t=[{value:"\u5de5\u5177\u677f\u4f7f\u7528CAN\u8fde\u63a5\u4e3b\u677f",id:"\u5de5\u5177\u677f\u4f7f\u7528can\u8fde\u63a5\u4e3b\u677f",level:2},{value:"\u5237\u4e3b\u677f\u56fa\u4ef6",id:"\u5237\u4e3b\u677f\u56fa\u4ef6",level:2},{value:"\u641c\u7d22id",id:"\u641c\u7d22id",level:2},...c.RM];function h(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...i.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"can\u6865\u63a5",children:"CAN\u6865\u63a5"}),"\n",(0,d.jsx)(n.p,{children:"CAN\u603b\u7ebf\u662f\u4e00\u79cd\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7684\u4e32\u884c\u901a\u8baf\u534f\u8bae\u603b\u7ebf\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u53cc\u7ede\u7ebf\u6765\u4f20\u8f93\u4fe1\u53f7\uff0c\u662f\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u73b0\u573a\u603b\u7ebf\u4e4b\u4e00\u3002CAN\u534f\u8bae\u7528\u4e8e\u6c7d\u8f66\u4e2d\u5404\u79cd\u4e0d\u540c\u5143\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4ee5\u6b64\u53d6\u4ee3\u6602\u8d35\u800c\u7b28\u91cd\u7684\u914d\u7535\u7ebf\u675f\u3002\u8be5\u534f\u8bae\u7684\u5065\u58ee\u6027\u4f7f\u5176\u7528\u9014\u5ef6\u4f38\u5230\u5176\u4ed6\u81ea\u52a8\u5316\u548c\u5de5\u4e1a\u5e94\u7528\u3002CAN\u534f\u8bae\u7684\u7279\u6027\u5305\u62ec\u5b8c\u6574\u6027\u7684\u4e32\u884c\u6570\u636e\u901a\u8baf\u3001\u63d0\u4f9b\u5b9e\u65f6\u652f\u6301\u3001\u4f20\u8f93\u901f\u7387\u9ad8\u8fbe1Mb/s\u3001\u540c\u65f6\u5177\u670911\u4f4d\u7684\u5bfb\u5740\u4ee5\u53ca\u68c0\u9519\u80fd\u529b\u3002\n3D\u6253\u5370\u673a\u4e0a\u4f7f\u7528CAN\u603b\u7ebf\u6765\u51cf\u5c11\u6253\u5370\u5934\u8fde\u63a5\u5230\u4e3b\u677f\u7684\u8d70\u7ebf\u6570\u91cf\uff0c\u539f\u6765\u9700\u8981\u5341\u51e0\u6839\u7ebf\uff0c\u4f7f\u7528CAN\u540e\u53ea\u9700\u8981\u4f7f\u7528\u56db\u6839\u7ebf\u5373\u53ef\uff0c\u5927\u5927\u51cf\u5c11\u8d70\u7ebf\u6570\u91cf\uff0c\u964d\u4f4e\u5e03\u7ebf\u96be\u5ea6\u3002\n\u672c\u7ae0\u53ea\u7b80\u8981\u6982\u8ff0\u6865\u63a5CAN\u7684\u4f7f\u7528\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5de5\u5177\u677f\u4f7f\u7528can\u8fde\u63a5\u4e3b\u677f",children:"\u5de5\u5177\u677f\u4f7f\u7528CAN\u8fde\u63a5\u4e3b\u677f"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6ce8\u610f\u5de5\u5177\u677f\u7535\u6e90\u7ebf\u4e0d\u662f\u63a5\u5230CAN\u53e3\uff0c\u662f\u63a5\u523012V-24v\u7535\u6e90\u7ebf\u4e0a"}),"\n"]}),"\n",(0,d.jsx)(l.A,{image:e(59085).A,size:"80%",align:"center"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6ce8\u610f120\u03a9\u8df3\u7ebf\u8981\u63a5\u4e0a"}),"\n"]}),"\n",(0,d.jsx)(l.A,{image:e(10771).A,size:"80%",align:"center"}),"\n",(0,d.jsx)(n.h2,{id:"\u5237\u4e3b\u677f\u56fa\u4ef6",children:"\u5237\u4e3b\u677f\u56fa\u4ef6"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8bf7\u786e\u4fddD7\u4e3b\u677f\u70e7\u5f55\u7684\u56fa\u4ef6\u662f",(0,d.jsx)(n.code,{children:"USB\u6865\u63a5CAN\u56fa\u4ef6\u914d\u7f6e"}),"\n",(0,d.jsx)(n.a,{href:"/fly-docs-next/docs/ProductDoc/MainBoard/fly-d/fly-d7/flash",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"D7\u70e7\u5f55\u56fa\u4ef6"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u641c\u7d22id",children:"\u641c\u7d22id"}),"\n",(0,d.jsx)(c.Ay,{})]})}function x(i={}){const{wrapper:n}={...(0,s.R)(),...i.components};return n?(0,d.jsx)(n,{...i,children:(0,d.jsx)(h,{...i})}):h(i)}},72641:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/canbus-uuid-9df7aa98e15c0c5c409d5fd085dc7df8.png"},36796:(i,n,e)=>{e.d(n,{A:()=>d});const d="data:image/png;base64,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"},97488:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/fluidd-cfg-1afd269b70fe36351d23dccfed0bf08c.png"},10771:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/120-535c39177167313e1a52a7dc890ea6c4.png"},59085:(i,n,e)=>{e.d(n,{A:()=>d});const d=e.p+"assets/images/canbridge-5340a981615b47458f48b9c1a2b8b502.png"}}]);