"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[2980],{6848:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=n(74848),r=n(28453),s=n(67194);const d={sidebar_position:9,sidebar_label:"\u901a\u8fc7UART\u8fde\u63a5\u4e3b\u677f"},l="\u914d\u7f6e\u65b9\u6cd5",a={id:"ProductDoc/SBC/fly-mini-pad/uart",title:"\u914d\u7f6e\u65b9\u6cd5",description:"\u8bf7\u6ce8\u610f\u4f7f\u7528\u6b64\u65b9\u6cd5\u540e\u65e0\u6cd5\u5728\u4f7f\u7528mini pad\u7684\u52a0\u901f\u5ea6\u63a5\u53e3\u5916\u63a5\u52a0\u901f\u5ea6\u8ba1",source:"@site/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx",sourceDirName:"ProductDoc/SBC/fly-mini-pad",slug:"/ProductDoc/SBC/fly-mini-pad/uart",permalink:"/fly-docs-next/ru/docs/ProductDoc/SBC/fly-mini-pad/uart",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1724309456e3,sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"\u901a\u8fc7UART\u8fde\u63a5\u4e3b\u677f"},sidebar:"tutorialSidebar",previous:{title:"\u677f\u8f7dUTOC\u4f7f\u7528",permalink:"/fly-docs-next/ru/docs/ProductDoc/SBC/fly-mini-pad/utoc"},next:{title:"FLY-CM4 \u6269\u5c55\u677f",permalink:"/fly-docs-next/ru/docs/category/fly-cm4-\u6269\u5c55\u677f"}},c={},o=[{value:"\u63a5\u7ebf\u65b9\u6cd5",id:"\u63a5\u7ebf\u65b9\u6cd5",level:2},{value:"Klipper\u53c2\u8003\u914d\u7f6e",id:"klipper\u53c2\u8003\u914d\u7f6e",level:2}];function u(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,t.jsx)(i.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,t.jsx)(i.p,{children:"\u8bf7\u6ce8\u610f\u4f7f\u7528\u6b64\u65b9\u6cd5\u540e\u65e0\u6cd5\u5728\u4f7f\u7528mini pad\u7684\u52a0\u901f\u5ea6\u63a5\u53e3\u5916\u63a5\u52a0\u901f\u5ea6\u8ba1"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\u6253\u5f00BOOT\u76d8\u627e\u5230",(0,t.jsx)(i.code,{children:"armbianEnv.txt"}),"\u5e76\u4e14\u6253\u5f00"]}),"\n",(0,t.jsxs)(i.li,{children:["\u5c06",(0,t.jsx)(i.code,{children:"overlays=usbhost2 usbhost3 uart2"}),"\u4e2d\u7684",(0,t.jsx)(i.strong,{children:"uart2"}),"\u4fee\u6539\u6210",(0,t.jsx)(i.strong,{children:"uart3"}),"\u4fdd\u5b58\u5373\u53ef"]}),"\n"]}),"\n",(0,t.jsx)(s.A,{image:n(77086).A,size:"80%",align:"center"}),"\n",(0,t.jsx)(i.h2,{id:"\u63a5\u7ebf\u65b9\u6cd5",children:"\u63a5\u7ebf\u65b9\u6cd5"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u8bf7\u6ce8\u610fmini-pad\u7684TX\u8981\u63a5\u5237\u4e86\u4e32\u53e3\u56fa\u4ef6\u4e3b\u677f\u7684RX"}),"\n",(0,t.jsx)(i.li,{children:"\u8bf7\u6ce8\u610fmini-pad\u7684RX\u8981\u63a5\u5237\u4e86\u4e32\u53e3\u56fa\u4ef6\u4e3b\u677f\u7684TX"}),"\n",(0,t.jsx)(i.li,{children:"\u8bf7\u6ce8\u610f\u9700\u8981\u5171\u5730"}),"\n",(0,t.jsx)(i.li,{children:"\u5426\u5219\u65e0\u6cd5\u8fde\u63a5\u5237\u4e86\u4e32\u53e3\u56fa\u4ef6\u7684\u4e3b\u677f"}),"\n"]}),"\n",(0,t.jsx)(s.A,{image:n(61125).A,size:"80%",align:"center"}),"\n",(0,t.jsx)(i.h2,{id:"klipper\u53c2\u8003\u914d\u7f6e",children:"Klipper\u53c2\u8003\u914d\u7f6e"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uff1a250000\n#   \u4f7f\u7528\u7684\u6ce2\u7279\u7387\u3002\u9ed8\u8ba4\u662f250000\nrestart_method:command\n"})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},77086:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/uart-14517f5dfe792cf8b7638cb457d152b3.png"},61125:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/uart1-42459f6e45a3e3943d98aaed92f9e47f.png"}}]);