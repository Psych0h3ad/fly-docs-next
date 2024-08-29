"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[374],{20462:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>t});var r=l(74848),o=l(28453);const d={sidebar_position:4,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},i="klipper\u53c2\u8003\u914d\u7f6e",n={id:"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg",title:"klipper\u53c2\u8003\u914d\u7f6e",description:"* \u53c2\u8003\u914d\u7f6e",source:"@site/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw",slug:"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/cfg.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1722235238e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u677fID\u8bfb\u53d6\u67e5\u770b",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/read-id"},next:{title:"LIS2DW",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/adxl345"}},c={},t=[];function a(e){const s={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"klipper\u53c2\u8003\u914d\u7f6e",children:"klipper\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u53c2\u8003\u914d\u7f6e"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cfg",children:"[mcu LIS]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\n### \u67e5\u8be2usb\u56fa\u4ef6id\u662f\uff1als -l /dev/serial/by-id/\n### \u628a/dev/serial/by-id/usb-Klipper_rp2040_XXXXXXXXXXXXXXXXXXXXX\u66ff\u6362\u67e5\u8be2\u5230\u7684id\n\n[lis2dw]\ncs_pin: LIS:gpio9\nspi_software_sclk_pin: LIS:gpio10\nspi_software_mosi_pin: LIS:gpio11\nspi_software_miso_pin: LIS:gpio12\n\n[resonance_tester]\naccel_chip: lis2dw\nprobe_points: 150, 150, 20        # \u5171\u632f\u6d4b\u8bd5\u7684\u5750\u6807\u70b9\nmin_freq: 5                       # \u5171\u632f\u6d4b\u8bd5\u7684\u6700\u5c0f\u9891\u7387\nmax_freq: 133                     # \u5171\u632f\u6d4b\u8bd5\u7684\u6700\u5927\u9891\u7387\naccel_per_hz: 75                  # \u6bcf\u8d6b\u5179\u52a0\u901f\u5ea6(mm/sec)\uff0c\u52a0\u901f\u5ea6=\u6bcf\u8d6b\u5179\u52a0\u901f\u5ea6*\u9891\u7387\uff0c\u5982\u679c\u5171\u632f\u8fc7\u4e8e\u5f3a\u70c8\uff0c\u53ef\u4ee5\u51cf\u5c11\u8be5\u503c\u3002\u9ed8\u8ba475\nhz_per_sec: 1                     # \u6d4b\u8bd5\u7684\u901f\u5ea6\uff0c\u8f83\u5c0f\u7684\u503c\u4f1a\u52a0\u957f\u6d4b\u8bd5\u65f6\u95f4\uff0c\u8f83\u5927\u7684\u503c\u4f1a\u964d\u4f4e\u6d4b\u8bd5\u7cbe\u5ea6\uff0c(Hz/sec == sec^-2)\uff0c\u9ed8\u8ba41\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);