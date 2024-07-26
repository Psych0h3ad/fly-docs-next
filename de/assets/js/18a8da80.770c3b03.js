"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[9842],{50657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(74848),o=n(28453),r=n(67194);const s={sidebar_position:7,sidebar_label:"\u677f\u8f7d5V\u98ce\u6247\u53e3"},c="\u677f\u8f7d5V\u98ce\u6247\u53e3",a={id:"ProductDoc/SBC/fly-pi/fan",title:"\u677f\u8f7d5V\u98ce\u6247\u53e3",description:"\u56e0\u4e3a\u8bf7\u6ce8\u610fFLY\u7cfb\u7edf\u955c\u50cf\u95ee\u9898\u6b64\u98ce\u6247\u53e3\u6682\u65f6\u7528\u4e0d\u4e86",source:"@site/docs/ProductDoc/SBC/fly-pi/fan.mdx",sourceDirName:"ProductDoc/SBC/fly-pi",slug:"/ProductDoc/SBC/fly-pi/fan",permalink:"/fly-docs-next/de/docs/ProductDoc/SBC/fly-pi/fan",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi/fan.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:172198062e4,sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"\u677f\u8f7d5V\u98ce\u6247\u53e3"},sidebar:"tutorialSidebar",previous:{title:"\u5c4f\u5e55\u63a5\u7ebf\u4e0e\u914d\u7f6e",permalink:"/fly-docs-next/de/docs/ProductDoc/SBC/fly-pi/screen"},next:{title:"\u677f\u8f7dCAN HAT\u4f7f\u7528",permalink:"/fly-docs-next/de/docs/ProductDoc/SBC/fly-pi/utoc"}},d={},p=[{value:"Pi-V2\u677f\u8f7d\u4e86\u4e00\u4e2a5V\u7684\u53ef\u63a7\u63a5\u53e3\uff0c\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\uff0c\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",id:"pi-v2\u677f\u8f7d\u4e86\u4e00\u4e2a5v\u7684\u53ef\u63a7\u63a5\u53e3\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",level:2},{value:"\u53c2\u8003\u914d\u7f6e",id:"\u53c2\u8003\u914d\u7f6e",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u677f\u8f7d5v\u98ce\u6247\u53e3",children:"\u677f\u8f7d5V\u98ce\u6247\u53e3"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"\u56e0\u4e3a\u8bf7\u6ce8\u610fFLY\u7cfb\u7edf\u955c\u50cf\u95ee\u9898\u6b64\u98ce\u6247\u53e3\u6682\u65f6\u7528\u4e0d\u4e86"})}),"\n",(0,i.jsx)(t.h2,{id:"pi-v2\u677f\u8f7d\u4e86\u4e00\u4e2a5v\u7684\u53ef\u63a7\u63a5\u53e3\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe",children:"Pi-V2\u677f\u8f7d\u4e86\u4e00\u4e2a5V\u7684\u53ef\u63a7\u63a5\u53e3\uff0c\u7528\u4e8e\u4e3b\u63a7\u6563\u70ed\uff0c\u63a5\u7ebf\u65b9\u6cd5\u5982\u4e0b\u56fe"}),"\n",(0,i.jsx)(r.A,{image:n(56836).A,size:"80%",align:"center"}),"\n",(0,i.jsx)(t.h2,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cfg",children:"[mcu host]                     # FlyOS\u5df2\u9ed8\u8ba4\u4e3a\u60a8\u751f\u6210linux MCU\uff0c\u5b9a\u4e49\u5373\u53ef\u4f7f\u7528           \nserial: /tmp/klipper_host_mcu \n\n[temperature_sensor FLY-\u03c0]     # \u4e0a\u4f4d\u673a\u6e29\u5ea6\nsensor_type: temperature_host\n\n\n[temperature_fan core_fan]      # \u4e0a\u4f4d\u673a\u6563\u70ed\u98ce\u6247\npin: host:gpiochip1/gpio3                   # \u4e0a\u4f4d\u673a\u98ce\u6247pin\u811a\nmax_power: 1.0\nsensor_type: temperature_host   # \u8bbe\u7f6e\u4e3a\u4e0a\u4f4d\u673a\u4e3b\u63a7\u6e29\u5ea6\ncontrol:watermark                  # \u63a7\u5236\u65b9\u5f0f\ntarget_temp: 48                   # \u4e0a\u4f4d\u673a\u6563\u70ed\u98ce\u6247\u542f\u52a8\u6e29\u5ea6\nmin_temp: 0                     # \u6700\u4f4e\u6e29\u5ea6\uff0c\u4f4e\u4e8e\u6b64\u6e29\u5ea6\u5c06\u4f1a\u62a5\u9519\nmax_temp: 90                    # \u6700\u9ad8\u6e29\u5ea6\uff0c\u9ad8\u4e8e\u6b64\u6e29\u5ea6\u5c06\u4f1a\u62a5\u9519\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                   # \u6700\u5927\u8f6c\u901f\uff0c\u4e3a\u6ee1\u529f\u7387\u8fd0\u8f6c\u65f6\u768480%\nmin_speed: 0.3                    # \u6700\u5c0f\u8f6c\u901f\uff0c\u4e3a\u6ee1\u529f\u7387\u8fd0\u8f6c\u65f6\u768430%\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},56836:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/corefan-7f24ac71ce4c3cab3cefa577a63051df.png"}}]);