"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[8510],{70229:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>c});var r=s(74848),i=s(28453),l=s(67194);const c=[{value:"\u641c\u7d22CAN ID",id:"\u641c\u7d22can-id",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u641c\u7d22can-id",children:"\u641c\u7d22CAN ID"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"\u67e5\u627eCANBus UUID\u9700\u8981\u505c\u6b62Klipper\u670d\u52a1\uff0c\u8bf7\u4e0d\u8981\u5728\u6253\u5370\u8fc7\u7a0b\u4e2d\u64cd\u4f5c\u3002"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u8bf7\u786e\u4fdd\u4e0a\u4f4d\u673a\u7684can\u7f51\u7edc\u3001\u6865\u63a5\u4e3b\u677f\u7684CAN\u901f\u7387\u3001CAN\u5de5\u5177\u677f\u7684\u901f\u7387\u5b8c\u5168\u4e00\u81f4"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u6709",(0,r.jsx)(n.code,{children:"1d50:606f"}),"\u65f6\u5019\u624d\u80fd\u4f7f\u7528\u4e0b\u65b9\u547d\u4ee4\u641c\u7d22CAN ID"]})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u662f\u5237\u4e86\u6865\u63a5\u56fa\u4ef6\u7684\u4e3b\u677f\u5efa\u8bae\u63a5\u4e0a\u4e3b\u677fPOWER\u7535\u6e90\u540e\u5728\u627eCANID"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u662f\u4e4b\u524d\u5728",(0,r.jsx)(n.code,{children:"printer.cfg"}),"\u914d\u7f6e\u8fc7\u5bf9\u5e94\u4e3b\u677f\u7684CAN UUID,\u9700\u8981\u5220\u9664\u6216\u8005\u5c4f\u853d\u540e\u4fdd\u5b58\u914d\u7f6e\u5e76\u4e14\u91cd\u542fKlipper"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u505c\u6b62Klipper\u670d\u52a1\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop klipper\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u67e5\u8be2CANBus UUID\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f1a\u8f93\u51fa\u7c7b\u4f3c\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"}),"\n",(0,r.jsx)(l.A,{image:s(72641).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u51fa\u73b0 ",(0,r.jsx)(n.code,{children:"Found canbus_uuid=b7c79ec3f948, Application: Klipper"})," \u5219\u67e5\u627e\u5230\u8bbe\u5907ID\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"b7c79ec3f948"})," \u4e3a\u8bbe\u5907UUID\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Application: Klipper"}),", \u8868\u793a\u8fd9\u4e2aUUID\u5bf9\u5e94\u7684\u4e3b\u677f\u6b63\u5728\u8fd0\u884c\u7684\u56fa\u4ef6\u4e3aKlipper"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679cApplication:\u540e\u9762\u663e\u793a",(0,r.jsx)(n.code,{children:"CANBOOT"}),"\u6216\u8005",(0,r.jsx)(n.code,{children:"Katapult"}),"\u5219\u9700\u8981\u70e7\u5f55Kipper\u56fa\u4ef6\uff0c\u5426\u5219\u65e0\u6cd5\u6b63\u5e38\u8fde\u63a5"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u5982\u679c\u662fUSB\u6865\u63a5CAN\u56fa\u4ef6\uff0c\u5219\u67e5\u8be2\u5230\u7684\u7b2c\u4e00\u4e2aUUID\u59cb\u7ec8\u4e3a\u6865\u63a5\u4e3b\u677f\u81ea\u8eab\u7684UUID\u3002\u5982\u679c\u8fd8\u8fde\u63a5\u4e86CAN\u5de5\u5177\u677f\uff0c\u5219\u81f3\u5c11\u67e5\u8be2\u5230\u4e24\u4e2aUUID\u624d\u5bf9\u3002"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u67e5\u8be2\u7684UUID\uff0c\u5219\u9700\u8981\u4ed4\u7ec6\u68c0\u67e5\u4e0b\u9762\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u68c0\u67e5\u662f\u5426\u6b63\u786e\u8fde\u63a5\u4e86\u4e3b\u677f\u6216CAN\u5de5\u5177\u677f"}),"\n",(0,r.jsx)(n.li,{children:"\u662f\u5426\u6b63\u786e\u4f9b\u7535"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0a\u4f4d\u673a\u662f\u5426\u652f\u6301CAN\u7f51\u7edc"}),"\n",(0,r.jsx)(n.li,{children:"\u56fa\u4ef6\u7f16\u8bd1\u662f\u5426\u6b63\u786e"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8fd8\u662f\u65e0\u6cd5\u627e\u5230id\uff0c\u8bf7\u770b\u6b64\u5904\u6587\u6863:",(0,r.jsx)(n.a,{href:"/docs/DebugDoc/faq/klipper_can",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"CAN\u95ee\u9898\u5408\u96c6"})]}),"\n"]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u542f\u52a8Klipper\u670d\u52a1\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start klipper\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00\u6253\u5370\u673a\u7f51\u9875\u754c\u9762\uff0c\u5728\u5de6\u4fa7\u8fb9\u680f\u7684\u914d\u7f6e\u9009\u9879\u91cc\u627e\u5230\uff1afluidd\u4e3a\uff1a",(0,r.jsx)(n.code,{children:"{\u2026}"})," \uff1bmainsail\u4e3a\uff1a",(0,r.jsx)(n.code,{children:"\u673a\u5668"}),"\uff0c\u70b9\u51fb\u8fdb\u53bb\uff0c\u5373\u53ef\u627e\u5230 ",(0,r.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,r.jsx)(l.A,{image:s(97488).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c06\u67e5\u8be2\u5230\u7684UUID\u590d\u5236\uff0c\u586b\u5199\u5230 ",(0,r.jsx)(n.code,{children:"printer.cfg"})," \u914d\u7f6e\u91cc\u7684 ",(0,r.jsx)(n.code,{children:"[mcu]"})," \u8282\u70b9\u7684 ",(0,r.jsx)(n.code,{children:"canbus_uuid: "})," \u3002\u4fdd\u5b58\u91cd\u542f\u540e\u5373\u53ef\u8fde\u4e0a\u4e3b\u677f\u3002\u82e5Klipper\u63d0\u793a ",(0,r.jsx)(n.code,{children:"ADC out of range"}),"\u4e3a\u6b63\u5e38\u73b0\u8c61\uff0c\u5c06\u70ed\u5e8a\u548c\u70ed\u654f\u8fde\u63a5\u597d\uff0c\u914d\u7f6e\u597d\u55b7\u5934\u3001\u70ed\u5e8a\u7684\u70ed\u654f\u5f15\u811a\u548c\u8f93\u51fa\u5f15\u811a\uff0c\u518d\u4fdd\u5b58\u91cd\u542f\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(l.A,{image:s(72641).A,size:"50%",align:"left"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6587\u6863\u4e2d\u6240\u51fa\u73b0\u7684\u6240\u6709ID\u5747\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u6bcf\u4e2a\u4e3b\u677f\u7684ID\u5747\u4e0d\u4e00\u81f4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u83b7\u53d6\u5230\u7684ID\u4fee\u6539\u586b\u5199\u3002"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},72562:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>c});var r=s(74848),i=s(28453),l=s(67194);const c=[{value:"\u641c\u7d22\u8bbe\u5907\u524d\u6ce8\u610f\u4e8b\u9879",id:"\u641c\u7d22\u8bbe\u5907\u524d\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u641c\u7d22\u8bbe\u5907\u65f6\u6ce8\u610f\u4e8b\u9879",id:"\u641c\u7d22\u8bbe\u5907\u65f6\u6ce8\u610f\u4e8b\u9879",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u641c\u7d22\u8bbe\u5907\u524d\u6ce8\u610f\u4e8b\u9879",children:"\u641c\u7d22\u8bbe\u5907\u524d\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f00\u59cb\u83b7\u53d6ID\u524d\uff0c\u8bf7\u5148",(0,r.jsx)(n.a,{href:"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/",title:"\u70b9\u51fb\u5373\u53ef\u8df3\u8f6c",children:"\u8fde\u63a5\u5230SSH"})]}),"\n",(0,r.jsx)(n.li,{children:"\u8bf7\u786e\u4fdd\u4e0b\u4f4d\u673a\u8fde\u63a5\u4e0a\u4f4d\u673a\u7684\u6570\u636e\u7ebf\u5177\u6709\u6570\u636e\u4f20\u8f93\u529f\u80fd"}),"\n",(0,r.jsxs)(n.li,{children:["SSH\u8fde\u63a5\u8fde\u63a5\u5230\u4e0a\u4f4d\u673a\u540e\u8f93\u5165",(0,r.jsx)(n.code,{children:"lsusb"}),"\u5e76\u4e14\u56de\u8f66\uff0c\u5c06\u53ef\u80fd\u51fa\u73b0\u4e0b\u9762\u51e0\u79cd\u8bbe\u5907"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u7cfb\u7edf\u4e0d\u652f\u6301",(0,r.jsx)(n.code,{children:"lsusb"}),"\u53ef\u4ee5\u6267\u884c\u4e0b\u65b9\u6307\u4ee4\u8fdb\u884c\u5b89\u88c5"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c",(0,r.jsx)(n.code,{children:"lsusb"}),"\u540e\u6ca1\u6709\u8bbe\u5907\uff0c\u8bf7\u66f4\u6362\u4e0a\u4f4d\u673a\uff01"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo apt-get install usbutils\n"})}),"\n",(0,r.jsx)(l.A,{image:s(31090).A,size:"100%",align:"left"}),"\n",(0,r.jsx)(l.A,{image:s(87327).A,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf7\u786e\u5b9a\u4f60\u9700\u8981\u4e3b\u677f\u56fa\u4ef6\u662f\u5426\u5237\u4e86\u6b63\u786e\u7684\u56fa\u4ef6"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662fUSB\u56fa\u4ef6\u5728",(0,r.jsx)(n.code,{children:"lsusb"}),"\u540e\u5e94\u8be5\u51fa\u73b0",(0,r.jsx)(n.code,{children:"1d50:614e"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662fUSB\u6865\u63a5CAN\u56fa\u4ef6\u5728",(0,r.jsx)(n.code,{children:"lsusb"}),"\u540e\u5e94\u8be5\u51fa\u73b0",(0,r.jsx)(n.code,{children:"1d50:606f"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u662fRS232\u9700\u8981\u642d\u914dUTOR\u6216\u8005G2T\uff0c\u5176\u4e2dG2T\u4e0d\u9700\u8981\u641c\u7d22\u56fa\u4ef6\uff0c\u800cUTOR\u5728",(0,r.jsx)(n.code,{children:"lsusb"}),"\u540e\u5e94\u8be5\u51fa\u73b0",(0,r.jsx)(n.code,{children:"1a86:7523"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u641c\u7d22\u8bbe\u5907\u65f6\u6ce8\u610f\u4e8b\u9879",children:"\u641c\u7d22\u8bbe\u5907\u65f6\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,r.jsx)(n.p,{children:"\u641c\u7d22ID\u6307\u4ee4\u65e0\u6cd5\u6df7\u7528\uff01\uff01\uff01"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6ce8\u610fUSB\u56fa\u4ef6\u53ea\u80fd\u4f7f\u7528USB ID\u7684\u641c\u7d22\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6ce8\u610fUSB\u6865\u63a5CAN\u56fa\u4ef6\u53ea\u80fd\u4f7f\u7528CAN ID\u7684\u641c\u7d22\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.li,{children:"\u8bf7\u6ce8\u610fRS232\u56fa\u4ef6\u53ea\u80fd\u4f7f\u7528RS232 ID\u7684\u641c\u7d22\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u51fa\u73b0",(0,r.jsx)(n.code,{children:"0483:df11"}),"\u5219\u53ef\u80fd\u662f\u5237\u4e86\u56fa\u4ef6\uff0c\u4f46\u662f\u6ca1\u7ed9\u4e3b\u677f\u65ad\u7535\u91cd\u542f\uff0c\u5982\u679c\u7ed9\u4e3b\u677f\u65ad\u7535\u91cd\u65b0\u4e0a\u7535\u540e\u8fd8\u662f\u4e00\u6837\u8bf7\u68c0\u67e5DFU(\u8df3\u7ebf/\u62e8\u7801/\u6309\u94ae)\u6709\u6ca1\u6709\u65ad\u5f00"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u51fa\u73b0",(0,r.jsx)(n.code,{children:"2e8a:0003"}),"\u5219\u53ef\u80fd\u662f\u5237\u9519\u56fa\u4ef6\uff0c\u8bf7\u6ce8\u610fRP2040\u53ea\u80fd\u5237\u7f16\u8bd1\u51fa\u6765\u7684UF2\u56fa\u4ef6\uff0c\u65e0\u6cd5\u5237\u5176\u4ed6\u56fa\u4ef6\u3002\u51fa\u73b0",(0,r.jsx)(n.code,{children:"2e8a:0003"}),"\u540e\u9700\u8981\u65ad\u5f00BOOT(\u8df3\u7ebf/\u62e8\u7801/\u6309\u94ae)\u5426\u5219\u4f1a\u70e7\u5f55\u5931\u8d25\uff01\uff01\uff01"]}),"\n",(0,r.jsxs)(n.li,{children:["RP2040\u7684UF2\u56fa\u4ef6\u662f\u5728\u7f16\u8bd1\u65f6\u5019\u9009\u62e9",(0,r.jsx)(n.code,{children:"No bootloader"}),"\u624d\u4f1a\u7f16\u8bd1\u51faUF2\u56fa\u4ef6"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},44105:(e,n,s)=>{s.d(n,{Ay:()=>d,RM:()=>c});var r=s(74848),i=s(28453),l=s(67194);const c=[{value:"\u641c\u7d22USB ID",id:"\u641c\u7d22usb-id",level:2},{value:"\u5c06USB\u7684ID\uff0c\u586b\u5199\u5230\u5230\u914d\u7f6e\u91cc\u9762",id:"\u5c06usb\u7684id\u586b\u5199\u5230\u5230\u914d\u7f6e\u91cc\u9762",level:3}];function t(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u641c\u7d22usb-id",children:"\u641c\u7d22USB ID"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u6709",(0,r.jsx)(n.code,{children:"1d50:614e"}),"\u65f6\u5019\u624d\u80fd\u4f7f\u7528",(0,r.jsx)(n.code,{children:"ls /dev/serial/by-id/*"}),"\u641c\u7d22USB ID"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8f93\u5165\u4e0b\u65b9\u6307\u4ee4\u56de\u8f66\u3002\u5982\u679c\u4e00\u5207\u6b63\u5e38\uff0c\u5219\u4f1a\u51fa\u73b0\u4e0b\u9762\u4e00\u884c\u84dd\u8272\u7684ID\u3002\uff08\u4e0b\u65b9\u53ea\u662f\u53c2\u8003\uff09"}),"\n"]}),"\n",(0,r.jsx)(l.A,{image:s(81669).A,size:"80%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8f93\u5165\u4e0b\u65b9\u540e\u6ca1\u6709ID\u51fa\u6765\uff0c\u4f46\u662f",(0,r.jsx)(n.code,{children:"lsusb"}),"\u6709\u8bbe\u5907\u8bf7\u66f4\u6362\u4e0a\u4f4d\u673a\u6216\u8005\u66f4\u6362\u4e0a\u4f4d\u673a\u7cfb\u7edf"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls /dev/serial/by-id/*\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5982\u679c\u51fa\u73b0\u591a\u4e2aID\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u4e3b\u677f",(0,r.jsx)(n.strong,{children:"MCU"}),"\u578b\u53f7\u9009\u62e9\u76f8\u5bf9\u5e94\u7684ID\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u5c06usb\u7684id\u586b\u5199\u5230\u5230\u914d\u7f6e\u91cc\u9762",children:"\u5c06USB\u7684ID\uff0c\u586b\u5199\u5230\u5230\u914d\u7f6e\u91cc\u9762"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00\u6253\u5370\u673a\u7f51\u9875\u754c\u9762\uff0c\u5728\u5de6\u4fa7\u8fb9\u680f\u7684\u914d\u7f6e\u9009\u9879\u91cc\u627e\u5230\uff1afluidd\u4e3a\uff1a",(0,r.jsx)(n.code,{children:"{\u2026}"})," \uff1bmainsail\u4e3a\uff1a",(0,r.jsx)(n.code,{children:"\u673a\u5668"}),"\uff0c\u70b9\u51fb\u8fdb\u53bb\uff0c\u5373\u53ef\u627e\u5230 ",(0,r.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,r.jsx)(l.A,{image:s(97488).A,size:"50%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c06\u84dd\u8272\u7684ID\u590d\u5236\uff0c\u586b\u5199\u5230 ",(0,r.jsx)(n.code,{children:"printer.cfg"})," \u914d\u7f6e\u91cc\u7684 ",(0,r.jsx)(n.code,{children:"[mcu]"})," \u8282\u70b9\u7684 ",(0,r.jsx)(n.code,{children:"serial: "})," \u3002\u4fdd\u5b58\u91cd\u542f\u540e\u5373\u53ef\u8fde\u4e0a\u4e3b\u677f\u3002\u82e5Klipper\u63d0\u793a ",(0,r.jsx)(n.code,{children:"ADC out of range"}),"\u4e3a\u6b63\u5e38\u73b0\u8c61\uff0c\u5c06\u70ed\u5e8a\u548c\u70ed\u654f\u8fde\u63a5\u597d\uff0c\u914d\u7f6e\u597d\u55b7\u5934\u3001\u70ed\u5e8a\u7684\u70ed\u654f\u5f15\u811a\u548c\u8f93\u51fa\u5f15\u811a\uff0c\u518d\u4fdd\u5b58\u91cd\u542f\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(l.A,{image:s(83114).A,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6587\u6863\u4e2d\u6240\u51fa\u73b0\u7684\u6240\u6709ID\u5747\u4e3a\u793a\u4f8b\uff0c\u5b9e\u9645\u6bcf\u4e2a\u4e3b\u677f\u7684ID\u5747\u4e0d\u4e00\u81f4\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u83b7\u53d6\u5230\u7684ID\u4fee\u6539\u586b\u5199\u3002"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},20800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>h,toc:()=>x});var r=s(74848),i=s(28453),l=s(81386),c=s(79635),t=s(72562),d=s(44105),a=s(70229);const o={sidebar_position:3,sidebar_label:"\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b"},u="\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b",h={id:"ProductDoc/MainBoard/fly-e3/fly-e3-v2/read-id",title:"\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b",description:"",source:"@site/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/read-id.mdx",sourceDirName:"ProductDoc/MainBoard/fly-e3/fly-e3-v2",slug:"/ProductDoc/MainBoard/fly-e3/fly-e3-v2/read-id",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/read-id",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/read-id.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b"},sidebar:"tutorialSidebar",previous:{title:"\u56fa\u4ef6\u7f16\u8bd1\u4e0e\u70e7\u5f55",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/flash"},next:{title:"\u4e3b\u677f\u63a5\u7ebf",permalink:"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-e3/fly-e3-v2/wiring"}},p={},x=[...t.RM,...d.RM,...a.RM];function j(e){const n={h1:"h1",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4e3b\u677fid\u8bfb\u53d6\u67e5\u770b",children:"\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b"}),"\n",(0,r.jsx)(t.Ay,{}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.A,{value:"usb",label:"USB ID\u83b7\u53d6",default:!0,children:(0,r.jsx)(d.Ay,{})}),(0,r.jsx)(c.A,{value:"can",label:"CANBus UUID\u83b7\u53d6",children:(0,r.jsx)(a.Ay,{})})]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},79635:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var r=s(34164);const i={tabItem:"tabItem_Ymn6"};var l=s(74848);function c(e){let{children:n,hidden:s,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,c),hidden:s,children:n})}},81386:(e,n,s)=>{s.d(n,{A:()=>A});var r=s(96540),i=s(34164),l=s(23104),c=s(56347),t=s(205),d=s(57485),a=s(31682),o=s(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,c.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,l=h(e),[c,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[a,u]=x({queryString:s,groupId:i}),[j,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,o.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:i}),b=(()=>{const e=a??j;return p({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{b&&d(b)}),[b]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(74848);function g(e){let{className:n,block:s,selectedValue:r,selectValue:c,tabValues:t}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),o=e=>{const n=e.currentTarget,s=d.indexOf(n),i=t[s].value;i!==r&&(a(n),c(i))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...l,className:(0,i.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:i}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,m.jsx)(g,{...n,...e}),(0,m.jsx)(y,{...n,...e})]})}function A(e){const n=(0,f.A)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(n))}},72641:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/canbus-uuid-9df7aa98e15c0c5c409d5fd085dc7df8.png"},83114:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/cfg-usb-id-d86733536848d8fa5825e1b7b167b500.png"},97488:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/fluidd-cfg-1afd269b70fe36351d23dccfed0bf08c.png"},31090:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/lsusb-51f982d578991ea39a12cf2d568e5f63.png"},87327:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/rs232-975bb6febe3ecb1bdb1e7f8bf8377e63.png"},81669:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/usb-id-0fab6181658241904a5e5b01af638aab.png"}}]);