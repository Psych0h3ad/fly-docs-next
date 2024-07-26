"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[3160],{23737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=r(74848),s=r(28453);const o={sidebar_position:2},i="\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",c={id:"DebugDoc/ref-config/m109",title:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",description:"",source:"@site/docs/DebugDoc/ref-config/m109.mdx",sourceDirName:"DebugDoc/ref-config",slug:"/DebugDoc/ref-config/m109",permalink:"/fly-docs-next/fr/docs/DebugDoc/ref-config/m109",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:171999637e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"debugdocSidebar",previous:{title:"\u65ad\u6599\u4f20\u611f\u5668",permalink:"/fly-docs-next/fr/docs/DebugDoc/ref-config/filament-switch-sensor"},next:{title:"\u52a0\u70ed\u5bb9\u5dee\u914d\u7f6e",permalink:"/fly-docs-next/fr/docs/DebugDoc/ref-config/verify_heater"}},d={},a=[];function f(e){const t={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",children:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    Parameters\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}\t\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);