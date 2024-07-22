"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[4191],{3946:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=e(74848),s=e(28453);const r={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},i="\u53c2\u8003\u914d\u7f6e",c={id:"ProductDoc/ToolBoard/fly-sht36/sht36/cfg",title:"\u53c2\u8003\u914d\u7f6e",description:"",source:"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-sht36/sht36",slug:"/ProductDoc/ToolBoard/fly-sht36/sht36/cfg",permalink:"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36/cfg.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1720514387e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u677f\u63a5\u7ebf",permalink:"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sht36/sht36/wiring"},next:{title:"\u52a0\u901f\u5ea6\u8ba1\u4f7f\u7528",permalink:"/fly-docs-next/ja/docs/ProductDoc/ToolBoard/fly-sht36/sht36/adxl"}},a={},d=[];function p(n){const t={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cfg",children:"## SHT36\u8bbe\u7f6e\n[mcu sht36]\ncanbus_uuid:  *d085135ff4c2*\n\n## SHT36\u6e29\u5ea6\n[temperature_sensor FLY-SHT36]\nsensor_type: temperature_mcu\nsensor_mcu: sht36\n\n## FAN0\n[fan]\npin: sht36:PB10\n\n## FAN1\n[heater_fan hotend_fan]\npin: sht36:PB11\nheater: extruder\nheater_temp: 50.0\n\n\n## X\u9650\u4f4d\u8bbe\u7f6e\n[stepper_x]\nendstop_pin: !sht36:PA0\n## SHT\u677f\u6709PA0,PA1,PA2\u4e09\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n\n## \u6324\u51fa\u673a\n[extruder]\nstep_pin: sht36:PB4\ndir_pin: sht36:PB3\nenable_pin: !sht36:PA15\nmicrosteps: 16\nrotation_distance: 33.5\nnozzle_diameter: 0.400\nfilament_diameter: 1.750\nheater_pin: sht36:PA8\nsensor_pin: sht36:PB0\nsensor_type: ATC Semitec 104GT-2\npullup_resistor: 2200\ncontrol: pid\npid_Kp: 22.2\npid_Ki: 1.08\npid_Kd: 114\nmin_temp: -50\nmax_temp: 350\n\n## \u6324\u51fa\u673a\u9a71\u52a8\u8bbe\u7f6e\n[tmc2209 extruder]\nuart_pin: sht36:PB5\nrun_current: 0.600\nstealthchop_threshold: 999999\n\n\n## RGB\n[neopixel my_neopixel]\npin: sht36:PB15\nchain_count: 12\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.0\ninitial_BLUE: 0.0\n\n## ADXL345\u52a0\u901f\u5ea6\u8ba1\n[adxl345]\ncs_pin: sht36:PA4\nspi_bus: spi1\n\n## BLTOUCH\n[bltouch]\nsensor_pin: ^sht36:PC15\ncontrol_pin: sht36:PB1\nx_offset: -26.1\ny_offset: -15.3\nz_offset: 2.1\n\n## PT100\u8bbe\u7f6e\n[temperature_sensor PT100]\nsensor_type: MAX31865\nsensor_pin: sht36:PA3\nspi_bus: spi1\nmin_temp: -50\nmax_temp: 350\nrtd_reference_r: 430\n\n"})})]})}function l(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>c});var o=e(96540);const s={},r=o.createContext(s);function i(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);