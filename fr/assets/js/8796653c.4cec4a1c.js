"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[7248],{1666:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>_});var s=t(74848),o=t(28453);const i={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},r="\u53c2\u8003\u914d\u7f6e",p={id:"ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg",title:"\u53c2\u8003\u914d\u7f6e",description:"",source:"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg.mdx",sourceDirName:"ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh",slug:"/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg",draft:!1,unlisted:!1,editUrl:"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/cfg.mdx",tags:[],version:"current",lastUpdatedBy:"fenghua",lastUpdatedAt:1721313674e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u677f\u63a5\u7ebf",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/wiring"},next:{title:"\u52a0\u901f\u5ea6\u8ba1\u4f7f\u7528",permalink:"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_lis3dh/adxl"}},a={},_=[];function d(n){const e={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#                               \u4e3b\u677f\u914d\u7f6e\n#####################################################################\n[mcu SHT36] # \u5de5\u5177\u4e3b\u677f\u5e8f\u5217\u53f7\ncanbus_uuid: eeb4f40a0b9b\n### \u67e5\u8be2can\u56fa\u4ef6id\u662f\uff1a~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628aserial\u66ff\u6362\u6210canbus_uuid: \u540e\u9762\u6dfb\u52a0id \n\n#####################################################################\n#                             \u6e29\u5ea6\u76d1\u63a7\n#####################################################################\n[temperature_sensor SHT36]        # \u5de5\u5177\u677f\u4e3b\u677f\u6e29\u5ea6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\nsensor_mcu: SHT36                 # \u5173\u8054mcu\u662fSHT36\nmin_temp: 0                       # \u6700\u5c0f\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_temp: 490                     # \u6700\u5927\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\n#--------------------------------------------------------------------\n[temperature_sensor Box]          # \u5de5\u5177\u677f\u70ed\u654f\u6e29\u5ea6 \nsensor_type: ATC Semitec 104GT-2  # \u4f20\u611f\u5668\u578b\u53f7\nsensor_pin: SHT36:gpio27          # \u4fe1\u53f7\u63a5\u53e3\nmin_temp: 0                       # \u6700\u5c0f\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_temp: 490                     # \u6700\u5927\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\n\n#####################################################################\n#                            E \u6324\u51fa\u673a\u8bbe\u7f6e                            # \n#####################################################################\n#\u6ce8\uff1a\u63a5\u5b8c\u7ebf\u9700\u6d4b\u8bd5\u8fd0\u884c\u65b9\u5411\n[extruder]                          # \u6324\u51fa\u673a\nstep_pin: SHT36:gpio24              # \u6324\u51fa\u7535\u673a\u65b9\u8109\u51b2\u5f15\u811a\ndir_pin: SHT36:gpio23               # \u6324\u51fa\u7535\u673a\u65b9\u5411\u5f15\u811a\u8bbe\u7f6e\nenable_pin: !SHT36:gpio25           # \u6324\u51fa\u7535\u673a\u65b9\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e\n## \u6267\u884c\u6324\u51fa\u673a\u6821\u51c6\u65f6\uff0c\u66f4\u65b0\u4ee5\u4e0b\u503c\n## \u6bd4\u5982\u4f60\u8981\u6c42100\u6beb\u7c73\u7684\u8fdb\u6599\uff0c\u4f46\u5b9e\u9645\u4e0a\u662f102\uff1a\n## rotation_distance = <\u65e7rotation_distance> * <\u5b9e\u9645\u6324\u51fa\u957f\u5ea6> / <\u8bf7\u6c42\u7684\u6324\u51fa\u957f\u5ea6>\n## \u6821\u51c6\u6b65\u8fdb\u503c: 22.44=\u65e7\u503c22*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\nrotation_distance: 22.44            # \u6b65\u8fdb\u503c\ngear_ratio: 50:17                   # \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nmicrosteps: 16                      # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e,\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51b2\u6570 \uff08200 \u4e3a 1.8 \u5ea6, 400 \u4e3a 0.9 \u5ea6\uff09\nnozzle_diameter: 0.400              # \u55b7\u5634\u76f4\u5f84\nfilament_diameter: 1.75             # \u8017\u6750\u76f4\u5f84\nheater_pin: SHT36:gpio8             # \u52a0\u70ed\u68d2\u5f15\u811a,\u63a5\u5230HETA0\n#--------------------------------------------------------------------\n##\u666e\u901a\u70ed\u654f\u914d\u7f6e\nsensor_type: ATC Semitec 104GT-2    # \u4f20\u611f\u5668\u578b\u53f7  (Generic 3950, ATC Semitec 104GT-2\uff0c PT1000)\nsensor_pin: SHT36:gpio26            # \u4f20\u611f\u5668\u5f15\u811a  \n#--------------------------------------------------------------------\n##pt1000\u914d\u7f6e\n#sensor_type: PT1000                 # \u4f20\u611f\u5668\u578b\u53f7  (Generic 3950, ATC Semitec 104GT-2\uff0c PT1000)\n#pullup_resistor: 1000               # \u70ed\u654f\u4e0a\u62c9\u7535\u963b\u4e3a1000\uff0c\u5982\u679c\u6e29\u5ea6\u4e3a\u8d1f-180\u9700\u8981\u66f4\u6362\u8df3\u7ebf\n#sensor_pin: SHT36:gpio26            # \u4f20\u611f\u5668\u5f15\u811a  \n#--------------------------------------------------------------------\nmin_temp: -200                      # \u6700\u5c0f\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_temp: 500                       # \u6700\u5927\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_power: 1.0                      # \u6700\u5927\u529f\u7387\nmin_extrude_temp: 170               # \u6700\u5c0f\u6324\u51fa\u6e29\u5ea6\uff08\u81f3\u5c11\u9700\u8981\u8fbe\u5230\u8fd9\u4e2a\u6e29\u5ea6\uff0c\u6324\u51fa\u673a\u624d\u80fd\u6324\u51fa\uff09\npressure_advance: 0.05              # \u63a8\u8fdb\u538b\u529b-\u5c3d\u91cf\u5c06\u538b\u529b\u4fdd\u6301\u57281.0\u4ee5\u4e0b(\u538b\u529b\u63d0\u524d\u662f\u8c03\u6574\u8fd9\u4e2a)\npressure_advance_smooth_time: 0.040 # \u5e73\u7a33\u63a8\u8fdb\u65f6\u95f4-\u9ed8\u8ba4\u503c\u4e3a0.040\n#\u538b\u529b\u63d0\u524d\u8c03\u6574\u65b9\u6cd5:https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040 # \u5e73\u7a33\u63a8\u8fdb\u65f6\u95f4-\u9ed8\u8ba4\u503c\u4e3a0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51fa\u6d41\u91cf\u62a5\u9519\u53ef\u4ee5\u6ce8\u91ca\u8fd9\u4e2a\uff0c\u4f46\u662f\u5efa\u8bae\u91cd\u65b0\u5207\u7247\n#\u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid                # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kp = 26.213              # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_ki = 1.304               # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kd = 131.721             # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 extruder]                  # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC2209\nuart_pin: SHT36:gpio1               # \u901a\u8baf\u7aef\u53e3Pin\u811a\u5b9a\u4e49\ntx_pin: SHT36:gpio0\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n\n#####################################################################\n#                             \u98ce\u6247\u914d\u7f6e\n#####################################################################\n[fan]                        # \u6a21\u578b\u51b7\u5374\u98ce\u6247\npin: SHT36:gpio15            # \u4fe1\u53f7\u63a5\u53e3\nkick_start_time: 0.5         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\noff_below: 0.10              # \u52ff\u52a8\n#--------------------------------------------------------------------\n[heater_fan hotend_fan]      # \u5589\u7ba1\u51b7\u5374\u98ce\u6247\npin: SHT36:gpio14            # \u4fe1\u53f7\u63a5\u53e3\nmax_power: 1.0               # \u6700\u5927\u8f6c\u901f\nkick_start_time: 0.5         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\nheater: extruder             # \u5173\u8054\u7684\u8bbe\u5907\uff1a\u6324\u51fa\u673a\nheater_temp: 50              # \u6324\u51fa\u673a\u8fbe\u5230\u591a\u5c11\u5ea6\u542f\u52a8\u98ce\u6247\nfan_speed: 1.0               # \u98ce\u6247\u8f6c\u901f\n\n#####################################################################\n#                            X\u9650\u4f4d\u914d\u7f6e\n#####################################################################\n[stepper_x]\nendstop_pin: !SHT36:gpio21\n## SHT36\u677f\u6709gpio2,gpio21\u4e24\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n## gpio21\u5f15\u811a\u9ed8\u8ba4\u652f\u6301\u9ad8\u538b\u8f93\u5165\uff0c\u53ef\u7528\u4e8e12v\u7684\u63a5\u8fd1\u4f20\u611f\u5668\u7b49\u3002\u53ef\u901a\u8fc7\u8df3\u7ebf\u5e3d\u914d\u7f6egpio21\u4e3a\u666e\u901a\u9650\u4f4d\u5f15\u811a\n#####################################################################\n#                           SB\u5934led\u914d\u7f6e\n#####################################################################\n[neopixel sb_leds]\npin: SHT36:gpio6            # \u4fe1\u53f7\u63a5\u53e3\nchain_count: 3              # \u706f\u73e0\u6570\u91cf\ncolor_order: GRBW           # \u706f\u73e0\u7c7b\u578b\ninitial_RED: 0.4            # \ninitial_GREEN: 0.8          # \ninitial_BLUE: 1             # \ninitial_WHITE: 0.0          # \u8fde\u63a5\u540e\u4f1a\u4eae\u8d77\u6765\n\n#####################################################################\n#                           PL08N\u611f\u5e94\u63a2\u5934\n#####################################################################\n# PL08N\u611f\u5e94\u63a2\u5934\u4e0d\u4f4e\u4e8e\u55b7\u5634\u9ad8\u5ea6\uff0c\u4ec5\u7528\u4e8e\u8c03\u5e73,\u5982\u679c\u4f60\u7684PL08N\u662fNO\uff08\u5e38\u5f00\uff09\uff0c\u8bf7\u5c06\u66f4\u6539pin\u6dfb\u52a0\u5230\uff01 \n[probe]\npin: ^SHT36:gpio3            # \u4fe1\u53f7\u63a5\u53e3\nx_offset: 0                  # X\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\ny_offset: 25.0               # Y\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\nz_offset: 0                  # Z\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\nspeed: 10.0                  # \u8c03\u5e73\u901f\u5ea6\nsamples: 3                   # \u91c7\u6837\u6b21\u6570\nsamples_result: median       # \u53d6\u503c\u65b9\u5f0f\uff08\u9ed8\u8ba4median-\u4e2d\u4f4d\u6570\uff09\nsample_retract_dist: 4.0     # \u8c03\u5e73\u56de\u7f29\u8ddd\u79bb\nsamples_tolerance: 0.006     # \u91c7\u6837\u516c\u5dee\uff08\u6ce8\u610f\u8fc7\u5c0f\u7684\u503c\u53ef\u80fd\u9020\u6210\u91c7\u6837\u6b21\u6570\u589e\u52a0\uff09\nsamples_tolerance_retries: 3 # \u8d85\u516c\u5dee\u91cd\u8bd5\u6b21\u6570\n\n#--------------------------------------------------------------------\n#[bltouch]\n#sensor_pin: ^SHT36:gpio3     # \u4fe1\u53f7\u63a5\u53e3\n#control_pin: SHT36:gpio7     # \u8235\u673a\u63a7\u5236\n#x_offset: -26.1              # X\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\uff0c\u9700\u8981\u81ea\u884c\u786e\u5b9a\u504f\u79fb\u91cf\n#y_offset: -15.3              # Y\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\uff0c\u9700\u8981\u81ea\u884c\u786e\u5b9a\u504f\u79fb\u91cf\n#z_offset: 2.1                # Z\u8f74-\u4f20\u611f\u5668\u76f8\u5bf9\u55b7\u5634\u504f\u79fb\u91cf\uff0c\u9700\u8981\u81ea\u884c\u786e\u5b9a\u504f\u79fb\u91cf\n\n#####################################################################\n#                          \u78c1\u89d2\u5ea6\u4f20\u611f\u5668\n#####################################################################\n## \u78c1\u89d2\u5ea6\u4f20\u611f\u5668\n## \u76f8\u5173\u8bf4\u660e\u8bf7\u53c2\u8003https://www.klipper3d.org/API_Server.html#angledump_angle \n## https://www.klipper3d.org/Debugging.html#motion-analysis-and-data-logging\n# [angle my_angle_sensor]\n# sensor_type: as5047d\n# #sample_period: 0.000400\n# stepper: stepper_x\n# cs_pin: SHT36:gpio17\n# spi_bus: spi1\n# # spi_software_sclk_pin: SHT36:PA5\n# # spi_software_mosi_pin: SHT36:PA7\n# # spi_software_miso_pin: SHT36:PA6\n\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>p});var s=t(96540);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);