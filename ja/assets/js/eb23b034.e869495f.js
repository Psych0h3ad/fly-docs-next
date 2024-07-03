"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[3160],{23737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(74848),r=n(28453);const s={sidebar_position:2},c="\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",i={id:"DebugDoc/ref-config/m109",title:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",description:"",source:"@site/docs/DebugDoc/ref-config/m109.mdx",sourceDirName:"DebugDoc/ref-config",slug:"/DebugDoc/ref-config/m109",permalink:"/fly-docs-next/ja/docs/DebugDoc/ref-config/m109",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:171999637e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"debugdocSidebar",previous:{title:"\u65ad\u6599\u4f20\u611f\u5668",permalink:"/fly-docs-next/ja/docs/DebugDoc/ref-config/filament-switch-sensor"},next:{title:"\u52a0\u70ed\u5bb9\u5dee\u914d\u7f6e",permalink:"/fly-docs-next/ja/docs/DebugDoc/ref-config/verify_heater"}},a={},d=[];function f(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45",children:"\u6253\u5370\u5f00\u59cb\u6e29\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u5f85\u65f6\u95f4\u592a\u4e45"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    Parameters\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}\t\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);