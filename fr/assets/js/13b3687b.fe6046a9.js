"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[7203],{70229:(n,e,i)=>{i.d(e,{Ay:()=>a,RM:()=>l});var c=i(74848),s=i(28453),d=i(67194);const l=[{value:"\u641c\u7d22CAN ID",id:"\u641c\u7d22can-id",level:2}];function r(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u641c\u7d22can-id",children:"\u641c\u7d22CAN ID"}),"\n",(0,c.jsx)(e.admonition,{type:"danger",children:(0,c.jsx)(e.p,{children:"\u67e5\u627eCANBus UUID\u9700\u8981\u505c\u6b62Klipper\u670d\u52a1\uff0c\u8bf7\u4e0d\u8981\u5728\u6253\u5370\u8fc7\u7a0b\u4e2d\u64cd\u4f5c\u3002"})}),"\n",(0,c.jsx)(e.admonition,{type:"warning",children:(0,c.jsx)(e.p,{children:"\u8bf7\u786e\u4fdd\u4e0a\u4f4d\u673a\u7684can\u7f51\u7edc\u3001\u6865\u63a5\u4e3b\u677f\u7684CAN\u901f\u7387\u3001CAN\u5de5\u5177\u677f\u7684\u901f\u7387\u5b8c\u5168\u4e00\u81f4"})}),"\n",(0,c.jsx)(e.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,c.jsxs)(e.p,{children:["\u6709",(0,c.jsx)(e.code,{children:"1d50:606f"}),"\u65f6\u5019\u624d\u80fd\u4f7f\u7528\u4e0b\u65b9\u547d\u4ee4\u641c\u7d22CAN ID"]})}),"\n",(0,c.jsx)(e.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,c.jsx)(e.p,{children:"\u5982\u679c\u662f\u5237\u4e86\u6865\u63a5\u56fa\u4ef6\u7684\u4e3b\u677f\u5efa\u8bae\u63a5\u4e0a\u4e3b\u677fPOWER\u7535\u6e90\u540e\u5728\u627eCANID"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5982\u679c\u662f\u4e4b\u524d\u5728",(0,c.jsx)(e.code,{children:"printer.cfg"}),"\u914d\u7f6e\u8fc7\u5bf9\u5e94\u4e3b\u677f\u7684CAN UUID,\u9700\u8981\u5220\u9664\u6216\u8005\u5c4f\u853d\u540e\u4fdd\u5b58\u914d\u7f6e\u5e76\u4e14\u91cd\u542fKlipper"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u505c\u6b62Klipper\u670d\u52a1\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"sudo systemctl stop klipper\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u8be2CANBus UUID\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4f1a\u8f93\u51fa\u7c7b\u4f3c\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"}),"\n",(0,c.jsx)(d.A,{image:i(72641).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u51fa\u73b0 ",(0,c.jsx)(e.code,{children:"Found canbus_uuid=b7c79ec3f948, Application: Klipper"})," \u5219\u67e5\u627e\u5230\u8bbe\u5907ID\uff0c\u5176\u4e2d ",(0,c.jsx)(e.code,{children:"b7c79ec3f948"})," \u4e3a\u8bbe\u5907UUID\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Application: Klipper"}),", \u8868\u793a\u8fd9\u4e2aUUID\u5bf9\u5e94\u7684\u4e3b\u677f\u6b63\u5728\u8fd0\u884c\u7684\u56fa\u4ef6\u4e3aKlipper"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5982\u679cApplication:\u540e\u9762\u663e\u793a",(0,c.jsx)(e.code,{children:"CANBOOT"}),"\u6216\u8005",(0,c.jsx)(e.code,{children:"Katapult"}),"\u5219\u9700\u8981\u70e7\u5f55Kipper\u56fa\u4ef6\uff0c\u5426\u5219\u65e0\u6cd5\u6b63\u5e38\u8fde\u63a5"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.admonition,{type:"tip",children:(0,c.jsx)(e.p,{children:"\u5982\u679c\u662fUSB\u6865\u63a5CAN\u56fa\u4ef6\uff0c\u5219\u67e5\u8be2\u5230\u7684\u7b2c\u4e00\u4e2aUUID\u59cb\u7ec8\u4e3a\u6865\u63a5\u4e3b\u677f\u81ea\u8eab\u7684UUID\u3002\u5982\u679c\u8fd8\u8fde\u63a5\u4e86CAN\u5de5\u5177\u677f\uff0c\u5219\u81f3\u5c11\u67e5\u8be2\u5230\u4e24\u4e2aUUID\u624d\u5bf9\u3002"})}),"\n",(0,c.jsx)(e.admonition,{type:"warning",children:(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u7684UUID\uff0c\u5219\u9700\u8981\u4ed4\u7ec6\u68c0\u67e5\u4e0b\u9762\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u68c0\u67e5\u662f\u5426\u6b63\u786e\u8fde\u63a5\u4e86\u4e3b\u677f\u6216CAN\u5de5\u5177\u677f"}),"\n",(0,c.jsx)(e.li,{children:"\u662f\u5426\u6b63\u786e\u4f9b\u7535"}),"\n",(0,c.jsx)(e.li,{children:"\u4e0a\u4f4d\u673a\u662f\u5426\u652f\u6301CAN\u7f51\u7edc"}),"\n",(0,c.jsx)(e.li,{children:"\u56fa\u4ef6\u7f16\u8bd1\u662f\u5426\u6b63\u786e"}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u8fd8\u662f\u65e0\u6cd5\u627e\u5230id\uff0c\u8bf7\u770b\u6b64\u5904\u6587\u6863:",(0,c.jsx)(e.a,{href:"/docs/DebugDoc/faq/klipper_can",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"CAN\u95ee\u9898\u5408\u96c6"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u542f\u52a8Klipper\u670d\u52a1\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"sudo systemctl start klipper\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u6253\u5f00\u6253\u5370\u673a\u7f51\u9875\u754c\u9762\uff0c\u5728\u5de6\u4fa7\u8fb9\u680f\u7684\u914d\u7f6e\u9009\u9879\u91cc\u627e\u5230\uff1afluidd\u4e3a\uff1a",(0,c.jsx)(e.code,{children:"{\u2026}"})," \uff1bmainsail\u4e3a\uff1a",(0,c.jsx)(e.code,{children:"\u673a\u5668"}),"\uff0c\u70b9\u51fb\u8fdb\u53bb\uff0c\u5373\u53ef\u627e\u5230 ",(0,c.jsx)(e.code,{children:"printer.cfg"})]}),"\n",(0,c.jsx)(d.A,{image:i(97488).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:["\u5c06\u67e5\u8be2\u5230\u7684UUID\u590d\u5236\uff0c\u586b\u5199\u5230 ",(0,c.jsx)(e.code,{children:"printer.cfg"})," \u914d\u7f6e\u91cc\u7684 ",(0,c.jsx)(e.code,{children:"[mcu]"})," \u8282\u70b9\u7684 ",(0,c.jsx)(e.code,{children:"canbus_uuid: "})," \u3002\u4fdd\u5b58\u91cd\u542f\u540e\u5373\u53ef\u8fde\u4e0a\u4e3b\u677f\u3002\u82e5Klipper\u63d0\u793a ",(0,c.jsx)(e.code,{children:"ADC out of range"}),"\u4e3a\u6b63\u5e38\u73b0\u8c61\uff0c\u5c06\u70ed\u5e8a\u548c\u70ed\u654f\u8fde\u63a5\u597d\uff0c\u914d\u7f6e\u597d\u55b7\u5934\u3001\u70ed\u5e8a\u7684\u70ed\u654f\u5f15\u811a\u548c\u8f93\u51fa\u5f15\u811a\uff0c\u518d\u4fdd\u5b58\u91cd\u542f\u5373\u53ef\u3002"]}),"\n",(0,c.jsx)(d.A,{image:i(72641).A,size:"50%",align:"left"}),"\n",(0,c.jsx)(e.admonition,{type:"danger",children:(0,c.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u6587\u6863\u4e2d\u6240\u51fa\u73b0\u7684\u6240\u6709ID\u5747\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u6bcf\u4e2a\u4e3b\u677f\u7684ID\u5747\u4e0d\u4e00\u81f4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u83b7\u53d6\u5230\u7684ID\u4fee\u6539\u586b\u5199\u3002"})}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(r,{...n})}):r(n)}},9920:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var c=i(74848),s=i(28453),d=i(67194),l=i(70229);const r={sidebar_position:8,sidebar_label:"CAN\u6865\u63a5"},a="CAN\u6865\u63a5",o={id:"ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge",title:"CAN\u6865\u63a5",description:"CAN\u603b\u7ebf\u662f\u4e00\u79cd\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7684\u4e32\u884c\u901a\u8baf\u534f\u8bae\u603b\u7ebf\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u53cc\u7ede\u7ebf\u6765\u4f20\u8f93\u4fe1\u53f7\uff0c\u662f\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u73b0\u573a\u603b\u7ebf\u4e4b\u4e00\u3002CAN\u534f\u8bae\u7528\u4e8e\u6c7d\u8f66\u4e2d\u5404\u79cd\u4e0d\u540c\u5143\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4ee5\u6b64\u53d6\u4ee3\u6602\u8d35\u800c\u7b28\u91cd\u7684\u914d\u7535\u7ebf\u675f\u3002\u8be5\u534f\u8bae\u7684\u5065\u58ee\u6027\u4f7f\u5176\u7528\u9014\u5ef6\u4f38\u5230\u5176\u4ed6\u81ea\u52a8\u5316\u548c\u5de5\u4e1a\u5e94\u7528\u3002CAN\u534f\u8bae\u7684\u7279\u6027\u5305\u62ec\u5b8c\u6574\u6027\u7684\u4e32\u884c\u6570\u636e\u901a\u8baf\u3001\u63d0\u4f9b\u5b9e\u65f6\u652f\u6301\u3001\u4f20\u8f93\u901f\u7387\u9ad8\u8fbe1Mb/s\u3001\u540c\u65f6\u5177\u670911\u4f4d\u7684\u5bfb\u5740\u4ee5\u53ca\u68c0\u9519\u80fd\u529b\u3002",source:"@site/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge.mdx",sourceDirName:"ProductDoc/MainBoard/fly-micro/fly-micro4",slug:"/ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge",permalink:"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"CAN\u6865\u63a5"},sidebar:"tutorialSidebar",previous:{title:"Klipper\u53c2\u8003\u914d\u7f6e",permalink:"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/cfg"},next:{title:"BL\u70e7\u5f55",permalink:"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/bl"}},t={},p=[{value:"\u5de5\u5177\u677f\u4f7f\u7528CAN\u8fde\u63a5\u4e3b\u677f",id:"\u5de5\u5177\u677f\u4f7f\u7528can\u8fde\u63a5\u4e3b\u677f",level:2},{value:"\u5237\u4e3b\u677f\u56fa\u4ef6",id:"\u5237\u4e3b\u677f\u56fa\u4ef6",level:2},{value:"\u641c\u7d22id",id:"\u641c\u7d22id",level:2},...l.RM];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"can\u6865\u63a5",children:"CAN\u6865\u63a5"}),"\n",(0,c.jsx)(e.p,{children:"CAN\u603b\u7ebf\u662f\u4e00\u79cd\u7528\u4e8e\u5b9e\u65f6\u5e94\u7528\u7684\u4e32\u884c\u901a\u8baf\u534f\u8bae\u603b\u7ebf\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u53cc\u7ede\u7ebf\u6765\u4f20\u8f93\u4fe1\u53f7\uff0c\u662f\u4e16\u754c\u4e0a\u5e94\u7528\u6700\u5e7f\u6cdb\u7684\u73b0\u573a\u603b\u7ebf\u4e4b\u4e00\u3002CAN\u534f\u8bae\u7528\u4e8e\u6c7d\u8f66\u4e2d\u5404\u79cd\u4e0d\u540c\u5143\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u4ee5\u6b64\u53d6\u4ee3\u6602\u8d35\u800c\u7b28\u91cd\u7684\u914d\u7535\u7ebf\u675f\u3002\u8be5\u534f\u8bae\u7684\u5065\u58ee\u6027\u4f7f\u5176\u7528\u9014\u5ef6\u4f38\u5230\u5176\u4ed6\u81ea\u52a8\u5316\u548c\u5de5\u4e1a\u5e94\u7528\u3002CAN\u534f\u8bae\u7684\u7279\u6027\u5305\u62ec\u5b8c\u6574\u6027\u7684\u4e32\u884c\u6570\u636e\u901a\u8baf\u3001\u63d0\u4f9b\u5b9e\u65f6\u652f\u6301\u3001\u4f20\u8f93\u901f\u7387\u9ad8\u8fbe1Mb/s\u3001\u540c\u65f6\u5177\u670911\u4f4d\u7684\u5bfb\u5740\u4ee5\u53ca\u68c0\u9519\u80fd\u529b\u3002\n3D\u6253\u5370\u673a\u4e0a\u4f7f\u7528CAN\u603b\u7ebf\u6765\u51cf\u5c11\u6253\u5370\u5934\u8fde\u63a5\u5230\u4e3b\u677f\u7684\u8d70\u7ebf\u6570\u91cf\uff0c\u539f\u6765\u9700\u8981\u5341\u51e0\u6839\u7ebf\uff0c\u4f7f\u7528CAN\u540e\u53ea\u9700\u8981\u4f7f\u7528\u56db\u6839\u7ebf\u5373\u53ef\uff0c\u5927\u5927\u51cf\u5c11\u8d70\u7ebf\u6570\u91cf\uff0c\u964d\u4f4e\u5e03\u7ebf\u96be\u5ea6\u3002\n\u672c\u7ae0\u53ea\u7b80\u8981\u6982\u8ff0\u6865\u63a5CAN\u7684\u4f7f\u7528\u3002"}),"\n",(0,c.jsx)(e.h2,{id:"\u5de5\u5177\u677f\u4f7f\u7528can\u8fde\u63a5\u4e3b\u677f",children:"\u5de5\u5177\u677f\u4f7f\u7528CAN\u8fde\u63a5\u4e3b\u677f"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8bf7\u6ce8\u610f\u5de5\u5177\u677f\u7535\u6e90\u7ebf\u4e0d\u662f\u63a5\u5230CAN\u53e3\uff0c\u662f\u63a5\u523012V-24v\u7535\u6e90\u7ebf\u4e0a"}),"\n"]}),"\n",(0,c.jsx)(d.A,{image:i(2846).A,size:"80%",align:"center"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"\u8bf7\u6ce8\u610f120\u03a9\u8df3\u7ebf\u8981\u63a5\u4e0a"}),"\n"]}),"\n",(0,c.jsx)(d.A,{image:i(94156).A,size:"80%",align:"center"}),"\n",(0,c.jsx)(e.h2,{id:"\u5237\u4e3b\u677f\u56fa\u4ef6",children:"\u5237\u4e3b\u677f\u56fa\u4ef6"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u8bf7\u786e\u4fddD5\u4e3b\u677f\u70e7\u5f55\u7684\u56fa\u4ef6\u662f",(0,c.jsx)(e.code,{children:"USB\u6865\u63a5CAN\u56fa\u4ef6\u914d\u7f6e"}),"\n",(0,c.jsx)(e.a,{href:"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"D5\u70e7\u5f55\u56fa\u4ef6"})]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u641c\u7d22id",children:"\u641c\u7d22id"}),"\n",(0,c.jsx)(l.Ay,{})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},72641:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/canbus-uuid-9df7aa98e15c0c5c409d5fd085dc7df8.png"},97488:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/fluidd-cfg-1afd269b70fe36351d23dccfed0bf08c.png"},94156:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/120-180812a8e6c4860edc8d4996a60bf381.png"},2846:(n,e,i)=>{i.d(e,{A:()=>c});const c=i.p+"assets/images/canbridge-5bc2e9ca0b0b22c2e0f6074dcc1c45aa.png"}}]);